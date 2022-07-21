<template>
  <Loading :active="isLoading"></Loading>
  <Banner/>
  <section class="my-5">
    <div class="container">
      <div class="row row-cols-lg-2 row-cols-1 align-items-center flex-row-reverse">
        <div class="col-lg-6">
          <h3 class="f-kalam text-center text-lg-start text-primary"
              data-aos="fade-up"
              data-aos-duration="2000">
            About Me
          </h3>
          <h2 class="fw-bold text-center text-lg-start lh-lg"
              data-aos="fade-up"
              data-aos-duration="2000">
            全球首個數字馬 NFT
            <br class="d-lg-none">
            幣安智能鏈上的 GAMEFI
          </h2>
          <p class="lh-lg"
              data-aos="fade-up"
              data-aos-duration="2000">
            世界上第一個數字和創新的馬 NFT，幣安智能鏈上的 GameFi，讓您通過成為 MetaHorse 在數字世界和現實生活中受益並獲得真正的馬。 它使您能夠擁有和交易數字真馬，並得到實體馬匹的支持，並幫助您參加賽馬比賽。
          </p>
        </div>
        <div class="col-lg-6"
            data-aos="fade-right"
            data-aos-duration="2000">
          <img src="../image/003.jpg" alt="裝飾圖" class="w-100">
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
      <h2 class="fw-bold text-center text-lg-start lh-lg"
          data-aos="fade-down"
          data-aos-duration="2000">
        NFT除了可以擁有真實的馬，還可以在我們創造的原宇宙裡進行遊戲。
      </h2>
      <div class="row row-cols-1 row-cols-lg-3 flex-lg-row-reverse">
        <div class="col">
          <div class="row row-cols-4 row-cols-lg-1">
              <div class="col d-flex justify-content-center justify-content-lg-end"
                  v-for="item in productsY" :key="item">
                  <div class=" border-0 my-2"
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000">
                    <a href="#" @click.prevent="temp = item">
                      <img :src="item.imageUrl" alt="遊戲參考圖"
                    class="shadow rounded img-thumbnail" width="150"
                    :class="{'bg-primary':  item.category === temp.category}">
                    </a>
                  </div>
              </div>
          </div>
        </div>
        <div class="col mb-5 mt-3 d-flex justify-content-between flex-column ">
          <div class="border-0 mb-5 d-flex justify-content-center"
              data-aos="zoom-in-up"
              data-aos-duration="2000">
            <img :src="temp.imageUrl" alt="遊戲參考圖放大"
            class="round-icon rounded-circle img-thumbnail bg-primary">
          </div>
          <div class="d-flex justify-content-center"
              data-aos="zoom-out"
              data-aos-duration="2000">
            <button type="submit"
                    class="btn btn-primary btn-hover rounded-0 fw-bold btn-lg fs-3"
                    @click.prevent="goProducts">
            馬上購買
            </button>
          </div>
        </div>
          <div class="col"
              data-aos="fade-down-right"
              data-aos-duration="2000">
            <div class="row d-flex flex-column">
              <hr>
              <div class="col mt-3">
                <h3 class="fw-bold text-center text-lg-start lh-lg">
                  遊戲中數值
                </h3>
                <h4 class="fw-bold text-center text-lg-start lh-lg">
                  Level：{{temp.category}}
                </h4>
              </div>
            <div class="w-75">
            <span class="fw-bold fs-5">速度<i class="bi bi-lightning-fill mx-1"></i></span>
            <div class="progress mb-3">
              <div class="progress-bar text-dark fw-bold" role="progressbar" :style="{width: `${temp.speed*20}%`}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                {{temp.speed}} / 5
              </div>
            </div>
            <span class="fw-bold fs-5">耐力<i class="bi bi-clock-fill mx-1"></i></span>
            <div class="progress mb-3">
              <div class="progress-bar text-dark fw-bold" role="progressbar" :style="{width: `${temp.stamina*20}%`}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                {{temp.stamina}} / 5
              </div>
            </div>
            <span class="fw-bold fs-5">幸運<i class="bi bi-dice-6-fill mx-1"></i></span>
            <div class="progress mb-3">
              <div class="progress-bar text-dark fw-bold" role="progressbar" :style="{width: `${temp.lucky*20}%`}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                {{temp.lucky}} / 5
              </div>
            </div>
            <span class="fw-bold fs-5">智慧<i class="bi bi-mortarboard-fill mx-1"></i></span>
            <div class="progress mb-3">
              <div class="progress-bar text-dark fw-bold" role="progressbar" :style="{width: `${temp.intelligence*20}%`}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                {{temp.intelligence}} / 5
              </div>
            </div>
            <hr>
          </div>
          <!-- 星星寫法先保留 -->
            <!-- <ul class="col">
              <li class="d-flex my-2 justify-content-center justify-content-lg-start">
                <h4>
                  速度 <i class="bi bi-lightning-fill mx-1"></i>：
                </h4>
                <span class="mx-1"
                      v-for="key in temp.speed" :key="key">
                  <i class="bi bi-star-fill" data-aos="zoom-in"></i>
                </span>
                <span class="mx-1"
                      v-for="key in (5 - temp.speed)" :key="key">
                  <i class="bi bi-star" data-aos="zoom-in"></i>
                </span>
              </li>
              <li class="d-flex my-2 justify-content-center justify-content-lg-start">
                <h4>
                  耐力 <i class="bi bi-clock-fill mx-1"></i>：
                </h4>
                <span class="mx-1"
                      v-for="key in temp.stamina" :key="key">
                  <i class="bi bi-star-fill" data-aos="zoom-in"></i>
                </span>
                <span class="mx-1"
                      v-for="key in (5 - temp.stamina)" :key="key">
                  <i class="bi bi-star" data-aos="zoom-in"></i>
                </span>
              </li>
              <li class="d-flex my-2 justify-content-center justify-content-lg-start">
                <h4>
                  幸運 <i class="bi bi-dice-6-fill mx-1"></i>：
                </h4>
                <span class="mx-1"
                      v-for="key in temp.lucky" :key="key">
                  <i class="bi bi-star-fill" data-aos="zoom-in"></i>
                </span>
                <span class="mx-1"
                      v-for="key in (5 - temp.lucky)" :key="key">
                  <i class="bi bi-star" data-aos="zoom-in"></i>
                </span>
              </li>
              <li class="d-flex my-2 justify-content-center justify-content-lg-start">
                <h4>
                  智慧 <i class="bi bi-mortarboard-fill mx-1"></i>：
                </h4>
                <span class="mx-1"
                      v-for="key in temp.intelligence" :key="key">
                  <i class="bi bi-star-fill" data-aos="zoom-in"></i>
                </span>
                <span class="mx-1"
                      v-for="key in (5 - temp.intelligence)" :key="key">
                  <i class="bi bi-star" data-aos="zoom-in"></i>
                </span>
              </li>
            </ul> -->
          </div>
          </div>
      </div>
    </div>
  </section>
  <hr>
  <OtherProducts/>
  <hr>
  <UserFooter/>
  <GoTop/>
