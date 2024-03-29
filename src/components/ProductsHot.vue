<template>
  <div class="container">
    <h3 class="text-center my-3 fs-2 fw-bolder"
        data-aos="fade-down"
        data-aos-duration="2000">熱銷商品
    </h3>
    <div class="row g-4 pb-5">
      <Swiper
        :loop="true"
        :slidesPerView="1"
        :spaceBetween="20"
        :freeMode="true"
        :pagination="{clickable: true}"
        :modules="modules"
        navigation
        :scrollbar="{ draggable: true }"
        :breakpoints="{
        '768': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '992': {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }"
        class="mySwiper"
      >
        <SwiperSlide v-for="(item) in productsHot" :key="item.id">
          <div class="card rounded-3 mb-5 mx-2 mx-sm-0 scale"
                @click="goProduct(item.id)"
                data-aos="flip-up"
                data-aos-duration="2000">
            <div class="card-img overflow-hidden position-relative">
              <button class="btn bg-dark fs-4 position-absolute text-white w-100 h-100 bg-opacity-75" type="button">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> 詳細資訊
              </button>
              <img class="rounded-3 img-fit"
                    :src="item.imageUrl"
                    alt="商品照片"
              >
              <span class="position-absolute rounded-circle fs-2 p-1 fav-icon bg-white d-flex justify-content-center  align-items-center"
                    @click.stop="toggleFavorite(item.id)">
                <FontAwesomeIcon :icon="favState(item.id)"
                                    class="love"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="加入 / 移除我的最愛"
                />
              </span>
            </div>
            <div class="card-body d-flex flex-column justify-content-center text-center fw-bold">
              <span class="fs-4">
                {{ item.title }}
                <span class="fs-6 text-muted">（{{ item.category }}）</span>
              </span>
              <span class="fs-5">
                NT ${{ item.price }}
                <span class="text-muted text-decoration-line-through fs-6 ms-1">${{ item.origin_price }}</span>
              </span>
              <div class="row mt-2">
                <button type="button"
                        class="btn btn-outline-primary text-dark fw-bold"
                        :disabled="cartLoadingItem === item.id"
                        @click.stop="addCart(item.id)">
                  <div v-if="cartLoadingItem === item.id"
                      class="spinner-grow text-danger spinner-grow-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                    加到購物車
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </swiper>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Navigation, FreeMode, Pagination, Scrollbar } from 'swiper'
import { mapState, mapActions } from 'pinia'
import productsStore from '@/stores/productStore'
import cartStore from '@/stores/cartStore'
import statusStore from '@/stores/statusStore'
import favoriteStore from '@/stores/favoriteStore'
import goStore from '@/stores/goStore'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Navigation, FreeMode, Pagination, Scrollbar]
    }
  },
  methods: {
    ...mapActions(favoriteStore, ['getFavorite', 'getFavoriteIds', 'toggleFavorite']),
    ...mapActions(productsStore, ['getProducts']),
    ...mapActions(cartStore, ['getCart', 'addCart']),
    ...mapActions(goStore, ['goProduct'])
  },
  computed: {
    ...mapState(favoriteStore, ['favorite', 'favoriteIds', 'favIcons', 'favState']),
    ...mapState(productsStore, ['products', 'productsHot']),
    ...mapState(statusStore, ['cartLoadingItem'])
  }
}
</script>

<style lang="scss" scoped>
.fav-icon {
  width: 50px;
  height: 50px;
  color: rgb(201, 54, 54);
  top: 5px;
  right: 5px;
  z-index: 2;
}
.love {
  font-size: 35px;
}
.img-fit{
  width: 100%;
  object-fit: cover;
  transition: 0.5s;
}
.scale{
  cursor:pointer;
  &:hover{
    .btn{
      opacity: 1;
    }
    img{
      transform: scale(1.15);
    }
  }
}
.bg-dark{
  z-index: 1;
  opacity: 0;
  transition: 0.5s;
}
</style>
