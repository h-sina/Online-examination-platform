import{a as o,s as r,a6 as n,o as u,j as l,y as s,m,bm as d,i as f}from"./index.976f028d.js";import{C as p}from"./index.7b813a52.js";import"./index.21e7287e.js";/* empty css               */import{ds as c}from"./useECharts.7c4efd99.js";import"./index.be0e7c6d.js";import"./index.651a19c8.js";import"./Col.dd538940.js";import"./useFlexGapSupport.4b430c1e.js";import"./useRefs.78498e36.js";import"./PlusOutlined.b74f1fca.js";const A=o({props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const t=e,a=r(null),{setOptions:i}=c(a);return n(()=>t.loading,()=>{t.loading||i({tooltip:{trigger:"item"},legend:{bottom:"1%",left:"center"},series:[{color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],name:"\u8BBF\u95EE\u6765\u6E90",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"12",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"\u641C\u7D22\u5F15\u64CE"},{value:735,name:"\u76F4\u63A5\u8BBF\u95EE"},{value:580,name:"\u90AE\u4EF6\u8425\u9500"},{value:484,name:"\u8054\u76DF\u5E7F\u544A"}],animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*100}}]})},{immediate:!0}),(h,g)=>(u(),l(f(p),{title:"\u8BBF\u95EE\u6765\u6E90",loading:e.loading},{default:s(()=>[m("div",{ref_key:"chartRef",ref:a,style:d({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{A as default};
