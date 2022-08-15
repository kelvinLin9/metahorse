"use strict";(self["webpackChunkhw1"]=self["webpackChunkhw1"]||[]).push([[63],{4677:function(t,a,s){var e=s(6265),o=s.n(e),r=s(1120),i=s(4301),d=s(6294);const c=(0,d.Z)();a["Z"]=(0,i.Q_)("cartStore",{state:()=>({cart:{},cartNum:0,cartBoxState:!1,form:{user:{name:"",email:"",tel:"",address:""},message:""}}),actions:{getCart(){const t="https://vue3-course-api.hexschool.io/api/kelvinlin9/cart";c.isLoading=!0,o().get(t).then((t=>{console.log("GETC!!!!!!!!!!!!!!!!"),this.cartNum=t.data.data.carts.length,this.cart=t.data.data,c.isLoading=!1})).catch((t=>console.error(t)))},updateCart(t){const a=`https://vue3-course-api.hexschool.io/api/kelvinlin9/cart/${t.id}`;c.isLoading=!0,c.cartLoadingItem=t.id;const s={product_id:t.product_id,qty:t.qty};o().put(a,{data:s}).then((t=>{c.cartLoadingItem="",this.getCart()})).catch((t=>console.error(t)))},removeCartItem(t){c.cartLoadingItem=t;const a=`https://vue3-course-api.hexschool.io/api/kelvinlin9/cart/${t}`;c.isLoading=!0,o()["delete"](a).then((t=>{console.log(t),c.PushManager(t,"移除購物車品項"),c.cartLoadingItem="",this.getCart(),c.isLoading=!1})).catch((t=>console.error(t)))},addCart(t,a=1){const s="https://vue3-course-api.hexschool.io/api/kelvinlin9/cart";c.cartLoadingItem=t;const e={product_id:t,qty:a};o().post(s,{data:e}).then((t=>{c.cartLoadingItem="",this.getCart(),c.PushManager(t,"加入購物車")})).catch((t=>console.error(t)))},cartBoxToggle(){this.cartBoxState=!this.cartBoxState},gotoPay(){const t="https://vue3-course-api.hexschool.io/api/kelvinlin9/order",a=this.form;o().post(t,{data:a}).then((t=>{r.Z.push(`/checkoutPay/${t.data.orderId}`),this.form={user:{name:"",email:"",tel:"",address:""},message:""},this.getCart()})).catch((t=>console.error(t)))}}})},9498:function(t,a,s){var e=s(4301);a["Z"]=(0,e.Q_)("favoriteStore",{state:()=>({favorite:[],favoriteIds:[],favoriteNum:0,products:[]}),actions:{productsBus(t){this.products=t,this.getFavorite()},getFavoriteIds(){this.favoriteIds=JSON.parse(localStorage.getItem("favoriteIds"))||[]},getFavorite(){this.getFavoriteIds(),this.favorite=[],this.products.forEach((t=>{this.favoriteIds.indexOf(t.id)>-1&&this.favorite.push(t)})),this.favoriteNum=this.favorite.length},toggleFavorite(t){const a=t,s=this.favoriteIds.some((t=>t===a));if(s){const t=this.favoriteIds.find((t=>t===a));this.favoriteIds.splice(this.favoriteIds.indexOf(t),1),localStorage.setItem("favoriteIds",JSON.stringify(this.favoriteIds))}else this.favoriteIds.push(t),localStorage.setItem("favoriteIds",JSON.stringify(this.favoriteIds));this.getFavorite()},removeFavorite(t){this.favoriteIds.splice(this.favoriteIds.indexOf(t),1),localStorage.setItem("favoriteIds",JSON.stringify(this.favoriteIds)),this.getFavorite()}},getters:{favState(){return t=>this.favoriteIds.indexOf(t)>-1?"bi bi-heart-fill":"bi bi-heart"}}})},4238:function(t,a,s){var e=s(6265),o=s.n(e),r=s(4301),i=s(6294),d=s(9498);const c=(0,i.Z)(),l=(0,d.Z)();a["Z"]=(0,r.Q_)("productStore",{state:()=>({products:[],product:{},productsHot:[],productsGame:[],temp:{},category:"all"}),actions:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/kelvinlin9/products/all";c.isLoading=!0,o().get(t).then((t=>{console.log("GETP!!!!!!!!!!!!!!!!"),this.products=t.data.products,this.productsHot=this.products.filter(((t,a)=>a>14)),l.productsBus(this.products),this.productsGame=[],this.productsGame.push(t.data.products[11]),this.productsGame.push(t.data.products[10]),this.productsGame.push(t.data.products[8]),this.productsGame.push(t.data.products[5]),this.temp=this.productsGame[0],c.isLoading=!1})).catch((t=>console.error(t)))},getProduct(t){const a=`https://vue3-course-api.hexschool.io/api/kelvinlin9/product/${t}`;c.isLoading=!0,o().get(a).then((t=>{c.isLoading=!1,t.data.success&&(this.product=t.data.product,this.product.qty=1)}))},setCategory(t){this.category=t}},getters:{filterProducts(){let t;switch(this.category){case"all":t=this.products.filter((t=>t));break;case"S":t=this.products.filter((t=>"S"===t.category));break;case"A":t=this.products.filter((t=>"A"===t.category));break;case"B":t=this.products.filter((t=>"B"===t.category));break;case"C":t=this.products.filter((t=>"C"===t.category));break;case"馬鞍":t=this.products.filter((t=>"馬鞍"===t.description));break;case"馬蹄鐵":t=this.products.filter((t=>"馬蹄鐵"===t.description));break;case"馬飼料":t=this.products.filter((t=>"馬飼料"===t.description));break}return t}}})},6294:function(t,a,s){var e=s(4301);a["Z"]=(0,e.Q_)("statusStore",{state:()=>({isLoading:[],cartLoadingItem:"",messages:[]}),actions:{PushManager(t,a="更新"){if("抽獎"==t||t.data.success){const t={style:"success",title:`${a}成功`};this.messages.push(t)}else{const s="string"===typeof t.data.message?[t.data.message]:t.data.message,e={style:"danger",title:`${a}失敗`,content:s.join("、")};this.messages.push(e)}}}})},7063:function(t,a,s){s.r(a),s.d(a,{default:function(){return X}});var e=s(3396),o=s(7139),r=s(9242);const i=t=>((0,e.dD)("data-v-b114bfa6"),t=t(),(0,e.Cn)(),t),d={class:"container my-5"},c={"aria-label":"breadcrumb"},l={class:"breadcrumb"},n={class:"breadcrumb-item fs-5"},u=(0,e.Uk)(" 產品列表 "),p={class:"breadcrumb-item active fs-5","aria-current":"page"},h={class:"row justify-content-center"},g={class:"col-md-6 position-relative"},b=["src"],v={class:"col-md-6 d-flex flex-column"},f=i((()=>(0,e._)("hr",null,null,-1))),m=i((()=>(0,e._)("hr",null,null,-1))),y={key:0,class:"w-50"},_=i((()=>(0,e._)("h5",null,"遊戲中素質：",-1))),k=i((()=>(0,e._)("span",null,[(0,e.Uk)("速度"),(0,e._)("i",{class:"bi bi-lightning-fill mx-1"})],-1))),w={class:"progress mb-3"},I=i((()=>(0,e._)("span",null,[(0,e.Uk)("耐力"),(0,e._)("i",{class:"bi bi-clock-fill mx-1"})],-1))),x={class:"progress mb-3"},L=i((()=>(0,e._)("span",null,[(0,e.Uk)("幸運"),(0,e._)("i",{class:"bi bi-dice-6-fill mx-1"})],-1))),C={class:"progress mb-3"},S=i((()=>(0,e._)("span",null,[(0,e.Uk)("智慧"),(0,e._)("i",{class:"bi bi-mortarboard-fill mx-1"})],-1))),O={class:"progress mb-3"},F=i((()=>(0,e._)("hr",null,null,-1))),Z={key:1,class:"h5"},q={key:2,class:"h6"},N={key:3,class:"h5"},P=i((()=>(0,e._)("hr",null,null,-1))),z={class:"row mt-auto"},B={class:"input-group input-group-sm col"},G=["disabled"],E=["disabled"],U={key:0,class:"spinner-grow text-danger spinner-grow-sm",role:"status"},D=i((()=>(0,e._)("span",{class:"visually-hidden"},"Loading...",-1))),$=[D],j=(0,e.Uk)(" 加到購物車 "),T=(0,e.uE)('<div class="my-5" data-v-b114bfa6><h2 class="fs-2 text-center fw-bold" data-v-b114bfa6>常見問題</h2><div class="accordion" id="accordionExample" data-v-b114bfa6><div class="accordion-item" data-v-b114bfa6><h2 class="accordion-header" id="headingOne" data-v-b114bfa6><button class="accordion-button fw-bold text-dark fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapseOne" data-v-b114bfa6> 我該如何取得NFT </button></h2><div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" data-v-b114bfa6><div class="accordion-body" data-v-b114bfa6> 付款完成之後，我們將在3個工作日內將NFT轉移至您的錢包 </div></div></div><div class="accordion-item" data-v-b114bfa6><h2 class="accordion-header" id="headingOne" data-v-b114bfa6><button class="accordion-button fw-bold text-dark fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapseOne" data-v-b114bfa6> 我能擁有一匹真正的賽馬嗎 </button></h2><div id="collapse2" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" data-v-b114bfa6><div class="accordion-body" data-v-b114bfa6> 每個NFT都對應到一匹真實的馬，透過遊戲，在錦標賽最終獲勝的玩家將能獲得一匹真實的馬 </div></div></div><div class="accordion-item" data-v-b114bfa6><h2 class="accordion-header" id="headingOne" data-v-b114bfa6><button class="accordion-button fw-bold text-dark fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapseOne" data-v-b114bfa6> 遊戲什麼時候會開放 </button></h2><div id="collapse3" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" data-v-b114bfa6><div class="accordion-body" data-v-b114bfa6> 根據我們的路線圖，我們將在2022年第四季度提供Beta測試版 </div></div></div></div></div>',1);function J(t,a,s,i,D,J){const M=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("div",d,[(0,e._)("nav",c,[(0,e._)("ol",l,[(0,e._)("li",n,[(0,e.Wm)(M,{to:"/products",class:"fw-bold bg-dark"},{default:(0,e.w5)((()=>[u])),_:1})]),(0,e._)("li",p,(0,o.zw)(t.product.title),1)])]),(0,e._)("div",h,[(0,e._)("div",g,[(0,e._)("img",{src:t.product.imageUrl,alt:"商品照片",class:"img-fluid mb-3 rounded h-100"},null,8,b),(0,e._)("span",{class:"position-absolute rounded-circle fs-2 p-1 fav-icon bg-white text-center",onClick:a[0]||(a[0]=(0,r.iM)((a=>t.toggleFavorite(t.product.id)),["stop"]))},[(0,e._)("i",{class:(0,o.C_)(t.favState(D.id))},null,2)])]),(0,e._)("div",v,[(0,e._)("h2",null,(0,o.zw)(t.product.title),1),(0,e._)("div",null,(0,o.zw)(t.product.description),1),f,(0,e._)("h5",null,(0,o.zw)(t.product.content),1),m,t.product.speed?((0,e.wg)(),(0,e.iD)("div",y,[_,k,(0,e._)("div",w,[(0,e._)("div",{class:"progress-bar text-dark fw-bold",role:"progressbar",style:(0,o.j5)({width:20*t.product.speed+"%"})},(0,o.zw)(t.product.speed)+" / 5 ",5)]),I,(0,e._)("div",x,[(0,e._)("div",{class:"progress-bar text-dark fw-bold",role:"progressbar",style:(0,o.j5)({width:20*t.product.stamina+"%"})},(0,o.zw)(t.product.stamina)+" / 5 ",5)]),L,(0,e._)("div",C,[(0,e._)("div",{class:"progress-bar text-dark fw-bold",role:"progressbar",style:(0,o.j5)({width:20*t.product.lucky+"%"})},(0,o.zw)(t.product.lucky)+" / 5 ",5)]),S,(0,e._)("div",O,[(0,e._)("div",{class:"progress-bar text-dark fw-bold",role:"progressbar",style:(0,o.j5)({width:20*t.product.intelligence+"%"})},(0,o.zw)(t.product.intelligence)+" / 5 ",5)]),F])):(0,e.kq)("",!0),t.product.price?(0,e.kq)("",!0):((0,e.wg)(),(0,e.iD)("div",Z,(0,o.zw)(t.product.origin_price)+" 元",1)),t.product.price?((0,e.wg)(),(0,e.iD)("del",q,"原價 "+(0,o.zw)(t.product.origin_price)+" 元",1)):(0,e.kq)("",!0),t.product.price?((0,e.wg)(),(0,e.iD)("div",N,"現在只要 "+(0,o.zw)(t.product.price)+" 元",1)):(0,e.kq)("",!0),P,(0,e._)("div",z,[(0,e._)("div",B,[(0,e.wy)((0,e._)("input",{type:"number",class:"form-control",min:"1",disabled:t.product.id===t.cartLoadingItem,"onUpdate:modelValue":a[1]||(a[1]=a=>t.product.qty=a),onInput:a[2]||(a[2]=a=>t.product.qty=Number(a.target.value.replace(/^(0+)|[^\d]+/g,""))||1)},null,40,G),[[r.nr,t.product.qty,void 0,{number:!0}]])]),(0,e._)("button",{type:"button",class:"col-9 btn btn-outline-primary text-dark fw-bold fs-5",disabled:t.cartLoadingItem===t.product.id,onClick:a[3]||(a[3]=a=>t.addCart(t.product.id,t.product.qty))},[t.cartLoadingItem===t.product.id?((0,e.wg)(),(0,e.iD)("div",U,$)):(0,e.kq)("",!0),j],8,E)])])]),T])}var M=s(4301),Q=s(6294),A=s(4238),H=s(4677),V=s(9498),W={data(){return{id:""}},computed:{...(0,M.rn)(V.Z,["favorite","favoriteIds","favIcons","favState"]),...(0,M.rn)(A.Z,["products","product"]),...(0,M.rn)(Q.Z,["cartLoadingItem"])},methods:{...(0,M.nv)(V.Z,["getFavorite","getFavoriteIds","toggleFavorite"]),...(0,M.nv)(A.Z,["getProducts","getProduct"]),...(0,M.nv)(H.Z,["addCart"])},created(){this.id=this.$route.params.productId,this.getProduct(this.id)}},K=s(89);const R=(0,K.Z)(W,[["render",J],["__scopeId","data-v-b114bfa6"]]);var X=R}}]);
//# sourceMappingURL=63.4aa910d7.js.map