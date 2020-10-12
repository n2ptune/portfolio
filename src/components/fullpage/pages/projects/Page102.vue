<template>
  <PageLayout :key="$vnode.key">
    <div class="inner">
      <div class="text-base md:text-lg max-w-lg py-6 space-y-6">
        <InformationList :icon="['fas', 'cubes']" no-list title="Stack" />
        <ul>
          <li v-for="item in stack" :key="item" class="stack-item">
            {{ item }}
          </li>
        </ul>
        <InformationList
          :icon="['fas', 'laptop-code']"
          no-list
          title="Detail"
        />
        <p>
          - 일정한 규칙의 엑셀 양식에서, 기존에는 직접 회원 정보를 입력해서
          접수/처리를 한 반면, '일괄 접수/처리'라는 기능을 개발하여 자격증 시험
          결과를 클릭 한번으로 일괄적 처리/접수를 가능케 했습니다.
        </p>
        <p>
          - 수검생의 수검표를 출력하는 과정에서, 기존에는 수검생 한 명마다
          페이지를 들어가서 수검표 출력이라는 버튼을 눌러 수검표를 출력했었으나
          '일괄 출력' 기능을 개발하여 현재 페이지의 수검생들의 DOM을 이어붙여
          프린트를 가능케 했습니다.
        </p>
        <p>
          Link:
          <a
            href="http://kfba.or.kr/"
            target="_blank"
            class="hover:underline text-orange-300"
            >한국외식음료협회</a
          >
        </p>
      </div>
      <div class="img-area">
        <img src="@/assets/images/kfba-excel-g.png" class="kfba-excel" />
        <img src="@/assets/images/kfba-print-mosaic.png" class="kfba-print" />
      </div>
    </div>
  </PageLayout>
</template>

<script>
export default {
  data: () => ({
    stack: [
      'HTML5',
      'CSS3',
      'Javascript',
      'jQuery',
      'IIS 7.5',
      'Classic ASP',
      'MSSQL'
    ]
  })
}
</script>

<style lang="postcss" scoped>
.inner {
  @apply flex justify-between flex-wrap;

  & .stack-item {
    @apply px-3 py-1 bg-white-300 inline-block mr-1 mb-1 rounded-lg;
  }

  & .img-area {
    @apply relative mx-auto text-center;

    & .kfba-excel,
    & .kfba-print {
      @apply relative inline-block;

      @screen lg {
        @apply rounded-lg;
      }
    }

    & .kfba-excel {
      width: 40%;

      @apply left-0;
    }

    & .kfba-print {
      width: 40%;

      @apply right-0;
    }
  }
}
</style>
