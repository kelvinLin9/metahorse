"use strict";(self["webpackChunkhw1"]=self["webpackChunkhw1"]||[]).push([[784],{4371:function(e,t,s){var o=s(4301),a=s(6294);const l=(0,a.Z)();t["Z"]=(0,o.Q_)("copyStore",{actions:{copyCode(e){navigator.clipboard.writeText(e).then((()=>{l.PushManager("抽獎","複製折扣碼")}))},copyCodeOld(e){const t=document.getElementById(e),s=window.getSelection();s.removeAllRanges();const o=document.createRange();o.selectNodeContents(t),s.addRange(o),document.execCommand("copy")}}})},6294:function(e,t,s){var o=s(4301);t["Z"]=(0,o.Q_)("statusStore",{state:()=>({isLoading:[],cartLoadingItem:"",messages:[]}),actions:{PushManager(e,t="更新"){if("抽獎"===e||e.data.success){const e={style:"success",title:`${t}成功`};this.messages.push(e)}else{const s="string"===typeof e.data.message?[e.data.message]:e.data.message,o={style:"danger",title:`${t}失敗`,content:s.join("、")};this.messages.push(o)}}}})},9417:function(e,t,s){s.d(t,{Z:function(){return z}});var o=s(3396),a=s(7139);const l=e=>((0,o.dD)("data-v-12b7785e"),e=e(),(0,o.Cn)(),e),n={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true","data-bs-backdrop":"static",ref:"modal"},r={class:"modal-dialog modal-dialog-centered modal-fullscreen"},i={class:"modal-content"},d={class:"modal-header"},c={class:"modal-title",id:"exampleModalLabel"},u=(0,o.Uk)("點選賽馬開始遊戲 / "),h={key:0},p=(0,o.Uk)(" 您選擇的是 "),m={class:"fs-1"},f=(0,o.Uk)(" 號 "),_={class:"modal-body"},y={class:"container-fluid"},w=["onClickOnce"],b={class:"fs-6"},g=l((()=>(0,o._)("div",{class:"fs-6"},null,-1))),v=l((()=>(0,o._)("span",{class:"start"},null,-1))),k=l((()=>(0,o._)("span",{class:"end"},null,-1)));function x(e,t,s,l,x,$){const C=(0,o.up)("font-awesome-icon");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o._)("div",r,[(0,o._)("div",i,[(0,o._)("div",d,[(0,o._)("h5",c,[u,x.horse.id?((0,o.wg)(),(0,o.iD)("span",h,[p,(0,o._)("span",m,(0,a.zw)(x.horse.id),1),f])):(0,o.kq)("",!0)])]),(0,o._)("div",_,[(0,o._)("div",y,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(x.horses,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.id,onClickOnce:t=>$.selectHorse(e),class:(0,a.C_)(["horse d-flex",[e.color,e.speed,`top-${e.id}`,{"animation-start":x.isPlay},{"selected-horse":x.horse.id===e.id}]]),disabled:!0},[(0,o._)("div",b,(0,a.zw)(e.id),1),(0,o._)("div",null,[(0,o.Wm)(C,{icon:"fa-solid fa-horse"})]),g],42,w)))),128)),v,k])])])])],512)}var $=s(1339),C={data(){return{modal:{},horses:[{color:"text-primary",speed:"linear",id:1},{color:"text-secondary",speed:"ease",id:2},{color:"text-success",speed:"ease-in",id:3},{color:"text-danger",speed:"ease-out",id:4},{color:"",speed:"super",id:5}],horse:{},rank:["super","ease","ease-out","linear","ease-in"],yourRank:0,gift:["S級賽馬","A級賽馬","B級賽馬","C級賽馬","馬鞍"],isPlay:!1,horsesPosition:0,window:0}},mixins:[$.Z],methods:{shuffleArray(e){e.sort((()=>Math.random()-.5))},selectHorse(e){this.isPlay||(this.horse={...e},this.play())},getRank(){this.isPlay=!1,this.$swal.fire({title:`恭喜獲得第${this.yourRank}名 <br>${this.gift[this.yourRank-1]} x 1`,text:"獎品將會在和商品一併寄出",icon:"success",allowOutsideClick:!1,confirmButtonText:"回首頁"}).then((e=>{this.hideModal(),this.$router.push("/")}))},play(){this.isPlay=!0,this.yourRank=this.rank.indexOf(this.horse.speed)+1,setTimeout(this.getRank,5e3)}},created(){const e=[...this.rank];this.shuffleArray(e),this.horses.forEach(((t,s)=>{t.speed=e[s]}))}},M=s(89);const O=(0,M.Z)(C,[["render",x],["__scopeId","data-v-12b7785e"]]);var z=O},2002:function(e,t,s){s.d(t,{Z:function(){return g}});var o=s(3396),a=s(7139);const l={class:"container py-4 checkout-bar w-75 no-print"},n={class:"row fs-5 fs-md-3 fw-bold"},r=(0,o.Uk)(" 購物"),i=(0,o._)("br",{class:"d-block d-sm-none"},null,-1),d=(0,o.Uk)("車 "),c=(0,o.Uk)(" 填寫"),u=(0,o._)("br",{class:"d-block d-sm-none"},null,-1),h=(0,o.Uk)("訂單 "),p=(0,o.Uk)(" 確認"),m=(0,o._)("br",{class:"d-block d-sm-none"},null,-1),f=(0,o.Uk)("付款 ");function _(e,t){const s=(0,o.up)("font-awesome-icon");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",n,[(0,o._)("div",{class:(0,a.C_)(["col d-flex flex-column px-2 py-3 align-items-center rounded-pill",{"bg-primary":"cart"===this.$route.name}])},[(0,o.Wm)(s,{icon:"fa-solid fa-1"}),r,i,d],2),(0,o._)("div",{class:(0,a.C_)(["col d-flex flex-column mx-2 py-3 align-items-center rounded-pill",{"bg-primary":"checkout"===this.$route.name}])},[(0,o.Wm)(s,{icon:"fa-solid fa-2"}),c,u,h],2),(0,o._)("div",{class:(0,a.C_)(["col d-flex flex-column mx-2 py-3 align-items-center rounded-pill",{"bg-primary":"checkoutPay"===this.$route.name}])},[(0,o.Wm)(s,{icon:"fa-solid fa-3"}),p,m,f],2)])])}var y=s(89);const w={},b=(0,y.Z)(w,[["render",_]]);var g=b},5784:function(e,t,s){s.r(t),s.d(t,{default:function(){return W}});var o=s(3396),a=s(9242),l=s(7139);const n={class:"container"},r={class:"py-5 row justify-content-center"},i=(0,o._)("h1",{class:"fs-2 text-center fw-bold"},"購物明細",-1),d={class:"table align-middle"},c=(0,o._)("thead",{class:"table-primary"},[(0,o._)("th",null,"品名"),(0,o._)("th",null,"數量"),(0,o._)("th",{class:"text-end"},"小計")],-1),u={class:"text-end"},h={colspan:"3",class:"text-end fs-4"},p={class:"card"},m=(0,o._)("h5",{class:"card-header"},"訂單編號 :",-1),f={class:"card-body"},_={class:"card-text",id:"orderId"},y={class:"table"},w=(0,o._)("th",{width:"100",class:"fw-bold"},"訂購日期 :",-1),b=(0,o._)("th",{width:"100"},"Email",-1),g=(0,o._)("th",null,"姓名",-1),v=(0,o._)("th",null,"收件人電話",-1),k=(0,o._)("th",null,"收件人地址",-1),x=(0,o._)("th",null,"付款狀態",-1),$={key:0},C={key:1,class:"text-success"},M={class:"px-3 py-2 d-flex justify-content-between"};function O(e,t,s,O,z,Z){const D=(0,o.up)("UserCheckoutBar"),I=(0,o.up)("GameModal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(D),(0,o._)("div",n,[(0,o._)("div",r,[i,(0,o._)("form",{class:"col-10",onSubmit:t[3]||(t[3]=(0,a.iM)(((...e)=>Z.payOrder&&Z.payOrder(...e)),["prevent"]))},[(0,o._)("table",d,[c,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(z.order.products,(t=>((0,o.wg)(),(0,o.iD)("tr",{key:t.id},[(0,o._)("td",null,(0,l.zw)(t.product.title),1),(0,o._)("td",null,(0,l.zw)(t.qty),1),(0,o._)("td",u," NT$ "+(0,l.zw)(e.$filters.currency(t.final_total))+" 元 ",1)])))),128))]),(0,o._)("tfoot",null,[(0,o._)("tr",null,[(0,o._)("td",h," 總計 :NT$ "+(0,l.zw)(e.$filters.currency(z.order.total))+" 元 ",1)])])]),(0,o._)("div",p,[m,(0,o._)("div",f,[(0,o._)("p",_,(0,l.zw)(z.order.id),1),(0,o._)("a",{href:"#",class:"btn btn-primary btn-sm",onClick:t[0]||(t[0]=(0,a.iM)((t=>e.copyCodeOld("orderId")),["prevent"]))}," 複製訂單編號 ")])]),(0,o._)("table",y,[(0,o._)("tbody",null,[(0,o._)("tr",null,[w,(0,o._)("td",null,(0,l.zw)(e.$filters.date(z.order.create_at)),1)]),(0,o._)("tr",null,[b,(0,o._)("td",null,(0,l.zw)(z.order.user.email),1)]),(0,o._)("tr",null,[g,(0,o._)("td",null,(0,l.zw)(z.order.user.name),1)]),(0,o._)("tr",null,[v,(0,o._)("td",null,(0,l.zw)(z.order.user.tel),1)]),(0,o._)("tr",null,[k,(0,o._)("td",null,(0,l.zw)(z.order.user.address),1)]),(0,o._)("tr",null,[x,(0,o._)("td",null,[z.order.is_paid?((0,o.wg)(),(0,o.iD)("span",C,"付款完成")):((0,o.wg)(),(0,o.iD)("span",$,"尚未付款"))])])])]),(0,o._)("div",M,[(0,o._)("button",{class:"btn btn-secondary btn-hover rounded-0 fw-bold",onClick:t[1]||(t[1]=(0,a.iM)(((...e)=>Z.printWindow&&Z.printWindow(...e)),["prevent"]))}," 列印此頁 "),(0,o._)("button",{class:"btn btn-primary btn-hover rounded-0 fw-bold",onClick:t[2]||(t[2]=(0,a.iM)((e=>Z.showAlert()),["prevent"]))}," 確認付款 ")])],32)])]),(0,o.Wm)(I,{ref:"GameModal"},null,512)],64)}var z=s(2002),Z=s(9417),D=s(4301),I=s(4371),U={data(){return{order:{user:{}},orderId:"",isLoading:!1}},components:{UserCheckoutBar:z.Z,GameModal:Z.Z},methods:{...(0,D.nv)(I.Z,["copyCodeOld"]),showAlert(){const e=`https://vue3-course-api.hexschool.io/api/kelvinlin9/pay/${this.orderId}`;this.isLoading=!0,this.$http.post(e).then((e=>{this.isLoading=!1,e.data.success&&(this.order.total>3e4?this.$swal.fire({title:"感謝您的支持",text:"產品將會在3個工作天內寄出",icon:"success",allowOutsideClick:!1,confirmButtonText:"開始滿額小遊戲"}).then((e=>{this.$refs.GameModal.showModal()})):this.$swal.fire({title:"感謝您的支持",text:"產品將會在3個工作天內寄出",icon:"success",confirmButtonText:"回首頁"}).then((e=>{this.$router.push("/")})))}))},getOrder(){const e=`https://vue3-course-api.hexschool.io/api/kelvinlin9/order/${this.orderId}`;this.$http.get(e).then((e=>{e.data.success&&(this.order=e.data.order)})).catch((e=>console.error(e)))},payOrder(){const e=`https://vue3-course-api.hexschool.io/api/kelvinlin9/pay/${this.orderId}`;this.$http.post(e).then((e=>{console.log(e),e.data.success&&this.getOrder()})).catch((e=>console.error(e)))},printWindow(){window.print()}},created(){this.orderId=this.$route.params.orderId,this.getOrder()}},P=s(89);const R=(0,P.Z)(U,[["render",O]]);var W=R}}]);
//# sourceMappingURL=784.2db23292.js.map