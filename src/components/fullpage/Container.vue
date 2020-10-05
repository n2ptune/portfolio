<template>
  <client-only>
    <div class="fullpage-container">
      <div ref="fp" v-fullpage="options" class="fullpage-wp">
        <component :is="page" v-for="(page, index) in pages" :key="index" />
      </div>
    </div>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue'
import Intro from '@/components/fullpage/pages/Intro.vue'

export default Vue.extend({
  components: {
    Intro
  },

  data() {
    return {
      options: {
        beforeChange(el: HTMLElement, current: number, next: number) {
          console.warn(el, current, next)
        }
      }
    }
  },

  computed: {
    pages() {
      return [Intro]
    }
  }
})
</script>
