<template>
  <PageLayout :key="$vnode.key" nocss>
    <portal to="fullpage-container">
      <Steps
        v-if="active"
        :idx="currentIndex"
        :range="horizontalPages.length"
        horizontal
        @moveTo="moveTo"
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
import Page201 from './projects/Page201.vue'
import Page202 from './projects/Page202.vue'

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
    refName: 'fpF'
  }),

  computed: {
    horizontalPages() {
      return [Page201, Page202]
    }
  }
})
</script>
