var A=(u,D,o)=>new Promise((i,k)=>{var q=r=>{try{F(o.next(r))}catch(l){k(l)}},d=r=>{try{F(o.throw(r))}catch(l){k(l)}},F=r=>r.done?i(r.value):Promise.resolve(r.value).then(q,d);F((o=o.apply(u,D)).next())});import{U as ue,r as se,f as U,a as te,an as ae,bF as V,bI as R,R as K,G as N,bC as oe,s as ne,v as le,a5 as ie,J as w,o as L,h as Q,w as g,x as B,n,m as b,y as p,t as y,E as re,Y as ce,z as h,H as de}from"./index.dd87d40a.js";import{cardList as me}from"./data.05aca618.js";import{P as pe}from"./index.ef71507d.js";/* empty css                *//* empty css               *//* empty css               *//* empty css                */import{a as ge,g as Be}from"./question.ac1d9ff9.js";import{B as Fe}from"./TableImg.8102a7c5.js";import{B as Ee,T as Ae}from"./BasicForm.f8200627.js";import{u as De}from"./useTable.4b5df510.js";import{getBasicColumns as fe}from"./tableData.72f39dd1.js";import{u as $}from"./useForm.a7a1da29.js";import{a as Ce,b as be}from"./info.88f92374.js";import{duox as he,dx as we,pd as ye}from"./choose.d9417bb2.js";/* empty css               *//* empty css                */import"./useWindowSizeFn.ba5070cb.js";import"./useContentViewHeight.25d38b2f.js";/* empty css              *//* empty css                *//* empty css                *//* empty css                *//* empty css               */import"./index.4dda775a.js";import"./FullscreenOutlined.87f5bef8.js";/* empty css               */import"./sortable.esm.2632adaa.js";import"./RedoOutlined.796f116b.js";/* empty css                *//* empty css                */import"./index.015f9bd2.js";/* empty css               */import"./index.3f815269.js";/* empty css                *//* empty css                *//* empty css                */import"./download.302161fe.js";import"./uniqBy.fe41e18a.js";const{notification:a}=de(),ke=se(),M=U(()=>ke.getUserInfo),qe=te({components:{Icon:ae,PageWrapper:pe,[V.name]:V,[R.name]:R,[R.Item.name]:R.Item,[K.name]:K,[N.name]:N,BasicTable:Fe,BasicForm:Ee,TableAction:Ae,CollapseContainer:oe},setup(){const u=()=>[{field:"level",component:"Select",label:"",colProps:{span:3},componentProps:{placeholder:"\u96BE\u5EA6",options:[{label:"\u7B80\u5355",value:"1",key:"1"},{label:"\u4E2D\u7B49",value:"2",key:"2"},{label:"\u56F0\u96BE",value:"3",key:"3"}],onChange:s=>{T(s,"levelChange")}}},{field:"type",component:"Select",label:"",colProps:{span:3},componentProps:{placeholder:"\u7C7B\u578B",onChange:s=>{T(s,"typeChange")},options:[{label:"\u5224\u65AD",value:"1",key:"1"},{label:"\u5355\u9009",value:"2",key:"2"},{label:"\u591A\u9009",value:"3",key:"3"},{label:"\u586B\u7A7A",value:"4",key:"4"},{label:"\u8BBA\u8FF0",value:"5",key:"5"}]}}],[D,{setFieldsValue:o,getFieldsValue:i,submit:k}]=$({labelWidth:50,submitButtonOptions:{text:"\u63D0\u4EA4"}}),[q]=$({labelWidth:10,schemas:u(),showSubmitButton:!1}),d=ne(!0),[F,{setLoading:r,setColumns:l,getColumns:j,getDataSource:f,getRawDataSource:z,reload:ze,getPaginationRef:c,setPagination:Pe,getSelectRows:W,getSelectRowKeys:Ve,setSelectedRowKeys:Ke,clearSelectedRowKeys:Ne}]=De({title:"\u9898\u5E93",titleHelpMessage:"\u6E29\u99A8\u63D0\u9192",columns:fe(),showTableSetting:!0,pagination:d,sortFn:()=>{W()},actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),e=le({questionList:[],formData:{},obj:{orderRule:0,pageNum:1,pageSize:10,level:0,type:0},detail:!0,quesDetail:{},detailId:0,schemas:[],answerIf:!1}),T=(s,t)=>{t=="typeChange",s?t=="typeChange"?e.obj.type=s:e.obj.level=s:t=="typeChange"?e.obj.type=0:e.obj.level=0,e.obj,E()},H=()=>{e.obj.type=0,e.obj.level=0,E()};function E(){return A(this,null,function*(){e.obj;const s=yield ge(e.obj);d.value={total:s.data.total},d.value={total:s.data.total},e.questionList=s.data.list,e.questionList,e.questionList.map(t=>{switch(t.level){case 1:t.level="\u7B80\u5355";break;case 2:t.level="\u4E2D\u7B49";break;case 3:t.level="\u56F0\u96BE";break}switch(t.type){case 1:t.type="\u5224\u65AD\u9898";break;case 2:t.type="\u5355\u9009\u9898";break;case 3:t.type="\u591A\u9009\u9898";break;case 4:t.type="\u586B\u7A7A\u9898";break;case 5:t.type="\u8BBA\u8FF0\u9898";break}})})}function P(s){return A(this,null,function*(){e.detailId=s.id;let t=I(s.type);if(t===4||t===5){a.warning({message:"\u6682\u4E0D\u652F\u6301\u7EC3\u4E60",duration:3});return}switch(t){case 1:e.schemas=ye();break;case 2:e.schemas=we();break;case 3:e.schemas=he();break}yield v(s.id,t)})}ie(()=>{E(e.obj)}),U(()=>(Math.floor(c().total/c().pageSize)+1==c().current&&(e.obj.pageNum=c().current,e.obj.pageSize=c().pageSize,E()),c().current));function G(){return A(this,null,function*(){e.obj.pageNum=c().current,e.obj.pageSize=c().pageSize,E()})}const J=()=>{e.detail=!0};function v(s,t){return A(this,null,function*(){const m=yield Be(s,t);e.quesDetail=m.data,e.detail=!1})}const O=()=>{},Y=()=>{try{e.questionList.some((s,t,m)=>{if(s.id==e.detailId)throw t-1<0?(a.warning({message:"\u8FD9\u5DF2\u7ECF\u662F\u7B2C\u4E00\u9898\u4E86",duration:3}),"\u5FAA\u73AF\u7EC8\u6B62"):(e.detailId=m[t-1].id,C(),v(e.detailId,I(m[t-1].type)),"\u5FAA\u73AF\u7EC8\u6B62")})}catch(s){}},S=()=>{try{e.questionList.some((s,t,m)=>{if(s.id==e.detailId)throw t+1>=m.length?(a.warning({message:"\u8FD9\u5DF2\u7ECF\u662F\u6700\u540E\u4E00\u9898\u4E86",duration:3}),"\u5FAA\u73AF\u7EC8\u6B62"):(e.detailId=m[t+1].id,C(),v(e.detailId,I(m[t+1].type)),"\u5FAA\u73AF\u7EC8\u6B62")})}catch(s){}},I=s=>{switch(s){case"\u5224\u65AD\u9898":return 1;case"\u5355\u9009\u9898":return 2;case"\u591A\u9009\u9898":return 3;case"\u586B\u7A7A\u9898":return 4;case"\u8BBA\u8FF0\u9898":return 5}};function _(){return A(this,null,function*(){const s=yield Ce({quesId:e.quesDetail.id,userId:+M.value.id});s.code==="ITEST-200"?a.success({message:"\u6DFB\u52A0\u6210\u529F",duration:3}):a.error({message:"\u6DFB\u52A0\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5",duration:3})})}function X(){return A(this,null,function*(){const s=yield be({questionId:e.quesDetail.id,userId:+M.value.id});s.code==="ITEST-200"?a.success({message:"\u6DFB\u52A0\u6210\u529F",duration:3}):a.error({message:"\u6DFB\u52A0\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5",duration:3})})}const Z=()=>{if(i().answer1,i().answer1==null){a.error({message:"\u8BF7\u8F93\u5165\u7B54\u6848",duration:3});return}e.quesDetail.type===1?e.quesDetail.answer==i().answer1?(o({answer1:null}),C(),a.success({message:"\u7B54\u6848\u6B63\u786E \u7CFB\u7EDF\u5C06\u81EA\u52A8\u8DF3\u8F6C\u5230\u4E0B\u4E00\u9898...",duration:3}),S()):(o({answer1:null}),a.error({message:"\u7B54\u6848\u9519\u8BEF",duration:3}),_()):e.quesDetail.type===2?(e.quesDetail.rightAnswer,i(),e.quesDetail.rightAnswer==i().answer1?(o({answer1:null}),C(),a.success({message:"\u7B54\u6848\u6B63\u786E \u7CFB\u7EDF\u5C06\u81EA\u52A8\u8DF3\u8F6C\u5230\u4E0B\u4E00\u9898...",duration:3}),S()):(o({answer1:null}),a.error({message:"\u7B54\u6848\u9519\u8BEF \u9898\u76EE\u81EA\u52A8\u6DFB\u52A0\u5230\u9519\u9898\u5E93\u4E2D...",duration:3}),_())):e.quesDetail.type===3&&(e.quesDetail.rightAnswer,i().answer1.join(""),e.quesDetail.rightAnswer==i().answer1.join("")?(o({answer1:null}),C(),a.success({message:"\u7B54\u6848\u6B63\u786E \u7CFB\u7EDF\u5C06\u81EA\u52A8\u8DF3\u8F6C\u5230\u4E0B\u4E00\u9898...",duration:3}),S()):(o({answer1:null}),a.error({message:"\u7B54\u6848\u9519\u8BEF \u9898\u76EE\u81EA\u52A8\u6DFB\u52A0\u5230\u9519\u9898\u5E93\u4E2D...",duration:3})))};function x(s,t){return[{label:"\u67E5\u770B",color:"success",onClick:P.bind(null,s)}]}const ee=()=>{e.answerIf=!0},C=()=>{e.answerIf=!1};return{prefixCls:"list-card",list:me,getQuestions:E,selectQuestions:T,data:e,pagination:d,register:q,register1:D,questionDetail:P,registerTable:F,pageChange:G,resetQuestions:H,exit:J,QuestionDetail:v,lastQues:Y,nextQues:S,typeToId:I,addErrK:_,addCollK:X,getContent:O,handleSubmit:Z,createActions:x,lookAnswer:ee,closeAnswer:C,sortByTime:()=>{e.obj.orderRule=(e.obj.orderRule+1)%2,e.obj.pageNum=c().current,e.obj.pageSize=c().pageSize,E()}}}}),ve={class:"p-4"},Se={class:"m-15"},Ie=h("\u9000\u51FA\u8BAD\u7EC3"),Re=h("\u67E5\u770B\u7B54\u6848"),je=h("\u4E0A\u4E00\u4E2A"),Te=h("\u4E0B\u4E00\u4E2A"),_e=h("\u6DFB\u52A0\u5230\u9519\u9898\u5E93"),Le=h("\u6DFB\u52A0\u5230\u6536\u85CF\u5939");function Qe(u,D,o,i,k,q){const d=w("BasicForm"),F=w("TableAction"),r=w("BasicTable"),l=w("a-button"),j=w("CollapseContainer");return L(),Q("div",null,[g(n(d,{onRegister:u.register,modelValue:u.level,"onUpdate:modelValue":D[0]||(D[0]=f=>u.level=f),style:{margin:"10px"},onReset:u.resetQuestions},null,8,["onRegister","modelValue","onReset"]),[[B,u.data.detail]]),b("div",ve,[g(n(r,{onRegister:u.registerTable,onRowClick:u.questionDetail,dataSource:u.data.questionList,onChange:u.pageChange},{action:p(({record:f,column:z})=>[n(F,{actions:u.createActions(f,z)},null,8,["actions"])]),_:1},8,["onRegister","onRowClick","dataSource","onChange"]),[[B,u.data.detail]])]),g(n(j,{title:`\u9898\u76EEID\uFF1A${u.data.quesDetail.id}`},{default:p(()=>[b("div",Se,y(u.data.quesDetail.content),1),(L(!0),Q(re,null,ce(u.data.quesDetail.selectionList,f=>(L(),Q("ul",{class:"m-15",key:u.data.quesDetail.id},[b("li",null,y(f),1)]))),128)),g(n(d,{onRegister:u.register1,onSubmit:u.handleSubmit,onReset:u.handleReset,schemas:u.data.schemas},null,8,["onRegister","onSubmit","onReset","schemas"]),[[B,!u.data.detail]]),n(l,{onClick:u.exit,class:"m-5"},{default:p(()=>[Ie]),_:1},8,["onClick"]),n(l,{onClick:u.lookAnswer,class:"m-5"},{default:p(()=>[Re]),_:1},8,["onClick"]),n(l,{onClick:u.lastQues,class:"m-5"},{default:p(()=>[je]),_:1},8,["onClick"]),n(l,{onClick:u.nextQues,class:"m-5"},{default:p(()=>[Te]),_:1},8,["onClick"]),n(l,{onClick:u.addErrK,class:"m-5"},{default:p(()=>[_e]),_:1},8,["onClick"]),n(l,{onClick:u.addCollK,class:"m-5"},{default:p(()=>[Le]),_:1},8,["onClick"])]),_:1},8,["title"]),[[B,!u.data.detail]]),g(n(j,{title:"\u9898\u76EE\u7B54\u6848",canExpan:!1},{default:p(()=>[g(b("h1",null,"\u7B54\u6848\uFF1A"+y(u.data.quesDetail.answer),513),[[B,u.data.quesDetail.answer]]),g(b("h1",null,"\u7B54\u6848\uFF1A"+y(u.data.quesDetail.rightAnswer),513),[[B,u.data.quesDetail.rightAnswer]]),g(b("h1",null,"\u7B54\u6848\u89E3\u6790\uFF1A"+y(u.data.quesDetail.analysis),513),[[B,u.data.quesDetail.analysis]])]),_:1},512),[[B,u.data.answerIf]])])}var Su=ue(qe,[["render",Qe],["__scopeId","data-v-e18fb91c"]]);export{Su as default};
