"use strict";(self["webpackChunkhw1"]=self["webpackChunkhw1"]||[]).push([[422],{9498:function(t,a,e){var s=e(4301);a["Z"]=(0,s.Q_)("favoriteStore",{state:()=>({favorite:[],favoriteIds:[],favoriteNum:0,products:[]}),actions:{productsBus(t){this.products=t,this.getFavorite()},getFavoriteIds(){this.favoriteIds=JSON.parse(localStorage.getItem("favoriteIds"))||[]},getFavorite(){this.getFavoriteIds(),this.favorite=[],this.products.forEach((t=>{this.favoriteIds.indexOf(t.id)>-1&&this.favorite.push(t)})),this.favoriteNum=this.favorite.length},toggleFavorite(t){const a=t,e=this.favoriteIds.some((t=>t===a));if(e){const t=this.favoriteIds.find((t=>t===a));this.favoriteIds.splice(this.favoriteIds.indexOf(t),1),localStorage.setItem("favoriteIds",JSON.stringify(this.favoriteIds))}else this.favoriteIds.push(t),localStorage.setItem("favoriteIds",JSON.stringify(this.favoriteIds));this.getFavorite()},removeFavorite(t){this.favoriteIds.splice(this.favoriteIds.indexOf(t),1),localStorage.setItem("favoriteIds",JSON.stringify(this.favoriteIds)),this.getFavorite()}},getters:{favState(){return t=>this.favoriteIds.indexOf(t)>-1?"bi bi-heart-fill":"bi bi-heart"}}})},8778:function(t,a,e){var s=e(1120),r=e(4301),o=e(4677);const i=(0,o.Z)();a["Z"]=(0,r.Q_)("goStore",{actions:{goCart(){s.Z.push("/cart"),i.cartBoxState=!1},goProducts(){s.Z.push("/products"),i.cartBoxState=!1},goProduct(t){s.Z.push(`/product/${t}`)},goCheckout(){s.Z.push("/checkout")}}})},4238:function(t,a,e){var s=e(6265),r=e.n(s),o=e(4301),i=e(6294),c=e(9498);const n=(0,i.Z)(),l=(0,c.Z)();a["Z"]=(0,o.Q_)("productStore",{state:()=>({products:[],product:{},productsHot:[],productsGame:[],temp:{},category:"all"}),actions:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/kelvinlin9/products/all";n.isLoading=!0,r().get(t).then((t=>{this.products=t.data.products,this.productsHot=this.products.filter(((t,a)=>a>14)),l.productsBus(this.products),this.productsGame=[],this.productsGame.push(t.data.products[11]),this.productsGame.push(t.data.products[10]),this.productsGame.push(t.data.products[8]),this.productsGame.push(t.data.products[5]),this.temp=this.productsGame[0],n.isLoading=!1})).catch((t=>console.error(t)))},getProduct(t){const a=`https://vue3-course-api.hexschool.io/api/kelvinlin9/product/${t}`;n.isLoading=!0,r().get(a).then((t=>{n.isLoading=!1,t.data.success&&(this.product=t.data.product,this.product.qty=1)}))},setCategory(t){this.category=t}},getters:{filterProducts(){let t;switch(this.category){case"all":t=this.products.filter((t=>t));break;case"S":t=this.products.filter((t=>"S"===t.category));break;case"A":t=this.products.filter((t=>"A"===t.category));break;case"B":t=this.products.filter((t=>"B"===t.category));break;case"C":t=this.products.filter((t=>"C"===t.category));break;case"馬鞍":t=this.products.filter((t=>"馬鞍"===t.description));break;case"馬蹄鐵":t=this.products.filter((t=>"馬蹄鐵"===t.description));break;case"馬飼料":t=this.products.filter((t=>"馬飼料"===t.description));break}return t}}})},6294:function(t,a,e){var s=e(4301);a["Z"]=(0,s.Q_)("statusStore",{state:()=>({isLoading:[],cartLoadingItem:"",messages:[]}),actions:{PushManager(t,a="更新"){if("抽獎"===t||t.data.success){const t={style:"success",title:`${a}成功`};this.messages.push(t)}else{const e="string"===typeof t.data.message?[t.data.message]:t.data.message,s={style:"danger",title:`${a}失敗`,content:e.join("、")};this.messages.push(s)}}}})},5382:function(t,a,e){e.r(a),e.d(a,{default:function(){return mt}});var s=e(3396);const r={key:0,class:"user-loading position-absolute top-50 start-50 translate-middle"},o={class:"position-relative min-height milkyWay"};function i(t,a,e,i,c,n){const l=(0,s.up)("UserNavbar"),d=(0,s.up)("UserLoading"),u=(0,s.up)("FloatCart"),p=(0,s.up)("ToastMessages"),g=(0,s.up)("router-view"),v=(0,s.up)("UserFooter");return(0,s.wg)(),(0,s.iD)(s.HY,null,[((0,s.wg)(),(0,s.j4)(l,{key:t.$route.path})),t.isLoading?((0,s.wg)(),(0,s.iD)("div",r,[(0,s.Wm)(d)])):(0,s.kq)("",!0),n.hasFloatCart?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(u,{key:1})),(0,s.Wm)(p),(0,s._)("div",o,[(0,s.Wm)(g)]),(0,s.Wm)(v)],64)}e(6699);var c=e(371),n=e(3003),l=e(7139),d=e(9242);const u=t=>((0,s.dD)("data-v-501ce5ee"),t=t(),(0,s.Cn)(),t),p={class:"navbar sticky-top navbar-expand-lg navbar-dark bg-dark no-print"},g={class:"container-fluid"},v=(0,s.uE)('<a class="navbar-brand" href="#" data-v-501ce5ee><span class="text-warning f-kalam fs-2 text-center" data-v-501ce5ee>MetaHorse</span><img src="https://i.imgur.com/61qkafr.jpg" alt="logo" width="50" class="logo" data-v-501ce5ee></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" data-v-501ce5ee><span class="navbar-toggler-icon" data-v-501ce5ee></span></button>',2),h={class:"collapse navbar-collapse ms-5",id:"navbarNavAltMarkup"},f={class:"navbar-nav"},m={class:"nav-item"},b=(0,s.Uk)("首頁"),k={class:"nav-item"},_=(0,s.Uk)("產品列表"),w={class:"nav-item"},x=(0,s.Uk)("優惠活動"),y={class:"nav-item"},C=(0,s.Uk)("訂單查詢"),I={class:"nav-item"},Z=(0,s.Uk)("試玩(測試用)"),N={class:"nav-item d-block d-lg-none"},S=(0,s.Uk)("購物車"),U={class:"nav-item d-block d-lg-none"},W=(0,s.Uk)("我的最愛"),$={class:"navbar-nav d-none d-lg-flex ms-auto me-2"},F={class:"nav-item position-relative"},B=u((()=>(0,s._)("i",{class:"bi bi-cart3 fs-4 cart","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"購物車"},null,-1))),L={key:0,class:"bg-danger text-white rounded-circle text-center position-absolute num"},D={key:0,class:"fw-bold"},q={class:"table-responsive-md"},M={class:"table table-sm"},O=u((()=>(0,s._)("thead",{class:"table-dark"},[(0,s._)("tr",{class:"table-nowrap text-center"},[(0,s._)("th",{class:"text-start"},"商品名稱"),(0,s._)("th",null,"數量"),(0,s._)("th",{class:"text-end"},"價格"),(0,s._)("th")])],-1))),P={class:"text-center"},G={class:"text-end"},T={class:"text-center"},j=["disabled","onClick"],z=u((()=>(0,s._)("i",{class:"bi bi-x"},null,-1))),A=[z],H={key:1,class:"fw-bold text-center mb-3"},J={class:"d-flex justify-content-end"},Q=(0,s.Uk)(" 結帳去 "),E=(0,s.Uk)(" 選購去 "),Y={class:"nav-item position-relative"},K=u((()=>(0,s._)("i",{class:"bi bi-search-heart fs-4","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"我的最愛"},null,-1))),R={key:0,class:"bg-danger text-white rounded-circle text-center position-absolute num"};function V(t,a,e,r,o,i){const c=(0,s.up)("RouterLink"),n=(0,s.up)("router-link"),u=(0,s.up)("font-awesome-icon");return(0,s.wg)(),(0,s.iD)("nav",p,[(0,s._)("div",g,[v,(0,s._)("div",h,[(0,s._)("ul",f,[(0,s._)("li",m,[(0,s.Wm)(c,{to:"/",class:(0,l.C_)(["nav-link fs-5",{"text-warning":"home"===this.$route.name}])},{default:(0,s.w5)((()=>[b])),_:1},8,["class"])]),(0,s._)("li",k,[(0,s.Wm)(n,{to:"/products",class:(0,l.C_)(["nav-link fs-5",{"text-warning":"products"===this.$route.name}])},{default:(0,s.w5)((()=>[_])),_:1},8,["class"])]),(0,s._)("li",w,[(0,s.Wm)(n,{to:"/UserCoupon",class:(0,l.C_)(["nav-link fs-5",{"text-warning":"UserCoupon"===this.$route.name}])},{default:(0,s.w5)((()=>[x])),_:1},8,["class"])]),(0,s._)("li",y,[(0,s.Wm)(n,{to:"/UserSearchOrder",class:(0,l.C_)(["nav-link fs-5",{"text-warning":"UserSearchOrder"===this.$route.name}])},{default:(0,s.w5)((()=>[C])),_:1},8,["class"])]),(0,s._)("li",I,[(0,s.Wm)(n,{to:"/UserGame",class:(0,l.C_)(["nav-link fs-5",{"text-warning":"UserGame"===this.$route.name}])},{default:(0,s.w5)((()=>[Z])),_:1},8,["class"])]),(0,s._)("li",N,[(0,s.Wm)(n,{to:"/cart",class:(0,l.C_)(["nav-link fs-5",{"text-warning":"cart"===this.$route.name}])},{default:(0,s.w5)((()=>[S])),_:1},8,["class"])]),(0,s._)("li",U,[(0,s.Wm)(n,{to:"/favorite",class:(0,l.C_)(["nav-link fs-5",{"text-warning":"favorite"===this.$route.name}])},{default:(0,s.w5)((()=>[W])),_:1},8,["class"])])]),(0,s._)("ul",$,[(0,s._)("li",F,[(0,s._)("div",{class:(0,l.C_)(["nav-link px-3",{"text-warning":"cart"===this.$route.name}]),onClick:a[0]||(a[0]=(0,d.iM)(((...a)=>t.cartBoxToggle&&t.cartBoxToggle(...a)),["prevent"]))},[B,0!==t.cartNum?((0,s.wg)(),(0,s.iD)("div",L,(0,l.zw)(t.cartNum),1)):(0,s.kq)("",!0)],2)]),(0,s._)("div",{class:(0,l.C_)(["dropdown-menu cart-box p-3",{show:t.cartBoxState}])},[t.cartNum>0?((0,s.wg)(),(0,s.iD)("h5",D,"已選購商品")):(0,s.kq)("",!0),(0,s._)("div",q,[(0,s._)("table",M,[O,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.cart.carts,(a=>((0,s.wg)(),(0,s.iD)("tr",{class:"table-nowrap",key:a.id},[(0,s._)("td",null,(0,l.zw)(a.product.title),1),(0,s._)("td",P,(0,l.zw)(a.qty),1),(0,s._)("td",G,"NT$ "+(0,l.zw)(t.$filters.currency(a.total)),1),(0,s._)("td",T,[(0,s._)("button",{type:"button",class:"btn btn-outline-primary btn-sm",disabled:t.cartLoadingItem===a.id,onClick:e=>t.removeCartItem(a.id)},A,8,j)])])))),128))])])]),0==t.cartNum?((0,s.wg)(),(0,s.iD)("h5",H,"產品尚未加入購物車!")):(0,s.kq)("",!0),(0,s._)("div",J,[t.cartNum>0?((0,s.wg)(),(0,s.j4)(n,{key:0,to:"/cart",class:"btn btn-dark btn-hover rounded-0",onClick:(0,d.iM)(t.cartBoxToggle,["prevent"])},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{icon:"fa-solid fa-cash-register"}),Q])),_:1},8,["onClick"])):((0,s.wg)(),(0,s.j4)(n,{key:1,to:"/products",class:"btn btn-dark btn-hover rounded-0",onClick:(0,d.iM)(t.cartBoxToggle,["prevent"])},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{icon:"fa-solid fa-basket-shopping"}),E])),_:1},8,["onClick"]))])],2),(0,s._)("li",Y,[(0,s.Wm)(c,{to:"/Favorite",class:(0,l.C_)(["nav-link px-3",{"text-warning":"favorite"===this.$route.name}])},{default:(0,s.w5)((()=>[K,0!=t.favoriteNum?((0,s.wg)(),(0,s.iD)("div",R,(0,l.zw)(t.favoriteNum),1)):(0,s.kq)("",!0)])),_:1},8,["class"])])])])])])}e(434);var X=e(4301),tt=e(4677),at=e(6294),et=e(9498),st=e(8778),rt={computed:{...(0,X.rn)(tt.Z,["cart","cartNum","cartBoxState"]),...(0,X.rn)(et.Z,["favoriteNum"]),...(0,X.rn)(at.Z,["cartLoadingItem"])},methods:{...(0,X.nv)(tt.Z,["getCart","removeCartItem","cartBoxToggle"]),...(0,X.nv)(st.Z,["goCart","goProducts"])}},ot=e(89);const it=(0,ot.Z)(rt,[["render",V],["__scopeId","data-v-501ce5ee"]]);var ct=it;const nt={class:"rounded-circle bg-white border border-3 border-warning d-flex justify-content-center align-items-center float-cart"},lt={key:0,class:"bg-danger text-white rounded-circle text-center position-absolute num"};function dt(t,a,e,r,o,i){const c=(0,s.up)("font-awesome-icon"),n=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",nt,[(0,s.Wm)(n,{to:"/cart"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{icon:"fa-solid fa-cart-shopping",class:"text-dark fs-1"}),0!==t.cartNum?((0,s.wg)(),(0,s.iD)("div",lt,(0,l.zw)(t.cartNum),1)):(0,s.kq)("",!0)])),_:1})])}var ut={computed:{...(0,X.rn)(tt.Z,["cartNum"])},methods:{...(0,X.nv)(st.Z,["goCart"])}};const pt=(0,ot.Z)(ut,[["render",dt],["__scopeId","data-v-81f1fe7a"]]);var gt=pt,vt=e(4238),ht={components:{ToastMessages:n.Z,UserNavbar:ct,FloatCart:gt,UserFooter:c.Z},methods:{...(0,X.nv)(vt.Z,["getProducts"]),...(0,X.nv)(tt.Z,["getCart"])},computed:{...(0,X.rn)(at.Z,["isLoading"]),hasFloatCart(){const t=["cart","checkout","checkoutPay","adminLogin"];return!!t.includes(this.$route.name)}},created(){this.getProducts(),this.getCart()}};const ft=(0,ot.Z)(ht,[["render",i],["__scopeId","data-v-12455d48"]]);var mt=ft}}]);
//# sourceMappingURL=422.6f07aace.js.map