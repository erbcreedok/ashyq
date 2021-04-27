<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="less">
@font-face {
  src: url("./assets/fonts/FuturaBookC.ttf");
  font-family: Futura;
  font-weight: 400;
}
@font-face {
  src: url("./assets/fonts/FuturaLightC.ttf");
  font-family: Futura;
  font-weight: 200;
}
@font-face {
  src: url("./assets/fonts/FuturaMediumC.ttf");
  font-family: Futura;
  font-weight: 500;
}
body {
  margin: 0;
  background: #027aff;
  overflow: hidden;
  font-family: Futura, sans-serif;
}
.border {
  border: 1px solid black;
  position: absolute;
  z-index: 10;
  left: 0;
  top: 0;
}
#app {
  background: #e7e9f6;
  height: 100vh;
  overflow: auto;
}
.container {
  width: 100%;
  max-width: 330px;
  margin-left: auto;
  margin-right: auto;
}
.label {
  color: #afb6bd;
  font-size: 14px;
  font-weight: 200;
  display: block;
  margin-bottom: 8px;
}
.time {
  font-weight: 500;
  font-size: 24px;
}
.text-center {
  text-align: center;
}
</style>
