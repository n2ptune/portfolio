<template>
  <PageLayout :key="$vnode.key">
    <div class="inner">Hello~</div>
  </PageLayout>
</template>

<script>
export default {
  props: {
    signature: {
      type: String,
      required: true
    }
  }
}
</script>
