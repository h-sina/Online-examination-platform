import{a,s as r,d5 as _,a5 as k,o as c,h as m,Z as f,a1 as C,U as O,J as o,j as v,y as i,n as x,m as y,t as B}from"./index.5903aaea.js";import{P as S}from"./index.2cbd72b1.js";/* empty css               *//* empty css                */import"./useWindowSizeFn.9bc4a4d0.js";import"./useContentViewHeight.0ad58928.js";const $=a({emits:["mounted","clickOutside"],setup(e,{emit:t}){const n=r(null);return _(n,()=>{t("clickOutside")}),k(()=>{t("mounted")}),(s,l)=>(c(),m("div",{ref_key:"wrap",ref:n},[f(s.$slots,"default")],512))}}),g=C($);const h=a({components:{ClickOutSide:g,PageWrapper:S},setup(){const e=r("Click");function t(){e.value="Click Out Side"}function n(){e.value="Click Inner"}return{innerClick:n,handleClickOutside:t,text:e}}});function E(e,t,n,s,l,w){const u=o("ClickOutSide"),d=o("PageWrapper");return c(),v(d,{title:"\u70B9\u5185\u5916\u90E8\u89E6\u53D1\u4E8B\u4EF6"},{default:i(()=>[x(u,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:i(()=>[y("div",{onClick:t[0]||(t[0]=(...p)=>e.innerClick&&e.innerClick(...p)),class:"demo-box"},B(e.text),1)]),_:1},8,["onClickOutside"])]),_:1})}var V=O(h,[["render",E],["__scopeId","data-v-6c56edd4"]]);export{V as default};
