import{a as N,aV as e,s as O,aW as R,aX as S,aY as A,c as v,b as G,f,i as s,aZ as d,n as r,B as k}from"./index.976f028d.js";import{R as P}from"./index.0fe12ad5.js";var C="/assets/no-data.f7e550cc.svg",D="/assets/net-error.61b7e6df.svg",I=N({name:"ErrorPage",props:{status:{type:Number,default:e.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(n){const a=O(new Map),{query:p}=R(),o=S(),c=A(),{t}=v(),{prefixCls:x}=G("app-exception-page"),E=f(()=>{const{status:l}=p,{status:i}=n;return Number(l)||i}),m=f(()=>s(a).get(s(E))),T=t("sys.exception.backLogin"),u=t("sys.exception.backHome");return s(a).set(e.PAGE_NOT_ACCESS,{title:"403",status:`${e.PAGE_NOT_ACCESS}`,subTitle:t("sys.exception.subTitle403"),btnText:n.full?T:u,handler:()=>n.full?o(d.BASE_LOGIN):o()}),s(a).set(e.PAGE_NOT_FOUND,{title:"404",status:`${e.PAGE_NOT_FOUND}`,subTitle:t("sys.exception.subTitle404"),btnText:n.full?T:u,handler:()=>n.full?o(d.BASE_LOGIN):o()}),s(a).set(e.ERROR,{title:"500",status:`${e.ERROR}`,subTitle:t("sys.exception.subTitle500"),btnText:u,handler:()=>o()}),s(a).set(e.PAGE_NOT_DATA,{title:t("sys.exception.noDataTitle"),subTitle:"",btnText:t("common.redo"),handler:()=>c(),icon:C}),s(a).set(e.NET_WORK_ERROR,{title:t("sys.exception.networkErrorTitle"),subTitle:t("sys.exception.networkErrorSubTitle"),btnText:t("common.redo"),handler:()=>c(),icon:D}),()=>{const{title:l,subTitle:i,btnText:b,icon:_,handler:g,status:y}=s(m)||{};return r(P,{class:x,status:y,title:n.title||l,"sub-title":n.subTitle||i},{extra:()=>b&&r(k,{type:"primary",onClick:g},{default:()=>b}),icon:()=>_?r("img",{src:_},null):null})}}});export{I as default};
