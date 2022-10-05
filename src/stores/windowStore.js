import { defineStore } from 'pinia'

export default defineStore('windowStore', {
  state: () => ({
    goTopIcon: false,
    windowWidth: 0
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
    },
    getWindowWidth () {
      this.windowWidth = window.innerWidth
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      })
    }
  }
})
