<template>

  <!-- Modal -->
<div class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      ref="modal">
  <div class="modal-dialog modal-dialog-centered modal-fullscreen test">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">點選賽馬開始遊戲 /
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
          <div
          v-for="item in horses" :key="item.id"
          @click.once="[selectedHorse(item), play()]"
          class="horse d-flex"
          :class="[item.color, item.speed, `top-${item.id}`, {'animation-start': isPlay }, {'selected-horse': horse.id === item.id}]"
          :disabled="true">
            <div class="fs-6">
              {{ item.id }}
            </div>
            <div>
              <font-awesome-icon icon="fa-solid fa-horse"/>
            </div>
            <div class="fs-6">
              <!-- {{ horsesPosition }} / {{ window }} <br> -->
               <!-- {{ item.speed }} -->
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
  watch: {
    horsesPosition (n, o) {
      console.log(n, o)
    },
    window (n, o) {
      console.log(n, o)
    }
  },
  methods: {
    shuffleArray (inputArray) {
      inputArray.sort(() => Math.random() - 0.5)
    },
    selectedHorse (item) {
      this.horse = { ...item }
    },
    getRank () {
      console.log(this.horse.speed)
      this.$swal.fire({
        title: `恭喜獲得第${this.yourRank}名 <br>` +
                `${this.gift[this.yourRank - 1]} x 1`,
        text: '獎品將會在和商品一併寄出',
        icon: 'success',
        confirmButtonText: '回首頁'
      }).then((result) => {
        // this.$router.push('/') // 先拿掉 方便測試遊戲
      })
    },
    play () {
      this.isPlay = true
      this.yourRank = this.rank.indexOf(this.horse.speed) + 1
      setTimeout(this.getRank, 3000)
    }
  },
  created () {
    const newArray = [...this.rank]
    this.shuffleArray(newArray)
    this.horses.forEach((item, index) => {
      item.speed = newArray[index]
    })
  }
}
</script>
<style lang="scss" scoped>
.horse{
  position:absolute;
  font-size:50px;
  z-index: 1;
}
.selected-horse{
  border-bottom: 5px dotted; 
}
.animation-start{
  animation:move 3s ;
}
.linear{
  animation-timing-function: linear;
  animation-fill-mode : forwards;
}
.ease{
  // animation:move 10s ease ;
  animation-timing-function: ease;
  animation-fill-mode : forwards;
}
.ease-in{
  // animation:move 10s ease-in ;
  animation-timing-function: ease-in;
  animation-fill-mode : forwards;
}
.ease-out{
  // animation:move 10s ease-out ;
  animation-timing-function: ease-out;
  animation-fill-mode : forwards;
}
.ease-in-out{
  // animation:move 10s ease-in-out ;
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
  height: 600px;
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


// 邊框
@keyframes rotate {
	100% {
		transform: rotate(1turn);
	}
}

.rainbow {
	position: relative;
	z-index: 0;
	width: 400px;
	height: 300px;
	border-radius: 10px;
	overflow: hidden;
	padding: 2rem;
	
	&::before {
		content: '';
		position: absolute;
		z-index: -2;
		left: -50%;
		top: -50%;
		width: 200%;
		height: 200%;
		background-color: #399953;
		background-repeat: no-repeat;
		background-size: 50% 50%, 50% 50%;
		background-position: 0 0, 100% 0, 100% 100%, 0 100%;
		background-image: linear-gradient(#399953, #399953), linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33), linear-gradient(#377af5, #377af5);
		animation: rotate 4s linear infinite;
	}
	
	&::after {
		content: '';
		position: absolute;
		z-index: -1;
		left: 6px;
		top: 6px;
		width: calc(100% - 12px);
		height: calc(100% - 12px);
		background: white;
		border-radius: 5px;
		animation: opacityChange 3s infinite alternate;
	}
}

@keyframes opacityChange {
	50% {
		opacity:1;
	}
	100% {
		opacity: .5;
	}
}
</style>



