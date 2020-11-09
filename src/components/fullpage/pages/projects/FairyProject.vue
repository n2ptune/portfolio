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
          :key="$vnode.key * 200 + index"
          :index="index"
          :active="currentIndex === index"
          :pager="pager"
          signature="text-orange-400"
        />
      </div>
    </transition>
  </PageLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import ContainerMixins from '@/components/fullpage/mixins/ContainerMixins'
import Page201 from './page/Page201.vue'
import Page202 from './page/Page202.vue'
import Page203 from './page/Page203.vue'

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
      return [Page201, Page202, Page203]
    }
  }
})
</script>
