import{B as d,T as l}from"./TableImg.8eef3a03.js";import"./BasicForm.5910004e.js";import{u as c}from"./useTable.784416e6.js";import{U as F,a as g,br as _,bG as E,J as i,o as T,h as I,n as u,y as e,z as a,t as r}from"./index.66dc6cca.js";/* empty css               *//* empty css                */import{d as b}from"./table.afc59135.js";/* empty css              *//* empty css                */import"./useForm.49e0e708.js";import"./index.2adec96f.js";/* empty css               */import"./useWindowSizeFn.42dc6d89.js";import"./useContentViewHeight.1394d2f2.js";/* empty css                *//* empty css                */import"./index.b75ea1a3.js";import"./FullscreenOutlined.72d58049.js";/* empty css               */import"./sortable.esm.2632adaa.js";import"./RedoOutlined.f37638f5.js";/* empty css                *//* empty css                */import"./index.2a4ae6b3.js";/* empty css               *//* empty css               */import"./index.dd449670.js";/* empty css                *//* empty css                *//* empty css                */import"./download.5b2676c7.js";import"./uniqBy.e1e9a821.js";const x=[{title:"ID",dataIndex:"id"},{title:"\u5934\u50CF",dataIndex:"avatar",width:100},{title:"\u5206\u7C7B",dataIndex:"category",width:80,align:"center",defaultHidden:!0},{title:"\u59D3\u540D",dataIndex:"name",width:120},{title:"\u56FE\u7247\u5217\u88681",dataIndex:"imgArr",helpMessage:["\u8FD9\u662F\u7B80\u5355\u6A21\u5F0F\u7684\u56FE\u7247\u5217\u8868","\u53EA\u4F1A\u663E\u793A\u4E00\u5F20\u5728\u8868\u683C\u4E2D","\u4F46\u70B9\u51FB\u53EF\u9884\u89C8\u591A\u5F20\u56FE\u7247"],width:140},{title:"\u7167\u7247\u5217\u88682",dataIndex:"imgs",width:160},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no"},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime"}],A=g({components:{BasicTable:d,TableImg:l,Tag:_,Avatar:E},setup(){const[o]=c({title:"\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9",titleHelpMessage:"\u8868\u683C\u4E2D\u6240\u6709\u5934\u50CF\u3001\u56FE\u7247\u5747\u4E3Amock\u751F\u6210\uFF0C\u4EC5\u7528\u4E8E\u6F14\u793A\u56FE\u7247\u5360\u4F4D",api:b,columns:x,bordered:!0,showTableSetting:!0});return{registerTable:o}}}),B={class:"p-4"};function C(o,f,h,D,v,w){const s=i("Tag"),n=i("Avatar"),m=i("TableImg"),p=i("BasicTable");return T(),I("div",B,[u(p,{onRegister:o.registerTable},{id:e(({record:t})=>[a(" ID: "+r(t.id),1)]),no:e(({record:t})=>[u(s,{color:"green"},{default:e(()=>[a(r(t.no),1)]),_:2},1024)]),avatar:e(({record:t})=>[u(n,{size:60,src:t.avatar},null,8,["src"])]),img:e(({text:t})=>[u(m,{size:60,simpleShow:!0,imgList:t},null,8,["imgList"])]),imgs:e(({text:t})=>[u(m,{size:60,imgList:t},null,8,["imgList"])]),category:e(({record:t})=>[u(s,{color:"green"},{default:e(()=>[a(r(t.no),1)]),_:2},1024)]),_:1},8,["onRegister"])])}var mt=F(A,[["render",C]]);export{mt as default};