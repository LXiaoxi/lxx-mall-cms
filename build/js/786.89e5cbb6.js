"use strict";(self["webpackChunkvue_ts_cms"]=self["webpackChunkvue_ts_cms"]||[]).push([[786],{8786:function(e,n,a){a.r(n),a.d(n,{default:function(){return X}});var l=a(3396);const u={class:"main"};function t(e,n,a,t,s,o){const c=(0,l.up)("nav-menu"),r=(0,l.up)("el-aside"),d=(0,l.up)("nav-header"),i=(0,l.up)("el-header"),m=(0,l.up)("router-view"),p=(0,l.up)("el-main"),w=(0,l.up)("el-container");return(0,l.wg)(),(0,l.iD)("div",u,[(0,l.Wm)(w,{class:"main-container"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{width:e.isCollapse?"60px":"210px"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{collapse:e.isCollapse},null,8,["collapse"])])),_:1},8,["width"]),(0,l.Wm)(w,{class:"page"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{class:"page-header"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{onFoldChange:e.handleChange},null,8,["onFoldChange"])])),_:1}),(0,l.Wm)(p,{class:"page-content"},{default:(0,l.w5)((()=>[(0,l.Wm)(m)])),_:1})])),_:1})])),_:1})])}var s=a(4870),o=a(9242),c=a(7139),r=a(5522);const d={class:"nav-menu"},i={class:"logo"},m=(0,l._)("img",{src:r,alt:"logo",class:"img"},null,-1),p={key:0,class:"title"},w={class:"item-name"},f={class:"sub-name"};function v(e,n,a,u,t,s){const r=(0,l.up)("el-menu-item"),v=(0,l.up)("el-sub-menu"),g=(0,l.up)("el-menu");return(0,l.wg)(),(0,l.iD)("div",d,[(0,l._)("div",i,[m,(0,l.Wm)(o.uT,{name:"lxx"},{default:(0,l.w5)((()=>[e.collapse?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("span",p,"后台管理"))])),_:1})]),(0,l.Wm)(g,{"default-active":e.defaultItem,class:"el-menu-vertical",collapse:e.collapse,"background-color":"#545c64","active-text-color":"#ffd04b","text-color":"#b7bdc3"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.userMenus,(n=>((0,l.wg)(),(0,l.iD)(l.HY,{key:n.id},[1===n.type?((0,l.wg)(),(0,l.j4)(v,{key:0,index:n.id+""},{title:(0,l.w5)((()=>[((0,l.wg)(),(0,l.j4)((0,l.LL)(n.icon.slice(8)),{class:"icon"})),(0,l._)("span",w,(0,c.zw)(n.name),1)])),default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.children,(n=>((0,l.wg)(),(0,l.j4)(r,{index:n.id+"",onClick:a=>e.handleMenuClick(n)},{default:(0,l.w5)((()=>[(0,l._)("span",f,(0,c.zw)(n.name),1)])),_:2},1032,["index","onClick"])))),256))])),_:2},1032,["index"])):(0,l.kq)("",!0),2===n.type?((0,l.wg)(),(0,l.j4)(r,{key:1,index:n.id+""},{default:(0,l.w5)((()=>[(0,l._)("span",null,(0,c.zw)(n.name),1)])),_:2},1032,["index"])):(0,l.kq)("",!0)],64)))),128))])),_:1},8,["default-active","collapse"])])}var g=a(678),h=a(562),b=a(5932),_=(0,l.aZ)({name:"nav-menu",props:{collapse:{type:Boolean,default:!1}},setup(){const e=(0,h.oR)(),n=(0,g.tv)(),a=(0,g.yj)(),u=a.path,t=(0,l.Fl)((()=>e.state.LoginModule.userMenus)),o=(0,b.Sx)(t.value,u),c=(0,s.iH)(o.id+""),r=e=>{n.push({path:e.url??"/not-found"})};return{userMenus:t,defaultItem:c,handleMenuClick:r}}}),k=a(89);const C=(0,k.Z)(_,[["render",v]]);var W=C,x=W;const y={class:"nav-header"},Z={class:"content"};function D(e,n,a,u,t,s){const o=(0,l.up)("el-icon"),c=(0,l.up)("xx-Breadcrumb"),r=(0,l.up)("user-info");return(0,l.wg)(),(0,l.iD)("div",y,[(0,l.Wm)(o,{class:"icon"},{default:(0,l.w5)((()=>[((0,l.wg)(),(0,l.j4)((0,l.LL)(e.isfold?"d-arrow-left":"d-arrow-right"),{onClick:e.handleIcon},null,8,["onClick"]))])),_:1}),(0,l._)("div",Z,[(0,l.Wm)(c,{breadcrumb:e.breadcrumb},null,8,["breadcrumb"]),(0,l.Wm)(r)])])}const M={class:"user-info"},j={class:"el-dropdown-link"},H=(0,l.Uk)("退出登录"),z=(0,l.Uk)(" 用户信息"),F=(0,l.Uk)("系统管理 ");function I(e,n,a,u,t,s){const o=(0,l.up)("el-avatar"),r=(0,l.up)("arrow-down"),d=(0,l.up)("el-icon"),i=(0,l.up)("el-dropdown-item"),m=(0,l.up)("el-dropdown-menu"),p=(0,l.up)("el-dropdown");return(0,l.wg)(),(0,l.iD)("div",M,[(0,l.Wm)(p,null,{dropdown:(0,l.w5)((()=>[(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Wm)(i,{onClick:e.handleExitClick},{default:(0,l.w5)((()=>[H])),_:1},8,["onClick"]),(0,l.Wm)(i,{divided:""},{default:(0,l.w5)((()=>[z])),_:1}),(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[F])),_:1})])),_:1})])),default:(0,l.w5)((()=>[(0,l._)("span",j,[(0,l.Wm)(o,{size:e.small,src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"},null,8,["size"]),(0,l.Uk)(" "+(0,c.zw)(e.name)+" ",1),(0,l.Wm)(d,{class:"el-icon--right"},{default:(0,l.w5)((()=>[(0,l.Wm)(r)])),_:1})])])),_:1})])}var L=a(65),U=a(2910),R=a(3824),Y=(0,l.aZ)({name:"user-info",components:{},setup(){const e=(0,L.oR)(),n=(0,l.Fl)((()=>e.state.LoginModule.userInfo.name)),a=()=>{U.Z.deleteCache("token"),R.Z.push("/main")};return{name:n,handleExitClick:a}}});const q=(0,k.Z)(Y,[["render",I]]);var A=q;const B={class:"breadcrumb"};function K(e,n,a,u,t,s){const o=(0,l.up)("el-breadcrumb-item"),r=(0,l.up)("el-breadcrumb");return(0,l.wg)(),(0,l.iD)("div",B,[(0,l.Wm)(r,{"separator-icon":e.ArrowRight},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.breadcrumb,(e=>((0,l.wg)(),(0,l.j4)(o,{key:e.name},{default:(0,l.w5)((()=>[(0,l.Uk)((0,c.zw)(e.name),1)])),_:2},1024)))),128))])),_:1},8,["separator-icon"])])}var E=(0,l.aZ)({name:"breadcrumb",components:{},props:{breadcrumb:{type:Array,default:()=>[]}}});const N=(0,k.Z)(E,[["render",K]]);var S=N,T=S,G=(0,l.aZ)({emits:["FoldChange"],name:"nav-header",components:{UserInfo:A,xxBreadcrumb:T},setup(e,{emit:n}){const a=(0,s.iH)(!1),u=(0,l.Fl)((()=>{const e=(0,L.oR)(),n=(0,g.yj)(),a=e.state.LoginModule.userMenus,l=n.path;return(0,b.iA)(a,l)})),t=()=>{a.value=!a.value,n("FoldChange",a.value)};return{isfold:a,breadcrumb:u,handleIcon:t}}});const J=(0,k.Z)(G,[["render",D]]);var O=J,P=O,Q=(0,l.aZ)({name:"main",components:{NavMenu:x,NavHeader:P},setup(){const e=(0,s.iH)(!1),n=n=>{e.value=n};return{isCollapse:e,handleChange:n}}});const V=(0,k.Z)(Q,[["render",t],["__scopeId","data-v-8666744e"]]);var X=V},5522:function(e,n,a){e.exports=a.p+"img/logo.5ac24feb.svg"}}]);
//# sourceMappingURL=786.89e5cbb6.js.map