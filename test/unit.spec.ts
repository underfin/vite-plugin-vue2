import path from 'path'
import fs from 'fs-extra'
import { transformMain } from '../src/main'

const fixtureDir = path.join(__dirname, '../playground')

jest.setTimeout(100000)

describe('vite-plugin-vue2', () => {
  describe('unit', () => {
    test('should genScriptCode return complete sourcemap when lang=ts', async() => {
      const filePath = path.join(fixtureDir, 'TestTsSFC.vue')
      const code = fs.readFileSync(filePath).toString()
      const { map: scriptMap } = await transformMain(
        code,
        filePath,
        {
          isProduction: false,
          root: fixtureDir,
          // @ts-expect-error need mock if it will be used in the future
          devServer: {},
        },
        {},
      )
      expect(scriptMap).toHaveProperty('file')
      expect(scriptMap).toHaveProperty('sourcesContent')
      expect(scriptMap!.file).toEqual(filePath)
      expect(scriptMap!.sourcesContent).toEqual([code])
    })
  })
})
