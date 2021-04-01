import { transform } from '@babel/core'

// todo hmr
export function transformVueJsx(
  code: string,
  id: string,
  jsxOptions?: Record<string, any>
) {
  const plugins = []
  if (/\.tsx$/.test(id)) {
    plugins.push([
      require.resolve('@babel/plugin-transform-typescript'),
      { isTSX: true, allowExtensions: true },
    ])
  }

  const result = transform(code, {
    filename: 'jsx-transform.ts',
    presets: [[require.resolve('@vue/babel-preset-jsx'), jsxOptions]],
    sourceFileName: id,
    sourceMaps: true,
    plugins,
    babelrc: false,
  })!

  return {
    code: result.code as string,
    map: result.map as any,
  }
}
