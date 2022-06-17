<template>
  <div class="role">
    <page-search   :searchformConfig="searchformConfig"></page-search>
    <page-content  :contentTableConfig="contentTableConfig" pagename="role" @NewClick="handleNewClick" @EditClick="handleEditClick"></page-content>
    <page-modal :modalConfig="modalConfig" pagename="role" ref="pageModalRef" :defaultInfo="defaultInfo" :otherInfo="otherInfo">
<!--      el-tree data->要展示的数据 props->子级 {children:'children',label:'name'} check每点击都会回调会接收两个参数-->
      <div class="menu-tree">
        <el-tree ref="elTreeRef" :data="menus" :props="{children:'children',label:'name'}" show-checkbox node-key="id" @check="handleCheckNodes">
        </el-tree>
      </div>


    </page-modal>
<!--
  modalConfig->配置文件
  pagename->请求的路径
  ref->数据的绑定
  defaultInfo->默认信息
-->
  </div>
</template>

<script lang="ts">
import { defineComponent ,computed,ref,nextTick} from 'vue'
import { ElTree } from 'element-plus'
import {contentTableConfig} from './config/table-config'
import {searchformConfig} from './config/search-config'
import {modalConfig} from './config/modal-config'
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import PageModal from '@/components/page-modal'
//新建角色的逻辑
import {useMoadl} from '@/hooks/use-page-modal'
import { useStore } from '@/store'
import { menuMapLeafKeys } from '@/uilts/map_menus'
export default defineComponent({
  name: 'role',
  components:{
    PageContent,
    PageSearch,
    PageModal
  },
  setup() {
    //拿到hook的handleEditClick的item
    // 1.处理pageModal的hook
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCallback = (item: any) => {
      const leafKeys = menuMapLeafKeys(item.menuList)
      nextTick(() => {
        console.log(elTreeRef.value)
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }
    const [pageModalRef,defaultInfo,handleNewClick,handleEditClick]=useMoadl(undefined,editCallback)

    const store=useStore()
    const menus=computed(()=>store.state.entireMenus)
    //otherInfo是给modal传过去的另一个对象
    const otherInfo=ref({})
    const handleCheckNodes=(data1:any,data2:any)=>{
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList=[...checkedKeys,...halfCheckedKeys]
      otherInfo.value={menuList}
    }
    return {
      contentTableConfig,
      searchformConfig,
      modalConfig,
      pageModalRef,
      defaultInfo,
      handleNewClick,
      handleEditClick,
      menus,
      otherInfo,
      handleCheckNodes,
      elTreeRef
    }
  }
})
</script>

<style scoped lang="less">
  .menu-tree{
    margin-left: 30px;
  }
</style>
