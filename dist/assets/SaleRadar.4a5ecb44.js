import{a as i,s as r,a6 as s,o as l,j as n,y as m,m as d,bm as u,i as p}from"./index.976f028d.js";import{C as f}from"./index.7b813a52.js";import"./index.21e7287e.js";/* empty css               */import{ds as c}from"./useECharts.7c4efd99.js";import"./index.be0e7c6d.js";import"./index.651a19c8.js";import"./Col.dd538940.js";import"./useFlexGapSupport.4b430c1e.js";import"./useRefs.78498e36.js";import"./PlusOutlined.b74f1fca.js";const V=i({props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"400px"}},setup(e){const t=e,a=r(null),{setOptions:o}=c(a);return s(()=>t.loading,()=>{t.loading||o({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"2017"},{name:"2017"},{name:"2018"},{name:"2019"},{name:"2020"},{name:"2021"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#67e0e3"}}]}]})},{immediate:!0}),(h,g)=>(l(),n(p(f),{title:"\u9500\u552E\u7EDF\u8BA1",loading:e.loading},{default:m(()=>[d("div",{ref_key:"chartRef",ref:a,style:u({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{V as default};
