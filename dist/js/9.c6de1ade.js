"use strict";(self["webpackChunkhw1"]=self["webpackChunkhw1"]||[]).push([[9],{4677:function(t,o,a){var e=a(6265),n=a.n(e),l=a(1120),c=a(4301),s=a(6294);const r=(0,s.Z)();o["Z"]=(0,c.Q_)("cartStore",{state:()=>({cart:{},cartNum:0,cartBoxState:!1,form:{user:{name:"",email:"",tel:"",address:""},message:""}}),actions:{getCart(){const t="https://vue3-course-api.hexschool.io/api/kelvinlin9/cart";r.isLoading=!0,n().get(t).then((t=>{this.cartNum=t.data.data.carts.length,this.cart=t.data.data,r.isLoading=!1})).catch((t=>console.error(t)))},updateCart(t){const o=`https://vue3-course-api.hexschool.io/api/kelvinlin9/cart/${t.id}`;r.isLoading=!0,r.cartLoadingItem=t.id;const a={product_id:t.product_id,qty:t.qty};n().put(o,{data:a}).then((t=>{r.cartLoadingItem="",this.getCart()})).catch((t=>console.error(t)))},removeCartItem(t){r.cartLoadingItem=t;const o=`https://vue3-course-api.hexschool.io/api/kelvinlin9/cart/${t}`;r.isLoading=!0,n()["delete"](o).then((t=>{console.log(t),r.PushManager(t,"移除購物車品項"),r.cartLoadingItem="",this.getCart(),r.isLoading=!1})).catch((t=>console.error(t)))},addCart(t,o=1){const a="https://vue3-course-api.hexschool.io/api/kelvinlin9/cart";r.cartLoadingItem=t;const e={product_id:t,qty:o};n().post(a,{data:e}).then((t=>{r.cartLoadingItem="",this.getCart(),r.PushManager(t,"加入購物車")})).catch((t=>console.error(t)))},cartBoxToggle(){this.cartBoxState=!this.cartBoxState},gotoPay(){const t="https://vue3-course-api.hexschool.io/api/kelvinlin9/order",o=this.form;n().post(t,{data:o}).then((t=>{l.Z.push(`/checkoutPay/${t.data.orderId}`),this.form={user:{name:"",email:"",tel:"",address:""},message:""},this.getCart()})).catch((t=>console.error(t)))}}})},2974:function(t,o,a){var e=a(6265),n=a.n(e),l=a(4301),c=a(6294),s=a(4677);const r=(0,c.Z)(),i=(0,s.Z)();o["Z"]=(0,l.Q_)("couponStore",{state:()=>({coupon_code:"",coupons:[{id:1,img:"https://imgur.com/v2HbjI5.jpg",discount:"5折",code:"diamond"},{id:2,img:"https://imgur.com/qLKGUWI.jpg",discount:"7折",code:"gold"},{id:3,img:"https://imgur.com/LBDTuiP.jpg",discount:"8折",code:"silver"}],coupon:{},draw:!1}),actions:{addCouponCode(t){this.coupon_code=t;const o="https://vue3-course-api.hexschool.io/api/kelvinlin9/coupon",a={code:`${t}`};r.isLoading=!0,n().post(o,{data:a}).then((t=>{r.PushManager(t,"加入優惠券"),i.getCart(),r.isLoading=!1,this.coupon_code=""})).catch((t=>console.error(t)))},luckyDraw(t,o){const a=Math.floor(Math.random()*(o-t+1))+t;this.coupon=this.coupons[a],this.draw=!0},copyCouponCode(){const t=document.getElementById("couponCode");console.log(t.textContent);const o=window.getSelection();o.removeAllRanges();const a=document.createRange();a.selectNodeContents(t),o.addRange(a),navigator.clipboard.writeText(t.textContent)}}})},8778:function(t,o,a){var e=a(1120),n=a(4301),l=a(4677);const c=(0,l.Z)();o["Z"]=(0,n.Q_)("goStore",{actions:{goCart(){e.Z.push("/cart"),c.cartBoxState=!1},goProducts(){e.Z.push("/products"),c.cartBoxState=!1},goProduct(t){e.Z.push(`/product/${t}`)},goCheckout(){e.Z.push("/checkout")}}})},6294:function(t,o,a){var e=a(4301);o["Z"]=(0,e.Q_)("statusStore",{state:()=>({isLoading:[],cartLoadingItem:"",messages:[]}),actions:{PushManager(t,o="更新"){if("抽獎"==t||t.data.success){const t={style:"success",title:`${o}成功`};this.messages.push(t)}else{const a="string"===typeof t.data.message?[t.data.message]:t.data.message,e={style:"danger",title:`${o}失敗`,content:a.join("、")};this.messages.push(e)}}}})},2584:function(t,o,a){a.d(o,{Z:function(){return T}});var e=a(3396),n=a(7139);const l=t=>((0,e.dD)("data-v-a3716e04"),t=t(),(0,e.Cn)(),t),c={class:"container py-4 checkout-bar w-75"},s={class:"row fs-5 fs-md-3 fw-bold"},r={key:0,style:{color:"#f4696b"},class:"la-ball-climbing-dot la-dark"},i=l((()=>(0,e._)("div",null,null,-1))),d=l((()=>(0,e._)("div",null,null,-1))),u=l((()=>(0,e._)("div",null,null,-1))),p=l((()=>(0,e._)("div",null,null,-1))),g=[i,d,u,p],m=(0,e.Uk)(" 購物車 "),h={key:1,style:{color:"#f4696b"},class:"la-ball-climbing-dot la-dark"},_=l((()=>(0,e._)("div",null,null,-1))),k=l((()=>(0,e._)("div",null,null,-1))),b=l((()=>(0,e._)("div",null,null,-1))),f=l((()=>(0,e._)("div",null,null,-1))),v=[_,k,b,f],y=(0,e.Uk)(" 填寫"),w=l((()=>(0,e._)("br",{class:"d-block d-sm-none"},null,-1))),C=(0,e.Uk)("訂單 "),x={key:2,style:{color:"#f4696b"},class:"la-ball-climbing-dot la-dark"},U=l((()=>(0,e._)("div",null,null,-1))),$=l((()=>(0,e._)("div",null,null,-1))),q=l((()=>(0,e._)("div",null,null,-1))),D=l((()=>(0,e._)("div",null,null,-1))),Z=[U,$,q,D],I=(0,e.Uk)(" 確認"),L=l((()=>(0,e._)("br",{class:"d-block d-sm-none"},null,-1))),P=(0,e.Uk)("付款 ");function z(t,o){const a=(0,e.up)("font-awesome-icon");return(0,e.wg)(),(0,e.iD)("div",c,[(0,e._)("div",s,["cart"===this.$route.name?((0,e.wg)(),(0,e.iD)("div",r,g)):(0,e.kq)("",!0),(0,e._)("div",{class:(0,n.C_)(["col d-flex flex-column px-2 py-3 align-items-center rounded-pill",{"bg-primary":"cart"===this.$route.name}])},[(0,e.Wm)(a,{icon:"fa-solid fa-1"}),m],2),"checkout"===this.$route.name?((0,e.wg)(),(0,e.iD)("div",h,v)):(0,e.kq)("",!0),(0,e._)("div",{class:(0,n.C_)(["col d-flex flex-column mx-2 py-3 align-items-center rounded-pill",{"bg-primary":"checkout"===this.$route.name}])},[(0,e.Wm)(a,{icon:"fa-solid fa-2"}),y,w,C],2),"checkoutPay"===this.$route.name?((0,e.wg)(),(0,e.iD)("div",x,Z)):(0,e.kq)("",!0),(0,e._)("div",{class:(0,n.C_)(["col d-flex flex-column mx-2 py-3 align-items-center rounded-pill",{"bg-primary":"checkoutPay"===this.$route.name}])},[(0,e.Wm)(a,{icon:"fa-solid fa-3"}),I,L,P],2)])])}var B=a(89);const N={},S=(0,B.Z)(N,[["render",z],["__scopeId","data-v-a3716e04"]]);var T=S},3009:function(t,o,a){a.r(o),a.d(o,{default:function(){return _t}});var e=a(3396),n=a(7139),l=a(9242);const c=t=>((0,e.dD)("data-v-783f32c6"),t=t(),(0,e.Cn)(),t),s={key:0,class:"container my-3"},r=c((()=>(0,e._)("div",{class:"d-flex justify-content-center"},[(0,e._)("h1",{class:"fs-2 text-center fw-bold"},"購物清單")],-1))),i={class:"row mt-2"},d={class:"col"},u={class:"table align-middle"},p=c((()=>(0,e._)("thead",{class:"table-primary"},[(0,e._)("tr",null,[(0,e._)("th",null,"刪除"),(0,e._)("th",null,"品名"),(0,e._)("th",{class:"d-none d-sm-block"},"圖片"),(0,e._)("th",null,"單價"),(0,e._)("th",{style:{width:"80px"}},"數量"),(0,e._)("th",null,"總價")])],-1))),g=["disabled","onClick"],m=c((()=>(0,e._)("i",{class:"bi bi-x"},null,-1))),h=[m],_={class:"font-sm"},k=c((()=>(0,e._)("br",null,null,-1))),b={key:0,class:"text-secondary fw-bold"},f=(0,e.Uk)(" 已套用優惠券"),v=c((()=>(0,e._)("br",null,null,-1))),y=c((()=>(0,e._)("br",null,null,-1))),w={class:"d-none d-sm-block"},C=["src"],x={class:"font-sm"},U=(0,e.Uk)(" NT$"),$=c((()=>(0,e._)("br",{class:"d-md-none"},null,-1))),q={class:"input-group input-group-sm"},D=["disabled","onChange","onUpdate:modelValue","onInput"],Z={class:"font-sm"},I={key:0},L={key:1},P=c((()=>(0,e._)("small",{class:"text-secondary"}," 折扣價： ",-1))),z=c((()=>(0,e._)("br",{class:"d-lg-none"},null,-1))),B={key:0},N={colspan:"7",class:"text-end fs-3"},S={key:1},T={colspan:"7",class:"text-end fs-4"},j={key:2},M={colspan:"7",class:"text-end text-secondary fw-bold fs-3"},W={key:0,class:"input-group mb-3 input-group-sm"},Q={class:"input-group-append"},H={key:1,class:"text-end"},R=(0,e.Uk)(" 還差 "),V={class:"fs-3"},A=(0,e.Uk)(" 元即可參加抽獎 "),F={key:2,class:"text-end"},K=(0,e.Uk)(" 還差 "),Y={class:"fs-3"},E=(0,e.Uk)(" 元即可參加抽獎 "),G={key:3,class:"d-flex justify-content-between mt-3"},O=c((()=>(0,e._)("i",{class:"bi bi-caret-left-fill"},null,-1))),J=(0,e.Uk)("商品列表 "),X=[O,J],tt=(0,e.Uk)(" 填寫資料"),ot=c((()=>(0,e._)("i",{class:"bi bi-caret-right-fill"},null,-1))),at=[tt,ot],et={key:1,class:"container my-3"},nt={class:"text-center pt-4"},lt=c((()=>(0,e._)("h3",{class:"fw-bold"},"購物車還沒有任何商品，趕快挑選產品加入購物車 !",-1)));function ct(t,o,a,c,m,O){const J=(0,e.up)("UserCheckoutBar");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(J),0!==t.cart.total?((0,e.wg)(),(0,e.iD)("div",s,[r,(0,e._)("div",i,[(0,e._)("div",d,[(0,e._)("table",u,[p,(0,e._)("tbody",null,[t.cart.carts?((0,e.wg)(!0),(0,e.iD)(e.HY,{key:0},(0,e.Ko)(t.cart.carts,(o=>((0,e.wg)(),(0,e.iD)("tr",{key:o.id},[(0,e._)("td",null,[(0,e._)("button",{type:"button",class:"btn btn-outline-primary btn-sm",disabled:t.cartLoadingItem===o.id,onClick:a=>t.removeCartItem(o.id)},h,8,g)]),(0,e._)("td",_,[(0,e.Uk)((0,n.zw)(o.product.title),1),k,o.coupon?((0,e.wg)(),(0,e.iD)("small",b,[f,v,(0,e.Uk)(" ("+(0,n.zw)(o.final_total/o.total*100)+"% OFF)",1),y,(0,e.Uk)(" 代碼："+(0,n.zw)(o.coupon.code),1)])):(0,e.kq)("",!0)]),(0,e._)("td",w,[(0,e._)("img",{src:o.product.imageUrl,alt:"商品照片",width:"50"},null,8,C)]),(0,e._)("td",x,[U,$,(0,e.Uk)(" "+(0,n.zw)(o.product.price),1)]),(0,e._)("td",null,[(0,e._)("div",q,[(0,e.wy)((0,e._)("input",{type:"number",class:"form-control",min:"1",disabled:o.id===t.cartLoadingItem,onChange:a=>t.updateCart(o),"onUpdate:modelValue":t=>o.qty=t,onInput:t=>o.qty=Number(t.target.value.replace(/^(0+)|[^\d]+/g,""))||1},null,40,D),[[l.nr,o.qty,void 0,{number:!0}]])])]),(0,e._)("td",Z,[o.final_total===o.total?((0,e.wg)(),(0,e.iD)("div",I," NT$ "+(0,n.zw)(t.$filters.currency(o.final_total)),1)):(0,e.kq)("",!0),o.final_total!==o.total?((0,e.wg)(),(0,e.iD)("div",L,[P,z,(0,e.Uk)(" NT$ "+(0,n.zw)(t.$filters.currency(o.final_total)),1)])):(0,e.kq)("",!0)])])))),128)):(0,e.kq)("",!0)]),(0,e._)("tfoot",null,[t.cart.final_total===t.cart.total?((0,e.wg)(),(0,e.iD)("tr",B,[(0,e._)("td",N," 總計：NT$ "+(0,n.zw)(t.$filters.currency(t.cart.total)),1)])):(0,e.kq)("",!0),t.cart.final_total!==t.cart.total?((0,e.wg)(),(0,e.iD)("tr",S,[(0,e._)("td",T,[(0,e._)("del",null,"總計：NT$ "+(0,n.zw)(t.$filters.currency(t.cart.total)),1)])])):(0,e.kq)("",!0),t.cart.final_total!==t.cart.total?((0,e.wg)(),(0,e.iD)("tr",j,[(0,e._)("td",M," 折扣價：NT$ "+(0,n.zw)(t.$filters.currency(t.cart.final_total)),1)])):(0,e.kq)("",!0)])]),0!==t.cart.total?((0,e.wg)(),(0,e.iD)("div",W,[(0,e.wy)((0,e._)("input",{type:"text",class:"form-control",placeholder:"請輸入優惠碼","onUpdate:modelValue":o[0]||(o[0]=o=>t.coupon_code=o)},null,512),[[l.nr,t.coupon_code]]),(0,e._)("div",Q,[(0,e._)("button",{class:"btn btn-outline-secondary fw-bold btn-lg",type:"button",onClick:o[1]||(o[1]=o=>t.addCouponCode(t.coupon_code))}," 套用優惠碼 ")])])):(0,e.kq)("",!0),t.cart.total<3e4&&t.cart.final_total===t.cart.total?((0,e.wg)(),(0,e.iD)("div",H,[R,(0,e._)("span",V,(0,n.zw)(""+(3e4-t.cart.total)),1),A])):(0,e.kq)("",!0),t.cart.total<3e4&&t.cart.final_total!==t.cart.total?((0,e.wg)(),(0,e.iD)("div",F,[K,(0,e._)("span",Y,(0,n.zw)(""+(3e4-t.cart.final_total)),1),E])):(0,e.kq)("",!0),0!==t.cart.total?((0,e.wg)(),(0,e.iD)("div",G,[(0,e._)("button",{type:"button",class:"btn btn-primary btn-hover rounded-0 fw-bold btn-lg",onClick:o[2]||(o[2]=(...o)=>t.goProducts&&t.goProducts(...o))},X),(0,e._)("button",{type:"button",class:"btn btn-primary btn-hover rounded-0 fw-bold btn-lg",onClick:o[3]||(o[3]=(...o)=>t.goCheckout&&t.goCheckout(...o))},at)])):(0,e.kq)("",!0)])])])):(0,e.kq)("",!0),0===t.cart.total?((0,e.wg)(),(0,e.iD)("div",et,[(0,e._)("div",nt,[lt,(0,e._)("button",{type:"button",class:"btn btn-primary btn-hover rounded-0 fw-bold btn-lg mt-5",onClick:o[4]||(o[4]=(...o)=>t.goProducts&&t.goProducts(...o))}," 商品列表 ")])])):(0,e.kq)("",!0)],64)}var st=a(2584),rt=a(4301),it=a(6294),dt=a(4677),ut=a(8778),pt=a(2974),gt={components:{UserCheckoutBar:st.Z},computed:{...(0,rt.rn)(it.Z,["cartLoadingItem"]),...(0,rt.rn)(dt.Z,["cart"]),...(0,rt.Ah)(pt.Z,["coupon_code"])},methods:{...(0,rt.nv)(dt.Z,["getCart","updateCart","removeCartItem"]),...(0,rt.nv)(ut.Z,["goProducts","goCheckout"]),...(0,rt.nv)(pt.Z,["addCouponCode"])}},mt=a(89);const ht=(0,mt.Z)(gt,[["render",ct],["__scopeId","data-v-783f32c6"]]);var _t=ht}}]);
//# sourceMappingURL=9.c6de1ade.js.map