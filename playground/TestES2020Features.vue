<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TestES2020Features',

  data() {
    return {
      spreadArray: ['s', 'p', 'r', 'ead'],
    }
  },

  computed: {
    nullish() {
      return {
        a: {
          d: undefined as unknown as undefined | { e: string },
          b: {
            c: '2',
          },
        },
      }
    },
  },
})
</script>

<template>
  <div>
    <h2>ES2020 Features</h2>
    <h3>Nullish Coalescing and Optional Chaining</h3>
    <code>
      [nullish.a.b.c.d ?? 'not found']
      <br>
      //returns {{ nullish.a.d?.e ?? 'not found' }}
      <br>
      <br>
      [nullish.a.b.c ?? 'not found']
      <br>
      //returns {{ nullish.a.b.c ?? 'not found' }}
    </code>
    <h3>Spread Operator</h3>
    <code>
      ["Test", 1, ...('abc').split('')]
      <br>
      //returns {{ ['Test', 1, ...'abc'.split('')] }}
    </code>
  </div>
</template>
