import { ITable } from '@/base-ui/table/type/type'


export const contentTableConfig:ITable={
  title:"用户列表1",
  shouIndexColumn:true,
  showSelectColumn:true,
  propsList:[
    { prop:'name',label:'角色名',minWidth:'50' },
    { prop:'intro',label:'权限介绍',minWidth:'100' },
    { prop:'createAt',label:'创建时间',minWidth:'100', slotName:'createAt'},
    { prop:'updateAt',label:'更新时间',minWidth:'100' ,slotName:'updateAt'},
    {label: '操作',minWidth: '120',slotName: 'handle'}
  ]
}
