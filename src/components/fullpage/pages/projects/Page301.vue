<template>
  <PageLayout :key="$vnode.key">
    <div class="inner">
      <div class="inner-left">
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
            개념으로 만든 풀스택 프로젝트입니다. 사용자는 한 주제(토픽)를 가지고
            여러 사람들과 의견을 나눌 수 있으며 Quill(오픈소스 마크다운
            에디터)을 사용하여 마크다운으로 글을 올릴 수 있고 좋아요/댓글/답글
            등 기능을 REST API 형태로 Nuxt의 서버 미들웨어에 포함 시켜
            제작했습니다.
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
      <div class="px-4 mx-auto self-center h-full w-full lg:w-1/2">
        <div class="relative w-full h-full image-wrap">
          <img src="@/assets/images/shaft-base-1.png" alt="shaft-base-1" />
          <img src="@/assets/images/shaft-base-2.png" alt="shaft-base-2" />
          <img src="@/assets/images/shaft-base-3.png" alt="shaft-base-3" />
          <div></div>
        </div>
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
        link: 'https://shaft.imkh.dev'
      },
      {
        title: 'Github',
        link: 'https://github.com/n2ptune/shaft'
      }
    ]
  })
}
</script>

<style lang="postcss" scoped>
.inner {
  @apply w-full h-full flex flex-col;

  @screen lg {
    @apply flex-row;
  }

  & .image-wrap {
    @screen lg {
      top: 10%;
      left: 25%;
    }

    & img {
      @apply absolute rounded-xl;

      &:first-child {
        top: 0;
        left: 0;
        z-index: 3;
      }
      &:nth-child(2) {
        top: 50px;
        left: 0;
        z-index: 2;
        opacity: 0.6;

        @screen lg {
          left: 50px;
        }
      }
      &:nth-child(3) {
        top: 100px;
        left: 0;
        z-index: 1;
        opacity: 0.3;

        @screen lg {
          left: 100px;
        }
      }
    }
  }
}
</style>
