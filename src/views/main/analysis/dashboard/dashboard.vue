<template>
  <div class="dashboard">
    <el-row gutter="10">
      <el-col :span="7">
        <card title="分类销量数量(饼图)">
          <pei-echarts :pieData="categoryGoodsCount"></pei-echarts>
        </card>
      </el-col>
      <el-col :span="10">
        <card title="不同城市商品销量">
          <map-echarts :mapData="addressGoodsSale"></map-echarts>
        </card>
      </el-col>
      <el-col :span="7">
        <card title="分类销量数量(玫瑰图)">
          <role-echarts :roleData="categoryGoodsCount"></role-echarts>
        </card>
      </el-col>
    </el-row>
    <el-row class="content-row" gutter="10">
      <el-col :span="12">
        <card title="分类商品的销售">
          <line-echarts v-bind="categoryGoodsSales"></line-echarts>
        </card>
      </el-col>
      <el-col :span="12">
        <card title="分类商品的收藏">
          <bar-echarts v-bind="categoryGoodsFavor"></bar-echarts>
        </card>
      </el-col>
    </el-row>

  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useStore } from '@/store'
  import Card from '@/base-ui/cart/index'
  import {PeiEcharts,RoleEcharts,LineEcharts,BarEcharts,MapEcharts} from '@/components/page-echarts'
  export default defineComponent({
    name: 'dashboard',
    components: {
      Card,
      PeiEcharts,
      RoleEcharts,
      LineEcharts,
      BarEcharts,
      MapEcharts
    },
    setup() {
      const store = useStore()
      store.dispatch('DashModule/getDashdoard')
      //获取数据饼图
      const categoryGoodsCount = computed(() => {
        return store.state.DashModule.categoryGoodsCount.map((item: any) => {
          return { name: item.name, value: item.goodsCount }
        })
      })
      const categoryGoodsSales=computed(()=>{

        const xLabel:string[]=[]
        const value:string[]=[]
        const categoryGoodsSales=store.state.DashModule.categoryGoodsSale
        for (const item of categoryGoodsSales){
          xLabel.push(item.name)
          value.push(item.goodsCount)
        }
        return {xLabel,value}
      })
      const categoryGoodsFavor=computed(()=>{
        const xLable:string[]=[]
        const value:string[]=[]
        const categoryGoodsFavor=store.state.DashModule.categoryGoodsFavor
        for(const item of categoryGoodsFavor){
          xLable.push(item.name)
          value.push(item.goodsFavor)
        }
        return {xLable,value}

      })
      const addressGoodsSale=computed(()=>{
        return store.state.DashModule.addressGoodsSale.map((item)=>{
          return {name:item.address,value:item.count}
        })

      })
      return {
        categoryGoodsCount,
        categoryGoodsSales,
        categoryGoodsFavor,
        addressGoodsSale

      }
    }
  })
</script>

<style scoped>
  .content-row {
    margin-top: 20px
  }
</style>
