import * as echarts from 'echarts'
import chinaMapData from '../data/china.json'
echarts.registerMap('china',chinaMapData)
export default function(el:HTMLElement) {
  //1.初始化
  const echartInstance=echarts.init(el)
  //echarts.EChartsOption->导入EChartsOptions
  //2.设置options
  const setOption=(options:echarts.EChartsOption)=>{
    echartInstance.setOption(options)
  }
  const update=()=>{
    echartInstance.resize()
  }
  //响应式
  window.addEventListener('resize',()=>{
    echartInstance.resize()
  })
  return{
    echartInstance,
    setOption,
    update
  }
}
