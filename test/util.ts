import fs from 'fs-extra'
import path from 'path'
import execa from 'execa'
import puppeteer, { ElementHandle } from 'puppeteer'

let devServer: any
let browser: puppeteer.Browser
let page: puppeteer.Page
let binPath: string
const fixtureDir = path.join(__dirname, '../playground')
const tempDir = path.join(__dirname, '../temp')

export async function preTest() {
  try {
    await fs.remove(tempDir)
  } catch (e) {}
  await fs.copy(fixtureDir, tempDir, {
    filter: (file) => !/dist|node_modules/.test(file),
  })
  await execa('yarn', { cwd: tempDir })
  binPath = path.resolve(tempDir, './node_modules/vite/bin/vite.js')

  await build()
}

async function build() {
  console.log('building...')
  const buildOutput = await execa(binPath, ['build'], {
    cwd: tempDir,
  })
  expect(buildOutput.stderr).toBe('')
  console.log('build complete. running build tests...')
}

export async function postTest() {
  try {
    await fs.remove(tempDir)
  } catch (e) {}
}

export async function startServer(isBuild: boolean) {
  // start dev server
  devServer = execa(binPath, {
    cwd: isBuild ? path.join(tempDir, '/dist') : tempDir,
  })

  browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  await new Promise((resolve) => {
    devServer.stdout.on('data', (data: Buffer) => {
      if (data.toString().match('running')) {
        console.log('dev server running.')
        resolve('')
      }
    })
  })

  console.log('launching browser')
  page = await browser.newPage()
  await page.goto('http://localhost:3000')
}

export async function killServer() {
  if (browser) await browser.close()
  if (devServer) {
    devServer.kill('SIGTERM', {
      forceKillAfterTimeout: 2000,
    })
  }
}

const getEl = async (selectorOrEl: string | ElementHandle) => {
  return typeof selectorOrEl === 'string'
    ? await page.$(selectorOrEl)
    : selectorOrEl
}

const getText = async (selectorOrEl: string | ElementHandle) => {
  const el = await getEl(selectorOrEl)
  return el ? el.evaluate((el) => el.textContent) : null
}

const getComputedColor = async (selectorOrEl: string | ElementHandle) => {
  return (await getEl(selectorOrEl))!.evaluate(
    // @ts-ignore
    (el) => getComputedStyle(el).color
  )
}

const timeout = (n: number) => new Promise((r) => setTimeout(r, n))

async function updateFile(file: string, replacer: (content: string) => void) {
  const compPath = path.join(tempDir, file)
  const content = await fs.readFile(compPath, 'utf-8')
  await fs.writeFile(compPath, replacer(content))
}

// poll until it updates
async function expectByPolling(poll: () => Promise<any>, expected: any) {
  const maxTries = 100
  for (let tries = 0; tries < maxTries; tries++) {
    const actual = (await poll()) || ''
    if (actual.indexOf(expected) > -1 || tries === maxTries - 1) {
      expect(actual).toMatch(expected)
      break
    } else {
      await timeout(50)
    }
  }
}

export function declareTests(isBuild: boolean) {
  if (!isBuild) {
    test('hmr (vue re-render)', async () => {
      const button = await page.$('.hmr-increment')
      await button!.click()
      expect(await getText(button!)).toMatch('>>> 1 <<<')

      await updateFile('hmr/TestHmr.vue', (content) =>
        content.replace('{{ count }}', 'count is {{ count }}')
      )
      // note: using the same button to ensure the component did only re-render
      // if it's a reload, it would have replaced the button with a new one.
      await expectByPolling(() => getText(button!), 'count is 1')
    })

    test('hmr (vue reload)', async () => {
      await updateFile('hmr/TestHmr.vue', (content) =>
        content.replace('count: 0', 'count: 1337')
      )
      await expectByPolling(() => getText('.hmr-increment'), 'count is 1337')
    })
  }

  // if (!isBuild) {
  //   test('hmr (style removal)', async () => {
  //     await updateFile('css/TestPostCss.vue', (content) =>
  //       content.replace(/<style>(.|\s)*<\/style>/, ``)
  //     )
  //     await expectByPolling(
  //       () => getComputedColor('.postcss-from-sfc'),
  //       'rgb(0, 0, 0)'
  //     )
  //   })
  // }

  test('SFC <style scoped>', async () => {
    const el = await page.$('.style-scoped')
    expect(await getComputedColor(el!)).toBe('rgb(138, 43, 226)')
    if (!isBuild) {
      await updateFile('css/TestScopedCss.vue', (content) =>
        content.replace('rgb(138, 43, 226)', 'rgb(0, 0, 0)')
      )
      await expectByPolling(() => getComputedColor(el!), 'rgb(0, 0, 0)')
    }
  })

  test('SFC <style module>', async () => {
    const el = await page.$('.css-modules-sfc')
    expect(await getComputedColor(el!)).toBe('rgb(0, 0, 255)')
    if (!isBuild) {
      await updateFile('css/TestCssModules.vue', (content) =>
        content.replace('color: blue;', 'color: rgb(0, 0, 0);')
      )
      // css module results in component reload so must use fresh selector
      await expectByPolling(
        () => getComputedColor('.css-modules-sfc'),
        'rgb(0, 0, 0)'
      )
    }
  })

  test('SFC <custom>', async () => {
    expect(await getText('.custom-block')).toMatch('Custom Block')
    expect(await getText('.custom-block-lang')).toMatch('Custom Block')
    expect(await getText('.custom-block-src')).toMatch('Custom Block')
  })

  test('SFC src imports', async () => {
    expect(await getText('.src-imports-script')).toMatch('src="./script.ts"')
    const el = await getEl('.src-imports-style')
    expect(await getComputedColor(el!)).toBe('rgb(119, 136, 153)')
    if (!isBuild) {
      // test style first, should not reload the component
      await updateFile('src-import/style.css', (c) =>
        c.replace('rgb(119, 136, 153)', 'rgb(0, 0, 0)')
      )
      await expectByPolling(() => getComputedColor(el!), 'rgb(0, 0, 0)')
      // script
      await updateFile('src-import/script.ts', (c) => c.replace('hello', 'bye'))
      await expectByPolling(() => getText('.src-imports-script'), 'bye from')
      // template
      // todo fix test, file change is only triggered one event.
      // src/node/server/serverPluginHmr.ts is not triggered, maybe caused by chokidar
      // await updateFile('src-import/template.html', (c) =>
      //   c.replace('gray', 'red')
      // )
      // await expectByPolling(
      //   () => getText('.src-imports-style'),
      //   'This should be light red'
      // )
    }
  })

  test('Jsx', async () => {
    expect(await getText('.jsx')).toMatch('JSX works!')
  })

  test('JsxSFC', async () => {
    expect(await getText('.jsx-sfc')).toMatch('JSX & SFC works!')
  })
}
