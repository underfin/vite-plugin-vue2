<template>
  <div>
    <p class="custom-block">{{ custom }}</p>
    <p class="custom-block-src">{{ customSrc }}</p>
  </div>
</template>

<script>
export default {
  name: 'TestCustomBlock',
  data() {
    return {
      custom: '',
      customSrc: ''
    }
  },
  created() {
    this.custom = this.$options.__customBlock.custom
    this.customSrc = this.$options.__customBlock.customSrc
  },
}
</script>

<custom>
{
  "custom": "Custom Block"
}
</custom>

<custom src="./custom.txt"></custom>