import { ITable } from '@/base-ui/table/type/type'


export const contentTableConfig:ITable={
  title:"用户列表1",
  shouIndexColumn:true,
  showSelectColumn:true,
  propsList:[
    { prop:'name',label:'用户名',minWidth:'50' },
    { prop:'realname',label:'真实姓名',minWidth:'100' },
    { prop:'cellphone',label:'手机号码',minWidth:'100' },
    { prop:'enable',label:'状态',minWidth:'100' ,slotName:'status'},
    { prop:'createAt',label:'创建时间',minWidth:'100', slotName:'createAt'},
    { prop:'updateAt',label:'更新时间',minWidth:'100' ,slotName:'updateAt'},
    {label: '操作',minWidth: '120',slotName: 'handle'}
  ]
}
