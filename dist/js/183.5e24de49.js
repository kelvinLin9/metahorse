"use strict";(self["webpackChunkhw1"]=self["webpackChunkhw1"]||[]).push([[183],{9183:function(s,e,o){o.r(e),o.d(e,{default:function(){return _}});var t=o(3396),i=o(9242),n=o(7139);const r=s=>((0,t.dD)("data-v-2d1961ac"),s=s(),(0,t.Cn)(),s),a={class:"container-fluid"},l=r((()=>(0,t._)("div",null," 請點選賽馬開始遊戲 ",-1))),d=["onClick"],c={class:"fs-6"},h={class:"fs-6"},u=r((()=>(0,t._)("br",null,null,-1))),p=r((()=>(0,t._)("span",{class:"start"},null,-1))),f=r((()=>(0,t._)("span",{class:"end"},null,-1)));function w(s,e,o,r,w,k){const y=(0,t.up)("font-awesome-icon");return(0,t.wg)(),(0,t.iD)("div",a,[l,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(w.horses,(s=>((0,t.wg)(),(0,t.iD)("div",{key:s.id,onClick:(0,i.iM)((e=>[k.selectedHorse(s),k.play()]),["prevent"]),class:(0,n.C_)(["horse d-flex",[s.color,s.speed,`top-${s.id}`,{"animation-start":w.isPlay},{test:w.horse.id===s.id}]])},[(0,t._)("div",c,(0,n.zw)(s.id),1),(0,t._)("div",null,[(0,t.Wm)(y,{icon:"fa-solid fa-horse"})]),(0,t._)("div",h,[(0,t.Uk)((0,n.zw)(w.horsesPosition)+" / "+(0,n.zw)(w.window)+" ",1),u,(0,t.Uk)(" "+(0,n.zw)(s.speed),1)])],10,d)))),128)),p,f])}var k={data(){return{horses:[{color:"text-primary",speed:"linear",id:1},{color:"text-secondary",speed:"ease",id:2},{color:"text-success",speed:"ease-in",id:3},{color:"text-danger",speed:"ease-out",id:4},{color:"",speed:"super",id:5}],horse:{},rank:["super","ease","ease-out","linear","ease-in"],yourRank:0,isPlay:!1,horsesPosition:0,window:0}},watch:{horsesPosition(s,e){console.log(s,e)},window(s,e){console.log(s,e)}},methods:{shuffleArray(s){s.sort((()=>Math.random()-.5))},selectedHorse(s){this.horse={...s}},getRank(){console.log(this.horse.speed),this.$swal.fire({title:`恭喜獲得第${this.yourRank}名`,text:"獎品將會在和商品一併寄出",icon:"success",confirmButtonText:"回首頁"}).then((s=>{}))},play(){this.isPlay=!0,this.yourRank=this.rank.indexOf(this.horse.speed)+1,setTimeout(this.getRank,1e4)}},created(){const s=[...this.rank];this.shuffleArray(s),this.horses.forEach(((e,o)=>{e.speed=s[o]}))}},y=o(89);const v=(0,y.Z)(k,[["render",w],["__scopeId","data-v-2d1961ac"]]);var _=v}}]);
//# sourceMappingURL=183.5e24de49.js.map