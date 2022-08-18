"use strict";(self["webpackChunkhw1"]=self["webpackChunkhw1"]||[]).push([[932],{4677:function(t,o,e){var a=e(6265),s=e.n(a),n=e(1120),c=e(4301),i=e(6294);const r=(0,i.Z)();o["Z"]=(0,c.Q_)("cartStore",{state:()=>({cart:{},cartNum:0,cartBoxState:!1,form:{user:{name:"",email:"",tel:"",address:""},message:""}}),actions:{getCart(){const t="https://vue3-course-api.hexschool.io/api/kelvinlin9/cart";r.isLoading=!0,s().get(t).then((t=>{console.log("GETC!!!!!!!!!!!!!!!!"),this.cartNum=t.data.data.carts.length,this.cart=t.data.data,r.isLoading=!1})).catch((t=>console.error(t)))},updateCart(t){const o=`https://vue3-course-api.hexschool.io/api/kelvinlin9/cart/${t.id}`;r.isLoading=!0,r.cartLoadingItem=t.id;const e={product_id:t.product_id,qty:t.qty};s().put(o,{data:e}).then((t=>{r.cartLoadingItem="",this.getCart()})).catch((t=>console.error(t)))},removeCartItem(t){r.cartLoadingItem=t;const o=`https://vue3-course-api.hexschool.io/api/kelvinlin9/cart/${t}`;r.isLoading=!0,s()["delete"](o).then((t=>{console.log(t),r.PushManager(t,"移除購物車品項"),r.cartLoadingItem="",this.getCart(),r.isLoading=!1})).catch((t=>console.error(t)))},addCart(t,o=1){const e="https://vue3-course-api.hexschool.io/api/kelvinlin9/cart";r.cartLoadingItem=t;const a={product_id:t,qty:o};s().post(e,{data:a}).then((t=>{r.cartLoadingItem="",this.getCart(),r.PushManager(t,"加入購物車")})).catch((t=>console.error(t)))},cartBoxToggle(){this.cartBoxState=!this.cartBoxState},gotoPay(){const t="https://vue3-course-api.hexschool.io/api/kelvinlin9/order",o=this.form;s().post(t,{data:o}).then((t=>{n.Z.push(`/checkoutPay/${t.data.orderId}`),this.form={user:{name:"",email:"",tel:"",address:""},message:""},this.getCart()})).catch((t=>console.error(t)))}}})},4371:function(t,o,e){var a=e(4301),s=e(6294);const n=(0,s.Z)();o["Z"]=(0,a.Q_)("goStore",{actions:{copyCode(t){console.log(t),navigator.clipboard.writeText(t).then((t=>{console.log("res",t),n.PushManager("抽獎","複製折扣碼")}))}}})},2974:function(t,o,e){var a=e(6265),s=e.n(a),n=e(4301),c=e(6294),i=e(4677);const r=(0,c.Z)(),d=(0,i.Z)();o["Z"]=(0,n.Q_)("couponStore",{state:()=>({coupon_code:"",coupons:[{id:1,img:"https://imgur.com/v2HbjI5.jpg",discount:"5折",code:"diamond"},{id:2,img:"https://imgur.com/qLKGUWI.jpg",discount:"7折",code:"gold"},{id:3,img:"https://imgur.com/LBDTuiP.jpg",discount:"8折",code:"silver"}],coupon:{},draw:!1}),actions:{addCouponCode(t){this.coupon_code=t;const o="https://vue3-course-api.hexschool.io/api/kelvinlin9/coupon",e={code:`${t}`};r.isLoading=!0,s().post(o,{data:e}).then((t=>{r.PushManager(t,"加入優惠券"),d.getCart(),r.isLoading=!1,this.coupon_code=""})).catch((t=>console.error(t)))},luckyDraw(t,o){const e=Math.floor(Math.random()*(o-t+1))+t;this.coupon=this.coupons[e],this.draw=!0},copyCouponCode(){const t=document.getElementById("couponCode");console.log(t.textContent);const o=window.getSelection();o.removeAllRanges();const e=document.createRange();e.selectNodeContents(t),o.addRange(e),navigator.clipboard.writeText(t.textContent)}}})},6294:function(t,o,e){var a=e(4301);o["Z"]=(0,a.Q_)("statusStore",{state:()=>({isLoading:[],cartLoadingItem:"",messages:[]}),actions:{PushManager(t,o="更新"){if("抽獎"==t||t.data.success){const t={style:"success",title:`${o}成功`};this.messages.push(t)}else{const e="string"===typeof t.data.message?[t.data.message]:t.data.message,a={style:"danger",title:`${o}失敗`,content:e.join("、")};this.messages.push(a)}}}})},2932:function(t,o,e){e.r(o),e.d(o,{default:function(){return S}});var a=e(3396),s=e(7139);const n=t=>((0,a.dD)("data-v-be9a7318"),t=t(),(0,a.Cn)(),t),c=(0,a.uE)('<div class="couponBanner" data-v-be9a7318><div class="bg-dark bg-opacity-75 w-100 h-100 d-flex align-items-center" data-v-be9a7318><h1 class="w-100 d-flex align-items-center justify-content-center" data-v-be9a7318><span class="me-2 fs-1 fw-bolder text-white" data-v-be9a7318>幸運抽獎</span><span class="fs-4 text-primary align-self-end" data-v-be9a7318>/ Lucky Draw</span></h1></div></div>',1),i={class:"container py-5 d-flex flex-column align-items-center"},r={key:0,class:"la-square-jelly-box my-5"},d=n((()=>(0,a._)("img",{src:"https://imgur.com/YS7AfNK.jpg",alt:"寶箱"},null,-1))),l=n((()=>(0,a._)("img",{src:"https://imgur.com/YS7AfNK.jpg",alt:"陰影"},null,-1))),u=[d,l],g={key:1,class:"mt-1"},p=["src"],h={key:3,class:"d-flex flex-column align-items-center"},m={class:"fs-5 text-center fw-bold"},v=(0,a.Uk)(" 恭喜獲得 "),f={class:"fs-1"},w=(0,a.Uk)(" 優惠"),y=n((()=>(0,a._)("br",null,null,-1))),k=(0,a.Uk)(" 折扣碼: "),C={id:"couponCode"};function b(t,o,e,n,d,l){return(0,a.wg)(),(0,a.iD)(a.HY,null,[c,(0,a._)("div",i,[t.draw?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",r,u)),t.draw?((0,a.wg)(),(0,a.iD)("div",g,[(0,a._)("img",{src:t.coupon.img,class:"img-fluid",alt:"獎品"},null,8,p)])):(0,a.kq)("",!0),t.draw?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("button",{key:2,type:"button",class:"btn btn-outline-primary text-dark fw-bold fs-5 mt-5",onClick:o[0]||(o[0]=o=>t.luckyDraw(0,2))}," 抽獎 ")),t.draw?((0,a.wg)(),(0,a.iD)("div",h,[(0,a._)("div",m,[v,(0,a._)("span",f,(0,s.zw)(t.coupon.discount),1),w,y,k,(0,a._)("span",C,(0,s.zw)(t.coupon.code),1)]),(0,a._)("button",{type:"button",class:"btn btn-outline-primary text-dark fw-bold fs-6 mt-3",onClick:o[1]||(o[1]=o=>t.copyCode(t.coupon.code))}," 複製折扣碼 ")])):(0,a.kq)("",!0)])],64)}var x=e(4301),_=e(2974),L=e(4371),I={computed:{...(0,x.rn)(_.Z,["coupon","draw"])},methods:{...(0,x.nv)(_.Z,["luckyDraw","copyCouponCode"]),...(0,x.nv)(L.Z,["copyCode"])}},Z=e(89);const D=(0,Z.Z)(I,[["render",b],["__scopeId","data-v-be9a7318"]]);var S=D}}]);
//# sourceMappingURL=932.4a30523d.js.map