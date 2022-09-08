"use strict";(self["webpackChunkhw1"]=self["webpackChunkhw1"]||[]).push([[1],{4677:function(t,o,a){var e=a(6265),n=a.n(e),s=a(1120),c=a(4301),l=a(6294);const r=(0,l.Z)();o["Z"]=(0,c.Q_)("cartStore",{state:()=>({cart:{},cartNum:0,cartBoxState:!1,form:{user:{name:"",email:"",tel:"",address:""},message:""}}),actions:{getCart(){const t="https://vue3-course-api.hexschool.io/api/kelvinlin9/cart";r.isLoading=!0,n().get(t).then((t=>{this.cartNum=t.data.data.carts.length,this.cart=t.data.data,r.isLoading=!1})).catch((t=>console.error(t)))},updateCart(t){const o=`https://vue3-course-api.hexschool.io/api/kelvinlin9/cart/${t.id}`;r.isLoading=!0,r.cartLoadingItem=t.id;const a={product_id:t.product_id,qty:t.qty};n().put(o,{data:a}).then((t=>{r.cartLoadingItem="",this.getCart()})).catch((t=>console.error(t)))},removeCartItem(t){r.cartLoadingItem=t;const o=`https://vue3-course-api.hexschool.io/api/kelvinlin9/cart/${t}`;r.isLoading=!0,n()["delete"](o).then((t=>{console.log(t),r.PushManager(t,"移除購物車品項"),r.cartLoadingItem="",this.getCart(),r.isLoading=!1})).catch((t=>console.error(t)))},addCart(t,o=1){const a="https://vue3-course-api.hexschool.io/api/kelvinlin9/cart";r.cartLoadingItem=t;const e={product_id:t,qty:o};n().post(a,{data:e}).then((t=>{r.cartLoadingItem="",this.getCart(),r.PushManager(t,"加入購物車")})).catch((t=>console.error(t)))},cartBoxToggle(){this.cartBoxState=!this.cartBoxState},gotoPay(){const t="https://vue3-course-api.hexschool.io/api/kelvinlin9/order",o=this.form;n().post(t,{data:o}).then((t=>{s.Z.push(`/checkoutPay/${t.data.orderId}`),this.form={user:{name:"",email:"",tel:"",address:""},message:""},this.getCart()})).catch((t=>console.error(t)))}}})},2974:function(t,o,a){var e=a(6265),n=a.n(e),s=a(4301),c=a(6294),l=a(4677);const r=(0,c.Z)(),i=(0,l.Z)();o["Z"]=(0,s.Q_)("couponStore",{state:()=>({coupon_code:"",coupons:[{id:1,img:"https://imgur.com/qLKGUWI.jpg",discount:"5折",code:"diamond"},{id:2,img:"https://imgur.com/v2HbjI5.jpg",discount:"7折",code:"gold"},{id:3,img:"https://imgur.com/LBDTuiP.jpg",discount:"8折",code:"silver"}],coupon:{},draw:!1}),actions:{addCouponCode(t){this.coupon_code=t;const o="https://vue3-course-api.hexschool.io/api/kelvinlin9/coupon",a={code:`${t}`};r.isLoading=!0,n().post(o,{data:a}).then((t=>{r.PushManager(t,"加入優惠券"),i.getCart(),r.isLoading=!1,this.coupon_code=""})).catch((t=>console.error(t)))},luckyDraw(t,o){const a=Math.floor(Math.random()*(o-t+1))+t;this.coupon=this.coupons[a],this.draw=!0}}})},8778:function(t,o,a){var e=a(1120),n=a(4301),s=a(4677);const c=(0,s.Z)();o["Z"]=(0,n.Q_)("goStore",{actions:{goCart(){e.Z.push("/cart"),c.cartBoxState=!1},goProducts(){e.Z.push("/products"),c.cartBoxState=!1},goProduct(t){e.Z.push(`/product/${t}`)},goCheckout(){e.Z.push("/checkout")}}})},6294:function(t,o,a){var e=a(4301);o["Z"]=(0,e.Q_)("statusStore",{state:()=>({isLoading:[],cartLoadingItem:"",messages:[]}),actions:{PushManager(t,o="更新"){if("抽獎"===t||t.data.success){const t={style:"success",title:`${o}成功`};this.messages.push(t)}else{const a="string"===typeof t.data.message?[t.data.message]:t.data.message,e={style:"danger",title:`${o}失敗`,content:a.join("、")};this.messages.push(e)}}}})},2002:function(t,o,a){a.d(o,{Z:function(){return y}});var e=a(3396),n=a(7139);const s={class:"container py-4 checkout-bar w-75 no-print"},c={class:"row fs-5 fs-md-3 fw-bold"},l=(0,e.Uk)(" 購物"),r=(0,e._)("br",{class:"d-block d-sm-none"},null,-1),i=(0,e.Uk)("車 "),d=(0,e.Uk)(" 填寫"),u=(0,e._)("br",{class:"d-block d-sm-none"},null,-1),p=(0,e.Uk)("訂單 "),g=(0,e.Uk)(" 確認"),h=(0,e._)("br",{class:"d-block d-sm-none"},null,-1),m=(0,e.Uk)("付款 ");function _(t,o){const a=(0,e.up)("font-awesome-icon");return(0,e.wg)(),(0,e.iD)("div",s,[(0,e._)("div",c,[(0,e._)("div",{class:(0,n.C_)(["col d-flex flex-column px-2 py-3 align-items-center rounded-pill",{"bg-primary":"cart"===this.$route.name}])},[(0,e.Wm)(a,{icon:"fa-solid fa-1"}),l,r,i],2),(0,e._)("div",{class:(0,n.C_)(["col d-flex flex-column mx-2 py-3 align-items-center rounded-pill",{"bg-primary":"checkout"===this.$route.name}])},[(0,e.Wm)(a,{icon:"fa-solid fa-2"}),d,u,p],2),(0,e._)("div",{class:(0,n.C_)(["col d-flex flex-column mx-2 py-3 align-items-center rounded-pill",{"bg-primary":"checkoutPay"===this.$route.name}])},[(0,e.Wm)(a,{icon:"fa-solid fa-3"}),g,h,m],2)])])}var b=a(89);const f={},k=(0,b.Z)(f,[["render",_]]);var y=k},3001:function(t,o,a){a.r(o),a.d(o,{default:function(){return ht}});var e=a(3396),n=a(7139),s=a(9242);const c={key:0,class:"container py-3"},l={class:"text-center pt-4"},r=(0,e._)("h3",{class:"fw-bold"},"購物車還沒有任何商品，趕快挑選產品加入購物車 !",-1),i={key:1,class:"container py-3"},d=(0,e._)("div",{class:"d-flex justify-content-center"},[(0,e._)("h1",{class:"fs-2 text-center fw-bold"},"購物清單")],-1),u={class:"row mt-2"},p={class:"col"},g={class:"table align-middle"},h=(0,e._)("thead",{class:"table-primary"},[(0,e._)("tr",null,[(0,e._)("th",null,"刪除"),(0,e._)("th",null,"品名"),(0,e._)("th",{class:"d-none d-sm-block"},"圖片"),(0,e._)("th",null,"單價"),(0,e._)("th",{style:{width:"80px"}},"數量"),(0,e._)("th",null,"總價")])],-1),m=["disabled","onClick"],_=(0,e._)("i",{class:"bi bi-x"},null,-1),b=[_],f={class:"font-sm"},k=(0,e._)("br",null,null,-1),y={key:0,class:"text-secondary fw-bold"},v=(0,e.Uk)(" 已套用優惠券"),w=(0,e._)("br",null,null,-1),C=(0,e._)("br",null,null,-1),x={class:"d-none d-sm-block"},U=["src"],Z={class:"font-sm"},$=(0,e.Uk)(" NT$"),q=(0,e._)("br",{class:"d-md-none"},null,-1),L={class:"input-group input-group-sm"},D=["disabled","onChange","onUpdate:modelValue","onInput"],I={class:"font-sm"},P={key:0},z={key:1},B=(0,e._)("small",{class:"text-secondary"}," 折扣價： ",-1),N=(0,e._)("br",{class:"d-lg-none"},null,-1),S={key:0},T={colspan:"7",class:"text-end fs-3"},j={key:1},M={colspan:"7",class:"text-end fs-4"},W={key:2},Q={colspan:"7",class:"text-end text-secondary fw-bold fs-3"},H={key:0,class:"input-group mb-3"},V={key:1,class:"text-end"},F=(0,e.Uk)(" 還差 "),K={class:"fs-3"},Y=(0,e.Uk)(" 元即可參加抽獎 "),A={key:2,class:"text-end"},G=(0,e.Uk)(" 還差 "),O={class:"fs-3"},E=(0,e.Uk)(" 元即可參加抽獎 "),J={key:3,class:"d-flex justify-content-between mt-3"},R=(0,e._)("i",{class:"bi bi-caret-left-fill"},null,-1),X=(0,e.Uk)("商品列表 "),tt=[R,X],ot=(0,e.Uk)(" 填寫資料"),at=(0,e._)("i",{class:"bi bi-caret-right-fill"},null,-1),et=[ot,at];function nt(t,o,a,_,R,X){const ot=(0,e.up)("UserCheckoutBar");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(ot),0===t.cart.total?((0,e.wg)(),(0,e.iD)("div",c,[(0,e._)("div",l,[r,(0,e._)("button",{type:"button",class:"btn btn-primary btn-hover rounded-0 fw-bold btn-lg mt-5",onClick:o[0]||(o[0]=(...o)=>t.goProducts&&t.goProducts(...o))}," 商品列表 ")])])):(0,e.kq)("",!0),0!==t.cart.total?((0,e.wg)(),(0,e.iD)("div",i,[d,(0,e._)("div",u,[(0,e._)("div",p,[(0,e._)("table",g,[h,(0,e._)("tbody",null,[t.cart.carts?((0,e.wg)(!0),(0,e.iD)(e.HY,{key:0},(0,e.Ko)(t.cart.carts,(o=>((0,e.wg)(),(0,e.iD)("tr",{key:o.id},[(0,e._)("td",null,[(0,e._)("button",{type:"button",class:"btn btn-outline-primary btn-sm",disabled:t.cartLoadingItem===o.id,onClick:a=>t.removeCartItem(o.id)},b,8,m)]),(0,e._)("td",f,[(0,e.Uk)((0,n.zw)(o.product.title),1),k,o.coupon?((0,e.wg)(),(0,e.iD)("small",y,[v,w,(0,e.Uk)(" ("+(0,n.zw)(o.final_total/o.total*100)+"% OFF)",1),C,(0,e.Uk)(" 代碼："+(0,n.zw)(o.coupon.code),1)])):(0,e.kq)("",!0)]),(0,e._)("td",x,[(0,e._)("img",{src:o.product.imageUrl,alt:"商品照片",width:"50"},null,8,U)]),(0,e._)("td",Z,[$,q,(0,e.Uk)(" "+(0,n.zw)(o.product.price),1)]),(0,e._)("td",null,[(0,e._)("div",L,[(0,e.wy)((0,e._)("input",{type:"number",class:"form-control",min:"1",disabled:o.id===t.cartLoadingItem,onChange:a=>t.updateCart(o),"onUpdate:modelValue":t=>o.qty=t,onInput:t=>o.qty=Number(t.target.value.replace(/^(0+)|[^\d]+/g,""))||1},null,40,D),[[s.nr,o.qty,void 0,{number:!0}]])])]),(0,e._)("td",I,[o.final_total===o.total?((0,e.wg)(),(0,e.iD)("div",P," NT$ "+(0,n.zw)(t.$filters.currency(o.final_total)),1)):(0,e.kq)("",!0),o.final_total!==o.total?((0,e.wg)(),(0,e.iD)("div",z,[B,N,(0,e.Uk)(" NT$ "+(0,n.zw)(t.$filters.currency(o.final_total)),1)])):(0,e.kq)("",!0)])])))),128)):(0,e.kq)("",!0)]),(0,e._)("tfoot",null,[t.cart.final_total===t.cart.total?((0,e.wg)(),(0,e.iD)("tr",S,[(0,e._)("td",T," 總計：NT$ "+(0,n.zw)(t.$filters.currency(t.cart.total)),1)])):(0,e.kq)("",!0),t.cart.final_total!==t.cart.total?((0,e.wg)(),(0,e.iD)("tr",j,[(0,e._)("td",M,[(0,e._)("del",null,"總計：NT$ "+(0,n.zw)(t.$filters.currency(t.cart.total)),1)])])):(0,e.kq)("",!0),t.cart.final_total!==t.cart.total?((0,e.wg)(),(0,e.iD)("tr",W,[(0,e._)("td",Q," 折扣價：NT$ "+(0,n.zw)(t.$filters.currency(t.cart.final_total)),1)])):(0,e.kq)("",!0)])]),0!==t.cart.total?((0,e.wg)(),(0,e.iD)("div",H,[(0,e.wy)((0,e._)("input",{type:"text",class:"form-control",placeholder:"請輸入優惠碼","aria-label":"請輸入優惠碼","aria-describedby":"button-addon","onUpdate:modelValue":o[1]||(o[1]=o=>t.coupon_code=o)},null,512),[[s.nr,t.coupon_code]]),(0,e._)("button",{class:"btn btn-outline-secondary fw-bold btn-lg",type:"button",id:"button-addon",onClick:o[2]||(o[2]=o=>t.addCouponCode(t.coupon_code))}," 套用優惠碼 ")])):(0,e.kq)("",!0),t.cart.total<3e4&&t.cart.final_total===t.cart.total?((0,e.wg)(),(0,e.iD)("div",V,[F,(0,e._)("span",K,(0,n.zw)(""+(3e4-t.cart.total)),1),Y])):(0,e.kq)("",!0),t.cart.total<3e4&&t.cart.final_total!==t.cart.total?((0,e.wg)(),(0,e.iD)("div",A,[G,(0,e._)("span",O,(0,n.zw)(""+(3e4-t.cart.final_total)),1),E])):(0,e.kq)("",!0),0!==t.cart.total?((0,e.wg)(),(0,e.iD)("div",J,[(0,e._)("button",{type:"button",class:"btn btn-primary btn-hover rounded-0 fw-bold btn-lg",onClick:o[3]||(o[3]=(...o)=>t.goProducts&&t.goProducts(...o))},tt),(0,e._)("button",{type:"button",class:"btn btn-primary btn-hover rounded-0 fw-bold btn-lg",onClick:o[4]||(o[4]=(...o)=>t.goCheckout&&t.goCheckout(...o))},et)])):(0,e.kq)("",!0)])])])):(0,e.kq)("",!0)],64)}var st=a(2002),ct=a(4301),lt=a(6294),rt=a(4677),it=a(8778),dt=a(2974),ut={components:{UserCheckoutBar:st.Z},computed:{...(0,ct.rn)(lt.Z,["cartLoadingItem"]),...(0,ct.rn)(rt.Z,["cart"]),...(0,ct.Ah)(dt.Z,["coupon_code"])},methods:{...(0,ct.nv)(rt.Z,["getCart","updateCart","removeCartItem"]),...(0,ct.nv)(it.Z,["goProducts","goCheckout"]),...(0,ct.nv)(dt.Z,["addCouponCode"])}},pt=a(89);const gt=(0,pt.Z)(ut,[["render",nt]]);var ht=gt}}]);
//# sourceMappingURL=1.d830caa3.js.map