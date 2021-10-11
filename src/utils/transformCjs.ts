import hash from 'hash-sum'
import { SourceDescription } from 'rollup'

export function transformRequireToImport(code: string): SourceDescription {
  const imports: { [key: string]: string } = {}
  let strImports = ''

  code = code.replace(
    /require\(("(?:[^"\\]|\\.)+"|'(?:[^'\\]|\\.)+')\)/g,
    (_, name): any => {
      if (!(name in imports)) {
        // #81 compat unicode assets name
        imports[name] = `__$_require_${hash(name)}__`
        strImports += 'import ' + imports[name] + ' from ' + name + ';'
      }

      return imports[name]
    }
  )

  // TODO sourcemap
  return {
    code: strImports + code,
    map: null,
  }
}
