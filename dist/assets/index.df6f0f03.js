var g=(u,i,o)=>new Promise((r,T)=>{var S=c=>{try{F(o.next(c))}catch(b){T(b)}},p=c=>{try{F(o.throw(c))}catch(b){T(b)}},F=c=>c.done?r(c.value):Promise.resolve(c.value).then(S,p);F((o=o.apply(u,i)).next())});import{U as te,r as oe,f as G,a as ne,an as le,bF as N,bK as _,R as H,G as $,bC as ie,s as M,v as re,a5 as ce,J as A,o as l,h,j as k,k as B,m as q,y as f,n as C,t as v,E as de,Y as pe,z as w,H as me}from"./index.7213dd96.js";import{P as ge}from"./index.4975d5c5.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                */import{a as Be,g as Fe,d as Ee}from"./question.f7a7f083.js";import{B as Ae,u as fe}from"./useTable.47254d5f.js";import{B as Ce,T as be,u as U}from"./useForm.ad1cea57.js";import{getBasicColumns as De}from"./tableData.57b9d957.js";import{a as he,b as we}from"./info.867dfa16.js";import{duox as ye,dx as ke,pd as qe}from"./choose.8745ba12.js";import{H as ve,P as Te}from"./PushpinTwoTone.199a1430.js";/* empty css               *//* empty css               */import"./useWindowSizeFn.6a6377e0.js";import"./useContentViewHeight.3ed0bf88.js";/* empty css              *//* empty css                *//* empty css                *//* empty css               */import"./index.f479f48f.js";import"./FullscreenOutlined.10ec0dd9.js";/* empty css               */import"./sortable.esm.2632adaa.js";import"./RedoOutlined.451aef28.js";/* empty css                */import"./index.667c5c2c.js";/* empty css               */import"./index.739838ce.js";/* empty css              */import"./download.9569db53.js";import"./uniqBy.5cba7abe.js";const{notification:t}=me(),Se=oe(),W=G(()=>Se.getUserInfo),Ie=ne({components:{Icon:le,PageWrapper:ge,[N.name]:N,[_.name]:_,[_.Item.name]:_.Item,[H.name]:H,[$.name]:$,BasicTable:Ae,BasicForm:Ce,TableAction:be,CollapseContainer:ie,HeartTwoTone:ve,PushpinTwoTone:Te},setup(){const u=()=>[{field:"level",component:"Select",label:"",colProps:{span:3},componentProps:{placeholder:"\u96BE\u5EA6",options:[{label:"\u7B80\u5355",value:"1",key:"1"},{label:"\u4E2D\u7B49",value:"2",key:"2"},{label:"\u56F0\u96BE",value:"3",key:"3"}],onChange:s=>{P(s,"levelChange")}}},{field:"type",component:"Select",label:"",colProps:{span:3},componentProps:{placeholder:"\u7C7B\u578B",onChange:s=>{P(s,"typeChange")},options:[{label:"\u5224\u65AD",value:"1",key:"1"},{label:"\u5355\u9009",value:"2",key:"2"},{label:"\u591A\u9009",value:"3",key:"3"},{label:"\u586B\u7A7A",value:"4",key:"4"},{label:"\u8BBA\u8FF0",value:"5",key:"5"}]}}];M("");const[i,{setFieldsValue:o,getFieldsValue:r,submit:T}]=U({labelWidth:120,submitButtonOptions:{text:"\u63D0\u4EA4"}}),[S]=U({labelWidth:10,schemas:u(),showSubmitButton:!1}),p=M(!0),[F,{setLoading:c,setColumns:b,getColumns:K,getDataSource:y,getRawDataSource:L,reload:d,getPaginationRef:n,setPagination:Me,getSelectRows:J,getSelectRowKeys:Ue,setSelectedRowKeys:We,clearSelectedRowKeys:Ge}]=fe({title:"\u9898\u5E93",titleHelpMessage:"\u6E29\u99A8\u63D0\u9192",columns:De(),showTableSetting:!0,pagination:p,sortFn:()=>{J()},actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),e=re({questionList:[],formData:{},obj:{orderRule:0,pageNum:1,pageSize:10,level:0,typ:0},detail:!0,quesDetail:{},detailId:0,schemas:[],answerIf:!1}),P=(s,a)=>{a=="typeChange",s?a=="typeChange"?e.obj.type=s:e.obj.level=s:a=="typeChange"?e.obj.type=0:e.obj.level=0,e.obj,E()},O=()=>{e.obj.type=0,e.obj.level=0,E()};function E(){return g(this,null,function*(){e.obj;const s=yield Be(e.obj);p.value={total:s.data.total},p.value={total:s.data.total},e.questionList=s.data.list,e.questionList,e.questionList.map(a=>{switch(a.level){case 1:a.level="\u7B80\u5355";break;case 2:a.level="\u4E2D\u7B49";break;case 3:a.level="\u56F0\u96BE";break}switch(a.type){case 1:a.type="\u5224\u65AD\u9898";break;case 2:a.type="\u5355\u9009\u9898";break;case 3:a.type="\u591A\u9009\u9898";break;case 4:a.type="\u586B\u7A7A\u9898";break;case 5:a.type="\u8BBA\u8FF0\u9898";break}})})}function z(s){return g(this,null,function*(){e.detailId=s.id;let a=j(s.type);if(a===4||a===5){t.warning({message:"\u6682\u4E0D\u652F\u6301\u7EC3\u4E60",duration:3});return}switch(a){case 1:e.schemas=qe();break;case 2:e.schemas=ke();break;case 3:e.schemas=ye();break}yield I(s.id,a)})}ce(()=>{e.answerIf=!1,E(e.obj)}),G(()=>(Math.floor(n().total/n().pageSize)+1==n().current&&(e.obj.pageNum=n().current,e.obj.pageSize=n().pageSize,E()),n().current));function Y(){return g(this,null,function*(){e.obj.pageNum=n().current,e.obj.pageSize=n().pageSize,E()})}const X=()=>{e.detail=!0,e.answerIf=!1};function I(s,a){return g(this,null,function*(){const m=yield Fe(s,a);e.quesDetail=m.data,e.detail=!1})}const Z=()=>{},x=()=>{try{e.questionList.some((s,a,m)=>{if(s.id==e.detailId)throw 0>a-1?(t.warning({message:"\u8FD9\u5DF2\u7ECF\u662F\u7B2C\u4E00\u9898\u4E86",duration:3}),"\u5FAA\u73AF\u7EC8\u6B62"):(e.detailId=m[a-1].id,D(),I(e.detailId,j(m[a-1].type)),"\u5FAA\u73AF\u7EC8\u6B62")})}catch(s){}},R=()=>{try{e.questionList.some((s,a,m)=>{if(s.id==e.detailId)throw a+1>=m.length?(t.warning({message:"\u8FD9\u5DF2\u7ECF\u662F\u6700\u540E\u4E00\u9898\u4E86",duration:3}),"\u5FAA\u73AF\u7EC8\u6B62"):(e.detailId=m[a+1].id,D(),I(e.detailId,j(m[a+1].type)),"\u5FAA\u73AF\u7EC8\u6B62")})}catch(s){}},j=s=>{switch(s){case"\u5224\u65AD\u9898":return 1;case"\u5355\u9009\u9898":return 2;case"\u591A\u9009\u9898":return 3;case"\u586B\u7A7A\u9898":return 4;case"\u8BBA\u8FF0\u9898":return 5}};function Q(){return g(this,null,function*(){const s=yield he({quesId:e.quesDetail.id,userId:+W.value.id});s.code==="ITEST-200"?t.success({message:"\u6DFB\u52A0\u6210\u529F",duration:3}):t.error({message:"\u6DFB\u52A0\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5",duration:3})})}function ee(){return g(this,null,function*(){const s=yield we({questionId:e.quesDetail.id,userId:+W.value.id});s.code==="ITEST-200"?t.success({message:"\u6DFB\u52A0\u6210\u529F",duration:3}):t.error({message:"\u6DFB\u52A0\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5",duration:3})})}const ue=()=>{if(r().answer1,r().answer1==null){t.error({message:"\u8BF7\u8F93\u5165\u7B54\u6848",duration:3});return}e.quesDetail.type===1?e.quesDetail.answer==r().answer1?(o({answer1:null}),D(),t.success({message:"\u7B54\u6848\u6B63\u786E \u7CFB\u7EDF\u5C06\u81EA\u52A8\u8DF3\u8F6C\u5230\u4E0B\u4E00\u9898...",duration:3}),R()):(o({answer1:null}),t.error({message:"\u7B54\u6848\u9519\u8BEF",duration:3}),Q()):e.quesDetail.type===2?(e.quesDetail.rightAnswer,r(),e.quesDetail.rightAnswer==r().answer1?(o({answer1:null}),D(),t.success({message:"\u7B54\u6848\u6B63\u786E \u7CFB\u7EDF\u5C06\u81EA\u52A8\u8DF3\u8F6C\u5230\u4E0B\u4E00\u9898...",duration:3}),R()):(o({answer1:null}),t.error({message:"\u7B54\u6848\u9519\u8BEF \u9898\u76EE\u81EA\u52A8\u6DFB\u52A0\u5230\u9519\u9898\u5E93\u4E2D...",duration:3}),Q())):e.quesDetail.type===3&&(e.quesDetail.rightAnswer,r().answer1.join(""),e.quesDetail.rightAnswer==r().answer1.join("")?(o({answer1:null}),D(),t.success({message:"\u7B54\u6848\u6B63\u786E \u7CFB\u7EDF\u5C06\u81EA\u52A8\u8DF3\u8F6C\u5230\u4E0B\u4E00\u9898...",duration:3}),R()):(o({answer1:null}),t.error({message:"\u7B54\u6848\u9519\u8BEF \u9898\u76EE\u81EA\u52A8\u6DFB\u52A0\u5230\u9519\u9898\u5E93\u4E2D...",duration:3})))};function se(s,a){return[{label:"\u67E5\u770B",color:"success",onClick:z.bind(null,s)},{label:"\u5220\u9664",color:"success",onClick:V.bind(null,s)}]}function V(s){return g(this,null,function*(){const a=yield Ee({questionId:s.id})})}const ae=()=>{e.answerIf=!0},D=()=>{e.answerIf=!1};return{prefixCls:"list-card",getQuestions:E,selectQuestions:P,data:e,pagination:p,register:S,register1:i,questionDetail:z,registerTable:F,pageChange:Y,resetQuestions:O,exit:X,QuestionDetail:I,lastQues:x,nextQues:R,typeToId:j,addErrK:Q,addCollK:ee,getContent:Z,handleSubmit:ue,createActions:se,lookAnswer:ae,closeAnswer:D,sortByTime:()=>{e.obj.orderRule=(e.obj.orderRule+1)%2,e.obj.pageNum=n().current,e.obj.pageSize=n().pageSize,E()},del:V}}}),Re={class:"p-4"},je=w("\u6DFB\u81F3\u9519\u9898 "),_e=w("\u6536\u85CF\u672C\u9898 "),Le={class:"m-10"},Pe=w("\u9000\u51FA\u8BAD\u7EC3"),Qe=w("\u4E0A\u4E00\u4E2A"),Ke=w("\u4E0B\u4E00\u4E2A"),ze=w("\u67E5\u770B\u7B54\u6848"),Ve={key:0},Ne={key:1},He={key:2};function $e(u,i,o,r,T,S){const p=A("BasicForm"),F=A("TableAction"),c=A("BasicTable"),b=A("PushpinTwoTone"),K=A("HeartTwoTone"),y=A("a-button"),L=A("CollapseContainer");return l(),h("div",null,[u.data.detail?(l(),k(p,{key:0,onRegister:u.register,modelValue:u.level,"onUpdate:modelValue":i[0]||(i[0]=d=>u.level=d),style:{margin:"10px"},onReset:u.resetQuestions},null,8,["onRegister","modelValue","onReset"])):B("",!0),q("div",Re,[u.data.detail?(l(),k(c,{key:0,onRegister:u.registerTable,dataSource:u.data.questionList,onChange:u.pageChange},{action:f(({record:d,column:n})=>[C(F,{actions:u.createActions(d,n)},null,8,["actions"])]),_:1},8,["onRegister","dataSource","onChange"])):B("",!0)]),u.data.detail?B("",!0):(l(),k(L,{key:1,title:`\u9898\u76EEID\uFF1A${u.data.quesDetail.id}`},{default:f(()=>[q("a",{shape:"round",onClick:i[1]||(i[1]=(...d)=>u.addErrK&&u.addErrK(...d)),class:"m-2"},[C(b),je]),q("a",{shape:"round",onClick:i[2]||(i[2]=(...d)=>u.addCollK&&u.addCollK(...d)),class:"m-2"},[C(K),_e]),q("div",Le,v(u.data.quesDetail.content),1),(l(!0),h(de,null,pe(u.data.quesDetail.selectionList,d=>(l(),h("ul",{class:"m-5 ml-10",key:u.data.quesDetail.id},[q("li",null,v(d),1)]))),128)),u.data.detail?B("",!0):(l(),k(p,{key:0,onRegister:u.register1,onSubmit:u.handleSubmit,onReset:u.handleReset,schemas:u.data.schemas},null,8,["onRegister","onSubmit","onReset","schemas"])),C(y,{onClick:u.exit,class:"m-5"},{default:f(()=>[Pe]),_:1},8,["onClick"]),C(y,{shape:"round",onClick:u.lastQues,class:"m-5"},{default:f(()=>[Qe]),_:1},8,["onClick"]),C(y,{shape:"round",onClick:u.nextQues,class:"m-5"},{default:f(()=>[Ke]),_:1},8,["onClick"]),C(y,{onClick:u.lookAnswer,class:"m-5"},{default:f(()=>[ze]),_:1},8,["onClick"])]),_:1},8,["title"])),!u.data.detail&&u.data.answerIf?(l(),k(L,{key:2,title:"\u9898\u76EE\u7B54\u6848",canExpan:!1},{default:f(()=>[u.data.quesDetail.answer?(l(),h("h1",Ve,"\u7B54\u6848\uFF1A"+v(u.data.quesDetail.answer),1)):B("",!0),u.data.quesDetail.rightAnswer?(l(),h("h1",Ne,"\u7B54\u6848\uFF1A"+v(u.data.quesDetail.rightAnswer),1)):B("",!0),u.data.quesDetail.analysis?(l(),h("h1",He,"\u7B54\u6848\u89E3\u6790\uFF1A"+v(u.data.quesDetail.analysis),1)):B("",!0)]),_:1})):B("",!0)])}var Tu=te(Ie,[["render",$e],["__scopeId","data-v-2abd9e42"]]);export{Tu as default};
