<template>
  <PageLayout :key="$vnode.key">
    <div class="inner">
      <div>Shaft 관련 내용 넣기</div>
    </div>
    <MoveFlag
      v-if="pager.total > 1"
      :ref-key="fullpageRef"
      :parent-node="refVNode"
      :index="index"
      :total="pager.total"
      left-color="text-green-400 hover:text-green-600"
    />
  </PageLayout>
</template>

<script>
import PageMixins from '@/components/fullpage/mixins/PageMixins'

export default {
  mixins: [PageMixins],

  props: {
    signature: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped>
.inner {
}
</style>
