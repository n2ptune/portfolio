<template>
  <PageLayout :key="$vnode.key" nocss>
    <portal to="fullpage-container">
      <Steps
        v-if="active"
        :idx="currentIndex"
        :range="horizontalPages.length"
        horizontal
      />
    </portal>
    <transition name="fade-in-out">
      <div v-show="active" :ref="refName" v-fullpage="opts">
        <component
          :is="page"
          v-for="(page, index) in horizontalPages"
          :key="$vnode.key * 100 + index"
          :active="currentIndex === index"
        />
      </div>
    </transition>
  </PageLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import ContainerMixins from '@/components/fullpage/mixins/Container'
import Page101 from './projects/Page101.vue'
import Page102 from './projects/Page102.vue'

export default Vue.extend({
  // @ts-ignore
  mixins: [ContainerMixins],

  props: {
    active: {
      type: Boolean
    }
  },

  data: () => ({
    opts: {
      dir: 'h'
    },
    refName: 'fpH'
  }),

  computed: {
    horizontalPages() {
      return [Page101, Page102]
    }
  }
})
</script>
