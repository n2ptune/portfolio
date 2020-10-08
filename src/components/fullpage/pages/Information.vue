<template>
  <PageLayout :key="$vnode.key">
    <transition name="fade-in-out">
      <div v-show="active" class="inner">
        <div class="title">
          <p>저는</p>
          <p>이런 사람입니다.</p>
        </div>
        <div class="3xl:mx-auto my-4 xl:my-6 flex flex-wrap">
          <InformationList
            v-for="block in information"
            :key="block.title"
            :title="block.title"
            :icon="block.icon"
            :items="block.items"
            :is-break="!!block.isBreak"
          />
        </div>
      </div>
    </transition>
  </PageLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import PageLayout from '@/components/fullpage/PageLayout.vue'
import InformationList from './utils/InfomrationList.vue'

export default Vue.extend({
  components: {
    PageLayout,
    InformationList
  },

  props: {
    active: {
      type: Boolean
    }
  },

  data: () => ({
    information: {
      education: {
        title: 'Education',
        icon: ['fas', 'graduation-cap'],
        items: [
          '2020. 02. 강동대학교 컴퓨터정보과 졸업(전문학사) - 4.01/4.5',
          '2016. 02. 경기 광주고등학교 졸업'
        ]
      },
      experience: {
        title: 'Experience',
        icon: ['fas', 'building'],
        items: ['2019. 07 ~ 08. 한국외식음료협회 산학 협력 활동(웹 개발)']
      },
      break: {
        isBreak: true
      },
      introduce: {
        title: 'Introduce',
        icon: ['fas', 'info'],
        items: ['개발을 매우 좋아합니다.']
      }
    }
  })
})
</script>

<style lang="postcss" scoped>
.inner {
  @apply flex flex-wrap justify-between;
}
</style>
