<template>
  <PageLayout :key="$vnode.key">
    <div class="intro-outer">
      <div class="text-4xl lg:text-6xl font-bold leading-tight">
        <p>2020</p>
        <p>프론트엔드 개발자</p>
        <p>포트폴리오</p>
      </div>
      <div class="my-info">
        <div
          class="border-white-1000 pl-3 leading-tight"
          style="border-left-width: 3px"
        >
          <div class="text-base md:text-2xl lg:text-3xl font-bold">이경환</div>
          <div class="text-sm md:text-lg lg:text-xl font-semibold">
            LEE KYUNGHWAN
          </div>
          <div class="text-sm md:text-base mt-3">+82 10 2598 9724</div>
          <div class="text-sm md:text-base mb-3">1997. 03. 13</div>
          <div class="text-sm md:text-base">
            <a class="hover-transition" href="mailto:vue2598@gmail.com">
              vue2598@gmail.com
            </a>
          </div>
          <div class="text-sm md:text-base pb-2">
            <a class="hover-transition" href="https://imkh.dev" target="_blank">
              imkh.dev
            </a>
          </div>
        </div>
      </div>
      <!-- <div class="break"></div>
      <div class="mx-auto">Hello</div> -->
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
.page {
  @apply bg-dark-surface text-white-max;
}

.intro-outer {
  @apply flex flex-wrap h-full p-4 relative justify-between flex-col;

  & .break {
    flex-basis: 100%;
    height: 0;
  }

  & .hover-transition {
    @apply transition-colors duration-300;

    &:hover {
      color: white;
    }
  }
}

@screen md {
  .intro-outer {
    @apply p-6 flex-row;
  }
}

@screen lg {
  .intro-outer {
    @apply p-24;
  }
}
</style>
