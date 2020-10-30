import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      currentIndex: 0,
      fullpage: {
        opts: {
          dir: '',
          movingFlag: true
        }
      }
    }
  },

  computed: {
    isParent(): boolean {
      return this.fullpage.opts.dir === 'v'
    }
  },

  mounted() {
    window.setTimeout(() => {
      // @ts-ignore
      this.fullpage = this.$refs[this.refName].$fullpage

      if (!this.isParent) {
        this.$emit('register-child', this.fullpage)
      }

      // @ts-ignore
      // 지연 옵션 바인딩
      // 스크롤 시작하기 전
      this.fullpage.opts.beforeChange = (
        _el: HTMLElement,
        _current: number,
        next: number
      ): boolean | void => {
        this.currentIndex = next
      }

      // @ts-ignore
      // 스크롤이 끝날 때
      this.fullpage.opts.afterChange = (
        _el: HTMLElement,
        _current: number
      ) => {}
    }, 0)
  },

  methods: {
    moveTo(index: number) {
      // @ts-ignore
      this.fullpage.moveTo(index, true, true)
    }
  }
})
