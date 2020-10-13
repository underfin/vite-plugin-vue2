const { createVuePlugin } = require('../dist')

const config = {
  plugins: [createVuePlugin({ jsx: true })],
}

export default config
