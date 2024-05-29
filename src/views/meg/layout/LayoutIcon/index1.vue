<script lang="ts">
export default {
  name: 'LayoutIcon1',
}
</script>
<template>
  <router-view name="LayoutIcon1Router" v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
