<template>
  <div class="nav-menu" >
    <div class="logo" >
      <img src="@/assets/img/logo.svg" alt="logo" class="img"/>
      <transition name="lxx">
        <span class="title" v-if="!collapse">后台管理</span>
      </transition>
    </div>
     <el-menu :default-active="defaultItem"
              class="el-menu-vertical"
              :collapse="collapse"
              background-color="#545c64"
              active-text-color="#ffd04b"
              text-color="#b7bdc3">
       <template v-for="item in userMenus" :key="item.id">
         <!-- 二级菜单 -->
         <template v-if="item.type===1">
           <!--          :index标识-->
           <!-- 二级菜单的可以展开的标题 -->
           <el-sub-menu :index="item.id+''">
             <template #title>
               <component class="icon" :is="item.icon.slice(8,)"></component>
               <span class="item-name">{{item.name}}</span>
             </template>
             <template v-for="sub in item.children">
               <el-menu-item :index="sub.id+''" @click="handleMenuClick(sub)">
                 <span class="sub-name">{{sub.name}}</span>
               </el-menu-item>
             </template>
           </el-sub-menu>
         </template>
         <!-- 一级菜单 -->
         <template v-if="item.type===2">
           <el-menu-item :index="item.id+''">
             <span>{{item.name}}</span>
           </el-menu-item>
         </template>
       </template>
     </el-menu>
  </div>
</template>
<script lang="ts">
  import { defineComponent, computed, ref, onMounted } from 'vue'
  import {useRouter,useRoute} from 'vue-router'
  import {useStore} from '@/store'
  import LoginModule from '@/store/login/login'
  import {pathMapToMenu} from '@/uilts/map_menus'
  import useEchart from '@/base-ui/echart/hooks/useEchart'

  export default defineComponent({
    name: 'nav-menu',
    props:{
      collapse:{
        type:Boolean,
        default:false
      }
    },
    setup(){
      //store
      const store=useStore()
      //自定义的router
      const router=useRouter()
      const route=useRoute()
      const currentPath=route.path
      //LoginModule=>那个模板
      const userMenus=computed(()=>store.state.LoginModule.userMenus)
      const menu=pathMapToMenu(userMenus.value,currentPath)
      const defaultItem=ref(menu.id+'')
      const handleMenuClick=(item:any)=>{
        router.push({
          path:item.url ?? '/not-found'
        })
      }
      return{
        userMenus,
        defaultItem,
        handleMenuClick
      }
    }
  })
</script>
<style lang="less">

.nav-menu{
  height: 100%;
  .lxx-enter-from,
  .lxx-leave-to{
    opacity: 0;
  }
  .lxx-enter-to,
  .lxx-leave-from{
    opacity: 1;
  }
  .lxx-enter-active{
    transition: all 1.5s ease;
  }
  .logo{
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .img {
    height: 100%;
    margin: 0 10px;
  }
  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
  }
  .icon{
    width: 20px;
    height: 20px;

  }
  .el-menu{
    border-right: none;
  }
  .item-name{
    margin-left: 10px;
  }
  .sub-name{
    margin-left:30px;
  }


}
</style>
