<template>
  <PageLayout :key="$vnode.key" nocss>
    <div class="inner">
      <div class="inner-left">
        <div class="inner-left-content">Content Test</div>
      </div>
      <div class="inner-right">
        <div class="inner-right-image"></div>
      </div>
    </div>
  </PageLayout>
</template>

.
<style lang="postcss" scoped>
.inner {
  @apply flex justify-between flex-wrap h-full;

  &-left {
    @apply relative;

    flex-basis: 100%;
    z-index: 3;

    @screen lg {
      flex-basis: 60%;
    }

    &::after {
      @apply hidden;

      @screen lg {
        @apply w-full absolute block bg-dark-surface;

        content: '';
        height: 200vh;
        transform: rotate(6deg);
        z-index: 2;
        top: -20rem;
        right: -3rem;
      }
    }

    &-content {
      @apply flex justify-center items-center text-2xl relative h-full;

      z-index: 4;
    }
  }

  &-right {
    @apply text-gray-1000 relative;

    flex-basis: 100%;
    z-index: 1;

    @screen lg {
      flex-basis: 40%;
    }

    &-image {
      @apply w-full h-full;

      background-image: url('~@/assets/images/mockup-fairy-full-height-screen.jpg');
      background-repeat: no-repeat;
      background-position: 45% center;
      background-size: cover;
    }
  }
}
</style>
