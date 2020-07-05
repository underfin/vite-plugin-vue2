<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 2 + Vite" />
    <h2>Scoped css</h2>
    <div class="scoped">scoped css works!</div>
<!--    <h2>Module css</h2>-->
<!--    <div :class="$style.module">module css works!</div>-->
    <SrcImport/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SrcImport from './components/SrcImport.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SrcImport
  }
}
</script>

<style scoped>
  .scoped {
    color: blue;
  }
</style>


<!--<style module>-->
<!--  .module {-->
<!--    color: blue;-->
<!--  }-->
<!--</style>-->
