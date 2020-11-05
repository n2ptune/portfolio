<template>
  <PageLayout :key="$vnode.key" :class="active ? 'light' : ''">
    <div class="inner">
      <div class="inner-left lg:mx-auto">
        <div class="title">
          <p :class="signature">04</p>
          <p>개발 블로그</p>
        </div>
        <div class="text-base md:text-lg max-w-lg space-y-4 py-6">
          <InformationList
            :icon="['fas', 'stream']"
            :color="signature"
            title="Overview"
            no-list
          />
          <p>
            개발자에게 있어서 제일 중요한 것은 끊임없는 학습이라고 생각합니다.
            학습 내용을 기록하고 막히는 부분에 있어서 해결했던 점 등을 다양한
            사람들과 공유해서 피드백을 받고 더 성장할 수 있는 원동력이 될 거라
            생각해 블로그를 운영하고 있습니다. Gridsome이라는 오픈 소스를
            이용해서 JAMStack으로 Netlify에 배포하였습니다.
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
            <li v-for="item in links" :key="item.title" class="stack-item">
              <a :href="item.link" target="_blank">
                {{ item.title }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="lg:mx-auto">
        <img
          src="@/assets/images/mockups-blog-3-screens.png"
          alt="mockups-blog-3-screens"
        />
      </div>
    </div>
  </PageLayout>
</template>

<script>
import IOMixins from '../../mixins/IOMixins'

export default {
  mixins: [IOMixins],

  props: {
    signature: {
      type: String,
      required: true
    },
    active: {
      type: Boolean
    }
  },

  data: () => ({
    stack: ['Vue', 'Gridsome', 'TailwindCSS', 'Netlify'],
    links: [
      {
        title: 'Blog',
        link: 'https://imkh.dev/'
      },
      {
        title: 'Github',
        link: 'https://github.com/n2ptune/imkh.dev'
      }
    ]
  })
}
</script>

<style lang="postcss" scoped>
.inner {
  @apply flex flex-col h-full;

  @screen lg {
    @apply flex-row items-center justify-center;
  }
}
</style>
