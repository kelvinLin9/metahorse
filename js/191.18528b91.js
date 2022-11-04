"use strict";(self["webpackChunkhw1"]=self["webpackChunkhw1"]||[]).push([[191],{4677:function(t,a,e){var s=e(6265),i=e.n(s),r=e(1120),o=e(4301),c=e(6294);const d=(0,c.Z)();a["Z"]=(0,o.Q_)("cartStore",{state:()=>({cart:{},cartNum:0,cartBoxState:!1,form:{user:{name:"",email:"",tel:"",address:""},message:""}}),actions:{getCart(){const t="https://vue3-course-api.hexschool.io/api/kelvinlin9/cart";d.isLoading=!0,i().get(t).then((t=>{this.cartNum=t.data.data.carts.length,this.cart=t.data.data,d.isLoading=!1})).catch((()=>{d.isLoading=!1,d.pushManager(!1,"更新","發生錯誤，請重新整理頁面")}))},updateCart(t){const a=`https://vue3-course-api.hexschool.io/api/kelvinlin9/cart/${t.id}`;d.isLoading=!0,d.cartLoadingItem=t.id;const e={product_id:t.product_id,qty:t.qty};i().put(a,{data:e}).then((()=>{d.cartLoadingItem="",this.getCart()})).catch((()=>{d.isLoading=!1,d.pushManager(!1,"更新","發生錯誤，請重新操作")}))},removeCartItem(t){d.cartLoadingItem=t;const a=`https://vue3-course-api.hexschool.io/api/kelvinlin9/cart/${t}`;d.isLoading=!0,i()["delete"](a).then((t=>{d.pushManager(t,"刪除","此項目已移除購物車"),d.cartLoadingItem="",this.getCart(),d.isLoading=!1})).catch((()=>{d.isLoading=!1,d.pushManager(!1,"刪除","發生錯誤，請重新操作")}))},addCart(t,a=1){const e="https://vue3-course-api.hexschool.io/api/kelvinlin9/cart";d.cartLoadingItem=t;const s={product_id:t,qty:a};i().post(e,{data:s}).then((t=>{d.cartLoadingItem="",this.getCart(),d.pushManager(t,"更新","已加入購物車")})).catch((()=>{d.isLoading=!1,d.pushManager(!1,"更新","發生錯誤，請重新整理頁面")}))},cartBoxToggle(){this.cartBoxState=!this.cartBoxState},gotoPay(){const t="https://vue3-course-api.hexschool.io/api/kelvinlin9/order",a=this.form;i().post(t,{data:a}).then((t=>{r.Z.push(`/checkoutPay/${t.data.orderId}`),this.form={user:{name:"",email:"",tel:"",address:""},message:""},this.getCart()})).catch((()=>{d.isLoading=!1,d.pushManager(!1,"傳送","發生錯誤，請重新填寫資料並送出")}))}}})},9498:function(t,a,e){var s=e(4301);a["Z"]=(0,s.Q_)("favoriteStore",{state:()=>({favorite:[],favoriteIds:[],favoriteNum:0,products:[]}),actions:{productsBus(t){this.products=t,this.getFavorite()},getFavoriteIds(){this.favoriteIds=JSON.parse(localStorage.getItem("favoriteIds"))||[]},getFavorite(){this.getFavoriteIds(),this.favorite=[],this.products.forEach((t=>{this.favoriteIds.indexOf(t.id)>-1&&this.favorite.push(t)})),this.favoriteNum=this.favorite.length},toggleFavorite(t){const a=t,e=this.favoriteIds.some((t=>t===a));if(e){const t=this.favoriteIds.find((t=>t===a));this.favoriteIds.splice(this.favoriteIds.indexOf(t),1),localStorage.setItem("favoriteIds",JSON.stringify(this.favoriteIds))}else this.favoriteIds.push(t),localStorage.setItem("favoriteIds",JSON.stringify(this.favoriteIds));this.getFavorite()},removeFavorite(t){this.favoriteIds.splice(this.favoriteIds.indexOf(t),1),localStorage.setItem("favoriteIds",JSON.stringify(this.favoriteIds)),this.getFavorite()}},getters:{favState(){return t=>this.favoriteIds.indexOf(t)>-1?"fa-solid fa-heart":"fa-regular fa-heart"}}})},8778:function(t,a,e){var s=e(1120),i=e(4301),r=e(4677);const o=(0,r.Z)();a["Z"]=(0,i.Q_)("goStore",{actions:{goCart(){s.Z.push("/cart"),o.cartBoxState=!1},goProducts(){s.Z.push("/products"),o.cartBoxState=!1},goProduct(t){s.Z.push(`/product/${t}`)},goCheckout(){s.Z.push("/checkout")}}})},4238:function(t,a,e){var s=e(6265),i=e.n(s),r=e(4301),o=e(6294),c=e(9498);const d=(0,o.Z)(),l=(0,c.Z)();a["Z"]=(0,r.Q_)("productStore",{state:()=>({products:[],product:{},productsHot:[],productsGame:[],productsRelated:[],temp:{},category:"all",cacheSearch:""}),actions:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/kelvinlin9/products/all";d.isLoading=!0,i().get(t).then((t=>{this.products=t.data.products,this.products.forEach((t=>{t.qty=1})),this.productsHot=this.products.filter(((t,a)=>a>14)),l.productsBus(this.products),this.productsGame=[],this.productsGame.push(t.data.products[11]),this.productsGame.push(t.data.products[10]),this.productsGame.push(t.data.products[8]),this.productsGame.push(t.data.products[5]),this.temp=this.productsGame[0],d.isLoading=!1})).catch((()=>{d.isLoading=!1,d.pushManager(!1,"更新","發生錯誤，請重新整理頁面")}))},getProduct(t){const a=`https://vue3-course-api.hexschool.io/api/kelvinlin9/product/${t}`;d.isLoading=!0,i().get(a).then((t=>{d.isLoading=!1,t.data.success&&(this.product=t.data.product,this.product.qty=1,this.productsRelated=[...this.products],this.productsRelated.splice(20-this.product.num,1),"遊戲道具"===this.product.category?this.productsRelated=this.productsRelated.filter(((t,a)=>"遊戲道具"===t.category)):this.productsRelated=this.productsRelated.filter(((t,a)=>"遊戲道具"!==t.category)))})).catch((()=>{d.isLoading=!1,d.pushManager(!1,"更新","發生錯誤，請重新整理頁面")}))},setCategory(t){this.category=t}},getters:{filterProducts(){let t;if(""===this.cacheSearch){switch(this.category){case"all":t=this.products.filter((t=>t));break;case"S":t=this.products.filter((t=>"S"===t.category));break;case"A":t=this.products.filter((t=>"A"===t.category));break;case"B":t=this.products.filter((t=>"B"===t.category));break;case"C":t=this.products.filter((t=>"C"===t.category));break;case"馬鞍":t=this.products.filter((t=>"馬鞍"===t.description));break;case"馬蹄鐵":t=this.products.filter((t=>"馬蹄鐵"===t.description));break;case"馬飼料":t=this.products.filter((t=>"馬飼料"===t.description));break}return t}return this.products.filter((t=>t.title.match(this.cacheSearch)))}}})},6294:function(t,a,e){var s=e(4301);a["Z"]=(0,s.Q_)("statusStore",{state:()=>({isLoading:[],cartLoadingItem:"",messages:[]}),actions:{pushManager(t=!0,a="更新",e=""){if(t){const t={style:"success",title:`${a}成功`,content:`${e}`};this.messages.push(t)}else{const t={style:"danger",title:`${a}失敗`,content:`${e}`};this.messages.push(t)}}}})},7191:function(t,a,e){e.r(a),e.d(a,{default:function(){return j}});var s=e(3396),i=e(7139),r=e(9242);const o=t=>((0,s.dD)("data-v-3765a81a"),t=t(),(0,s.Cn)(),t),c=(0,s.uE)('<div class="productsBanner" data-v-3765a81a><div class="bg-dark bg-opacity-75 w-100 h-100 d-flex align-items-center" data-v-3765a81a><h1 class="w-100 d-flex align-items-center justify-content-center" data-v-3765a81a><span class="me-2 fs-1 fw-bolder text-white" data-v-3765a81a>所有商品</span><span class="fs-5 text-primary align-self-end" data-v-3765a81a>/ Products</span></h1></div></div>',1),d={class:"container py-5"},l={class:"row"},n={class:"col-lg-3"},u=o((()=>(0,s._)("h2",{class:"fw-bold text-center f-kalam bg-primary"},"賽馬( Level )",-1))),p={class:"fw-bold list-group flex-row flex-lg-column fs-5"},g=o((()=>(0,s._)("hr",null,null,-1))),h=o((()=>(0,s._)("h2",{class:"fw-bold text-center f-kalam bg-primary"},"道具",-1))),f={class:"fw-bold list-group flex-row flex-lg-column fs-5"},m={class:"col-lg-9"},v={class:"form-floating mb-2 mt-2 mt-lg-0"},y={for:"search"},k=(0,s.Uk)(" search "),C={class:"row g-3"},_=["onClick"],b={class:"card-img overflow-hidden position-relative"},x={class:"btn bg-dark fs-4 position-absolute text-white w-100 h-100 bg-opacity-75",type:"button"},I=(0,s.Uk)(" 詳細資訊 "),w=["src"],S=["onClick"],L={class:"card-body d-flex flex-column text-center fw-bold"},Z={class:"fs-5"},M={class:"fs-6 text-muted"},B={class:"fs-5"},F={class:"text-muted text-decoration-line-through fs-6 ms-1"},P={class:"row mt-2"},$=["disabled","onClick"],A={key:0,class:"spinner-grow text-danger spinner-grow-sm",role:"status"},N=o((()=>(0,s._)("span",{class:"visually-hidden"},"Loading...",-1))),O=[N],G=(0,s.Uk)(" 加到購物車 ");function R(t,a,e,o,N,R){const U=(0,s.up)("FontAwesomeIcon");return(0,s.wg)(),(0,s.iD)(s.HY,null,[c,(0,s._)("div",d,[(0,s._)("div",l,[(0,s._)("div",n,[u,(0,s._)("div",p,[(0,s._)("a",{href:"#",class:(0,i.C_)(["list-group-item list-group-item-action border-0 f-kalam",{"text-primary":"all"===t.category,"fs-4":"all"===t.category}]),onClick:a[0]||(a[0]=(0,r.iM)((a=>t.setCategory("all")),["prevent"]))},"-All",2),(0,s._)("a",{href:"#",class:(0,i.C_)(["list-group-item list-group-item-action border-0 f-kalam",{"text-primary":"S"===t.category,"fs-4":"S"===t.category}]),onClick:a[1]||(a[1]=(0,r.iM)((a=>t.setCategory("S")),["prevent"]))},"- S",2),(0,s._)("a",{href:"#",class:(0,i.C_)(["list-group-item list-group-item-action border-0 f-kalam",{"text-primary":"A"===t.category,"fs-4":"A"===t.category}]),onClick:a[2]||(a[2]=(0,r.iM)((a=>t.setCategory("A")),["prevent"]))},"- A",2),(0,s._)("a",{href:"#",class:(0,i.C_)(["list-group-item list-group-item-action border-0 f-kalam",{"text-primary":"B"===t.category,"fs-4":"B"===t.category}]),onClick:a[3]||(a[3]=(0,r.iM)((a=>t.setCategory("B")),["prevent"]))},"- B",2),(0,s._)("a",{href:"#",class:(0,i.C_)(["list-group-item list-group-item-action border-0 f-kalam",{"text-primary":"C"===t.category,"fs-4":"C"===t.category}]),onClick:a[4]||(a[4]=(0,r.iM)((a=>t.setCategory("C")),["prevent"]))},"- C",2)]),g,h,(0,s._)("div",f,[(0,s._)("a",{href:"#",class:(0,i.C_)(["list-group-item list-group-item-action border-0 f-kalam",{"text-primary":"馬鞍"===t.category,"fs-4":"馬鞍"===t.category}]),onClick:a[5]||(a[5]=(0,r.iM)((a=>t.setCategory("馬鞍")),["prevent"]))},"- 馬鞍",2),(0,s._)("a",{href:"#",class:(0,i.C_)(["list-group-item list-group-item-action border-0 f-kalam",{"text-primary":"馬蹄鐵"===t.category,"fs-4":"馬蹄鐵"===t.category}]),onClick:a[6]||(a[6]=(0,r.iM)((a=>t.setCategory("馬蹄鐵")),["prevent"]))},"- 馬蹄鐵",2),(0,s._)("a",{href:"#",class:(0,i.C_)(["list-group-item list-group-item-action border-0 f-kalam",{"text-primary":"馬飼料"===t.category,"fs-4":"馬飼料"===t.category}]),onClick:a[7]||(a[7]=(0,r.iM)((a=>t.setCategory("馬飼料")),["prevent"]))},"- 馬飼料",2)])]),(0,s._)("div",m,[(0,s._)("div",v,[(0,s.wy)((0,s._)("input",{type:"search",class:"form-control",id:"search",placeholder:"search","onUpdate:modelValue":a[8]||(a[8]=a=>t.cacheSearch=a)},null,512),[[r.nr,t.cacheSearch]]),(0,s._)("label",y,[(0,s.Wm)(U,{icon:"fa-solid fa-magnifying-glass"}),k])]),(0,s._)("div",C,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.filterProducts,(a=>((0,s.wg)(),(0,s.iD)("div",{class:"col-lg-4 col-md-6 col-12",key:a.id},[(0,s._)("div",{class:"card rounded-3 scale",onClick:e=>t.goProduct(a.id)},[(0,s._)("div",b,[(0,s._)("button",x,[(0,s.Wm)(U,{icon:"fa-solid fa-magnifying-glass"}),I]),(0,s._)("img",{class:"rounded-3 img-fit",src:a.imageUrl,alt:"商品照片"},null,8,w),(0,s._)("span",{class:"position-absolute rounded-circle fs-2 p-1 fav-icon bg-white d-flex justify-content-center align-items-center",onClick:(0,r.iM)((e=>t.toggleFavorite(a.id)),["stop"])},[(0,s.Wm)(U,{icon:t.favState(a.id),class:"love","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"加入 / 移除我的最愛"},null,8,["icon"])],8,S)]),(0,s._)("div",L,[(0,s._)("span",Z,[(0,s.Uk)((0,i.zw)(a.title)+" ",1),(0,s._)("span",M,"（"+(0,i.zw)(a.category)+"）",1)]),(0,s._)("span",B,[(0,s.Uk)(" NT $"+(0,i.zw)(a.price)+" ",1),(0,s._)("span",F,"$"+(0,i.zw)(a.origin_price),1)]),(0,s._)("div",P,[(0,s._)("button",{type:"button",class:"btn btn-outline-primary text-dark fw-bold",disabled:t.cartLoadingItem===a.id,onClick:(0,r.iM)((e=>t.addCart(a.id)),["stop"])},[t.cartLoadingItem===a.id?((0,s.wg)(),(0,s.iD)("div",A,O)):(0,s.kq)("",!0),G],8,$)])])],8,_)])))),128))])])])])],64)}var U=e(4301),q=e(4238),D=e(4677),Q=e(6294),z=e(9498),H=e(8778),J={methods:{...(0,U.nv)(z.Z,["getFavorite","getFavoriteIds","toggleFavorite"]),...(0,U.nv)(q.Z,["getProducts","setCategory"]),...(0,U.nv)(D.Z,["getCart","addCart"]),...(0,U.nv)(H.Z,["goProduct"])},computed:{...(0,U.rn)(z.Z,["favorite","favoriteIds","favState"]),...(0,U.rn)(q.Z,["products","filterProducts","category"]),...(0,U.rn)(Q.Z,["cartLoadingItem"]),...(0,U.Ah)(q.Z,["cacheSearch"])}},E=e(89);const W=(0,E.Z)(J,[["render",R],["__scopeId","data-v-3765a81a"]]);var j=W}}]);
//# sourceMappingURL=191.18528b91.js.map