import xxRequest from '../../index'
import {IDataType} from '@/service/types'

export function getpagelistData(url:string,queryInfo:any){
  return xxRequest.post<IDataType>({
    url:url,
    data:queryInfo
  })
}
export function deletelistData(url:string){
  return xxRequest.delete<IDataType>({
    url:url
  })
}
//新建
export function createlistData(url:string,newData:any){
  return xxRequest.post<IDataType>({
    url:url,
    data:newData
  })
}
//编辑
export function editlistData(url:string,editData:any){
  return xxRequest.patch<IDataType>({
    url:url,
    data:editData
  })
}
