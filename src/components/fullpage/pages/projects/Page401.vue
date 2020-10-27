<template>
  <PageLayout :key="$vnode.key">
    <div class="inner">
      <div class="title">
        <p :class="`text-${signature}`">04</p>
        <p>개발 블로그</p>
      </div>
      <div class="text-base md:text-lg max-w-lg space-y-4 py-6">
        <InformationList
          :icon="['fas', 'stream']"
          :color="signature"
          title="Overview"
          no-list
        />
        <p>
          개발자에게 있어서 제일 중요한 것은 끊임없는 학습이라고 생각합니다.
          학습 내용을 기록하고 막히는 부분에 있어서 해결했던 점 등을 다양한
          사람들과 공유해서 피드백을 받고 더 성장할 수 있는 원동력이 될 거라
          생각해 블로그를 운영하고 있습니다. Gridsome이라는 오픈 소스를 이용해서
          JAMStack으로 Netlify에 배포하였습니다.
        </p>
      </div>
    </div>
  </PageLayout>
</template>

<script>
export default {
  props: {
    signature: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped></style>
