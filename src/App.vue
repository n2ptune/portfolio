<template>
  <main class="fonts-raleway">
    <article class="top">
      <section>
        <h2>MAKE</h2>
        <h2>CREATIVE</h2>
        <h2>DEVELOPER</h2>
      </section>
    </article>
    <article class="bottom">
      <section>
        <h3>SITE REBUILDING</h3>
        <h3>COMMING SOON</h3>
      </section>
    </article>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';

main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  position: relative;

  > article {
    width: 100%;
  }

  .top {
    position: relative;
    text-align: center;

    > section {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    h2 {
      display: inline-block;
      white-space: pre-line;
      margin: 0;
      padding: 0;
      line-height: 1.3;
      letter-spacing: 2px;

      &:nth-of-type(2) {
        position: relative;

        &::before {
          content: '';
          display: block;
          top: 0;
          left: -25px;
          position: absolute;
          width: calc(100% + 50px);
          height: 100%;
          background-color: #9037ac;
          z-index: -2;
        }

        position: relative;
        color: white;
      }
    }
  }

  .bottom {
    position: relative;
    text-align: center;
    color: rgba(0, 0, 0, 0.35);

    h3 {
      margin: 0;
      line-height: 1.7;
      letter-spacing: 10px;

      @include desktop {
        letter-spacing: 20px;
      }
    }
  }
}
</style>