<script setup lang="ts">
import BreadCrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
</script>
<script lang="ts">
export default {
  name: 'Tabbar',
}
</script>

<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <BreadCrumb />
    </div>
    <div class="tabber_right">
      <Setting />
    </div>
  </div>
</template>

<style>
.tabbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  .tabbar_left {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .tabber_right {
    display: flex;
    align-items: center;
  }
}
</style>
