<template>
  <PageLayout :key="$vnode.key">
    <div class="inner">
      <div class="relative z-10">
        <div class="title">
          <p class="text-orange-300">01</p>
          <p>한국외식음료협회</p>
          <p>웹 개발</p>
        </div>
        <div class="text-base md:text-lg max-w-lg space-y-4 py-6">
          <InformationList
            :icon="['fas', 'stream']"
            title="Overview"
            :no-list="true"
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
      </div>
    </div>
  </PageLayout>
</template>

<style lang="postcss" scoped>
.inner {
  @apply flex flex-wrap flex-row h-full;

  & .img-area {
    @apply mx-auto flex items-center;

    & .kfba-main {
      width: 100%;

      @screen lg {
      }
    }
  }
}
</style>
