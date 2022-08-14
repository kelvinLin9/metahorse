<template>
  <div class="container-fluid">
    <div 
    v-for="item in horses" :key="item.id"
    @click.prevent="[selectedHorse(item), play()]"
    class="horse test d-flex"
    id = "dddddd"
    :class="[item.color, item.speed, `top-${item.id}`, { 'animation-start': isPlay }]">
      <div class="fs-6">
        {{ item.id }} <br>
        <!-- {{ item.speed }} -->
      </div>
      <div>
        <font-awesome-icon icon="fa-solid fa-horse"/>
      </div>
      {{ horsesPosition }} / {{ window }}

    </div>
    <span class="line"></span>
    <!-- <bottom type="button"
            class="btn btn-primary rounded-0 fw-bold btn-lg fs-3"
            @click.prevent="play">

    <span>
      開始
    </span> 
    <span>
      你選擇了 {{ horse.id }} 號
    </span>
    </bottom> -->

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
          id: 1,
        },
        {
          color: 'text-secondary',
          speed: 'ease',
          id: 2,
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
          speed: 'ease-in-out',
          id: 5
        }
      ],
      horse: [],
      horsesX: {},
      isPlay: false,
      horsesPosition: 0,
      window: 0,
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
    selectedHorse(item) {
      this.horse = { ...item}
    },
    play () {
      // const array = ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out']
      // // let array = [1, 2, 3, 4, 5]
      // this.shuffleArray(array)
      // console.log(array)
      // this.horses.forEach((item, index) => {
      //   item.speed = array[index]
      // })
      // console.log(this.horses)
      this.isPlay = true
      const apple = document.querySelector('.linear')
      console.log(apple.offsetLeft)
      console.log(window.innerWidth)
      // console.log(apple.getBoundingClientRect().left)
    }
  },
  created () {
    let array = ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out']
    this.shuffleArray(array)
    // console.log(array)
    this.horses.forEach((item, index) => {
      item.speed = array[index]
    })
    // console.log(this.horses)
  },
  mounted () {
    const apple = document.querySelector('.linear')
    this.horsesPosition = apple.offsetLeft
    this.window = window.innerWidth
    window.onscroll = function (e) {
      // console.log(e.target.scrollingElement.scrollTop)
      console.log(e.target.scrollingElement.scrollLeft)
    }
    console.log(window.innerWidth)
    // document.querySelector('.ease').onmousemove = (e) => {
    // console.log(e.offsetWidth)
    // }
    // const apple = document.querySelector('.linear')
    // console.log(apple.offsetWidth)

  }
}
</script>

<style lang="scss" scoped>
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
@keyframes move{
    0%{
      left:calc(5vw );
    }
    100%{
      left:calc(80vw);
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
