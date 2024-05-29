<script lang="ts">
export default {
  name: 'Slider',
}
</script>
<template>
  <router-view name="sliderRouter" v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
