<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 2 + Vite" />
    <h2>Scoped css</h2>
    <div class="scoped">scoped css works!</div>
<!--    <h2>Module css</h2>-->
<!--    <div :class="$style.module">module css works!</div>-->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
