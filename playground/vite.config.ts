import { defineConfig } from 'vite'
const { createVuePlugin } = require('../dist')

const config = defineConfig({
  resolve: {
    alias: {
      '/@': __dirname,
    },
  },
  build: {
    sourcemap: true,
    minify: false,
    rollupOptions: {
      onwarn(warning, warningHandler) {
        if (warning.code === 'SOURCEMAP_BROKEN') {
          // TODO generate sourcemap
          return
        }
        warningHandler(warning)
      },
    },
  },
  plugins: [
    createVuePlugin({ jsx: true }),
    {
      name: 'customBlock',
      transform(code, id) {
        if (/type=custom/i.test(id)) {
          const transformedAssginment = code
            .trim()
            .replace(/export default/, 'const __customBlock =')
          return {
            code: `${transformedAssginment}
              export default function (component) {
              const options = component.options;
              if (!options.__customBlock) {
                options.__customBlock = {};
              }
              Object.assign(options.__customBlock, __customBlock);
            }`,
            map: null,
          }
        }
      },
    },
  ],
})

export default config
