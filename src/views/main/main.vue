<template>
  <div class="main">
    <el-container class="main-container">
          <el-aside :width="isCollapse ? '60px':'210px'">
            <nav-menu :collapse="isCollapse"></nav-menu>
          </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @FoldChange="handleChange"></nav-header>
        </el-header>
        <el-main class="page-content">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
  import { defineComponent,ref } from 'vue'
  import NavMenu from '@/components/nav-menu'
  import NavHeader from '@/components/nav-header'
  export default defineComponent(
    {
      name: 'main',
      components:{
        NavMenu,
        NavHeader
      },
      setup(){
        const isCollapse=ref(false)
        const handleChange=(isfold:boolean)=>{
          //重新保存一个值
          isCollapse.value=isfold
        }
        return{
          isCollapse,
          handleChange
        }
      }
    }
  )
</script>

<style scoped lang="less">
  .main {
    position: fixed;
    height: 100%;
    width: 100%;
    top:0;
    left:0;
  }
  .main-container,
  .page {
    height: 100%;
  }
  .page-header {
    display: flex;
    align-items: center;
  }
  .page-content {
    background: #f7f7f7;
    text-align: center;
    height: calc(100% - 48px);
  }
  .el-aside {
    background: #5c6b77;
  }

</style>
