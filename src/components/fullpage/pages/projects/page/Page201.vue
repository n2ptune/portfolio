<template>
  <PageLayout :key="$vnode.key" nocss>
    <div class="inner">
      <div class="inner-left">
        <div class="inner-left-content">
          <div class="title">
            <p :class="signature">02</p>
            <p>FAIRY</p>
          </div>
          <div class="text-base md:text-lg max-w-lg space-y-4 py-6">
            <InformationList
              :icon="['fas', 'stream']"
              :color="signature"
              title="Overview"
              no-list
            />
            <p>
              Fairy는 어떤 웹 페이지에나 삽입시킬 수 있는 서비스 접근성을 향상
              시킬 수 있게 도와주는 Vue와 Node.js 풀스택 프로젝트입니다. 코드 몇
              줄로 개발자 없이 서비스를 이용하는 데에 어려움을 겪는 사용자에게
              서비스에 대한 도움말 혹은 힌트를 제공할 수 있습니다.
            </p>
            <InformationList
              :icon="['fas', 'cubes']"
              :color="signature"
              title="Stack"
              no-list
            />
            <ul>
              <li v-for="item in stack" :key="item" class="stack-item">
                {{ item }}
              </li>
            </ul>
            <InformationList
              :icon="['fas', 'link']"
              :color="signature"
              title="Link"
              no-list
            />
            <ul>
              <li class="stack-item">
                <a href="#" target="_blank"> Fairy Web </a>
              </li>
              <li class="stack-item">
                <a href="https://github.com/n2ptune/fairy" target="_blank">
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="inner-right">
        <div class="inner-right-image"></div>
      </div>
    </div>
    <MoveFlag
      v-if="pager.total > 1"
      :ref-key="fullpageRef"
      :parent-node="refVNode"
      :index="index"
      :total="pager.total"
      right-color="text-orange-500"
    />
  </PageLayout>
</template>

<script>
import PageMixins from '@/components/fullpage/mixins/PageMixins'

export default {
  mixins: [PageMixins],

  props: {
    signature: {
      type: String,
      required: true
    }
  },

  data: () => ({
    stack: ['Vue', 'Firebase', 'Element UI', 'SCSS']
  })
}
</script>

<style lang="postcss" scoped>
.inner {
  @apply flex flex-col h-full;

  @screen lg {
    @apply flex-row justify-between;
  }

  &-left {
    @apply relative;

    flex-basis: 100%;
    z-index: 3;

    @screen lg {
      flex-basis: 60%;
    }

    &::after {
      @apply hidden;

      @screen lg {
        @apply w-full absolute block bg-dark-surface;

        content: '';
        height: 200vh;
        transform: rotate(6deg);
        z-index: 2;
        top: -20rem;
        right: -3rem;
      }
    }

    &-content {
      @apply relative px-4 py-2 block;

      z-index: 4;

      @screen md {
        @apply p-4;
      }

      @screen lg {
        @apply flex flex-col h-full justify-center items-center pb-16;
      }

      & > div:first-of-type {
        @screen lg {
          @apply relative;
          left: -170px;
        }
      }
    }
  }

  &-right {
    @apply text-gray-1000 relative;

    flex-basis: 100%;
    z-index: 1;

    @screen lg {
      flex-basis: 40%;
    }

    &-image {
      @apply w-full h-full;

      background-image: url('~@/assets/images/mockups-many-device.jpg');
      background-repeat: no-repeat;
      background-position: 46% center;
      background-size: cover;
    }
  }
}
</style>
