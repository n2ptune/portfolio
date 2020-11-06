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
          :key="$vnode.key * 300 + index"
          :active="currentIndex === index"
          signature="text-green-400"
        />
      </div>
    </transition>
  </PageLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import ContainerMixins from '@/components/fullpage/mixins/ContainerMixins'
import Page301 from './page/Page301.vue'

export default Vue.extend({
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
    refName: 'fpS'
  }),

  computed: {
    horizontalPages() {
      return [Page301]
    }
  }
})
</script>
