<template>
  <div class="container-fluid">
    <div 
    v-for="item in horses" :key="item.id"
    @click.prevent="selectedHorse(item)"
    :class="[item.color, item.speed, { 'paused': isPlay }]">
      {{ item.id }}
      <font-awesome-icon icon="fa-solid fa-horse" />
      <span class="fs-5">
        {{ item.speed }}
      </span>
    </div>

    <!-- <div class="Q1">cubic-bezier</div> -->
    <!-- <div class="Q2">cubic-bezier</div> -->
    <span class="line"></span>
    <bottom type="button"
            class="btn btn-primary btn-hover rounded-0 fw-bold btn-lg fs-3"
            @click.prevent="play">

    <span>
      開始
    </span> 
    <span>
      你選擇了 {{ horse.id }} 號
    </span>
    </bottom>

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
          speed: 'ease-in-out',
          id: 5
        }
      ],
      horse: [],
      horsesX: {},
      isPlay: false
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
    }
  },
  created () {
    let array = ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out']
    this.shuffleArray(array)
    console.log(array)
    this.horses.forEach((item, index) => {
      item.speed = array[index]
    })
    console.log(this.horses)
  }
}
</script>

<style lang="scss" scoped>
div{
  display:flex;
  // justify-content:center;
  align-items:center;
  position:absolute;
  font-size:50px;
  text-align:center;
}
.paused{
  animation:move 10s ;
}
.linear{
  top:30px;
  animation-timing-function: linear;
  animation-fill-mode : forwards;  
}
.ease{
  top:100px;
  // animation:move 10s ease ;
  animation-timing-function: ease;
  animation-fill-mode : forwards;
}
.ease-in{
  top:170px;
  // animation:move 10s ease-in ;
  animation-timing-function: ease-in;
  animation-fill-mode : forwards;
}
.ease-out{
  top:240px;
  // animation:move 10s ease-out ;
  animation-timing-function: ease-out;
  animation-fill-mode : forwards;
}
.ease-in-out{
  top:310px;
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
  top: 450px;
    &:hover {
      color: #333;
      animation-play-state: running;
    }
}
</style>
