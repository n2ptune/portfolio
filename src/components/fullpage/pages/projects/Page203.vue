<template>
  <PageLayout
    :key="$vnode.key"
    :class="active ? 'light' : ''"
    class="transition-colors duration-1000"
  >
    <div class="inner">page 203</div>
  </PageLayout>
</template>

<script>
import IOMixins from '@/components/fullpage/mixins/IOMixins.ts'

export default {
  mixins: [IOMixins],

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
