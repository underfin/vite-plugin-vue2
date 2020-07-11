import { preTest, postTest, declareTests } from './util'

jest.setTimeout(100000)

describe('vite-plugin-vue2', () => {
  describe('dev', () => {
    beforeAll(async () => {
      await preTest()
    })

    afterAll(postTest)

    declareTests(false)
  })

  describe('build', () => {
    beforeAll(async () => {
      await preTest(true)
    })

    afterAll(postTest)

    declareTests(true)
  })
})
