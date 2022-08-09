"use strict";(self["webpackChunkhw1"]=self["webpackChunkhw1"]||[]).push([[164],{4677:function(t,a,o){var e=o(6265),n=o.n(e),s=o(4301),c=o(6294);const l=(0,c.Z)();a["Z"]=(0,s.Q_)("cartStore",{state:()=>({cart:{},cartNum:0,cartBoxState:!1}),actions:{getCart(){const t="https://vue3-course-api.hexschool.io/api/kelvinlin9/cart";l.isLoading=!0,n().get(t).then((t=>{console.log("GETC!!!!!!!!!!!!!!!!"),this.cartNum=t.data.data.carts.length,console.log("this.cartNum",this.cartNum),this.cart=t.data.data,l.isLoading=!1})).catch((t=>console.error(t)))},updateCart(t){const a=`https://vue3-course-api.hexschool.io/api/kelvinlin9/cart/${t.id}`;l.isLoading=!0,l.cartLoadingItem=t.id;const o={product_id:t.product_id,qty:t.qty};n().put(a,{data:o}).then((t=>{l.cartLoadingItem="",this.getCart()})).catch((t=>console.error(t)))},removeCartItem(t){l.cartLoadingItem=t;const a=`https://vue3-course-api.hexschool.io/api/kelvinlin9/cart/${t}`;l.isLoading=!0,n()["delete"](a).then((t=>{console.log(t),l.PushManager(t,"移除購物車品項"),l.cartLoadingItem="",this.getCart(),l.isLoading=!1})).catch((t=>console.error(t)))},addCart(t,a=1){const o="https://vue3-course-api.hexschool.io/api/kelvinlin9/cart";l.cartLoadingItem=t;const e={product_id:t,qty:a};n().post(o,{data:e}).then((t=>{l.cartLoadingItem="",this.getCart(),l.PushManager(t,"加入購物車")})).catch((t=>console.error(t)))},cartBoxToggle(){this.cartBoxState=!this.cartBoxState}}})},8778:function(t,a,o){var e=o(1120),n=o(4301),s=o(4677);const c=(0,s.Z)();a["Z"]=(0,n.Q_)("goStore",{actions:{goCart(){e.Z.push("/cart"),c.cartBoxState=!1},goProducts(){e.Z.push("/products"),c.cartBoxState=!1},goProduct(t){e.Z.push(`/product/${t}`)},goCheckout(){e.Z.push("/checkout")}}})},6294:function(t,a,o){var e=o(4301);a["Z"]=(0,e.Q_)("statusStore",{state:()=>({isLoading:[],cartLoadingItem:"",messages:[]}),actions:{PushManager(t,a="更新"){if(t.data.success){const t={style:"success",title:`${a}成功`};this.messages.push(t)}else{const o="string"===typeof t.data.message?[t.data.message]:t.data.message,e={style:"danger",title:`${a}失敗`,content:o.join("、")};this.messages.push(e)}}}})},7164:function(t,a,o){o.r(a),o.d(a,{default:function(){return ut}});var e=o(3396),n=o(7139),s=o(9242);const c=t=>((0,e.dD)("data-v-4648a580"),t=t(),(0,e.Cn)(),t),l=(0,e.uE)('<div class="cartBanner" data-v-4648a580><div class="bg-dark bg-opacity-75 w-100 h-100 d-flex align-items-center" data-v-4648a580><h1 class="w-100 d-flex align-items-center justify-content-center" data-v-4648a580><span class="me-2 fs-1 fw-bolder text-white" data-v-4648a580>首購享66折</span><span class="fs-3 text-primary align-self-end" data-v-4648a580>/ 結帳輸入優惠碼：666666</span></h1></div></div>',1),r={class:"container my-5"},i=c((()=>(0,e._)("div",{class:"d-flex justify-content-center"},[(0,e._)("h1",{class:"fs-2 text-center fw-bold"},"購物清單")],-1))),d={class:"row mt-4"},u={class:"col"},p={class:"table align-middle"},g=c((()=>(0,e._)("thead",{class:"table-primary"},[(0,e._)("tr",null,[(0,e._)("th",null,"刪除"),(0,e._)("th",null,"品名"),(0,e._)("th",{class:"d-none d-sm-block"},"圖片"),(0,e._)("th",null,"單價"),(0,e._)("th",{style:{width:"80px"}},"數量"),(0,e._)("th",null,"總價")])],-1))),h=["disabled","onClick"],_=c((()=>(0,e._)("i",{class:"bi bi-x"},null,-1))),b=[_],m={class:"font-sm"},f=c((()=>(0,e._)("br",null,null,-1))),k={key:0,class:"text-secondary fw-bold"},v=(0,e.Uk)(" 已套用優惠券"),y=c((()=>(0,e._)("br",null,null,-1))),w=c((()=>(0,e._)("br",null,null,-1))),C={class:"d-none d-sm-block"},x=["src"],L={class:"font-sm"},$=(0,e.Uk)(" NT$"),q=c((()=>(0,e._)("br",{class:"d-md-none"},null,-1))),I={class:"input-group input-group-sm"},Z=["disabled","onChange","onUpdate:modelValue","onInput"],D={class:"font-sm"},U={key:0},N={key:1},P=c((()=>(0,e._)("small",{class:"text-secondary"}," 折扣價： ",-1))),z=c((()=>(0,e._)("br",{class:"d-lg-none"},null,-1))),S={key:0},T={colspan:"7",class:"text-end fs-3"},B={key:1},j={colspan:"7",class:"text-end fs-4"},M={key:2},Q={colspan:"7",class:"text-end text-secondary fw-bold fs-3"},V={key:0,class:"input-group mb-3 input-group-sm"},E={class:"input-group-append"},F={key:1,class:"d-flex justify-content-between mt-5"},G=c((()=>(0,e._)("i",{class:"bi bi-caret-left-fill"},null,-1))),H=(0,e.Uk)("商品列表 "),Y=[G,H],A=(0,e.Uk)(" 填寫資料"),K=c((()=>(0,e._)("i",{class:"bi bi-caret-right-fill"},null,-1))),O=[A,K],W={key:2,class:"text-center pt-4"},J=c((()=>(0,e._)("h3",{class:"fw-bold"},"購物車還沒有任何商品，趕快挑選產品加入購物車 !",-1)));function R(t,a,o,c,_,G){const H=(0,e.up)("Loading");return(0,e.wg)(),(0,e.iD)(e.HY,null,[l,(0,e.Wm)(H,{active:t.isLoading},null,8,["active"]),(0,e._)("div",r,[i,(0,e._)("div",d,[(0,e._)("div",u,[(0,e._)("table",p,[g,(0,e._)("tbody",null,[t.cart.carts?((0,e.wg)(!0),(0,e.iD)(e.HY,{key:0},(0,e.Ko)(t.cart.carts,(a=>((0,e.wg)(),(0,e.iD)("tr",{key:a.id},[(0,e._)("td",null,[(0,e._)("button",{type:"button",class:"btn btn-outline-primary btn-sm",disabled:t.cartLoadingItem===a.id,onClick:o=>t.removeCartItem(a.id)},b,8,h)]),(0,e._)("td",m,[(0,e.Uk)((0,n.zw)(a.product.title),1),f,a.coupon?((0,e.wg)(),(0,e.iD)("small",k,[v,y,(0,e.Uk)(" ("+(0,n.zw)(a.final_total/a.total*100)+"% OFF)",1),w,(0,e.Uk)(" 代碼："+(0,n.zw)(a.coupon.code),1)])):(0,e.kq)("",!0)]),(0,e._)("td",C,[(0,e._)("img",{src:a.product.imageUrl,alt:"商品照片",width:"50"},null,8,x)]),(0,e._)("td",L,[$,q,(0,e.Uk)(" "+(0,n.zw)(a.product.price),1)]),(0,e._)("td",null,[(0,e._)("div",I,[(0,e.wy)((0,e._)("input",{type:"number",class:"form-control",min:"1",disabled:a.id===t.cartLoadingItem,onChange:o=>t.updateCart(a),"onUpdate:modelValue":t=>a.qty=t,onInput:t=>a.qty=Number(t.target.value.replace(/^(0+)|[^\d]+/g,""))||1},null,40,Z),[[s.nr,a.qty,void 0,{number:!0}]])])]),(0,e._)("td",D,[a.final_total===a.total?((0,e.wg)(),(0,e.iD)("div",U," NT$ "+(0,n.zw)(t.$filters.currency(a.final_total)),1)):(0,e.kq)("",!0),a.final_total!==a.total?((0,e.wg)(),(0,e.iD)("div",N,[P,z,(0,e.Uk)(" NT$ "+(0,n.zw)(t.$filters.currency(a.final_total)),1)])):(0,e.kq)("",!0)])])))),128)):(0,e.kq)("",!0)]),(0,e._)("tfoot",null,[t.cart.final_total==t.cart.total?((0,e.wg)(),(0,e.iD)("tr",S,[(0,e._)("td",T," 總計：NT$ "+(0,n.zw)(t.$filters.currency(t.cart.total)),1)])):(0,e.kq)("",!0),t.cart.final_total!==t.cart.total?((0,e.wg)(),(0,e.iD)("tr",B,[(0,e._)("td",j,[(0,e._)("del",null,"總計：NT$ "+(0,n.zw)(t.$filters.currency(t.cart.total)),1)])])):(0,e.kq)("",!0),t.cart.final_total!==t.cart.total?((0,e.wg)(),(0,e.iD)("tr",M,[(0,e._)("td",Q," 折扣價：NT$ "+(0,n.zw)(t.$filters.currency(t.cart.final_total)),1)])):(0,e.kq)("",!0)])]),0!==t.cart.total?((0,e.wg)(),(0,e.iD)("div",V,[(0,e.wy)((0,e._)("input",{type:"text",class:"form-control",placeholder:"請輸入優惠碼","onUpdate:modelValue":a[0]||(a[0]=a=>t.coupon_code=a)},null,512),[[s.nr,t.coupon_code]]),(0,e._)("div",E,[(0,e._)("button",{class:"btn btn-outline-secondary fw-bold btn-lg",type:"button",onClick:a[1]||(a[1]=a=>t.addCouponCode(t.coupon_code))}," 套用優惠碼 ")])])):(0,e.kq)("",!0),0!==t.cart.total?((0,e.wg)(),(0,e.iD)("div",F,[(0,e._)("button",{type:"button",class:"btn btn-primary btn-hover rounded-0 fw-bold btn-lg",onClick:a[2]||(a[2]=(...a)=>t.goProducts&&t.goProducts(...a))},Y),(0,e._)("button",{type:"button",class:"btn btn-primary btn-hover rounded-0 fw-bold btn-lg",onClick:a[3]||(a[3]=(...a)=>t.goCheckout&&t.goCheckout(...a))},O)])):(0,e.kq)("",!0),0===t.cart.total?((0,e.wg)(),(0,e.iD)("div",W,[J,(0,e._)("button",{type:"button",class:"btn btn-dark btn-hover rounded-0 mt-5",onClick:a[4]||(a[4]=(...a)=>t.goProducts&&t.goProducts(...a))}," 查看產品 Go ")])):(0,e.kq)("",!0)])])])],64)}var X=o(4301),tt=o(6294),at=o(4677),ot=o(8778),et=o(6265),nt=o.n(et);const st=(0,tt.Z)(),ct=(0,at.Z)();var lt=(0,X.Q_)("couponStore",{state:()=>({coupon_code:""}),actions:{addCouponCode(t){this.coupon_code=t;const a="https://vue3-course-api.hexschool.io/api/kelvinlin9/coupon",o={code:`${t}`};st.isLoading=!0,nt().post(a,{data:o}).then((t=>{st.PushManager(t,"加入優惠券"),ct.getCart(),st.isLoading=!1,this.coupon_code=""})).catch((t=>console.error(t)))}}}),rt={computed:{...(0,X.rn)(tt.Z,["isLoading","cartLoadingItem"]),...(0,X.rn)(at.Z,["cart"]),...(0,X.Ah)(lt,["coupon_code"])},methods:{...(0,X.nv)(at.Z,["getCart","updateCart","removeCartItem"]),...(0,X.nv)(ot.Z,["goProducts","goCheckout"]),...(0,X.nv)(lt,["addCouponCode"])}},it=o(89);const dt=(0,it.Z)(rt,[["render",R],["__scopeId","data-v-4648a580"]]);var ut=dt}}]);
//# sourceMappingURL=164.7b264841.js.map