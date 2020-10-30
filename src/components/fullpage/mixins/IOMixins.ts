import Vue from 'vue'
import { EventBus } from '../pages/utils/ScrollEventBus'

interface IOMixinsData {
  _ioRef: null | IntersectionObserver
  [key: string]: any
}

export default Vue.extend({
  data: () =>
    ({
      _ioRef: null
    } as IOMixinsData),

  mounted() {
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries, _observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              EventBus.$data.isDark = false
            } else {
              EventBus.$data.isDark = true
            }
          })
        },
        { threshold: 1.0 }
      )

      io.observe(this.$el)
      this._ioRef = io
    }
  },

  beforeDestroy() {
    this._ioRef?.unobserve(this.$el)
  }
})
