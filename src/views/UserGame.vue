<template>
  <div class="container-fluid">
    <div
    v-for="item in horses" :key="item.id"
    @click.prevent="[selectedHorse(item), play()]"
    class="horse d-flex"
    :class="[item.color, item.speed, `top-${item.id}`, { 'animation-start': isPlay }, {'test' : horse.id === item.id}]">
      <div class="fs-6">
        {{ item.id }}
      </div>
      <div>
        <font-awesome-icon icon="fa-solid fa-horse"/>
      </div>
      <div class="fs-6">
        {{ horsesPosition }} / {{ window }} <br> {{ item.speed }}
      </div>
    </div>
    <span class="line"></span>
    <button type="button"
            class="btn btn-primary rounded-0 fw-bold btn-lg fs-3"
            >
      <span>
        請點選喜歡的馬開始遊戲
      </span>
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
      isPlay: false,
      horsesPosition: 0,
      window: 0
    }
  },
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
      this.$swal.fire(
        `恭喜獲得第${this.yourRank}名`,
        '獎品將會在和商品一併寄出',
        'success'
      )
      // this.$router.push('/')
    },
    play () {
      this.isPlay = true
      this.yourRank = this.rank.indexOf(this.horse.speed) + 1
      setTimeout(this.getRank, 10000)
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
.ttt{
  font-size:70px !important
}
.horse{
  position:absolute;
  font-size:50px;
}
.animation-start{
  animation:move 10s ;
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
.line{
  display:block;
  // z-index:10;
  position:absolute;
  left: calc(16vw);
  width: calc(68vw);
  height:750px;
  border-left:2px solid red;
  border-right:2px solid red;
}
.btn{
  // display:block;
  z-index:10;
  position:absolute;
  top: 550px;
    &:hover {
      color: rgb(42, 172, 85);
      animation-play-state: running;
    }
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
