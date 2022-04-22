import{C as g,M as i,J as F}from"./index.eeda434c.js";import{P as x}from"./index.9126614a.js";import{av as R,a as B,s as c,E as n,o as S,j as b,y as o,n as a,i as y,dE as h,bS as P,z as r}from"./index.976f028d.js";import{R as _}from"./index.1d81a672.js";import{S as j}from"./index.8e4fa7db.js";import"./useWindowSizeFn.43b44744.js";import"./index.2440c5f5.js";import"./index.b556a78a.js";import"./useSize.a0f971b4.js";import"./eagerComputed.b4caa6b1.js";import"./useContentViewHeight.fa21b489.js";import"./ArrowLeftOutlined.6cbdd482.js";import"./index.d76d5ff0.js";import"./transButton.a71e0ac3.js";import"./Checkbox.77af456b.js";import"./useFlexGapSupport.4b430c1e.js";const f='{"name":"BeJson","url":"http://www.xxx.com","page":88,"isNonProfit":true,"address":{"street":"\u79D1\u6280\u56ED\u8DEF.","city":"\u6C5F\u82CF\u82CF\u5DDE","country":"\u4E2D\u56FD"},"links":[{"name":"Google","url":"http://www.xxx.com"},{"name":"Baidu","url":"http://www.xxx.com"},{"name":"SoSo","url":"http://www.xxx.com"}]}',k=`
      (() => {
        var htmlRoot = document.getElementById('htmlRoot');
        var theme = window.localStorage.getItem('__APP__DARK__MODE__');
        if (htmlRoot && theme) {
          htmlRoot.setAttribute('data-theme', theme);
          theme = htmlRoot = null;
        }
      })();
  `,J=`
     <!DOCTYPE html>
<html lang="en" id="htmlRoot">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="renderer" content="webkit" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0"
    />
    <title><%= title %></title>
    <link rel="icon" href="/favicon.ico" />
  </head>
  <body>
    <div id="app">
    </div>
  </body>
</html>
  `,M=B({components:{CodeEditor:g,PageWrapper:x,RadioButton:_.Button,RadioGroup:_.Group,ASpace:j},setup(){const e=c(i.JSON),t=c(f);function s(p){const u=p.target.value;if(u===i.JSON){t.value=f;return}if(u===i.HTML){t.value=J;return}if(u===i.JS){t.value=k;return}}function d(){y(e)==="application/json"?h.info({title:"\u7F16\u8F91\u5668\u5F53\u524D\u503C",content:P(F,{data:JSON.parse(t.value)})}):h.info({title:"\u7F16\u8F91\u5668\u5F53\u524D\u503C",content:t.value})}return{value:t,modeValue:e,handleModeChange:s,showData:d}}}),A=r("\u83B7\u53D6\u6570\u636E"),N=r(" json\u6570\u636E "),O=r(" html\u4EE3\u7801 "),V=r(" javascript\u4EE3\u7801 ");function G(e,t,s,d,p,u){const v=n("a-button"),l=n("RadioButton"),E=n("RadioGroup"),w=n("a-space"),C=n("CodeEditor"),D=n("PageWrapper");return S(),b(D,{title:"\u4EE3\u7801\u7F16\u8F91\u5668\u7EC4\u4EF6\u793A\u4F8B",contentFullHeight:"",fixedHeight:"",contentBackground:""},{extra:o(()=>[a(w,{size:"middle"},{default:o(()=>[a(v,{onClick:e.showData,type:"primary"},{default:o(()=>[A]),_:1},8,["onClick"]),a(E,{"button-style":"solid",value:e.modeValue,"onUpdate:value":t[0]||(t[0]=m=>e.modeValue=m),onChange:e.handleModeChange},{default:o(()=>[a(l,{value:"application/json"},{default:o(()=>[N]),_:1}),a(l,{value:"htmlmixed"},{default:o(()=>[O]),_:1}),a(l,{value:"javascript"},{default:o(()=>[V]),_:1})]),_:1},8,["value","onChange"])]),_:1})]),default:o(()=>[a(C,{value:e.value,"onUpdate:value":t[1]||(t[1]=m=>e.value=m),mode:e.modeValue},null,8,["value","mode"])]),_:1})}var ot=R(M,[["render",G]]);export{ot as default};
