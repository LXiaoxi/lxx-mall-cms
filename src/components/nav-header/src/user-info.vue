<template>
  <div class="user-info">
    <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar :size="small" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          {{name}}
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleExitClick" >退出登录</el-dropdown-item>
          <el-dropdown-item divided> 用户信息</el-dropdown-item>
          <el-dropdown-item >系统管理 </el-dropdown-item>

        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
  import { defineComponent,computed } from 'vue'
  import {IStoreType} from '@/store/type'
  import {useStore} from 'vuex'
  import LocalCache from '@/uilts/cache'
  import router from '@/router'
  export default defineComponent({
    name: 'user-info',
    components: {},
    setup(){
      const store=useStore<IStoreType>()
      const name=computed(()=>store.state.LoginModule.userInfo.name)
      //退出按钮
      const handleExitClick=()=>{
        LocalCache.deleteCache('token')
        router.push('/main')
      }
      return{
        name,
        handleExitClick
      }
    }
  })
</script>

<style lang="less">
.el-dropdown-link{
  cursor: pointer;
  display: flex;
  align-items: center;
}

</style>
