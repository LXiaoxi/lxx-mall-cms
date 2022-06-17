import {ILoginStore} from './login/type'
import { ISystemStore } from '@/store/main/system/type'
import { IDashStore } from '@/store/main/analysis/type'
import { IChatStore } from '@/store/main/story/chat/type'
export interface IRootStore {
  //整个部门
  entireDepartment:any[],
  //整个角色
  entireRole:any[]
  //整个菜单
  entireMenus:any[]
}
export interface IRootWiyhModule {
  //模板
  LoginModule:ILoginStore
  SystemModule:ISystemStore
  DashModule:IDashStore
  CharModule:IChatStore
}

export type IStoreType = IRootWiyhModule & IRootStore
