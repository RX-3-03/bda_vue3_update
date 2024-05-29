<template>
  <div class="container">
    <TabbarContainer
      class="EEGWorkFlows"
      footerText="EEG WorkFlows"
      :containerWidth="138"
    >
      <LabelButton footerText="Acquire" />
      <LabelButton footerText="Review & Export" />
    </TabbarContainer>
    <TabbarContainer
      class="EEGWorkFlows"
      footerText="EEG WorkFlows"
      :containerWidth="280"
    >
      <LabelButton footerText="Sibkects & Recording" />
      <LabelButton footerText="Edit Montage" />
      <LabelButton footerText="Edit Amplifier" @click="goEditAmplifier" />
      <LabelButton footerText="Edit Annotations" />
    </TabbarContainer>
  </div>
</template>
<script setup lang="ts">
import MyButton from '@/views/meg/components/myButton.vue'
import TabbarContainer from '@/views/meg/components/tabbarContainer.vue'
import LabelButton from '@/views/meg/components/labelButton.vue'
import { useRouter } from 'vue-router'

let $router = new useRouter()
const goEditAmplifier = (vc: any) => {
  $router.push('/meg/editAmplifier')
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
