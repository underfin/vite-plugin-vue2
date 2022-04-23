import path from 'path'
import fs from 'fs-extra'
import execa from 'execa'
import type { ElementHandle } from 'puppeteer'
import puppeteer from 'puppeteer'

let devServer: any
let browser: puppeteer.Browser
let page: puppeteer.Page
let binPath: string
const fixtureDir = path.join(__dirname, '../playground')
const tempDir = path.join(__dirname, '../temp')

export async function preTest() {
  try {
    await fs.remove(tempDir)
  }
  catch (e) {}
  await fs.copy(fixtureDir, tempDir)
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
  }
  catch (e) {}
}

export async function startServer(isBuild: boolean) {
  // start dev server
  devServer = execa(binPath, {
    cwd: isBuild ? path.join(tempDir, '/dist') : tempDir,
  })

  browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    // Enable if puppeteer can't detect chrome's path on MacOS
    // executablePath:
    // '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
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
  return page
}

export async function killServer() {
  if (browser)
    await browser.close()
  if (devServer) {
    devServer.kill('SIGTERM', {
      forceKillAfterTimeout: 2000,
    })
  }
}

export async function getEl(selectorOrEl: string | ElementHandle) {
  return typeof selectorOrEl === 'string'
    ? await page.$(selectorOrEl)
    : selectorOrEl
}

export async function getText(selectorOrEl: string | ElementHandle) {
  const el = await getEl(selectorOrEl)
  return el ? el.evaluate(el => el.textContent) : null
}

export async function getComputedColor(selectorOrEl: string | ElementHandle) {
  return (await getEl(selectorOrEl))!.evaluate(
    el => getComputedStyle(el).color,
  )
}

export const timeout = (n: number) => new Promise(resolve => setTimeout(resolve, n))

export async function updateFile(file: string, replacer: (content: string) => void) {
  const compPath = path.join(tempDir, file)
  const content = await fs.readFile(compPath, 'utf-8')
  await fs.writeFile(compPath, replacer(content))
}

// poll until it updates
export async function expectByPolling(poll: () => Promise<any>, expected: any) {
  const maxTries = 100
  for (let tries = 0; tries < maxTries; tries++) {
    const actual = (await poll()) || ''
    if (actual.includes(expected) || tries === maxTries - 1) {
      expect(actual).toMatch(expected)
      break
    }
    else {
      await timeout(50)
    }
  }
}
