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
