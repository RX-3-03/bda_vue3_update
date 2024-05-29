<template>
  <MySlider class="Contatiner" title="Record Control">
    <MyCard title="Workflow Control">
      <div>
        <div class="Control_style">
          <LabelButton footerText="Finalize">
            <template #icon>
              <SvgIcon name="finalize" />
            </template>
          </LabelButton>
          <LabelButton footerText="Cancel">
            <template #icon>
              <SvgIcon name="cancel" />
            </template>
          </LabelButton>
        </div>
        <br />
        <div>
          <CheckBox />
        </div>
        <br />
      </div>
    </MyCard>
    <MyCard title="EEG">
      <LabelButton footerText="Record">
        <template #icon>
          <SvgIcon name="record" />
        </template>
      </LabelButton>
      <LabelButton footerText="Impedance" />
    </MyCard>
    <MyCard title="Annotations">
      <label></label>
    </MyCard>
  </MySlider>
</template>
<script setup lang="ts">
import MyCard from '@/views/meg/components/myCard.vue'
import LabelButton from '@/views/meg/components/labelButton.vue'
import MySlider from '@/views/meg/components/mySlider.vue'
import CheckBox from '../components/checkBox.vue'
</script>

<style scoped lang="scss">
.Contatiner {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 10px;
}
.Control_style {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
