import { ITable } from '@/base-ui/table/type/type'


export const contentTableConfig:ITable={
  title:"用户列表1",
  shouIndexColumn:false,
  showSelectColumn:false,
  propsList:[
    { prop:'name',label:'菜单名称',minWidth:'150' },
    { prop:'type',label:'类型',minWidth:'60' },
    { prop:'url',label:'菜单url',minWidth:'100' },
    { prop:'icon',label:'菜单icon',minWidth:'100' ,slotName:'status'},
    { prop:'permission',label:'按钮权限',minWidth:'100' ,slotName:'status'},
    { prop:'createAt',label:'创建时间',minWidth:'100', slotName:'createAt'},
    { prop:'updateAt',label:'更新时间',minWidth:'100' ,slotName:'updateAt'},
  ],
  childrenProps:{
    rowKey:'id',
    treeProp:{
      children:'children'
    }
  },
  showFooter:false
}
