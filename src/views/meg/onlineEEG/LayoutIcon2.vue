<script setup lang="ts">
import { ArrowRight, Fold, Expand } from '@element-plus/icons-vue'
import useLayOutSettingStore from '@/store/modules/setting'
let LayOutSettingStore = useLayOutSettingStore()
const changeIcon = () => {
  LayOutSettingStore.fold = !LayOutSettingStore.fold
}
</script>

<template>
  <div class="iconStyle">
    <el-icon
      style="cursor: pointer; margin-top: 350px"
      size="20px"
      @click="changeIcon"
    >
      <component :is="LayOutSettingStore.fold ? Expand : Fold"></component>
    </el-icon>
  </div>
</template>

<style lang="scss" scoped>
.iconStyle {
  background-color: #9ccdee;
  height: 100%;
  width: 100%;
}
</style>
