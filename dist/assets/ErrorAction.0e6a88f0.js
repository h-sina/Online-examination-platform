import{U as l,a as m,an as d,aC as _,cZ as f,au as g,c$ as E,f as C,J as e,o as L,j as h,y as a,n as c,c as B,ad as T}from"./index.5903aaea.js";/* empty css                */const $=m({name:"ErrorAction",components:{Icon:d,Tooltip:_,Badge:f},setup(){const{t:o}=B(),{push:n}=g(),t=E(),r=C(()=>t.getErrorLogListCount);function s(){n(T.ERROR_LOG_PAGE).then(()=>{t.setErrorLogListCount(0)})}return{t:o,getCount:r,handleToErrorList:s}}});function k(o,n,t,r,s,y){const u=e("Icon"),i=e("Badge"),p=e("Tooltip");return L(),h(p,{title:o.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:o.handleToErrorList},{default:a(()=>[c(i,{count:o.getCount,offset:[0,10],overflowCount:99},{default:a(()=>[c(u,{icon:"ion:bug-outline"})]),_:1},8,["count"])]),_:1},8,["title","mouseEnterDelay","onClick"])}var v=l($,[["render",k]]);export{v as default};
