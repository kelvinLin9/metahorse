import { createApp } from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'


import "@/methods/fontawsome";





import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {
  Form, Field, ErrorMessage, defineRule, configure
} from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import App from './App.vue'
import router from './router'
import { currency, date } from './methods/filters'
import $httpMessageState from './methods/pushMessageState'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' // 自己出現的?











const app = createApp(App)
app.config.globalProperties.$filters = {
  date,
  currency
}

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 設定預設語系
setLocale('zh_TW')
// 此函式的用途是整合 Ajax 的錯誤事件，統一整理發送給予 Toast 處理
app.config.globalProperties.$httpMessageState = $httpMessageState

app.use(VueAxios, axios)
app.use(router)

app.component('Loading', Loading)
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

// fontawesome
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
