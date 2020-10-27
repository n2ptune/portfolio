<template>
  <PageLayout
    :key="$vnode.key"
    :class="active ? 'light' : ''"
    class="transition-colors duration-1000"
  >
    <div class="inner">
      <div class="text-base md:text-lg max-w-lg py-6 space-y-6">
        <InformationList
          :icon="['fas', 'laptop-code']"
          :color="signature"
          title="Detail"
          no-list
        />
        <p>-asdasdasfasfasfasf</p>
      </div>
    </div>
  </PageLayout>
</template>

<script>
import { EventBus } from '@/components/fullpage/pages/utils/ScrollEventBus.ts'

export default {
  props: {
    signature: {
      type: String,
      required: true
    },
    active: {
      type: Boolean
    }
  },

  watch: {
    active(val) {
      EventBus.$data.isDark = !val
    }
  }
}
</script>
