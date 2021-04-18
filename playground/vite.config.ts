import { defineConfig } from 'vite'
const { createVuePlugin } = require('../dist')

const config = defineConfig({
  resolve: {
    alias: {
      '/@': __dirname,
    },
  },
  build: {
    // sourcemap: true,
    minify: false,
  },
  plugins: [
    createVuePlugin({ jsx: true }),
    {
      name: 'customBlock',
      transform(code, id) {
        if (/type=custom/i.test(id)) {
          return {
            code: `export default function (component) {
              const options = component.options;
              if (!options.__customBlock) {
                options.__customBlock = {};
              }
              Object.assign(options.__customBlock, ${code.trim()});
            }`,
          }
        }
      },
    },
  ],
})

export default config
