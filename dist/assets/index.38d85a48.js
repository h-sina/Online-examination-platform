import{U as w,a as I,cW as M,ao as g,aL as k,aj as U,b as $,r as b,f as N,J as n,o as h,h as O,n as t,y as m,j as P,k as A,m as r,q as s,t as E,E as x,c as R,a8 as S}from"./index.dd87d40a.js";import{D as V}from"./siteSetting.046b8393.js";import{c as C,u as B}from"./index.c90bb3ea.js";import{b as T}from"./index.4dda775a.js";import{h as j}from"./header.d801b988.js";import"./FullscreenOutlined.87f5bef8.js";import"./index.26af0202.js";import"./useWindowSizeFn.ba5070cb.js";import"./useContentViewHeight.25d38b2f.js";import"./uniqBy.fe41e18a.js";/* empty css               *//* empty css               */import"./RedoOutlined.796f116b.js";import"./lock.21db7631.js";const W=I({name:"UserDropdown",components:{Dropdown:M,Menu:g,MenuItem:C(()=>k(()=>import("./DropMenuItem.24dbb18f.js"),["assets/DropMenuItem.24dbb18f.js","assets/index.dd87d40a.js","assets/index.e94865f0.css"])),MenuDivider:g.Divider,LockAction:C(()=>k(()=>import("./LockModal.e2ffd7c0.js"),["assets/LockModal.e2ffd7c0.js","assets/LockModal.0068f88c.css","assets/index.86d55544.css","assets/index.a18cc309.css","assets/index.3a3c1369.css","assets/index.695a0c50.css","assets/index.49ada229.css","assets/index.47f7c782.css","assets/index.579bd49e.css","assets/index.560eb672.css","assets/index.cd256673.css","assets/index.8f5fe29a.css","assets/index.9d09be4d.css","assets/index.b1363280.css","assets/index.dd87d40a.js","assets/index.e94865f0.css","assets/index.4dda775a.js","assets/index.4815a7e8.css","assets/useWindowSizeFn.ba5070cb.js","assets/FullscreenOutlined.87f5bef8.js","assets/BasicForm.f8200627.js","assets/BasicForm.7f6282e5.css","assets/index.3f815269.js","assets/index.7b8b5e30.css","assets/download.302161fe.js","assets/uniqBy.fe41e18a.js","assets/useForm.a7a1da29.js","assets/lock.21db7631.js","assets/header.d801b988.js"]))},props:{theme:U.oneOf(["dark","light"])},setup(){const{prefixCls:e}=$("header-user-dropdown"),{t:u}=R(),{getShowDoc:d,getUseLockPage:f}=B(),a=b(),_=N(()=>{const{realName:p="",userProfilePhoto:L,desc:D}=a.getUserInfo||{};return{realName:p,avatar:L||j,desc:D}}),[o,{openModal:i}]=T();function l(){i(!0)}function c(){a.confirmLoginOut()}function v(){S(V)}function y(p){switch(p.key){case"logout":c();break;case"doc":v();break;case"lock":l();break}}return{prefixCls:e,t:u,getUserInfo:_,handleMenuClick:y,getShowDoc:d,register:o,getUseLockPage:f}}}),q=["src"];function z(e,u,d,f,a,_){const o=n("MenuItem"),i=n("Menu"),l=n("Dropdown"),c=n("LockAction");return h(),O(x,null,[t(l,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:m(()=>[t(i,{onClick:e.handleMenuClick},{default:m(()=>[e.getUseLockPage?(h(),P(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):A("",!0),t(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:m(()=>[r("span",{class:s([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[r("img",{class:s(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,q),r("span",{class:s(`${e.prefixCls}__info hidden md:block`)},[r("span",{class:s([`${e.prefixCls}__name  `,"truncate"])},E(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),t(c,{onRegister:e.register},null,8,["onRegister"])],64)}var se=w(W,[["render",z]]);export{se as default};