var B=(t,r,n)=>new Promise((u,i)=>{var o=e=>{try{a(n.next(e))}catch(s){i(s)}},p=e=>{try{a(n.throw(e))}catch(s){i(s)}},a=e=>e.done?u(e.value):Promise.resolve(e.value).then(o,p);a((n=n.apply(t,r)).next())});import{B as h}from"./BasicForm.f8200627.js";import{u as $}from"./useForm.a7a1da29.js";import{U as P,a as g,bC as k,I as _,cd as F,s as I,J as m,o as d,j as f,y as l,n as b,k as C,z as v}from"./index.dd87d40a.js";import{P as y}from"./index.ef71507d.js";/* empty css               *//* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.3f815269.js";/* empty css                *//* empty css                */import"./index.4dda775a.js";import"./useWindowSizeFn.ba5070cb.js";import"./FullscreenOutlined.87f5bef8.js";/* empty css                *//* empty css                *//* empty css                */import"./download.302161fe.js";import"./uniqBy.fe41e18a.js";/* empty css               *//* empty css                */import"./useContentViewHeight.25d38b2f.js";const S=g({components:{BasicForm:h,CollapseContainer:k,PageWrapper:y,[_.name]:_,Button:F},setup(){const[t,{appendSchemaByField:r,removeSchemaByFiled:n,validate:u}]=$({schemas:[{field:"field0a",component:"Input",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"field0b",component:"Input",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"0",component:"Input",label:" ",colProps:{span:8},slot:"add"}],labelWidth:100,actionColOptions:{span:24}});function i(){return B(this,null,function*(){try{const e=yield u()}catch(e){}})}const o=I(1);function p(){r({field:`field${o.value}a`,component:"Input",label:"\u5B57\u6BB5"+o.value,colProps:{span:8},required:!0},""),r({field:`field${o.value}b`,component:"Input",label:"\u5B57\u6BB5"+o.value,colProps:{span:8},required:!0},""),r({field:`${o.value}`,component:"Input",label:" ",colProps:{span:8},slot:"add"},""),o.value++}function a(e){n([`field${e}a`,`field${e}b`,`${e}`]),o.value--}return{register:t,handleSubmit:i,add:p,del:a}}}),q=v("+"),N=v("-");function W(t,r,n,u,i,o){const p=m("Button"),a=m("BasicForm"),e=m("CollapseContainer"),s=m("PageWrapper");return d(),f(s,{title:"\u8868\u5355\u589E\u5220\u793A\u4F8B"},{default:l(()=>[b(e,{title:"\u8868\u5355\u589E\u5220"},{default:l(()=>[b(a,{onRegister:t.register,onSubmit:t.handleSubmit},{add:l(({field:c})=>[Number(c)===0?(d(),f(p,{key:0,onClick:t.add},{default:l(()=>[q]),_:1},8,["onClick"])):C("",!0),c>0?(d(),f(p,{key:1,onClick:V=>t.del(c)},{default:l(()=>[N]),_:2},1032,["onClick"])):C("",!0)]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var re=P(S,[["render",W]]);export{re as default};