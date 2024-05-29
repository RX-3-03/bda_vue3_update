<script setup lang="ts">
import { color } from 'echarts'
import { ref, useSlots, h } from 'vue'

const globalProps = defineProps<{
  name: string
  default?: string
}>()

const slots = useSlots()
let currentTab = ref<string>(globalProps.default || '')

const renderContent = () => {
  return (
    slots.default &&
    slots.default().find((it) => {
      if (currentTab.value === '') {
        return true
      }
      return it.props?.name === currentTab.value
    })
  )
}

const renderOneButton = (name: string, tab: string, index: number) =>
  h(
    'label',
    {
      style: {
        width: '100%',
        height: '100%',
        padding: '10px',
        textAlign: 'center',
        transition: 'background-color 0.3s ease', // 添加过渡效果
        border: '1px solid #8dc3e8',
        backgroundColor: currentTab.value === name ? '#4da1db' : '#8dc3e8',
      },
    },
    [
      h(
        'input',
        {
          name: globalProps.name,
          value: name,
          type: 'radio',
          style: {
            display: 'none',
          },
          onclick: () => {
            currentTab.value = name
          },
        },
        {},
      ),
      tab,
    ],
  )

const renderTabBar = () =>
  h(
    'div',
    {
      style: {
        display: 'flex',
        gap: '0px',
        padding: '10px',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        height: '100%',
      },
    },
    slots.default &&
      slots.default().map((it, index) => {
        return renderOneButton(it.props?.name, it.props?.tab, index)
      }),
  )
</script>

<template>
  <div class="tabContainer">
    <render-tab-bar class="tabbar" />
    <render-content class="tabbarContent" />
  </div>
</template>
<style lang="scss">
.tabContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  flex-direction: row;
  .tabbar {
    width: fit-content;
  }
  .tabbarContent {
    width: 500px;
  }
}
</style>
