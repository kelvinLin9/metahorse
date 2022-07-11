<template>

  <UserNavbar/>
  <Banner/>

  <section class="my-5">
    <div class="container">
      <div class="row row-cols-lg-2 row-cols-1 align-items-center flex-row-reverse">
        <div class="col-lg-6">
          <h3 class="f-kalam text-center text-lg-start text-primary">
            About Me
          </h3>
          <h2 class="fw-bold text-center text-lg-start lh-lg">
            全球首個數字馬 NFT
            <br class="d-lg-none">
            幣安智能鏈上的 GAMEFI
          </h2>
          <p class="lh-lg">
            世界上第一個數字和創新的馬 NFT，幣安智能鏈上的 GameFi，讓您通過成為 MetaHorse 在數字世界和現實生活中受益並獲得真正的馬。 它使您能夠擁有和交易數字真馬，並得到實體馬匹的支持，並幫助您參加賽馬比賽。
          </p>
        </div>
        <div class="col-lg-6">
          <img src="../image/003.jpg" alt="" class="w-100">
        </div>
      </div>
    </div>
  </section>
<br>
<br>
<hr>
<br>
  <section class="my-5">
    <div class="container">
      <h2 class="fw-bold text-center text-lg-start lh-lg">
        NFT除了可以擁有真實的馬，還可以在我們創造的原宇宙裡進行遊戲。
      </h2>
      <div class="row row-cols-1 row-cols-lg-3 flex-lg-row-reverse">
        <div class="col">
          <div class="row row-cols-4 row-cols-lg-1">
              <div class="col d-flex justify-content-center justify-content-lg-end"
                  v-for="item in products" :key="item">
                  <div class="card border-0 my-2">
                  <a href="#" @click.prevent="temp = item">
                    <img :src="item.imageUrl" alt=""
                    class="shadow rounded img-thumbnail" width="150"
                    :class="{'bg-primary':  item.level === temp.level}">
                  </a>
                  </div>
              </div>
          </div>
        </div>
        <div class="col mb-5 mt-3 d-flex justify-content-between flex-column ">
          <div class="border-0 mb-5 d-flex justify-content-center">
            <img :src="temp.imageUrl" alt=""
            class="upper-shot rounded-circle img-thumbnail bg-primary">
          </div>
          <div class="d-flex justify-content-center">
            <button type="submit"
                    class="btn btn-primary btn-hover rounded-0 fw-bold btn-lg fs-3"
                    @click.prevent="goProducts">
            馬上購買
            </button>
          </div>
        </div>
        <div class="col">
          <div class="row d-flex flex-column justify-content-between">
            <hr>
            <div class="col">
              <h3 class="fw-bold text-center text-lg-start lh-lg">
                遊戲中數值
              </h3>
              <h4 class="fw-bold text-center text-lg-start lh-lg">
                Level：{{temp.level}}
              </h4>
            </div>
            <ul class="col">
              <li class="d-flex row">
                <div class="col-4">
                  <h4>速度 <i class="bi bi-lightning-fill mx-1"></i>：</h4>
                </div>
                <div class="col-1"
                    v-for="(item, key) in temp.speed" :key="key">
                  <i class="bi bi-star-fill"></i>
                </div>
                <div class="col-1"
                    v-for="(item, key) in (5 - temp.speed)" :key="key">
                  <i class="bi bi-star"></i>
                </div>
              </li>
              <li class="d-flex row">
                <div class="col-4">
                  <h4>耐力 <i class="bi bi-clock-fill mx-1"></i>：</h4>
                </div>
                <div class="col-1"
                    v-for="(item, key) in temp.stamina" :key="key">
                  <i class="bi bi-star-fill"></i>
                </div>
                <div class="col-1"
                    v-for="(item, key) in (5 - temp.stamina)" :key="key">
                  <i class="bi bi-star"></i>
                </div>
              </li>
              <li class="d-flex row">
                <div class="col-4">
                  <h4>幸運 <i class="bi bi-dice-6-fill mx-1"></i>：</h4>
                </div>
                <div class="col-1"
                    v-for="(item, key) in temp.lucky" :key="key">
                  <i class="bi bi-star-fill"></i>
                </div>
                <div class="col-1"
                    v-for="(item, key) in (5 - temp.lucky)" :key="key">
                  <i class="bi bi-star"></i>
                </div>
              </li>
              <li class="d-flex row">
                <div class="col-4 ">
                  <h4>智慧 <i class="bi bi-mortarboard-fill mx-1"></i>：</h4>
                </div>
                <div class="col-1 "
                    v-for="(item, key) in temp.intelligence" :key="key">
                  <i class="bi bi-star-fill"></i>
                </div>
                <div class="col-1 "
                    v-for="(item, key) in (5 - temp.intelligence)" :key="key">
                  <i class="bi bi-star"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>
  <hr>
  <OtherProducts></OtherProducts>
  <hr>
  <UserCoupon/>
  <Footer/>
  <GoTop/>
</template>

<script>
// @ is an alias to /src
import UserNavbar from '../components/UserNavbar.vue'
import Banner from '@/components/Banner.vue'
import OtherProducts from '@/components/OtherProducts.vue'
import Footer from '@/components/Footer.vue'
import GoTop from '@/components/GoTop.vue'
import UserCoupon from '@/components/UserCoupon.vue'
export default {
  name: 'HomeView',
  components: {
    UserNavbar,
    Banner,
    OtherProducts,
    Footer,
    GoTop,
    UserCoupon
  },
  data () {
    return {
      products: [
        {
          level: 'S',
          imageUrl: 'https://imgur.com/kdTurd4.jpg',
          // imageUrl: 'https://i.imgur.com/lx57Zsk.jpg',
          speed: 5,
          stamina: 5,
          lucky: 5,
          intelligence: 5
        },
        {
          level: 'A',
          imageUrl: 'https://imgur.com/Bj7I9T4.jpg',
          speed: 4,
          stamina: 4,
          lucky: 3,
          intelligence: 5
        },
        {
          level: 'B',
          imageUrl: 'https://imgur.com/BextSIV.jpg',
          speed: 3,
          stamina: 3,
          lucky: 1,
          intelligence: 3
        },
        {
          level: 'C',
          imageUrl: 'https://imgur.com/5PsDE2E.jpg',
          speed: 2,
          stamina: 1,
          lucky: 2,
          intelligence: 1
        }
      ],
      temp: {
        level: 'S',
        imageUrl: 'https://imgur.com/kdTurd4.jpg',
        speed: 5,
        stamina: 5,
        lucky: 5,
        intelligence: 5
      }
    }
  },
  methods: {
    // selProduct (product) {
    //   this.temp = product
    // }
    goProducts () {
      this.$router.push('/user/products')
    }
  }
}
</script>

<style>
/* 載入字體 */
@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap');

.logo{
  width:50px;
  /* height:50px; */
  position:absolute;
  top:10px;
  left: 165px;
}
.upper-shot{
  width:350px;
  height:350px;
  /* position:absolute; */
  /* top:-0px; */
  /* left: 10px; */
}
.test {
  outline: 1px solid #000;
}

.f-kalam {
  font-family: 'Kalam', cursive;
}

</style>
