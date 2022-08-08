import { createApp } from 'vue'

import { createPinia } from 'pinia'

import axios from 'axios'
import VueAxios from 'vue-axios'

import '@/methods/fontawsome'
// 自己出現的?
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import '@/methods/sweetalart2'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
// importing AOS css style globally
import AOS from 'aos'
import 'aos/dist/aos.css'

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

const pinia = createPinia()

// sweetalert2
const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674'
}

const app = createApp(App)
app.config.globalProperties.$filters = {
  date,
  currency
}

app.AOS = new AOS.init({ disable: 'phone' })
app.use(AOS)

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 設定預設語系
setLocale('zh_TW')

app.use(pinia)

app.use(VueAxios, axios)
app.use(router)
app.use(VueSweetalert2, options)

app.component('Loading', Loading)
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)

// fontawesome
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
