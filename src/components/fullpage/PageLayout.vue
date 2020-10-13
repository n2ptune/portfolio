<template>
  <div
    :class="[`page-${$vnode.key}`, nocss ? '' : 'page-padding']"
    class="page"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    nocss: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss" scoped>
.page {
  @apply bg-dark-surface text-white-max;

  &.light {
    @apply text-dark-surface;

    background-color: #fff;
  }
}

.page-padding {
  @apply p-4;

  @screen md {
    @apply p-6;
  }

  @screen lg {
    @apply p-24;
  }
}
</style>
