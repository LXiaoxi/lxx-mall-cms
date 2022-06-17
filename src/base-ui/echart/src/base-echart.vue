<template>
  <div class="base-echart">
    <div class="echartDiv" :style="{width:width,height:height}" ref="echartDivRef">
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {ref,onMounted,defineProps,withDefaults,watchEffect} from 'vue'
  import useEchart from '../hooks/useEchart'
  import {EChartsOption} from 'echarts'
  //定义props
  const props=withDefaults(defineProps<{
    options:EChartsOption
    width?:string
    height?:string
  }>(),{
    width:'100%',
    height:'360px'
  })
  //获取dom元素
  const echartDivRef=ref<HTMLElement>()
  onMounted(()=>{
    //结构出来再调用
    const {setOption}=useEchart(echartDivRef.value!)
    watchEffect(()=>{
      setOption(props.options)
    })
  })
</script>

<style lang="less">


</style>
