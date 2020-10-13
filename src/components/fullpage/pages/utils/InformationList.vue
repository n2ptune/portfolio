<template>
  <div v-if="isBreak" class="break"></div>
  <div v-else class="text-xl md:text-2xl font-bold">
    <fa :icon="icon" :class="`text-${color}`" class="mr-1" />
    <p :class="`text-${color}`" class="inline-block">
      {{ title }}
    </p>
    <ul v-if="!noList" class="text-base py-3 px-1">
      <li v-for="item in items" :key="item" class="my-1">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    },
    isBreak: {
      type: Boolean,
      default: false
    },
    noList: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      required: false,
      default: 'orange-300'
    }
  }
}
</script>

<style lang="postcss" scoped>
div:not(.break) {
  flex-basis: 100%;

  @screen md {
    flex-basis: 40%;
  }
}
</style>
