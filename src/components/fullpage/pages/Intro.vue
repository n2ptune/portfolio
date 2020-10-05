<template>
  <PageLayout :key="$vnode.key">
    <div class="intro-outer">
      <div class="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
        <p>2020</p>
        <p>Portfolio</p>
      </div>
      <div>Heading</div>
      <div class="break"></div>
      <div>Hello</div>
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

<style lang="postcss" scoped>
.intro-outer {
  @apply flex flex-wrap h-full p-2 relative justify-between;

  & .break {
    flex-basis: 100%;
    height: 0;
  }
}

@screen md {
  .intro-outer {
    @apply p-4;
  }
}

@screen lg {
  .intro-outer {
    @apply p-8;
  }
}
</style>
