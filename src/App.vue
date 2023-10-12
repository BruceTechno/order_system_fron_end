<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderView from "./components/Header.vue"
</script>

<template>
  <HeaderView />
  <div class="routerView">
   <RouterView />
  </div>
 </template>

<style lang="scss" scoped>
 body{
  margin: 0;
 }
 .routerView{
  width: 80vw;
  height: auto;
  margin: 0 auto;
  
 }

</style>
