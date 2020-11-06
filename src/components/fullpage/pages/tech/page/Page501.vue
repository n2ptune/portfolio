<template>
  <PageLayout :key="$vnode.key" class="light" nocss>
    <div class="w-full h-full px-6 flex flex-col justify-center items-center">
      <div class="text-4xl md:text-5xl font-bold mb-2">안녕하세요 :)</div>
      <div class="text-line">
        <p>
          저는 <strong>HTML5, CSS3, Javascript(ES6+)</strong>를 기반으로 웹의
          전반적인
        </p>
        <p>
          지식을 가지고 있으며 특히 <strong>Vue</strong>를 사용한
          <strong>Single Page Application</strong>
        </p>
        <p>개발에 자신있습니다.</p>
      </div>
      <div class="text-line">
        <p>
          그 외, <strong>React</strong> 혹은 <strong>Nuxt</strong>에 관심이
          많으며 새로운 기술/지식 등에 있어서
        </p>
        <p>도전적인 정신을 가지고 매일 공부하고 있습니다.</p>
      </div>
      <div class="text-line">
        <p>여러분들과 함께 성장하고 싶습니다. 감사합니다.</p>
      </div>
      <div class="resume mt-2">
        <button
          class="inline-block py-2 px-6 rounded-full border text-white-f bg-purple-500 transition-all duration-300 transform focus:outline-none hover:-translate-y-1 hover:bg-purple-600"
        >
          <a href="mailto://vue2598@gmail.com">
            Mail
            <fa :icon="['fas', 'envelope']" class="ml-1" size="lg" />
          </a>
        </button>
        <button
          class="inline-block py-2 px-6 ml-1 rounded-full border text-white-f bg-purple-500 transition-all duration-300 transform focus:outline-none hover:-translate-y-1 hover:bg-purple-600"
        >
          <a href="https://github.com/n2ptune" target="_blank">
            Github
            <fa :icon="['fab', 'github']" class="ml-1" size="lg" />
          </a>
        </button>
      </div>
    </div>
  </PageLayout>
</template>

<script>
import IOMixins from '~/components/fullpage/mixins/IOMixins'

export default {
  mixins: [IOMixins],

  props: {
    active: {
      type: Boolean
    }
  }
}
</script>

<style lang="postcss" scoped>
.text-line {
  @apply text-base text-center mb-3;

  @screen lg {
    @apply text-lg;
  }

  & strong {
    @apply text-purple-600 underline;
  }
}
</style>
