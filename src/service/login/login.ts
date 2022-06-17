import xxRequest from '../index'
import { IAccount,  ILoginResult } from './type'
import {IDataType} from '@/service/types'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus='/role/'
}

export function accountLoginRequest(account: IAccount) {
  return xxRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return xxRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading:false
  })
}

export function requestUserMenuByRoleId(id:number){
  return xxRequest.get<IDataType>({
    url:LoginAPI.UserMenus+id+'/menu',
    showLoading:false

  })
}
