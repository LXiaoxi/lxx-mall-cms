<template>
  <div class="nav-header">

      <el-icon class="icon">
        <component :is="isfold ? 'd-arrow-left' : 'd-arrow-right'" @click="handleIcon"></component>
      </el-icon>

    <div class="content">
      <xx-Breadcrumb :breadcrumb="breadcrumb"></xx-Breadcrumb>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent,ref,computed } from 'vue'
  import UserInfo from './user-info.vue'
  import xxBreadcrumb from '@/base-ui/breadcrumb'
  import { pathMathBreadcrumb } from '@/uilts/map_menus'
  import { useStore } from 'vuex'
  import breadcrumb from '@/base-ui/breadcrumb/src/breadcrumb.vue'
  import { IStoreType } from '@/store/type'
  import { useRoute } from 'vue-router'
  export default defineComponent({
    emits:['FoldChange'],
    name: 'nav-header',
    components: {
      UserInfo,
      xxBreadcrumb
    },
    setup(props,{emit}){
      const isfold=ref(false)
      //获取userMenus->store,useRoute.path


      const breadcrumb=computed(()=>{
        const store=useStore<IStoreType>()

        const route=useRoute()
        const userMenus=store.state.LoginModule.userMenus
        const path=route.path
        return pathMathBreadcrumb(userMenus,path)
      })

      const handleIcon=()=> {
        isfold.value=!isfold.value
        emit('FoldChange',isfold.value)
      }
      return{
        isfold,
        breadcrumb,
        handleIcon
      }
    }
  })
</script>

<style lang="less">
.nav-header{
  display: flex;
  justify-items: center;
  width: 100%;
  align-items: center;
  .icon{
    cursor: pointer;
  }
  .content{
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

  }
}

</style>
