# vite-plugin-vue2

## Usage

- run `yarn add vite-plugin-vue2 --dev`
- add the plugin into `vite.config.js`
``` js
// vite.config.js
const { createVuePlugin } = require('vite-plugin-vue2')

module.exports = {
  plugins: [createVuePlugin(/*options*/)],
}
```

## [Options](https://github.com/underfin/vite-plugin-vue2/blob/master/src/index.ts#L7)

### `vueTemplateOptions`

Type: `Object`<br>
Default: `null`

The options for `@vue/component-compiler-utils`.

### `rollupPluginVueOptions`

Type: `Object`<br>
Default: `null`

The options for `rollup-plugin-vue`.

### `jsx`

Type: `Boolean`<br>
Default: `false`

The options for jsx transform.

## Todo

- Custom Block
- SSR Build
