<template>
  <div>
    <h1>Vite-Plugin-Vue2 Playground</h1>
    <TestBlockSrcImport/>
    <TestScopedCss/>
    <TestCssModules/>
    <TestHmr/>
    <TestAssets/>
    <TestJsx/>
  </div>
</template>

<script>
import TestBlockSrcImport from './src-import/TestBlockSrcImport.vue'
import TestScopedCss from './css/TestScopedCss.vue'
import TestCssModules from './css/TestCssModules.vue'
import TestHmr from './hmr/TestHmr.vue'
import TestAssets from './test-assets/TestAssets.vue'
import TestJsx from './TestJsx.tsx'

export default {
  name: 'App',
  components: {
    TestScopedCss,
    TestBlockSrcImport,
    TestCssModules,
    TestHmr,
    TestAssets,
    TestJsx
  }
}
</script>
