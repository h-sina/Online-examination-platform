import{B as a,a as n}from"./index.5f3e5534.js";import{B as c}from"./BasicForm.4ff9ea41.js";import{u as l}from"./useForm.0b456d22.js";import{a as u,av as f,E as i,o as d,j as B,y as _,m as g,n as w,ax as F}from"./index.976f028d.js";import"./index.04a4b2bc.js";import"./ArrowLeftOutlined.6cbdd482.js";/* empty css              *//* empty css               */import"./index.093def42.js";import"./index.1d81a672.js";import"./Checkbox.77af456b.js";import"./index.53bde1b9.js";import"./index.4e9d050c.js";import"./index.5d9f2293.js";import"./index.b4585842.js";import"./index.d04c7300.js";import"./get.177428c4.js";import"./index.a30387ae.js";import"./index.354b005f.js";import"./_baseIteratee.6f2aea4e.js";import"./DeleteOutlined.b2cc13f1.js";import"./index.04eaadeb.js";import"./useRefs.78498e36.js";import"./Form.50c6b0cf.js";import"./Col.dd538940.js";import"./useFlexGapSupport.4b430c1e.js";import"./useSize.a0f971b4.js";import"./index.8e4fa7db.js";import"./index.448301d3.js";import"./useWindowSizeFn.43b44744.js";import"./FullscreenOutlined.31e68573.js";import"./index.e5e60202.js";import"./index.185f09b6.js";import"./uuid.2b29000c.js";import"./download.ed803174.js";import"./base64Conver.08b9f4ec.js";import"./index.7944a3bb.js";import"./index.651a19c8.js";import"./uniqBy.c45ce52f.js";const p=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:12}}],h=u({components:{BasicDrawer:a,BasicForm:c},setup(){const[o,{setFieldsValue:t}]=l({labelWidth:120,schemas:p,showActionButtonGroup:!1,actionColOptions:{span:24}}),[e]=n(r=>{t({field2:r.data,field1:r.info})});return{register:e,schemas:p,registerForm:o}}});function D(o,t,e,r,$,v){const m=i("BasicForm"),s=i("BasicDrawer");return d(),B(s,F(o.$attrs,{onRegister:o.register,title:"Drawer Title",width:"50%"}),{default:_(()=>[g("div",null,[w(m,{onRegister:o.registerForm},null,8,["onRegister"])])]),_:1},16,["onRegister"])}var no=f(h,[["render",D]]);export{no as default};