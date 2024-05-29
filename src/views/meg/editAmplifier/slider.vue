<template>
  <MySlider class="contatiner" title="Edit Amplifier">
    <MyCard title="Workflow Control">
      <LabelButton footerText="Finalize">
        <template #icon>
          <SvgIcon name="finalize" />
        </template>
      </LabelButton>
    </MyCard>
    <MyCard title="Amplifier Setup">
      <LabelButton footerText="New">
        <template #icon>
          <SvgIcon name="new" />
        </template>
      </LabelButton>
      <LabelButton footerText="Delete">
        <template #icon>
          <SvgIcon name="delete" />
        </template>
      </LabelButton>
    </MyCard>
    <MyCard title="Edit Selected Amplifier">
      <LabelButton footerText="Edit Amplifier">
        <template #icon>
          <SvgIcon name="edit" />
        </template>
      </LabelButton>
    </MyCard>
  </MySlider>
</template>
<script setup lang="ts">
import MyCard from '@/views/meg/components/myCard.vue'
import LabelButton from '@/views/meg/components/labelButton.vue'
import MySlider from '@/views/meg/components/mySlider.vue'
</script>

<style scoped lang="scss">
.contatiner {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 10px;
}
</style>
