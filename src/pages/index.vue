<template>
  <!-- <client-only>
    <div class="fullpage-container">
      <button class="next" @click="moveNext">Move Next</button>
      <div ref="example" v-fullpage="opts" class="fullpage-wp">
        <div class="page">
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
    </div>
  </client-only> -->
  <Container />
</template>

<script lang="ts">
import Vue from 'vue'
import Container from '@/components/fullpage/Container.vue'

export default Vue.extend({
  components: {
    Container
  },

  data() {
    return {
      opts: {
        dir: 'v',
        // @ts-ignore
        beforeChange: (currentSlideEL, prev, next) => {
          console.log(currentSlideEL, prev, next)
        }
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
.fullpage-container {
  & .next {
    bottom: 15px;
    right: 15px;

    @apply fixed z-10 bg-white block;
  }
}

.fullpage-wp {
  & .page-1 {
    @apply bg-red-300;
  }

  & .page-2 {
    @apply bg-purple-300;
  }

  & .page-3 {
    @apply bg-gray-300;
  }
}
</style>
