import{U as r,a as i,aC as l,b as c,J as d,o as s,h as o,E as _,Y as u,q as a,j as f,y as m,m as n,bJ as y,bK as v}from"./index.66dc6cca.js";const C=i({name:"MenuTypePicker",components:{Tooltip:l},props:{menuTypeList:{type:Array,defualt:()=>[]},handler:{type:Function,default:()=>({})},def:{type:String,default:""}},setup(){const{prefixCls:e}=c("setting-menu-type-picker");return{prefixCls:e}}}),h=e=>(y("data-v-119d0732"),e=e(),v(),e),k=["onClick"],$=h(()=>n("div",{class:"mix-sidebar"},null,-1)),T=[$];function b(e,g,x,B,I,S){const p=d("Tooltip");return s(),o("div",{class:a(e.prefixCls)},[(s(!0),o(_,null,u(e.menuTypeList||[],t=>(s(),f(p,{key:t.title,title:t.title,placement:"bottom"},{default:m(()=>[n("div",{onClick:L=>e.handler(t),class:a([`${e.prefixCls}__item`,`${e.prefixCls}__item--${t.type}`,{[`${e.prefixCls}__item--active`]:e.def===t.type}])},T,10,k)]),_:2},1032,["title"]))),128))],2)}var w=r(C,[["render",b],["__scopeId","data-v-119d0732"]]);export{w as default};