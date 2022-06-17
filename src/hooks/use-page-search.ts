import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef=ref<InstanceType<typeof PageContent>>()
  const handleResetClick=()=>{
    pageContentRef.value?.getpageData()
  }
  const handleQueryClick=(queryInfo:any)=>{
    pageContentRef.value?.getpageData(queryInfo)
  }
  //[]->元组
  return [handleResetClick,handleQueryClick,pageContentRef]
}
