<template>
  <div class="steps" :class="horizontal ? 'is-horizontal' : ''">
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
  h-full z-50 text-white-max overflow-hidden;

  &-button {
    --steps-button-size: 6px;

    width: var(--steps-button-size);
    height: var(--steps-button-size);

    @apply bg-white-1000 my-1 rounded-full cursor-pointer block;

    &.active,
    &:hover {
      @apply bg-white-max transition-colors duration-300;
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
