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
  mounted () {
    // this.$refs.modal 指向ref="modal"
    this.modal = new Modal(this.$refs.modal)
  }
}
