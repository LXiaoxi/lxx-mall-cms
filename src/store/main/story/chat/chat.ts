import { Module } from 'vuex'
import { IRootStore } from '@/store/type'
import {IChatStore} from '@/store/main/story/chat/type'
import {getchatlistData} from '@/service/mian/story/chat/chat'

const chatStoreModule:Module<IChatStore,IRootStore>={
  namespaced:true,

  state:{
    chatList:[]
  },
  mutations:{
    changeChatList(store,chatList){
      store.chatList=chatList
    }
  },
  actions:{
    async getData({commit},payload:any){
      const {pageName,pageInfo}=payload
      console.log(pageName,'---',pageInfo)
      const result=await getchatlistData(pageName)
      console.log(result)
      commit('changeChatList',result)
    }
  }
}
export default chatStoreModule
