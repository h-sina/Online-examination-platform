var m=(t,e,n)=>new Promise((s,u)=>{var l=a=>{try{r(n.next(a))}catch(c){u(c)}},o=a=>{try{r(n.throw(a))}catch(c){u(c)}},r=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,o);r((n=n.apply(t,e)).next())});import{v as I,L as h,M as C,f as S,N as z,O as F,Q as T,i as d,S as A,s as f,T as N,a as g,B as k,U as y,c as O,V as j,J as p,o as $,j as w,y as v,z as D,t as P,W as _,b as R,X as V,Y as E,Z as L,$ as U,a0 as q,n as J,a1 as B}from"./index.5903aaea.js";function M(t,e="value",n="change",s){const u=A(),l=u==null?void 0:u.emit,o=I({value:t[e]}),r=h(o),a=i=>{o.value=i};return C(()=>{o.value=t[e]}),[S({get(){return o.value},set(i){z(i,r.value)||(o.value=i,F(()=>{l==null||l(n,i,...T(d(s))||[])}))}}),a,r]}function Q(t){const e=f(t),n=f(!1);let s;function u(){s&&window.clearInterval(s)}function l(){n.value=!1,u(),s=null}function o(){d(n)||!!s||(n.value=!0,s=setInterval(()=>{d(e)===1?(l(),e.value=t):e.value-=1},1e3))}function r(){e.value=t,l()}function a(){r(),o()}return N(()=>{r()}),{start:o,reset:r,restart:a,clear:u,stop:l,currentCount:e,isStart:n}}const W={value:{type:[Object,Number,String,Array]},count:{type:Number,default:60},beforeStartFunc:{type:Function,default:null}},X=g({name:"CountButton",components:{Button:k},props:W,setup(t){const e=f(!1),{currentCount:n,isStart:s,start:u,reset:l}=Q(t.count),{t:o}=O(),r=S(()=>d(s)?o("component.countdown.sendText",[d(n)]):o("component.countdown.normalText"));C(()=>{t.value===void 0&&l()});function a(){return m(this,null,function*(){const{beforeStartFunc:c}=t;if(c&&j(c)){e.value=!0;try{(yield c())&&u()}finally{e.value=!1}}else u()})}return{handleStart:a,currentCount:n,loading:e,getButtonText:r,isStart:s}}});function Y(t,e,n,s,u,l){const o=p("Button");return $(),w(o,_(t.$attrs,{disabled:t.isStart,onClick:t.handleStart,loading:t.loading}),{default:v(()=>[D(P(t.getButtonText),1)]),_:1},16,["disabled","onClick","loading"])}var b=y(X,[["render",Y]]);const Z={value:{type:String},size:{type:String,validator:t=>["default","large","small"].includes(t)},count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},G=g({name:"CountDownInput",components:{CountButton:b},inheritAttrs:!1,props:Z,setup(t){const{prefixCls:e}=R("countdown-input"),[n]=M(t);return{prefixCls:e,state:n}}});function H(t,e,n,s,u,l){const o=p("CountButton"),r=p("a-input");return $(),w(r,_(t.$attrs,{class:t.prefixCls,size:t.size,value:t.state}),V({addonAfter:v(()=>[J(o,{size:t.size,count:t.count,value:t.state,beforeStartFunc:t.sendCodeApi},null,8,["size","count","value","beforeStartFunc"])]),_:2},[E(Object.keys(t.$slots).filter(a=>a!=="addonAfter"),a=>({name:a,fn:v(c=>[L(t.$slots,a,U(q(c||{})))])}))]),1040,["class","size","value"])}var K=y(G,[["render",H]]);const et=B(K);B(b);export{et as C,M as u};
