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
          class="text-center lg:text-left"
        />
        <p>
          Fairy라는 이름은 웹 페이지의 작은 요정이라는 뜻에서 지었습니다. 웹
          페이지를 개발하면서 문득 드는 생각이, 만약 내가 만든 기능을 사용자가
          제대로 사용하지 못한다면 그것만큼 아쉬울 때가 없을 것 같아 사용자에게
          도움말이나 힌트를 직관적으로, 그러면서도 UI를 해치지 않는 방법을
          생각하다 개발하게 되었습니다.
        </p>
        <p>
          형태는 어떤 페이지에서나 삽입시킬 수 있는 형태로 만들었습니다. 채널톡
          혹은 Help Scout 같이 페이지 우측 하단에 이모티콘 같은 Element를
          삽입시키는 형태에 영감을 받아 제작하였습니다.
        </p>
        <p>
          주요 기능은 컨텐츠를 보여주거나 사용자로부터 메세지를 받아 페이지에서
          관리할 수 있는 기능입니다. 마크다운을 이용해 컨텐츠를 작성하고 나머지
          App의 정보를 작성하면 사용자 페이지에서 HTML에 삽입할 수 있는 코드를
          생성합니다. App을 사용할 페이지에 해당 코드를 삽입하면 우측 하단에
          App이 표시되는 방식으로 동작합니다.
        </p>
      </div>
      <div class="image-wrap">
        <img
          src="@/assets/images/mockup-three-device-image.png"
          alt="mockup-three-device-image"
        />
      </div>
    </div>
    <MoveFlag
      v-if="pager.total > 1"
      :ref-key="fullpageRef"
      :parent-node="refVNode"
      :index="index"
      :total="pager.total"
      left-color="text-orange-500"
    />
  </PageLayout>
</template>

<script>
import IOMixins from '@/components/fullpage/mixins/IOMixins'
import PageMixins from '@/components/fullpage/mixins/PageMixins'

export default {
  mixins: [IOMixins, PageMixins],

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
