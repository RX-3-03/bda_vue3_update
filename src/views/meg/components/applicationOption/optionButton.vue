<template>
  <button>{{ text }}</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'OptionButton',
  props: {
    text: {
      type: String,
      default: 'Button',
    },
  },
})
</script>
<style scoped lang="scss">
button {
  margin: 5px;
  width: 70px;
  height: 35px;
  padding: 5px;
  border: 0;
  border-radius: 10px;
  background-color: #4da1db;
  color: #ffffff;
  font-weight: Bold;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
}

button:hover {
  background-color: #6fc5ff;
  box-shadow: 0 0 20px #6fc5ff50;
}

button:active {
  background-color: #3d94cf;
  -webkit-transition: all 0.25s;
  box-shadow: none;
}
</style>
