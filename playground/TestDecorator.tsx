import type { VNode } from 'vue'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TestDecorator extends Vue {
  render(): VNode {
    return <div>Decorator works!</div>
  }
}
