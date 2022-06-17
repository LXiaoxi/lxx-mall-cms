import {App} from 'vue'
import {formatUtcString} from '@/uilts/date-format'
export default function registerProperties(app:App){
  app.config.globalProperties.$filters={
    formatTime(value:string){
      return formatUtcString(value)
    }
  }
}
