import{B as g}from"./TableImg.5adf77e9.js";import"./BasicForm.4ff9ea41.js";import{u as h}from"./useTable.dd834775.js";import{getBasicColumns as _,getFormConfig as F}from"./tableData.0a246808.js";import{av as k,a as y,s as C,E as i,o as m,j as b,y as t,n as s,h as c,m as B,t as E,F as T,z as p}from"./index.976f028d.js";import{A}from"./index.e5e60202.js";import{d as S}from"./table.1067e1b3.js";import"./index.1d81a672.js";import"./Checkbox.77af456b.js";import"./index.53bde1b9.js";import"./index.a30387ae.js";import"./useForm.0b456d22.js";import"./index.9126614a.js";import"./index.2440c5f5.js";import"./index.b556a78a.js";import"./useSize.a0f971b4.js";import"./eagerComputed.b4caa6b1.js";import"./useWindowSizeFn.43b44744.js";import"./useContentViewHeight.fa21b489.js";import"./ArrowLeftOutlined.6cbdd482.js";import"./index.d76d5ff0.js";import"./transButton.a71e0ac3.js";import"./index.5d9f2293.js";import"./index.b4585842.js";import"./index.4e9d050c.js";import"./uuid.2b29000c.js";import"./index.354b005f.js";import"./_baseIteratee.6f2aea4e.js";import"./get.177428c4.js";import"./DeleteOutlined.b2cc13f1.js";import"./index.04eaadeb.js";import"./useRefs.78498e36.js";import"./Form.50c6b0cf.js";import"./Col.dd538940.js";import"./useFlexGapSupport.4b430c1e.js";import"./index.448301d3.js";import"./FullscreenOutlined.31e68573.js";import"./index.093def42.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.dd657224.js";import"./index.185f09b6.js";import"./scrollTo.5c1783ce.js";import"./index.d384ecff.js";import"./index.b2e43c68.js";/* empty css              *//* empty css               */import"./index.d04c7300.js";import"./index.8e4fa7db.js";import"./download.ed803174.js";import"./base64Conver.08b9f4ec.js";import"./index.7944a3bb.js";import"./index.651a19c8.js";import"./uniqBy.c45ce52f.js";const D=y({components:{BasicTable:g,AAlert:A},setup(){const o=C([]),[e,{getForm:n}]=h({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:S,columns:_(),useSearchForm:!0,formConfig:F(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id"});function a(){n().getFieldsValue()}function u(r){o.value=r}return{registerTable:e,getFormValues:a,checkedKeys:o,onSelectChange:u}}}),w=p(" custom-slot "),K=p("\u6E05\u7A7A"),V={key:1},v=p("\u83B7\u53D6\u8868\u5355\u6570\u636E");function $(o,e,n,a,u,r){const l=i("a-button"),d=i("a-alert"),f=i("BasicTable");return m(),b(f,{onRegister:o.registerTable,rowSelection:{type:"checkbox",selectedRowKeys:o.checkedKeys,onChange:o.onSelectChange}},{"form-custom":t(()=>[w]),headerTop:t(()=>[s(d,{type:"info","show-icon":""},{message:t(()=>[o.checkedKeys.length>0?(m(),c(T,{key:0},[B("span",null,"\u5DF2\u9009\u4E2D"+E(o.checkedKeys.length)+"\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)",1),s(l,{type:"link",onClick:e[0]||(e[0]=N=>o.checkedKeys=[]),size:"small"},{default:t(()=>[K]),_:1})],64)):(m(),c("span",V,"\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))]),_:1})]),toolbar:t(()=>[s(l,{type:"primary",onClick:o.getFormValues},{default:t(()=>[v]),_:1},8,["onClick"])]),_:1},8,["onRegister","rowSelection"])}var zo=k(D,[["render",$]]);export{zo as default};