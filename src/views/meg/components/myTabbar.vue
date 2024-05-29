<template>
  <div class="my_Tabbar">
    <div class="placegolder-container">
      <span class="info1">{{ info1 }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyCard',
  props: {
    info1: {
      type: String,
      default: 'eego_001',
    },
  },
})
</script>

<style scoped lang="scss">
.my_Tabbar {
  position: fixed;
  overflow-y: auto;
  bottom: 0;
  left: 0;
}
.placegolder-container {
  background: white;
  height: 20px;
}
</style>
