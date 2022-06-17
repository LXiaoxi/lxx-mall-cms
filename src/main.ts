import { createApp } from 'vue'
import App from './App.vue'
import { registerApp } from './global'
import router from '@/router'
import store from './store'
import {setupStore} from './store'
import * as Icons from '@element-plus/icons'

//对样式重置
import 'normalize.css'
import './assets/css/index.less'
// import './service/axios_demo'
import xxRequest from '@/service/index'

const app = createApp(App)
app.use(registerApp)

app.use(store)
setupStore()

app.use(router)
app.mount('#app')


Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key as keyof typeof Icons])
})
