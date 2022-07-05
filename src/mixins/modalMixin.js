import Modal from 'bootstrap/js/dist/modal'

export default {
  methods: {
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  // 我們會對他進行實體，實體必須在這個元件(ProductModel)載入之後才能正確運作，
  // 所以會使用mounted
  mounted () {
    // this.$refs.modal 指向ref="modal"
    this.modal = new Modal(this.$refs.modal)
  }
}
