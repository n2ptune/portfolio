<template>
  <PageLayout :key="$vnode.key">
    <p>Hello Intro Page</p>
  </PageLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import PageLayout from '@/components/fullpage/PageLayout.vue'

export default Vue.extend({
  components: {
    PageLayout
  }
})
</script>

<style lang="postcss" scoped>
.page {
  @apply bg-red-300;
}
</style>
