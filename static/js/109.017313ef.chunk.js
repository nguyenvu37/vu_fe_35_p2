(this.webpackJsonpvu_fe_35_p2=this.webpackJsonpvu_fe_35_p2||[]).push([[109],{65:function(n,t,r){"use strict";r.r(t),r.d(t,"getSummary",(function(){return u})),r.d(t,"getTotal",(function(){return e})),r.d(t,"getPrice",(function(){return i})),r.d(t,"getQuantity",(function(){return o})),r.d(t,"getKeywordText",(function(){return c})),r.d(t,"getKeywordId",(function(){return f})),r.d(t,"formCurencyVN",(function(){return p}));var u=function(n){return n.map((function(n){return parseInt(n.quantity)*Math.floor(n.price*((100-n.discount)/100))})).reduce((function(n,t){return n+t}),0)},e=function(n,t){return Math.floor(n.price*((100-n.discount)/100))*parseInt(t)},i=function(n){return Math.floor(n.price*((100-n.discount)/100))},o=function(n){return n.map((function(n){return n.quantity})).reduce((function(n,t){return n+t}),0)},c=function(n){return n.toUpperCase().split(" ").filter((function(n){return""!==n})).join("")},f=function(n){return n.toUpperCase().split("-").filter((function(n){return"-"!==n})).join("")};function p(n){return n.toLocaleString("it-IT",{style:"currency",currency:"VND"})}}}]);
//# sourceMappingURL=109.017313ef.chunk.js.map