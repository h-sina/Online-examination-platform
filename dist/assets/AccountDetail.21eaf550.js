import{U as P,a as h,bj as y,aa as A,ab as C,s as _,be as I,J as r,o as p,j as N,y as t,n,m as i,h as b,Y as f,t as k,E as g,k as v,z as B}from"./index.572c67d6.js";import{P as V}from"./index.b7e737e8.js";/* empty css               *//* empty css               *//* empty css                */import"./useWindowSizeFn.5f8600bf.js";import"./useContentViewHeight.d2c46a54.js";const $=h({name:"AccountDetail",components:{PageWrapper:V,ATabs:y,ATabPane:y.TabPane},setup(){var a;const e=A(),s=C(),c=_((a=e.params)==null?void 0:a.id),u=_("detail"),{setTitle:d}=I();d("\u8BE6\u60C5\uFF1A\u7528\u6237"+c.value);function m(){s("/system/account")}return{userId:c,currentKey:u,goBack:m}}}),D=B(" \u7981\u7528\u8D26\u53F7 "),W=B(" \u4FEE\u6539\u5BC6\u7801 "),j={class:"pt-4 m-4 desc-wrap"};function w(e,s,c,u,d,m){const a=r("a-button"),l=r("a-tab-pane"),T=r("a-tabs"),K=r("PageWrapper");return p(),N(K,{title:"\u7528\u6237"+e.userId+"\u7684\u8D44\u6599",content:"\u8FD9\u662F\u7528\u6237\u8D44\u6599\u8BE6\u60C5\u9875\u9762\u3002\u672C\u9875\u9762\u4EC5\u7528\u4E8E\u6F14\u793A\u76F8\u540C\u8DEF\u7531\u5728tab\u4E2D\u6253\u5F00\u591A\u4E2A\u9875\u9762\u5E76\u4E14\u663E\u793A\u4E0D\u540C\u7684\u6570\u636E",contentBackground:"",onBack:e.goBack},{extra:t(()=>[n(a,{type:"primary",danger:""},{default:t(()=>[D]),_:1}),n(a,{type:"primary"},{default:t(()=>[W]),_:1})]),footer:t(()=>[n(T,{"default-active-key":"detail",activeKey:e.currentKey,"onUpdate:activeKey":s[0]||(s[0]=o=>e.currentKey=o)},{default:t(()=>[n(l,{key:"detail",tab:"\u7528\u6237\u8D44\u6599"}),n(l,{key:"logs",tab:"\u64CD\u4F5C\u65E5\u5FD7"})]),_:1},8,["activeKey"])]),default:t(()=>[i("div",j,[e.currentKey=="detail"?(p(),b(g,{key:0},f(10,o=>i("div",{key:o},"\u8FD9\u662F\u7528\u6237"+k(e.userId)+"\u8D44\u6599Tab",1)),64)):v("",!0),e.currentKey=="logs"?(p(),b(g,{key:1},f(10,o=>i("div",{key:o},"\u8FD9\u662F\u7528\u6237"+k(e.userId)+"\u64CD\u4F5C\u65E5\u5FD7Tab",1)),64)):v("",!0)])]),_:1},8,["title","onBack"])}var R=P($,[["render",w]]);export{R as default};