"use strict";(self["webpackChunkhw1"]=self["webpackChunkhw1"]||[]).push([[163],{9498:function(t,a,s){var e=s(4301);a["Z"]=(0,e.Q_)("favoriteStore",{state:()=>({favorite:[],favoriteIds:[],favoriteNum:0,products:[]}),actions:{productsBus(t){this.products=t,this.getFavorite()},getFavoriteIds(){this.favoriteIds=JSON.parse(localStorage.getItem("favoriteIds"))||[]},getFavorite(){this.getFavoriteIds(),this.favorite=[],this.products.forEach((t=>{this.favoriteIds.indexOf(t.id)>-1&&this.favorite.push(t)})),this.favoriteNum=this.favorite.length},toggleFavorite(t){const a=t,s=this.favoriteIds.some((t=>t===a));if(s){const t=this.favoriteIds.find((t=>t===a));this.favoriteIds.splice(this.favoriteIds.indexOf(t),1),localStorage.setItem("favoriteIds",JSON.stringify(this.favoriteIds))}else this.favoriteIds.push(t),localStorage.setItem("favoriteIds",JSON.stringify(this.favoriteIds));this.getFavorite()},removeFavorite(t){this.favoriteIds.splice(this.favoriteIds.indexOf(t),1),localStorage.setItem("favoriteIds",JSON.stringify(this.favoriteIds)),this.getFavorite()}},getters:{favState(){return t=>this.favoriteIds.indexOf(t)>-1?"bi bi-heart-fill":"bi bi-heart"}}})},8778:function(t,a,s){var e=s(1120),i=s(4301),r=s(4677);const o=(0,r.Z)();a["Z"]=(0,i.Q_)("goStore",{actions:{goCart(){e.Z.push("/cart"),o.cartBoxState=!1},goProducts(){e.Z.push("/products"),o.cartBoxState=!1},goProduct(t){e.Z.push(`/product/${t}`)},goCheckout(){e.Z.push("/checkout")}}})},4238:function(t,a,s){var e=s(6265),i=s.n(e),r=s(4301),o=s(6294),n=s(9498);const l=(0,o.Z)(),c=(0,n.Z)();a["Z"]=(0,r.Q_)("productStore",{state:()=>({products:[],product:{},productsHot:[],productsGame:[],temp:{},category:"all"}),actions:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/kelvinlin9/products/all";l.isLoading=!0,i().get(t).then((t=>{console.log("GETP!!!!!!!!!!!!!!!!"),this.products=t.data.products,this.productsHot=this.products.filter(((t,a)=>a>14)),c.productsBus(this.products),this.productsGame=[],this.productsGame.push(t.data.products[11]),this.productsGame.push(t.data.products[10]),this.productsGame.push(t.data.products[8]),this.productsGame.push(t.data.products[5]),this.temp=this.productsGame[0],l.isLoading=!1})).catch((t=>console.error(t)))},getProduct(t){const a=`https://vue3-course-api.hexschool.io/api/kelvinlin9/product/${t}`;l.isLoading=!0,i().get(a).then((t=>{l.isLoading=!1,t.data.success&&(this.product=t.data.product,this.product.qty=1)}))},setCategory(t){this.category=t}},getters:{filterProducts(){let t;switch(this.category){case"all":t=this.products.filter((t=>t));break;case"S":t=this.products.filter((t=>"S"===t.category));break;case"A":t=this.products.filter((t=>"A"===t.category));break;case"B":t=this.products.filter((t=>"B"===t.category));break;case"C":t=this.products.filter((t=>"C"===t.category));break;case"馬鞍":t=this.products.filter((t=>"馬鞍"===t.description));break;case"馬蹄鐵":t=this.products.filter((t=>"馬蹄鐵"===t.description));break;case"馬飼料":t=this.products.filter((t=>"馬飼料"===t.description));break}return t}}})},4066:function(t,a,s){s.r(a),s.d(a,{default:function(){return Tt}});var e=s(3396);const i={key:0,class:"user-loading position-absolute top-50 start-50 translate-middle"},r={class:"position-relative min-height"};function o(t,a,s,o,n,l){const c=(0,e.up)("UserNavbar"),d=(0,e.up)("UserLoading"),u=(0,e.up)("FloatCart"),g=(0,e.up)("ToastMessages"),p=(0,e.up)("router-view"),v=(0,e.up)("UserFooter");return(0,e.wg)(),(0,e.iD)(e.HY,null,[((0,e.wg)(),(0,e.j4)(c,{key:t.$route.path})),t.isLoading?((0,e.wg)(),(0,e.iD)("div",i,[(0,e.Wm)(d)])):(0,e.kq)("",!0),l.hasFloatCart?(0,e.kq)("",!0):((0,e.wg)(),(0,e.j4)(u,{key:1})),(0,e.Wm)(g),(0,e._)("div",r,[(0,e.Wm)(p)]),(0,e.Wm)(v)],64)}s(6699);var n=s(9242);const l=t=>((0,e.dD)("data-v-31bb184f"),t=t(),(0,e.Cn)(),t),c={class:"footer bg-dark mt-3 mt-md-5 py-3"},d={class:"container-fluid"},u=l((()=>(0,e._)("ul",{class:"list-inline text-center"},[(0,e._)("li",{class:"list-inline-item text-light"}," © Copyright 2022 MetaHorse ")],-1))),g={class:"list-inline text-center"},p={class:"list-inline-item"},v=l((()=>(0,e._)("i",{class:"bi bi-facebook"},null,-1))),h=[v],f={class:"list-inline-item ms-2"},m=l((()=>(0,e._)("i",{class:"bi bi-messenger"},null,-1))),b=[m],_={class:"list-inline-item ms-2"},k=l((()=>(0,e._)("i",{class:"bi bi-instagram"},null,-1))),w=[k],x=l((()=>(0,e._)("li",{class:"list-inline-item ms-2"},[(0,e._)("a",{class:"text-light",href:"",target:"_blank"},[(0,e._)("i",{class:"bi bi-github"})])],-1))),C=l((()=>(0,e._)("ul",{class:"list-inline text-center"},[(0,e._)("li",{class:"list-inline-item text-light"}," 個人練習作品，非商業用途 ")],-1)));function y(t,a){return(0,e.wg)(),(0,e.iD)("div",c,[(0,e._)("div",d,[u,(0,e._)("ul",g,[(0,e._)("li",p,[(0,e._)("a",{class:"text-light",href:"#",onClick:a[0]||(a[0]=(0,n.iM)((()=>{}),["prevent"]))},h)]),(0,e._)("li",f,[(0,e._)("a",{class:"text-light",href:"#",onClick:a[1]||(a[1]=(0,n.iM)((()=>{}),["prevent"]))},b)]),(0,e._)("li",_,[(0,e._)("a",{class:"text-light",href:"#",onClick:a[2]||(a[2]=(0,n.iM)((()=>{}),["prevent"]))},w)]),x]),C])])}var I=s(89);const Z={},N=(0,I.Z)(Z,[["render",y],["__scopeId","data-v-31bb184f"]]);var U=N,S=s(3003),W=s(7139);const $=t=>((0,e.dD)("data-v-4d4aff3d"),t=t(),(0,e.Cn)(),t),D={class:"navbar sticky-top navbar-expand-lg navbar-dark bg-dark"},F={class:"container-fluid"},M=(0,e.uE)('<a class="navbar-brand" href="#" data-v-4d4aff3d><span class="text-warning f-kalam fs-2 text-center" data-v-4d4aff3d>MetaHorse</span><img src="https://i.imgur.com/61qkafr.jpg" alt="logo" width="50" class="logo" data-v-4d4aff3d></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" data-v-4d4aff3d><span class="navbar-toggler-icon" data-v-4d4aff3d></span></button>',2),P={class:"collapse navbar-collapse ms-5",id:"navbarNavAltMarkup"},B={class:"navbar-nav"},q={class:"nav-item"},G=(0,e.Uk)("首頁"),L={class:"nav-item"},O=(0,e.Uk)("產品列表"),T={class:"nav-item"},z=(0,e.Uk)("優惠活動"),H={class:"nav-item"},j=(0,e.Uk)("訂單查詢"),A={class:"nav-item"},J=(0,e.Uk)("試玩"),E={class:"nav-item d-block d-lg-none"},Q=(0,e.Uk)("購物車"),Y={class:"nav-item d-block d-lg-none"},K=(0,e.Uk)("我的最愛"),R={class:"nav-item d-block d-lg-none"},V=(0,e.Uk)("管理員登入"),X={class:"d-none d-lg-flex navbar-nav ms-auto me-2"},tt={class:"nav-item position-relative"},at=$((()=>(0,e._)("i",{class:"bi bi-cart3 fs-4 cart","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"購物車"},null,-1))),st={key:0,class:"bg-danger text-white rounded-circle text-center position-absolute num"},et={key:0,class:"fw-bold"},it={class:"table-responsive-md"},rt={class:"table table-sm"},ot=$((()=>(0,e._)("thead",{class:"table-dark"},[(0,e._)("tr",{class:"table-nowrap text-center"},[(0,e._)("th",{class:"text-start"},"商品名稱"),(0,e._)("th",null,"數量"),(0,e._)("th",{class:"text-end"},"價格"),(0,e._)("th")])],-1))),nt={class:"text-center"},lt={class:"text-end"},ct={class:"text-center"},dt=["disabled","onClick"],ut=$((()=>(0,e._)("i",{class:"bi bi-x"},null,-1))),gt=[ut],pt={key:1,class:"fw-bold text-center mb-3"},vt={class:"d-flex justify-content-end"},ht=$((()=>(0,e._)("i",{class:"fas fa-shopping-cart"},null,-1))),ft=(0,e.Uk)(" 結帳去 "),mt=(0,e.Uk)(" 選購去 "),bt={class:"nav-item position-relative"},_t=$((()=>(0,e._)("i",{class:"bi bi-search-heart fs-4","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"我的最愛"},null,-1))),kt={key:0,class:"bg-danger text-white rounded-circle text-center position-absolute num"},wt={class:"nav-item"},xt=$((()=>(0,e._)("i",{class:"bi bi-person-workspace fs-4","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"管理員登入"},null,-1)));function Ct(t,a,s,i,r,o){const l=(0,e.up)("RouterLink"),c=(0,e.up)("router-link"),d=(0,e.up)("font-awesome-icon");return(0,e.wg)(),(0,e.iD)("nav",D,[(0,e._)("div",F,[M,(0,e._)("div",P,[(0,e._)("ul",B,[(0,e._)("li",q,[(0,e.Wm)(l,{to:"/",class:(0,W.C_)(["nav-link fs-5",{"text-warning":"home"===this.$route.name}])},{default:(0,e.w5)((()=>[G])),_:1},8,["class"])]),(0,e._)("li",L,[(0,e.Wm)(c,{to:"/products",class:(0,W.C_)(["nav-link fs-5",{"text-warning":"products"===this.$route.name}])},{default:(0,e.w5)((()=>[O])),_:1},8,["class"])]),(0,e._)("li",T,[(0,e.Wm)(c,{to:"/UserCoupon",class:(0,W.C_)(["nav-link fs-5",{"text-warning":"UserCoupon"===this.$route.name}])},{default:(0,e.w5)((()=>[z])),_:1},8,["class"])]),(0,e._)("li",H,[(0,e.Wm)(c,{to:"/UserSearchOrder",class:(0,W.C_)(["nav-link fs-5",{"text-warning":"UserSearchOrder"===this.$route.name}])},{default:(0,e.w5)((()=>[j])),_:1},8,["class"])]),(0,e._)("li",A,[(0,e.Wm)(c,{to:"/UserGame",class:(0,W.C_)(["nav-link fs-5",{"text-warning":"UserGame"===this.$route.name}])},{default:(0,e.w5)((()=>[J])),_:1},8,["class"])]),(0,e._)("li",E,[(0,e.Wm)(c,{to:"/cart",class:(0,W.C_)(["nav-link fs-5",{"text-warning":"cart"===this.$route.name}])},{default:(0,e.w5)((()=>[Q])),_:1},8,["class"])]),(0,e._)("li",Y,[(0,e.Wm)(c,{to:"/favorite",class:(0,W.C_)(["nav-link fs-5",{"text-warning":"favorite"===this.$route.name}])},{default:(0,e.w5)((()=>[K])),_:1},8,["class"])]),(0,e._)("li",R,[(0,e.Wm)(c,{to:"/login",class:(0,W.C_)(["nav-link fs-5",{"text-warning":"login"===this.$route.name}])},{default:(0,e.w5)((()=>[V])),_:1},8,["class"])])]),(0,e._)("ul",X,[(0,e._)("li",tt,[(0,e._)("div",{class:(0,W.C_)(["nav-link px-3",{"text-warning":"cart"===this.$route.name}]),onClick:a[0]||(a[0]=(0,n.iM)(((...a)=>t.cartBoxToggle&&t.cartBoxToggle(...a)),["prevent"]))},[at,0!==t.cartNum?((0,e.wg)(),(0,e.iD)("div",st,(0,W.zw)(t.cartNum),1)):(0,e.kq)("",!0)],2)]),(0,e._)("div",{class:(0,W.C_)(["dropdown-menu cart-box p-3",{show:t.cartBoxState}])},[t.cartNum>0?((0,e.wg)(),(0,e.iD)("h5",et,"已選購商品")):(0,e.kq)("",!0),(0,e._)("div",it,[(0,e._)("table",rt,[ot,(0,e._)("tbody",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(t.cart.carts,(a=>((0,e.wg)(),(0,e.iD)("tr",{class:"table-nowrap",key:a.id},[(0,e._)("td",null,(0,W.zw)(a.product.title),1),(0,e._)("td",nt,(0,W.zw)(a.qty),1),(0,e._)("td",lt,"NT$ "+(0,W.zw)(t.$filters.currency(a.total)),1),(0,e._)("td",ct,[(0,e._)("button",{type:"button",class:"btn btn-outline-primary btn-sm",disabled:t.cartLoadingItem===a.id,onClick:s=>t.removeCartItem(a.id)},gt,8,dt)])])))),128))])])]),0==t.cartNum?((0,e.wg)(),(0,e.iD)("h5",pt,"產品尚未加入購物車!")):(0,e.kq)("",!0),(0,e._)("div",vt,[t.cartNum>0?((0,e.wg)(),(0,e.iD)("button",{key:0,type:"button",class:"btn btn-dark btn-hover rounded-0",onClick:a[1]||(a[1]=(...a)=>t.goCart&&t.goCart(...a))},[(0,e.Wm)(d,{icon:"fa-solid fa-cash-register"}),ht,ft])):((0,e.wg)(),(0,e.iD)("button",{key:1,type:"button",class:"btn btn-dark btn-hover rounded-0",onClick:a[2]||(a[2]=(...a)=>t.goProducts&&t.goProducts(...a))},[(0,e.Wm)(d,{icon:"fa-solid fa-basket-shopping"}),mt]))])],2),(0,e._)("li",bt,[(0,e.Wm)(l,{to:"/Favorite",class:(0,W.C_)(["nav-link px-3",{"text-warning":"favorite"===this.$route.name}])},{default:(0,e.w5)((()=>[_t,0!=t.favoriteNum?((0,e.wg)(),(0,e.iD)("div",kt,(0,W.zw)(t.favoriteNum),1)):(0,e.kq)("",!0)])),_:1},8,["class"])]),(0,e._)("li",wt,[(0,e.Wm)(l,{to:"/login",class:(0,W.C_)(["nav-link px-3",{"text-warning":"login"===this.$route.name}])},{default:(0,e.w5)((()=>[xt])),_:1},8,["class"])])])])])])}s(434);var yt=s(4301),It=s(4677),Zt=s(6294),Nt=s(9498),Ut=s(8778),St={computed:{...(0,yt.rn)(It.Z,["cart","cartNum","cartBoxState"]),...(0,yt.rn)(Nt.Z,["favoriteNum"]),...(0,yt.rn)(Zt.Z,["cartLoadingItem"])},methods:{...(0,yt.nv)(It.Z,["getCart","removeCartItem","cartBoxToggle"]),...(0,yt.nv)(Ut.Z,["goCart","goProducts"])}};const Wt=(0,I.Z)(St,[["render",Ct],["__scopeId","data-v-4d4aff3d"]]);var $t=Wt;const Dt={class:"rounded-circle bg-white border border-3 border-warning d-flex justify-content-center align-items-center float-cart"},Ft={key:0,class:"bg-danger text-white rounded-circle text-center position-absolute num"};function Mt(t,a,s,i,r,o){const l=(0,e.up)("font-awesome-icon");return(0,e.wg)(),(0,e.iD)("div",Dt,[(0,e._)("a",{href:"#",onClick:a[0]||(a[0]=(0,n.iM)(((...a)=>t.goCart&&t.goCart(...a)),["prevent"]))},[(0,e.Wm)(l,{icon:"fa-solid fa-cart-shopping",class:"text-dark fs-1"}),0!==t.cartNum?((0,e.wg)(),(0,e.iD)("div",Ft,(0,W.zw)(t.cartNum),1)):(0,e.kq)("",!0)])])}var Pt={computed:{...(0,yt.rn)(It.Z,["cartNum"])},methods:{...(0,yt.nv)(Ut.Z,["goCart"])}};const Bt=(0,I.Z)(Pt,[["render",Mt],["__scopeId","data-v-1ad95050"]]);var qt=Bt,Gt=s(4238),Lt={components:{ToastMessages:S.Z,UserNavbar:$t,FloatCart:qt,UserFooter:U},methods:{...(0,yt.nv)(Gt.Z,["getProducts"]),...(0,yt.nv)(It.Z,["getCart"])},computed:{...(0,yt.rn)(Zt.Z,["isLoading"]),hasFloatCart(){const t=["cart","checkout","checkoutPay"];return!!t.includes(this.$route.name)}},created(){this.getProducts(),this.getCart()}};const Ot=(0,I.Z)(Lt,[["render",o],["__scopeId","data-v-37629d27"]]);var Tt=Ot}}]);
//# sourceMappingURL=163.049ce554.js.map