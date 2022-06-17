import { ref } from 'vue'
import PageModal from '@/components/page-modal'
type CallFn=(item?:any) =>void
export function useMoadl(newCb?:CallFn,editCb?:CallFn) {
  const pageModalRef=ref<InstanceType<typeof PageModal>>()
  const defaultInfo=ref({})
  const handleNewClick=()=>{
    defaultInfo.value={}
    if (pageModalRef.value){
      pageModalRef.value.dialogVisible=true
    }
    newCb && newCb()
  }
  const handleEditClick=(item:any)=>{
    //把item传给page-modal
    defaultInfo.value={...item}
    if (pageModalRef.value){
      pageModalRef.value.dialogVisible=true
    }
    editCb && editCb(item)
  }
  return [pageModalRef,defaultInfo,handleNewClick,handleEditClick]
}
