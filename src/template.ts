import { SFCBlock } from '@vue/component-compiler-utils'
import * as vueTemplateCompiler from 'vue-template-compiler'
import { TransformPluginContext } from 'rollup'
import { ResolvedOptions } from './index'
import { createRollupError } from './utils/error'
import { compileTemplate } from './template/compileTemplate'
import { transformRequireToImport } from './utils/transformCjs'

export function compileSFCTemplate(
  source: string,
  block: SFCBlock,
  filename: string,
  { isProduction, vueTemplateOptions = {} }: ResolvedOptions,
  pluginContext: TransformPluginContext
) {
  const { tips, errors, code } = compileTemplate({
    source,
    filename,
    compiler: vueTemplateCompiler as any,
    transformAssetUrls: true,
    transformAssetUrlsOptions: {
      forceRequire: true,
    },
    isProduction,
    isFunctional: !!block.attrs.functional,
    optimizeSSR: false,
    prettify: false,
    preprocessLang: block.lang,
    ...vueTemplateOptions,
    compilerOptions: {
      whitespace: 'condense',
      ...(vueTemplateOptions.compilerOptions || {}),
    },
  })

  if (tips) {
    tips.forEach((warn) =>
      pluginContext.warn({
        id: filename,
        message: typeof warn === 'string' ? warn : warn.msg,
      })
    )
  }

  if (errors) {
    const generateCodeFrame = (vueTemplateCompiler as any).generateCodeFrame
    errors.forEach((error) => {
      // 2.6 compiler outputs errors as objects with range
      if (
        generateCodeFrame &&
        vueTemplateOptions.compilerOptions?.outputSourceRange
      ) {
        const { msg, start, end } = error as vueTemplateCompiler.ErrorWithRange
        return pluginContext.error(
          createRollupError(filename, {
            message: msg,
            frame: generateCodeFrame(source, start, end),
          })
        )
      } else {
        pluginContext.error({
          id: filename,
          message: typeof error === 'string' ? error : error.msg,
        })
      }
    })
  }

  // rewrite require calls to import on build
  return {
    code:
      transformRequireToImport(code) + `\nexport { render, staticRenderFns }`,
    map: null,
  }
}
