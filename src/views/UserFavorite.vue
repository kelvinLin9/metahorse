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
                  &emsp;&ensp;刪除&ensp;&emsp;
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
        <table class="table table-sm align-middle">
          <thead>
            <tr class="text-center table-primary">
              <th>圖片</th>
              <th>品名</th>
              <th>單價</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr v-for="item in favorite" :key="item.id">
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
                <button class="btn text-danger fs-4"
                        type="button"
                        @click="addCart(item.id)">
                  <font-awesome-icon icon="fa-solid fa-cart-plus" />
                </button>
              </td>
              <td>
                <button class="btn text-primary fs-4"
                        type="button"
                        @click="removeFavorite(item.id)">
                  <FontAwesomeIcon icon="fa-solid fa-trash-can" />
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
  background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/kelvinlin9/1666490697166.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PN%2FJQamCh0W8oppAPBZXRjSdxNLWO5CNU5kZE%2FAooIU3%2F4cmsb6wwHVGZwLLkNPG%2F5Fw9JKoss5VZRcK7IUUoS0ecWXuzGS77oQeRdrqYfRSNLaUPpvT%2BRHDeFoflhD7lbCP2peFFKf7BqsBN5VgQUPIJQ4zDU29VZe%2FszIeARlLpgZGVXkG8SlovAqQD3cXHdS4s6WvWFeyae5BGi6MBsBTeLp%2FbDmDwqybR8Aa0eJCN7UE6gN0ViSDHhNXpDDQKXcdNDa3THZYlt%2BWSyBD%2BrCLSkW%2F6C9Ufi7K6Mr%2F%2FdJVinszNFTnaIeObQSV9VLdREwLA5nUvbvvGIO9mMSL0g%3D%3D);
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
  z-index: 1;
  opacity: 0;
  transition: 0.5s;
}
</style>
