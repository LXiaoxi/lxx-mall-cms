<template>
  <div class="page-search">
    <xx-form v-bind="searchformConfig" v-model="fromModule" >
      <template #header>
        <h2>高级检索</h2>
      </template>
      <template #foot>
        <div class="btn">
          <el-button type="primary" @click="handleResetClick" >重置</el-button>
          <el-button @click="handlequeryClick">检查</el-button>
        </div>
      </template>
    </xx-form>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import xxForm from '@/base-ui/form'

  export default defineComponent({
    name: 'page-search',
    props:{
      searchformConfig:{
        type:Object,
        requried:true
      }
    },
    components: {
      xxForm
    },
    emits:['resetBtnClick','queryBtnClick'],
    setup(props,{emit}){
      //formItems=>里面所有的元素
      const formItems=props.searchformConfig?.formItems
      const formOriginData:any={}

      for(const item of formItems){
        //item->获取里面每一个小的元素
        formOriginData[item.field]=undefined
      }
      const fromModule=ref(formOriginData)
      const handleResetClick=()=>{
        for (const key in formOriginData) {
          //根据key获取value的值
          fromModule.value[`${key}`]=formOriginData[key]

        }
        // fromModule.value=formOriginData
        emit('resetBtnClick')
      }
      const handlequeryClick=()=>{
        emit('queryBtnClick',fromModule.value)
      }
      return{
        fromModule,
        handleResetClick,
        handlequeryClick
      }
    }
  })
</script>

<style lang="less">
  .page-search{
    background-color:#ffffff;
  }
  .btn{
    text-align: right;
    padding: 20px 0;

  }
</style>
