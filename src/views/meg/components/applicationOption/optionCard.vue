<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OptionCard',
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    titleFontSize: {
      type: Number,
      default: 14,
    },
  },
})
</script>

<template>
  <div class="option-card">
    <div class="option-header">
      <span :style="{ fontSize: titleFontSize + 'px' }" style="margin: 3px;">{{ title }}</span>
    </div>
    <div class="option-content" >
        <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.option-card {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* 定义边框的圆角大小 */
  border-radius: 4px;
  padding: 0px;
  margin-bottom: 10px;
  .option-header {
    flex: 1;
    display: flex;
    justify-content: space-between;
    height: fit-content;
    background: #f5f4f1;
    font-weight: bold;
    white-space: nowrap;
    border-radius: 2px;
  }
  .option-content {
    padding:5px;
    //display: flex;
    width: 100%;
    align-items: center;
    min-height: 10px; /* 确保内容高度至少为100px */
    gap: 3px;
    background: linear-gradient(to bottom, #c1e6fb, #8dc3e8);
    border-radius: 4px;
  }
}
</style>
