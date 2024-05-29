<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyInput',
  props: {
    labelWidth: {
      type: Number,
      default: 400,
    },
  },
})
</script>

<template>
  <input
    placeholder=""
    type="text"
    name="text"
    class="input"
    :style="{ width: labelWidth + 'px' }"
  />
</template>

<style scoped lang="scss">
.input {
  max-width: 480px;
  height: 16px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid lightgrey;
  outline: none;
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: 0px 0px 20px -18px;
  text-align: right;
}
</style>
