import { defineConfig } from 'vite'
const { createVuePlugin } = require('../dist')

const config = defineConfig({
  resolve: {
    alias: {
      '/@': __dirname,
    },
  },
  build: {
    minify: false,
  },
  plugins: [createVuePlugin({ jsx: true })],
})

export default config
