var N=Object.defineProperty,y=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var B=(e,n,o)=>n in e?N(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,F=(e,n)=>{for(var o in n||(n={}))M.call(n,o)&&B(e,o,n[o]);if(b)for(var o of b(n))I.call(n,o)&&B(e,o,n[o]);return e},C=(e,n)=>y(e,A(n));import{P as S}from"./index.9126614a.js";import{a as E,b2 as u,s as Y,c as H,eG as P,a6 as R,eH as j,en as k,dx as h,av as O,cz as U,aF as W,br as V,o as $,h as q,t as z,aD as G,cD as J,v as K,bc as L,E as D,j as Q,y as f,n as i,m as _}from"./index.976f028d.js";import"./index.2440c5f5.js";import"./index.b556a78a.js";import"./useSize.a0f971b4.js";import"./eagerComputed.b4caa6b1.js";import"./useWindowSizeFn.43b44744.js";import"./useContentViewHeight.fa21b489.js";import"./ArrowLeftOutlined.6cbdd482.js";import"./index.d76d5ff0.js";import"./transButton.a71e0ac3.js";const p=1e3,d=p*60,v=d*60,w=v*24,X=E({name:"Time",props:{value:u.oneOfType([u.number,u.instanceOf(Date),u.string]).isRequired,step:u.number.def(60),mode:u.oneOf(["date","datetime","relative"]).def("relative")},setup(e){const n=Y(""),{t:o}=H();P(m,e.step*p),R(()=>e.value,()=>{m()},{immediate:!0});function T(){const{value:t}=e;let s=0;if(U(t)){const l=t.toString().length>10?t:t*1e3;s=new Date(l).getTime()}else W(t)?s=new Date(t).getTime():V(t)&&(s=t.getTime());return s}function m(){const{mode:t,value:s}=e,l=T();t==="relative"?n.value=g(l):t==="datetime"?n.value=j(s):t==="date"&&(n.value=k(s))}function g(t){const s=new Date().getTime(),l=h(t).isBefore(s);let a=s-t;l||(a=-a);let r="",c=o(l?"component.time.before":"component.time.after");return a<p?r=o("component.time.just"):a<d?r=parseInt(a/p)+o("component.time.seconds")+c:a>=d&&a<v?r=Math.floor(a/d)+o("component.time.minutes")+c:a>=v&&a<w?r=Math.floor(a/v)+o("component.time.hours")+c:a>=w&&a<262386e4?r=Math.floor(a/w)+o("component.time.days")+c:a>=262386e4&&a<=3156786e4&&l?r=h(t).format("MM-DD-HH-mm"):r=h(t).format("YYYY"),r}return{date:n}}});function Z(e,n,o,T,m,g){return $(),q("span",null,z(e.date),1)}var x=O(X,[["render",Z]]);const ee=G(x),te=E({components:{PageWrapper:S,Time:ee,CollapseContainer:J},setup(){const e=new Date().getTime(),n=K({time1:e-60*3*1e3,time2:e-86400*3*1e3});return C(F({},L(n)),{now:e})}}),ne=_("br",null,null,-1),oe=_("br",null,null,-1),ae=_("br",null,null,-1),se=_("br",null,null,-1);function ie(e,n,o,T,m,g){const t=D("Time"),s=D("CollapseContainer"),l=D("PageWrapper");return $(),Q(l,{title:"\u65F6\u95F4\u7EC4\u4EF6\u793A\u4F8B"},{default:f(()=>[i(s,{title:"\u57FA\u7840\u793A\u4F8B"},{default:f(()=>[i(t,{value:e.time1},null,8,["value"]),ne,i(t,{value:e.time2},null,8,["value"])]),_:1}),i(s,{title:"\u5B9A\u65F6\u66F4\u65B0",class:"my-4"},{default:f(()=>[i(t,{value:e.now,step:1},null,8,["value"]),oe,i(t,{value:e.now,step:5},null,8,["value"])]),_:1}),i(s,{title:"\u5B9A\u65F6\u66F4\u65B0"},{default:f(()=>[i(t,{value:e.now,mode:"date"},null,8,["value"]),ae,i(t,{value:e.now,mode:"datetime"},null,8,["value"]),se,i(t,{value:e.now},null,8,["value"])]),_:1})]),_:1})}var he=O(te,[["render",ie]]);export{he as default};
