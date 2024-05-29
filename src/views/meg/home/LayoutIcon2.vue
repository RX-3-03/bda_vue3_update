<template>
  <div v-if="ShowContent"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const ShowContent = ref(false)
</script>
