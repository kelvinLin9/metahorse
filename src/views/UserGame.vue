<template>
  <div class="container-fluid"
        v-for="item in horses" :key="item.color">
    <div :class="[item.color, item.speed]">
      <font-awesome-icon icon="fa-solid fa-horse" />
    </div>

    <!-- <div class="Q1">cubic-bezier</div> -->
    <!-- <div class="Q2">cubic-bezier</div> -->
    <span class="line"></span>
    <button type="button"
            class="btn btn-primary btn-hover rounded-0 fw-bold btn-lg fs-3"
            @click.prevent="play">
      開始
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
          speed: 'ease'
        },
        {
          color: 'text-success',
          speed: 'ease-in'
        },
        {
          color: 'text-danger',
          speed: 'ease-out'
        },
        {
          color: '',
          speed: 'ease-in-out'
        }
      ],
      isPlay: false
    }
  },
  methods: {
    shuffleArray (inputArray) {
      inputArray.sort(() => Math.random() - 0.5)
    },
    play () {
      const array = ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out']
      this.shuffleArray(array)
      console.log(array)
      this.horses.forEach((item, index) => {
        item.speed = array[index]
      })
      console.log(this.horses)
      this.isPlay = true
    }
  },
  // mounted () {

  // }
}
</script>

<style lang="scss" scoped>
div{
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
  font-size:50px;
  text-align:center;
}
.linear{
  top:30px;
  animation:move 10s linear ;
  animation-fill-mode : forwards;
}
.ease{
  top:100px;
  animation:move 10s ease ;
  animation-fill-mode : forwards;
}
.ease-in{
  top:170px;
  animation:move 10s ease-in ;
  animation-fill-mode : forwards;
}
.ease-out{
  top:240px;
  animation:move 10s ease-out ;
  animation-fill-mode : forwards;
}
.ease-in-out{
  top:310px;
  animation:move 10s ease-in-out ;
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
  display:block;
  // z-index:10;
  position:absolute;
  top: 450px;
}
</style>
