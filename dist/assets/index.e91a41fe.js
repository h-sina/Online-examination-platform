import{U as $,a as k,an as w,b$ as y,bI as i,R as d,G as m,J as a,o as r,j as u,y as o,m as s,n as l,q as c,h as f,Y as A,k as v,t as _,z as h,E as P,bJ as b,bK as S}from"./index.dd87d40a.js";/* empty css                *//* empty css               */import{cardList as L}from"./data.a96915dc.js";import{P as N}from"./index.ef71507d.js";/* empty css                *//* empty css               *//* empty css                */import"./useWindowSizeFn.ba5070cb.js";import"./useContentViewHeight.25d38b2f.js";const V=k({components:{Icon:w,Progress:y,PageWrapper:N,[i.name]:i,[i.Item.name]:i.Item,AListItemMeta:i.Item.Meta,[d.name]:d,[m.name]:m},setup(){return{prefixCls:"list-basic",list:L,pagination:{show:!0,pageSize:3}}}}),n=t=>(b("data-v-091ccf36"),t=t(),S(),t),z=n(()=>s("div",null,"\u6211\u7684\u5F85\u529E",-1)),W=n(()=>s("p",null,"8\u4E2A\u4EFB\u52A1",-1)),J=n(()=>s("div",null,"\u672C\u5468\u4EFB\u52A1\u5E73\u5747\u5904\u7406\u65F6\u95F4",-1)),M=n(()=>s("p",null,"32\u5206\u949F",-1)),R=n(()=>s("div",null,"\u672C\u5468\u5B8C\u6210\u4EFB\u52A1\u6570",-1)),j=n(()=>s("p",null,"24\u4E2A\u4EFB\u52A1",-1)),q={key:0,class:"extra"},D={class:"description"},G={class:"info"},K=n(()=>s("span",null,"Owner",-1)),O=n(()=>s("span",null,"\u5F00\u59CB\u65F6\u95F4",-1)),T={class:"progress"};function U(t,Y,H,Q,X,Z){const p=a("a-col"),C=a("a-row"),g=a("Icon"),F=a("Progress"),I=a("a-list-item-meta"),x=a("a-list-item"),B=a("a-list"),E=a("PageWrapper");return r(),u(E,{class:c(t.prefixCls),title:"\u6807\u51C6\u5217\u8868"},{default:o(()=>[s("div",{class:c(`${t.prefixCls}__top`)},[l(C,{gutter:12},{default:o(()=>[l(p,{span:8,class:c(`${t.prefixCls}__top-col`)},{default:o(()=>[z,W]),_:1},8,["class"]),l(p,{span:8,class:c(`${t.prefixCls}__top-col`)},{default:o(()=>[J,M]),_:1},8,["class"]),l(p,{span:8,class:c(`${t.prefixCls}__top-col`)},{default:o(()=>[R,j]),_:1},8,["class"])]),_:1})],2),s("div",{class:c(`${t.prefixCls}__content`)},[l(B,{pagination:t.pagination},{default:o(()=>[(r(!0),f(P,null,A(t.list,e=>(r(),u(x,{key:e.id,class:"list"},{default:o(()=>[l(I,null,{avatar:o(()=>[e.icon?(r(),u(g,{key:0,class:"icon",icon:e.icon,color:e.color},null,8,["icon","color"])):v("",!0)]),title:o(()=>[s("span",null,_(e.title),1),e.extra?(r(),f("div",q,_(e.extra),1)):v("",!0)]),description:o(()=>[s("div",D,_(e.description),1),s("div",G,[s("div",null,[K,h(_(e.author),1)]),s("div",null,[O,h(_(e.datetime),1)])]),s("div",T,[l(F,{percent:e.percent,status:"active"},null,8,["percent"])])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["pagination"])],2)]),_:1},8,["class"])}var _s=$(V,[["render",U],["__scopeId","data-v-091ccf36"]]);export{_s as default};