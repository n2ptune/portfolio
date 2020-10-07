<template>
  <div :class="`page page-${$vnode.key}`">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.page {
  @apply bg-dark-surface text-white-max p-4;

  @screen md {
    @apply p-6;
  }

  @screen lg {
    @apply p-24;
  }
}
</style>
