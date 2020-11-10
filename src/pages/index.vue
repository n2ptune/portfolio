<template>
  <Container />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () =>
    ({
      countOfLoadedImage: 0
    } as any),

  mounted() {
    // const images = document.querySelectorAll('img')
    // images.forEach((image: HTMLImageElement) => {
    //   image.onload = () => {
    //     this.countOfLoadedImage++
    //     if (this.countOfLoadedImage >= images.length) {
    //       console.log('completed')
    //     }
    //   }
    // })
  }
})
</script>
