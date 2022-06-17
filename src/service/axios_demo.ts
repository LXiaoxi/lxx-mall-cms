import axios from 'axios'
//模拟get请求 无参数
axios.get('https://httpbin.org/get').then(res=>{
  console.log(res)
})
//模拟get请求 有参数
axios.get('https://httpbin.org/get',{
  params:{
    name:'lxx',
    age:18
  }
}).then(res=>{
  console.log(res)
})
//模拟post请求 有参数
axios.post('https://httpbin.org/post',{
  data:{
    name:'lxx',
    age:18
  }
}).then(res=>{
  console.log(res.data)
})

//axios的配置属性
//axios的拦截器
//fn1:请求发送成功会执行的函数
//fn2:请求发送失败会执行的函数
axios.interceptors.request.use(
  (res)=>{
    console.log('请求成功的拦截')
    return res
  }
,
  (err)=>{
    console.log("请求失败的拦截")
    return err
})
axios.interceptors.response.use(
  (res)=>{
    console.log("响应成功的拦截")
    return res

},(err)=>{
    console.log('响应失败的拦截')
    return err
  })
