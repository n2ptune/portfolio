<template>
  <div :style="{ height: innerHeight + 'px' }">
    <Nuxt />
    <BottomLeft />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    innerHeight: 0
  }),

  mounted() {
    window.addEventListener('resize', this.resizeLayout)
    this.resizeLayout()
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.resizeLayout)
  },

  methods: {
    resizeLayout() {
      this.innerHeight = window.innerHeight
    }
  }
})
</script>
