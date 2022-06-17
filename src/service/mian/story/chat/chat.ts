
import {charRequest} from '@/service'
import { IDataType } from '@/service/types'
export  function getchatlistData(url:string) {
  return charRequest.get<IDataType>({
    url:'',
  })
}
