<template>
  <OptionContainer class="recordEEG" title="脑电测量选项">
    <OptionCard title="陷波滤波器频率">
      <el-radio-group v-model="radio">
        <el-radio :value="1">50 Hz</el-radio>
        <el-radio :value="2">60 Hz</el-radio>
      </el-radio-group>
    </OptionCard>
    <OptionCard title="默认采集参数">
      <div>
        <MyCheckBox text="在工作流中启用放大器设置选项" />
      </div>
      <div>
        <MyCheckBox text="在工作流中启用采样率选项" />
      </div>
      <div class="labelInput">
        <label>采样率（Hz）:</label>
        <MyInput label-width="350" style="left: 1000px"></MyInput>
      </div>
    </OptionCard>
    <OptionCard title="阻抗选项">
      <div  class="labelInput">
        <p>最高阻抗:</p>
        <MyInput label-width="380"></MyInput>
      </div>
      <div  class="labelInput">
        <p>最低阻抗:</p>
        <MyInput label-width="380"></MyInput>
      </div>
      <div>
        <MyCheckBox text="是否在记录EEG前测量阻抗" />
      </div>
    </OptionCard>
    <OptionCard title="记录设置">
      <div  class="labelInput">
        <p>每个记录最大分片数量：</p>
        <MyInput label-width="310"></MyInput>
      </div>
    </OptionCard>
    <OptionCard title="实时查看选项">
      <div>
        <MyCheckBox text="启用实时查看功能" />
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
  name: 'RecordEEG',
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
