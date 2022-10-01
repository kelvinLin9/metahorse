import { defineStore } from 'pinia'

export default defineStore('scrollStore', {
  state: () => ({
    goTopIcon: false
  }),
  actions: {
    scroll () {
      window.onscroll = e => {
        if (e.target.scrollingElement.scrollTop > 350) {
          this.goTopIcon = true
        } else {
          this.goTopIcon = false
        }
      }
    }
  }
})
