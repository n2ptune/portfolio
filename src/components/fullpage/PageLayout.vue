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
.page-padding {
  @apply bg-dark-surface text-white-max p-4;

  @screen md {
    @apply p-6;
  }

  @screen lg {
    @apply p-24;
  }
}
</style>
