<template>
  <UserHomeBanner/>
  <section class="mt-5">
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
            全球首個數位賽馬NFT
            <br class="d-lg-none">
            幣安智能鏈上的GameFi
          </h2>
          <p class="lh-lg"
              data-aos="fade-up"
              data-aos-duration="2000">
            世界上第一個數位和創新的賽馬NFT，幣安智能鏈上的GameFi，讓您通過成為 MetaHorse 在數位世界遊戲和現實生活中獲得真正的馬。它使您能夠擁有和交易賽馬NFT，並得到實體馬匹的支持，幫助您參加賽馬比賽。
          </p>
        </div>
        <div class="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="2000">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/kelvinlin9/1666489100476.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OONcxH4uqQ1avrsKOVsy0FG84tOIVjeRNITaRea9I0P3A9ABHZv48qagsgbeaUaG3cg%2BhX0DFC8Hp9c3b4jwAr7p3ELFM9qUjA4iUFnQWUvly0qAyKIEuh35wFdFE89EZHfoSzF7Fw6EFILDyO8zDx4CVZhKzLL0neexYu6JMwtomwv2yYJGLtSzgdeGh1DkIg1wP5WgaSniopleMfJS6Nwto08YyW3fQxhtjrzYsLMmCQDOXfuF55%2FpK0qPuZzQhtw2eOnlqZ6WCg6WPynJ2NorijjNve1N8Z6TStVW8PLbaALW26%2BcyKBIMcwdybTX6I9r%2BRELacKUPQ%2FV9GyNiQ%3D%3D" alt="裝飾圖" class="w-100">
        </div>
      </div>
    </div>
  </section>
  <UserHomeCoupon class="mt-5"/>
  <section class="mt-5">
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
                  v-for="item in productsGame" :key="item">
                  <div class=" border-0 my-2"
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000">
                    <a href="#" @click.prevent="temp = item">
                      <img  :src="item.imageUrl" alt="遊戲參考圖"
                            class="shadow rounded img-thumbnail" width="150"
                            :class="{'bg-primary':  item.category === temp.category}">
                    </a>
                  </div>
              </div>
          </div>
        </div>
        <div class="col mb-3 mt-3 d-flex justify-content-between flex-column ">
          <div class="border-0 mb-0 mb-sm-5 d-flex justify-content-center"
              data-aos="zoom-in-up"
              data-aos-duration="2000">
            <img  :src="temp.imageUrl" alt="遊戲參考圖放大"
                  class="round-icon rounded-circle img-thumbnail bg-primary  d-none d-sm-block">
          </div>
          <div class="d-flex justify-content-center"
              data-aos=""
              data-aos-duration="2000">
            <button type="button"
                    class="btn btn-primary btn-hover rounded-0 fw-bold btn-lg fs-3"
                    @click="goProducts">
              馬上購買
            </button>
          </div>
        </div>
        <div class="col"
              data-aos="fade-down-right"
              data-aos-duration="2000">
          <div class="row d-flex flex-column">
            <hr>
            <div class="col mt-0 mt-sm-3">
              <h3 class="fw-bold text-center text-lg-start lh-lg">
                遊戲中數值
              </h3>
              <h4 class="fw-bold text-center text-lg-start lh-lg">
                Level：{{ temp.category }}
              </h4>
            </div>
            <div class="w-75">
              <span class="fw-bold fs-5">
                速度<i class="bi bi-lightning-fill mx-1"></i>
              </span>
              <div class="progress mb-3">
                <div class="progress-bar text-dark fw-bold" role="progressbar"
                    :style="{width: `${temp.speed*20}%`}">
                  {{ temp.speed }} / 5
                </div>
              </div>
              <span class="fw-bold fs-5">
                耐力<i class="bi bi-clock-fill mx-1"></i>
              </span>
              <div class="progress mb-3">
                <div class="progress-bar text-dark fw-bold" role="progressbar"
                    :style="{width: `${temp.stamina*20}%`}">
                  {{ temp.stamina }} / 5
                </div>
              </div>
              <span class="fw-bold fs-5">
                幸運<i class="bi bi-dice-6-fill mx-1"></i>
              </span>
              <div class="progress mb-3">
                <div class="progress-bar text-dark fw-bold" role="progressbar"
                    :style="{width: `${temp.lucky*20}%`}">
                  {{ temp.lucky }} / 5
                </div>
              </div>
              <span class="fw-bold fs-5">
                智慧<i class="bi bi-mortarboard-fill mx-1"></i>
              </span>
              <div class="progress mb-3">
                <div class="progress-bar text-dark fw-bold" role="progressbar"
                    :style="{width: `${temp.intelligence*20}%`}">
                  {{ temp.intelligence }} / 5
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <ProductsHot class="mt-5"/>
</template>

<script>
import UserHomeBanner from '@/components/UserHomeBanner.vue'
import ProductsHot from '@/components/ProductsHot.vue'
import { mapState, mapActions, mapWritableState } from 'pinia'
import productStore from '@/stores/productStore'
import UserHomeCoupon from '../components/UserHomeCoupon.vue'
import goStore from '@/stores/goStore'
import couponStore from '@/stores/couponStore'

export default {
  components: {
    UserHomeBanner,
    ProductsHot,
    UserHomeCoupon
  },
  computed: {
    ...mapState(productStore, ['productsGame']),
    ...mapWritableState(productStore, ['temp'])
  },
  methods: {
    ...mapActions(goStore, ['goProducts']),
    ...mapActions(couponStore, ['homeAlert'])
  },
  mounted () {
    this.$swal.fire({
      title: '<strong>限時優惠</strong>',
      icon: 'info',
      text: '消費滿30000元即可參加抽獎',
      showCloseButton: true,
      confirmButtonText: '立即搶購'
    })
      .then((result) => {
        if (result.isConfirmed) {
          this.$router.push('/products')
        }
      })
  }
}
</script>

<style lang="scss" scoped>
.round-icon{
  width:350px;
  height:350px;
}
</style>
