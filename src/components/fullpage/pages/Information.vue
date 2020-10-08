<template>
  <PageLayout :key="$vnode.key">
    <div class="left">Left</div>
    <transition>
      <div v-show="active" class="right">Right</div>
    </transition>
  </PageLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import PageLayout from '@/components/fullpage/PageLayout.vue'

export default Vue.extend({
  components: {
    PageLayout
  },

  props: {
    active: {
      type: Boolean
    }
  }
})
</script>

<style lang="postcss" scoped>
.page {
  @apply flex p-0;

  & .left {
    @apply w-1/3;
  }

  & .right {
    @apply w-2/3 bg-white-200;
  }
}
</style>
