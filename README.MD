# vite-plugin-vue2

## Usage

- run `yarn add vite-plugin-vue2 --dev`
- add the plugin into `vite.config.js`
``` js
// vite.config.js
const { createVuePlugin } = require('vite-plugin-vue2')

module.exports = {
  plugins: [createVuePlugin()],
}
```

## Todo

- JSX handing
- Custom Block
- SSR Build
