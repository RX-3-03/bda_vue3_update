<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'Tabbar',
}
</script>

<template>
  <router-view name="tabberRouter" v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped></style>
