(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(e,a,t){e.exports=t(344)},163:function(e,a,t){},164:function(e,a,t){},344:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(45),c=t.n(l),o=(t(163),t(9)),s=(t(164),t(16));var m=function(e){for(var a=e.from,t=e.to,n=e.steps,l=e.f,c=e.refs,o=void 0===c?[]:c,m=e.label,i=[],p=Math.floor(t/n),d=a;d<t;d+=p)i.push({x:(1e-6*d).toFixed(2),y:l(d)});return r.a.createElement(s.d,{width:500,height:300,data:i,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(s.a,{strokeDasharray:"3 3"}),r.a.createElement(s.g,{dataKey:"x"},r.a.createElement(s.b,{value:m,position:"insideBottom",offset:-5})),r.a.createElement(s.h,{dataKey:"y",label:{value:"Price",angle:-90,position:"insideLeft"}}),r.a.createElement(s.f,null),o.map(function(e){return r.a.createElement(s.e,Object.assign({},e,{stroke:"red"}))}),r.a.createElement(s.c,{dataKey:"y"}))};var i=function(e){var a=e.handler,t=e.name;return r.a.createElement("div",{class:"input-group mb-3"},r.a.createElement("div",{class:"input-group-prepend"},r.a.createElement("span",{class:"input-group-text"},t)),r.a.createElement("input",{type:"number",class:"form-control",placeholder:"Reserve",value:a[0],onChange:function(e){return a[1](e.target.value)}}))};var p=function(){var e=Object(n.useState)(4),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(35),s=Object(o.a)(c,2),p=s[0],d=s[1],u=Object(n.useState)(3e6),E=Object(o.a)(u,2),v=E[0],b=E[1],h=Object(n.useState)(.01),f=Object(o.a)(h,2),y=f[0],g=f[1],w=(1-p/100)*v,j=w/y,k=Math.pow(j,t)/w,N=Object(n.useState)(2),O=Object(o.a)(N,2),x=O[0],I=O[1],R=Object(n.useState)(25),S=Object(o.a)(R,2),A=S[0],M=S[1],F=function(e){return t*Math.pow(e,(t-1)/t)/Math.pow(k,1/t)},D=Object(n.useState)(135),B=Object(o.a)(D,2),P=B[0],K=B[1],J=parseInt(w)*parseFloat(A)/100,T=parseInt(w)*parseFloat(P)/100,W=F(w),_=F(T),C=F(T+J),G=(_+C)/2,L=parseInt(J/G),$=[["Initial reserve (xDAI)",w],["Initial Supply (tokens)",j],["Invariant coef",k]],q=[["p1",W],["p(R_start)",_],["p(R_start + dR)",C]],z=[["Dropping (Mil xDAI)",1e-6*J],["Average Price (xDAI / token)",G],["Getting (Mil tokens)",1e-6*L]];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{class:"container"},r.a.createElement("h1",null,"Token Bonding curve App"),r.a.createElement("div",{className:"row m"},[r.a.createElement(i,{name:"k",handler:[t,l]}),r.a.createElement(i,{name:"theta (%)",handler:[p,d]}),r.a.createElement(i,{name:"d0 (xDAI)",handler:[v,b]}),r.a.createElement(i,{name:"p0 (xDAI)",handler:[y,g]})].map(function(e){return r.a.createElement("div",{className:"col top-input"},e)})),r.a.createElement("div",{className:"row m"},r.a.createElement("div",{className:"col"},r.a.createElement("h6",null,"Initial data"),r.a.createElement("div",{className:"data-grid"},$.map(function(e){var a=Object(o.a)(e,2),t=a[0],n=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{key:t+1},t),r.a.createElement("span",{key:t+2},n.toFixed(3)))}))),r.a.createElement("div",{className:"col"},r.a.createElement("h6",null,"Price data"),r.a.createElement("div",{className:"data-grid"},q.map(function(e){var a=Object(o.a)(e,2),t=a[0],n=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{key:t+1},t),r.a.createElement("span",{key:t+2},n.toFixed(3)))}))),r.a.createElement("div",{className:"col"},r.a.createElement("h6",null,"Buy data"),r.a.createElement("div",{className:"data-grid"},z.map(function(e){var a=Object(o.a)(e,2),t=a[0],n=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{key:t+1},t),r.a.createElement("span",{key:t+2},n.toFixed(3)))})))),r.a.createElement("div",{className:"row m"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{class:"alert alert-secondary",role:"alert"},"Play around with the values below to simulate a buy"))),r.a.createElement("div",{className:"row m"},[r.a.createElement(i,{name:"Plot reserve times",handler:[x,I]}),r.a.createElement(i,{name:"R start (as % of R0)",handler:[P,K]}),r.a.createElement(i,{name:"delta R (as % of R0)",handler:[A,M]})].map(function(e){return r.a.createElement("div",{className:"col top-input big"},e)})),r.a.createElement("div",{className:"row m"},r.a.createElement("div",{className:"col c"},r.a.createElement(m,{label:"Reserve (R) [Mil xDAI]",from:0,to:x*w,steps:20,f:F,refs:[{y:y,label:"p0"},{y:W,label:"p1"},{y:_,label:"pStart"},{y:C,label:"pdR"}]})),r.a.createElement("div",{className:"col c"},r.a.createElement(m,{label:"Supply (R) [Mil Tokens]",from:0,to:Math.pow(x,1/t)*j,steps:20,f:function(e){return t*Math.pow(e,t-1)/k},refs:[{y:y,label:"p0"},{y:W,label:"p1"},{y:_,label:"pStart"},{y:C,label:"pdR"}]}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[158,1,2]]]);
//# sourceMappingURL=main.123a4399.chunk.js.map