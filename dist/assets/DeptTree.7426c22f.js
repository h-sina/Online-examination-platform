var p=(a,n,e)=>new Promise((s,o)=>{var r=t=>{try{i(e.next(t))}catch(l){o(l)}},c=t=>{try{i(e.throw(t))}catch(l){o(l)}},i=t=>t.done?s(t.value):Promise.resolve(t.value).then(r,c);i((e=e.apply(a,n)).next())});import{_ as m}from"./index.2799bcf4.js";import{a as d}from"./system.19d87b00.js";import{a as f,s as u,N as _,av as h,E as D,o as v,h as T,n as B}from"./index.976f028d.js";import"./index.a30387ae.js";import"./useContextMenu.fe08b0c6.js";import"./index.093def42.js";import"./get.177428c4.js";const E=f({name:"DeptTree",components:{BasicTree:m},emits:["select"],setup(a,{emit:n}){const e=u([]);function s(){return p(this,null,function*(){e.value=yield d()})}function o(r){n("select",r[0])}return _(()=>{s()}),{treeData:e,handleSelect:o}}}),$={class:"m-4 mr-0 overflow-hidden bg-white"};function k(a,n,e,s,o,r){const c=D("BasicTree");return v(),T("div",$,[B(c,{title:"\u90E8\u95E8\u5217\u8868",toolbar:"",search:"",clickRowToExpand:!1,treeData:a.treeData,fieldNames:{key:"id",title:"deptName"},onSelect:a.handleSelect},null,8,["treeData","onSelect"])])}var L=h(E,[["render",k]]);export{L as default};
