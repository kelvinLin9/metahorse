<template>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Button with data-bs-target
</button>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>
    <aside class="sidebar vh-100 border-end d-flex flex-column bg-white">
      <!-- 標題 -->
      <div class="p-3">
        <h1 class="fw-bold fs-5">
          MetaHorse 
          <span class="fw-normal">- 後台管理頁</span>
        </h1> 
      </div>
      <!-- 導覽列 -->
      <div class="overflow-auto">
        <ul class="list-unstyled">
          <!-- 首頁 -->
          <li>
            <a href="./home.html" class="sidebar-link px-4 active">
              <i class="bi bi-house me-2"></i>
              首頁
            </a>
          </li>
          <!-- 摺疊選單 -->
          <li>
            <a data-bs-toggle="collapse" href="#order" class="sidebar-link px-4 d-flex justify-content-between">
              <p class="mb-0"><i class="bi bi-menu-up me-2"></i>訂單查詢</p> <i class="bi bi-caret-down"></i>
            </a>
            <ul class="list-unstyled collapse" id="order">
              <li><a href="./orders.html" class="sidebar-link ps-5">訂單列表</a></li>
              <li><a href="./order.html" class="sidebar-link ps-5">單一訂單細節</a></li>
            </ul>
          </li>
          <!-- 用不到 -->
          <li>
            <a href="#" class="sidebar-link px-4">
              <i class="bi bi-share me-2"></i>參考連結
            </a>
          </li>
        </ul>
      </div>
      <!-- 登出按鈕 -->
      <div class="mt-auto">
        <a href="#" class="d-flex justify-content-between px-4 sidebar-link active">
          <span>登出</span><i class="bi bi-box-arrow-right"></i>
        </a>
      </div>
    </aside>

</template>

<script>
// 響應式行為會使用到折疊的 JavaScript 插件
import 'bootstrap/js/dist/collapse'
export default {
  data () {
    return {
      isCollapse: false,
      routeName: '',
      status: {
        // 對應品項 id 當loadingItem為一個特定品項的時候
        // 我們就會把這個按鈕轉為disabled
        loadingItem: ''
      }
    }
  },
  // watch: {
  //   $route (to) {
  //     console.log('$route', to)
  //   }
  // },
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          this.$router.push('/login')
        }
      })
    }
  },
  mounted () {
    this.routeName = this.$route.path // 點擊後圖標變色
    console.log('this.$route.path', this.$route.path)
  }
}
</script>

<style lang="scss" scoped>
.sidebar{
  width: 280px;
}
// 行動版
// $aside-width:280px;

// .sidebar{
//     width:$aside-width;
//     margin-left:-$aside-width;
//     transition: margin-left .25s;
//     position: fixed;
//     z-index:5;
//     top:0;
//     .sidebar-link{
//         // color: $dark;
//         display: block;
//         text-decoration: none;
//         padding-top: 0.875rem;
//         padding-bottom: 0.875rem;
//         &:hover {
//             // background-color: rgba($primary, 0.16);
//            }
//     }
//     .sidebar-link.active {
//         position: relative;
//         // color: $primary !important;
//         font-weight: bold;
//         // background-color: rgba($primary, 0.16);
//         &::after {
//          content: "";
//          position: absolute;
//          top: 0;
//          left: 2px;
//          height: 100%;
//          width: 3px;
//         //  background: $primary;
//         }
//       }
// }

// .main{
//     width:100vw;
//     transition: margin-left .25s;
// }

// .sidebar-toggle{
//     .sidebar{
//         margin-left:0;
//     }
//     .menu-btn{
//         // margin-left:$aside-width;
//         transition: margin-left .25s;
//     }
// }

//桌機版
// @include media-breakpoint-up(lg) {
//     .sidebar{
//         width:$aside-width;
//         margin-left:0px;
//     }
    
//     .main{
//         width:calc(100vw - #{$aside-width});
//         margin-left:$aside-width;
//         transition: margin-left .25s;
//     }
//     .sidebar-toggle{
//         .sidebar{
//             margin-left:-$aside-width;
//         }
//         .main{
//             width:100%;
//             margin-left:0;
//         }
//         .menu-btn{
//             margin-left:0;
//         }
//     }
// }
</style>
