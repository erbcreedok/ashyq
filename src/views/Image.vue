<template>
  <div class="image">
    <template v-if="currentImage === 1">
      <img src="../assets/images/screen.jpg" alt="" width="100%" />
      <div class="border" />
    </template>
    <template v-if="currentImage === 2">
      <img src="../assets/images/screenhome.jpg" alt="" width="100%" />
      <div class="border" />
    </template>
    <template v-if="currentImage === 3">
      <img src="../assets/images/screenblue.jpg" alt="" width="100%" />
      <div class="border" />
    </template>
  </div>
</template>
<script>
export default {
  computed: {
    currentImage() {
      return +(this.$route.params.id || 0);
    },
  },
};
</script>
