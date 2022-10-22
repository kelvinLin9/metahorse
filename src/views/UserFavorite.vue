<template>
  <div class="favBanner">
    <div class="bg-dark bg-opacity-75 w-100 h-100 d-flex align-items-center">
      <h1 class="w-100 d-flex align-items-center justify-content-center">
        <span class="me-2 fs-1 fw-bolder text-white">我的最愛</span>
        <span class="fs-5 text-primary align-self-end">/ My Favorite</span>
      </h1>
    </div>
  </div>
  <div class="pb-5">
    <div class="container-fluid pt-5"
        v-if="favorite.length === 0">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <h1 class="fs-2 text-center fw-bold mb-5">目前沒有收藏任何商品</h1>
        <RouterLink to="products" type="button" class="btn btn-outline-primary text-dark fw-bold fs-5">回產品列表</RouterLink>
      </div>
    </div>
    <div class="container pt-4">
      <!-- 桌面版 -->
      <div class="row g-4 justify-content-center "
            v-if="favorite.length !== 0 && windowWidth > 768">
        <div class="col-md-6 col-lg-4 col-10"
              v-for="item in favorite" :key="item.id">
          <div class="card rounded-3 scale"
              @click="goProduct(item.id)"
          >
            <div class="card-img overflow-hidden position-relative">
              <button class="btn bg-dark fs-4 position-absolute text-white w-100 h-100 bg-opacity-75" type="button">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> 詳細資訊
              </button>
              <img class="rounded-3 img-fit"
                  :src="item.imageUrl" alt="商品照片"
              >
            </div>
            <div class="card-body d-flex flex-column justify-content-center text-center fw-bold">
              <span class="fs-4">
                {{ item.title }}
                <span class="fs-6 text-muted">
                  （{{ item.category }}）
                </span>
              </span>
              <span class="fs-5">
                NT ${{ item.price }}
                <span class="text-muted text-decoration-line-through fs-6 ms-1">
                  ${{ item.origin_price }}
                </span>
              </span>
              <div class="px-2 py-2 d-flex justify-content-between">
                <button type="button"
                        class="btn btn-outline-secondary text-dark fw-bold fs-6 px-3"
                        @click.stop="removeFavorite(item.id)">
                  刪除
                </button>
                <button type="button"
                        class="btn btn-outline-primary text-dark fw-bold fs-6 px-3"
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
        </div>
      </div>
      <!-- 手機版 -->
      <div class="table-responsive"
        v-if="favorite.length !== 0 && windowWidth <= 768">
        <table class="table align-middle">
          <thead>
            <tr class="text-center table-primary">
              <th></th>
              <th>圖片</th>
              <th>品名</th>
              <th>單價</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr v-for="item in favorite" :key="item.id">
              <td>
                <button class="btn text-primary fs-1"
                        type="button"
                        @click="removeFavorite(item.id)">
                  <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                </button>
              </td>
              <td style="width:70px" class="card-img overflow-hidden position-relative scale">
                <img class="rounded-3 img-fit"
                    :src="item.imageUrl" alt="商品照片"
                    @click="goProduct(item.id)"
                    data-bs-toggle="tooltip" data-bs-placement="top" title="詳細資訊"
                >
              </td>
              <td class="fs-7">
                {{ item.title }}
                <br>
                <span class="fs-7 text-muted">
                  （{{ item.category }}）
                </span>
              </td>
              <td class="fs-8">
                NT$ {{ item.price }}
              </td>
              <td>
                <button class="btn text-danger fs-1"
                        type="button"
                        @click="addCart(item.id)">
                  <font-awesome-icon icon="fa-solid fa-cart-plus" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import productsStore from '@/stores/productStore'
import cartStore from '@/stores/cartStore'
import statusStore from '@/stores/statusStore'
import favoriteStore from '@/stores/favoriteStore'
import goStore from '@/stores/goStore'
import windowStore from '@/stores/windowStore'

export default {
  data () {
    return {
      window: 0
    }
  },
  computed: {
    ...mapState(favoriteStore, ['favorite', 'favoriteIds']),
    ...mapState(productsStore, ['products']),
    ...mapState(statusStore, ['cartLoadingItem']),
    ...mapState(windowStore, ['windowWidth'])
  },
  methods: {
    ...mapActions(favoriteStore, ['getFavorite', 'getFavoriteIds', 'removeFavorite']),
    ...mapActions(productsStore, ['getProducts']),
    ...mapActions(cartStore, ['getCart', 'addCart']),
    ...mapActions(goStore, ['goProduct']),
    ...mapActions(windowStore, ['getWindowWidth'])
  },
  mounted () {
    this.getWindowWidth()
  }
}
</script>

<style lang="scss" scoped>
.favBanner {
  height: 250px;
  background-image: url(https://imgur.com/ItH7aoO.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center ;
  @media (max-width: 600px) {
    height: 150px;
  }
  .bg-dark{
  opacity: 0.8;
  }
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
  z-index: 1; // 往上拉才點的到，不然會點到a標籤
  opacity: 0;
  transition: 0.5s;
}
</style>
