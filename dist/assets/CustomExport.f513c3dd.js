import{B as d}from"./TableImg.5adf77e9.js";import"./BasicForm.4ff9ea41.js";import{E as f}from"./index.5775fe76.js";import{c as _,d as s,j as E}from"./data.a5fd2ceb.js";import{b as C}from"./index.448301d3.js";import{P as F}from"./index.9126614a.js";import{av as B,a as x,E as t,o as b,j as g,y as r,n as p,z as M}from"./index.976f028d.js";import"./index.1d81a672.js";import"./Checkbox.77af456b.js";import"./index.53bde1b9.js";import"./index.a30387ae.js";import"./useForm.0b456d22.js";import"./index.5d9f2293.js";import"./index.b4585842.js";import"./index.4e9d050c.js";import"./uuid.2b29000c.js";import"./index.354b005f.js";import"./_baseIteratee.6f2aea4e.js";import"./get.177428c4.js";import"./DeleteOutlined.b2cc13f1.js";import"./index.04eaadeb.js";import"./useRefs.78498e36.js";import"./Form.50c6b0cf.js";import"./Col.dd538940.js";import"./useFlexGapSupport.4b430c1e.js";import"./useSize.a0f971b4.js";import"./useWindowSizeFn.43b44744.js";import"./index.093def42.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.dd657224.js";import"./FullscreenOutlined.31e68573.js";import"./eagerComputed.b4caa6b1.js";import"./index.185f09b6.js";import"./scrollTo.5c1783ce.js";import"./index.d384ecff.js";import"./index.b2e43c68.js";/* empty css              *//* empty css               */import"./index.d04c7300.js";import"./index.8e4fa7db.js";import"./index.e5e60202.js";import"./download.ed803174.js";import"./base64Conver.08b9f4ec.js";import"./index.7944a3bb.js";import"./index.651a19c8.js";import"./uniqBy.c45ce52f.js";import"./index.2440c5f5.js";import"./index.b556a78a.js";import"./useContentViewHeight.fa21b489.js";import"./ArrowLeftOutlined.6cbdd482.js";import"./index.d76d5ff0.js";import"./transButton.a71e0ac3.js";const A=x({components:{BasicTable:d,ExpExcelModal:f,PageWrapper:F},setup(){function o({filename:m,bookType:a}){E({data:s,filename:m,write2excelOpts:{bookType:a}})}const[e,{openModal:i}]=C();return{defaultHeader:o,columns:_,data:s,register:e,openModal:i}}}),S=M(" \u5BFC\u51FA ");function T(o,e,i,m,a,h){const n=t("a-button"),u=t("BasicTable"),c=t("ExpExcelModal"),l=t("PageWrapper");return b(),g(l,{title:"\u5BFC\u51FA\u793A\u4F8B",content:"\u53EF\u4EE5\u9009\u62E9\u5BFC\u51FA\u683C\u5F0F"},{default:r(()=>[p(u,{title:"\u57FA\u7840\u8868\u683C",columns:o.columns,dataSource:o.data},{toolbar:r(()=>[p(n,{onClick:o.openModal},{default:r(()=>[S]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource"]),p(c,{onRegister:o.register,onSuccess:o.defaultHeader},null,8,["onRegister","onSuccess"])]),_:1})}var ho=B(A,[["render",T]]);export{ho as default};