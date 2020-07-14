const { createVuePlugin } = require('../dist')

const config = {
  plugins: [createVuePlugin()],
}

export default config
