<template>
  <div class="blue_block">
    <slot />
  </div>
</template>

<style lang="less">
.blue_block {
  background: #003b95;
  color: white;
  display: block;
  border-radius: 4px;
  width: 88px;
  height: 60px;
  font-size: 10px;
  padding: 3px;
  box-sizing: border-box;
}
</style>
