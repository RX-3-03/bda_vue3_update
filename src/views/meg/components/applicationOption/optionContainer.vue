<script setup lang="ts">

</script>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OptionContainer',
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    titleFontSize: {
      type: Number,
      default: 16,
    },
  },
})
</script>
<template>
  <div class="optionContainer">
    <div class="option-header">
      <span :style="{ fontSize: titleFontSize + 'px' }">{{ title }}</span>
    </div>
    <div class="option-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.optionContainer {
  width: 100%;
  height: 100%;
  background: #c1e6fb;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .option-header {
    justify-content: space-between;
    font-weight: bold;
    background: linear-gradient(to right, #8bc2e7, #c1e6fb);
    height: 30px;
    border-radius: 4px;
    padding: 10px;
  }
  .option-content {
    min-height: 100px;
  }
}
</style>
