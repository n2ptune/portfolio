<template>
  <PageLayout
    :key="$vnode.key"
    :class="active ? 'light' : ''"
    class="transition-colors duration-1000"
  >
    <div class="inner">page 203</div>
  </PageLayout>
</template>

<script>
export default {
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
