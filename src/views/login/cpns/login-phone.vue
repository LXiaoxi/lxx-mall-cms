<template>
  <div class="phone">
    <el-form label-width="70px"  :rules="rules" :model="phone" ref="fromRef"><!--绑定account的值-->
      <el-form-item label="手机号" prop="num" >
        <el-input v-model="phone.num"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code"></el-input>
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
  import {useStore} from 'vuex'
  import { defineComponent,reactive,ref } from 'vue'
  import { rules} from '../config/phone-config'
  import { ElForm } from 'element-plus'
  export default defineComponent({
    name: 'login-phone',
    components: {},
    setup(){
      const store=useStore()
      const phone=reactive({
        num:'',
        code:''
      })
      //获取form表单里面的信息
      const fromRef=ref<InstanceType<typeof ElForm>>()
      //panel监听phone,phone监听store里面的action
      const PhoneAction=()=>{
        fromRef.value?.validate((valid)=>{
          if (valid){
            store.dispatch('LoginModule/phoneLoginAction',{...phone})
          }
        })
      }
      return{
        phone,
        fromRef,
        PhoneAction,
        rules
      }
    }
  })
</script>

<style lang="less">

  .phone{
    width: 80%;
    margin: auto;
  }
  .get-code{
    display: flex;
  }
  .get-btn{
    margin-left: 8px;
  }
</style>
