<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url(@/assets/scss/main.scss);
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  > .wrapper {
    flex-grow: 1;
    width: 95%;
  }
}
</style>
