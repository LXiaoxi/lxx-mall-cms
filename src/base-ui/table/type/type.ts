export interface ITableProp {
  prop?:string
  label:string
  minWidth:string
  slotName?:string

}
export interface ITable {
  title?:string
  shouIndexColumn?:boolean
  showSelectColumn?:boolean
  propsList?:ITableProp[]
  childrenProps?:any
  showFooter?:boolean
}
