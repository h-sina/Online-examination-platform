var h=Object.defineProperty,y=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var m=(t,e,a)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,f=(t,e)=>{for(var a in e||(e={}))I.call(e,a)&&m(t,a,e[a]);if(p)for(var a of p(e))b.call(e,a)&&m(t,a,e[a]);return t},v=(t,e)=>y(t,C(e));var w=(t,e,a)=>new Promise((r,u)=>{var d=o=>{try{s(a.next(o))}catch(l){u(l)}},n=o=>{try{s(a.throw(o))}catch(l){u(l)}},s=o=>o.done?r(o.value):Promise.resolve(o.value).then(d,n);s((a=a.apply(t,e)).next())});import{g as q}from"./question.9c03e846.js";import{U as x,v as B,at as D,J as g,o as N,j as T,y as i,n as c,z as _}from"./index.572c67d6.js";const $={props:{questionId:{type:String,required:!0},typeId:{type:Number,required:!0}},emits:["score"],setup(t,e){const a=B({answer:-1}),r=()=>{u(t.questionId,t.typeId)};function u(d,n){return w(this,null,function*(){let s=yield q(d,n);s.code=="ITEST-200"&&e.emit("score",s.data.rightAnswer==a.answer,d)})}return v(f({},D(a)),{submit:r})}},k=_("A"),A=_("B"),S=_("C"),U=_("D");function V(t,e,a,r,u,d){const n=g("a-radio"),s=g("a-radio-group");return N(),T(s,{value:t.answer,"onUpdate:value":e[0]||(e[0]=o=>t.answer=o),onChange:r.submit},{default:i(()=>[c(n,{name:"answer",value:"a"},{default:i(()=>[k]),_:1}),c(n,{name:"answer",value:"b"},{default:i(()=>[A]),_:1}),c(n,{name:"answer",value:"c"},{default:i(()=>[S]),_:1}),c(n,{name:"answer",value:"d"},{default:i(()=>[U]),_:1})]),_:1},8,["value","onChange"])}var J=x($,[["render",V]]);export{J as default};