</template>

<script>
// @ is an alias to /src
// import UserNavbar from '../components/UserNavbar.vue'
import Banner from '@/components/UserHomeBanner.vue'
import OtherProducts from '@/components/ProductsHot.vue'
import UserFooter from '@/components/UserFooter.vue'
import GoTop from '@/components/GoTop.vue'
export default {
  name: 'HomeView',
  components: {
    Banner,
    OtherProducts,
    UserFooter,
    GoTop
  },
  data () {
    return {
      products: [],
      temp: {}, // 暫存點擊到的賽馬資訊
      productsX: [], // 放後端全部資料
      productsY: [], // 手動選的資料
      productsZ: [] // 試著用函式寫看看
    }
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        // 我全都要
        this.productsX = res.data.products

        // 手動挑出想展示的商品
        this.productsY.push(res.data.products[11])
        this.productsY.push(res.data.products[10])
        this.productsY.push(res.data.products[8])
        this.productsY.push(res.data.products[5])
        this.temp = this.productsY[0]

        // 重複的商品只挑一個 還沒解決會挑到道具的問題 用兩次filter看看
        const set = new Set()
        const productsZ = res.data.products.filter(item => !set.has(item.category) ? set.add(item.category) : false)
        console.log(1, productsZ)
        this.isLoading = false
      })
    },
    goProducts () {
      this.$router.push('/products')
    }
  },
  created () {
    this.getProducts()
  }
}
</script>

<style lang="scss" scoped>
/* 載入字體 */
// @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap');
.f-kalam {
  font-family: 'Kalam', cursive;
}
.test {
  outline: 3px solid red;
}
.round-icon{
  width:350px;
  height:350px;
  /* position:absolute; */
  /* top:0px; */
  /* left: 10px; */
}
// .slogan{
//       width: 18em;
//       white-space: nowrap;
//       overflow: hidden;
//       animation: typing 2s steps(18), Wcaret 2s steps(1);
//     }
</style>
