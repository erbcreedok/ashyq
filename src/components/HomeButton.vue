<template>
  <div class="home_button" @click="$emit('click')">
    <slot />
  </div>
</template>

<style lang="less">
.home_button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 0 3px 15px;
  background: white;
  font-size: 14px;
  color: #222;
  border-radius: 8px;
  box-shadow: 0 4px 5px 0 rgba(0, 59, 149, 0.1);
}
</style>
