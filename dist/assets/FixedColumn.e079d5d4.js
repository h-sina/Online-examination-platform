import{B as l}from"./TableImg.f41acf2c.js";import{T as m}from"./BasicForm.d88c9cb9.js";import{u as s}from"./useTable.88a45bec.js";import{d}from"./table.35715885.js";import{U as c,a as F,J as r,o as f,h as b,n as a,y as h}from"./index.5903aaea.js";/* empty css              *//* empty css                */import"./useForm.522fb0fd.js";import"./index.2cbd72b1.js";/* empty css               *//* empty css                */import"./useWindowSizeFn.9bc4a4d0.js";import"./useContentViewHeight.0ad58928.js";/* empty css                *//* empty css                *//* empty css               */import"./index.2670c85d.js";import"./FullscreenOutlined.115d63d2.js";/* empty css               */import"./sortable.esm.2632adaa.js";import"./RedoOutlined.4a997f15.js";/* empty css                *//* empty css                */import"./index.3f4b20fc.js";/* empty css               *//* empty css               */import"./index.b1c133f4.js";/* empty css                *//* empty css                *//* empty css                */import"./download.8156160a.js";import"./uniqBy.03c90016.js";const B=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"\u59D3\u540D",dataIndex:"name",width:260},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",width:300},{title:"\u5F00\u59CB\u65F6\u95F4",width:200,dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200}],T=F({components:{BasicTable:l,TableAction:m},setup(){const[t]=s({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:d,columns:B,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action"}});function e(o){}function i(o){}return{registerTable:t,handleDelete:e,handleOpen:i}}}),A={class:"p-4"};function _(t,e,i,o,w,x){const u=r("TableAction"),p=r("BasicTable");return f(),b("div",A,[a(p,{onRegister:t.registerTable},{action:h(({record:n})=>[a(u,{actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,n)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:t.handleOpen.bind(null,n)}}]},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister"])])}var et=c(T,[["render",_]]);export{et as default};
