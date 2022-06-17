<template>
    <div class="account">
      <el-form label-width="55px"  :rules="rules" :model="account" ref="formRef"  ><!--绑定account的值-->
        <el-form-item label="账号" prop="name" >
          <el-input v-model="account.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="account.password" show-password></el-input>
        </el-form-item>
      </el-form>
    </div>
</template>

<script lang="ts">
  import {useStore} from 'vuex'
  import { defineComponent,reactive,ref } from 'vue'
  import { ElForm } from 'element-plus'
  import LocalCache from '@/uilts/cache'
  import {rules}  from '../config/account-config'
  export default defineComponent({
    name: 'login-account',
    components: {},
    setup(){
      const store=useStore()
      const account=reactive({
        name:LocalCache.getCache('name') ?? '',
        password:LocalCache.getCache('password') ?? '' ,
      })

      const formRef=ref<InstanceType<typeof ElForm>>()
      const LoginAction=(iskeepPassword:boolean)=>{
        formRef.value?.validate((valid)=>{
          if (valid){
            if (iskeepPassword){
              LocalCache.setCache('name',account.name)
              LocalCache.setCache('password',account.password)
            }
            else {
              LocalCache.deleteCache('name')
              LocalCache.deleteCache('password')
            }
            store.dispatch('LoginModule/accountLoginAction',{...account})
          }

        })
        console.log("account正在登录")
      }

      return{
        account,
        LoginAction,
        formRef,
        rules
      }
    }
  })
</script>

<style lang="less">
.account{
  width: 80%;
  margin: auto;
}

</style>
