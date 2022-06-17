<template>
  <div class="rose-echarts">
    <base-echarts :options="options"></base-echarts>
  </div>
</template>

<script lang="ts" setup>
  import BaseEcharts from '@/base-ui/echart'
  import {defineProps,computed} from 'vue'
  import { IDataType } from '@/components/page-echarts/typs/type'
  const props=defineProps<{
    roleData:IDataType
  }>()
  const options=computed(()=>{
    return{

      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          name: 'Nightingale Chart',
          type: 'pie',
          radius: [10, 100],
          center: ['50%', '50%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 8
          },
          data: props.roleData
        }
      ]
    }
  })
</script>

<style lang="less">


</style>
