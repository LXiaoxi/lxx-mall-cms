import { Module } from 'vuex'
import { IRootStore } from '@/store/type'
import {IDashStore} from '@/store/main/analysis/type'
import {getAddressGoodsSale,getCategoryGoodsCount,getCategoryGoodsFavor,getCategoryGoodsSale} from '@/service/analysis/dashboard/dashboard'
const dashbord:Module<IDashStore,IRootStore>=({
  namespaced:true,
  state:{
    categoryGoodsCount:[],
    categoryGoodsFavor:[],
    categoryGoodsSale:[],
    addressGoodsSale:[]
  },
  mutations:{
    changeGoodsCount(state,list:any){
      state.categoryGoodsCount=list
    },
    changeGoodsFavor(state,list:any){
      state.categoryGoodsFavor=list
    },
    changeGoodsSale(state,list:any){
      state.categoryGoodsSale=list
    },
    changeGoodsAddressSale(state,list:any){
      state.addressGoodsSale=list
    },
  },
  actions:{
    async getDashdoard({commit}){
      const countResult=await getCategoryGoodsCount()
      commit('changeGoodsCount',countResult.data)

      const favorResult=await getCategoryGoodsFavor()
      commit('changeGoodsFavor',favorResult.data)

      const saleResult=await getCategoryGoodsSale()
      commit('changeGoodsSale',saleResult.data)

      const addresstResult=await getAddressGoodsSale()
      commit('changeGoodsAddressSale',addresstResult.data)
    }
  }
} )
export default dashbord
