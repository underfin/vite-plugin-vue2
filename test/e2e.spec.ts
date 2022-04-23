import type puppeteer from 'puppeteer'
import {
  expectByPolling,
  getComputedColor,
  getEl,
  getText,
  killServer,
  postTest,
  preTest,
  startServer,
  updateFile,
} from './util'

jest.setTimeout(100000)

beforeAll(async() => {
  await preTest()
})

afterAll(postTest)

describe('vite-plugin-vue2', () => {
  describe('dev', () => {
    declareTests(false)
  })

  describe('build', () => {
    declareTests(true)
  })
})

export function declareTests(isBuild: boolean) {
  let page: puppeteer.Page = undefined!

  beforeAll(async() => {
    page = await startServer(isBuild)
  })

  afterAll(async() => {
    await killServer()
  })

  if (!isBuild) {
    test('hmr (vue re-render)', async() => {
      const button = await page.$('.hmr-increment')
      await button!.click()
      expect(await getText(button!)).toMatch('>>> 1 <<<')

      await updateFile('hmr/TestHmr.vue', content =>
        content.replace('{{ count }}', 'count is {{ count }}'),
      )
      // note: using the same button to ensure the component did only re-render
      // if it's a reload, it would have replaced the button with a new one.
      await expectByPolling(() => getText(button!), 'count is 1')
    })

    test('hmr (vue reload)', async() => {
      await updateFile('hmr/TestHmr.vue', content =>
        content.replace('count: 0', 'count: 1337'),
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

  test('SFC <style scoped>', async() => {
    const el = await page.$('.style-scoped')
    expect(await getComputedColor(el!)).toBe('rgb(138, 43, 226)')
    if (!isBuild) {
      await updateFile('css/TestScopedCss.vue', content =>
        content.replace('rgb(138, 43, 226)', 'rgb(0, 0, 0)'),
      )
      await expectByPolling(() => getComputedColor(el!), 'rgb(0, 0, 0)')
    }
  })

  test('SFC <style module>', async() => {
    const el = await page.$('.css-modules-sfc')
    expect(await getComputedColor(el!)).toBe('rgb(0, 0, 255)')
    if (!isBuild) {
      await updateFile('css/TestCssModules.vue', content =>
        content.replace('color: blue;', 'color: rgb(0, 0, 0);'),
      )
      // css module results in component reload so must use fresh selector
      await expectByPolling(
        () => getComputedColor('.css-modules-sfc'),
        'rgb(0, 0, 0)',
      )
    }
  })

  test('SFC <custom>', async() => {
    expect(await getText('.custom-block')).toMatch('Custom Block')
    expect(await getText('.custom-block-lang')).toMatch('Custom Block')
    expect(await getText('.custom-block-src')).toMatch('Custom Block')
  })

  test('SFC src imports', async() => {
    expect(await getText('.src-imports-script')).toMatch('src="./script.ts"')
    const el = await getEl('.src-imports-style')
    expect(await getComputedColor(el!)).toBe('rgb(119, 136, 153)')
    if (!isBuild) {
      // test style first, should not reload the component
      await updateFile('src-import/style.css', c =>
        c.replace('rgb(119, 136, 153)', 'rgb(0, 0, 0)'),
      )
      await expectByPolling(() => getComputedColor(el!), 'rgb(0, 0, 0)')
      // script
      await updateFile('src-import/script.ts', c => c.replace('hello', 'bye'))
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

  test('Jsx', async() => {
    expect(await getText('.jsx')).toMatch('JSX works!')
  })

  test('JsxSFC', async() => {
    expect(await getText('.jsx-sfc')).toMatch('JSX & SFC works!')
  })
}
