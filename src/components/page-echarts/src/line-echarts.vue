<template>
  <div class="line-echarts">
    <base-echarts :options="options"></base-echarts>
  </div>
</template>

<script lang="ts" setup>
  import { computed,defineProps } from 'vue'
  import BaseEcharts from '@/base-ui/echart'
  //接收数据
  const props=defineProps<{
    title?:string
    xLabel?:string[]
    value?:any[]

  }>()
  const options=computed(()=>{
    return{
      title: {
        text:props.title
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: props.xLabel
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '分类销量',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: props.value
        }

      ]
    }
  })
</script>

<style lang="less">


</style>
