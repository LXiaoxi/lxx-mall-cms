<template>
  <div class="loginpanel">
    <h2 class="title">后台管理</h2>
    <el-tabs class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span ><el-icon><user-filled /></el-icon>账号登录</span>
        </template>
        <login-account class="cpn" ref="accountref"/>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><el-icon><phone-filled /></el-icon>手机登录</span>
        </template>
        <login-phone class="cpn" ref="phoneref"/>
      </el-tab-pane>
    </el-tabs>
    <div class="keep-password">
      <el-checkbox type="primary" v-model="iskeepPassword"><span>记住密码</span></el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" size="large" class="loginbtn" @click="handleLoginClick">登录</el-button>
  </div>
</template>

<script lang="ts">

  import { defineComponent,ref } from 'vue'
  import LoginAccount from './login-account.vue'
  import LoginPhone from './login-phone.vue'
  export default defineComponent({
    name: 'login-panel',
    components: {
      LoginAccount,
      LoginPhone
    },
    setup(){
      const iskeepPassword=ref(true)
      const accountref=ref<InstanceType<typeof LoginAccount>>()
      const phoneref=ref<InstanceType<typeof LoginPhone>>()
      const currentTab=ref('account')
      const handleLoginClick=()=>{
        if(currentTab.value=='account'){
          //监听组件里面的方法
          accountref.value?.LoginAction(iskeepPassword.value)
        }else{
          phoneref.value?.PhoneAction()
        }
      }
      return{
        iskeepPassword,
        accountref,
        phoneref,
        currentTab,
        handleLoginClick
      }
    }
  })
</script>

<style lang="less">
  .demo-tabs{
    width:350px;
    background: rgba(255, 61, 49, 0.14);
    height:200px;

  }
  .cpn{
    margin-top:20px;
  }
  .title{
    text-align: center;
  }
  .keep-password{
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .loginbtn{
    width:100%;
  }


</style>
