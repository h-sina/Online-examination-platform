import{B as u,a as c}from"./index.448301d3.js";import{a as d,av as p,E as r,o as _,j as m,y as e,n,z as l}from"./index.976f028d.js";import"./useWindowSizeFn.43b44744.js";import"./FullscreenOutlined.31e68573.js";const M=d({components:{BasicModal:u},setup(){const[o,{closeModal:t,setModalProps:s}]=c();return{register:o,closeModal:t,setModalProps:()=>{s({title:"Modal New Title"})}}}}),f=l(" \u4ECE\u5185\u90E8\u5173\u95ED\u5F39\u7A97 "),E=l(" \u4ECE\u5185\u90E8\u4FEE\u6539title ");function C(o,t,s,k,B,g){const a=r("a-button"),i=r("BasicModal");return _(),m(i,{onRegister:o.register,title:"Modal Title",helpMessage:["\u63D0\u793A1","\u63D0\u793A2"],okButtonProps:{disabled:!0}},{default:e(()=>[n(a,{type:"primary",onClick:o.closeModal,class:"mr-2"},{default:e(()=>[f]),_:1},8,["onClick"]),n(a,{type:"primary",onClick:o.setModalProps},{default:e(()=>[E]),_:1},8,["onClick"])]),_:1},8,["onRegister"])}var b=p(M,[["render",C]]);export{b as default};
