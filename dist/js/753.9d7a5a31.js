"use strict";(self["webpackChunkhw1"]=self["webpackChunkhw1"]||[]).push([[753],{7429:function(t,e,i){i.d(e,{Z:function(){return D}});var s=i(3396),n=i(9242);const a=t=>((0,s.dD)("data-v-11da1bf7"),t=t(),(0,s.Cn)(),t),l={class:"footer bg-dark mt-3 py-4 mt-md-5"},o={class:"container-fluid"},c=a((()=>(0,s._)("ul",{class:"list-inline text-center"},[(0,s._)("li",{class:"list-inline-item text-light"}," © Copyright 2022 MetaHorse ")],-1))),r={class:"list-inline text-center"},d={class:"list-inline-item"},u=a((()=>(0,s._)("i",{class:"bi bi-facebook"},null,-1))),f=[u],g={class:"list-inline-item ms-2"},h=a((()=>(0,s._)("i",{class:"bi bi-messenger"},null,-1))),p=[h],v={class:"list-inline-item ms-2"},b=a((()=>(0,s._)("i",{class:"bi bi-instagram"},null,-1))),_=[b],m=a((()=>(0,s._)("li",{class:"list-inline-item ms-2"},[(0,s._)("a",{class:"text-light",href:"",target:"_blank"},[(0,s._)("i",{class:"bi bi-github"})])],-1))),k=a((()=>(0,s._)("ul",{class:"list-inline text-center"},[(0,s._)("li",{class:"list-inline-item text-light"}," 個人練習作品，非商業用途 ")],-1)));function x(t,e){return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",o,[c,(0,s._)("ul",r,[(0,s._)("li",d,[(0,s._)("a",{class:"text-light",href:"#",onClick:e[0]||(e[0]=(0,n.iM)((()=>{}),["prevent"]))},f)]),(0,s._)("li",g,[(0,s._)("a",{class:"text-light",href:"#",onClick:e[1]||(e[1]=(0,n.iM)((()=>{}),["prevent"]))},p)]),(0,s._)("li",v,[(0,s._)("a",{class:"text-light",href:"#",onClick:e[2]||(e[2]=(0,n.iM)((()=>{}),["prevent"]))},_)]),m]),k])])}var w=i(89);const y={},C=(0,w.Z)(y,[["render",x],["__scopeId","data-v-11da1bf7"]]);var D=C},5753:function(t,e,i){i.r(e),i.d(e,{default:function(){return S}});var s=i(3396),n=i(9242),a=i(7139);const l=t=>((0,s.dD)("data-v-49cc87b0"),t=t(),(0,s.Cn)(),t),o={class:"bg-light"},c={key:0,class:"container-fluid"},r={class:"d-flex flex-column justify-content-center align-items-center"},d=l((()=>(0,s._)("h1",{class:"fs-2 text-center fw-bold mb-5"},"目前沒有收藏任何商品",-1))),u=(0,s.Uk)("回產品列表"),f={class:"container pt-5"},g={key:0,class:"row g-4 justify-content-center"},h=l((()=>(0,s._)("div",{class:"d-flex justify-content-center"},[(0,s._)("h1",{class:"fs-2 text-center fw-bold"},"我的最愛")],-1))),p={class:"card rounded-3"},v={class:"card-img overflow-hidden position-relative cursorPointer"},b=["onClick"],_=["src"],m={class:"card-body d-flex flex-column justify-content-center text-center fw-bold"},k={class:"fs-4"},x={class:"fs-6 text-muted"},w={class:"fs-5"},y={class:"text-muted text-decoration-line-through fs-6 ms-1"},C={class:"px-3 py-2 d-flex justify-content-between"},D=["onClick"],I=["disabled","onClick"],F={key:0,class:"spinner-grow text-danger spinner-grow-sm",role:"status"},M=l((()=>(0,s._)("span",{class:"visually-hidden"},"Loading...",-1))),U=[M],Z=(0,s.Uk)(" 加到購物車 ");function $(t,e,i,l,M,$){const j=(0,s.up)("RouterLink"),L=(0,s.up)("UserFooter");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",o,[0===M.favorite.length?((0,s.wg)(),(0,s.iD)("div",c,[(0,s._)("div",r,[d,(0,s.Wm)(j,{to:"products",type:"button",class:"btn btn-outline-primary text-dark fw-bold fs-5"},{default:(0,s.w5)((()=>[u])),_:1})])])):(0,s.kq)("",!0),(0,s._)("div",f,[0!==M.favorite.length?((0,s.wg)(),(0,s.iD)("div",g,[h,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(M.favorite,(t=>((0,s.wg)(),(0,s.iD)("div",{class:"col-md-6 col-lg-4 col-12",key:t.id},[(0,s._)("div",p,[(0,s._)("div",v,[(0,s._)("button",{class:"btn bg-dark fs-4 position-absolute text-white w-100 h-100 bg-opacity-75",type:"button",onClick:(0,n.iM)((e=>$.goProduct(t.id)),["prevent"])}," 詳細資訊 ",8,b),(0,s._)("img",{class:"rounded-3 img-fit",src:t.imageUrl,alt:"商品照片"},null,8,_)]),(0,s._)("div",m,[(0,s._)("span",k,[(0,s.Uk)((0,a.zw)(t.title)+" ",1),(0,s._)("span",x,"（"+(0,a.zw)(t.category)+"）",1)]),(0,s._)("span",w,[(0,s.Uk)(" NT $"+(0,a.zw)(t.price)+" ",1),(0,s._)("span",y,"$"+(0,a.zw)(t.origin_price),1)]),(0,s._)("div",C,[(0,s._)("button",{type:"button",class:"btn btn-outline-secondary fw-bold fs-5 px-3",onClick:(0,n.iM)((e=>$.removeFavorite(t)),["stop"])}," 移除收藏 ",8,D),(0,s._)("button",{type:"button",class:"btn btn-outline-primary text-dark fw-bold fs-5 px-3",disabled:this.status.loadingItem===t.id,onClick:(0,n.iM)((e=>$.addCart(t.id)),["stop"])},[this.status.loadingItem===t.id?((0,s.wg)(),(0,s.iD)("div",F,U)):(0,s.kq)("",!0),Z],8,I)])])])])))),128))])):(0,s.kq)("",!0)])]),(0,s.Wm)(L)],64)}var j=i(5820),L=i(7429),q={data(){return{favorite:[],isLoading:!1,status:{loadingItem:""}}},components:{UserFooter:L.Z},methods:{getFavorite(){this.favorite=JSON.parse(localStorage.getItem("favorite"))||[]},removeFavorite(t){console.log("我的最愛列表",this.favorite),console.log("點到的是第幾筆資料",this.favorite.indexOf(t)),this.favorite.splice(this.favorite.indexOf(t),1),localStorage.setItem("favorite",JSON.stringify(this.favorite)),this.getFavorite(),j.Z.emit("update-favorite")},addCart(t){const e="https://vue3-course-api.hexschool.io/api/kelvinlin9/cart";this.status.loadingItem=t;const i={product_id:t,qty:1};this.$http.post(e,{data:i}).then((t=>{this.status.loadingItem="",console.log("加入購物車後回傳的訊息",t),this.getCart(),j.Z.emit("update-cart")}))},getCart(){const t="https://vue3-course-api.hexschool.io/api/kelvinlin9/cart";this.isLoading=!0,this.$http.get(t).then((t=>{console.log("重新取得購物車訊息",t),this.cart=t.data.data,this.isLoading=!1}))},goProduct(t){this.$router.push(`/product/${t}`)}},created(){this.getFavorite()}},z=i(89);const O=(0,z.Z)(q,[["render",$],["__scopeId","data-v-49cc87b0"]]);var S=O}}]);
//# sourceMappingURL=753.9d7a5a31.js.map