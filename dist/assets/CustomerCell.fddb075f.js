import{B as d,T as l}from"./TableImg.5adf77e9.js";import"./BasicForm.4ff9ea41.js";import{u as c}from"./useTable.dd834775.js";import{av as F,a as g,E as i,o as E,h as _,n as o,y as e,z as r,t as a}from"./index.976f028d.js";import{T}from"./index.4e9d050c.js";import{A as f}from"./index.b556a78a.js";import{d as A}from"./table.1067e1b3.js";import"./index.1d81a672.js";import"./Checkbox.77af456b.js";import"./index.53bde1b9.js";import"./index.a30387ae.js";import"./useForm.0b456d22.js";import"./index.9126614a.js";import"./index.2440c5f5.js";import"./useWindowSizeFn.43b44744.js";import"./useContentViewHeight.fa21b489.js";import"./ArrowLeftOutlined.6cbdd482.js";import"./index.d76d5ff0.js";import"./useSize.a0f971b4.js";import"./transButton.a71e0ac3.js";import"./index.5d9f2293.js";import"./index.b4585842.js";import"./uuid.2b29000c.js";import"./index.354b005f.js";import"./_baseIteratee.6f2aea4e.js";import"./get.177428c4.js";import"./DeleteOutlined.b2cc13f1.js";import"./index.04eaadeb.js";import"./useRefs.78498e36.js";import"./Form.50c6b0cf.js";import"./Col.dd538940.js";import"./useFlexGapSupport.4b430c1e.js";import"./index.448301d3.js";import"./FullscreenOutlined.31e68573.js";import"./index.093def42.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.dd657224.js";import"./eagerComputed.b4caa6b1.js";import"./index.185f09b6.js";import"./scrollTo.5c1783ce.js";import"./index.d384ecff.js";import"./index.b2e43c68.js";/* empty css              *//* empty css               */import"./index.d04c7300.js";import"./index.8e4fa7db.js";import"./index.e5e60202.js";import"./download.ed803174.js";import"./base64Conver.08b9f4ec.js";import"./index.7944a3bb.js";import"./index.651a19c8.js";import"./uniqBy.c45ce52f.js";const I=[{title:"ID",dataIndex:"id"},{title:"\u5934\u50CF",dataIndex:"avatar",width:100},{title:"\u5206\u7C7B",dataIndex:"category",width:80,align:"center",defaultHidden:!0},{title:"\u59D3\u540D",dataIndex:"name",width:120},{title:"\u56FE\u7247\u5217\u88681",dataIndex:"imgArr",helpMessage:["\u8FD9\u662F\u7B80\u5355\u6A21\u5F0F\u7684\u56FE\u7247\u5217\u8868","\u53EA\u4F1A\u663E\u793A\u4E00\u5F20\u5728\u8868\u683C\u4E2D","\u4F46\u70B9\u51FB\u53EF\u9884\u89C8\u591A\u5F20\u56FE\u7247"],width:140},{title:"\u7167\u7247\u5217\u88682",dataIndex:"imgs",width:160},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no"},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime"}],x=g({components:{BasicTable:d,TableImg:l,Tag:T,Avatar:f},setup(){const[u]=c({title:"\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9",titleHelpMessage:"\u8868\u683C\u4E2D\u6240\u6709\u5934\u50CF\u3001\u56FE\u7247\u5747\u4E3Amock\u751F\u6210\uFF0C\u4EC5\u7528\u4E8E\u6F14\u793A\u56FE\u7247\u5360\u4F4D",api:A,columns:I,bordered:!0,showTableSetting:!0});return{registerTable:u}}}),B={class:"p-4"};function C(u,b,h,v,D,w){const m=i("Tag"),s=i("Avatar"),p=i("TableImg"),n=i("BasicTable");return E(),_("div",B,[o(n,{onRegister:u.registerTable},{id:e(({record:t})=>[r(" ID: "+a(t.id),1)]),no:e(({record:t})=>[o(m,{color:"green"},{default:e(()=>[r(a(t.no),1)]),_:2},1024)]),avatar:e(({record:t})=>[o(s,{size:60,src:t.avatar},null,8,["src"])]),img:e(({text:t})=>[o(p,{size:60,simpleShow:!0,imgList:t},null,8,["imgList"])]),imgs:e(({text:t})=>[o(p,{size:60,imgList:t},null,8,["imgList"])]),category:e(({record:t})=>[o(m,{color:"green"},{default:e(()=>[r(a(t.no),1)]),_:2},1024)]),_:1},8,["onRegister"])])}var Dt=F(x,[["render",C]]);export{Dt as default};
