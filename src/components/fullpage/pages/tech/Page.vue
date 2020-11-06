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
          signature="text-blue-300"
        />
      </div>
    </transition>
  </PageLayout>
</template>

<script>
import ContainerMixins from '../../mixins/ContainerMixins'
import Page501 from './page/Page501.vue'

export default {
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
    refName: 'fpT'
  }),

  computed: {
    horizontalPages() {
      return [Page501]
    }
  }
}
</script>
