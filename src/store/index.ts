import { createStore,Store,useStore as useVuexStore } from 'vuex'
import {IRootStore,IStoreType} from '@/store/type'

//导入模块
import  LoginModule  from './login/login'
import SystemModule from '@/store/main/system/system'
import DashModule from '@/store/main/analysis/dashboard'
import CharModule from '@/store/main/story/chat/chat'
//导入数据请求模块
import {getpagelistData} from '@/service/mian/system/system'
const store = createStore<IRootStore>({
  state() {
    return {
      //整个部门
      entireDepartment:[],
      //整个角色
      entireRole:[],
      //整个菜单
      entireMenus:[]
    }
  },
  getters: {},
  mutations: {
    changeDepartmentData(state,list:any){
      state.entireDepartment=list
    },
    changeRoleData(state,list:any){
      state.entireRole=list
    },
    changeMenusData(state,list:any){
      state.entireMenus=list
    }
  },
  actions: {
    //发送网络请求
    async getDepartment({commit}){
      //请求部门的数据
      const Deresult=await getpagelistData('/department/list',{
        offset:0,
        size:1000
      })
      const {list:departmentData}=Deresult.data
      commit('changeDepartmentData',departmentData)
      //请求角色的数据
      const Roleresult=await getpagelistData('/role/list',{
        offset:0,
        size:1000
      })
      const {list:RoleData}=Roleresult.data
      commit('changeRoleData',RoleData)
      //请求菜单的数据
      const Menuresult=await getpagelistData('/menu/list',{})
      const {list:MenuData}=Menuresult.data
      //保存数据
      commit('changeMenusData',MenuData)
    }
  },
  modules:{
    LoginModule,
    SystemModule,
    DashModule,
    CharModule
  }
})
export function setupStore() {
  store.dispatch('LoginModule/loadLocalLogin')

}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
