<template>
  <PageLayout :key="$vnode.key">
    <div class="patterns"></div>
    <transition name="fade-in-out">
      <div v-show="active" class="intro-outer">
        <div class="title">
          <p>2021</p>
          <p class="text-orange-300">프론트엔드 개발자</p>
          <p>포트폴리오</p>
        </div>
        <div class="my-info">
          <div
            class="border-white-1000 pl-3 leading-tight"
            style="border-left-width: 3px"
          >
            <div class="text-base md:text-2xl lg:text-3xl font-bold">
              n2ptune
            </div>
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
              <a
                class="hover-transition"
                href="https://imkh.dev"
                target="_blank"
              >
                imkh.dev
              </a>
            </div>
          </div>
        </div>
        <div class="break"></div>
        <div class="scroll-indicator">
          <div
            class="relative px-2 py-6 rounded-full border-2 border-white-full bottom-0"
          >
            <div class="scroll-indicator-inner"></div>
          </div>
        </div>
      </div>
    </transition>
  </PageLayout>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    active: {
      type: Boolean
    }
  }
})
</script>

<style lang="postcss" scoped>
.patterns {
  @apply fixed top-0 left-0 w-full h-full opacity-25;
  background-color: #121212;
  background-image: url('https://www.transparenttextures.com/patterns/gplay.png');
}

.intro-outer {
  @apply flex flex-wrap h-full relative justify-between flex-col;

  @screen md {
    @apply flex-row;
  }

  & .hover-transition {
    @apply transition-colors duration-300;

    &:hover {
      color: white;
    }
  }

  & .scroll-indicator {
    @apply mx-auto self-end absolute;

    bottom: 30px;
    right: 30px;

    @screen md {
      @apply relative bottom-auto right-auto;
    }

    & .scroll-indicator-inner {
      --inner-ball-size: 0.3rem;

      width: var(--inner-ball-size);
      height: var(--inner-ball-size);
      left: calc(65% - var(--inner-ball-size));
      top: 10px;
      animation-name: dropToBottom;
      animation-iteration-count: infinite;
      animation-duration: 2s;

      @apply absolute rounded-full bg-white-max;

      @keyframes dropToBottom {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
          transform: translateY(500%);
        }
      }
    }
  }
}
</style>
