import Vue from 'vue'

export default Vue.extend({
  props: {
    pager: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },

  inject: ['fullpageRef', 'refVNode']
})
