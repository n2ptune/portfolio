<template>
  <PageLayout :key="$vnode.key">
    <div class="intro-outer">
      <div class="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
        <p>2020</p>
        <p>Portfolio</p>
      </div>
      <div class="my-info">
        <div
          class="border-gray-600 pl-3 leading-tight"
          style="border-left-width: 3px"
        >
          <div class="text-3xl font-bold">이경환</div>
          <div class="text-xl font-semibold">LEE KYUNGHWAN</div>
          <div class="text-base mt-3">+82 10 2598 9724</div>
          <div class="text-base mb-3">1997. 03. 13</div>
          <div class="text-base">
            <a href="mailto:vue2598@gmail.com"> vue2598@gmail.com </a>
          </div>
          <div class="text-base pb-2">
            <a href="https://imkh.dev"> imkh.dev</a>
          </div>
        </div>
      </div>
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
  @apply flex flex-wrap h-full p-4 relative justify-between;

  & .break {
    flex-basis: 100%;
    height: 0;
  }
}

@screen md {
  .intro-outer {
    @apply p-6;
  }
}

@screen lg {
  .intro-outer {
    @apply p-10;
  }
}
</style>
