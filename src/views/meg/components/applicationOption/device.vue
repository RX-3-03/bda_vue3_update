<template>
  <OptionContainer class="recordEEG" title="设备选项">
    <OptionCard title="放大器设备类型">
      <div class="labelInput">
        <p>放大器类型:</p>
        <MyInput label-width="380"></MyInput>
      </div>
      <div class="labelInput">
        <p>序列号:</p>
        <MyInput label-width="410"></MyInput>
      </div>
    </OptionCard>
    <OptionCard title="放大器位置">
      <el-radio-group v-model="radio" style="padding: 5px">
        <el-radio :value="1">本地</el-radio>
        <el-radio :value="2">远程</el-radio>
      </el-radio-group>
    </OptionCard>
    <OptionCard title="传感器">
      <div>
        <MyCheckBox text="启用SpO2传感器" />
      </div>
    </OptionCard>
  </OptionContainer>
</template>
<script setup lang="ts">
import OptionContainer from '@/views/meg/components/applicationOption/optionContainer.vue'
import OptionCard from '@/views/meg/components/applicationOption/optionCard.vue'
import MyCheckBox from '@/views/meg/components/myCheckBox.vue'
import MyInput from '@/views/meg/components/myInput.vue'
</script>
<script lang="ts">
import { defineComponent, ref } from 'vue'

const radio = ref(1)
export default defineComponent({
  name: 'Device',
})
</script>

<style scoped lang="scss">
.labelInput{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 5px;
}
</style>
