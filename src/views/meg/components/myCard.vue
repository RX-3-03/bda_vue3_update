<template>
  <div class="my-card">
    <div class="card-header">
      <span :style="{ fontSize: titleFontSize + 'px' }">{{ title }}</span>
      <hr />
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyCard',
  props: {
    title: {
      type: String,
      default: 'Card Title',
    },
    titleFontSize: {
      type: Number,
      default: 13,
    },
  },
})
</script>

<style scoped>
.my-card {
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* 定义边框的圆角大小 */
  border-radius: 4px;
  padding: 0px;
  margin-bottom: 10px;
  /* //box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
  /* .card-header {
    flex: 1;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    background: #f5f4f1;
    font-weight: bold;
    font-size: 20px;
    white-space: nowrap;
    border-radius: 2px;
  } */
  .card-content {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100px; /* 确保内容高度至少为100px */
    gap: 10px;
    background: linear-gradient(to bottom, #c1e6fb, #8dc3e8);
    border-radius: 4px;
  }
}
.card-header {
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  background: #f5f4f1;
  font-weight: bold;
  font-size: 20px;
  white-space: nowrap;
  border-radius: 2px;
}
</style>
