<template>
  <PageLayout
    :key="$vnode.key"
    :class="active ? 'light' : ''"
    class="transition-colors duration-1000"
  >
    <div class="inner">
      <div>Fairy 메세지 관리 관련 내용 넣기</div>
    </div>
    <MoveFlag
      v-if="pager.total > 1"
      :ref-key="fullpageRef"
      :parent-node="refVNode"
      :index="index"
      :total="pager.total"
      left-color="text-orange-400 hover:text-orange-600"
    />
  </PageLayout>
</template>

<script>
import IOMixins from '@/components/fullpage/mixins/IOMixins'
import PageMixins from '@/components/fullpage/mixins/PageMixins'

export default {
  mixins: [IOMixins, PageMixins],

  props: {
    signature: {
      type: String,
      required: true
    },
    active: {
      type: Boolean
    }
  }
}
</script>

<style lang="postcss" scoped>
.inner {
}
</style>
