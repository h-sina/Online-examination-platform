import{B as h}from"./TableImg.5adf77e9.js";import{T as k}from"./BasicForm.4ff9ea41.js";import{u as C}from"./useTable.dd834775.js";import{av as w,a as E,E as r,o as _,h as D,n as u,y as c,z as T}from"./index.976f028d.js";import"./index.1d81a672.js";import"./Checkbox.77af456b.js";import"./index.53bde1b9.js";import"./index.a30387ae.js";import"./useForm.0b456d22.js";import"./index.9126614a.js";import"./index.2440c5f5.js";import"./index.b556a78a.js";import"./useSize.a0f971b4.js";import"./eagerComputed.b4caa6b1.js";import"./useWindowSizeFn.43b44744.js";import"./useContentViewHeight.fa21b489.js";import"./ArrowLeftOutlined.6cbdd482.js";import"./index.d76d5ff0.js";import"./transButton.a71e0ac3.js";import"./index.5d9f2293.js";import"./index.b4585842.js";import"./index.4e9d050c.js";import"./uuid.2b29000c.js";import"./index.354b005f.js";import"./_baseIteratee.6f2aea4e.js";import"./get.177428c4.js";import"./DeleteOutlined.b2cc13f1.js";import"./index.04eaadeb.js";import"./useRefs.78498e36.js";import"./Form.50c6b0cf.js";import"./Col.dd538940.js";import"./useFlexGapSupport.4b430c1e.js";import"./index.448301d3.js";import"./FullscreenOutlined.31e68573.js";import"./index.093def42.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.dd657224.js";import"./index.185f09b6.js";import"./scrollTo.5c1783ce.js";import"./index.d384ecff.js";import"./index.b2e43c68.js";/* empty css              *//* empty css               */import"./index.d04c7300.js";import"./index.8e4fa7db.js";import"./index.e5e60202.js";import"./download.ed803174.js";import"./base64Conver.08b9f4ec.js";import"./index.7944a3bb.js";import"./index.651a19c8.js";import"./uniqBy.c45ce52f.js";const g=[{title:"\u6210\u5458\u59D3\u540D",dataIndex:"name",editRow:!0},{title:"\u5DE5\u53F7",dataIndex:"no",editRow:!0},{title:"\u6240\u5C5E\u90E8\u95E8",dataIndex:"dept",editRow:!0}],B=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}],N=E({components:{BasicTable:h,TableAction:k},setup(){const[n,{getDataSource:e}]=C({columns:g,showIndexColumn:!1,dataSource:B,actionColumn:{width:160,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function a(t){var o;(o=t.onEdit)==null||o.call(t,!0)}function l(t){var o;if((o=t.onEdit)==null||o.call(t,!1),t.isNew){const i=e(),f=i.findIndex(b=>b.key===t.key);i.splice(f,1)}}function s(t){var o;(o=t.onEdit)==null||o.call(t,!1,!0)}function d(t){}function p(){const t=e(),o={name:"",no:"",dept:"",editable:!0,isNew:!0,key:`${Date.now()}`};t.push(o)}function m(t,o){return t.editable?[{label:"\u4FDD\u5B58",onClick:s.bind(null,t,o)},{label:"\u53D6\u6D88",popConfirm:{title:"\u662F\u5426\u53D6\u6D88\u7F16\u8F91",confirm:l.bind(null,t,o)}}]:[{label:"\u7F16\u8F91",onClick:a.bind(null,t)},{label:"\u5220\u9664"}]}return{registerTable:n,handleEdit:a,createActions:m,handleAdd:p,getDataSource:e,handleEditChange:d}}}),x=T(" \u65B0\u589E\u6210\u5458 ");function F(n,e,a,l,s,d){const p=r("TableAction"),m=r("BasicTable"),t=r("a-button");return _(),D("div",null,[u(m,{onRegister:n.registerTable,onEditChange:n.handleEditChange},{action:c(({record:o,column:i})=>[u(p,{actions:n.createActions(o,i)},null,8,["actions"])]),_:1},8,["onRegister","onEditChange"]),u(t,{block:"",class:"mt-5",type:"dashed",onClick:n.handleAdd},{default:c(()=>[x]),_:1},8,["onClick"])])}var Nt=w(N,[["render",F]]);export{Nt as default};
