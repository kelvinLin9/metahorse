"use strict";(self["webpackChunkhw1"]=self["webpackChunkhw1"]||[]).push([[977],{3362:function(a,t,s){s.r(t),s.d(t,{default:function(){return O}});var e=s(3396);const o={key:0,class:"user-loading position-absolute top-50 start-50 translate-middle"},n={class:"container-fluid position-relative min-height milkyWay"};function r(a,t,s,r,i,l){const u=(0,e.up)("AdminNavbar"),c=(0,e.up)("UserLoading"),d=(0,e.up)("router-view"),p=(0,e.up)("ToastMessages"),v=(0,e.up)("UserFooter");return(0,e.wg)(),(0,e.iD)(e.HY,null,[((0,e.wg)(),(0,e.j4)(u,{key:a.$route.path})),a.isLoading?((0,e.wg)(),(0,e.iD)("div",o,[(0,e.Wm)(c)])):(0,e.kq)("",!0),(0,e._)("div",n,[(0,e.Wm)(d)]),(0,e.Wm)(p),(0,e.Wm)(v)],64)}function i(a){return{all:a=a||new Map,on:function(t,s){var e=a.get(t);e?e.push(s):a.set(t,[s])},off:function(t,s){var e=a.get(t);e&&(s?e.splice(e.indexOf(s)>>>0,1):a.set(t,[]))},emit:function(t,s){var e=a.get(t);e&&e.slice().map((function(a){a(s)})),(e=a.get("*"))&&e.slice().map((function(a){a(t,s)}))}}}const l=i();var u=l,c=s(371),d=s(3003),p=s(7139),v=s(9242);const h={class:"navbar sticky-top navbar-expand-lg navbar-dark bg-dark"},g={class:"container-fluid"},m=(0,e.uE)('<a class="navbar-brand" href="#" data-v-39236b82><span class="text-warning f-kalam fs-2" data-v-39236b82>MetaHorse</span><img src="https://i.imgur.com/61qkafr.jpg" alt="logo" width="50" class="logo" data-v-39236b82></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" data-v-39236b82><span class="navbar-toggler-icon" data-v-39236b82></span></button>',2),b={class:"collapse navbar-collapse ms-5",id:"navbarNavAltMarkup"},f={class:"navbar-nav"},k={class:"nav-item"},_=(0,e.Uk)("訂單"),w={class:"nav-item"},x=(0,e.Uk)("產品"),N={class:"nav-item"},$=(0,e.Uk)("優惠券"),C={class:"nav-item"};function M(a,t,s,o,n,r){const i=(0,e.up)("RouterLink"),l=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("nav",h,[(0,e._)("div",g,[m,(0,e._)("div",b,[(0,e._)("ul",f,[(0,e._)("li",k,[(0,e.Wm)(i,{to:"/dashboard/order",class:(0,p.C_)(["nav-link fs-5",{"text-warning":"/dashboard/order"===n.routeName}])},{default:(0,e.w5)((()=>[_])),_:1},8,["class"])]),(0,e._)("li",w,[(0,e.Wm)(l,{to:"/dashboard/products",class:(0,p.C_)(["nav-link fs-5",{"text-warning":"/dashboard/products"===n.routeName}])},{default:(0,e.w5)((()=>[x])),_:1},8,["class"])]),(0,e._)("li",N,[(0,e.Wm)(l,{to:"/dashboard/coupons",class:(0,p.C_)(["nav-link fs-5",{"text-warning":"/dashboard/coupons"===n.routeName}])},{default:(0,e.w5)((()=>[$])),_:1},8,["class"])]),(0,e._)("li",C,[(0,e._)("a",{href:"#",onClick:t[0]||(t[0]=(0,v.iM)(((...a)=>r.logout&&r.logout(...a)),["prevent"])),class:"nav-link fs-5"},"登出")])])])])])}s(434);var W={data(){return{isCollapse:!1,routeName:"",status:{loadingItem:""}}},methods:{logout(){const a="https://vue3-course-api.hexschool.io/logout";this.$http.post(a,this.user).then((a=>{a.data.success&&this.$router.push("/adminlogin")}))}},mounted(){this.routeName=this.$route.path}},y=s(89);const A=(0,y.Z)(W,[["render",M],["__scopeId","data-v-39236b82"]]);var U=A,Z=s(4301),L=s(6294),T=s(7548),D={components:{AdminNavbar:U,ToastMessages:d.Z,UserFooter:c.Z},computed:{...(0,Z.rn)(L.Z,["isLoading"])},provide(){return{emitter:u}},methods:{...(0,Z.nv)(T.Z,["getOrders","getProducts","getCoupons"])},mounted(){this.getOrders(),this.getProducts(),this.getCoupons()},created(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=a;const t="https://vue3-course-api.hexschool.io/api/user/check";this.$http.post(t,this.user).then((a=>{a.data.success||this.$router.push("/login")}))}};const I=(0,y.Z)(D,[["render",r],["__scopeId","data-v-c26e9efe"]]);var O=I}}]);
//# sourceMappingURL=977.d754cd30.js.map