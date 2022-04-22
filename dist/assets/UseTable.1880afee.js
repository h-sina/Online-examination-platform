import{B as P}from"./TableImg.5adf77e9.js";import"./BasicForm.4ff9ea41.js";import{u as $}from"./useTable.dd834775.js";import{getBasicColumns as p,getBasicShortColumns as M}from"./tableData.0a246808.js";import{av as N,a as V,E as d,o as z,h as I,m as g,n as t,y as u,z as i,D as H}from"./index.976f028d.js";import{d as U}from"./table.1067e1b3.js";import"./index.1d81a672.js";import"./Checkbox.77af456b.js";import"./index.53bde1b9.js";import"./index.a30387ae.js";import"./useForm.0b456d22.js";import"./index.9126614a.js";import"./index.2440c5f5.js";import"./index.b556a78a.js";import"./useSize.a0f971b4.js";import"./eagerComputed.b4caa6b1.js";import"./useWindowSizeFn.43b44744.js";import"./useContentViewHeight.fa21b489.js";import"./ArrowLeftOutlined.6cbdd482.js";import"./index.d76d5ff0.js";import"./transButton.a71e0ac3.js";import"./index.5d9f2293.js";import"./index.b4585842.js";import"./index.4e9d050c.js";import"./uuid.2b29000c.js";import"./index.354b005f.js";import"./_baseIteratee.6f2aea4e.js";import"./get.177428c4.js";import"./DeleteOutlined.b2cc13f1.js";import"./index.04eaadeb.js";import"./useRefs.78498e36.js";import"./Form.50c6b0cf.js";import"./Col.dd538940.js";import"./useFlexGapSupport.4b430c1e.js";import"./index.448301d3.js";import"./FullscreenOutlined.31e68573.js";import"./index.093def42.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.dd657224.js";import"./index.185f09b6.js";import"./scrollTo.5c1783ce.js";import"./index.d384ecff.js";import"./index.b2e43c68.js";/* empty css              *//* empty css               */import"./index.d04c7300.js";import"./index.8e4fa7db.js";import"./index.e5e60202.js";import"./download.ed803174.js";import"./base64Conver.08b9f4ec.js";import"./index.7944a3bb.js";import"./index.651a19c8.js";import"./uniqBy.c45ce52f.js";const j=V({components:{BasicTable:P},setup(){const{createMessage:o}=H();function n(){}const[c,{setLoading:s,setColumns:a,getColumns:r,getDataSource:e,getRawDataSource:l,reload:m,getPaginationRef:C,setPagination:f,getSelectRows:_,getSelectRowKeys:F,setSelectedRowKeys:B,clearSelectedRowKeys:h}]=$({canResize:!0,title:"useTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528useTable\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",api:U,columns:p(),defSort:{field:"name",order:"ascend"},rowKey:"id",showTableSetting:!0,onChange:n,rowSelection:{type:"checkbox"},onColumnsChange:v=>{}});function k(){s(!0),setTimeout(()=>{s(!1)},1e3)}function b(){a(M())}function D(){a(p()),m({page:1})}function E(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),r()}function S(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),e()}function T(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),l()}function w(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),C()}function R(){f({current:2}),m()}function y(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),_()}function A(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),F()}function L(){B(["0","1","2"])}function K(){h()}return{registerTable:c,changeLoading:k,changeColumns:b,reloadTable:D,getColumn:E,getTableData:S,getTableRawData:T,getPagination:w,setPaginationInfo:R,getSelectRowList:y,getSelectRowKeyList:A,setSelectedRowKeyList:L,clearSelect:K,onChange:n}}}),q={class:"p-4"},G={class:"mb-4"},J=i(" \u8FD8\u539F "),O=i(" \u5F00\u542Floading "),Q=i(" \u66F4\u6539Columns "),W=i(" \u83B7\u53D6Columns "),X=i(" \u83B7\u53D6\u8868\u683C\u6570\u636E "),Y=i(" \u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E "),Z=i(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 "),x={class:"mb-4"},oo=i(" \u83B7\u53D6\u9009\u4E2D\u884C "),eo=i(" \u83B7\u53D6\u9009\u4E2D\u884CKey "),to=i(" \u8BBE\u7F6E\u9009\u4E2D\u884C "),uo=i(" \u6E05\u7A7A\u9009\u4E2D\u884C "),io=i(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F ");function no(o,n,c,s,a,r){const e=d("a-button"),l=d("BasicTable");return z(),I("div",q,[g("div",G,[t(e,{class:"mr-2",onClick:o.reloadTable},{default:u(()=>[J]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.changeLoading},{default:u(()=>[O]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.changeColumns},{default:u(()=>[Q]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getColumn},{default:u(()=>[W]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getTableData},{default:u(()=>[X]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getTableRawData},{default:u(()=>[Y]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.setPaginationInfo},{default:u(()=>[Z]),_:1},8,["onClick"])]),g("div",x,[t(e,{class:"mr-2",onClick:o.getSelectRowList},{default:u(()=>[oo]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getSelectRowKeyList},{default:u(()=>[eo]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.setSelectedRowKeyList},{default:u(()=>[to]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.clearSelect},{default:u(()=>[uo]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getPagination},{default:u(()=>[io]),_:1},8,["onClick"])]),t(l,{onRegister:o.registerTable},null,8,["onRegister"])])}var se=N(j,[["render",no]]);export{se as default};
