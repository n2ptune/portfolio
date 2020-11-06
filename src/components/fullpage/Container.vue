<template>
  <div class="fullpage-container">
    <Steps :idx="currentIndex" :range="pages.length" @moveTo="moveTo" />
    <portal-target name="fullpage-container" />
    <div :ref="refName" v-fullpage="opts" class="fullpage-wp">
      <component
        :is="page"
        v-for="(page, index) in pages"
        :key="index"
        :active="currentIndex === index"
        @register-child="collect"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Intro from '@/components/fullpage/pages/projects/Intro.vue'
import FirstProject from '@/components/fullpage/pages/projects/FirstProject.vue'
import FairyProject from '@/components/fullpage/pages/projects/FairyProject.vue'
import ShaftProject from '@/components/fullpage/pages/projects/ShaftProject.vue'
import BlogProject from '@/components/fullpage/pages/projects/BlogProject.vue'
import TechPage from '@/components/fullpage/pages/tech/Page.vue'
import ContainerMixins from '@/components/fullpage/mixins/ContainerMixins'
import { EventBus } from '@/components/fullpage/pages/utils/ScrollEventBus.ts'

export default Vue.extend({
  mixins: [ContainerMixins],

  data() {
    return {
      opts: {},
      refName: 'fp',
      fullpages: []
    } as any
  },

  computed: {
    pages() {
      // prettier-ignore
      return [
        Intro,
        FirstProject,
        FairyProject,
        ShaftProject,
        BlogProject,
        TechPage
      ]
    }
  },

  watch: {
    currentIndex(a) {
      if (a !== 0) {
        if (!EventBus.$data.isDark) {
          EventBus.$data.isDark = true
        }
      }
    }
  },

  methods: {
    collect(fullpage: any) {
      this.fullpages.push(fullpage)
    }
  }
})
</script>

<style lang="postcss">
.page {
  .stack-item {
    @apply px-3 py-1 bg-white-300 inline-block mr-1 mb-1 rounded-lg;

    & a {
      &:hover {
        @apply underline;
      }
    }
  }
  &.light {
    .stack-item {
      @apply bg-gray-100;
    }
  }
}
</style>
