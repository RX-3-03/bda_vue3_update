<script lang="ts">
export default {
  name: 'Main',
}
</script>
<template>
  <router-view name="mainRouter" v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
