<template>
  <div class="login">
    <login-panel/>
  </div>
</template>

<script lang="ts">
  import { defineComponent} from 'vue'
  import LoginPanel from './cpns/login-panel.vue'
  export default defineComponent( {
    components:{
      LoginPanel
    },
    name: 'login'
  })
</script>

<style scoped lang="less">
  .login{
    background:url('../../assets/img/bg.webp');
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

  }
</style>
