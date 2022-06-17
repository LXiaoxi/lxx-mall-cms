import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import localCache from '@/uilts/cache'
import { firstMenu } from '@/uilts/map_menus'
const routes :RouteRecordRaw[]= [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'nofound',
    component: () => import('@/views/not-found/not-found.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHistory()
})
router.beforeEach((to)=>{
  if (to.path!=='/login'){
    const token=localCache.getCache('token')
    if (!token){
      return '/login'
    }
  }
  if(to.path=='/main'){
    return firstMenu.url
  }
})
export default router
