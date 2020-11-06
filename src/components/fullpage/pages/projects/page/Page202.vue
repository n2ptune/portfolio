<template>
  <PageLayout
    :key="$vnode.key"
    :class="active ? 'light' : ''"
    class="transition-colors duration-1000"
  >
    <div class="inner">
      <div class="text-base mx-0 md:text-lg lg:max-w-lg lg:mx-24 space-y-6">
        <InformationList
          :icon="['fas', 'laptop-code']"
          :color="signature"
          title="Detail"
          no-list
        />
        <p>
          웹에서 다양한 정보를 입력해서 Fairy를 만들고, 만들어진 HTML 코드를
          페이지에 넣으면 Vue로 빌드된 자바스크립트 파일을 불러와서 Fairy를
          초기화하고 서버와 통신 후 정보를 받아 페이지에 보여주는 형태로
          만들었습니다.
        </p>
        <p>
          문의하기를 이용해 페이지 운영자에게 메세지를 남길 수 있고, 웹에서 이
          메세지를 관리할 수 있습니다.
        </p>
        <p>
          클라이언트와 웹은 Vue로 만들어져 있고, 서버는 Node.js을 사용해
          Firebase Cloud Functions에 배포하고 모두
          <span class="font-bold" :class="signature"
            >Firebase를 적극 활용했습니다.</span
          >
        </p>
      </div>
      <div class="image-wrap">
        <img
          src="@/assets/images/mockup-three-device-image.png"
          alt="mockup-three-device-image"
        />
      </div>
    </div>
  </PageLayout>
</template>

<script>
import IOMixins from '@/components/fullpage/mixins/IOMixins.ts'

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
  }
}
</script>

<style lang="postcss" scoped>
.inner {
  @apply flex flex-col justify-start items-start h-full;

  @screen lg {
    @apply flex-row justify-center items-center;
  }

  & > * {
    @screen lg {
      flex: 0 0 50%;
    }

    &.image-wrap {
      @apply my-16;

      @screen lg {
        @apply my-0;
      }
    }
  }
}
</style>
