var H=(t,i,e)=>new Promise((r,o)=>{var f=n=>{try{u(e.next(n))}catch(s){o(s)}},w=n=>{try{u(e.throw(n))}catch(s){o(s)}},u=n=>n.done?r(n.value):Promise.resolve(n.value).then(f,w);u((e=e.apply(t,i)).next())});import{ay as d,s as a,f as m,i as c}from"./index.572c67d6.js";import{u as l}from"./useWindowSizeFn.5f8600bf.js";const p=Symbol();function v(t){return d(t,p,{native:!0})}const g=a(0),h=a(0);function F(){function t(e){g.value=e}function i(e){h.value=e}return{headerHeightRef:g,footerHeightRef:h,setHeaderHeight:t,setFooterHeight:i}}function P(){const t=a(window.innerHeight),i=a(window.innerHeight),e=m(()=>c(t)-c(g)-c(h)||0);l(()=>{t.value=window.innerHeight},100,{immediate:!0});function r(o){return H(this,null,function*(){i.value=o})}v({contentHeight:e,setPageHeight:r,pageHeight:i})}export{F as a,P as u};