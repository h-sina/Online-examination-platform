import{B as f}from"./TableImg.8102a7c5.js";import{T as h}from"./BasicForm.f8200627.js";import{u as b}from"./useTable.4b5df510.js";import{c as C}from"./system.80955fc9.js";import{u as g}from"./index.e353353f.js";import{M as T,c as _,s as D}from"./MenuDrawer.433784d9.js";import{U as w,a as S,J as t,o as B,h as F,n,y as l,O as M,z as k}from"./index.dd87d40a.js";/* empty css              *//* empty css                */import"./useForm.a7a1da29.js";import"./index.ef71507d.js";/* empty css               *//* empty css                */import"./useWindowSizeFn.ba5070cb.js";import"./useContentViewHeight.25d38b2f.js";/* empty css                *//* empty css                *//* empty css               */import"./index.4dda775a.js";import"./FullscreenOutlined.87f5bef8.js";/* empty css               */import"./sortable.esm.2632adaa.js";import"./RedoOutlined.796f116b.js";/* empty css                *//* empty css                */import"./index.015f9bd2.js";/* empty css               *//* empty css               */import"./index.3f815269.js";/* empty css                *//* empty css                *//* empty css                */import"./download.302161fe.js";import"./uniqBy.fe41e18a.js";/* empty css               */const R=S({name:"MenuManagement",components:{BasicTable:f,MenuDrawer:T,TableAction:h},setup(){const[e,{openDrawer:r}]=g(),[m,{reload:u,expandAll:p}]=b({title:"\u83DC\u5355\u5217\u8868",api:C,columns:_,formConfig:{labelWidth:120,schemas:D},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function d(){r(!0,{isUpdate:!1})}function i(o){r(!0,{record:o,isUpdate:!0})}function a(o){}function s(){u()}function c(){M(p)}return{registerTable:m,registerDrawer:e,handleCreate:d,handleEdit:i,handleDelete:a,handleSuccess:s,onFetchSuccess:c}}}),A=k(" \u65B0\u589E\u83DC\u5355 ");function E(e,r,m,u,p,d){const i=t("a-button"),a=t("TableAction"),s=t("BasicTable"),c=t("MenuDrawer");return B(),F("div",null,[n(s,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:l(()=>[n(i,{type:"primary",onClick:e.handleCreate},{default:l(()=>[A]),_:1},8,["onClick"])]),action:l(({record:o})=>[n(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])]),_:1},8,["onRegister","onFetchSuccess"]),n(c,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var pe=w(R,[["render",E]]);export{pe as default};