var d=(o,s,e)=>new Promise((n,r)=>{var a=t=>{try{u(e.next(t))}catch(p){r(p)}},i=t=>{try{u(e.throw(t))}catch(p){r(p)}},u=t=>t.done?n(t.value):Promise.resolve(t.value).then(a,i);u((e=e.apply(o,s)).next())});import{P as B}from"./index.2cbd72b1.js";import{B as F}from"./BasicForm.d88c9cb9.js";import{u as h}from"./useForm.522fb0fd.js";import{U as w,a as C,J as m,o as E,j as g,y as c,m as f,n as l,z as _}from"./index.5903aaea.js";/* empty css               *//* empty css                */import"./useWindowSizeFn.9bc4a4d0.js";import"./useContentViewHeight.0ad58928.js";/* empty css               *//* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.b1c133f4.js";/* empty css                *//* empty css                */import"./index.2670c85d.js";import"./FullscreenOutlined.115d63d2.js";/* empty css                *//* empty css                *//* empty css                */import"./download.8156160a.js";import"./uniqBy.03c90016.js";const P=[{field:"passwordOld",label:"\u5F53\u524D\u5BC6\u7801",component:"InputPassword",required:!0},{field:"passwordNew",label:"\u65B0\u5BC6\u7801",component:"StrengthMeter",componentProps:{placeholder:"\u65B0\u5BC6\u7801"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"}]},{field:"confirmPassword",label:"\u786E\u8BA4\u5BC6\u7801",component:"InputPassword",dynamicRules:({values:o})=>[{required:!0,validator:(s,e)=>e?e!==o.passwordNew?Promise.reject("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4!"):Promise.resolve():Promise.reject("\u4E0D\u80FD\u4E3A\u7A7A")}]}],A=C({name:"ChangePassword",components:{BasicForm:F,PageWrapper:B},setup(){const[o,{validate:s,resetFields:e}]=h({size:"large",labelWidth:100,showActionButtonGroup:!1,schemas:P});function n(){return d(this,null,function*(){try{const r=yield s(),{passwordOld:a,passwordNew:i}=r}catch(r){}})}return{register:o,resetFields:e,handleSubmit:n}}}),b={class:"py-8 bg-white flex flex-col justify-center items-center"},y={class:"flex justify-center"},v=_(" \u91CD\u7F6E "),D=_(" \u786E\u8BA4 ");function k(o,s,e,n,r,a){const i=m("BasicForm"),u=m("a-button"),t=m("PageWrapper");return E(),g(t,{title:"\u4FEE\u6539\u5F53\u524D\u7528\u6237\u5BC6\u7801",content:"\u4FEE\u6539\u6210\u529F\u540E\u4F1A\u81EA\u52A8\u9000\u51FA\u5F53\u524D\u767B\u5F55\uFF01"},{default:c(()=>[f("div",b,[l(i,{onRegister:o.register},null,8,["onRegister"]),f("div",y,[l(u,{onClick:o.resetFields},{default:c(()=>[v]),_:1},8,["onClick"]),l(u,{class:"!ml-4",type:"primary",onClick:o.handleSubmit},{default:c(()=>[D]),_:1},8,["onClick"])])])]),_:1})}var te=w(A,[["render",k]]);export{te as default};
