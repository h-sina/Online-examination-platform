var f=(o,m,e)=>new Promise((l,i)=>{var d=t=>{try{a(e.next(t))}catch(n){i(n)}},_=t=>{try{a(e.throw(t))}catch(n){i(n)}},a=t=>t.done?l(t.value):Promise.resolve(t.value).then(d,_);a((e=e.apply(o,m)).next())});import{a as v,bC as g,B as F,R as B,G as A,f as C,r as I,a5 as b,U as w,J as u,o as S,j as y,y as c,n as p,m as h,H as U,bL as P,bM as R,z as V}from"./index.7213dd96.js";/* empty css               */import{B as k,u as E}from"./useForm.ad1cea57.js";import{C as M}from"./index.a923a868.js";import{h as $}from"./header.d801b988.js";import{a as x,u as N}from"./account.7621acc2.js";import{b as G}from"./data.ec65bada.js";import{u as T}from"./upload.20a76561.js";/* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.739838ce.js";/* empty css              */import"./index.f479f48f.js";import"./useWindowSizeFn.6a6377e0.js";import"./FullscreenOutlined.10ec0dd9.js";import"./download.9569db53.js";import"./uniqBy.5cba7abe.js";/* empty css               */const j=v({components:{BasicForm:k,CollapseContainer:g,Button:F,ARow:B,ACol:A,CropperAvatar:M},setup(){const o=C(()=>e.getUserInfo),{createMessage:m}=U(),e=I(),[l,{setFieldsValue:i,getFieldsValue:d,submit:_}]=E({labelWidth:120,schemas:G,showActionButtonGroup:!1});b(()=>f(this,null,function*(){const s=yield x();i(s.data)}));const a=C(()=>{const{userProfilePhoto:s}=e.getUserInfo;return s||$});function t(s){const r=e.getUserInfo;r.userProfilePhoto=s,e.setUserInfo(r)}function n(s){return f(this,null,function*(){const r=d();yield N(r),m.success("\u66F4\u65B0\u6210\u529F\uFF01")})}return{userinfo:o,avatar:a,register:l,uploadApi:T,updateAvatar:t,handleSubmit:n}}}),z=o=>(P("data-v-683c5082"),o=o(),R(),o),H={class:"change-avatar"},J=z(()=>h("div",{class:"mb-2"},"\u5934\u50CF",-1)),L=V("\u66F4\u65B0\u57FA\u672C\u4FE1\u606F");function W(o,m,e,l,i,d){const _=u("BasicForm"),a=u("a-col"),t=u("CropperAvatar"),n=u("a-row"),s=u("Button"),r=u("CollapseContainer");return S(),y(r,{title:"\u57FA\u672C\u8BBE\u7F6E",canExpan:!1},{default:c(()=>[p(n,{gutter:24},{default:c(()=>[p(a,{span:14},{default:c(()=>[p(_,{onRegister:o.register},null,8,["onRegister"])]),_:1}),p(a,{span:10},{default:c(()=>[h("div",H,[J,p(t,{uploadApi:o.uploadApi,value:o.avatar,btnText:"\u66F4\u6362\u5934\u50CF",btnProps:{preIcon:"ant-design:cloud-upload-outlined"},onChange:o.updateAvatar,width:"150"},null,8,["uploadApi","value","onChange"])])]),_:1})]),_:1}),p(s,{type:"primary",onClick:o.handleSubmit},{default:c(()=>[L]),_:1},8,["onClick"])]),_:1})}var Co=w(j,[["render",W],["__scopeId","data-v-683c5082"]]);export{Co as default};
