import path from 'path'
import slash from 'slash'
import hash from 'hash-sum'
import { parse, SFCDescriptor } from '@vue/component-compiler-utils'
import * as vueTemplateCompiler from 'vue-template-compiler'
import { ResolvedOptions } from '../index'

const cache = new Map<string, SFCDescriptor>()
const prevCache = new Map<string, SFCDescriptor | undefined>()

export function createDescriptor(
  source: string,
  filename: string,
  { root, isProduction, vueTemplateOptions }: ResolvedOptions
) {
  const descriptor = parse({
    source,
    compiler: vueTemplateOptions?.compiler || (vueTemplateCompiler as any),
    filename,
    sourceRoot: root,
    needMap: true,
  })
  // ensure the path is normalized in a way that is consistent inside
  // project (relative to root) and on different systems.
  const normalizedPath = slash(path.normalize(path.relative(root, filename)))
  descriptor.id = hash(normalizedPath + (isProduction ? source : ''))

  cache.set(filename, descriptor)
  return descriptor
}

export function getPrevDescriptor(filename: string) {
  return prevCache.get(filename)
}

export function setPrevDescriptor(filename: string, entry: SFCDescriptor) {
  prevCache.set(filename, entry)
}

export function getDescriptor(filename: string, errorOnMissing = true) {
  if (cache.has(filename)) {
    return cache.get(filename)!
  }
  if (errorOnMissing) {
    throw new Error(
      `${filename} has no corresponding SFC entry in the cache. ` +
        `This is a vite-plugin-vue2 internal error, please open an issue.`
    )
  }
}

export function setDescriptor(filename: string, entry: SFCDescriptor) {
  cache.set(filename, entry)
}
