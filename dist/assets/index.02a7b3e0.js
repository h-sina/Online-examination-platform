var w=(u,r,s)=>new Promise((h,i)=>{var p=o=>{try{g(s.next(o))}catch(B){i(B)}},C=o=>{try{g(s.throw(o))}catch(B){i(B)}},g=o=>o.done?h(o.value):Promise.resolve(o.value).then(p,C);g((s=s.apply(u,r)).next())});import{U as $,r as G,f as J,a as O,an as X,bF as T,bI as b,R as j,G as z,bC as Y,s as Z,v as x,a5 as ee,J as f,o as c,j as y,y as d,m as L,q as N,h as _,n as k,k as m,t as S,z as q,H as ue}from"./index.572c67d6.js";import{cardList as te}from"./data.34f5ed9b.js";import{P as ae}from"./index.b7e737e8.js";/* empty css                *//* empty css               *//* empty css               *//* empty css                */import{g as se,d as oe}from"./info.085b6a67.js";import{T as ne,B as re}from"./BasicForm.0b74da23.js";import{u as ie}from"./useForm.b6df9dcc.js";import{getBasicColumns as P}from"./tableData.1da06a33.js";import{g as le}from"./question.9c03e846.js";import{duox as ce,dx as de,pd as me}from"./choose.d9417bb2.js";import{B as pe}from"./TableImg.e06b769d.js";import{u as ge}from"./useTable.9bb235aa.js";/* empty css               *//* empty css                */import"./useWindowSizeFn.5f8600bf.js";import"./useContentViewHeight.d2c46a54.js";/* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.f25665de.js";/* empty css                *//* empty css                */import"./index.11114b7e.js";import"./FullscreenOutlined.7f0e8dbd.js";/* empty css                *//* empty css                *//* empty css                */import"./download.b0bc62eb.js";import"./uniqBy.e10c5d38.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.a7e7b0d7.js";/* empty css                */import"./index.6d13df12.js";const{notification:n}=ue(),Be=G(),V=J(()=>Be.getUserInfo),Fe=O({components:{Icon:X,PageWrapper:ae,[T.name]:T,[b.name]:b,[b.Item.name]:b.Item,[j.name]:j,[z.name]:z,BasicTable:pe,TableAction:ne,BasicForm:re,CollapseContainer:Y},setup(){const[u,{setFieldsValue:r,getFieldsValue:s,submit:h}]=ie({labelWidth:120,submitButtonOptions:{text:"\u63D0\u4EA4"}}),i=Z(!0),[p,{setLoading:C,setColumns:g,getColumns:o,getDataSource:B,getRawDataSource:_e,reload:ke,getPaginationRef:l,setPagination:Se,getSelectRows:qe,getSelectRowKeys:ve,setSelectedRowKeys:Ie,clearSelectedRowKeys:Re}]=ge({title:"\u70B9\u51FB\u5220\u9664\u6309\u94AE \u6CE8\u610F\u4E0D\u80FD\u64A4\u9500 \u6CA1\u6709\u786E\u8BA4\u6846 \u8BF7\u8C28\u614E\u5220\u9664\uFF01",titleHelpMessage:"\u6E29\u99A8\u63D0\u9192",columns:P(),showTableSetting:!0,pagination:i,showTableSetting:!0,tableSetting:{fullScreen:!0},actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),e=x({colList:[],obj:{pageNum:1,pageSize:10},quesDetail:{},detail:!1,schemas:[],detailId:0,answerIf:!1});function E(){return w(this,null,function*(){const a=yield se(e.obj);e.colList=a.data.list,e.colList.map(t=>{switch(t.level){case 1:t.level="\u7B80\u5355";break;case 2:t.level="\u4E2D\u7B49";break;case 3:t.level="\u56F0\u96BE";break}switch(t.type){case 1:t.type="\u5224\u65AD\u9898";break;case 2:t.type="\u5355\u9009\u9898";break;case 3:t.type="\u591A\u9009\u9898";break;case 4:t.type="\u586B\u7A7A\u9898";break;case 5:t.type="\u8BBA\u8FF0\u9898";break}}),i.value={total:a.data.total},e.colList})}function M(){Math.floor(l().total/l().pageSize)+1==l().current&&(e.obj.pageNum=l().current,e.obj.pageSize=l().pageSize,E()),e.obj.pageNum=l().current,e.obj.pageSize=l().pageSize,E(),l()}function W(a){return w(this,null,function*(){V.value,(yield oe({quesId:a,userId:V.value.id})).code==="ITEST-200"?n.success({message:"\u5220\u9664\u6210\u529F",duration:3}):n.error({message:"\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5",duration:3}),E()})}function v(a){return w(this,null,function*(){e.detailId=a.id;let t=I(a.type);switch(t){case 1:e.schemas=me();break;case 2:e.schemas=de();break;case 3:e.schemas=ce();break}yield R(a.id,t)})}const I=a=>{switch(a){case"\u5224\u65AD\u9898":return 1;case"\u5355\u9009\u9898":return 2;case"\u591A\u9009\u9898":return 3;case"\u586B\u7A7A\u9898":return 4;case"\u8BBA\u8FF0\u9898":return 5}};function R(a,t){return w(this,null,function*(){const F=yield le(a,t);e.quesDetail=F.data,e.detail=!0})}ee(()=>{E()});function K(a,t){return[{label:"\u67E5\u770B",color:"success",onClick:v.bind(null,a)},{label:"\u5220\u9664",color:"error",onClick:W.bind(null,a.id)}]}const Q=()=>{e.detail=!1,A()},U=()=>{if(s().answer1,s().answer1==null){n.error({message:"\u8BF7\u8F93\u5165\u7B54\u6848",duration:3});return}e.quesDetail.type===1?e.quesDetail.answer==s().answer1?(r({answer1:null}),A(),n.success({message:"\u7B54\u6848\u6B63\u786E \u7CFB\u7EDF\u5C06\u81EA\u52A8\u8DF3\u8F6C\u5230\u4E0B\u4E00\u9898...",duration:3}),D()):(r({answer1:null}),n.error({message:"\u7B54\u6848\u9519\u8BEF",duration:3})):e.quesDetail.type===2?(e.quesDetail.rightAnswer,s(),e.quesDetail.rightAnswer==s().answer1?(r({answer1:null}),A(),n.success({message:"\u7B54\u6848\u6B63\u786E \u7CFB\u7EDF\u5C06\u81EA\u52A8\u8DF3\u8F6C\u5230\u4E0B\u4E00\u9898...",duration:3}),D()):(r({answer1:null}),n.error({message:"\u7B54\u6848\u9519\u8BEF",duration:3}))):e.quesDetail.type===3&&(e.quesDetail.rightAnswer,s().answer1.join(""),e.quesDetail.rightAnswer==s().answer1.join("")?(r({answer1:null}),A(),n.success({message:"\u7B54\u6848\u6B63\u786E \u7CFB\u7EDF\u5C06\u81EA\u52A8\u8DF3\u8F6C\u5230\u4E0B\u4E00\u9898...",duration:3}),D()):(r({answer1:null}),n.error({message:"\u7B54\u6848\u9519\u8BEF",duration:3})))},D=()=>{try{e.colList.some((a,t,F)=>{if(a.id==e.detailId)throw t+1>=F.length?(n.warning({message:"\u8FD9\u5DF2\u7ECF\u662F\u6700\u540E\u4E00\u9898\u4E86",duration:3}),"\u5FAA\u73AF\u7EC8\u6B62"):(e.detailId=F[t+1].id,R(e.detailId,I(F[t+1].type)),"\u5FAA\u73AF\u7EC8\u6B62")})}catch(a){}},H=()=>{e.answerIf=!0},A=()=>{e.answerIf=!1};return{prefixCls:"list-card",list:te,getCollections:E,registerTable:p,data:e,pagination:i,columns:P(),pageChange:M,createActions:K,questionDetail:v,exit:Q,handleSubmit:U,register1:u,nextQues:D,lookAnswer:H,closeAnswer:A}}}),fe=q(" \u5065\u5EB7\u7684\u8EAB\u4F53\u662F\u5B9E\u73B0\u76EE\u6807\u7684\u57FA\u77F3\u3002 "),Ce={key:0,class:"p-4"},Ee={class:"m-15",style:{"font-size":"20px"}},Ae=q("\u9000\u51FA\u8BAD\u7EC3"),we=q("\u67E5\u770B\u7B54\u6848"),he={key:0},De={key:1},be={key:2};function ye(u,r){const s=f("TableAction"),h=f("BasicTable"),i=f("BasicForm"),p=f("a-button"),C=f("CollapseContainer"),g=f("PageWrapper");return c(),y(g,{class:N(u.prefixCls),title:"\u6536\u85CF"},{headerContent:d(()=>[fe,L("div",{class:N(`${u.prefixCls}__link`)},null,2)]),default:d(()=>[u.data.detail?m("",!0):(c(),_("div",Ce,[k(h,{onRegister:u.registerTable,dataSource:u.data.colList,onChange:u.pageChange},{action:d(({record:o,column:B})=>[k(s,{actions:u.createActions(o,B)},null,8,["actions"])]),_:1},8,["onRegister","dataSource","onChange"])])),u.data.detail?(c(),y(C,{key:1,title:`\u9898\u76EEID\uFF1A${u.data.quesDetail.id}`},{default:d(()=>[L("div",Ee,S(u.data.quesDetail.content),1),u.data.detail?(c(),y(i,{key:0,onRegister:u.register1,onSubmit:u.handleSubmit,onReset:u.handleReset,schemas:u.data.schemas},null,8,["onRegister","onSubmit","onReset","schemas"])):m("",!0),k(p,{onClick:u.exit,class:"m-5"},{default:d(()=>[Ae]),_:1},8,["onClick"]),k(p,{onClick:u.lookAnswer,class:"m-5"},{default:d(()=>[we]),_:1},8,["onClick"])]),_:1},8,["title"])):m("",!0),u.data.answerIf?(c(),y(C,{key:2,title:"\u9898\u76EE\u7B54\u6848",canExpan:!1},{default:d(()=>[u.data.quesDetail.answer?(c(),_("h1",he,"\u7B54\u6848\uFF1A"+S(u.data.quesDetail.answer),1)):m("",!0),u.data.quesDetail.rightAnswer?(c(),_("h1",De,"\u7B54\u6848\uFF1A"+S(u.data.quesDetail.rightAnswer),1)):m("",!0),u.data.quesDetail.analysis?(c(),_("h1",be,"\u7B54\u6848\u89E3\u6790\uFF1A"+S(u.data.quesDetail.analysis),1)):m("",!0)]),_:1})):m("",!0)]),_:1},8,["class"])}var Eu=$(Fe,[["render",ye],["__scopeId","data-v-a824fa86"]]);export{Eu as default};