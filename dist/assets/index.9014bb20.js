import{cc as C,W as H,n as m,a_ as N,ar as R,a as $,J as U,s as M,v as q,a6 as z,al as y,N as W,cw as J,f4 as X,M as G,_ as E,S as O,dN as Q,w as Y,x as Z,T as D,dS as K,dd as tt,av as et,bs as L,bC as rt,fq as nt,b as ot,f as x,E as T,o as _,h as at,j as k,k as P,q as it,F as st,i as S,bL as I}from"./index.976f028d.js";import{c as V,u as ct}from"./index.b8c25af6.js";import lt from"./SessionTimeoutLogin.9b6ced8b.js";import{s as ut,g as pt}from"./scrollTo.5c1783ce.js";import"./FullscreenOutlined.31e68573.js";import"./index.46ea4d57.js";import"./useWindowSizeFn.43b44744.js";import"./useContentViewHeight.fa21b489.js";import"./uniqBy.c45ce52f.js";import"./_baseIteratee.6f2aea4e.js";import"./get.177428c4.js";import"./index.04a4b2bc.js";import"./index.21e7287e.js";import"./useRefs.78498e36.js";import"./PlusOutlined.b74f1fca.js";import"./RedoOutlined.dd657224.js";import"./index.be0e7c6d.js";import"./lock.7169a58e.js";import"./Login.0b31a567.js";import"./LoginForm.8d210566.js";import"./index.53bde1b9.js";import"./Checkbox.77af456b.js";/* empty css              *//* empty css               */import"./LoginFormTitle.864f1f24.js";import"./Form.50c6b0cf.js";import"./Col.dd538940.js";import"./useFlexGapSupport.4b430c1e.js";import"./useSize.a0f971b4.js";import"./index.651a19c8.js";import"./ForgetPasswordForm.e4545e1f.js";import"./index.d04c7300.js";import"./RegisterForm.6963ac27.js";import"./account.c802d105.js";import"./MobileForm.150c4b52.js";import"./QrCodeForm.b6a54ab6.js";import"./index.093def42.js";import"./index.3b493d1e.js";import"./download.ed803174.js";import"./base64Conver.08b9f4ec.js";function mt(e){var t,r=function(s){return function(){t=null,e.apply(void 0,H(s))}},n=function(){if(t==null){for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];t=C(r(c))}};return n.cancel=function(){return C.cancel(t)},n}var vt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},ft=vt;function F(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable}))),n.forEach(function(o){gt(e,o,r[o])})}return e}function gt(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var A=function(t,r){var n=F({},t,r.attrs);return m(N,F({},n,{icon:ft}),null)};A.displayName="VerticalAlignTopOutlined";A.inheritAttrs=!1;var dt=A,Tt=function(){return{visibilityHeight:{type:Number,default:400},duration:{type:Number,default:450},target:Function,prefixCls:String,onClick:Function}},_t=$({name:"ABackTop",inheritAttrs:!1,props:Tt(),setup:function(t,r){var n=r.slots,o=r.attrs,s=r.emit,c=U("back-top",t),a=c.prefixCls,f=c.direction,l=M(),g=q({visible:!1,scrollEvent:null}),B=function(){return l.value&&l.value.ownerDocument?l.value.ownerDocument:window},j=function(u){var p=t.target,v=p===void 0?B:p,d=t.duration;ut(0,{getContainer:v,duration:d}),s("click",u)},b=mt(function(i){var u=t.visibilityHeight,p=pt(i.target,!0);g.visible=p>u}),h=function(){var u=t.target,p=u||B,v=p();g.scrollEvent=tt(v,"scroll",function(d){b(d)}),b({target:v})},w=function(){g.scrollEvent&&g.scrollEvent.remove(),b.cancel()};return z(function(){return t.target},function(){w(),y(function(){h()})}),W(function(){y(function(){h()})}),J(function(){y(function(){h()})}),X(function(){w()}),G(function(){w()}),function(){var i,u,p=m("div",{class:"".concat(a.value,"-content")},[m("div",{class:"".concat(a.value,"-icon")},[m(dt,null,null)])]),v=E(E({},o),{onClick:j,class:(i={},O(i,"".concat(a.value),!0),O(i,"".concat(o.class),o.class),O(i,"".concat(a.value,"-rtl"),f.value==="rtl"),i)}),d=Q("fade");return m(K,d,{default:function(){return[Y(m("div",D(D({},v),{},{ref:l}),[((u=n.default)===null||u===void 0?void 0:u.call(n))||p]),[[Z,g.visible]])]}})}}}),St=R(_t);const bt=$({name:"LayoutFeatures",components:{BackTop:St,LayoutLockPage:V(()=>L(()=>import("./index.092fe81c.js"),["assets/index.092fe81c.js","assets/index.976f028d.js","assets/index.a4e2e5d9.css","assets/LockPage.e62812df.js","assets/LockPage.afa0c1ae.css","assets/lock.7169a58e.js","assets/header.d801b988.js"])),SettingDrawer:V(()=>L(()=>import("./index.b7d6fe9d.js").then(function(e){return e.i}),["assets/index.b7d6fe9d.js","assets/index.5f3e5534.js","assets/index.5c7227e9.css","assets/index.976f028d.js","assets/index.a4e2e5d9.css","assets/index.04a4b2bc.js","assets/index.5f816ca3.css","assets/ArrowLeftOutlined.6cbdd482.js","assets/index.093def42.js","assets/index.3a3c1369.css","assets/index.b8c25af6.js","assets/index.f894f473.css","assets/FullscreenOutlined.31e68573.js","assets/index.46ea4d57.js","assets/index.55076fdd.css","assets/useWindowSizeFn.43b44744.js","assets/useContentViewHeight.fa21b489.js","assets/uniqBy.c45ce52f.js","assets/_baseIteratee.6f2aea4e.js","assets/get.177428c4.js","assets/index.21e7287e.js","assets/index.a2831ae3.css","assets/useRefs.78498e36.js","assets/PlusOutlined.b74f1fca.js","assets/RedoOutlined.dd657224.js","assets/index.be0e7c6d.js","assets/lock.7169a58e.js"])),SessionTimeoutLogin:lt},setup(){const{getUseOpenBackTop:e,getShowSettingButton:t,getSettingButtonPosition:r,getFullContent:n}=rt(),o=nt(),{prefixCls:s}=ot("setting-drawer-feature"),{getShowHeader:c}=ct(),a=x(()=>o.getSessionTimeout),f=x(()=>{if(!S(t))return!1;const l=S(r);return l===I.AUTO?!S(c)||S(n):l===I.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:f,prefixCls:s,getIsSessionTimeout:a}}});function ht(e,t,r,n,o,s){const c=T("LayoutLockPage"),a=T("BackTop"),f=T("SettingDrawer"),l=T("SessionTimeoutLogin");return _(),at(st,null,[m(c),e.getUseOpenBackTop?(_(),k(a,{key:0,target:e.getTarget},null,8,["target"])):P("",!0),e.getIsFixedSettingDrawer?(_(),k(f,{key:1,class:it(e.prefixCls)},null,8,["class"])):P("",!0),e.getIsSessionTimeout?(_(),k(l,{key:2})):P("",!0)],64)}var le=et(bt,[["render",ht]]);export{le as default};
