import{P as h}from"./index.9126614a.js";import{av as A,a as I,cD as E,s as a,r as y,E as s,o as n,j as B,y as u,n as r,m as i,h as c,k as l,t as F}from"./index.976f028d.js";import{a as D,C as k}from"./index.9c12cd98.js";import{u as w}from"./upload.7d768fee.js";import{h as P}from"./header.d801b988.js";import"./index.2440c5f5.js";import"./index.b556a78a.js";import"./useSize.a0f971b4.js";import"./eagerComputed.b4caa6b1.js";import"./useWindowSizeFn.43b44744.js";import"./useContentViewHeight.fa21b489.js";import"./ArrowLeftOutlined.6cbdd482.js";import"./index.d76d5ff0.js";import"./transButton.a71e0ac3.js";import"./index.8e4fa7db.js";import"./useFlexGapSupport.4b430c1e.js";import"./index.354b005f.js";import"./_baseIteratee.6f2aea4e.js";import"./get.177428c4.js";import"./DeleteOutlined.b2cc13f1.js";import"./index.04eaadeb.js";import"./useRefs.78498e36.js";import"./Form.50c6b0cf.js";import"./Col.dd538940.js";import"./index.448301d3.js";import"./FullscreenOutlined.31e68573.js";import"./base64Conver.08b9f4ec.js";const $=I({components:{PageWrapper:h,CropperImage:D,CollapseContainer:E,CropperAvatar:k},setup(){var t;const e=a(""),m=a(""),d=a(""),C=a(""),v=y(),g=a(((t=v.getUserInfo)==null?void 0:t.avatar)||"");function _({imgBase64:p,imgInfo:f}){e.value=f,m.value=p}function o({imgBase64:p,imgInfo:f}){d.value=f,C.value=p}return{img:P,info:e,circleInfo:d,cropperImg:m,circleImg:C,handleCropend:_,handleCircleCropend:o,avatar:g,uploadApi:w}}}),N={class:"container p-4"},S={class:"cropper-container mr-10"},V=["src"],W={key:0},U={class:"container p-4"},j={class:"cropper-container mr-10"},b=["src"],q={key:0};function z(e,m,d,C,v,g){const _=s("CropperAvatar"),o=s("CollapseContainer"),t=s("CropperImage"),p=s("PageWrapper");return n(),B(p,{title:"\u56FE\u7247\u88C1\u526A\u793A\u4F8B",content:"\u9700\u8981\u5F00\u542F\u6D4B\u8BD5\u63A5\u53E3\u670D\u52A1\u624D\u80FD\u8FDB\u884C\u4E0A\u4F20\u6D4B\u8BD5\uFF01"},{default:u(()=>[r(o,{title:"\u5934\u50CF\u88C1\u526A"},{default:u(()=>[r(_,{uploadApi:e.uploadApi,value:e.avatar},null,8,["uploadApi","value"])]),_:1}),r(o,{title:"\u77E9\u5F62\u88C1\u526A",class:"my-4"},{default:u(()=>[i("div",N,[i("div",S,[r(t,{ref:"refCropper",src:e.img,onCropend:e.handleCropend,style:{width:"40vw"}},null,8,["src","onCropend"])]),e.cropperImg?(n(),c("img",{key:0,src:e.cropperImg,class:"croppered",alt:""},null,8,V)):l("",!0)]),e.cropperImg?(n(),c("p",W,"\u88C1\u526A\u540E\u56FE\u7247\u4FE1\u606F\uFF1A"+F(e.info),1)):l("",!0)]),_:1}),r(o,{title:"\u5706\u5F62\u88C1\u526A"},{default:u(()=>[i("div",U,[i("div",j,[r(t,{ref:"refCropper",src:e.img,onCropend:e.handleCircleCropend,style:{width:"40vw"},circled:""},null,8,["src","onCropend"])]),e.circleImg?(n(),c("img",{key:0,src:e.circleImg,class:"croppered"},null,8,b)):l("",!0)]),e.circleImg?(n(),c("p",q,"\u88C1\u526A\u540E\u56FE\u7247\u4FE1\u606F\uFF1A"+F(e.circleInfo),1)):l("",!0)]),_:1})]),_:1})}var de=A($,[["render",z],["__scopeId","data-v-9d983438"]]);export{de as default};
