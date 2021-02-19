<template>
  <main class="fonts-raleway">
    <section class="top">
      <h2>MAKE</h2>
      <h2>CREATIVE</h2>
      <h2>DEVELOPER</h2>
    </section>
    <section class="bottom">
      <h3>SITE REBUILDING</h3>
      <h3>COMMING SOON</h3>
    </section>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  position: relative;

  .top {
    position: relative;
    top: 10rem;
    text-align: center;

    h2 {
      margin: 0;
      padding: 0;
      line-height: 1.3;
      letter-spacing: 2px;

      &:nth-of-type(2) {
        &::before {
          content: '';
          display: flex;
          position: absolute;
          width: 100%;
          height: 100%;
          padding: 5px 3px;
          background-color: #760c96;
          z-index: -2;
        }

        position: relative;
        color: white;
      }
    }
  }

  .bottom {
    margin-bottom: 20rem;
    position: relative;
    top: 35rem;
    text-align: center;
    color: rgba(0, 0, 0, 0.35);

    h3 {
      margin: 0;
      line-height: 1.7;
      letter-spacing: 25px;
    }
  }
}
</style>