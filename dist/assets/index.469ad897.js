import{U as k,a as L,dK as B,aL as l,aV as y,dL as v,b as D,f as S,J as o,o as n,h as P,n as w,j as m,k as p,q as C,E,i as r,b2 as f}from"./index.dd87d40a.js";import{c as T,u as I}from"./index.c90bb3ea.js";import h from"./SessionTimeoutLogin.2e2ecc5a.js";import"./FullscreenOutlined.87f5bef8.js";import"./index.26af0202.js";import"./useWindowSizeFn.ba5070cb.js";import"./useContentViewHeight.25d38b2f.js";import"./uniqBy.fe41e18a.js";/* empty css               *//* empty css               */import"./RedoOutlined.796f116b.js";import"./lock.21db7631.js";import"./Login.6c84a95d.js";import"./TechLifeCommunication.f4a73aa0.js";import"./LoginForm.133aa8cc.js";/* empty css              *//* empty css               *//* empty css               */import"./LoginFormTitle.5f06674c.js";import"./ForgetPasswordForm.d0b84f6d.js";import"./index.3f815269.js";import"./RegisterForm.fd085102.js";import"./account.7cadd6ee.js";import"./MobileForm.f55edd5c.js";import"./QrCodeForm.d8af11a6.js";/* empty css               */import"./index.c07383ac.js";import"./download.302161fe.js";const x=L({name:"LayoutFeatures",components:{BackTop:B,LayoutLockPage:T(()=>l(()=>import("./index.40a4e1c9.js"),["assets/index.40a4e1c9.js","assets/index.dd87d40a.js","assets/index.e94865f0.css","assets/LockPage.476ccfdf.js","assets/LockPage.afa0c1ae.css","assets/lock.21db7631.js","assets/header.d801b988.js"])),SettingDrawer:T(()=>l(()=>import("./index.2611eb76.js").then(function(t){return t.i}),["assets/index.2611eb76.js","assets/index.3a3c1369.css","assets/index.e353353f.js","assets/index.5c7227e9.css","assets/index.5f816ca3.css","assets/index.dd87d40a.js","assets/index.e94865f0.css","assets/index.c90bb3ea.js","assets/index.f894f473.css","assets/index.a2831ae3.css","assets/FullscreenOutlined.87f5bef8.js","assets/index.26af0202.js","assets/index.55076fdd.css","assets/useWindowSizeFn.ba5070cb.js","assets/useContentViewHeight.25d38b2f.js","assets/uniqBy.fe41e18a.js","assets/RedoOutlined.796f116b.js","assets/lock.21db7631.js"])),SessionTimeoutLogin:h},setup(){const{getUseOpenBackTop:t,getShowSettingButton:u,getSettingButtonPosition:c,getFullContent:g}=y(),_=v(),{prefixCls:d}=D("setting-drawer-feature"),{getShowHeader:i}=I(),s=S(()=>_.getSessionTimeout),a=S(()=>{if(!r(u))return!1;const e=r(c);return e===f.AUTO?!r(i)||r(g):e===f.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:t,getIsFixedSettingDrawer:a,prefixCls:d,getIsSessionTimeout:s}}});function F(t,u,c,g,_,d){const i=o("LayoutLockPage"),s=o("BackTop"),a=o("SettingDrawer"),e=o("SessionTimeoutLogin");return n(),P(E,null,[w(i),t.getUseOpenBackTop?(n(),m(s,{key:0,target:t.getTarget},null,8,["target"])):p("",!0),t.getIsFixedSettingDrawer?(n(),m(a,{key:1,class:C(t.prefixCls)},null,8,["class"])):p("",!0),t.getIsSessionTimeout?(n(),m(e,{key:2})):p("",!0)],64)}var at=k(x,[["render",F]]);export{at as default};