<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Menu from './menu/index.vue'
import Tabber from './tabbar/index.vue'
import Main from './main/index.vue'
import Slider from './slider/index.vue'
import useUserStore from '@/store/modules/user.ts'
import LayoutIcon1 from './LayoutIcon/index1.vue'
import LayoutIcon2 from './LayoutIcon/index2.vue'

let userStore = useUserStore()
let $route = useRoute()
const showSettings = ref(false)
</script>

<template>
  <div class="layout_container">
    <div class="layout_menu">
      <el-button @click="showSettings = true">设置</el-button>
      <el-menu
        :default-active="$route.path"
        active-text-color="#fff"
        background-color="#001529"
        text-color="#959ea6"
        mode="horizontal"
      >
        <Menu :menuList="userStore.menuRoutes[2].children" />
      </el-menu>
    </div>
    <div class="layout_tabbar">
      <Tabber />
    </div>
    <div class="layout_icon1">
      <LayoutIcon1 />
    </div>
    <div class="layout_slider">
      <Slider />
    </div>
    <div class="layout_icon2">
      <LayoutIcon2 />
    </div>
    <div class="layout_main">
      <Main />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout_container {
  width: 100vw;
  height: 100vh;
  $meg-slider-width: 14vw;
  // background: linear-gradient(to center, #8bc2e7, #c1e6fb);
  background: #c1e6fb;
  .layout_menu {
    height: $meg-menu-height;
    width: 100vw;
    background: #81a2be;
    display: flex;
    .el-button {
      height: $meg-menu-height;
    }
    .el-menu {
      flex: 1;
      height: $meg-menu-height;
    }
  }
  .layout_tabbar {
    position: fixed;
    top: $meg-menu-height;
    width: 100vw;
    height: $meg-tabbar-height;
    z-index: 9999;
    //flex-direction: column;
    //background: red;
  }
  .layout_icon1 {
    position: fixed;
    bottom: calc(100vh - $meg-menu-height - $meg-tabbar-height);
    left: 0;
    right: 0;
    width: 100vw;
    height: 20px;
    background-color: #9ccdee;
  }
  .layout_slider {
    position: fixed;
    top: calc($meg-menu-height + $meg-tabbar-height);
    width: $meg-slider-width;
    height: calc(100vh - $meg-menu-height - $meg-tabbar-height - 20px);
    //background-color: green;
  }
  .layout_icon2 {
    position: fixed;
    top: calc($meg-menu-height + $meg-tabbar-height);
    width: 20px;
    left: $meg-slider-width;
    bottom: 0;
    height: calc(100vh - $meg-menu-height - $meg-tabbar-height);
    background-color: #9ccdee;
  }
  .layout_main {
    position: fixed;
    top: calc($meg-menu-height + $meg-tabbar-height);
    left: calc($meg-slider-width + 20px);
    right: 0;
    bottom: 0;
    width: calc(100vw - $meg-slider-width);
    height: calc(100vh - $meg-menu-height - $meg-tabbar-height);
    //background-color: blue;
  }
}
</style>
