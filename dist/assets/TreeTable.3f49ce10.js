import{B as n}from"./TableImg.8eef3a03.js";import"./BasicForm.5910004e.js";import{u as l}from"./useTable.784416e6.js";import{getBasicColumns as c,getTreeTableData as d}from"./tableData.0a246808.js";import{U as _,a as b,J as a,o as f,h as C,n as o,y as t,z as m}from"./index.66dc6cca.js";/* empty css              *//* empty css                */import"./useForm.49e0e708.js";import"./index.2adec96f.js";/* empty css               *//* empty css                */import"./useWindowSizeFn.42dc6d89.js";import"./useContentViewHeight.1394d2f2.js";/* empty css                *//* empty css                *//* empty css               */import"./index.b75ea1a3.js";import"./FullscreenOutlined.72d58049.js";/* empty css               */import"./sortable.esm.2632adaa.js";import"./RedoOutlined.f37638f5.js";/* empty css                *//* empty css                */import"./index.2a4ae6b3.js";/* empty css               *//* empty css               */import"./index.dd449670.js";/* empty css                *//* empty css                *//* empty css                */import"./download.5b2676c7.js";import"./uniqBy.e1e9a821.js";const T=b({components:{BasicTable:n},setup(){const[e,{expandAll:r,collapseAll:i}]=l({title:"\u6811\u5F62\u8868\u683C",isTreeTable:!0,rowSelection:{type:"checkbox",getCheckboxProps(p){return p.id==="0"?{disabled:!0}:{disabled:!1}}},titleHelpMessage:"\u6811\u5F62\u7EC4\u4EF6\u4E0D\u80FD\u548C\u5E8F\u5217\u53F7\u5217\u540C\u65F6\u5B58\u5728",columns:c(),dataSource:d(),rowKey:"id"});return{register:e,expandAll:r,collapseAll:i}}}),g={class:"p-4"},h=m("\u5C55\u5F00\u5168\u90E8"),k=m("\u6298\u53E0\u5168\u90E8");function B(e,r,i,p,E,F){const s=a("a-button"),u=a("BasicTable");return f(),C("div",g,[o(u,{onRegister:e.register},{toolbar:t(()=>[o(s,{type:"primary",onClick:e.expandAll},{default:t(()=>[h]),_:1},8,["onClick"]),o(s,{type:"primary",onClick:e.collapseAll},{default:t(()=>[k]),_:1},8,["onClick"])]),_:1},8,["onRegister"])])}var re=_(T,[["render",B]]);export{re as default};