let BASE_URL=''
const TIME_OUT=10000
if (process.env.NODE_ENV==='development'){
  // BASE_URL='http://123.207.32.32:8000/home/multidata'
  BASE_URL='/api'
  console.log(BASE_URL)
}else if (process.env.NODE_ENV==='production'){
  BASE_URL='/api'
  console.log(BASE_URL)

}else {
  BASE_URL='/api'
}
export {BASE_URL,TIME_OUT}
