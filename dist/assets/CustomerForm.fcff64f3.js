import{B as C}from"./BasicForm.5910004e.js";import{u as B}from"./useForm.49e0e708.js";import{U as g,a as E,bC as F,I as a,J as r,o as h,j as b,y as n,n as s,b9 as v,H as A}from"./index.66dc6cca.js";import{P}from"./index.2adec96f.js";/* empty css               *//* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.dd449670.js";/* empty css                *//* empty css                */import"./index.b75ea1a3.js";import"./useWindowSizeFn.42dc6d89.js";import"./FullscreenOutlined.72d58049.js";/* empty css                *//* empty css                *//* empty css                */import"./download.5b2676c7.js";import"./uniqBy.e1e9a821.js";/* empty css               *//* empty css                */import"./useContentViewHeight.1394d2f2.js";const l=[{field:"field1",component:"Input",label:"render\u65B9\u5F0F",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:o})=>v(a,{placeholder:"\u8BF7\u8F93\u5165",value:e[o],onChange:t=>{e[o]=t.target.value}})},{field:"field2",component:"Input",label:"render\u7EC4\u4EF6slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"\u81EA\u5B9A\u4E49Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}],S=E({components:{BasicForm:C,CollapseContainer:F,PageWrapper:P,[a.name]:a},setup(){const{createMessage:e}=A(),[o,{setProps:t}]=B({labelWidth:120,schemas:l,actionColOptions:{span:24}});return{register:o,schemas:l,handleSubmit:p=>{e.success("click search,values:"+JSON.stringify(p))},setProps:t}}});function I(e,o,t,p,x,W){const m=r("a-input"),c=r("BasicForm"),d=r("CollapseContainer"),f=r("PageWrapper");return h(),b(f,{title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u793A\u4F8B"},{default:n(()=>[s(d,{title:"\u81EA\u5B9A\u4E49\u8868\u5355"},{default:n(()=>[s(c,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:n(({model:u,field:i})=>[s(m,{value:u[i],"onUpdate:value":_=>u[i]=_,placeholder:"\u81EA\u5B9A\u4E49slot"},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var oe=g(S,[["render",I]]);export{oe as default};