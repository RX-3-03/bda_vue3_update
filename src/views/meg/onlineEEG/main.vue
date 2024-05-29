<script setup lang="ts">
import { ref, onMounted, getCurrentInstance } from 'vue'
import outputData from './output.json'

const canvasMegVis = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
const currentNum = ref(0)
const intervalId = ref<number | null>(null)
const time = ref(0)
const channelCount = outputData.channels.length
const dataInterval = ref(1)
const lineData = ref<number[][]>(
  Array(channelCount)
    .fill(0)
    .map(() => Array(0).fill(0)),
)
const canvasContainer = ref(null)

onMounted(() => {
  ctx = canvasMegVis.value.getContext('2d')
  console.log(canvasContainer.value)
  const canvasWidth = canvasContainer.value.offsetWidth
  const canvasHeight = canvasContainer.value.offsetHeight
  // canvasMegVis.value.width = canvasWidth
  // canvasMegVis.value.height = canvasHeight
  if (canvasMegVis.value) {
    canvasMegVis.value.width = 1440 // 假设宽度固定为800
    canvasMegVis.value.height = 880 // 假设宽度固定为800
    lineData.value = Array(channelCount)
      .fill(0)
      .map(() => Array(0).fill(0))
    drawGrid()
    intervalId.value = window.setInterval(draw, 16.67) // 60fps
  }
})

const drawGrid = () => {
  if (ctx) {
    ctx.strokeStyle = '#ccc'
    ctx.lineWidth = 0.5
    for (let i = 0; i < ctx.canvas.width; i += 10) {
      ctx.beginPath()
      ctx.moveTo(i, 0)
      ctx.lineTo(i, ctx.canvas.height)
      ctx.stroke()
    }
    for (let i = 0; i < ctx.canvas.height; i += 10) {
      ctx.beginPath()
      ctx.moveTo(0, i)
      ctx.lineTo(ctx.canvas.width, i)
      ctx.stroke()
    }
  }
}

const draw = () => {
  if (ctx) {
    // console.log('draw')
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    drawGrid() // 每次绘制前重新绘制网格

    // 计算每个通道需要多少数据点来填满画布宽度
    const widthPerDataPoint = ctx.canvas.width / dataInterval.value // 假设通道数为10

    if (currentNum.value <= widthPerDataPoint) {
      for (let i = 0; i < channelCount; i++) {
        const value =
          outputData.data[i][time.value % outputData.data[i].length] * 100
        lineData.value[i].push(value)
      }
      currentNum.value += 1
    } else {
      for (let i = 0; i < channelCount; i++) {
        // 更新数据
        const value =
          outputData.data[i][time.value % outputData.data[i].length] * 100
        lineData.value[i].push(value)
        lineData.value[i].shift()
      }
    }
    outputData.channels.forEach((channelName, channelIndex) => {
      let channelData = []
      channelData = lineData.value[channelIndex]
      ctx.beginPath()
      ctx.strokeStyle = '#00008b' // 深蓝色线条
      channelData.forEach((value, index) => {
        ctx.lineTo(
          dataInterval.value * index,
          value * 50 + (channelIndex + 0.6) * 50,
        )
      })
      ctx.stroke()
      // 绘制通道名称
      ctx.fillStyle = '#000000' // 文字颜色
      ctx.fillText(channelName, 20, channelIndex * 50 + 20) // 将通道名称绘制在画布左侧
    })
    time.value += 1
  }
}
</script>

<template>
  <el-tabs class="container" type="border-card">
    <el-tab-pane label="OnlineEEG">
      <el-scrollbar ref="canvasContainer" height="800px">
        <canvas class="eegVis" ref="canvasMegVis"></canvas>
      </el-scrollbar>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped lang="scss">
.container {
  height: 100%;
  width: 100%;
  .canvasContainer {
    width: 100%;
    height: 100%;
  }
}
</style>
