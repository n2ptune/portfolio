<template>
  <PageLayout :key="$vnode.key" nocss>
    <transition name="fade-in-out">
      <div v-show="active" v-fullpage="opts" class="horizontal-container">
        <PageLayout :key="$vnode.key * 100 + 1">
          <div class="project-1">project</div>
        </PageLayout>
        <PageLayout :key="$vnode.key * 100 + 2">
          <div class="project-2">project 2</div>
        </PageLayout>
      </div>
    </transition>
  </PageLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import PageLayout from '@/components/fullpage/PageLayout.vue'

export default Vue.extend({
  components: {
    PageLayout
  },

  props: {
    active: {
      type: Boolean
    }
  },

  data: () => ({
    opts: {
      dir: 'h'
    }
  })
})
</script>
