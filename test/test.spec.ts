import {
  preTest,
  postTest,
  declareTests,
  startServer,
  killServer,
} from './util'

jest.setTimeout(100000)

beforeAll(async () => {
  await preTest()
})

afterAll(postTest)

describe('vite-plugin-vue2', () => {
  describe('dev', () => {
    beforeAll(async () => {
      await startServer(false)
    })

    afterAll(async () => {
      await killServer()
    })

    declareTests(false)
  })

  describe('build', () => {
    beforeAll(async () => {
      await startServer(true)
    })

    afterAll(async () => {
      await killServer()
    })

    declareTests(true)
  })
})
