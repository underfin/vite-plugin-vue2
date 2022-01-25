const cssLangs = `\\.(css|less|sass|scss|styl|stylus|pcss|postcss)($|\\?)`
const cssLangRE = new RegExp(cssLangs)

export const isCSSRequest = (request: string): boolean =>
  cssLangRE.test(request)
