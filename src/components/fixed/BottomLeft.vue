<template>
  <div :class="isDark ? 'dark' : 'light'" class="bottom-left">
    <p><strong>드래그</strong>로 페이지를 이동</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { EventBus } from '@/components/fullpage/pages/utils/ScrollEventBus.ts'

export default Vue.extend({
  computed: {
    isDark() {
      return EventBus.$data.isDark
    }
  }
})
</script>

<style lang="postcss" scoped>
.bottom-left {
  @apply fixed text-sm transition-colors duration-300 hidden;

  bottom: 10px;
  left: 10px;

  @screen md {
    @apply block;
  }

  &.dark {
    @apply text-white-max;
  }

  &.light {
    @apply text-dark-surface;
  }
}
</style>
