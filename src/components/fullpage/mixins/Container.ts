import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      currentIndex: 0
    }
  },

  mounted() {
    window.setTimeout(() => {
      // @ts-ignore
      // 지연 옵션 바인딩
      this.$refs[this.refName].$fullpage.opts.beforeChange = (
        _el: HTMLElement,
        _currnet: number,
        next: number
      ): void => {
        this.currentIndex = next
      }
    }, 0)
  }
})
