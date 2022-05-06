<script>
import TestMultiplySrcImport from './src-import/TestMultiplySrcImport.vue'
import TestBlockSrcImport from './src-import/TestBlockSrcImport.vue'
import TestScopedCss from './css/TestScopedCss.vue'
import TestCssModules from './css/TestCssModules.vue'
import TestEmptyCss from './css/TestEmptyCss.vue'
import TestCustomBlock from './custom/TestCustomBlock.vue'
import TestHmr from './hmr/TestHmr.vue'
import TestAssets from './test-assets/TestAssets.vue'
import TestJsx from './TestJsx.tsx'
import TestJsxSFC from './TestJsxSFC.vue'
import TestDecorator from './TestDecorator.tsx'
import TestES2020Features from './TestES2020Features.vue'

export default {
  name: 'App',
  components: {
    TestMultiplySrcImport,
    TestScopedCss,
    TestBlockSrcImport,
    TestCssModules,
    TestEmptyCss,
    TestCustomBlock,
    TestHmr,
    TestAssets,
    TestJsx,
    TestJsxSFC,
    TestDecorator,
    TestES2020Features,
  },
}
</script>

<template>
  <div>
    <h1>Vite-Plugin-Vue2 Playground</h1>
    <TestMultiplySrcImport />
    <TestBlockSrcImport />
    <TestScopedCss />
    <TestCssModules />
    <TestCustomBlock />
    <TestEmptyCss />
    <TestHmr />
    <TestAssets />
    <TestJsx />
    <TestJsxSFC />
    <TestDecorator />
    <TestES2020Features />
  </div>
</template>
