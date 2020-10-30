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
              FAIRY는 웹 페이지의 고객센터를 서비스와 통합시켜 접근성을 높여주는
              웹 서비스입니다. 마크다운으로 표시할 내용을 작성할 수 있으며 매우
              쉽고 빠르게 웹 페이지와 통합시킬 수 있습니다.
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
      @apply relative px-4 py-2;

      z-index: 4;

      @screen md {
        @apply p-4;
      }

      @screen lg {
        @apply p-16;
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
