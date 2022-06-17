<template>
  <div class="page-modal">
<!--    user页面传过来的数据要用v-bind展开-->
    <el-dialog v-model="dialogVisible" title="新增用户" width="30%" center destroy-on-close >
      <xx-form v-bind="modalConfig" v-model="formData" ></xx-form>
      <slot></slot>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleConfigClick">确定</el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
  import { defineComponent,ref,watch } from 'vue'
  import xxForm from '@/base-ui/form'
  import { useStore } from '@/store'
  export default defineComponent({
    name: 'page-modal',
    props:{
      modalConfig:{
        type:Object,
        required:true
      },
      defaultInfo:{
        type:Object,
        default:()=>({})
      },
      pagename:{
        type:String,
        required:true
      },
      //接收role的其他数据
      otherInfo:{
        type:Object,
        default:()=>({})
      }

    },
    components: {
      xxForm
    },
    setup(props){
      //回显事件
      console.log({...props.otherInfo})
      const dialogVisible=ref(false)
      //formData双向绑定的数据
      const formData=ref<any>({})
      console.log('xinjian')
      watch(()=>props.defaultInfo,(newValue)=>{
        for (const item of props.modalConfig?.formItems){
          formData.value[`${item.field}`]=newValue[`${item.field}`]
        }
      })
      //新建
      const store=useStore()
      const handleConfigClick=()=>{
        dialogVisible.value = false
        if (Object.keys(props.defaultInfo).length){
          //编辑
          //请求数据
          store.dispatch('SystemModule/editPageDataAction',{
            PageName:props.pagename,
            editData:{...formData.value,...props.otherInfo},
            id:props.defaultInfo.id
          })
        }else {
          //新建
          console.log(props.pagename)
          store.dispatch('SystemModule/createPageDataAction',{
            PageName:props.pagename,
            newData:{...formData.value,...props.otherInfo}
          })
        }
      }

      return{
        dialogVisible,
        formData,
        handleConfigClick
      }
    }
  })
</script>

<style lang="less">

</style>
