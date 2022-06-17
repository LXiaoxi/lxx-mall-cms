type IFormType='input' | 'password' | 'select' | 'datepicker'
//item里面的数据类型
export interface IFormItem {
  field:string,
  type:IFormType,
  label:string,
  rules?:any[],
  placeholder?:string
  options?:any[]
  otherOptions?:any
  isHidden?:boolean

}
//配置文件的类型
export interface IForm {
  formItems:IFormItem[],
  labelWidth?:string,
  itemStyle?:any,
  spanWidth?:any

}
