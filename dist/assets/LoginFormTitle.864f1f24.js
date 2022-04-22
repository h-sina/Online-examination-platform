var S=Object.defineProperty;var P=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var O=(e,o,s)=>o in e?S(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,p=(e,o)=>{for(var s in o||(o={}))T.call(o,s)&&O(e,s,o[s]);if(P)for(var s of P(o))I.call(o,s)&&O(e,s,o[s]);return e};var R=(e,o,s)=>new Promise((r,i)=>{var g=n=>{try{u(s.next(n))}catch(t){i(t)}},y=n=>{try{u(s.throw(n))}catch(t){i(t)}},u=n=>n.done?r(n.value):Promise.resolve(n.value).then(g,y);u((s=s.apply(e,o)).next())});import{s as v,f as c,c as h,i as l,a as w,o as x,h as E,t as j}from"./index.976f028d.js";var a=(e=>(e[e.LOGIN=0]="LOGIN",e[e.REGISTER=1]="REGISTER",e[e.RESET_PASSWORD=2]="RESET_PASSWORD",e[e.MOBILE=3]="MOBILE",e[e.QR_CODE=4]="QR_CODE",e))(a||{});const F=v(0);function B(){function e(r){F.value=r}const o=c(()=>F.value);function s(){e(0)}return{setLoginState:e,getLoginState:o,handleBackLogin:s}}function L(e){function o(){return R(this,null,function*(){const s=l(e);return s?yield s.validate():void 0})}return{validForm:o}}function k(e){const{t:o}=h(),s=c(()=>f(o("sys.login.accountPlaceholder"))),r=c(()=>f(o("sys.login.passwordPlaceholder"))),i=c(()=>f(o("sys.login.smsPlaceholder"))),g=c(()=>f(o("sys.login.mobilePlaceholder"))),y=(t,d)=>R(this,null,function*(){return d?Promise.resolve():Promise.reject(o("sys.login.policyPlaceholder"))}),u=t=>(d,m)=>R(this,null,function*(){return m?m!==t?Promise.reject(o("sys.login.diffPwd")):Promise.resolve():Promise.reject(o("sys.login.passwordPlaceholder"))});return{getFormRules:c(()=>{const t=l(s),d=l(r),m=l(i),b=l(g),_={sms:m,mobile:b};switch(l(F)){case 1:return p({account:t,password:d,confirmPassword:[{validator:u(e==null?void 0:e.password),trigger:"change"}],policy:[{validator:y,trigger:"change"}]},_);case 2:return p({account:t},_);case 3:return _;default:return{account:t,password:d}}})}}function f(e){return[{required:!0,message:e,trigger:"change"}]}const G={class:"mb-3 text-2xl font-bold text-center xl:text-3xl enter-x xl:text-left"},C=w({setup(e){const{t:o}=h(),{getLoginState:s}=B(),r=c(()=>({[a.RESET_PASSWORD]:o("sys.login.forgetFormTitle"),[a.LOGIN]:o("sys.login.signInFormTitle"),[a.REGISTER]:o("sys.login.signUpFormTitle"),[a.MOBILE]:o("sys.login.mobileSignInFormTitle"),[a.QR_CODE]:o("sys.login.qrSignInFormTitle")})[l(s)]);return(i,g)=>(x(),E("h2",G,j(l(r)),1))}});var D=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));export{a as L,C as _,k as a,L as b,D as c,B as u};
