<template>
  <PageLayout :key="$vnode.key">
    <div class="inner">
      <div class="title">
        <p :class="`text-${signature}`">03</p>
        <p>Shaft</p>
      </div>
      <div class="text-base md:text-lg max-w-lg py-6 space-y-6">
        <InformationList
          :icon="['fas', 'stream']"
          :color="signature"
          title="Overview"
          no-list
        />
        <p>분류된 카테고리로 자유롭게 질문/답변하는 커뮤니티 서비스</p>
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
