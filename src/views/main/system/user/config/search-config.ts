import { IForm } from '@/base-ui/form'
//配置信息
export const searchformConfig:IForm={
  labelWidth:'120px',
  itemStyle:{
    padding:'10px 40px'
  },
  spanWidth:{
    span:8
  },
  formItems:[

    {
      field:'name',
      type:'input',
      label:"用户名",
      rules:[],
      placeholder:"请输入用户名"
    },
    {
      field:'realname',
      type:'input',
      label:"真实姓名",
      rules:[],
      placeholder:"请输入真实姓名"
    },
    {
      field:'cellphone',
      type:'input',
      label:"手机号码",
      rules:[],
      placeholder:"请输入手机号码"
    },
    {

      field:'enable',
      type:'select',
      label:"用户状态",
      rules:[],
      placeholder:"请选择用户状态",
      options:[{title:'启用',value:'1'},{title:'禁用',value: '0'}]
    },
    {
      field:'creatTime',
      type:'datepicker',
      label:"创建时间",
      rules:[],
      otherOptions:{
        startPlaceholder:'开始时间',
        endPlaceholder:'结束时间',
        type:'daterange'
      }
    }
  ]
}
