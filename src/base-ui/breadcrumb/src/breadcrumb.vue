<template>
  <div class="breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <template v-for="item in breadcrumb" :key="item.name">
        <el-breadcrumb-item>{{item.name}}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
  import { defineComponent,PropType } from 'vue'
  import {IBreadcrumb} from '@/base-ui/breadcrumb'

  export default defineComponent({
    name: 'breadcrumb',
    components: {},
    //接收数据
    props:{
      breadcrumb:{
        type:Array as PropType<IBreadcrumb[]>,
        default:()=>[]
      }
    }
  })
</script>

<style lang="less">


</style>
