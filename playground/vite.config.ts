import { defineConfig } from 'vite'
const { createVuePlugin } = require('../dist')

const config = defineConfig({
  plugins: [createVuePlugin({ jsx: true })],
})

export default config
