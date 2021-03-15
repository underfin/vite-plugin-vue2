<template>
  <div>
    <TestSFCJsx :dom="message" />
  </div>
</template>

<script lang="jsx">
import TestSFCJsx from "./TestPropsJsx.tsx";
export default {
  name: 'TesxVueJSX',
  data() {
    return {
      message: () => <div>JSX in SFC works!</div>,
    };
  },
  components: {
      TestSFCJsx
  }
}
</script>
