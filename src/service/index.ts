//service统一的出口
import XXRequest from '@/service/request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/uilts/cache'
const chatURL='http://localhost:8000/moment?offset=0&size=10'
const xxRequest = new XXRequest({
  baseURL:BASE_URL,
  timeout:TIME_OUT,
  interceptors:{

    requestInterceptor:(config)=>{
      //先获取token
      const token=localCache.getCache('token')
      if (token) {
        // @ts-ignore
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
const charRequest=new XXRequest({
  baseURL:chatURL,
  timeout:TIME_OUT,
  interceptors:{

    requestInterceptor:(config)=>{
      //先获取token
      const token='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6Imx1Y3kiLCJpYXQiOjE2NTUzODg5NjQsImV4cCI6MTY1NTQ3NTM2NH0.iZ364rGyUmjG4UZYrIWbFOWk4VcM7qH3rRSJKSiHgvjatDtcuRL3rPbBLHrLAgAR1iy8z_DqfYGESL12LrkuK_v703fgRiIC6jJyo6IVUd7ma7TkHsKLQU7PpF0Zhrh2fdk-8Q8lckb_rPU5aewpQn_qCdHgHBnM9r4wdcxf1AE'
      if (token) {
        // @ts-ignore
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
export {
  charRequest
}
