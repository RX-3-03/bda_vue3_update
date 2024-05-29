<script setup lang="ts">
import { ref } from 'vue'
import { ElTable } from 'element-plus'

interface Amplifier {
  name: string
  deviceType: string
  inputCount: number
  refCount: number
  bipCount: number
  sensorCount: number
  reference: string
  lastSaved: string
  isArchived: boolean
  isReadOnly: boolean
  isDefault: boolean
  isActive: boolean
}

const currentRow = ref()
const singleTableRef = ref<InstanceType<typeof ElTable>>()

const setCurrent = (row?: Amplifier) => {
  singleTableRef.value!.setCurrentRow(row)
}
const handleCurrentChange = (val: Amplifier | undefined) => {
  currentRow.value = val
}
const tableData: Amplifier[] = [
  {
    name: 'Amplifier 1',
    deviceType: 'Type 1',
    inputCount: 10,
    refCount: 10,
    bipCount: 0,
    sensorCount: 0,
    reference: 'RM',
    lastSaved: '2021-04-13T17:11:23',
    isArchived: false,
    isReadOnly: false,
    isDefault: false,
    isActive: true,
  },
  {
    name: 'Amplifier 2',
    deviceType: 'Type 2',
    inputCount: 20,
    refCount: 20,
    bipCount: 0,
    sensorCount: 0,
    reference: 'FZ',
    lastSaved: '2021-04-13T17:11:23',
    isArchived: false,
    isReadOnly: false,
    isDefault: false,
    isActive: true,
  },
  {
    name: 'Amplifier 3',
    deviceType: 'Type 3',
    inputCount: 30,
    refCount: 30,
    bipCount: 0,
    sensorCount: 0,
    reference: 'RM',
    lastSaved: '2021-04-13T17:11:23',
    isArchived: false,
    isReadOnly: false,
    isDefault: false,
    isActive: true,
  },
  {
    name: 'Amplifier 4',
    deviceType: 'Type 4',
    inputCount: 40,
    refCount: 40,
    bipCount: 0,
    sensorCount: 0,
    reference: 'FZ',
    lastSaved: '2021-04-13T17:11:23',
    isArchived: false,
    isReadOnly: false,
    isDefault: false,
    isActive: true,
  },
  {
    name: 'Amplifier 5',
    deviceType: 'Type 5',
    inputCount: 50,
    refCount: 50,
    bipCount: 0,
    sensorCount: 0,
    reference: 'RM',
    lastSaved: '2021-04-13T17:11:23',
    isArchived: false,
    isReadOnly: false,
    isDefault: false,
    isActive: true,
  },
  {
    name: 'Amplifier 6',
    deviceType: 'Type 6',
    inputCount: 60,
    refCount: 60,
    bipCount: 0,
    sensorCount: 0,
    reference: 'FZ',
    lastSaved: '2021-04-13T17:11:23',
    isArchived: false,
    isReadOnly: false,
    isDefault: false,
    isActive: true,
  },
  {
    name: 'Amplifier 7',
    deviceType: 'Type 7',
    inputCount: 70,
    refCount: 70,
    bipCount: 0,
    sensorCount: 0,
    reference: 'RM',
    lastSaved: '2021-04-13T17:11:23',
    isArchived: false,
    isReadOnly: false,
    isDefault: false,
    isActive: true,
  },
  {
    name: 'Amplifier 8',
    deviceType: 'Type 8',
    inputCount: 80,
    refCount: 80,
    bipCount: 0,
    sensorCount: 0,
    reference: 'FZ',
    lastSaved: '2021-04-13T17:11:23',
    isArchived: false,
    isReadOnly: false,
    isDefault: false,
    isActive: true,
  },
]
</script>

<template>
  <el-tabs class="container" type="border-card">
    <el-tab-pane label="User">
      <el-table
        ref="singleTableRef"
        :data="tableData"
        highlight-current-row
        style="width: 100%"
        @current-change="handleCurrentChange"
      >
        <el-table-column prop="name" label="Name"></el-table-column>
        <el-table-column
          prop="deviceType"
          label="Device Type"
        ></el-table-column>
        <el-table-column
          prop="inputCount"
          label="Input Count"
        ></el-table-column>
        <el-table-column prop="refCount" label="Ref Count"></el-table-column>
        <el-table-column prop="bipCount" label="BIP Count"></el-table-column>
        <el-table-column
          prop="sensorCount"
          label="Sensor Count"
        ></el-table-column>
        <el-table-column prop="reference" label="Reference"></el-table-column>
        <el-table-column prop="lastSaved" label="Last Saved"></el-table-column>
        <el-table-column
          prop="isArchived"
          label="Is Archived"
        ></el-table-column>
        <el-table-column
          prop="isReadOnly"
          label="Is Read Only"
        ></el-table-column>
        <el-table-column prop="isDefault" label="Is Default"></el-table-column>
        <el-table-column prop="isActive" label="Is Active"></el-table-column>
      </el-table>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped lang="scss">
.container {
  height: 100%;
  width: 100%;
}
.el-table-column {
  text-align: center;
}
</style>
