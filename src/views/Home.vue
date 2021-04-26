<style lang="less">
.blue_blocks {
  margin-top: 25px;
  display: flex;
  width: 200px;
  justify-content: space-between;
}
.button_list {
  padding: 0 10px;
  margin-top: 32px;
  .home_button {
    margin-bottom: 8px;
  }
}
</style>
<template>
  <div class="home">
    <Header withLogo>
      <div class="blue_blocks">
        <BlueBlock> Инструкция для регистрации входа </BlueBlock>
        <BlueBlock> Инструкция для регистрации выхода </BlueBlock>
      </div>
    </Header>
    <div class="button_list">
      <HomeButton @click="goToCamera">
        Регистрация входа
        <img src="../assets/images/green.png" height="75px" alt="" />
      </HomeButton>
      <HomeButton>
        Регистрация выхода
        <img src="../assets/images/red.png" height="75px" alt="" />
      </HomeButton>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import BlueBlock from "@/components/BlueBlock";
import HomeButton from "@/components/HomeButton";
export default {
  components: { HomeButton, BlueBlock, Header },
  methods: {
    goToCamera() {
      this.$router.push("/qr");
    },
  },
};
</script>
