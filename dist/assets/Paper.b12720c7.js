var y=Object.defineProperty,x=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var p=(t,o,e)=>o in t?y(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,m=(t,o)=>{for(var e in o||(o={}))h.call(o,e)&&p(t,e,o[e]);if(l)for(var e of l(o))C.call(o,e)&&p(t,e,o[e]);return t},_=(t,o)=>x(t,g(o));var i=(t,o,e)=>new Promise((d,u)=>{var c=s=>{try{a(e.next(s))}catch(n){u(n)}},r=s=>{try{a(e.throw(s))}catch(n){u(n)}},a=s=>s.done?d(s.value):Promise.resolve(s.value).then(c,r);a((e=e.apply(t,o)).next())});import{c as E,d as k}from"./exam.6c4a1775.js";import{a as v,a5 as S,v as B,at as $,U as w,J as A,o as D,h as P,n as f,y as I,z as b}from"./index.66dc6cca.js";const T=v({props:{paperId:{type:String,required:!0},stuId:{type:String,required:!0}},emits:["ret"],setup(t,o){S(()=>{t.paperId,t.stuId,d(t.paperId,t.stuId)});const e=B({list:[],result:[],obj:{score:0,solutionId:0}});function d(a,s){return i(this,null,function*(){let n=yield E(a,s);n.code==="ITEST-200"&&(e.list=n.data)})}const u=()=>{o.emit("ret")},c=()=>{r()};function r(){return i(this,null,function*(){let a=yield k(t.stuId,t.paperId,e.result)})}return _(m({},$(e)),{exit:u,sub:c})}}),q=b("\u8FD4\u56DE"),N=b("\u63D0\u4EA4");function V(t,o,e,d,u,c){const r=A("a-button");return D(),P("div",null,[f(r,{shape:"round",type:"button",class:"m-5",onClick:t.exit},{default:I(()=>[q]),_:1},8,["onClick"]),f(r,{shape:"round",type:"button",class:"m-5",onClick:t.sub},{default:I(()=>[N]),_:1},8,["onClick"])])}var J=w(T,[["render",V]]);export{J as default};
