<template>
  <div class="text-end">
    <button class="btn btn-primary" type="button"
    @click="this.$refs.GameModal.showModal()">
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
  }
}
</script>
