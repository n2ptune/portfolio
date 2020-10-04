<template>
  <client-only placeholder="Loading...">
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="options" ref="fp">
        <!-- pages -->
        <Intro :key="0" />
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
        beforeChange: function (
          el: HTMLElement,
          current: number,
          next: number
        ) {
          console.log(el, current, next)
        }
      }
    }
  }
})
</script>
