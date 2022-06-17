<template>
  <div class="page-content">
<!--    信息布局-->
    <xx-table :listData="dataList" v-bind="contentTableConfig" :listCount="dataCount" v-model:page="pageInfo"><!--page update:page-->
      <!--      header中的插槽-->
      <template #headerhandle>
        <el-button v-if="isCreate" type="primary" @click="handleNewClick">新建用户</el-button>

        <el-button><el-icon><el-icon><refresh /></el-icon></el-icon></el-button>
      </template>
      <!--      列中的插槽-->
      <template #status="scope">
        <el-button plain size="mini" :type="scope.row.enable ? 'success':'danger'">{{scope.row.enable ? '启用':'禁用'}}</el-button>
      </template>
      <template #createAt="scope">
        <strong>{{$filters.formatTime(scope.row.createAt)}}</strong>
      </template>
      <template #updateAt="scope">
        <strong>{{$filters.formatTime(scope.row.updateAt)}}</strong>
      </template>
      <template #handle="scope">
        <div class="handle-btn">
          <el-button v-if="isUpdate" type="text" size="mini" @click="handleEidtClick(scope.row)"><el-icon><edit /></el-icon>编辑</el-button>
          <el-button v-if="isDelete" type="text" size="mini" @click="handleDelectClick(scope.row)"><el-icon><folder-delete /></el-icon>删除</el-button>
        </div>
      </template>
<!--      跨组件插槽-->

<!--      动态插槽-->
      <template v-for="item in otherPropSlots" :key="item.prop" #[item.slotName]="scope">
        <slot :name="item.slotName" :row="scope.row"></slot>
      </template>
    </xx-table>

  </div>
</template>

<script lang="ts">
  import { computed, defineComponent,watch,ref } from 'vue'
  import xxTable from '@/base-ui/table/index'
  import { useStore } from '@/store'
  import {usrPermission} from '@/hooks/use-page-permission'
  export default defineComponent({
    name: 'page-content',
    props:{
      contentTableConfig:{
        type:Object,
        required:true
      },
      pagename:{
        type:String,
        required:true
      }
    },
    components: {
      xxTable
    },
    emits:['NewClick','EditClick'],
    setup(props,{emit}){
      //传过去的数据
      const store=useStore()
      const pageInfo=ref({currentPage:1,pageSize:10})

      //获取操作的权限
      const isCreate =usrPermission(props.pagename,'create')
      const isUpdate=usrPermission(props.pagename,'update')
      const isDelete =usrPermission(props.pagename,'delete')
      const isQuery=usrPermission(props.pagename,'query')
      //跟主store匹配
      const getpageData=(queryInfo:any={})=>{
        if (!isQuery) return
        store.dispatch('SystemModule/getpageDatalistAction',{

          pageUrl:props.pagename,
          queryInfo:{
            offset:(pageInfo.value.currentPage-1)*pageInfo.value.pageSize,
            size:pageInfo.value.pageSize,
            ...queryInfo
          }
        })
      }
      watch(pageInfo,()=>{getpageData()})
      getpageData()
      //获取数据
      //在state直接获取数据
      // const userList=computed(()=>store.state.SystemModule.userList)
      // const userCount=computed(()=>store.state.SystemModule.usercount)
      const dataList=computed(()=>store.getters[`SystemModule/pageListData`](props.pagename))
      const dataCount=computed(()=>store.getters[`SystemModule/pageCountData`](props.pagename))
      //跨组件插槽
      const otherPropSlots=props.contentTableConfig.propsList.filter((item:any)=>{
        if (item.slotName==='status') return false
        if (item.slotName==='createAt') return false
        if (item.slotName==='updateAt') return false
        if (item.slotName==='handle') return false
        return true

      })
      //删除/编辑/新增按钮点击事件
      const handleDelectClick=(item:any)=>{
        store.dispatch('SystemModule/deletePageDataAction',{
          pageName:props.pagename,
          id:item.id
        })

      }
      const handleNewClick=()=>{
        emit('NewClick')
      }
      const handleEidtClick=(item:any)=>{
        emit('EditClick',item)

      }
      return{
        dataList,
        dataCount,
        getpageData,
        pageInfo,
        otherPropSlots,
        isCreate,
        isUpdate,
        isDelete,
        handleDelectClick,
        handleNewClick,
        handleEidtClick
      }
    }
  })
</script>

<style lang="less">


</style>
