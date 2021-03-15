import Vue from "vue";

export default Vue.extend({
  name: "TestPropsJsx",
  props: {
    dom: {},
  },
  render: function (h, props) {
    return (
      <div>
        {this.dom()}
      </div>
    );
  }
});
