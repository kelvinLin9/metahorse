(self["webpackChunkhw1"]=self["webpackChunkhw1"]||[]).push([[895],{434:function(t,e,s){s(6699),s(1703),
/*!
  * Bootstrap collapse.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(e,n){t.exports=n(s(3581),s(4130),s(6221),s(7317),s(1884))}(0,(function(t,e,s,n,i){"use strict";const a=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},o=a(t),r=a(e),l=a(s),c=a(n),d=a(i),h=t=>null===t||void 0===t?`${t}`:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),u=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let s=t.getAttribute("href");if(!s||!s.includes("#")&&!s.startsWith("."))return null;s.includes("#")&&!s.startsWith("#")&&(s=`#${s.split("#")[1]}`),e=s&&"#"!==s?s.trim():null}return e},g=t=>{const e=u(t);return e&&document.querySelector(e)?e:null},f=t=>{const e=u(t);return e?document.querySelector(e):null},m=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),_=t=>m(t)?t.jquery?t[0]:t:"string"===typeof t&&t.length>0?document.querySelector(t):null,p=(t,e,s)=>{Object.keys(s).forEach((n=>{const i=s[n],a=e[n],o=a&&m(a)?"element":h(a);if(!new RegExp(i).test(o))throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${i}".`)}))},y=t=>{t.offsetHeight},b=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},w=[],C=t=>{"loading"===document.readyState?(w.length||document.addEventListener("DOMContentLoaded",(()=>{w.forEach((t=>t()))})),w.push(t)):t()},v=t=>{C((()=>{const e=b();if(e){const s=t.NAME,n=e.fn[s];e.fn[s]=t.jQueryInterface,e.fn[s].Constructor=t,e.fn[s].noConflict=()=>(e.fn[s]=n,t.jQueryInterface)}}))},L="collapse",$="bs.collapse",A=`.${$}`,I=".data-api",T={toggle:!0,parent:null},E={toggle:"boolean",parent:"(null|element)"},S=`show${A}`,k=`shown${A}`,x=`hide${A}`,j=`hidden${A}`,D=`click${A}${I}`,q="show",N="collapse",M="collapsing",O="collapsed",Q=`:scope .${N} .${N}`,B="collapse-horizontal",P="width",Z="height",z=".collapse.show, .collapse.collapsing",H='[data-bs-toggle="collapse"]';class K extends d.default{constructor(t,e){super(t),this._isTransitioning=!1,this._config=this._getConfig(e),this._triggerArray=[];const s=c.default.find(H);for(let n=0,i=s.length;n<i;n++){const t=s[n],e=g(t),i=c.default.find(e).filter((t=>t===this._element));null!==e&&i.length&&(this._selector=e,this._triggerArray.push(t))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return T}static get NAME(){return L}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t,e=[];if(this._config.parent){const t=c.default.find(Q,this._config.parent);e=c.default.find(z,this._config.parent).filter((e=>!t.includes(e)))}const s=c.default.findOne(this._selector);if(e.length){const n=e.find((t=>s!==t));if(t=n?K.getInstance(n):null,t&&t._isTransitioning)return}const n=r.default.trigger(this._element,S);if(n.defaultPrevented)return;e.forEach((e=>{s!==e&&K.getOrCreateInstance(e,{toggle:!1}).hide(),t||o.default.set(e,$,null)}));const i=this._getDimension();this._element.classList.remove(N),this._element.classList.add(M),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const a=()=>{this._isTransitioning=!1,this._element.classList.remove(M),this._element.classList.add(N,q),this._element.style[i]="",r.default.trigger(this._element,k)},l=i[0].toUpperCase()+i.slice(1),d=`scroll${l}`;this._queueCallback(a,this._element,!0),this._element.style[i]=`${this._element[d]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const t=r.default.trigger(this._element,x);if(t.defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,y(this._element),this._element.classList.add(M),this._element.classList.remove(N,q);const s=this._triggerArray.length;for(let i=0;i<s;i++){const t=this._triggerArray[i],e=f(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(M),this._element.classList.add(N),r.default.trigger(this._element,j)};this._element.style[e]="",this._queueCallback(n,this._element,!0)}_isShown(t=this._element){return t.classList.contains(q)}_getConfig(t){return t={...T,...l.default.getDataAttributes(this._element),...t},t.toggle=Boolean(t.toggle),t.parent=_(t.parent),p(L,t,E),t}_getDimension(){return this._element.classList.contains(B)?P:Z}_initializeChildren(){if(!this._config.parent)return;const t=c.default.find(Q,this._config.parent);c.default.find(H,this._config.parent).filter((e=>!t.includes(e))).forEach((t=>{const e=f(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}))}_addAriaAndCollapsedClass(t,e){t.length&&t.forEach((t=>{e?t.classList.remove(O):t.classList.add(O),t.setAttribute("aria-expanded",e)}))}static jQueryInterface(t){return this.each((function(){const e={};"string"===typeof t&&/show|hide/.test(t)&&(e.toggle=!1);const s=K.getOrCreateInstance(this,e);if("string"===typeof t){if("undefined"===typeof s[t])throw new TypeError(`No method named "${t}"`);s[t]()}}))}}return r.default.on(document,D,H,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=g(this),s=c.default.find(e);s.forEach((t=>{K.getOrCreateInstance(t,{toggle:!1}).toggle()}))})),v(K),K}))},8803:function(t,e,s){s(6699),s(1703),
/*!
  * Bootstrap toast.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(e,n){t.exports=n(s(4130),s(6221),s(1884))}(0,(function(t,e,s){"use strict";const n=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},i=n(t),a=n(e),o=n(s),r=t=>null===t||void 0===t?`${t}`:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),l=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let s=t.getAttribute("href");if(!s||!s.includes("#")&&!s.startsWith("."))return null;s.includes("#")&&!s.startsWith("#")&&(s=`#${s.split("#")[1]}`),e=s&&"#"!==s?s.trim():null}return e},c=t=>{const e=l(t);return e?document.querySelector(e):null},d=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),h=(t,e,s)=>{Object.keys(s).forEach((n=>{const i=s[n],a=e[n],o=a&&d(a)?"element":r(a);if(!new RegExp(i).test(o))throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${i}".`)}))},u=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||("undefined"!==typeof t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))),g=t=>{t.offsetHeight},f=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},m=[],_=t=>{"loading"===document.readyState?(m.length||document.addEventListener("DOMContentLoaded",(()=>{m.forEach((t=>t()))})),m.push(t)):t()},p=t=>{_((()=>{const e=f();if(e){const s=t.NAME,n=e.fn[s];e.fn[s]=t.jQueryInterface,e.fn[s].Constructor=t,e.fn[s].noConflict=()=>(e.fn[s]=n,t.jQueryInterface)}}))},y=(t,e="hide")=>{const s=`click.dismiss${t.EVENT_KEY}`,n=t.NAME;i.default.on(document,s,`[data-bs-dismiss="${n}"]`,(function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),u(this))return;const i=c(this)||this.closest(`.${n}`),a=t.getOrCreateInstance(i);a[e]()}))},b="toast",w="bs.toast",C=`.${w}`,v=`mouseover${C}`,L=`mouseout${C}`,$=`focusin${C}`,A=`focusout${C}`,I=`hide${C}`,T=`hidden${C}`,E=`show${C}`,S=`shown${C}`,k="fade",x="hide",j="show",D="showing",q={animation:"boolean",autohide:"boolean",delay:"number"},N={animation:!0,autohide:!0,delay:5e3};class M extends o.default{constructor(t,e){super(t),this._config=this._getConfig(e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return q}static get Default(){return N}static get NAME(){return b}show(){const t=i.default.trigger(this._element,E);if(t.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(k);const e=()=>{this._element.classList.remove(D),i.default.trigger(this._element,S),this._maybeScheduleHide()};this._element.classList.remove(x),g(this._element),this._element.classList.add(j),this._element.classList.add(D),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(j))return;const t=i.default.trigger(this._element,I);if(t.defaultPrevented)return;const e=()=>{this._element.classList.add(x),this._element.classList.remove(D),this._element.classList.remove(j),i.default.trigger(this._element,T)};this._element.classList.add(D),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(j)&&this._element.classList.remove(j),super.dispose()}_getConfig(t){return t={...N,...a.default.getDataAttributes(this._element),..."object"===typeof t&&t?t:{}},h(b,t,this.constructor.DefaultType),t}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e;break}if(e)return void this._clearTimeout();const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){i.default.on(this._element,v,(t=>this._onInteraction(t,!0))),i.default.on(this._element,L,(t=>this._onInteraction(t,!1))),i.default.on(this._element,$,(t=>this._onInteraction(t,!0))),i.default.on(this._element,A,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=M.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return y(M),p(M),M}))},4677:function(t,e,s){"use strict";var n=s(6265),i=s.n(n),a=s(1120),o=s(4301),r=s(6294);const l=(0,r.Z)();e["Z"]=(0,o.Q_)("cartStore",{state:()=>({cart:{},cartNum:0,cartBoxState:!1,form:{user:{name:"",email:"",tel:"",address:""},message:""}}),actions:{getCart(){const t="https://vue3-course-api.hexschool.io/api/kelvinlin9/cart";l.isLoading=!0,i().get(t).then((t=>{this.cartNum=t.data.data.carts.length,this.cart=t.data.data,l.isLoading=!1})).catch((t=>console.error(t)))},updateCart(t){const e=`https://vue3-course-api.hexschool.io/api/kelvinlin9/cart/${t.id}`;l.isLoading=!0,l.cartLoadingItem=t.id;const s={product_id:t.product_id,qty:t.qty};i().put(e,{data:s}).then((t=>{l.cartLoadingItem="",this.getCart()})).catch((t=>console.error(t)))},removeCartItem(t){l.cartLoadingItem=t;const e=`https://vue3-course-api.hexschool.io/api/kelvinlin9/cart/${t}`;l.isLoading=!0,i()["delete"](e).then((t=>{console.log(t),l.PushManager(t,"移除購物車品項"),l.cartLoadingItem="",this.getCart(),l.isLoading=!1})).catch((t=>console.error(t)))},addCart(t,e=1){const s="https://vue3-course-api.hexschool.io/api/kelvinlin9/cart";l.cartLoadingItem=t;const n={product_id:t,qty:e};i().post(s,{data:n}).then((t=>{l.cartLoadingItem="",this.getCart(),l.PushManager(t,"加入購物車")})).catch((t=>console.error(t)))},cartBoxToggle(){this.cartBoxState=!this.cartBoxState},gotoPay(){const t="https://vue3-course-api.hexschool.io/api/kelvinlin9/order",e=this.form;i().post(t,{data:e}).then((t=>{a.Z.push(`/checkoutPay/${t.data.orderId}`),this.form={user:{name:"",email:"",tel:"",address:""},message:""},this.getCart()})).catch((t=>console.error(t)))}}})},6294:function(t,e,s){"use strict";var n=s(4301);e["Z"]=(0,n.Q_)("statusStore",{state:()=>({isLoading:[],cartLoadingItem:"",messages:[]}),actions:{PushManager(t,e="更新"){if("抽獎"==t||t.data.success){const t={style:"success",title:`${e}成功`};this.messages.push(t)}else{const s="string"===typeof t.data.message?[t.data.message]:t.data.message,n={style:"danger",title:`${e}失敗`,content:s.join("、")};this.messages.push(n)}}}})},3003:function(t,e,s){"use strict";s.d(e,{Z:function(){return L}});var n=s(3396),i=s(7139);function a(t,e,s,a,o,r){const l=(0,n.up)("Toast");return(0,n.wg)(),(0,n.iD)("div",{class:(0,i.C_)(["toast-container",{"toast-a":!t.cartBoxState,"toast-b":t.cartBoxState}])},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.messages,((t,e)=>((0,n.wg)(),(0,n.j4)(l,{key:e,msg:t},null,8,["msg"])))),128))],2)}const o={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},r={class:"toast-header"},l={class:"me-auto fs-5"},c=(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),d={key:0,class:"toast-body"};function h(t,e,s,a,h,u){return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",r,[(0,n._)("span",{class:(0,i.C_)([`bg-${s.msg.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,n._)("strong",l,(0,i.zw)(s.msg.title),1),c]),s.msg.content?((0,n.wg)(),(0,n.iD)("div",d,(0,i.zw)(s.msg.content),1)):(0,n.kq)("",!0)],512)}var u=s(8803),g=s.n(u),f={props:["msg"],mounted(){const t=this.$refs.toast,e=new(g())(t,{delay:6e3});e.show()}},m=s(89);const _=(0,m.Z)(f,[["render",h]]);var p=_,y=s(4301),b=s(6294),w=s(4677),C={components:{Toast:p},setup(){const t=(0,b.Z)(),{messages:e}=(0,y.Jk)(t);return{messages:e}},computed:{...(0,y.rn)(w.Z,["cartBoxState"])}};const v=(0,m.Z)(C,[["render",a],["__scopeId","data-v-77cc88b1"]]);var L=v}}]);
//# sourceMappingURL=895.86882c53.js.map