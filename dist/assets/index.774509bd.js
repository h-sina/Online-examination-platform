import{B as f}from"./TableImg.5adf77e9.js";import{T as h}from"./BasicForm.4ff9ea41.js";import{u as b}from"./useTable.dd834775.js";import{c as g}from"./system.19d87b00.js";import{u as _}from"./index.5f3e5534.js";import{R as C,c as D,s as T}from"./RoleDrawer.32fa6bd0.js";import{av as w,a as R,E as e,o as B,h as S,n as r,y as m,z as E}from"./index.976f028d.js";import"./index.1d81a672.js";import"./Checkbox.77af456b.js";import"./index.53bde1b9.js";import"./index.a30387ae.js";import"./useForm.0b456d22.js";import"./index.9126614a.js";import"./index.2440c5f5.js";import"./index.b556a78a.js";import"./useSize.a0f971b4.js";import"./eagerComputed.b4caa6b1.js";import"./useWindowSizeFn.43b44744.js";import"./useContentViewHeight.fa21b489.js";import"./ArrowLeftOutlined.6cbdd482.js";import"./index.d76d5ff0.js";import"./transButton.a71e0ac3.js";import"./index.5d9f2293.js";import"./index.b4585842.js";import"./index.4e9d050c.js";import"./uuid.2b29000c.js";import"./index.354b005f.js";import"./_baseIteratee.6f2aea4e.js";import"./get.177428c4.js";import"./DeleteOutlined.b2cc13f1.js";import"./index.04eaadeb.js";import"./useRefs.78498e36.js";import"./Form.50c6b0cf.js";import"./Col.dd538940.js";import"./useFlexGapSupport.4b430c1e.js";import"./index.448301d3.js";import"./FullscreenOutlined.31e68573.js";import"./index.093def42.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.dd657224.js";import"./index.185f09b6.js";import"./scrollTo.5c1783ce.js";import"./index.d384ecff.js";import"./index.b2e43c68.js";/* empty css              *//* empty css               */import"./index.d04c7300.js";import"./index.8e4fa7db.js";import"./index.e5e60202.js";import"./download.ed803174.js";import"./base64Conver.08b9f4ec.js";import"./index.7944a3bb.js";import"./index.651a19c8.js";import"./uniqBy.c45ce52f.js";import"./index.04a4b2bc.js";import"./index.2799bcf4.js";import"./useContextMenu.fe08b0c6.js";const k=R({name:"RoleManagement",components:{BasicTable:f,RoleDrawer:C,TableAction:h},setup(){const[o,{openDrawer:i}]=_(),[p,{reload:s}]=b({title:"\u89D2\u8272\u5217\u8868",api:g,columns:D,formConfig:{labelWidth:120,schemas:T},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function l(){i(!0,{isUpdate:!1})}function c(t){i(!0,{record:t,isUpdate:!0})}function n(t){}function a(){s()}return{registerTable:p,registerDrawer:o,handleCreate:l,handleEdit:c,handleDelete:n,handleSuccess:a}}}),v=E(" \u65B0\u589E\u89D2\u8272 ");function y(o,i,p,s,l,c){const n=e("a-button"),a=e("TableAction"),t=e("BasicTable"),d=e("RoleDrawer");return B(),S("div",null,[r(t,{onRegister:o.registerTable},{toolbar:m(()=>[r(n,{type:"primary",onClick:o.handleCreate},{default:m(()=>[v]),_:1},8,["onClick"])]),action:m(({record:u})=>[r(a,{actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,u)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),r(d,{onRegister:o.registerDrawer,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var Io=w(k,[["render",y]]);export{Io as default};