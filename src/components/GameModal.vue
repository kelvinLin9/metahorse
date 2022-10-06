<template>
  <div class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
        ref="modal">
    <div class="modal-dialog modal-dialog-centered modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            點選賽馬開始遊戲 /
            <span v-if="horse.id">
              您選擇的是
              <span class="fs-1">
                {{ horse.id }}
              </span>
              號
            </span>
          </h5>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div  v-for="item in horses"
                  :key="item.id"
                  @click.once="selectHorse(item)"
                  class="horse d-flex"
                  :class="[ item.color,
                            item.speed,
                            `top-${item.id}`,
                            {'animation-start': isPlay },
                            {'selected-horse': horse.id === item.id}
                          ]"
                  :disabled="true"
            >
              <div class="fs-6">
                {{ item.id }}
              </div>
              <div>
                <font-awesome-icon icon="fa-solid fa-horse"/>
              </div>
            </div>
            <span class="start"></span>
            <span class="end"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'

export default {
  data () {
    return {
      modal: {},
      horses: [
        {
          color: 'text-primary',
          speed: 'linear',
          id: 1
        },
        {
          color: 'text-secondary',
          speed: 'ease',
          id: 2
        },
        {
          color: 'text-success',
          speed: 'ease-in',
          id: 3
        },
        {
          color: 'text-danger',
          speed: 'ease-out',
          id: 4
        },
        {
          color: '',
          speed: 'super',
          id: 5
        }
      ],
      horse: {},
      rank: ['super', 'ease', 'ease-out', 'linear', 'ease-in'],
      yourRank: 0,
      gift: ['S級賽馬', 'A級賽馬', 'B級賽馬', 'C級賽馬', '馬鞍'],
      isPlay: false,
      horsesPosition: 0,
      window: 0
    }
  },
  mixins: [modalMixin],
  methods: {
    shuffleArray (inputArray) {
      inputArray.sort(() => Math.random() - 0.5)
    },
    selectHorse (item) {
      if (this.isPlay) return // 如果正在玩遊戲的話，就不要繼續執行
      this.horse = { ...item }
      this.play()
    },
    getRank () {
      this.isPlay = false
      this.$swal.fire({
        title: `恭喜獲得第${this.yourRank}名 <br>` +
                `${this.gift[this.yourRank - 1]} x 1`,
        text: '獎品將會在和商品一併寄出',
        icon: 'success',
        allowOutsideClick: false,
        confirmButtonText: '回首頁'
      }).then(() => {
        this.hideModal() // Modal關掉才不會造成回首頁後黑屏
        this.$router.push('/')
      })
    },
    play () {
      this.isPlay = true
      this.yourRank = this.rank.indexOf(this.horse.speed) + 1
      setTimeout(this.getRank, 5000)
    }
  },
  created () {
    const newArray = [...this.rank]
    // 隨機分配賽馬速度
    this.shuffleArray(newArray)
    this.horses.forEach((item, index) => {
      item.speed = newArray[index]
    })
  }
}
</script>
<style lang="scss" scoped>
.modal-body{
  position: relative;
  overflow-x: hidden;
}
.horse{
  position:absolute;
  font-size:50px;
  z-index: 1;
}
.selected-horse{
  border-bottom: 5px dotted;
}
.animation-start{
  animation:move 5s ;
}
.linear{
  animation-timing-function: linear;
  animation-fill-mode : forwards;
}
.ease{
  animation-timing-function: ease;
  animation-fill-mode : forwards;
}
.ease-in{
  animation-timing-function: ease-in;
  animation-fill-mode : forwards;
}
.ease-out{
  animation-timing-function: ease-out;
  animation-fill-mode : forwards;
}
.ease-in-out{
  animation-timing-function: ease-in-out;
  animation-fill-mode : forwards;
}
.super{
  animation-timing-function: cubic-bezier(1,0,0.28,10);
  // animation-timing-function: cubic-bezier(0.75,0.35,1,0);
  animation-fill-mode : forwards;
}
@keyframes move{
    0%{
      left:5vw ;
    }
    100%{
      left:100vw;
    }
}
.modal-content{
  height: 620px;
}
.start{
  display:block;
  position:absolute;
  left: 80px;
  height:480px;
  border-left:2px solid red;
}
.end{
  display:block;
  position:absolute;
  right: 36px;
  height:480px;
  border-left:2px solid red;
}
.top-1{
  top:30px
}
.top-2{
  top:130px
}
.top-3{
  top:230px
}
.top-4{
  top:330px
}
.top-5{
  top:430px
}
</style>
