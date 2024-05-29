import SvgIcon from './SvgIcon/index.vue'
import type { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const allGlobalComponents: any = { SvgIcon }

export default {
  install: function (app: App) {
    Object.keys(allGlobalComponents).forEach((key) => {
      app.component(key, allGlobalComponents[key])
    })
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
