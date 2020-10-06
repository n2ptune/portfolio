<template>
  <client-only>
    <div class="fullpage-container">
      <Steps :idx="currentIndex" :range="pages.length" @moveTo="moveTo" />
      <div ref="fp" v-fullpage="opts" class="fullpage-wp">
        <component :is="page" v-for="(page, index) in pages" :key="index" />
      </div>
    </div>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue'
import Intro from '@/components/fullpage/pages/Intro.vue'
import Steps from '@/components/fullpage/Steps.vue'

export default Vue.extend({
  components: {
    Intro,
    Steps
  },

  data() {
    return {
      currentIndex: 0,
      opts: {}
    }
  },

  computed: {
    pages() {
      return [Intro, Intro, Intro, Intro, Intro]
    }
  },

  mounted() {
    window.setTimeout(() => {
      // @ts-ignore
      // 지연 옵션 바인딩
      this.$refs.fp.$fullpage.opts.beforeChange = (
        _el: HTMLElement,
        _currnet: number,
        next: number
      ): void => {
        this.currentIndex = next
      }
    }, 0)
  },

  methods: {
    moveTo(index: number) {
      // @ts-ignore
      this.$refs.fp.$fullpage.moveTo(index, true, false)
    }
  }
})
</script>
