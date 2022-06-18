//service统一的出口
import XXRequest from '@/service/request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/uilts/cache'
const xxRequest = new XXRequest({
  baseURL:BASE_URL,
  timeout:TIME_OUT,
  interceptors:{

    requestInterceptor:(config:any)=>{
      //先获取token
      const token=localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      else{
        console.log("token不存在")
      }
      return config
    },
    requestInterceptorCatch:(err)=>{
      return err
    },
    responseInterceptor:(res)=>{
      return res
    },
    responseInterceptorCatch:(err)=>{
      return err
    }
  }

})

export default xxRequest

