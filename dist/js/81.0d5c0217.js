"use strict";(self["webpackChunkhw1"]=self["webpackChunkhw1"]||[]).push([[81],{7823:function(t,e,l){l.d(e,{Z:function(){return w}});var a=l(3396),o=l(7139);const i={class:"modal fade",id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},s={class:"modal-dialog",role:"document"},n={class:"modal-content border-0"},d={class:"modal-header bg-danger text-white"},r={class:"modal-title"},c=(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),u={class:"modal-body"},p=(0,a.Uk)(" 是否刪除 "),m={class:"text-danger"},b=(0,a.Uk)(" (刪除後將無法恢復)。 "),h={class:"modal-footer"},_=(0,a._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function g(t,e,l,g,f,P){return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",s,[(0,a._)("div",n,[(0,a._)("div",d,[(0,a._)("h5",r,[(0,a._)("span",null,"刪除 "+(0,o.zw)(l.item.title),1)]),c]),(0,a._)("div",u,[p,(0,a._)("strong",m,(0,o.zw)(l.item.title),1),b]),(0,a._)("div",h,[_,(0,a._)("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=e=>t.$emit("del-item"))},"確認刪除 ")])])])],512)}var f=l(1339),P={props:{item:{}},data(){return{modal:""}},mixins:[f.Z]},y=l(89);const v=(0,y.Z)(P,[["render",g]]);var w=v},8467:function(t,e,l){l.d(e,{Z:function(){return h}});var a=l(3396),o=l(7139),i=l(9242);const s={"aria-label":"Page navigation example"},n={class:"pagination justify-content-center"},d=(0,a._)("li",{class:"page-item"},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Previous"},[(0,a._)("span",{"aria-hidden":"true"},"«")])],-1),r=["onClick"],c=(0,a._)("li",{class:"page-item"},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Next"},[(0,a._)("span",{"aria-hidden":"true"},"»")])],-1);function u(t,e,l,u,p,m){return(0,a.wg)(),(0,a.iD)("nav",s,[(0,a._)("ul",n,[d,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.pages.total_pages,(t=>((0,a.wg)(),(0,a.iD)("li",{class:(0,o.C_)(["page-item",{active:t===l.pages.current_page}]),key:t},[(0,a._)("a",{class:"page-link",href:"#",onClick:(0,i.iM)((e=>m.updatePage(t)),["prevent"])},(0,o.zw)(t),9,r)],2)))),128)),c])])}var p={props:["pages"],methods:{updatePage(t){this.$emit("emit-pages",t)}}},m=l(89);const b=(0,m.Z)(p,[["render",u]]);var h=b},2081:function(t,e,l){l.r(e),l.d(e,{default:function(){return Pt}});var a=l(3396),o=l(7139);const i={class:"text-end mt-3"},s={class:"table mt-4"},n=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{width:"100"},"分類"),(0,a._)("th",{width:"50"},"產品名稱"),(0,a._)("th",{width:"50"},"圖片"),(0,a._)("th",{width:"80"},"產品描述"),(0,a._)("th",{width:"150"},"說明"),(0,a._)("th",{width:"120"},"原價"),(0,a._)("th",{width:"120"},"售價"),(0,a._)("th",{width:"100"},"是否啟用"),(0,a._)("th",{width:"200"},"編輯")])],-1),d=["src"],r={class:"text-right"},c={class:"text-right"},u={key:0,class:"text-success"},p={key:1,class:"text-muted"},m={class:"btn-group"},b=["onClick"],h=["onClick"];function _(t,e,l,_,g,f){const P=(0,a.up)("Loading"),y=(0,a.up)("Pagination"),v=(0,a.up)("ProductModal"),w=(0,a.up)("DelModal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(P,{active:g.isLoading},null,8,["active"]),(0,a._)("div",i,[(0,a._)("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=t=>f.openModal(!0))}," 增加一個產品 ")]),(0,a._)("table",s,[n,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(g.products,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",null,(0,o.zw)(e.category),1),(0,a._)("td",null,(0,o.zw)(e.title),1),(0,a._)("td",null,[(0,a._)("img",{src:e.imageUrl,alt:"商品照片",width:"100",height:"100"},null,8,d)]),(0,a._)("td",null,(0,o.zw)(e.description),1),(0,a._)("td",null,(0,o.zw)(e.content),1),(0,a._)("td",r,(0,o.zw)(t.$filters.currency(e.origin_price)),1),(0,a._)("td",c,(0,o.zw)(t.$filters.currency(e.price)),1),(0,a._)("td",null,[e.is_enabled?((0,a.wg)(),(0,a.iD)("span",u,"啟用")):((0,a.wg)(),(0,a.iD)("span",p,"未啟用"))]),(0,a._)("td",null,[(0,a._)("div",m,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm",onClick:t=>f.openModal(!1,e)},"編輯",8,b),(0,a._)("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>f.openDelProductModal(e)},"刪除",8,h)])])])))),128))])]),(0,a.Wm)(y,{pages:g.pagination,onEmitPages:f.getProducts},null,8,["pages","onEmitPages"]),(0,a.Wm)(v,{ref:"productModal",product:g.tempProduct,onUpdateProduct:f.updateProduct},null,8,["product","onUpdateProduct"]),(0,a.Wm)(w,{item:g.tempProduct,ref:"delModal",onDelItem:f.delProduct},null,8,["item","onDelItem"])],64)}var g=l(9242);const f={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},P={class:"modal-dialog modal-xl",role:"document"},y={class:"modal-content border-0"},v=(0,a._)("div",{class:"modal-header bg-dark text-white"},[(0,a._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,a._)("span",null,"新增產品")]),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),w={class:"modal-body"},k={class:"row"},x={class:"col-sm-4"},U={class:"mb-3"},M=(0,a._)("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),D={class:"mb-3"},C=(0,a._)("label",{for:"customFile",class:"form-label"},[(0,a.Uk)("或 上傳圖片 "),(0,a._)("i",{class:"fas fa-spinner fa-spin"})],-1),$=["src"],V={key:0,class:"mt-5"},Z=["onUpdate:modelValue"],z=["onClick"],L={key:0},F={class:"col-sm-8"},j={class:"mb-3"},H=(0,a._)("label",{for:"title",class:"form-label"},"產品名稱",-1),I={class:"row gx-2"},N={class:"mb-3 col-md-6"},W=(0,a._)("label",{for:"category",class:"form-label"},"分類",-1),Y={class:"mb-3 col-md-6"},K=(0,a._)("label",{for:"price",class:"form-label"},"單位",-1),q={class:"row gx-2"},E={class:"mb-3 col-md-6"},O=(0,a._)("label",{for:"origin_price",class:"form-label"},"原價",-1),A={class:"mb-3 col-md-6"},B=(0,a._)("label",{for:"price",class:"form-label"},"售價",-1),G=(0,a._)("hr",null,null,-1),J={class:"mb-3"},Q=(0,a._)("label",{for:"description",class:"form-label"},"產品描述",-1),R={class:"mb-3"},S=(0,a._)("label",{for:"content",class:"form-label"},"產品說明",-1),T={class:"mb-3"},X=(0,a._)("p",null,"賽馬素質",-1),tt=(0,a._)("label",{for:"speed"},"速度",-1),et=(0,a._)("label",{for:"stamina"},"耐力",-1),lt=(0,a._)("label",{for:"lucky"},"幸運",-1),at=(0,a._)("label",{for:"intelligence"},"智慧",-1),ot={class:"mb-3"},it={class:"form-check"},st=(0,a._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),nt={class:"modal-footer"},dt=(0,a._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function rt(t,e,l,o,i,s){return(0,a.wg)(),(0,a.iD)("div",f,[(0,a._)("div",P,[(0,a._)("div",y,[v,(0,a._)("div",w,[(0,a._)("div",k,[(0,a._)("div",x,[(0,a._)("div",U,[M,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[0]||(e[0]=t=>i.tempProduct.imageUrl=t),placeholder:"請輸入圖片連結"},null,512),[[g.nr,i.tempProduct.imageUrl]])]),(0,a._)("div",D,[C,(0,a._)("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[1]||(e[1]=(...t)=>s.uploadFile&&s.uploadFile(...t))},null,544)]),(0,a._)("img",{class:"img-fluid",src:i.tempProduct.imageUrl,alt:"商品照片"},null,8,$),i.tempProduct.images?((0,a.wg)(),(0,a.iD)("div",V,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.tempProduct.images,((t,e)=>((0,a.wg)(),(0,a.iD)("div",{class:"mb-3 input-group",key:e},[(0,a.wy)((0,a._)("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":t=>i.tempProduct.images[e]=t,placeholder:"請輸入連結"},null,8,Z),[[g.nr,i.tempProduct.images[e]]]),(0,a._)("button",{type:"button",class:"btn btn-outline-danger",onClick:t=>i.tempProduct.images.splice(e,1)}," 移除 ",8,z)])))),128)),i.tempProduct.images[i.tempProduct.images.length-1]||!i.tempProduct.images.length?((0,a.wg)(),(0,a.iD)("div",L,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=t=>i.tempProduct.images.push(""))}," 新增圖片 ")])):(0,a.kq)("",!0)])):(0,a.kq)("",!0)]),(0,a._)("div",F,[(0,a._)("div",j,[H,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[3]||(e[3]=t=>i.tempProduct.title=t),placeholder:"請輸入標題"},null,512),[[g.nr,i.tempProduct.title]])]),(0,a._)("div",I,[(0,a._)("div",N,[W,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":e[4]||(e[4]=t=>i.tempProduct.category=t),placeholder:"請輸入分類"},null,512),[[g.nr,i.tempProduct.category]])]),(0,a._)("div",Y,[K,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":e[5]||(e[5]=t=>i.tempProduct.unit=t),placeholder:"請輸入單位"},null,512),[[g.nr,i.tempProduct.unit]])])]),(0,a._)("div",q,[(0,a._)("div",E,[O,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"origin_price","onUpdate:modelValue":e[6]||(e[6]=t=>i.tempProduct.origin_price=t),placeholder:"請輸入原價"},null,512),[[g.nr,i.tempProduct.origin_price,void 0,{number:!0}]])]),(0,a._)("div",A,[B,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[7]||(e[7]=t=>i.tempProduct.price=t),placeholder:"請輸入售價"},null,512),[[g.nr,i.tempProduct.price,void 0,{number:!0}]])])]),G,(0,a._)("div",J,[Q,(0,a.wy)((0,a._)("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[8]||(e[8]=t=>i.tempProduct.description=t),placeholder:"請輸入產品描述"},null,512),[[g.nr,i.tempProduct.description]])]),(0,a._)("div",R,[S,(0,a.wy)((0,a._)("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":e[9]||(e[9]=t=>i.tempProduct.content=t),placeholder:"請輸入產品描述"},null,512),[[g.nr,i.tempProduct.content]])]),(0,a._)("div",T,[X,tt,(0,a.wy)((0,a._)("input",{id:"speed",type:"number",min:"1",max:"5","onUpdate:modelValue":e[10]||(e[10]=t=>i.tempProduct.speed=t)},null,512),[[g.nr,i.tempProduct.speed]]),et,(0,a.wy)((0,a._)("input",{id:"stamina",type:"number",min:"1",max:"5","onUpdate:modelValue":e[11]||(e[11]=t=>i.tempProduct.stamina=t)},null,512),[[g.nr,i.tempProduct.stamina]]),lt,(0,a.wy)((0,a._)("input",{id:"lucky",type:"number",min:"1",max:"5","onUpdate:modelValue":e[12]||(e[12]=t=>i.tempProduct.lucky=t)},null,512),[[g.nr,i.tempProduct.lucky]]),at,(0,a.wy)((0,a._)("input",{id:"intelligence",type:"number",min:"1",max:"5","onUpdate:modelValue":e[13]||(e[13]=t=>i.tempProduct.intelligence=t)},null,512),[[g.nr,i.tempProduct.intelligence]])]),(0,a._)("div",ot,[(0,a._)("div",it,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[14]||(e[14]=t=>i.tempProduct.is_enabled=t),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[g.e8,i.tempProduct.is_enabled]]),st])])])])]),(0,a._)("div",nt,[dt,(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:e[15]||(e[15]=e=>t.$emit("update-product",i.tempProduct))}," 確認 ")])])])],512)}var ct=l(1339),ut={props:{product:{type:Object,default(){return{}}}},watch:{product(){this.tempProduct=this.product,this.tempProduct.images||(this.tempProduct.images=[])}},data(){return{modal:{},tempProduct:{}}},methods:{uploadFile(){const t=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",t);const l="https://vue3-course-api.hexschool.io/api/kelvinlin9/admin/upload";this.$http.post(l,e).then((t=>{console.log(t.data),t.data.success&&(this.tempProduct.imageUrl=t.data.imageUrl)}))}},mixins:[ct.Z]},pt=l(89);const mt=(0,pt.Z)(ut,[["render",rt]]);var bt=mt,ht=l(8467),_t=l(7823),gt={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{ProductModal:bt,DelModal:_t.Z,Pagination:ht.Z},inject:["emitter"],methods:{getProducts(t=1){const e=`https://vue3-course-api.hexschool.io/api/kelvinlin9/admin/products/?page=${t}`;this.isLoading=!0,this.$http.get(e).then((t=>{this.isLoading=!1,t.data.success&&(console.log(1,t.data),this.products=t.data.products,this.pagination=t.data.pagination)}))},openModal(t,e){this.tempProduct=t?{}:{...e},this.isNew=t;const l=this.$refs.productModal;l.showModal()},updateProduct(t){this.tempProduct=t;let e="https://vue3-course-api.hexschool.io/api/kelvinlin9/admin/product",l="post";this.isNew||(e=`https://vue3-course-api.hexschool.io/api/kelvinlin9/admin/product/${t.id}`,l="put");const a=this.$refs.productModal;this.$http[l](e,{data:this.tempProduct}).then((t=>{console.log(t),a.hideModal(),t.data.success?(this.getProducts(),this.emitter.emit("push-message",{style:"success",title:"更新成功"})):this.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:t.data.message.join("、")})}))},openDelProductModal(t){this.tempProduct={...t};const e=this.$refs.delModal;e.showModal()},delProduct(){const t=`https://vue3-course-api.hexschool.io/api/kelvinlin9/admin/product/${this.tempProduct.id}`;this.$http.delete(t).then((t=>{console.log(t.data);const e=this.$refs.delModal;e.hideModal(),this.getProducts()}))}},created(){this.getProducts()}};const ft=(0,pt.Z)(gt,[["render",_]]);var Pt=ft}}]);
//# sourceMappingURL=81.0d5c0217.js.map