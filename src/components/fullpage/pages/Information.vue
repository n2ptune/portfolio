<template>
  <PageLayout :key="$vnode.key">
    <div class="information-inner">
      <div class="title">
        <p>이력 및 학력</p>
      </div>
    </div>
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

<style lang="postcss" scoped></style>
