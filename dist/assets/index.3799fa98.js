var w=(a,i,s)=>new Promise((E,r)=>{var p=o=>{try{g(s.next(o))}catch(b){r(b)}},F=o=>{try{g(s.throw(o))}catch(b){r(b)}},g=o=>o.done?E(o.value):Promise.resolve(o.value).then(p,F);g((s=s.apply(a,i)).next())});import{U,r as H,f as W,a as G,an as J,bF as q,bI as S,R,G as T,bC as O,s as $,v as X,a5 as Y,J as A,o as Z,h as x,w as c,x as m,m as C,n as d,y as D,t as k,z,H as ee}from"./index.dd87d40a.js";import{cardList as ae}from"./data.54f35b77.js";import{P as te}from"./index.ef71507d.js";/* empty css                *//* empty css               *//* empty css               *//* empty css                */import{c as ue,e as se}from"./info.88f92374.js";import{T as oe,B as ne}from"./BasicForm.f8200627.js";import{u as ie}from"./useForm.a7a1da29.js";import{getBasicColumns as L}from"./tableData.98c64252.js";import{g as re}from"./question.ac1d9ff9.js";import{duox as le,dx as ce,pd as me}from"./choose.d9417bb2.js";import{B as de}from"./TableImg.8102a7c5.js";import{u as pe}from"./useTable.4b5df510.js";/* empty css               *//* empty css                */import"./useWindowSizeFn.ba5070cb.js";import"./useContentViewHeight.25d38b2f.js";/* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.3f815269.js";/* empty css                *//* empty css                */import"./index.4dda775a.js";import"./FullscreenOutlined.87f5bef8.js";/* empty css                *//* empty css                *//* empty css                */import"./download.302161fe.js";import"./uniqBy.fe41e18a.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.796f116b.js";/* empty css                */import"./index.015f9bd2.js";const{notification:n}=ee(),ge=H(),j=W(()=>ge.getUserInfo),Be=G({components:{Icon:J,PageWrapper:te,[q.name]:q,[S.name]:S,[S.Item.name]:S.Item,[R.name]:R,[T.name]:T,BasicTable:de,TableAction:oe,BasicForm:ne,CollapseContainer:O},setup(){const[a,{setFieldsValue:i,getFieldsValue:s,submit:E}]=ie({labelWidth:120,submitButtonOptions:{text:"\u63D0\u4EA4"}}),r=$(!0),[p,{setLoading:F,setColumns:g,getColumns:o,getDataSource:b,getRawDataSource:De,reload:Ee,getPaginationRef:l,setPagination:be,getSelectRows:he,getSelectRowKeys:ye,setSelectedRowKeys:Se,clearSelectedRowKeys:ke}]=pe({title:"\u70B9\u51FB\u5220\u9664\u6309\u94AE \u6CE8\u610F\u4E0D\u80FD\u64A4\u9500 \u6CA1\u6709\u786E\u8BA4\u6846 \u8BF7\u8C28\u614E\u5220\u9664\uFF01",titleHelpMessage:"\u6E29\u99A8\u63D0\u9192",columns:L(),showTableSetting:!0,pagination:r,showTableSetting:!0,tableSetting:{fullScreen:!0},actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),e=X({colList:[],obj:{pageNum:1,pageSize:10},quesDetail:{},detail:!1,schemas:[],detailId:0,answerIf:!1});function h(){return w(this,null,function*(){const u=yield ue(e.obj);e.colList=u.data.list,e.colList.map(t=>{switch(t.level){case 1:t.level="\u7B80\u5355";break;case 2:t.level="\u4E2D\u7B49";break;case 3:t.level="\u56F0\u96BE";break}switch(t.type){case 1:t.type="\u5224\u65AD\u9898";break;case 2:t.type="\u5355\u9009\u9898";break;case 3:t.type="\u591A\u9009\u9898";break;case 4:t.type="\u586B\u7A7A\u9898";break;case 5:t.type="\u8BBA\u8FF0\u9898";break}}),r.value={total:u.data.total},e.colList})}function N(){Math.floor(l().total/l().pageSize)+1==l().current&&(e.obj.pageNum=l().current,e.obj.pageSize=l().pageSize,h()),e.obj.pageNum=l().current,e.obj.pageSize=l().pageSize,h(),l()}function V(u){return w(this,null,function*(){j.value,(yield se({questionId:u,userId:j.value.id})).code==="ITEST-200"?n.success({message:"\u5220\u9664\u6210\u529F",duration:3}):n.error({message:"\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5",duration:3}),h()})}function v(u){return w(this,null,function*(){e.detailId=u.id;let t=_(u.type);switch(t){case 1:e.schemas=me();break;case 2:e.schemas=ce();break;case 3:e.schemas=le();break}yield I(u.id,t)})}const _=u=>{switch(u){case"\u5224\u65AD\u9898":return 1;case"\u5355\u9009\u9898":return 2;case"\u591A\u9009\u9898":return 3;case"\u586B\u7A7A\u9898":return 4;case"\u8BBA\u8FF0\u9898":return 5}};function I(u,t){return w(this,null,function*(){const B=yield re(u,t);e.quesDetail=B.data,e.detail=!0})}Y(()=>{});function M(u,t){return[{label:"\u67E5\u770B",color:"success",onClick:v.bind(null,u)},{label:"\u5220\u9664",color:"error",onClick:V.bind(null,u.id)}]}const P=()=>{e.detail=!1,f()},K=()=>{if(s().answer1,s().answer1==null){n.error({message:"\u8BF7\u8F93\u5165\u7B54\u6848",duration:3});return}e.quesDetail.type===1?e.quesDetail.answer==s().answer1?(i({answer1:null}),f(),n.success({message:"\u7B54\u6848\u6B63\u786E \u7CFB\u7EDF\u5C06\u81EA\u52A8\u8DF3\u8F6C\u5230\u4E0B\u4E00\u9898...",duration:3}),y()):(i({answer1:null}),n.error({message:"\u7B54\u6848\u9519\u8BEF",duration:3})):e.quesDetail.type===2?(e.quesDetail.rightAnswer,s(),e.quesDetail.rightAnswer==s().answer1?(i({answer1:null}),f(),n.success({message:"\u7B54\u6848\u6B63\u786E \u7CFB\u7EDF\u5C06\u81EA\u52A8\u8DF3\u8F6C\u5230\u4E0B\u4E00\u9898...",duration:3}),y()):(i({answer1:null}),n.error({message:"\u7B54\u6848\u9519\u8BEF",duration:3}))):e.quesDetail.type===3&&(e.quesDetail.rightAnswer,s().answer1.join(""),e.quesDetail.rightAnswer==s().answer1.join("")?(i({answer1:null}),f(),n.success({message:"\u7B54\u6848\u6B63\u786E \u7CFB\u7EDF\u5C06\u81EA\u52A8\u8DF3\u8F6C\u5230\u4E0B\u4E00\u9898...",duration:3}),y()):(i({answer1:null}),n.error({message:"\u7B54\u6848\u9519\u8BEF",duration:3})))},y=()=>{try{e.colList.some((u,t,B)=>{if(u.id==e.detailId)throw t+1>=B.length?(n.warning({message:"\u8FD9\u5DF2\u7ECF\u662F\u6700\u540E\u4E00\u9898\u4E86",duration:3}),"\u5FAA\u73AF\u7EC8\u6B62"):(e.detailId=B[t+1].id,I(e.detailId,_(B[t+1].type)),"\u5FAA\u73AF\u7EC8\u6B62")})}catch(u){}},Q=()=>{e.answerIf=!0},f=()=>{e.answerIf=!1};return{prefixCls:"list-card",list:ae,getCollections:h,registerTable:p,data:e,pagination:r,columns:L(),pageChange:N,createActions:M,questionDetail:v,exit:P,handleSubmit:K,register1:a,nextQues:y,lookAnswer:Q,closeAnswer:f}}}),Fe={class:"p-4"},fe={class:"m-15",style:{"font-size":"20px"}},we=z("\u9000\u51FA\u8BAD\u7EC3"),Ae=z("\u67E5\u770B\u7B54\u6848");function Ce(a,i){const s=A("TableAction"),E=A("BasicTable"),r=A("BasicForm"),p=A("a-button"),F=A("CollapseContainer");return Z(),x("div",null,[c(C("div",Fe,[d(E,{onRegister:a.registerTable,dataSource:a.data.colList,onChange:a.pageChange},{action:D(({record:g,column:o})=>[d(s,{actions:a.createActions(g,o)},null,8,["actions"])]),_:1},8,["onRegister","dataSource","onChange"])],512),[[m,!a.data.detail]]),c(d(F,{title:`\u9898\u76EEID\uFF1A${a.data.quesDetail.id}`},{default:D(()=>[C("div",fe,k(a.data.quesDetail.content),1),c(d(r,{onRegister:a.register1,onSubmit:a.handleSubmit,onReset:a.handleReset,schemas:a.data.schemas},null,8,["onRegister","onSubmit","onReset","schemas"]),[[m,a.data.detail]]),d(p,{onClick:a.exit,class:"m-5"},{default:D(()=>[we]),_:1},8,["onClick"]),d(p,{onClick:a.lookAnswer,class:"m-5"},{default:D(()=>[Ae]),_:1},8,["onClick"])]),_:1},8,["title"]),[[m,a.data.detail]]),c(d(F,{title:"\u9898\u76EE\u7B54\u6848",canExpan:!1},{default:D(()=>[c(C("h1",null,"\u7B54\u6848\uFF1A"+k(a.data.quesDetail.answer),513),[[m,a.data.quesDetail.answer]]),c(C("h1",null,"\u7B54\u6848\uFF1A"+k(a.data.quesDetail.rightAnswer),513),[[m,a.data.quesDetail.rightAnswer]]),c(C("h1",null,"\u7B54\u6848\u89E3\u6790\uFF1A"+k(a.data.quesDetail.analysis),513),[[m,a.data.quesDetail.analysis]])]),_:1},512),[[m,a.data.answerIf]])])}var ga=U(Be,[["render",Ce],["__scopeId","data-v-45672216"]]);export{ga as default};