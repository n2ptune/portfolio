<template>
  <div class="steps">
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
  transform: translateY(40%);

  @apply fixed h-full z-50 text-white-max;

  &-button {
    --steps-button-size: 6px;

    width: var(--steps-button-size);
    height: var(--steps-button-size);

    @apply bg-white-1000 my-3 rounded-full cursor-pointer;

    &.active,
    &:hover {
      @apply bg-white-max transition-colors duration-300;
    }
  }
}
</style>
