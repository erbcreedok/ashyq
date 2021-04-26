<template>
  <div class="header">
    <template v-if="withLogo">
      <img
        class="header_logo"
        src="../assets/images/logo.png"
        alt=""
        width="100px"
      />
    </template>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    withLogo: Boolean,
  },
};
</script>

<style lang="less">
.header {
  height: 160px;
  background: rgb(12, 69, 160);
  background: linear-gradient(0deg, rgb(12, 69, 160) 0%, rgb(2, 122, 255) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  &_logo {
    mix-blend-mode: lighten;
    margin-top: 15px;
  }
}
</style>
