<template>
  <PageLayout :key="$vnode.key">
    <div class="inner">
      <div class="relative z-10 lg:mx-auto">
        <div class="title">
          <p :class="signature">01</p>
          <p>한국외식음료협회</p>
          <p>웹 개발</p>
        </div>
        <div class="text-base md:text-lg max-w-lg space-y-4 py-6">
          <InformationList
            :icon="['fas', 'stream']"
            :color="signature"
            title="Overview"
            no-list
          />
          <p>대학교 재학 당시 산학 협력 활동으로 개발한 웹 페이지입니다.</p>
          <p>
            당시 HTML5, CSS, 자바스크립트의 기초 지식만 가지고 있는 상태에서
            회사에 적용되었던 기술인 ASP를 빠르게 습득하여 메인 페이지 및 다양한
            페이지를 리뉴얼 했으며 회사의 업무 일부분을 자동화 시키는 등 업무에
            필요한 여러 기능을 개발했습니다.
          </p>
        </div>
      </div>
      <div class="img-area">
        <img
          src="@/assets/images/mockup-kfba-main-2.png"
          class="kfba-main"
          alt="mockup-kfba-main"
        />
        <img
          src="@/assets/images/mockup-kfba-main-mobile.png"
          class="kfba-main-mobile"
          alt="kfba-main-mobile"
        />
      </div>
    </div>
    <MoveFlag
      v-if="pager.total > 1"
      :ref-key="fullpageRef"
      :parent-node="refVNode"
      :index="index"
      :total="pager.total"
      right-color="text-blue-400 hover:text-blue-600"
    />
  </PageLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import PageMixins from '@/components/fullpage/mixins/PageMixins'

export default Vue.extend({
  mixins: [PageMixins],

  props: {
    signature: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="postcss" scoped>
.inner {
  @apply flex flex-col h-full;

  @screen lg {
    @apply flex-row justify-center items-center;
  }

  & .img-area {
    @apply flex relative;

    @screen lg {
      @apply mx-auto;
    }

    & .kfba-main {
      left: 0;
      z-index: 1;
      width: 75%;

      @screen lg {
        @apply relative;

        width: 100%;
        left: 15%;
      }
    }

    & .kfba-main-mobile {
      @apply absolute;

      width: 50%;
      right: 0;
      z-index: 2;

      @screen lg {
        @apply static;

        width: 100%;
      }
    }
  }
}
</style>
