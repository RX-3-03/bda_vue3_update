<template>
  <div class="Container">
    <!-- Display窗体 -->
    <TabbarContainer
      class="ToggleVisibility"
      footerText="Display"
      :containerWidth="600"
    >
      <div class="selectDiv">
        <MySelectBox
          :options="options1"
          allow-clear
          v-model="selectedValue1"
          @change="onChange"
        />
        <h2 class="selectboxfooter1">Montage</h2>
        <MySelectBox
          :options="options2"
          allow-clear
          v-model="selectedValue2"
          @change="onChange"
        />
        <h2 class="selectboxfooter1">Scale[uV]</h2>
      </div>
      <label-button />
      <LabelButton footerText="DC Removal" />
      <LabelButton footerText="Freeze View">
        <template #icon>
          <SvgIcon name="snow" />
        </template>
      </LabelButton>
    </TabbarContainer>
    <!-- Channel Selection窗体 -->
    <TabbarContainer
      class="ImportExport"
      footerText="Channel Selection"
      :containerWidth="350"
    >
      <LabelButton footerText="Unselect All">
        <template #icon>
          <SvgIcon name="list" />
        </template>
      </LabelButton>
      <LabelButton footerText="Invert Selection">
        <template #icon>
          <SvgIcon name="share-internal" />
        </template>
      </LabelButton>
      <LabelButton footerText="Select All">
        <template #icon>
          <SvgIcon name="select-all" />
        </template>
      </LabelButton>
      <LabelButton footerText="Hide Selected">
        <template #icon>
          <SvgIcon name="" />
        </template>
      </LabelButton>
      <LabelButton footerText="Zoom on Selected" />
    </TabbarContainer>
    <!-- filter窗体 -->
    <TabbarContainer
      class="ImportExport"
      footerText="Filter"
      :containerWidth="300"
    >
      <LabelButton footerText="Notch 50Hz" />
      <div>
        <MySelectBox
          :options="options3"
          allow-clear
          v-model="selectedValue3"
          @change="onChange"
        />
        <h2 class="selectboxfooter2">Low Cutoff[Hz]</h2>
        <MySelectBox
          :options="options4"
          allow-clear
          v-model="selectedValue4"
          @change="onChange"
        />
        <h2 class="selectboxfooter2">High Cutoff[Hz]</h2>
      </div>
      <LabelButton />
    </TabbarContainer>
    <!-- Events窗体 -->
    <TabbarContainer
      class="ImportExport"
      footerText="Events"
      :containerWidth="68"
    >
      <LabelButton footerText="Show Events">
        <template #icon>
          <SvgIcon name="video-camera" />
        </template>
      </LabelButton>
    </TabbarContainer>
    <!-- Scroll窗体 -->
    <TabbarContainer
      class="ImportExport"
      footerText="Scroll"
      :containerWidth="110"
    >
      <LabelButton footerText="Scroll Up">
        <template #icon>
          <SvgIcon name="up" />
        </template>
      </LabelButton>
      <LabelButton footerText="Scroll Down">
        <template #icon>
          <SvgIcon name="down" />
        </template>
      </LabelButton>
    </TabbarContainer>
    <!-- 蒙太奇窗体 -->
    <TabbarContainer
      class="ImportExport"
      footerText="Montage"
      :containerWidth="220"
    >
      <LabelButton footerText="Save">
        <template #icon>
          <SvgIcon name="Save" />
        </template>
      </LabelButton>
      <LabelButton footerText="Save As">
        <template #icon>
          <SvgIcon name="Save As" />
        </template>
      </LabelButton>
      <LabelButton footerText="Show inactive channels">
        <template #icon>
          <SvgIcon name="show_channnels" />
        </template>
      </LabelButton>
    </TabbarContainer>
  </div>
</template>

<script setup lang="ts">
import LabelButton from '@/views/meg/components/labelButton.vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import TabbarContainer from '@/views/meg/components/tabbarContainer.vue'
import MySelectBox from '../components/MySelectBox.vue'
import { ref, watchEffect } from 'vue'
const options1 = ref([
  {
    label: 'EEG64',
    value: '1',
  },
  {
    label: 'EEG65',
    value: '2',
  },
  {
    label: 'EEG66',
    value: '3',
  },
  {
    label: 'EEG67',
    value: '4',
  },
  {
    label: 'EEG68',
    value: '5',
  },
])
const options2 = ref([
  {
    label: '70',
    value: '1',
  },
  {
    label: '75',
    value: '2',
  },
  {
    label: '80',
    value: '3',
  },
  {
    label: '85',
    value: '4',
  },
  {
    label: '90',
    value: '5',
  },
])
const options3 = ref([
  {
    label: '0.3',
    value: '1',
  },
  {
    label: '0.4',
    value: '2',
  },
  {
    label: '0.5',
    value: '3',
  },
  {
    label: '0.6',
    value: '4',
  },
  {
    label: '0.7',
    value: '5',
  },
])
const options4 = ref([
  {
    label: '30',
    value: '1',
  },
  {
    label: '35',
    value: '2',
  },
  {
    label: '40',
    value: '3',
  },
  {
    label: '45',
    value: '4',
  },
  {
    label: '50',
    value: '5',
  },
])

const selectedValue1 = ref('5')
const selectedValue2 = ref('5')
const selectedValue3 = ref('5')
const selectedValue4 = ref('5')
watchEffect(() => {
  console.log('selectedValue1:', selectedValue1.value)
  console.log('selectedValue2:', selectedValue2.value)
  console.log('selectedValue3:', selectedValue3.value)
  console.log('selectedValue4:', selectedValue4.value)
})
function onChange(value: string | number, label: string, index: number) {
  console.log('value:', value)
  console.log('label:', label)
  console.log('index:', index)
}
</script>

<style scoped lang="scss">
.Container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  height: 85px;
}
.selectboxfooter1 {
  font-size: 12px;
  margin-left: 30px;
}
.selectboxfooter2 {
  font-size: 12px;
  margin-left: 15px;
}
</style>
