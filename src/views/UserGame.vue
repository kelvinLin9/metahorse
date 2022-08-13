<template>
  <div class="container-fluid">
    <div class="linear text-primary ">
      <font-awesome-icon icon="fa-solid fa-horse" />
    </div>
    <div class="ease text-secondary ">
      <font-awesome-icon icon="fa-solid fa-horse" />
    </div>
    <div class="ease-in text-success ">
      <font-awesome-icon icon="fa-solid fa-horse" />
    </div>
    <div class="ease-out text-danger ">
      <font-awesome-icon icon="fa-solid fa-horse" />
    </div>
    <div class="ease-in-out ">
      <font-awesome-icon icon="fa-solid fa-horse" />
    </div>
    <!-- <div class="Q1">cubic-bezier</div> -->
    <!-- <div class="Q2">cubic-bezier</div> -->
    <span class="line"></span>
  </div>
</template>

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
</style>