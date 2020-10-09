<template>
  <client-only>
    <div class="fullpage-container">
      <Steps :idx="currentIndex" :range="pages.length" @moveTo="moveTo" />
      <portal-target name="fullpage-container" />
      <div :ref="refName" v-fullpage="opts" class="fullpage-wp">
        <component
          :is="page"
          v-for="(page, index) in pages"
          :key="index"
          :active="currentIndex === index"
        />
      </div>
    </div>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue'
import Intro from '@/components/fullpage/pages/Intro.vue'
import FirstProject from '@/components/fullpage/pages/FirstProject.vue'
import FairyProject from '@/components/fullpage/pages/FairyProject.vue'
import ContainerMixins from '@/components/fullpage/mixins/ContainerMixins'

export default Vue.extend({
  // @ts-ignore
  mixins: [ContainerMixins],

  data() {
    return {
      opts: {},
      refName: 'fp'
    }
  },

  computed: {
    pages() {
      return [Intro, FirstProject, FairyProject]
    }
  }
})
</script>
