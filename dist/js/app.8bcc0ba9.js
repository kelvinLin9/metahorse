(function(){"use strict";var e={7352:function(e,n,t){var o=t(9242),r=t(4301),a=t(6265),i=t.n(a),c=t(6423),u=t(8125),d=t(8321),l=t(2234);u.vI.add(l.mdU,d.BC0,l.z0T,d.szZ,d.J4t,d.eFW,d.yYj,d.v07,d.u_e,d.HTU,d.GTE);var f=t(7749),s=t(6553),p=t.n(s),h=t(6905),m=t.n(h),b=t(6216),v=t(5708),g=t(3990),y=t(579),w=t(2389),O=t(3396);function P(e,n){const t=(0,O.up)("router-view");return(0,O.wg)(),(0,O.j4)(t)}var k=t(89);const C={},j=(0,k.Z)(C,[["render",P]]);var E=j,_=t(1120);function S(e){const n=parseInt(e,10);return`${n.toFixed(0).replace(/./g,((e,n,t)=>n&&"."!==e&&(t.length-n)%3===0?`, ${e}`.replace(/\s/g,""):e))}`}function x(e){const n=new Date(1e3*e);return n.toLocaleDateString()}const T={style:{color:"#f6d860"},class:"la-pacman la-2x"},U=(0,O._)("div",null,null,-1),A=(0,O._)("div",null,null,-1),N=(0,O._)("div",null,null,-1),Z=(0,O._)("div",null,null,-1),B=(0,O._)("div",null,null,-1),F=(0,O._)("div",null,null,-1),L=[U,A,N,Z,B,F];function M(e,n){return(0,O.wg)(),(0,O.iD)("div",T,L)}const I={},D=(0,k.Z)(I,[["render",M]]);var z=D;const G=(0,o.ri)(E);G.config.globalProperties.$filters={date:x,currency:S};const W={confirmButtonColor:"#41b882",cancelButtonColor:"#ff7674"};Object.keys(g.ZP).forEach((e=>{(0,v.aH)(e,g.ZP[e])})),(0,v.jQ)({generateMessage:(0,y.NC)({zh_TW:w}),validateOnInput:!0}),(0,y.i_)("zh_TW");const H=(0,r.WB)();G.AOS=new(m().init),G.use(m()),G.component("UserLoading",z),G.component("Loading",b.Z),G.component("VForm",v.l0),G.component("VField",v.gN),G.component("ErrorMessage",v.Bc),G.component("font-awesome-icon",f.GN),G.use(p(),W),G.use(H),G.use(c.Z,i()),G.use(_.Z),G.mount("#app")},1120:function(e,n,t){var o=t(678);const r=[{path:"/",name:"index",component:()=>Promise.all([t.e(755),t.e(895),t.e(771)]).then(t.bind(t,7089)),children:[{path:"",name:"home",component:()=>t.e(914).then(t.bind(t,5702))},{path:"products",name:"products",component:()=>t.e(654).then(t.bind(t,2654))},{path:"UserCoupon",name:"UserCoupon",component:()=>t.e(932).then(t.bind(t,2932))},{path:"cart",name:"cart",component:()=>t.e(9).then(t.bind(t,3009))},{path:"favorite",name:"favorite",component:()=>t.e(885).then(t.bind(t,6885))},{path:"UserSearchOrder",name:"UserSearchOrder",component:()=>t.e(329).then(t.bind(t,9329))},{path:"favorite",name:"favorite",component:()=>t.e(885).then(t.bind(t,6885))},{path:"login",name:"login",component:()=>t.e(210).then(t.bind(t,7210))},{path:"checkout",name:"checkout",component:()=>t.e(786).then(t.bind(t,5786))},{path:"UserGame",name:"UserGame",component:()=>Promise.all([t.e(755),t.e(339),t.e(661)]).then(t.bind(t,3661))},{path:"product/:productId",name:"product",component:()=>t.e(63).then(t.bind(t,7063))},{path:"checkoutPay/:orderId",name:"checkoutPay",component:()=>Promise.all([t.e(755),t.e(339),t.e(986)]).then(t.bind(t,986))}]},{path:"/dashboard",component:()=>Promise.all([t.e(755),t.e(895),t.e(541)]).then(t.bind(t,830)),children:[{path:"products",component:()=>Promise.all([t.e(755),t.e(339),t.e(81)]).then(t.bind(t,2081))},{path:"orders",component:()=>Promise.all([t.e(755),t.e(339),t.e(558)]).then(t.bind(t,7755))},{path:"coupons",component:()=>Promise.all([t.e(755),t.e(339),t.e(620)]).then(t.bind(t,7620))}]},{path:"/:pathMatch(.*)*",name:"404Page",component:()=>t.e(747).then(t.bind(t,4747))}],a=(0,o.p7)({history:(0,o.r5)(),routes:r});n["Z"]=a}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,loaded:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,o,r,a){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var c=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(l--,1);var d=r();void 0!==d&&(n=d)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{9:"c6de1ade",63:"6114fbaa",81:"0d5c0217",210:"03101720",329:"ea7c022d",339:"a6bdb4bc",541:"54d60528",558:"e99fd114",620:"082babd1",654:"78470f7b",661:"3f10636c",747:"fcb14913",755:"020c2d70",771:"ada868a9",786:"79e76eba",885:"914497f0",895:"b0666ce4",914:"b96973c7",932:"96aefa0e",986:"73a4b03d"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{9:"cd14cfc8",63:"aeb4cd9f",329:"f395a11a",541:"8afd2609",654:"9bf191e9",661:"97ab057d",747:"b58cf1f6",771:"affe9f8d",786:"7f568d26",885:"17c516ad",914:"0be675e3",932:"aeff32c7",986:"9ec175a5"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="hw1:";t.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var c,u;if(void 0!==a)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var f=d[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==n+a){c=f;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+a),c.src=o),e[o]=[r];var s=function(n,t){c.onerror=c.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=s.bind(null,c.onerror),c.onload=s.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/metahorse/dist/"}(),function(){var e=function(e,n,t,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=c,r.parentNode.removeChild(r),o(u)}};return r.onerror=r.onload=a,r.href=n,document.head.appendChild(r),r},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===n))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===n)return r}},o=function(o){return new Promise((function(r,a){var i=t.miniCssF(o),c=t.p+i;if(n(i,c))return r();e(o,c,r,a)}))},r={143:0};t.f.miniCss=function(e,n){var t={9:1,63:1,329:1,541:1,654:1,661:1,747:1,771:1,786:1,885:1,914:1,932:1,986:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=a);var i=t.p+t.u(n),c=new Error,u=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;c.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,r[1](c)}};t.l(i,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],c=o[1],u=o[2],d=0;if(i.some((function(n){return 0!==e[n]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(u)var l=u(t)}for(n&&n(o);d<i.length;d++)a=i[d],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},o=self["webpackChunkhw1"]=self["webpackChunkhw1"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(7352)}));o=t.O(o)})();
//# sourceMappingURL=app.8bcc0ba9.js.map