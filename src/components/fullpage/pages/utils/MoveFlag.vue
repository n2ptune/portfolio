<template>
  <div class="absolute w-full h-full z-50 text-white-f top-0 left-0">
    <div v-if="isLeft" class="arrow left">
      <fa
        :icon="['fas', 'chevron-left']"
        :class="leftColor"
        @click="moveLeft"
      />
    </div>
    <div v-if="isRight" class="arrow right">
      <fa
        :icon="['fas', 'chevron-right']"
        :class="rightColor"
        @click="moveRight"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    refKey: {
      type: String,
      required: true
    },
    parentNode: {
      type: Object,
      required: false,
      default: () => {}
    },
    index: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    leftColor: {
      type: String,
      required: false,
      default: 'text-white-f'
    },
    rightColor: {
      type: String,
      required: false,
      default: 'text-white-f'
    }
  },

  data: () => ({
    fullpageRef: null
  }),

  computed: {
    isLeft() {
      return this.index > 0
    },
    isRight() {
      return this.index !== (this.total as number) - 1
    }
  },

  methods: {
    moveLeft(): void {
      // @ts-expect-error
      return this.parentNode[this.refKey].$fullpage.moveTo(
        // @ts-expect-error
        this.index - 1,
        true,
        true
      )
    },
    moveRight(): void {
      // @ts-expect-error
      return this.parentNode[this.refKey].$fullpage.moveTo(
        // @ts-expect-error
        this.index + 1,
        true,
        true
      )
    }
  }
})
</script>

<style lang="postcss" scoped>
.arrow {
  @apply absolute text-lg;

  --distance-small: 10px;
  --distance-big-top: 5%;
  --distance-big-width: 50px;

  @screen lg {
    @apply text-4xl;
  }

  &.left,
  &.right {
    @apply cursor-pointer;
  }

  &.left {
    top: var(--distance-small);
    left: var(--distance-small);

    @screen lg {
      top: var(--distance-big-top);
      left: var(--distance-big-width);
    }
  }

  &.right {
    top: var(--distance-small);
    right: var(--distance-small);

    @screen lg {
      top: var(--distance-big-top);
      right: var(--distance-big-width);
    }
  }
}
</style>
