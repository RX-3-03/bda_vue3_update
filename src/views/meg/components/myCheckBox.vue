<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyCheckBox',
  props: {
    text: {
      type: String,
      default: 'checkbox',
    },
  },
})
</script>

<template>
  <label class="material-checkbox">
    <input type="checkbox" />
    <span class="checkmark"></span>
    {{ text }}
  </label>
</template>

<style>
.material-checkbox{
  margin: 5px;
}
.material-checkbox {
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
}

.material-checkbox input[type='checkbox'] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.checkmark {
  position: relative;
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-right: 8px;
  border: 2px solid white;
  border-radius: 4px;
  transition: all 0.3s;
}

.material-checkbox input[type='checkbox']:checked ~ .checkmark {
  background-color: #4da1db;
  //border-color: #454b00;
}

.material-checkbox input[type='checkbox']:checked ~ .checkmark:after {
  content: '';
  position: absolute;
  top: 1px;
  left: 5px;
  width: 4px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.material-checkbox:hover input[type='checkbox'] ~ .checkmark {
  border-color: #4da1db;
}

.material-checkbox input[type='checkbox']:disabled ~ .checkmark {
  opacity: 0.5;
  cursor: not-allowed;
}

.material-checkbox input[type='checkbox']:disabled ~ .checkmark:hover {
  border-color: yellow;
}
</style>
