import{a2 as e}from"./index.66dc6cca.js";function n(t){return e.get({url:"/exam/paper/get/"+t})}function s(t,r){return e.post({url:"/exam/solution/add/"+t,params:r})}function c(t,r){return e.get({url:"/exam/correct/list/"+t+"/"+r})}function o(t,r,a){return e.post({url:"/exam/correct/score/"+r+"/"+t,params:a})}function m(){return e.get({url:"/clazz/tea/list"})}function i(t){return e.get({url:"/clazz/my-exam/"+t})}function l(t){return e.get({url:"/clazz/stu-list/"+t})}export{l as G,m as a,i as b,c,o as d,n as g,s};