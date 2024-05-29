<script setup lang="ts">
defineProps(['menuList'])
import { useRouter } from 'vue-router'
let $router = new useRouter()
const goRoute = (vc: any) => {
  console.log(vc.index)
  $router.push(vc.index)
}
</script>
<script lang="ts">
export default {
  name: 'Menu',
}
</script>

<template>
  <template v-for="(item, index) in menuList" :key="item.path">
    <!-- 没有子路由 -->
    <template v-if="!item.children || item.path === '/meg'">
      <el-menu-item
        v-if="!item.meta.hidden"
        :index="item.path"
        @click="goRoute"
      >
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
  </template>
</template>
<style scoped lang="scss">
.el-menu-item {
  font-size: 10px;
}
</style>
