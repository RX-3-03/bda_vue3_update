<script setup lang="ts">
defineProps<{
  name: string
  tab: string
}>()
</script>

<template>
  <div>
    <slot></slot>
  </div>
</template>
