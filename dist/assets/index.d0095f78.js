import{av as $,a as P,b6 as k,E as a,o as l,j as u,y as e,m as t,n as i,q as r,h as d,az as w,k as m,t as c,z as f,F as y,cR as A,cS as S}from"./index.976f028d.js";import{P as L}from"./index.04eaadeb.js";/* empty css               */import{cardList as z}from"./data.a96915dc.js";import{P as N}from"./index.9126614a.js";import{L as p}from"./index.347fba13.js";import{R as v,C as h}from"./index.651a19c8.js";import"./useRefs.78498e36.js";import"./index.2440c5f5.js";import"./index.b556a78a.js";import"./useSize.a0f971b4.js";import"./eagerComputed.b4caa6b1.js";import"./useWindowSizeFn.43b44744.js";import"./useContentViewHeight.fa21b489.js";import"./ArrowLeftOutlined.6cbdd482.js";import"./index.d76d5ff0.js";import"./transButton.a71e0ac3.js";import"./Col.dd538940.js";import"./useFlexGapSupport.4b430c1e.js";const V=P({components:{Icon:k,Progress:L,PageWrapper:N,[p.name]:p,[p.Item.name]:p.Item,AListItemMeta:p.Item.Meta,[v.name]:v,[h.name]:h},setup(){return{prefixCls:"list-basic",list:z,pagination:{show:!0,pageSize:3}}}}),n=s=>(A("data-v-091ccf36"),s=s(),S(),s),R=n(()=>t("div",null,"\u6211\u7684\u5F85\u529E",-1)),W=n(()=>t("p",null,"8\u4E2A\u4EFB\u52A1",-1)),b=n(()=>t("div",null,"\u672C\u5468\u4EFB\u52A1\u5E73\u5747\u5904\u7406\u65F6\u95F4",-1)),M=n(()=>t("p",null,"32\u5206\u949F",-1)),j=n(()=>t("div",null,"\u672C\u5468\u5B8C\u6210\u4EFB\u52A1\u6570",-1)),q=n(()=>t("p",null,"24\u4E2A\u4EFB\u52A1",-1)),D={key:0,class:"extra"},O={class:"description"},T={class:"info"},G=n(()=>t("span",null,"Owner",-1)),H=n(()=>t("span",null,"\u5F00\u59CB\u65F6\u95F4",-1)),J={class:"progress"};function K(s,Q,U,X,Y,Z){const _=a("a-col"),C=a("a-row"),g=a("Icon"),F=a("Progress"),I=a("a-list-item-meta"),x=a("a-list-item"),B=a("a-list"),E=a("PageWrapper");return l(),u(E,{class:r(s.prefixCls),title:"\u6807\u51C6\u5217\u8868"},{default:e(()=>[t("div",{class:r(`${s.prefixCls}__top`)},[i(C,{gutter:12},{default:e(()=>[i(_,{span:8,class:r(`${s.prefixCls}__top-col`)},{default:e(()=>[R,W]),_:1},8,["class"]),i(_,{span:8,class:r(`${s.prefixCls}__top-col`)},{default:e(()=>[b,M]),_:1},8,["class"]),i(_,{span:8,class:r(`${s.prefixCls}__top-col`)},{default:e(()=>[j,q]),_:1},8,["class"])]),_:1})],2),t("div",{class:r(`${s.prefixCls}__content`)},[i(B,{pagination:s.pagination},{default:e(()=>[(l(!0),d(y,null,w(s.list,o=>(l(),u(x,{key:o.id,class:"list"},{default:e(()=>[i(I,null,{avatar:e(()=>[o.icon?(l(),u(g,{key:0,class:"icon",icon:o.icon,color:o.color},null,8,["icon","color"])):m("",!0)]),title:e(()=>[t("span",null,c(o.title),1),o.extra?(l(),d("div",D,c(o.extra),1)):m("",!0)]),description:e(()=>[t("div",O,c(o.description),1),t("div",T,[t("div",null,[G,f(c(o.author),1)]),t("div",null,[H,f(c(o.datetime),1)])]),t("div",J,[i(F,{percent:o.percent,status:"active"},null,8,["percent"])])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["pagination"])],2)]),_:1},8,["class"])}var gt=$(V,[["render",K],["__scopeId","data-v-091ccf36"]]);export{gt as default};