import registerElement from './register-element'
import registerProperties from './register-properties'
import {App} from 'vue'
export function registerApp(app: App):void {
  app.use(registerElement)
  app.use(registerProperties)
}
