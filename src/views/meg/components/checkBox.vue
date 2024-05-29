<template>
  <div class="checkbox">
    <el-checkbox-group v-model="checkList" size="small">
      <el-checkbox
        label="Restart Workflow on Cancel or Finalize"
        value="Value A"
      />
      <el-checkbox label="Review recorded data on Finalize" value="Value B" />
      <el-checkbox
        label="Back to Workflow selection on Cancel or Finalize"
        value="Value C"
      />
    </el-checkbox-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const checkList = ref()
</script>

<style lang="scss" scoped>
::v-deep .el-checkbox__label {
  white-space: normal;
  word-break: break-all;
  overflow: hidden;
  font-weight: normal;
  color: black;
}
::v-deep .el-checkbox__input.is-checked + .el-checkbox__label {
  color: black;
}
</style>
