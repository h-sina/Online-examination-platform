var $=Object.defineProperty;var y=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var m=(t,a,e)=>a in t?$(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,p=(t,a)=>{for(var e in a||(a={}))T.call(a,e)&&m(t,e,a[e]);if(y)for(var e of y(a))w.call(a,e)&&m(t,e,a[e]);return t};import{a as B,s as g,eI as S,f as C,i as E,L as F,a6 as k,N as z,eJ as D,cz as I,av as J,o as L,h as M,t as P,bm as j,aD as q}from"./index.976f028d.js";const A={startVal:{type:Number,default:0},endVal:{type:Number,default:2021},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimals:{type:Number,default:0,validator(t){return t>=0}},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimal:{type:String,default:"."},color:{type:String},useEasing:{type:Boolean,default:!0},transition:{type:String,default:"linear"}},G=B({name:"CountTo",props:A,emits:["onStarted","onFinished"],setup(t,{emit:a}){const e=g(t.startVal),u=g(!1);let s=S(e);const d=C(()=>x(E(s)));F(()=>{e.value=t.startVal}),k([()=>t.startVal,()=>t.endVal],()=>{t.autoplay&&o()}),z(()=>{t.autoplay&&o()});function o(){c(),e.value=t.endVal}function h(){e.value=t.startVal,c()}function c(){s=S(e,p({disabled:u,duration:t.duration,onFinished:()=>a("onFinished"),onStarted:()=>a("onStarted")},t.useEasing?{transition:D[t.transition]}:{}))}function x(n){if(!n&&n!==0)return"";const{decimals:b,decimal:V,separator:i,suffix:v,prefix:N}=t;n=Number(n).toFixed(b),n+="";const l=n.split(".");let r=l[0];const _=l.length>1?V+l[1]:"",f=/(\d+)(\d{3})/;if(i&&!I(i))for(;f.test(r);)r=r.replace(f,"$1"+i+"$2");return N+r+_+v}return{value:d,start:o,reset:h}}});function H(t,a,e,u,s,d){return L(),M("span",{style:j({color:t.color})},P(t.value),5)}var K=J(G,[["render",H]]);const R=q(K);export{R as C};