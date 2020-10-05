<template>
  <Container />
</template>

<script lang="ts">
import Vue from 'vue'
import Container from '@/components/fullpage/Container.vue'

export default Vue.extend({
  components: {
    Container
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
