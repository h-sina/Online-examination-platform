var l=(e,n,t)=>new Promise((r,s)=>{var c=o=>{try{i(t.next(o))}catch(f){s(f)}},a=o=>{try{i(t.throw(o))}catch(f){s(f)}},i=o=>o.done?r(o.value):Promise.resolve(o.value).then(c,a);i((t=t.apply(e,n)).next())});import{bl as I,bm as u,bn as k,r as L}from"./index.7213dd96.js";const m=I({id:"app-lock",state:()=>({lockInfo:u.getLocal(k)}),getters:{getLockInfo(){return this.lockInfo}},actions:{setLockInfo(e){this.lockInfo=Object.assign({},this.lockInfo,e),u.setLocal(k,this.lockInfo,!0)},resetLockInfo(){u.removeLocal(k,!0),this.lockInfo=null},unLock(e){return l(this,null,function*(){var r;const n=L();return((r=this.lockInfo)==null?void 0:r.pwd)===e?(this.resetLockInfo(),!0):yield(()=>l(this,null,function*(){var s;try{const c=(s=n.getUserInfo)==null?void 0:s.username,a=yield n.login({username:c,password:e,goHome:!1,mode:"none"});return a&&this.resetLockInfo(),a}catch(c){return!1}}))()})}}});export{m as u};