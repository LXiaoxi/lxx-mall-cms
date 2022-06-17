<template>
  <div class="user">
<!--    from-->
<!--   searchformConfig在form是用v-bind展开 -->
    <page-search :searchformConfig="searchformConfig" @resetBtnClick="handleResetClick" @queryBtnClick="handleQueryClick"/>
<!--    table-->
    <page-content :contentTableConfig="contentTableConfig" pagename="users" ref="pageContentRef" @NewClick="handleNewClick" @EditClick="handleEditClick"></page-content>
    <page-modal :modalConfig="modalConfigRef" ref="pageModalRef" :defaultInfo="defaultInfo" pagename="users"></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent,computed,ref} from 'vue'
import PageSearch from '@/components/page-search/index'
import PageContent from '@/components/page-content/index'
import PageModal from '@/components/page-modal'

import {searchformConfig} from './config/search-config'
import {contentTableConfig} from './config/table-config'
import {modalConfig} from './config/modal-config'
import {usePageSearch} from '@/hooks/use-page-search'
import { useMoadl } from '@/hooks/use-page-modal'
import { useStore } from '@/store'
export default defineComponent({
  name: 'user',
  components:{
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const pagename='user'
    const [handleResetClick, handleQueryClick, pageContentRef]=usePageSearch()
    //1.处理密码逻辑
    const newClick=()=>{
      const passwordItem=modalConfig.formItems.find((item)=>item.field==='password')
      passwordItem!.isHidden=false
    }
    const editClick=()=>{
      const passwordItem=modalConfig.formItems.find((item)=>item.field==='password')
      passwordItem!.isHidden=true
    }
    //2.动态添加部门和角色列表
    const store=useStore()
    const modalConfigRef=computed(()=>{
      //部门
      const departItem=modalConfig.formItems.find((item)=>item.field==='departmentId')
      // console.log(departItem!.placeholder)
      departItem!.options=store.state.entireDepartment.map((item)=>{
        return {title:item.name,value:item.id}
      })
      //角色
      const roleItem=modalConfig.formItems.find((item)=>item.field==='roleId')
      roleItem!.options=store.state.entireRole.map((item)=>{
        return {title:item.name,value:item.id}
      })
      return modalConfig
    })

    //3.调用hook获取公共变量和函数
    const [pageModalRef,defaultInfo,handleNewClick,handleEditClick]=useMoadl(newClick,editClick)
    return {
      searchformConfig,
      contentTableConfig,
      modalConfigRef,
      pagename,
      handleResetClick,
      handleQueryClick,
      pageContentRef,
      pageModalRef,
      handleNewClick,
      handleEditClick,
      defaultInfo
    }
  }
})
</script>

<style scoped>

</style>
