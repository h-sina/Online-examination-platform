import{B as b}from"./TableImg.5adf77e9.js";import"./BasicForm.4ff9ea41.js";import{getBasicColumns as p,getBasicShortColumns as D}from"./tableData.0a246808.js";import{av as E,a as R,s as w,E as f,o as S,h as A,m as d,n as u,y as i,z as n,D as T,i as y}from"./index.976f028d.js";import{d as L}from"./table.1067e1b3.js";import"./index.1d81a672.js";import"./Checkbox.77af456b.js";import"./index.53bde1b9.js";import"./index.a30387ae.js";import"./useForm.0b456d22.js";import"./index.9126614a.js";import"./index.2440c5f5.js";import"./index.b556a78a.js";import"./useSize.a0f971b4.js";import"./eagerComputed.b4caa6b1.js";import"./useWindowSizeFn.43b44744.js";import"./useContentViewHeight.fa21b489.js";import"./ArrowLeftOutlined.6cbdd482.js";import"./index.d76d5ff0.js";import"./transButton.a71e0ac3.js";import"./index.5d9f2293.js";import"./index.b4585842.js";import"./index.4e9d050c.js";import"./uuid.2b29000c.js";import"./index.354b005f.js";import"./_baseIteratee.6f2aea4e.js";import"./get.177428c4.js";import"./DeleteOutlined.b2cc13f1.js";import"./index.04eaadeb.js";import"./useRefs.78498e36.js";import"./Form.50c6b0cf.js";import"./Col.dd538940.js";import"./useFlexGapSupport.4b430c1e.js";import"./index.448301d3.js";import"./FullscreenOutlined.31e68573.js";import"./index.093def42.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.dd657224.js";import"./index.185f09b6.js";import"./scrollTo.5c1783ce.js";import"./index.d384ecff.js";import"./index.b2e43c68.js";/* empty css              *//* empty css               */import"./index.d04c7300.js";import"./index.8e4fa7db.js";import"./index.e5e60202.js";import"./download.ed803174.js";import"./base64Conver.08b9f4ec.js";import"./index.7944a3bb.js";import"./index.651a19c8.js";import"./uniqBy.c45ce52f.js";const K=R({components:{BasicTable:b},setup(){const o=w(null),{createMessage:s}=T();function t(){const m=y(o);if(!m)throw new Error("tableAction is null");return m}function l(){t().setLoading(!0),setTimeout(()=>{t().setLoading(!1)},1e3)}function c(){t().setColumns(D())}function r(){t().setColumns(p()),t().reload({page:1})}function e(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getColumns()}function a(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getDataSource()}function C(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getRawDataSource()}function g(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getPaginationRef()}function _(){t().setPagination({current:2}),t().reload()}function F(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getSelectRows()}function B(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getSelectRowKeys()}function k(){t().setSelectedRowKeys(["0","1","2"])}function h(){t().clearSelectedRowKeys()}return{tableRef:o,api:L,columns:p(),changeLoading:l,changeColumns:c,reloadTable:r,getColumn:e,getTableData:a,getTableRawData:C,getPagination:g,setPaginationInfo:_,getSelectRowList:F,getSelectRowKeyList:B,setSelectedRowKeyList:k,clearSelect:h}}}),v={class:"p-4"},P={class:"mb-4"},$=n(" \u8FD8\u539F "),M=n(" \u5F00\u542Floading "),N=n(" \u66F4\u6539Columns "),V=n(" \u83B7\u53D6Columns "),z=n(" \u83B7\u53D6\u8868\u683C\u6570\u636E "),I=n(" \u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E "),H=n(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 "),j={class:"mb-4"},q=n(" \u83B7\u53D6\u9009\u4E2D\u884C "),G=n(" \u83B7\u53D6\u9009\u4E2D\u884CKey "),J=n(" \u8BBE\u7F6E\u9009\u4E2D\u884C "),O=n(" \u6E05\u7A7A\u9009\u4E2D\u884C "),Q=n(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F ");function U(o,s,t,l,c,r){const e=f("a-button"),a=f("BasicTable");return S(),A("div",v,[d("div",P,[u(e,{class:"mr-2",onClick:o.reloadTable},{default:i(()=>[$]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.changeLoading},{default:i(()=>[M]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.changeColumns},{default:i(()=>[N]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.getColumn},{default:i(()=>[V]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.getTableData},{default:i(()=>[z]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.getTableRawData},{default:i(()=>[I]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.setPaginationInfo},{default:i(()=>[H]),_:1},8,["onClick"])]),d("div",j,[u(e,{class:"mr-2",onClick:o.getSelectRowList},{default:i(()=>[q]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.getSelectRowKeyList},{default:i(()=>[G]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.setSelectedRowKeyList},{default:i(()=>[J]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.clearSelect},{default:i(()=>[O]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.getPagination},{default:i(()=>[Q]),_:1},8,["onClick"])]),u(a,{canResize:!1,title:"RefTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528Ref\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",ref:"tableRef",api:o.api,columns:o.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])}var Uo=E(K,[["render",U]]);export{Uo as default};
