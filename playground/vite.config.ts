import { defineConfig } from 'vite'
const { createVuePlugin } = require('../dist')

const config = defineConfig({
  build: {
    minify: false,
  },
  plugins: [createVuePlugin({ jsx: true })],
})

export default config
