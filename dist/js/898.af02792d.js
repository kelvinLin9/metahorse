"use strict";(self["webpackChunkhw1"]=self["webpackChunkhw1"]||[]).push([[898],{4677:function(t,e,a){var s=a(6265),r=a.n(s),o=a(1120),i=a(4301),c=a(6294);const l=(0,c.Z)();e["Z"]=(0,i.Q_)("cartStore",{state:()=>({cart:{},cartNum:0,cartBoxState:!1,form:{user:{name:"",email:"",tel:"",address:""},message:""}}),actions:{getCart(){const t="https://vue3-course-api.hexschool.io/api/kelvinlin9/cart";l.isLoading=!0,r().get(t).then((t=>{this.cartNum=t.data.data.carts.length,this.cart=t.data.data,l.isLoading=!1})).catch((t=>console.error(t)))},updateCart(t){const e=`https://vue3-course-api.hexschool.io/api/kelvinlin9/cart/${t.id}`;l.isLoading=!0,l.cartLoadingItem=t.id;const a={product_id:t.product_id,qty:t.qty};r().put(e,{data:a}).then((t=>{l.cartLoadingItem="",this.getCart()})).catch((t=>console.error(t)))},removeCartItem(t){l.cartLoadingItem=t;const e=`https://vue3-course-api.hexschool.io/api/kelvinlin9/cart/${t}`;l.isLoading=!0,r()["delete"](e).then((t=>{console.log(t),l.PushManager(t,"移除購物車品項"),l.cartLoadingItem="",this.getCart(),l.isLoading=!1})).catch((t=>console.error(t)))},addCart(t,e=1){const a="https://vue3-course-api.hexschool.io/api/kelvinlin9/cart";l.cartLoadingItem=t;const s={product_id:t,qty:e};r().post(a,{data:s}).then((t=>{l.cartLoadingItem="",this.getCart(),l.PushManager(t,"加入購物車")})).catch((t=>console.error(t)))},cartBoxToggle(){this.cartBoxState=!this.cartBoxState},gotoPay(){const t="https://vue3-course-api.hexschool.io/api/kelvinlin9/order",e=this.form;r().post(t,{data:e}).then((t=>{o.Z.push(`/checkoutPay/${t.data.orderId}`),this.form={user:{name:"",email:"",tel:"",address:""},message:""},this.getCart()})).catch((t=>console.error(t)))}}})},9498:function(t,e,a){var s=a(4301);e["Z"]=(0,s.Q_)("favoriteStore",{state:()=>({favorite:[],favoriteIds:[],favoriteNum:0,products:[]}),actions:{productsBus(t){this.products=t,this.getFavorite()},getFavoriteIds(){this.favoriteIds=JSON.parse(localStorage.getItem("favoriteIds"))||[]},getFavorite(){this.getFavoriteIds(),this.favorite=[],this.products.forEach((t=>{this.favoriteIds.indexOf(t.id)>-1&&this.favorite.push(t)})),this.favoriteNum=this.favorite.length},toggleFavorite(t){const e=t,a=this.favoriteIds.some((t=>t===e));if(a){const t=this.favoriteIds.find((t=>t===e));this.favoriteIds.splice(this.favoriteIds.indexOf(t),1),localStorage.setItem("favoriteIds",JSON.stringify(this.favoriteIds))}else this.favoriteIds.push(t),localStorage.setItem("favoriteIds",JSON.stringify(this.favoriteIds));this.getFavorite()},removeFavorite(t){this.favoriteIds.splice(this.favoriteIds.indexOf(t),1),localStorage.setItem("favoriteIds",JSON.stringify(this.favoriteIds)),this.getFavorite()}},getters:{favState(){return t=>this.favoriteIds.indexOf(t)>-1?"bi bi-heart-fill":"bi bi-heart"}}})},8778:function(t,e,a){var s=a(1120),r=a(4301),o=a(4677);const i=(0,o.Z)();e["Z"]=(0,r.Q_)("goStore",{actions:{goCart(){s.Z.push("/cart"),i.cartBoxState=!1},goProducts(){s.Z.push("/products"),i.cartBoxState=!1},goProduct(t){s.Z.push(`/product/${t}`)},goCheckout(){s.Z.push("/checkout")}}})},4238:function(t,e,a){var s=a(6265),r=a.n(s),o=a(4301),i=a(6294),c=a(9498);const l=(0,i.Z)(),d=(0,c.Z)();e["Z"]=(0,o.Q_)("productStore",{state:()=>({products:[],product:{},productsHot:[],productsGame:[],temp:{},category:"all",cacheSearch:""}),actions:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/kelvinlin9/products/all";l.isLoading=!0,r().get(t).then((t=>{this.products=t.data.products,this.productsHot=this.products.filter(((t,e)=>e>14)),d.productsBus(this.products),this.productsGame=[],this.productsGame.push(t.data.products[11]),this.productsGame.push(t.data.products[10]),this.productsGame.push(t.data.products[8]),this.productsGame.push(t.data.products[5]),this.temp=this.productsGame[0],l.isLoading=!1})).catch((t=>console.error(t)))},getProduct(t){const e=`https://vue3-course-api.hexschool.io/api/kelvinlin9/product/${t}`;l.isLoading=!0,r().get(e).then((t=>{l.isLoading=!1,t.data.success&&(this.product=t.data.product,this.product.qty=1)}))},setCategory(t){this.category=t}},getters:{filterProducts(){let t;if(""===this.cacheSearch){switch(this.category){case"all":t=this.products.filter((t=>t));break;case"S":t=this.products.filter((t=>"S"===t.category));break;case"A":t=this.products.filter((t=>"A"===t.category));break;case"B":t=this.products.filter((t=>"B"===t.category));break;case"C":t=this.products.filter((t=>"C"===t.category));break;case"馬鞍":t=this.products.filter((t=>"馬鞍"===t.description));break;case"馬蹄鐵":t=this.products.filter((t=>"馬蹄鐵"===t.description));break;case"馬飼料":t=this.products.filter((t=>"馬飼料"===t.description));break}return t}return this.products.filter((t=>t.title.match(this.cacheSearch)))}}})},6294:function(t,e,a){var s=a(4301);e["Z"]=(0,s.Q_)("statusStore",{state:()=>({isLoading:[],cartLoadingItem:"",messages:[]}),actions:{PushManager(t,e="更新"){if("抽獎"===t||t.data.success){const t={style:"success",title:`${e}成功`};this.messages.push(t)}else{const a="string"===typeof t.data.message?[t.data.message]:t.data.message,s={style:"danger",title:`${e}失敗`,content:a.join("、")};this.messages.push(s)}}}})},898:function(t,e,a){a.r(e),a.d(e,{default:function(){return j}});var s=a(3396),r=a(7139),o=a(9242);const i=t=>((0,s.dD)("data-v-e8e98baa"),t=t(),(0,s.Cn)(),t),c=(0,s.uE)('<div class="productsBanner" data-v-e8e98baa><div class="bg-dark bg-opacity-75 w-100 h-100 d-flex align-items-center" data-v-e8e98baa><h1 class="w-100 d-flex align-items-center justify-content-center" data-v-e8e98baa><span class="me-2 fs-1 fw-bolder text-white" data-v-e8e98baa>所有商品</span><span class="fs-5 text-primary align-self-end" data-v-e8e98baa>/ Products</span></h1></div></div>',1),l={class:"container py-5"},d={class:"row"},n={class:"col-lg-3"},u=i((()=>(0,s._)("h2",{class:"fw-bold text-center f-kalam bg-primary"},"賽馬( Level )",-1))),g={class:"fw-bold list-group flex-row flex-lg-column"},h=i((()=>(0,s._)("hr",null,null,-1))),p=i((()=>(0,s._)("h2",{class:"fw-bold text-center f-kalam bg-primary"},"道具",-1))),f={class:"fw-bold list-group flex-row flex-lg-column"},m={class:"col-lg-9"},v={class:"form-floating mb-2 mt-2 mt-lg-0"},y=i((()=>(0,s._)("label",{for:"search"},"search",-1))),b={class:"row g-4"},k={class:"card rounded-3"},C={class:"card-img overflow-hidden position-relative scale"},_=["onClick"],x=["src"],I=["onClick"],w={class:"card-body d-flex flex-column text-center fw-bold"},S={class:"fs-5"},Z={class:"fs-6 text-muted"},L={class:"fs-5"},P={class:"text-muted text-decoration-line-through fs-6 ms-1"},B=["disabled","onClick"],M={key:0,class:"spinner-grow text-danger spinner-grow-sm",role:"status"},F=i((()=>(0,s._)("span",{class:"visually-hidden"},"Loading...",-1))),N=[F],$=(0,s.Uk)(" 加到購物車 ");function A(t,e,a,i,F,A){return(0,s.wg)(),(0,s.iD)(s.HY,null,[c,(0,s._)("div",l,[(0,s._)("div",d,[(0,s._)("div",n,[u,(0,s._)("div",g,[(0,s._)("a",{href:"#",class:(0,r.C_)(["list-group-item list-group-item-action border-0 f-kalam fs-5",{"text-primary":"all"==t.category,"fs-4":"all"==t.category}]),onClick:e[0]||(e[0]=(0,o.iM)((e=>t.setCategory("all")),["prevent"]))},"- All",2),(0,s._)("a",{href:"#",class:(0,r.C_)(["list-group-item list-group-item-action border-0 f-kalam fs-5",{"text-primary":"S"==t.category,"fs-4":"S"==t.category}]),onClick:e[1]||(e[1]=(0,o.iM)((e=>t.setCategory("S")),["prevent"]))},"- S",2),(0,s._)("a",{href:"#",class:(0,r.C_)(["list-group-item list-group-item-action border-0 f-kalam fs-5",{"text-primary":"A"==t.category,"fs-4":"A"==t.category}]),onClick:e[2]||(e[2]=(0,o.iM)((e=>t.setCategory("A")),["prevent"]))},"- A",2),(0,s._)("a",{href:"#",class:(0,r.C_)(["list-group-item list-group-item-action border-0 f-kalam fs-5",{"text-primary":"B"==t.category,"fs-4":"B"==t.category}]),onClick:e[3]||(e[3]=(0,o.iM)((e=>t.setCategory("B")),["prevent"]))},"- B",2),(0,s._)("a",{href:"#",class:(0,r.C_)(["list-group-item list-group-item-action border-0 f-kalam fs-5",{"text-primary":"C"==t.category,"fs-4":"C"==t.category}]),onClick:e[4]||(e[4]=(0,o.iM)((e=>t.setCategory("C")),["prevent"]))},"- C",2)]),h,p,(0,s._)("div",f,[(0,s._)("a",{href:"#",class:(0,r.C_)(["list-group-item list-group-item-action border-0 f-kalam fs-5",{"text-primary":"馬鞍"==t.category,"fs-4":"馬鞍"==t.category}]),onClick:e[5]||(e[5]=(0,o.iM)((e=>t.setCategory("馬鞍")),["prevent"]))},"- 馬鞍",2),(0,s._)("a",{href:"#",class:(0,r.C_)(["list-group-item list-group-item-action border-0 f-kalam fs-5",{"text-primary":"馬蹄鐵"==t.category,"fs-4":"馬蹄鐵"==t.category}]),onClick:e[6]||(e[6]=(0,o.iM)((e=>t.setCategory("馬蹄鐵")),["prevent"]))},"- 馬蹄鐵",2),(0,s._)("a",{href:"#",class:(0,r.C_)(["list-group-item list-group-item-action border-0 f-kalam fs-5",{"text-primary":"馬飼料"==t.category,"fs-4":"馬飼料"==t.category}]),onClick:e[7]||(e[7]=(0,o.iM)((e=>t.setCategory("馬飼料")),["prevent"]))},"- 馬飼料",2)])]),(0,s._)("div",m,[(0,s._)("div",v,[(0,s.wy)((0,s._)("input",{type:"search",class:"form-control",id:"search",placeholder:"search","onUpdate:modelValue":e[8]||(e[8]=e=>t.cacheSearch=e)},null,512),[[o.nr,t.cacheSearch]]),y]),(0,s._)("div",b,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.filterProducts,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"col-lg-4 col-md-6 col-12",key:e.id},[(0,s._)("div",k,[(0,s._)("div",C,[(0,s._)("button",{class:"btn bg-dark fs-4 position-absolute text-white w-100 h-100 bg-opacity-75",type:"button",onClick:(0,o.iM)((a=>t.goProduct(e.id)),["prevent"])}," 詳細資訊 ",8,_),(0,s._)("img",{class:"rounded-3 img-fit",src:e.imageUrl,alt:"商品照片"},null,8,x),(0,s._)("span",{class:"position-absolute rounded-circle fs-2 p-1 fav-icon bg-white d-flex justify-content-center align-items-center",onClick:(0,o.iM)((a=>t.toggleFavorite(e.id)),["stop"])},[(0,s._)("i",{class:(0,r.C_)(t.favState(e.id)),"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"加入 / 移除我的最愛"},null,2)],8,I)]),(0,s._)("div",w,[(0,s._)("span",S,[(0,s.Uk)((0,r.zw)(e.title)+" ",1),(0,s._)("span",Z,"（"+(0,r.zw)(e.category)+"）",1)]),(0,s._)("span",L,[(0,s.Uk)(" NT $"+(0,r.zw)(e.price)+" ",1),(0,s._)("span",P,"$"+(0,r.zw)(e.origin_price),1)]),(0,s._)("button",{type:"button",class:"btn btn-outline-primary text-dark fw-bold fs-5 mt-3",disabled:t.cartLoadingItem===e.id,onClick:a=>t.addCart(e.id)},[t.cartLoadingItem===e.id?((0,s.wg)(),(0,s.iD)("div",M,N)):(0,s.kq)("",!0),$],8,B)])])])))),128))])])])])],64)}var O=a(4301),G=a(4238),q=a(4677),D=a(6294),Q=a(9498),U=a(8778),z={methods:{...(0,O.nv)(Q.Z,["getFavorite","getFavoriteIds","toggleFavorite"]),...(0,O.nv)(G.Z,["getProducts","setCategory"]),...(0,O.nv)(q.Z,["getCart","addCart"]),...(0,O.nv)(U.Z,["goProduct"])},computed:{...(0,O.rn)(Q.Z,["favorite","favoriteIds","favState"]),...(0,O.rn)(G.Z,["products","filterProducts","category"]),...(0,O.rn)(D.Z,["cartLoadingItem"]),...(0,O.Ah)(G.Z,["cacheSearch"])}},H=a(89);const J=(0,H.Z)(z,[["render",A],["__scopeId","data-v-e8e98baa"]]);var j=J}}]);
//# sourceMappingURL=898.af02792d.js.map