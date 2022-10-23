import { createApp } from 'vue'

import { createPinia } from 'pinia'

import axios from 'axios'
import VueAxios from 'vue-axios'

import '@/methods/fontawsome'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
// importing AOS css style globally
import AOS from 'aos'
import 'aos/dist/aos.css'

import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

import 'bootstrap-icons/font/bootstrap-icons.css'
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import App from './App.vue'
import router from './router'
import { currency, date } from './methods/filters'

import UserLoading from '@/components/UserLoading.vue'

const app = createApp(App)
// 加上$避免跟區域元件的變數產生衝突
app.config.globalProperties.$filters = {
  date,
  currency
}

// sweetalert2
const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674'
}

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')

const pinia = createPinia()

app.AOS = new AOS.init()

app.use(AOS)

app.component('UserLoading', UserLoading)
app.component('Loading', Loading)
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.use(VueSweetalert2, options)
app.use(pinia)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
