<template>
  <Navbar :key="$route.path"/>
  <div class="container-fluid mt-3 position-relative">
    <ToastMessages/>
    <router-view/>
  </div>
</template>

<script>
// 拆分元件後再import進來 .vue記得要加
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'
import Navbar from '../../components/admin/AdminNavbar.vue'

export default {
  // 區域註冊
  components: {
    Navbar,
    ToastMessages
  },
  provide () {
    return {
      emitter
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    // console.log(token)
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api, this.user).then((res) => {
      console.log(res)
      if (!res.data.success) {
        this.$router.push('/login')
      }
    })
  }
}
</script>
