import{aM as p,aN as P,aO as _,a1 as l,aP as E,aQ as M,aR as y,aS as C,aT as I,aU as L}from"./index.976f028d.js";import{g as d}from"./get.177428c4.js";function D(n){return function(r){return r==null?void 0:r[n]}}var G=1,m=2;function w(n,r,e,t){var i=e.length,a=i,o=!t;if(n==null)return!a;for(n=Object(n);i--;){var f=e[i];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++i<a;){f=e[i];var u=f[0],s=n[u],A=f[1];if(o&&f[2]){if(s===void 0&&!(u in n))return!1}else{var R=new p;if(t)var O=t(s,A,u,n,r,R);if(!(O===void 0?P(A,s,G|m,t,R):O))return!1}}return!0}function g(n){return n===n&&!_(n)}function F(n){for(var r=l(n),e=r.length;e--;){var t=r[e],i=n[t];r[e]=[t,i,g(i)]}return r}function h(n,r){return function(e){return e==null?!1:e[n]===r&&(r!==void 0||n in Object(e))}}function S(n){var r=F(n);return r.length==1&&r[0][2]?h(r[0][0],r[0][1]):function(e){return e===n||w(e,n,r)}}var c=1,N=2;function T(n,r){return E(n)&&g(r)?h(M(n),r):function(e){var t=d(e,n);return t===void 0&&t===r?y(e,n):P(r,t,c|N)}}function U(n){return function(r){return C(r,n)}}function x(n){return E(n)?D(M(n)):U(n)}function b(n){return typeof n=="function"?n:n==null?I:typeof n=="object"?L(n)?T(n[0],n[1]):S(n):x(n)}export{b};
