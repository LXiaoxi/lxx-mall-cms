import {RouteRecordRaw} from 'vue-router'
import { IBreadcrumb } from '@/base-ui/breadcrumb'
//第一次跳转到main时
let firstMenu:any=null
//菜单映射到路由
export function mapMenusToRouter(userMenus:any[]):RouteRecordRaw[]{
  //userMenus里面才有的router
  const routes:RouteRecordRaw[]=[]
  //全部router
  const allRoutes:RouteRecordRaw[]=[]
  //查找文件
  const routerFiles=require.context('../router/main',true,/\.ts/)
  routerFiles.keys().forEach(key=>{
    //key->./analysis/analysis/analysis.ts
    //require()拼接路径
    const route=require('../router/main'+key.split('.')[1])
    allRoutes.push(route.default)

  })
  //根据菜单获取需要的router
  const _recurseGetRouter=(menus:any[])=>{
    for(const menu of menus){
      if (menu.type===2){
        const route=allRoutes.find((route)=>route.path==menu.url)
        if (route) routes.push(route)
        if (!firstMenu){
          firstMenu=menu
        }
      }
      else {
        _recurseGetRouter(menu.children)
      }
    }
  }
  _recurseGetRouter(userMenus)
  return routes
}
export function pathMathBreadcrumb(userMenus:any[],currentPath:string){
  const breadcrumb:IBreadcrumb[]=[]
  pathMapToMenu(userMenus,currentPath,breadcrumb)
  //获取一级菜单和二级菜单
  return breadcrumb

}

export function pathMapToMenu(userMenus:any[],currentPath:string,breadcrumb?:IBreadcrumb[]):any{
  //遍历userMenus里面的元素
  for (const menus of userMenus){
    if (menus.type===1){
      const findMenu=pathMapToMenu(menus.children,currentPath)
      if (findMenu){
        //第一级菜单
        breadcrumb?.push({name:menus.name})
        //第二级菜单
        breadcrumb?.push({name:findMenu.name})
        return findMenu
      }
    }else if (menus.type===2 && menus.url==currentPath) {
      return menus
    }
  }
}
//获取权限->第三层才有权限
//在拿菜单的地方调用
export function mapMenusToPermissions(userMenus:any[]) {
  const permissions:string[]=[]
  const _recursiveGetPermission=(menus:any[])=>{
    for(const menu of menus){
      if (menu.type===1 || menu.type===2){
        _recursiveGetPermission(menu.children ?? [])
      }
      else if (menu.type===3){
        permissions.push(menu.permission)
      }
    }
  }
  _recursiveGetPermission(userMenus)
  return permissions
}
export function menuMapLeafKeys(menuList: any[]) {
  const leftKeys: number[] = []

  const _recurseGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        leftKeys.push(menu.id)
      }
    }
  }
  _recurseGetLeaf(menuList)

  return leftKeys
}
export {firstMenu}
