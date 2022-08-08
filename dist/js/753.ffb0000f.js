"use strict";(self["webpackChunkhw1"]=self["webpackChunkhw1"]||[]).push([[753],{4677:function(t,e,s){var o=s(6265),a=s.n(o),i=s(4301),r=s(6294);const c=(0,r.Z)();e["Z"]=(0,i.Q_)("cartStore",{state:()=>({cart:{},cartNum:0,cartBoxState:!1}),actions:{getCart(){const t="https://vue3-course-api.hexschool.io/api/kelvinlin9/cart";c.isLoading=!0,a().get(t).then((t=>{console.log("GETC!!!!!!!!!!!!!!!!"),this.cartNum=t.data.data.carts.length,console.log("this.cartNum",this.cartNum),this.cart=t.data.data,c.isLoading=!1})).catch((t=>console.error(t)))},updateCart(t){const e=`https://vue3-course-api.hexschool.io/api/kelvinlin9/cart/${t.id}`;c.isLoading=!0,c.cartLoadingItem=t.id;const s={product_id:t.product_id,qty:t.qty};a().put(e,{data:s}).then((t=>{c.cartLoadingItem="",this.getCart()})).catch((t=>console.error(t)))},removeCartItem(t){c.cartLoadingItem=t;const e=`https://vue3-course-api.hexschool.io/api/kelvinlin9/cart/${t}`;c.isLoading=!0,a()["delete"](e).then((t=>{console.log(t),c.PushManager(t,"移除購物車品項"),c.cartLoadingItem="",this.getCart(),c.isLoading=!1})).catch((t=>console.error(t)))},addCart(t,e=1){const s="https://vue3-course-api.hexschool.io/api/kelvinlin9/cart";c.cartLoadingItem=t;const o={product_id:t,qty:e};a().post(s,{data:o}).then((t=>{c.cartLoadingItem="",this.getCart(),c.PushManager(t,"加入購物車")})).catch((t=>console.error(t)))},cartBoxToggle(){this.cartBoxState=!this.cartBoxState}}})},9498:function(t,e,s){var o=s(4301);e["Z"]=(0,o.Q_)("favoriteStore",{state:()=>({favorite:[],favoriteIds:[],favoriteNum:0,products:[]}),actions:{productsBus(t){this.products=t,this.getFavorite()},getFavoriteIds(){this.favoriteIds=JSON.parse(localStorage.getItem("favoriteIds"))||[]},getFavorite(){this.getFavoriteIds(),this.favorite=[],this.products.forEach((t=>{this.favoriteIds.indexOf(t.id)>-1&&this.favorite.push(t)})),this.favoriteNum=this.favorite.length},toggleFavorite(t){const e=t,s=this.favoriteIds.some((t=>t===e));if(s){const t=this.favoriteIds.find((t=>t===e));this.favoriteIds.splice(this.favoriteIds.indexOf(t),1),localStorage.setItem("favoriteIds",JSON.stringify(this.favoriteIds))}else this.favoriteIds.push(t),localStorage.setItem("favoriteIds",JSON.stringify(this.favoriteIds));this.getFavorite()},removeFavorite(t){this.favoriteIds.splice(this.favoriteIds.indexOf(t),1),localStorage.setItem("favoriteIds",JSON.stringify(this.favoriteIds)),this.getFavorite()}},getters:{favState(){return t=>this.favoriteIds.indexOf(t)>-1?"bi bi-heart-fill":"bi bi-heart"}}})},8778:function(t,e,s){var o=s(1120),a=s(4301),i=s(4677);const r=(0,i.Z)();e["Z"]=(0,a.Q_)("goStore",{actions:{goCart(){o.Z.push("/cart"),r.cartBoxState=!1},goProducts(){o.Z.push("/products"),r.cartBoxState=!1},goProduct(t){o.Z.push(`/product/${t}`)},goCheckout(){o.Z.push("/checkout")}}})},4238:function(t,e,s){var o=s(6265),a=s.n(o),i=s(4301),r=s(6294),c=s(9498);const d=(0,r.Z)(),n=(0,c.Z)();e["Z"]=(0,i.Q_)("productStore",{state:()=>({products:[],product:{},productsHot:[],productsGame:[],temp:{},category:"all"}),actions:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/kelvinlin9/products/all";d.isLoading=!0,a().get(t).then((t=>{console.log("GETP!!!!!!!!!!!!!!!!"),this.products=t.data.products,this.productsHot=this.products.filter(((t,e)=>e>14)),n.productsBus(this.products),this.productsGame=[],this.productsGame.push(t.data.products[11]),this.productsGame.push(t.data.products[10]),this.productsGame.push(t.data.products[8]),this.productsGame.push(t.data.products[5]),this.temp=this.productsGame[0],d.isLoading=!1})).catch((t=>console.error(t)))},getProduct(t){const e=`https://vue3-course-api.hexschool.io/api/kelvinlin9/product/${t}`;d.isLoading=!0,a().get(e).then((t=>{d.isLoading=!1,t.data.success&&(this.product=t.data.product,this.product.qty=1)}))},setCategory(t){this.category=t}},getters:{filterProducts(){let t;switch(this.category){case"all":t=this.products.filter((t=>t));break;case"S":t=this.products.filter((t=>"S"===t.category));break;case"A":t=this.products.filter((t=>"A"===t.category));break;case"B":t=this.products.filter((t=>"B"===t.category));break;case"C":t=this.products.filter((t=>"C"===t.category));break;case"馬鞍":t=this.products.filter((t=>"馬鞍"===t.description));break;case"馬蹄鐵":t=this.products.filter((t=>"馬蹄鐵"===t.description));break;case"馬飼料":t=this.products.filter((t=>"馬飼料"===t.description));break}return t}}})},6294:function(t,e,s){var o=s(4301);e["Z"]=(0,o.Q_)("statusStore",{state:()=>({isLoading:[],cartLoadingItem:"",messages:[]}),actions:{PushManager(t,e="更新"){if(t.data.success){const t={style:"success",title:`${e}成功`};this.messages.push(t)}else{const s="string"===typeof t.data.message?[t.data.message]:t.data.message,o={style:"danger",title:`${e}失敗`,content:s.join("、")};this.messages.push(o)}}}})},3753:function(t,e,s){s.r(e),s.d(e,{default:function(){return U}});var o=s(3396),a=s(9242),i=s(7139);const r=t=>((0,o.dD)("data-v-4b0de880"),t=t(),(0,o.Cn)(),t),c={class:"bg-light"},d={key:0,class:"container-fluid pt-5"},n={class:"d-flex flex-column justify-content-center align-items-center"},l=r((()=>(0,o._)("h1",{class:"fs-2 text-center fw-bold mb-5"},"目前沒有收藏任何商品",-1))),u=(0,o.Uk)("回產品列表"),h={class:"container pt-5"},p={key:0,class:"row g-4 justify-content-center"},g=r((()=>(0,o._)("div",{class:"d-flex justify-content-center"},[(0,o._)("h1",{class:"fs-2 text-center fw-bold"},"我的最愛")],-1))),f={class:"card rounded-3"},v={class:"card-img overflow-hidden position-relative scale"},m=["onClick"],b=["src"],k={class:"card-body d-flex flex-column justify-content-center text-center fw-bold"},y={class:"fs-4"},I={class:"fs-6 text-muted"},x={class:"fs-5"},_={class:"text-muted text-decoration-line-through fs-6 ms-1"},w={class:"px-3 py-2 d-flex justify-content-between"},C=["onClick"],L=["disabled","onClick"],S={key:0,class:"spinner-grow text-danger spinner-grow-sm",role:"status"},Z=r((()=>(0,o._)("span",{class:"visually-hidden"},"Loading...",-1))),F=[Z],P=(0,o.Uk)(" 加到購物車 ");function N(t,e,s,r,Z,N){const B=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",c,[0===t.favorite.length?((0,o.wg)(),(0,o.iD)("div",d,[(0,o._)("div",n,[l,(0,o.Wm)(B,{to:"products",type:"button",class:"btn btn-outline-primary text-dark fw-bold fs-5"},{default:(0,o.w5)((()=>[u])),_:1})])])):(0,o.kq)("",!0),(0,o._)("div",h,[0!==t.favorite.length?((0,o.wg)(),(0,o.iD)("div",p,[g,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.favorite,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"col-md-6 col-lg-4 col-12",key:e.id},[(0,o._)("div",f,[(0,o._)("div",v,[(0,o._)("button",{class:"btn bg-dark fs-4 position-absolute text-white w-100 h-100 bg-opacity-75",type:"button",onClick:(0,a.iM)((s=>t.goProduct(e.id)),["prevent"])}," 詳細資訊 ",8,m),(0,o._)("img",{class:"rounded-3 img-fit",src:e.imageUrl,alt:"商品照片"},null,8,b)]),(0,o._)("div",k,[(0,o._)("span",y,[(0,o.Uk)((0,i.zw)(e.title)+" ",1),(0,o._)("span",I,"（"+(0,i.zw)(e.category)+"）",1)]),(0,o._)("span",x,[(0,o.Uk)(" NT $"+(0,i.zw)(e.price)+" ",1),(0,o._)("span",_,"$"+(0,i.zw)(e.origin_price),1)]),(0,o._)("div",w,[(0,o._)("button",{type:"button",class:"btn btn-outline-secondary fw-bold fs-5 px-3",onClick:(0,a.iM)((s=>t.removeFavorite(e.id)),["stop"])}," 移除收藏 ",8,C),(0,o._)("button",{type:"button",class:"btn btn-outline-primary text-dark fw-bold fs-5 px-3",disabled:t.cartLoadingItem===e.id,onClick:(0,a.iM)((s=>t.addCart(e.id)),["stop"])},[t.cartLoadingItem===e.id?((0,o.wg)(),(0,o.iD)("div",S,F)):(0,o.kq)("",!0),P],8,L)])])])])))),128))])):(0,o.kq)("",!0)])])}var B=s(4301),G=s(4238),O=s(4677),$=s(6294),q=s(9498),D=s(8778),j={data(){return{}},computed:{...(0,B.rn)(q.Z,["favorite","favoriteIds"]),...(0,B.rn)(G.Z,["products"]),...(0,B.rn)($.Z,["isLoading","cartLoadingItem"])},methods:{...(0,B.nv)(q.Z,["getFavorite","getFavoriteIds","removeFavorite"]),...(0,B.nv)(G.Z,["getProducts"]),...(0,B.nv)(O.Z,["getCart","addCart"]),...(0,B.nv)(D.Z,["goProduct"])}},M=s(89);const Q=(0,M.Z)(j,[["render",N],["__scopeId","data-v-4b0de880"]]);var U=Q}}]);
//# sourceMappingURL=753.ffb0000f.js.map