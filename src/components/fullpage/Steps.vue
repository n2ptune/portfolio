<template>
  <div
    class="steps"
    :class="[horizontal ? 'is-horizontal' : '', isDark ? 'dark' : 'light']"
  >
    <div
      v-for="(step, stepIndex) in range"
      :key="step"
      :class="stepIndex === idx ? 'active' : ''"
      class="steps-button"
      @click="moveTo(stepIndex)"
    ></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { EventBus } from './pages/utils/ScrollEventBus'

export default Vue.extend({
  props: {
    idx: {
      type: Number,
      required: false,
      default: 0
    },
    range: {
      type: Number,
      required: true
    },
    horizontal: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    isDark() {
      return EventBus.$data.isDark
    }
  },

  methods: {
    moveTo(index: number) {
      this.$emit('moveTo', index)
    }
  }
})
</script>

<style lang="postcss" scoped>
.steps {
  right: 8px;

  @apply fixed flex flex-col justify-center
  h-full z-50 overflow-hidden;

  &-button {
    --steps-button-size: 6px;

    width: var(--steps-button-size);
    height: var(--steps-button-size);

    @apply my-1 rounded-full cursor-pointer block
    transition-colors duration-300;
  }

  &.light {
    & .steps-button {
      @apply bg-gray-200;

      &.active,
      &:hover {
        @apply bg-gray-600;
      }
    }
  }

  &.dark {
    & .steps-button {
      @apply bg-white-1000;

      &.active,
      &:hover {
        @apply bg-white-max;
      }
    }
  }
}

.steps.is-horizontal {
  bottom: 8px;

  @apply left-0 right-auto h-auto w-full flex-row;

  & .steps-button {
    @apply my-0 mx-1;
  }
}
</style>
