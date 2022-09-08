"use strict";(self["webpackChunkhw1"]=self["webpackChunkhw1"]||[]).push([[916],{4677:function(t,a,e){var o=e(6265),s=e.n(o),c=e(1120),n=e(4301),i=e(6294);const d=(0,i.Z)();a["Z"]=(0,n.Q_)("cartStore",{state:()=>({cart:{},cartNum:0,cartBoxState:!1,form:{user:{name:"",email:"",tel:"",address:""},message:""}}),actions:{getCart(){const t="https://vue3-course-api.hexschool.io/api/kelvinlin9/cart";d.isLoading=!0,s().get(t).then((t=>{this.cartNum=t.data.data.carts.length,this.cart=t.data.data,d.isLoading=!1})).catch((t=>console.error(t)))},updateCart(t){const a=`https://vue3-course-api.hexschool.io/api/kelvinlin9/cart/${t.id}`;d.isLoading=!0,d.cartLoadingItem=t.id;const e={product_id:t.product_id,qty:t.qty};s().put(a,{data:e}).then((t=>{d.cartLoadingItem="",this.getCart()})).catch((t=>console.error(t)))},removeCartItem(t){d.cartLoadingItem=t;const a=`https://vue3-course-api.hexschool.io/api/kelvinlin9/cart/${t}`;d.isLoading=!0,s()["delete"](a).then((t=>{console.log(t),d.PushManager(t,"移除購物車品項"),d.cartLoadingItem="",this.getCart(),d.isLoading=!1})).catch((t=>console.error(t)))},addCart(t,a=1){const e="https://vue3-course-api.hexschool.io/api/kelvinlin9/cart";d.cartLoadingItem=t;const o={product_id:t,qty:a};s().post(e,{data:o}).then((t=>{d.cartLoadingItem="",this.getCart(),d.PushManager(t,"加入購物車")})).catch((t=>console.error(t)))},cartBoxToggle(){this.cartBoxState=!this.cartBoxState},gotoPay(){const t="https://vue3-course-api.hexschool.io/api/kelvinlin9/order",a=this.form;s().post(t,{data:a}).then((t=>{c.Z.push(`/checkoutPay/${t.data.orderId}`),this.form={user:{name:"",email:"",tel:"",address:""},message:""},this.getCart()})).catch((t=>console.error(t)))}}})},4371:function(t,a,e){var o=e(4301),s=e(6294);const c=(0,s.Z)();a["Z"]=(0,o.Q_)("copyStore",{actions:{copyCode(t){navigator.clipboard.writeText(t).then((()=>{c.PushManager("抽獎","複製折扣碼")}))},copyCodeOld(t){const a=document.getElementById(t),e=window.getSelection();e.removeAllRanges();const o=document.createRange();o.selectNodeContents(a),e.addRange(o),document.execCommand("copy")}}})},2974:function(t,a,e){var o=e(6265),s=e.n(o),c=e(4301),n=e(6294),i=e(4677);const d=(0,n.Z)(),r=(0,i.Z)();a["Z"]=(0,c.Q_)("couponStore",{state:()=>({coupon_code:"",coupons:[{id:1,img:"https://imgur.com/qLKGUWI.jpg",discount:"5折",code:"diamond"},{id:2,img:"https://imgur.com/v2HbjI5.jpg",discount:"7折",code:"gold"},{id:3,img:"https://imgur.com/LBDTuiP.jpg",discount:"8折",code:"silver"}],coupon:{},draw:!1}),actions:{addCouponCode(t){this.coupon_code=t;const a="https://vue3-course-api.hexschool.io/api/kelvinlin9/coupon",e={code:`${t}`};d.isLoading=!0,s().post(a,{data:e}).then((t=>{d.PushManager(t,"加入優惠券"),r.getCart(),d.isLoading=!1,this.coupon_code=""})).catch((t=>console.error(t)))},luckyDraw(t,a){const e=Math.floor(Math.random()*(a-t+1))+t;this.coupon=this.coupons[e],this.draw=!0}}})},6294:function(t,a,e){var o=e(4301);a["Z"]=(0,o.Q_)("statusStore",{state:()=>({isLoading:[],cartLoadingItem:"",messages:[]}),actions:{PushManager(t,a="更新"){if("抽獎"===t||t.data.success){const t={style:"success",title:`${a}成功`};this.messages.push(t)}else{const e="string"===typeof t.data.message?[t.data.message]:t.data.message,o={style:"danger",title:`${a}失敗`,content:e.join("、")};this.messages.push(o)}}}})},5916:function(t,a,e){e.r(a),e.d(a,{default:function(){return S}});var o=e(3396),s=e(7139);const c=t=>((0,o.dD)("data-v-c19fced0"),t=t(),(0,o.Cn)(),t),n=(0,o.uE)('<div class="couponBanner" data-v-c19fced0><div class="bg-dark bg-opacity-75 w-100 h-100 d-flex align-items-center" data-v-c19fced0><h1 class="w-100 d-flex align-items-center justify-content-center" data-v-c19fced0><span class="me-2 fs-1 fw-bolder text-white" data-v-c19fced0>幸運抽獎</span><span class="fs-4 text-primary align-self-end" data-v-c19fced0>/ Lucky Draw</span></h1></div></div>',1),i={class:"container py-5 d-flex flex-column align-items-center"},d={key:0,class:"la-square-jelly-box my-5"},r=c((()=>(0,o._)("img",{src:"https://imgur.com/YS7AfNK.jpg",alt:"寶箱","data-aos":"fade-down","data-aos-duration":"1500"},null,-1))),l=c((()=>(0,o._)("img",{src:"https://imgur.com/YS7AfNK.jpg",alt:"陰影","data-aos":"zoom-in","data-aos-duration":"1500"},null,-1))),u=[r,l],p={key:1,class:"mt-1"},g=["src"],h={key:3,class:"d-flex flex-column align-items-center"},m={class:"fs-5 text-center fw-bold"},f=(0,o.Uk)(" 恭喜獲得 "),v={class:"fs-1"},w=(0,o.Uk)(" 優惠"),y=c((()=>(0,o._)("br",null,null,-1))),k=(0,o.Uk)(" 折扣碼: "),x={id:"couponCode"};function C(t,a,e,c,r,l){return(0,o.wg)(),(0,o.iD)(o.HY,null,[n,(0,o._)("div",i,[t.draw?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",d,u)),t.draw?((0,o.wg)(),(0,o.iD)("div",p,[(0,o._)("img",{src:t.coupon.img,class:"img-fluid",alt:"獎品"},null,8,g)])):(0,o.kq)("",!0),t.draw?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:2,type:"button",class:"btn btn-outline-primary text-dark fw-bold fs-5",onClick:a[0]||(a[0]=a=>t.luckyDraw(0,2))}," 抽獎 ")),t.draw?((0,o.wg)(),(0,o.iD)("div",h,[(0,o._)("div",m,[f,(0,o._)("span",v,(0,s.zw)(t.coupon.discount),1),w,y,k,(0,o._)("span",x,(0,s.zw)(t.coupon.code),1)]),(0,o._)("button",{type:"button",class:"btn btn-outline-primary text-dark fw-bold fs-6 mt-3",onClick:a[1]||(a[1]=a=>t.copyCode(t.coupon.code))}," 複製折扣碼 ")])):(0,o.kq)("",!0)])],64)}var _=e(4301),b=e(2974),L=e(4371),I={computed:{...(0,_.rn)(b.Z,["coupon","draw"])},methods:{...(0,_.nv)(b.Z,["luckyDraw"]),...(0,_.nv)(L.Z,["copyCode"])}},Z=e(89);const D=(0,Z.Z)(I,[["render",C],["__scopeId","data-v-c19fced0"]]);var S=D}}]);
//# sourceMappingURL=916.880d89d7.js.map