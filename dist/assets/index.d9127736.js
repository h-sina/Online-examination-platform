var F=(u,A,n)=>new Promise((r,v)=>{var q=c=>{try{o(n.next(c))}catch(b){v(b)}},m=c=>{try{o(n.throw(c))}catch(b){v(b)}},o=c=>c.done?r(c.value):Promise.resolve(c.value).then(q,m);o((n=n.apply(u,A)).next())});import{U as oe,r as ne,f as H,a as le,an as ie,bF as K,bI as _,R as N,G as W,bC as re,s as $,v as ce,a5 as de,J as h,o as l,j as f,y as i,k as g,m as L,n as E,t as k,h as w,Y as me,E as pe,q as ge,z as D,H as Fe}from"./index.572c67d6.js";import{P as Be}from"./index.b7e737e8.js";/* empty css                *//* empty css               *//* empty css               *//* empty css                */import{a as fe,g as Ee}from"./question.9c03e846.js";import{B as De}from"./TableImg.e06b769d.js";import{B as Ae,T as be}from"./BasicForm.0b74da23.js";import{u as Ce}from"./useTable.9bb235aa.js";import{getBasicColumns as ye}from"./tableData.57b9d957.js";import{u as M}from"./useForm.b6df9dcc.js";import{a as he,b as ke}from"./info.085b6a67.js";import{duox as we,dx as ve,pd as qe}from"./choose.8745ba12.js";/* empty css               *//* empty css                */import"./useWindowSizeFn.5f8600bf.js";import"./useContentViewHeight.d2c46a54.js";/* empty css              *//* empty css                *//* empty css                *//* empty css                *//* empty css               */import"./index.11114b7e.js";import"./FullscreenOutlined.7f0e8dbd.js";/* empty css               */import"./sortable.esm.2632adaa.js";import"./RedoOutlined.a7e7b0d7.js";/* empty css                *//* empty css                */import"./index.6d13df12.js";/* empty css               */import"./index.f25665de.js";/* empty css                *//* empty css                *//* empty css                */import"./download.b0bc62eb.js";import"./uniqBy.e10c5d38.js";const{notification:s}=Fe(),Se=ne(),U=H(()=>Se.getUserInfo),Ie=()=>[{field:"level",component:"Select",label:"level",colProps:{span:8},componentProps:{options:[{label:"\u7B80\u5355",value:"1",key:"1"},{label:"\u4E2D\u7B49",value:"2",key:"2"},{label:"\u56F0\u96BE",value:"3",key:"3"}]}},{field:"type",component:"Select",label:"type",colProps:{span:8},componentProps:{options:[{label:"\u5224\u65AD",value:"1",key:"1"},{label:"\u5355\u9009",value:"2",key:"2"},{label:"\u591A\u9009",value:"3",key:"3"},{label:"\u586B\u7A7A",value:"4",key:"4"},{label:"\u8BBA\u8FF0",value:"5",key:"5"}]}}],Re=le({components:{Icon:ie,PageWrapper:Be,[K.name]:K,[_.name]:_,[_.Item.name]:_.Item,[N.name]:N,[W.name]:W,BasicTable:De,BasicForm:Ae,TableAction:be,CollapseContainer:re},setup(){const u=$(""),[A,{setFieldsValue:n,getFieldsValue:r,submit:v}]=M({labelWidth:120,submitButtonOptions:{text:"\u63D0\u4EA4"}}),[q]=M({labelWidth:120,schemas:Ie(),actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),m=$(!0),[o,{setLoading:c,setColumns:b,getColumns:j,getDataSource:Q,getRawDataSource:C,reload:z,getPaginationRef:d,setPagination:Ue,getSelectRows:O,getSelectRowKeys:He,setSelectedRowKeys:Oe,clearSelectedRowKeys:Ge}]=Ce({title:"\u9898\u5E93",titleHelpMessage:"\u6E29\u99A8\u63D0\u9192",columns:ye(),showTableSetting:!0,pagination:m,sortFn:()=>{O()},actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),e=ce({questionList:[],formData:{},obj:{orderRule:0,pageNum:1,pageSize:10,level:0,typ:0},detail:!0,quesDetail:{},detailId:0,schemas:[],answerIf:!1}),G=t=>{t&&(e.formData=t,e.formData.level!=null?e.obj.level=+e.formData.level:e.obj.level=0,e.formData.type!=null?e.obj.type=+e.formData.type:e.obj.type=0,B())},J=()=>{e.obj.type=0,e.obj.level=0,B()};function B(){return F(this,null,function*(){e.obj;const t=yield fe(e.obj);m.value={total:t.data.total},m.value={total:t.data.total},e.questionList=t.data.list,e.questionList,e.questionList.map(a=>{switch(a.level){case 1:a.level="\u7B80\u5355";break;case 2:a.level="\u4E2D\u7B49";break;case 3:a.level="\u56F0\u96BE";break}switch(a.type){case 1:a.type="\u5224\u65AD\u9898";break;case 2:a.type="\u5355\u9009\u9898";break;case 3:a.type="\u591A\u9009\u9898";break;case 4:a.type="\u586B\u7A7A\u9898";break;case 5:a.type="\u8BBA\u8FF0\u9898";break}})})}function P(t){return F(this,null,function*(){e.detailId=t.id;let a=R(t.type);if(a===4||a===5){s.warning({message:"\u6682\u4E0D\u652F\u6301\u7EC3\u4E60",duration:3});return}switch(a){case 1:e.schemas=qe();break;case 2:e.schemas=ve();break;case 3:e.schemas=we();break}yield S(t.id,a)})}de(()=>{B(e.obj)}),H(()=>(Math.floor(d().total/d().pageSize)+1==d().current&&(e.obj.pageNum=d().current,e.obj.pageSize=d().pageSize,B()),d().current));function Y(){return F(this,null,function*(){e.obj.pageNum=d().current,e.obj.pageSize=d().pageSize,B()})}const X=()=>{e.detail=!0};function S(t,a){return F(this,null,function*(){const p=yield Ee(t,a);e.quesDetail=p.data,e.detail=!1})}const Z=()=>{},x=()=>{try{e.questionList.some((t,a,p)=>{if(t.id==e.detailId)throw a-1<0?(s.warning({message:"\u8FD9\u5DF2\u7ECF\u662F\u7B2C\u4E00\u9898\u4E86",duration:3}),"\u5FAA\u73AF\u7EC8\u6B62"):(e.detailId=p[a-1].id,y(),S(e.detailId,R(p[a-1].type)),"\u5FAA\u73AF\u7EC8\u6B62")})}catch(t){}},I=()=>{try{e.questionList.some((t,a,p)=>{if(t.id==e.detailId)throw a+1>=p.length?(s.warning({message:"\u8FD9\u5DF2\u7ECF\u662F\u6700\u540E\u4E00\u9898\u4E86",duration:3}),"\u5FAA\u73AF\u7EC8\u6B62"):(e.detailId=p[a+1].id,y(),S(e.detailId,R(p[a+1].type)),"\u5FAA\u73AF\u7EC8\u6B62")})}catch(t){}},R=t=>{switch(t){case"\u5224\u65AD\u9898":return 1;case"\u5355\u9009\u9898":return 2;case"\u591A\u9009\u9898":return 3;case"\u586B\u7A7A\u9898":return 4;case"\u8BBA\u8FF0\u9898":return 5}};function T(){return F(this,null,function*(){const t=yield he({quesId:e.quesDetail.id,userId:+U.value.id});t.code==="ITEST-200"?s.success({message:"\u6DFB\u52A0\u6210\u529F",duration:3}):s.error({message:"\u6DFB\u52A0\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5",duration:3})})}function ee(){return F(this,null,function*(){const t=yield ke({questionId:e.quesDetail.id,userId:+U.value.id});t.code==="ITEST-200"?s.success({message:"\u6DFB\u52A0\u6210\u529F",duration:3}):s.error({message:"\u6DFB\u52A0\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5",duration:3})})}const ue=()=>{if(r().answer1,r().answer1==null){s.error({message:"\u8BF7\u8F93\u5165\u7B54\u6848",duration:3});return}e.quesDetail.type===1?e.quesDetail.answer==r().answer1?(n({answer1:null}),y(),s.success({message:"\u7B54\u6848\u6B63\u786E \u7CFB\u7EDF\u5C06\u81EA\u52A8\u8DF3\u8F6C\u5230\u4E0B\u4E00\u9898...",duration:3}),I()):(n({answer1:null}),s.error({message:"\u7B54\u6848\u9519\u8BEF",duration:3}),T()):e.quesDetail.type===2?(e.quesDetail.rightAnswer,r(),e.quesDetail.rightAnswer==r().answer1?(n({answer1:null}),y(),s.success({message:"\u7B54\u6848\u6B63\u786E \u7CFB\u7EDF\u5C06\u81EA\u52A8\u8DF3\u8F6C\u5230\u4E0B\u4E00\u9898...",duration:3}),I()):(n({answer1:null}),s.error({message:"\u7B54\u6848\u9519\u8BEF \u9898\u76EE\u81EA\u52A8\u6DFB\u52A0\u5230\u9519\u9898\u5E93\u4E2D...",duration:3}),T())):e.quesDetail.type===3&&(e.quesDetail.rightAnswer,r().answer1.join(""),e.quesDetail.rightAnswer==r().answer1.join("")?(n({answer1:null}),y(),s.success({message:"\u7B54\u6848\u6B63\u786E \u7CFB\u7EDF\u5C06\u81EA\u52A8\u8DF3\u8F6C\u5230\u4E0B\u4E00\u9898...",duration:3}),I()):(n({answer1:null}),s.error({message:"\u7B54\u6848\u9519\u8BEF \u9898\u76EE\u81EA\u52A8\u6DFB\u52A0\u5230\u9519\u9898\u5E93\u4E2D...",duration:3})))};function te(t,a){return[{label:"\u67E5\u770B",color:"success",onClick:P.bind(null,t)},{label:"\u5220\u9664",color:"success",onClick:V.bind(null,t)},{label:"\u7F16\u8F91",disabled:u.value?u.value!==t.key:!1,onClick:ae.bind(null,t)}]}function V(t){return F(this,null,function*(){})}function ae(t){var a;u.value=t.key,(a=t.onEdit)==null||a.call(t,!0)}const se=()=>{e.answerIf=!0},y=()=>{e.answerIf=!1};return{prefixCls:"list-card",getQuestions:B,selectQuestions:G,data:e,pagination:m,register:q,register1:A,questionDetail:P,registerTable:o,pageChange:Y,resetQuestions:J,exit:X,QuestionDetail:S,lastQues:x,nextQues:I,typeToId:R,addErrK:T,addCollK:ee,getContent:Z,handleSubmit:ue,createActions:te,lookAnswer:se,closeAnswer:y,sortByTime:()=>{e.obj.orderRule=(e.obj.orderRule+1)%2,e.obj.pageNum=d().current,e.obj.pageSize=d().pageSize,B()},del:V}}}),_e=D("\u70B9\u51FB\u6309\u521B\u5EFA\u65F6\u95F4\u6392\u5E8F"),je={class:"p-4"},Te={class:"m-15"},Le=D("\u9000\u51FA\u8BAD\u7EC3"),Qe=D("\u67E5\u770B\u7B54\u6848"),ze=D("\u4E0A\u4E00\u4E2A"),Pe=D("\u4E0B\u4E00\u4E2A"),Ve=D("\u6DFB\u52A0\u5230\u9519\u9898\u5E93"),Ke=D("\u6DFB\u52A0\u5230\u6536\u85CF\u5939"),Ne={key:0},We={key:1},$e={key:2};function Me(u,A,n,r,v,q){const m=h("BasicForm"),o=h("a-button"),c=h("TableAction"),b=h("BasicTable"),j=h("CollapseContainer"),Q=h("PageWrapper");return l(),f(Q,{class:ge(u.prefixCls)},{default:i(()=>[u.data.detail?(l(),f(m,{key:0,onRegister:u.register,onSubmit:u.selectQuestions,onReset:u.resetQuestions,modelValue:u.level,"onUpdate:modelValue":A[0]||(A[0]=C=>u.level=C)},null,8,["onRegister","onSubmit","onReset","modelValue"])):g("",!0),u.data.detail?(l(),f(o,{key:1,shape:"round",onClick:u.sortByTime},{default:i(()=>[_e]),_:1},8,["onClick"])):g("",!0),L("div",je,[u.data.detail?(l(),f(b,{key:0,onRegister:u.registerTable,onRowClick:u.questionDetail,dataSource:u.data.questionList,onChange:u.pageChange},{action:i(({record:C,column:z})=>[E(c,{actions:u.createActions(C,z)},null,8,["actions"])]),_:1},8,["onRegister","onRowClick","dataSource","onChange"])):g("",!0)]),u.data.detail?g("",!0):(l(),f(j,{key:2,title:`\u9898\u76EEID\uFF1A${u.data.quesDetail.id}`},{default:i(()=>[L("div",Te,k(u.data.quesDetail.content),1),(l(!0),w(pe,null,me(u.data.quesDetail.selectionList,C=>(l(),w("ul",{class:"m-15",key:u.data.quesDetail.id},[L("li",null,k(C),1)]))),128)),u.data.detail?g("",!0):(l(),f(m,{key:0,onRegister:u.register1,onSubmit:u.handleSubmit,onReset:u.handleReset,schemas:u.data.schemas},null,8,["onRegister","onSubmit","onReset","schemas"])),E(o,{onClick:u.exit,class:"m-5"},{default:i(()=>[Le]),_:1},8,["onClick"]),E(o,{onClick:u.lookAnswer,class:"m-5"},{default:i(()=>[Qe]),_:1},8,["onClick"]),E(o,{onClick:u.lastQues,class:"m-5"},{default:i(()=>[ze]),_:1},8,["onClick"]),E(o,{onClick:u.nextQues,class:"m-5"},{default:i(()=>[Pe]),_:1},8,["onClick"]),E(o,{onClick:u.addErrK,class:"m-5"},{default:i(()=>[Ve]),_:1},8,["onClick"]),E(o,{onClick:u.addCollK,class:"m-5"},{default:i(()=>[Ke]),_:1},8,["onClick"])]),_:1},8,["title"])),u.data.answerIf?(l(),f(j,{key:3,title:"\u9898\u76EE\u7B54\u6848",canExpan:!1},{default:i(()=>[u.data.quesDetail.answer?(l(),w("h1",Ne,"\u7B54\u6848\uFF1A"+k(u.data.quesDetail.answer),1)):g("",!0),u.data.quesDetail.rightAnswer?(l(),w("h1",We,"\u7B54\u6848\uFF1A"+k(u.data.quesDetail.rightAnswer),1)):g("",!0),u.data.quesDetail.analysis?(l(),w("h1",$e,"\u7B54\u6848\u89E3\u6790\uFF1A"+k(u.data.quesDetail.analysis),1)):g("",!0)]),_:1})):g("",!0)]),_:1},8,["class"])}var Lu=oe(Re,[["render",Me],["__scopeId","data-v-ed944ad6"]]);export{Lu as default};