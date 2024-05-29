<script lang="ts">
export default {
  name: 'LayoutIcon2',
}
</script>
<template>
  <router-view name="LayoutIcon2Router" v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
