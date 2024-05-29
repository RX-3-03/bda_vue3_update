<script setup lang="ts">
import { ArrowRight, Fold, Expand } from '@element-plus/icons-vue'
import useLayOutSettingStore from '@/store/modules/setting'
let LayOutSettingStore = useLayOutSettingStore()
const changeIcon = () => {
  LayOutSettingStore.fold = !LayOutSettingStore.fold
}
</script>

<template>
  <div>
    <el-icon
      style="cursor: pointer; margin-left: 50vw"
      size="20px"
      @click="changeIcon"
    >
      <component :is="LayOutSettingStore.fold ? Expand : Fold"></component>
    </el-icon>
  </div>
</template>
