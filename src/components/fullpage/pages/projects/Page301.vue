<template>
  <PageLayout :key="$vnode.key">
    <div class="inner">
      <div class="title">
        <p :class="signature">03</p>
        <p>Shaft</p>
      </div>
      <div class="text-base md:text-lg max-w-lg py-6 space-y-6">
        <InformationList
          :icon="['fas', 'stream']"
          :color="signature"
          title="Overview"
          no-list
        />
        <p>
          Shaft는 게시판의 확장 형태로 구상하여 게시판보다 더 큰 커뮤니티라는
          개념으로 만든 웹 서비스입니다. 사용자는 한 주제(토픽)를 가지고 여러
          사람들과 의견을 나눌 수 있으며 Quill(오픈소스 마크다운 에디터)을
          사용하여 마크다운으로 글을 올릴 수 있고 좋아요/댓글/답글 등 기능을 API
          형태로 Nuxt의 서버 미들웨어에 포함 시켜 제작했습니다.
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
  </PageLayout>
</template>

<script>
export default {
  props: {
    signature: {
      type: String,
      required: true
    }
  },

  data: () => ({
    stack: [
      'Nuxt',
      'Express',
      'TailwindCSS',
      'MySQL',
      'VueQuillEditor',
      'JSONWebToken',
      'Google App Engine'
    ],
    links: [
      {
        title: 'Shaft',
        link: '#'
      },
      {
        title: 'Giuthub',
        link: 'https://github.com/n2ptune/shaft'
      }
    ]
  })
}
</script>

<style lang="postcss" scoped>
.inner {
  @apply w-full h-full;
}
</style>
