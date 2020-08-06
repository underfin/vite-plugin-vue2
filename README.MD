# vite-plugin-vue2
**Current status: experimental**

You can use it in dev now.

## Usage

- run `yarn add vite-plugin-vue2`
- add the plugin into `vite.config.js`
``` js
// vite.config.js
const { createVuePlugin } = require('vite-plugin-vue2')

module.exports = {
  plugins: [createVuePlugin()],
}
```

## Todo

- Build Src Import handing
- Custom Block
