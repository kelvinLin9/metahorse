import { defineStore } from 'pinia'

export default defineStore('scrollStore', {
  getters: {
    scrollTop1 () {
      let scrollTop1
      window.onscroll = e => {
        if (e.target.scrollingElement.scrollTop > 350) {
          console.log('8877995')
          scrollTop1 = true
        } else {
          scrollTop1 = false
        }
        return scrollTop1
      }
    }
  }
})
