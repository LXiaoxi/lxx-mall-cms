"use strict";(self["webpackChunkvue_ts_cms"]=self["webpackChunkvue_ts_cms"]||[]).push([[525],{7374:function(e,l,t){t.r(l),t.d(l,{default:function(){return k}});var a=t(3396);const n={class:"user"};function o(e,l,t,o,i,r){const d=(0,a.up)("page-search"),s=(0,a.up)("page-content"),p=(0,a.up)("page-modal");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a.Wm)(d,{searchformConfig:e.searchformConfig,onResetBtnClick:e.handleResetClick,onQueryBtnClick:e.handleQueryClick},null,8,["searchformConfig","onResetBtnClick","onQueryBtnClick"]),(0,a.Wm)(s,{contentTableConfig:e.contentTableConfig,pagename:"users",ref:"pageContentRef",onNewClick:e.handleNewClick,onEditClick:e.handleEditClick},null,8,["contentTableConfig","onNewClick","onEditClick"]),(0,a.Wm)(p,{modalConfig:e.modalConfigRef,ref:"pageModalRef",defaultInfo:e.defaultInfo,pagename:"users"},null,8,["modalConfig","defaultInfo"])])}var i=t(3228),r=t(2757),d=t(3350);const s={labelWidth:"120px",itemStyle:{padding:"10px 40px"},spanWidth:{span:8},formItems:[{field:"name",type:"input",label:"用户名",rules:[],placeholder:"请输入用户名"},{field:"realname",type:"input",label:"真实姓名",rules:[],placeholder:"请输入真实姓名"},{field:"cellphone",type:"input",label:"手机号码",rules:[],placeholder:"请输入手机号码"},{field:"enable",type:"select",label:"用户状态",rules:[],placeholder:"请选择用户状态",options:[{title:"启用",value:"1"},{title:"禁用",value:"0"}]},{field:"creatTime",type:"datepicker",label:"创建时间",rules:[],otherOptions:{startPlaceholder:"开始时间",endPlaceholder:"结束时间",type:"daterange"}}]},p={title:"用户列表1",shouIndexColumn:!0,showSelectColumn:!0,propsList:[{prop:"name",label:"用户名",minWidth:"50"},{prop:"realname",label:"真实姓名",minWidth:"100"},{prop:"cellphone",label:"手机号码",minWidth:"100"},{prop:"enable",label:"状态",minWidth:"100",slotName:"status"},{prop:"createAt",label:"创建时间",minWidth:"100",slotName:"createAt"},{prop:"updateAt",label:"更新时间",minWidth:"100",slotName:"updateAt"},{label:"操作",minWidth:"120",slotName:"handle"}]},c={formItems:[{field:"name",type:"input",label:"用户名",rules:[],placeholder:"请输入用户名"},{field:"realname",type:"input",label:"真实姓名",rules:[],placeholder:"请输入真实姓名"},{field:"password",type:"password",label:"密码",rules:[],placeholder:"请输入密码",isHidden:!0},{field:"cellphone",type:"input",label:"电话号码",rules:[],placeholder:"请输入电话号码"},{field:"departmentId",type:"select",label:"部门",rules:[],placeholder:"请选择部门",options:[]},{field:"roleId",type:"select",label:"角色",rules:[],placeholder:"请选择角色",options:[]}],spanWidth:{span:24},itemStyle:{}};var u=t(4870);function f(){const e=(0,u.iH)(),l=()=>{e.value?.getpageData()},t=l=>{e.value?.getpageData(l)};return[l,t,e]}var m=t(8256),h=t(2767),C=(0,a.aZ)({name:"user",components:{PageSearch:i.Z,PageContent:r.Z,PageModal:d.Z},setup(){const e="user",[l,t,n]=f(),o=()=>{const e=c.formItems.find((e=>"password"===e.field));e.isHidden=!1},i=()=>{const e=c.formItems.find((e=>"password"===e.field));e.isHidden=!0},r=(0,h.oR)(),d=(0,a.Fl)((()=>{const e=c.formItems.find((e=>"departmentId"===e.field));e.options=r.state.entireDepartment.map((e=>({title:e.name,value:e.id})));const l=c.formItems.find((e=>"roleId"===e.field));return l.options=r.state.entireRole.map((e=>({title:e.name,value:e.id}))),c})),[u,C,g,b]=(0,m.w)(o,i);return{searchformConfig:s,contentTableConfig:p,modalConfigRef:d,pagename:e,handleResetClick:l,handleQueryClick:t,pageContentRef:n,pageModalRef:u,handleNewClick:g,handleEditClick:b,defaultInfo:C}}}),g=t(89);const b=(0,g.Z)(C,[["render",o]]);var k=b}}]);
//# sourceMappingURL=525.a5444348.js.map