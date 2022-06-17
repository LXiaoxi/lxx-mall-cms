
import {ITable} from '@/base-ui/table/type/type'



export const contentTableConfig:ITable={
  title:"商品列表",
  shouIndexColumn:true,
  showSelectColumn:true,
  propsList:[

    { prop:'name',label:'商品名称',minWidth:'80' },
    { prop:'oldPrice',label:'原价格',minWidth:'80' },
    { prop:'newPrice',label:'最新价',minWidth:'80' },
    { prop:'imgUrl',label:'商品图片',minWidth:'100',slotName: 'image' },
    { prop:'status',label:'状态',minWidth:'100' ,slotName:'status'},
    { prop:'createAt',label:'创建时间',minWidth:'100', slotName:'createAt'},
    { prop:'updateAt',label:'更新时间',minWidth:'100' ,slotName:'updateAt'},
    {label: '操作',minWidth: '120',slotName: 'handle'}
  ]
}
