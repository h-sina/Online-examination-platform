var o=(e,a,t)=>new Promise((s,d)=>{var l=i=>{try{n(t.next(i))}catch(c){d(c)}},r=i=>{try{n(t.throw(i))}catch(c){d(c)}},n=i=>i.done?s(i.value):Promise.resolve(i.value).then(l,r);n((t=t.apply(e,a)).next())});import{b as p,c as k,d as Q,e as y,f as D}from"./question.f4b5a34e.js";import{av as E,a as w,v as F,o as b,h as f,m as u,F as v,az as B,t as m}from"./index.976f028d.js";const C=w({name:"Subject",setup(){const e=F({formF:{},quesList:[]}),a=()=>{const n=s();t(n),d()};function t(n){return o(this,null,function*(){switch(n){case 1:yield D;break;case 2:yield y;break;case 3:yield Q;break;case 4:yield k;break;case 5:yield p;break}})}function s(){return o(this,null,function*(){})}function d(){return o(this,null,function*(){})}function l(){return o(this,null,function*(){})}function r(){return o(this,null,function*(){})}return{data:e,submit:a,submitF:s,submitS:t,getList:d,deleteQues:l,updateQues:r}}}),L=u("h1",null,"\u6559\u5E08\u7BA1\u7406\u7684\u9898\u5E93 - \u589E\u5220\u67E5\u6539",-1);function S(e,a){return b(),f("div",null,[L,u("table",null,[u("button",{onClick:a[0]||(a[0]=(...t)=>e.submit&&e.submit(...t))},"\u6DFB\u52A0"),(b(!0),f(v,null,B(e.data.questionList,t=>(b(),f("tr",{key:t.id},[u("td",null,m(t.id),1),u("td",null,m(t.name),1),u("td",null,[u("button",{onClick:a[1]||(a[1]=(...s)=>e.deleteQues&&e.deleteQues(...s))},"\u5220\u9664")]),u("td",null,[u("button",{onClick:a[2]||(a[2]=(...s)=>e.updateQues&&e.updateQues(...s))},"\u4FEE\u6539")])]))),128))])])}var A=E(C,[["render",S]]);export{A as default};
