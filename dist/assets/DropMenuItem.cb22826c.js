import{av as i,a as u,b7 as l,b6 as d,b2 as s,f as _,E as a,o as f,j as y,y as I,m as r,n as k,t as M,at as g}from"./index.976f028d.js";const v=u({name:"DropdownMenuItem",components:{MenuItem:l.Item,Icon:d},props:{key:s.string,text:s.string,icon:s.string},setup(e){const n=g();return{itemKey:_(()=>{var t,o;return e.key||((o=(t=n==null?void 0:n.vnode)==null?void 0:t.props)==null?void 0:o.key)})}}}),x={class:"flex items-center"};function C(e,n,c,t,o,$){const p=a("Icon"),m=a("MenuItem");return f(),y(m,{key:e.itemKey},{default:I(()=>[r("span",x,[k(p,{icon:e.icon,class:"mr-1"},null,8,["icon"]),r("span",null,M(e.text),1)])]),_:1})}var h=i(v,[["render",C]]);export{h as default};