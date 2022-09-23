<template>
<!-- @click="this.$refs.GameModal.showModal() -->
  <div class="text-end">
    <button class="btn btn-primary" type="button"
    @click.prevent="showAlert ()">
      點我試玩
    </button>
  </div>
  <GameModal ref="GameModal" class="overflow-hidden"/>
</template>

<script>
import GameModal from '@/components/GameModal.vue'

export default {
  components: {
    GameModal
  },
  methods: {
    showAlert () {
      this.$swal.fire({
        title: '感謝您的支持',
        text: '產品將會在3個工作天內寄出',
        icon: 'success',
        allowOutsideClick: false,
        confirmButtonText: '開始滿額小遊戲'
      }).then((result) => {
        this.$refs.GameModal.showModal()
      })
    }
  }
}
</script>
