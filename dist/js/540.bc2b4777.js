"use strict";(self["webpackChunkhw1"]=self["webpackChunkhw1"]||[]).push([[540],{4677:function(t,a,o){var e=o(6265),s=o.n(e),c=o(1120),n=o(4301),i=o(6294);const r=(0,i.Z)();a["Z"]=(0,n.Q_)("cartStore",{state:()=>({cart:{},cartNum:0,cartBoxState:!1,form:{user:{name:"",email:"",tel:"",address:""},message:""}}),actions:{getCart(){const t="https://vue3-course-api.hexschool.io/api/kelvinlin9/cart";r.isLoading=!0,s().get(t).then((t=>{this.cartNum=t.data.data.carts.length,this.cart=t.data.data,r.isLoading=!1})).catch((t=>console.error(t)))},updateCart(t){const a=`https://vue3-course-api.hexschool.io/api/kelvinlin9/cart/${t.id}`;r.isLoading=!0,r.cartLoadingItem=t.id;const o={product_id:t.product_id,qty:t.qty};s().put(a,{data:o}).then((t=>{r.cartLoadingItem="",this.getCart()})).catch((t=>console.error(t)))},removeCartItem(t){r.cartLoadingItem=t;const a=`https://vue3-course-api.hexschool.io/api/kelvinlin9/cart/${t}`;r.isLoading=!0,s()["delete"](a).then((t=>{console.log(t),r.PushManager(t,"移除購物車品項"),r.cartLoadingItem="",this.getCart(),r.isLoading=!1})).catch((t=>console.error(t)))},addCart(t,a=1){const o="https://vue3-course-api.hexschool.io/api/kelvinlin9/cart";r.cartLoadingItem=t;const e={product_id:t,qty:a};s().post(o,{data:e}).then((t=>{r.cartLoadingItem="",this.getCart(),r.PushManager(t,"加入購物車")})).catch((t=>console.error(t)))},cartBoxToggle(){this.cartBoxState=!this.cartBoxState},gotoPay(){const t="https://vue3-course-api.hexschool.io/api/kelvinlin9/order",a=this.form;s().post(t,{data:a}).then((t=>{c.Z.push(`/checkoutPay/${t.data.orderId}`),this.form={user:{name:"",email:"",tel:"",address:""},message:""},this.getCart()})).catch((t=>console.error(t)))}}})},4371:function(t,a,o){var e=o(4301),s=o(6294);const c=(0,s.Z)();a["Z"]=(0,e.Q_)("copyStore",{actions:{copyCode(t){navigator.clipboard.writeText(t).then((()=>{c.PushManager("抽獎","複製折扣碼")}))},copyCodeOld(t){const a=document.getElementById(t),o=window.getSelection();o.removeAllRanges();const e=document.createRange();e.selectNodeContents(a),o.addRange(e),document.execCommand("copy")}}})},2974:function(t,a,o){var e=o(6265),s=o.n(e),c=o(4301),n=o(6294),i=o(4677);const r=(0,n.Z)(),d=(0,i.Z)();a["Z"]=(0,c.Q_)("couponStore",{state:()=>({coupon_code:"",coupons:[{id:1,img:"https://imgur.com/qLKGUWI.jpg",discount:"5折",code:"diamond"},{id:2,img:"https://imgur.com/v2HbjI5.jpg",discount:"7折",code:"gold"},{id:3,img:"https://imgur.com/LBDTuiP.jpg",discount:"8折",code:"silver"}],coupon:{},draw:!1}),actions:{addCouponCode(t){this.coupon_code=t;const a="https://vue3-course-api.hexschool.io/api/kelvinlin9/coupon",o={code:`${t}`};r.isLoading=!0,s().post(a,{data:o}).then((t=>{r.PushManager(t,"加入優惠券"),d.getCart(),r.isLoading=!1,this.coupon_code=""})).catch((t=>console.error(t)))},luckyDraw(t,a){const o=Math.floor(Math.random()*(a-t+1))+t;this.coupon=this.coupons[o],this.draw=!0}}})},6294:function(t,a,o){var e=o(4301);a["Z"]=(0,e.Q_)("statusStore",{state:()=>({isLoading:[],cartLoadingItem:"",messages:[]}),actions:{PushManager(t,a="更新"){if("抽獎"==t||t.data.success){const t={style:"success",title:`${a}成功`};this.messages.push(t)}else{const o="string"===typeof t.data.message?[t.data.message]:t.data.message,e={style:"danger",title:`${a}失敗`,content:o.join("、")};this.messages.push(e)}}}})},2540:function(t,a,o){o.r(a),o.d(a,{default:function(){return S}});var e=o(3396),s=o(7139);const c=t=>((0,e.dD)("data-v-29f9759c"),t=t(),(0,e.Cn)(),t),n=(0,e.uE)('<div class="couponBanner" data-v-29f9759c><div class="bg-dark bg-opacity-75 w-100 h-100 d-flex align-items-center" data-v-29f9759c><h1 class="w-100 d-flex align-items-center justify-content-center" data-v-29f9759c><span class="me-2 fs-1 fw-bolder text-white" data-v-29f9759c>幸運抽獎</span><span class="fs-4 text-primary align-self-end" data-v-29f9759c>/ Lucky Draw</span></h1></div></div>',1),i={class:"container py-5 d-flex flex-column align-items-center"},r={key:0,class:"la-square-jelly-box my-5"},d=c((()=>(0,e._)("img",{src:"https://imgur.com/YS7AfNK.jpg",alt:"寶箱","data-aos":"fade-down","data-aos-duration":"1500"},null,-1))),l=c((()=>(0,e._)("img",{src:"https://imgur.com/YS7AfNK.jpg",alt:"陰影","data-aos":"zoom-in","data-aos-duration":"1500"},null,-1))),u=[d,l],p={key:1,class:"mt-1"},g=["src"],h={key:3,class:"d-flex flex-column align-items-center"},m={class:"fs-5 text-center fw-bold"},f=(0,e.Uk)(" 恭喜獲得 "),v={class:"fs-1"},w=(0,e.Uk)(" 優惠"),y=c((()=>(0,e._)("br",null,null,-1))),k=(0,e.Uk)(" 折扣碼: "),x={id:"couponCode"};function C(t,a,o,c,d,l){return(0,e.wg)(),(0,e.iD)(e.HY,null,[n,(0,e._)("div",i,[t.draw?(0,e.kq)("",!0):((0,e.wg)(),(0,e.iD)("div",r,u)),t.draw?((0,e.wg)(),(0,e.iD)("div",p,[(0,e._)("img",{src:t.coupon.img,class:"img-fluid",alt:"獎品"},null,8,g)])):(0,e.kq)("",!0),t.draw?(0,e.kq)("",!0):((0,e.wg)(),(0,e.iD)("button",{key:2,type:"button",class:"btn btn-outline-primary text-dark fw-bold fs-5",onClick:a[0]||(a[0]=a=>t.luckyDraw(0,2))}," 抽獎 ")),t.draw?((0,e.wg)(),(0,e.iD)("div",h,[(0,e._)("div",m,[f,(0,e._)("span",v,(0,s.zw)(t.coupon.discount),1),w,y,k,(0,e._)("span",x,(0,s.zw)(t.coupon.code),1)]),(0,e._)("button",{type:"button",class:"btn btn-outline-primary text-dark fw-bold fs-6 mt-3",onClick:a[1]||(a[1]=a=>t.copyCode(t.coupon.code))}," 複製折扣碼 ")])):(0,e.kq)("",!0)])],64)}var _=o(4301),b=o(2974),L=o(4371),I={computed:{...(0,_.rn)(b.Z,["coupon","draw"])},methods:{...(0,_.nv)(b.Z,["luckyDraw"]),...(0,_.nv)(L.Z,["copyCode"])}},Z=o(89);const D=(0,Z.Z)(I,[["render",C],["__scopeId","data-v-29f9759c"]]);var S=D}}]);
//# sourceMappingURL=540.bc2b4777.js.map