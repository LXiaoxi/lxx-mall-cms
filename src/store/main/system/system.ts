import {  Module } from 'vuex'
import {ISystemStore} from '@/store/main/system/type'
import {IRootStore} from '@/store/type'
import { getpagelistData, deletelistData, createlistData, editlistData } from '@/service/mian/system/system'
const SystemModule:Module<ISystemStore, IRootStore>=({
  namespaced:true,
  state(){
    return{
      usersList:[],
      userscount:0,
      roleList:[],
      rolecount:0,
      goodsList:[],
      goodscount:0,
      menuList:[],
      menucount:0
    }
  },
  mutations:{
    changeUsersList(state,userlist:any){
      state.usersList=userlist
    },
    changeUsersCount(state,usercount:number){
      state.userscount=usercount
    },
    changeRoleList(state,rolelist:any){
      state.roleList=rolelist
    },
    changeRoleCount(state,rolecount:number){
      state.rolecount=rolecount
    },
    changeGoodsList(state,goodslist:any){
      state.goodsList=goodslist
    },
    changeGoodsCount(state,goodscount:number){
      state.goodscount=goodscount
    },
    changeMenuList(state,menuList:any){
      state.menuList=menuList
    },
    changeMenuCount(state,menucount:number){
      state.menucount=menucount
    }

  },
  getters:{
    pageListData(state){
      return (pageName:string)=>{
        return (state as any)[`${pageName}List`]
        // switch (pageName) {
        //   case 'user':
        //     return state.userList
        //   case 'role':
        //     return state.roleList
        // }
      }
    },
    pageCountData(state){
      return (pageName:string)=>{
        return (state as any)[`${pageName}count`]
      }
    },

  },
  actions:{
    async getpageDatalistAction({commit},payload){

      //获取数据PageName->user
      const PageName=payload.pageUrl
      let pageUrl=`/${PageName}/list`
      // switch (PageName) {
      //   case 'user':
      //     pageUrl='/users/list'
      //     break
      //   case 'role':
      //     pageUrl='/role/list'
      //     break
      // }
      //对页面发送请求
      const result =await getpagelistData(pageUrl,payload.queryInfo)
      //保存数据
      const {list,totalCount}=result.data
      const changePageName=PageName.slice(0,1).toUpperCase()+PageName.slice(1)
      commit(`change${changePageName}List`,list)
      commit(`change${changePageName}Count`,totalCount)
      // switch (PageName) {
      //   case 'user':
      //     commit('changeUserList',list)
      //     commit('changeUserCount',totalCount)
      //     break
      //   case 'role':
      //     commit('changeRoleList',list)
      //     commit('changeRoleCount',totalCount)
      // }



    },
    //删除数据
    async deletePageDataAction({dispatch},payload:any){
      //获取id，pagename
      const {id,pageName}=payload
      const pageUrl=`/${pageName}/${id}`
      console.log(pageUrl)
      //调用删除网络请求
      const result=await deletelistData(pageUrl)
      console.log(result)
      //重新请求最新数据
      dispatch('getpageDatalistAction',{
        pageUrl:pageName,
        queryInfo:{
          offset:0,
          size:10
        }
      })
    },
    //新建数据
    async createPageDataAction({dispatch},payload:any){
      const {PageName,newData}=payload
      console.log(newData)
      const pageUrl=`/${PageName}`
      await createlistData(pageUrl,newData)
      //发送新建请求后重新调用一次页面数据请求
      dispatch('getpageDatalistAction',{
        pageUrl:PageName,
        queryInfo:{
          offset:0,
          size:10
        }
      })
    },
    //编辑
    async editPageDataAction({dispatch},payload){
      const {PageName,editData,id}=payload
      const pageUrl=`/${PageName}/${id}`
      await editlistData(pageUrl,editData)
      dispatch('getpageDatalistAction',{
        pageUrl:PageName,
        queryInfo:{
          offset:0,
          size:10
        }
      })

    }
  }
})
export default SystemModule
