# vite-plugin-vue2

[![NPM version](https://img.shields.io/npm/v/vite-plugin-vue2?color=a1b858&label=)](https://www.npmjs.com/package/vite-plugin-vue2)

## Install

```bash
npm install vite-plugin-vue2 -D
```

```js
// vite.config.js
import { createVuePlugin } from 'vite-plugin-vue2'

export default {
  plugins: [
    createVuePlugin(/* options */)
  ],
}
```

## [Options](https://github.com/underfin/vite-plugin-vue2/blob/master/src/index.ts#L26)

### `vueTemplateOptions`

Type: `Object`<br>
Default: `null`

The options for `@vue/component-compiler-utils`.

### `jsx`

Type: `Boolean`<br>
Default: `false`

The options for jsx transform.

### `jsxOptions`

Type: `Object`<br>

The options for `@vue/babel-preset-jsx`.

### `target`

Type: `String`<br>

The options for esbuild to transform script code

## Todo

- SSR Build
- Sourcemap
