<template>
  <client-only>
    <div class="fullpage-container">
      <div ref="example" v-fullpage="opts" class="fullpage-wp">
        <div class="page-1 page">
          <p class="part-1">fullpage-vue</p>
        </div>
        <div class="page-2 page">
          <p class="part-2">fullpage-vue</p>
        </div>
        <div class="page-3 page">
          <p class="part-3">fullpage-vue</p>
          <p class="part-3">fullpage-vue</p>
          <p class="part-3">fullpage-vue</p>
        </div>
      </div>
      <button @click="moveNext">next</button>
    </div>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      opts: {
        start: 0,
        dir: 'v',
        duration: 500
      }
    }
  },

  methods: {
    moveNext() {
      ;(this.$refs.example as any).$fullpage.moveNext()
    }
  }
})
</script>

<style lang="postcss" scoped>
.fullpage-wp {
}
</style>
