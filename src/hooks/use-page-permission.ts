import { useStore } from '@/store'

export function usrPermission(pagename:string,handlename:string) {
  const store=useStore()
  const permission=store.state.LoginModule.permission
  //verify->验证
  const verifyPermission=`system:${pagename}:${handlename}`
  return !!permission.find((item)=>item===verifyPermission)
}
