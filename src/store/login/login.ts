
import { Module } from 'vuex'
import router from '@/router'
import {IRootStore} from '../type'
import {ILoginStore} from './type'
import {accountLoginRequest,requestUserInfoById,requestUserMenuByRoleId} from '@/service/login/login'
import { IAccount } from '@/service/login/type'
import localCache from '@/uilts/cache'

import {mapMenusToRouter,mapMenusToPermissions} from '@/uilts/map_menus'
import store from '@/store'

const LoginModule:Module<ILoginStore,IRootStore>={
  //设置命名空间
  namespaced:true,
  state(){
    return{
      token:'',
      userInfo:{},
      userMenus:{},
      permission:[]
    }
  },
  mutations:{
    changetoken(state,token:string){
      state.token=token
    },
    changetInfo(state,userInfo:any){
      state.userInfo=userInfo
    },
    changeUserMenus(state,userMenus:any){
      state.userMenus=userMenus
      const routes=mapMenusToRouter(userMenus)
      //动态添加路由->注册所有的路由
      routes.forEach((route)=>{
        router.addRoute('main',route)
      })
      //获取按钮权限
      const permission=mapMenusToPermissions(userMenus)
      state.permission=permission

    }
  },
  getters:{

  },
  actions:{
    async accountLoginAction({commit,dispatch},payload:IAccount){
      //实现登录逻辑
      const loginResult=await accountLoginRequest(payload)
      console.log(loginResult)
      const {id,token}=loginResult.data
      commit('changetoken',token)
      localCache.setCache('token',token)
      //发送初始化的请求->root从根获取
      dispatch('getDepartment',null,{root:true})
      //获取用户信息
      const userInfoResult=await requestUserInfoById(id)
      const userInfo=userInfoResult.data
      commit('changetInfo',userInfo)
      localCache.setCache('userInfo',userInfo)

      //获取用户菜单
      const userMenusResult=await requestUserMenuByRoleId(userInfo.role.id)
      const userMenus=userMenusResult.data
      commit('changeUserMenus',userMenus)
      localCache.setCache('userMenus',userMenus)

      //跳到首页
      router.push('/main')
    },

    //加载本地菜单
    loadLocalLogin({commit,dispatch}){
      const token=localCache.getCache('token')
      if (token){
        commit('changetoken',token)

        //发送初始化的请求->root从根获取
        dispatch('getDepartment',null,{root:true})
      }
      const userInfo=localCache.getCache('userInfo')
      if (userInfo){
        commit('changetInfo',userInfo)
      }
      const userMenus=localCache.getCache('userMenus')
      if (userMenus){
        commit('changeUserMenus',userMenus )
      }
    },
    //{commit}=>context解构出来的
    phoneLoginAction({commit},payload:any){
      console.log("phoneLoginAction",payload)
    }
  }
}
export default LoginModule
