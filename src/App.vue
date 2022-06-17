<template>
  <div class="App">
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Login from '@/views/login/login.vue'
  import {ElConfigProvider } from 'element-plus'
  import zhCn from 'element-plus/lib/locale/lang/zh-cn'
export default defineComponent( {
  name: 'App',
  components: {
    Login,
    ElConfigProvider,
  },
  setup(){
    return{
      zhCn
    }
  }
})
</script>

<style lang="less">
  .App{
    height: 100%;
  }

</style>
