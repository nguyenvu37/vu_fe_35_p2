(this.webpackJsonpvu_fe_35_p2=this.webpackJsonpvu_fe_35_p2||[]).push([[39,6,7,8,55,78,79,80,81,101,115,124],{118:function(t,e,r){"use strict";r.r(e);var n=r(6),a=r(538),o=r.n(a),c=r(7),i=r(539),u=r(530),s=r(0),f=r.n(s),l=r(649),d=r(556),p=r(47),h=r.n(p),y=r(43),v=r(62),g=r(2),b=r(63),m=r(44);e.default=Object(g.i)((function(t){var e=Object(d.a)("translation").t,r=Object(s.useState)("1234"),a=Object(u.a)(r,2),p=a[0],g=a[1],O=Object(s.useState)("04/28"),j=Object(u.a)(O,2),x=j[0],w=j[1],E=Object(s.useState)(""),S=Object(u.a)(E,2),I=S[0],F=S[1],N=Object(s.useState)("NGUYEN ANH VU"),k=Object(u.a)(N,2),C=k[0],A=k[1],T=Object(s.useState)("4231412342345234"),L=Object(u.a)(T,2),R=L[0],_=L[1],D=JSON.parse(localStorage.getItem("order"))||{},P=Object(s.useState)([]),U=Object(u.a)(P,2),q=U[0],G=U[1],H=Object(m.b)();Object(s.useEffect)((function(){null!==localStorage.getItem("order")&&function(){var t=Object(i.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(v.default)("order","get",null).then((function(t){t&&200===t.status&&t.data?G(Object(c.a)(t.data)):G([])}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[]);var J=function(){var r=Object(i.a)(o.a.mark((function r(a){var c,i,u,s,f,l,d,p,y,g,m,O;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a.preventDefault(),null===localStorage.getItem("Token")){r.next=26;break}if(!(q.length>0)){r.next=18;break}if(c=q.filter((function(t){return t.userId===D.userId})),i=D.data,!(c.length>0)){r.next=11;break}return r.next=8,i.forEach((function(t){var e=c[0].data.findIndex((function(e){return e.code===t.code}));if(-1!==e)c[0].data[e]=Object(n.a)(Object(n.a)({},c[0].data[e]),{},{quantity:c[0].data[e].quantity+t.quantity});else{var r=Object(n.a)(Object(n.a)({},t),{},{status:"paid"});c[0].data.unshift(Object(n.a)({},r))}}));case 8:Object(v.default)("order/".concat(c[0].id),"put",Object(n.a)({},c[0])).then((function(){Object(v.default)("carts/".concat(JSON.parse(localStorage.getItem("Token")).id),"delete",null).then((function(r){localStorage.removeItem("idCustomer"),localStorage.removeItem("order"),h.a.success(e("pay-success.title")),t.history.push("/")}))})),r.next=16;break;case 11:return u=[],r.next=14,D.data.forEach((function(t){var e=Object(n.a)(Object(n.a)({},t),{},{status:"paid"});u.push(Object(n.a)({},e))}));case 14:s=Object(n.a)(Object(n.a)({},D),{},{data:[].concat(u)}),Object(v.default)("order","post",Object(n.a)({},s)).then((function(){Object(v.default)("carts/".concat(JSON.parse(localStorage.getItem("Token")).id),"delete",null).then((function(){localStorage.removeItem("idCustomer"),localStorage.removeItem("order"),h.a.success(e("pay-success.title")),t.history.push("/")}))}));case 16:r.next=24;break;case 18:return f=[],r.next=21,D.data.forEach((function(t){var e=Object(n.a)(Object(n.a)({},t),{},{status:"paid"});f.push(Object(n.a)({},e))}));case 21:return l=Object(n.a)(Object(n.a)({},D),{},{data:[].concat(f)}),r.next=24,Object(v.default)("order","post",Object(n.a)({},l)).then((function(){Object(v.default)("carts/".concat(JSON.parse(localStorage.getItem("Token")).id),"delete",null).then((function(){localStorage.removeItem("idCustomer"),localStorage.removeItem("order"),h.a.success(e("pay-success.title")),t.history.push("/")}))}));case 24:r.next=47;break;case 26:if(!(q.length>0)){r.next=42;break}if(d=q.filter((function(t){return t.userId===D.userId})),p=D.data,!(d.length>0)){r.next=35;break}return r.next=32,p.forEach((function(t){var e=d[0].data.findIndex((function(e){return e.code===t.code}));if(-1!==e)d[0].data[e]=Object(n.a)(Object(n.a)({},d[0].data[e]),{},{quantity:d[0].data[e].quantity+t.quantity});else{var r=Object(n.a)(Object(n.a)({},t),{},{status:"paid"});d[0].data.unshift(Object(n.a)({},r))}}));case 32:Object(v.default)("order/".concat(d[0].id),"put",Object(n.a)({},d[0])).then((function(){localStorage.clear(),h.a.success(e("pay-success.title")),t.history.push("/"),H(Object(b.actAddCart)([]))})),r.next=40;break;case 35:return y=[],r.next=38,D.data.forEach((function(t){var e=Object(n.a)(Object(n.a)({},t),{},{status:"paid"});y.push(Object(n.a)({},e))}));case 38:g=Object(n.a)(Object(n.a)({},D),{},{data:[].concat(y)}),Object(v.default)("order","post",Object(n.a)({},g)).then((function(r){localStorage.clear(),h.a.success(e("pay-success.title")),t.history.push("/"),H(Object(b.actAddCart)([]))}));case 40:r.next=47;break;case 42:return m=[],r.next=45,D.data.forEach((function(t){var e=Object(n.a)(Object(n.a)({},t),{},{status:"paid"});m.push(Object(n.a)({},e))}));case 45:O=Object(n.a)(Object(n.a)({},D),{},{data:[].concat(m)}),Object(v.default)("order","post",Object(n.a)({},O)).then((function(r){localStorage.clear(),h.a.success("Success message",e("pay-success.title")),t.history.push("/"),H(Object(b.actAddCart)([]))}));case 47:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}();return f.a.createElement("main",null,null!==localStorage.getItem("order")?f.a.createElement("div",{className:"box",style:{margin:"50px auto",display:"flex",alignItems:"center",width:"50%",height:"470px"}},f.a.createElement(l.a,{cvc:p,expiry:x,focused:I,name:C,number:R}),f.a.createElement("form",{className:"card-credit",onSubmit:function(t){return J(t)}},f.a.createElement("input",{type:"tel",name:"number",placeholder:"Card Number",value:R,onChange:function(t){return _(t.target.value)},onFocus:function(t){return F(t.target.name)}}),f.a.createElement("input",{type:"text",name:"name",placeholder:"Name",value:C,onChange:function(t){return A(t.target.value)},onFocus:function(t){return F(t.target.name)}}),f.a.createElement("input",{type:"text",name:"expiry",placeholder:"MM/YY Expiry",value:x,onChange:function(t){return w(t.target.value)},onFocus:function(t){return F(t.target.name)}}),f.a.createElement("input",{type:"tel",name:"cvc",placeholder:"CVC",value:p,onChange:function(t){return g(t.target.value)},onFocus:function(t){return F(t.target.name)}}),f.a.createElement("button",{className:"myButton"},"Pay"))):f.a.createElement("div",{className:"box",style:{height:"500px",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},f.a.createElement("h4",null,e("nothing-info")),f.a.createElement(y.b,{className:"buy",to:"/cart"},e("cart-now"))))}))},530:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(46);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!e||r.length!==e);n=!0);}catch(u){a=!0,o=u}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},531:function(t,e,r){var n=r(540);t.exports=function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},532:function(t,e,r){var n=r(533),a=r(534),o=r(535),c=r(537);t.exports=function(t,e){return n(t)||a(t,e)||o(t,e)||c()}},533:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},534:function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!e||r.length!==e);n=!0);}catch(u){a=!0,o=u}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}}},535:function(t,e,r){var n=r(536);t.exports=function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},536:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},537:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},538:function(t,e,r){t.exports=r(541)},539:function(t,e,r){"use strict";function n(t,e,r,n,a,o,c){try{var i=t[o](c),u=i.value}catch(s){return void r(s)}i.done?e(u):Promise.resolve(u).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var c=t.apply(e,r);function i(t){n(c,a,o,i,u,"next",t)}function u(t){n(c,a,o,i,u,"throw",t)}i(void 0)}))}}r.d(e,"a",(function(){return a}))},540:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},541:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function i(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(I){i=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof l?e:l,o=Object.create(a.prototype),c=new w(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=O(c,r);if(i){if(i===f)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,c),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(I){return{type:"throw",arg:I}}}t.wrap=u;var f={};function l(){}function d(){}function p(){}var h={};h[a]=function(){return this};var y=Object.getPrototypeOf,v=y&&y(y(E([])));v&&v!==e&&r.call(v,a)&&(h=v);var g=p.prototype=l.prototype=Object.create(h);function b(t){["next","throw","return"].forEach((function(e){i(t,e,(function(t){return this._invoke(e,t)}))}))}function m(t,e){var n;this._invoke=function(a,o){function c(){return new e((function(n,c){!function n(a,o,c,i){var u=s(t[a],t,o);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"===typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,c,i)}),(function(t){n("throw",t,c,i)})):e.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return n("throw",t,c,i)}))}i(u.arg)}(a,o,n,c)}))}return n=n?n.then(c,c):c()}}function O(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function E(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=g.constructor=p,p.constructor=d,d.displayName=i(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,i(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(m.prototype),m.prototype[o]=function(){return this},t.AsyncIterator=m,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var c=new m(u(e,r,n,a),o);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},b(g),i(g,c,"Generator"),g[a]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,w.prototype={constructor:w,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(i&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},542:function(t,e,r){"use strict";var n=r(544),a=r(545),o=r(543),c=r(552),i=r(553),u=r(554);function s(t){if("string"!==typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function f(t,e){return e.encode?e.strict?c(t):encodeURIComponent(t):t}function l(t,e){return e.decode?i(t):t}function d(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function p(t){var e=(t=d(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function h(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"===typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function y(t,e){s((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var r=function(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return function(t,r,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return function(e,r,n){var a="string"===typeof r&&r.split("").indexOf(t.arrayFormatSeparator)>-1?r.split(t.arrayFormatSeparator).map((function(e){return l(e,t)})):null===r?r:l(r,t);n[e]=a};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),o=Object.create(null);if("string"!==typeof t)return o;if(!(t=t.trim().replace(/^[?#&]/,"")))return o;var c,i=a(t.split("&"));try{for(i.s();!(c=i.n()).done;){var f=c.value,d=u(e.decode?f.replace(/\+/g," "):f,"="),p=n(d,2),y=p[0],v=p[1];v=void 0===v?null:["comma","separator"].includes(e.arrayFormat)?v:l(v,e),r(l(y,e),v,o)}}catch(E){i.e(E)}finally{i.f()}for(var g=0,b=Object.keys(o);g<b.length;g++){var m=b[g],O=o[m];if("object"===typeof O&&null!==O)for(var j=0,x=Object.keys(O);j<x.length;j++){var w=x[j];O[w]=h(O[w],e)}else o[m]=h(O,e)}return!1===e.sort?o:(!0===e.sort?Object.keys(o).sort():Object.keys(o).sort(e.sort)).reduce((function(t,e){var r=o[e];return Boolean(r)&&"object"===typeof r&&!Array.isArray(r)?t[e]=function t(e){return Array.isArray(e)?e.sort():"object"===typeof e?t(Object.keys(e)).sort((function(t,e){return Number(t)-Number(e)})).map((function(t){return e[t]})):e}(r):t[e]=r,t}),Object.create(null))}e.extract=p,e.parse=y,e.stringify=function(t,e){if(!t)return"";s((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var r=function(r){return e.skipNull&&(null===(n=t[r])||void 0===n)||e.skipEmptyString&&""===t[r];var n},n=function(t){switch(t.arrayFormat){case"index":return function(e){return function(r,n){var a=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[f(e,t),"[",a,"]"].join("")]:[[f(e,t),"[",f(a,t),"]=",f(n,t)].join("")])}};case"bracket":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[f(e,t),"[]"].join("")]:[[f(e,t),"[]=",f(n,t)].join("")])}};case"comma":case"separator":return function(e){return function(r,n){return null===n||void 0===n||0===n.length?r:0===r.length?[[f(e,t),"=",f(n,t)].join("")]:[[r,f(n,t)].join(t.arrayFormatSeparator)]}};default:return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[f(e,t)]:[[f(e,t),"=",f(n,t)].join("")])}}}}(e),a={},c=0,i=Object.keys(t);c<i.length;c++){var u=i[c];r(u)||(a[u]=t[u])}var l=Object.keys(a);return!1!==e.sort&&l.sort(e.sort),l.map((function(r){var a=t[r];return void 0===a?"":null===a?f(r,e):Array.isArray(a)?a.reduce(n(r),[]).join("&"):f(r,e)+"="+f(a,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){e=Object.assign({decode:!0},e);var r=u(t,"#"),a=n(r,2),o=a[0],c=a[1];return Object.assign({url:o.split("?")[0]||"",query:y(p(t),e)},e&&e.parseFragmentIdentifier&&c?{fragmentIdentifier:l(c,e)}:{})},e.stringifyUrl=function(t,r){r=Object.assign({encode:!0,strict:!0},r);var n=d(t.url).split("?")[0]||"",a=e.extract(t.url),o=e.parse(a,{sort:!1}),c=Object.assign(o,t.query),i=e.stringify(c,r);i&&(i="?".concat(i));var u=function(t){var e="",r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(t.url);return t.fragmentIdentifier&&(u="#".concat(f(t.fragmentIdentifier,r))),"".concat(n).concat(i).concat(u)}},543:function(t,e,r){var n=r(549),a=r(550),o=r(531),c=r(551);t.exports=function(t){return n(t)||a(t)||o(t)||c()}},544:function(t,e,r){var n=r(546),a=r(547),o=r(531),c=r(548);t.exports=function(t,e){return n(t)||a(t,e)||o(t,e)||c()}},545:function(t,e,r){var n=r(531);t.exports=function(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=n(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,c=!0,i=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return c=t.done,t},e:function(t){i=!0,o=t},f:function(){try{c||null==a.return||a.return()}finally{if(i)throw o}}}}},546:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},547:function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!e||r.length!==e);n=!0);}catch(u){a=!0,o=u}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}}},548:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},549:function(t,e,r){var n=r(540);t.exports=function(t){if(Array.isArray(t))return n(t)}},550:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},551:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},552:function(t,e,r){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},553:function(t,e,r){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),a=new RegExp("(%[a-f0-9]{2})+","gi");function o(t,e){try{return decodeURIComponent(t.join(""))}catch(a){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],o(r),o(n))}function c(t){try{return decodeURIComponent(t)}catch(a){for(var e=t.match(n),r=1;r<e.length;r++)e=(t=o(e,r).join("")).match(n);return t}}t.exports=function(t){if("string"!==typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var r={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},n=a.exec(t);n;){try{r[n[0]]=decodeURIComponent(n[0])}catch(e){var o=c(n[0]);o!==n[0]&&(r[n[0]]=o)}n=a.exec(t)}r["%C2"]="\ufffd";for(var i=Object.keys(r),u=0;u<i.length;u++){var s=i[u];t=t.replace(new RegExp(s,"g"),r[s])}return t}(t)}}},554:function(t,e,r){"use strict";t.exports=function(t,e){if("string"!==typeof t||"string"!==typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},556:function(t,e,r){"use strict";r.d(e,"a",(function(){return v}));var n=r(532),a=r.n(n),o=r(45),c=r.n(o),i=r(0),u=r(66);function s(){if(console&&console.warn){for(var t,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];"string"===typeof r[0]&&(r[0]="react-i18next:: ".concat(r[0])),(t=console).warn.apply(t,r)}}var f={};function l(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];"string"===typeof e[0]&&f[e[0]]||("string"===typeof e[0]&&(f[e[0]]=new Date),s.apply(void 0,e))}function d(t,e,r){t.loadNamespaces(e,(function(){if(t.isInitialized)r();else{t.on("initialized",(function e(){setTimeout((function(){t.off("initialized",e)}),0),r()}))}}))}function p(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e.languages||!e.languages.length)return l("i18n.languages were undefined or empty",e.languages),!0;var n=e.languages[0],a=!!e.options&&e.options.fallbackLng,o=e.languages[e.languages.length-1];if("cimode"===n.toLowerCase())return!0;var c=function(t,r){var n=e.services.backendConnector.state["".concat(t,"|").concat(r)];return-1===n||2===n};return!(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!c(e.isLanguageChangingTo,t))&&(!!e.hasResourceBundle(n,t)||(!e.services.backendConnector.backend||!(!c(n,t)||a&&!c(o,t))))}function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){c()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.i18n,n=Object(i.useContext)(u.a)||{},o=n.i18n,c=n.defaultNS,s=r||o||Object(u.d)();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new u.b),!s){l("You will need to pass in an i18next instance by using initReactI18next");var f=function(t){return Array.isArray(t)?t[t.length-1]:t},h=[f,{},!1];return h.t=f,h.i18n={},h.ready=!1,h}var v=y(y(y({},Object(u.c)()),s.options.react),e),g=v.useSuspense,b=t||c||s.options&&s.options.defaultNS;b="string"===typeof b?[b]:b||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(b);var m=(s.isInitialized||s.initializedStoreOnce)&&b.every((function(t){return p(t,s,v)}));function O(){return{t:s.getFixedT(null,"fallback"===v.nsMode?b:b[0])}}var j=Object(i.useState)(O()),x=a()(j,2),w=x[0],E=x[1],S=Object(i.useRef)(!0);Object(i.useEffect)((function(){var t=v.bindI18n,e=v.bindI18nStore;function r(){S.current&&E(O())}return S.current=!0,m||g||d(s,b,(function(){S.current&&E(O())})),t&&s&&s.on(t,r),e&&s&&s.store.on(e,r),function(){S.current=!1,t&&s&&t.split(" ").forEach((function(t){return s.off(t,r)})),e&&s&&e.split(" ").forEach((function(t){return s.store.off(t,r)}))}}),[b.join()]);var I=[w.t,s,m];if(I.t=w.t,I.i18n=s,I.ready=m,m)return I;if(!m&&!g)return I;throw new Promise((function(t){d(s,b,(function(){t()}))}))}},62:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return c}));var n=r(555),a=r.n(n),o=r(64);function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",r=arguments.length>2?arguments[2]:void 0;return a()({method:e,url:"".concat(o.host,"/").concat(t),data:r}).catch((function(t){alert("Error: ERR_CONNECTION_REFUSED Please: Reload Page"),console.log(t.config)}))}},63:function(t,e,r){"use strict";r.r(e),r.d(e,"actFetchDataHotTrendRequest",(function(){return u})),r.d(e,"actFetchDataHotTrend",(function(){return s})),r.d(e,"actFetchDataNewRequest",(function(){return f})),r.d(e,"actFetchDataNew",(function(){return l})),r.d(e,"actFetchDataDetailRequest",(function(){return d})),r.d(e,"actFetchDataDetail",(function(){return p})),r.d(e,"actFetchProductRequest",(function(){return h})),r.d(e,"actFetchProduct",(function(){return y})),r.d(e,"actFetchTotalRowsRequest",(function(){return v})),r.d(e,"actFetchTotalRows",(function(){return g})),r.d(e,"actFetchFilters",(function(){return b})),r.d(e,"actFetchFilterTotalRow",(function(){return m})),r.d(e,"actLogin",(function(){return O})),r.d(e,"actLogout",(function(){return j})),r.d(e,"actDelCart",(function(){return x})),r.d(e,"actNumCart",(function(){return w})),r.d(e,"actAddCart",(function(){return E}));var n=r(7),a=r(4),o=r(542),c=r.n(o),i=r(62),u=function(t){var e=c.a.stringify(t);return function(t){return Object(i.default)("products?".concat(e),"get",null).then((function(e){e&&e.data&&200===e.status?t(s(Object(n.a)(e.data))):t(s([]))}))}},s=function(t){return{type:a.FETCH_DATAHOTTREND,payload:t}},f=function(t){var e=c.a.stringify(t);return function(t){return Object(i.default)("products?".concat(e),"get",null).then((function(e){e&&e.data&&200===e.status?t(l(Object(n.a)(e.data))):t(l([]))}))}},l=function(t){return{type:a.FETCH_DATANEW,payload:t}},d=function(t){return function(e){return Object(i.default)("products?id=".concat(t),"get",null).then((function(t){t&&t.data&&200===t.status?e(p(Object(n.a)(t.data))):e(p([]))}))}},p=function(t){return{type:a.FETCH_DATADETAIL,payload:t}},h=function(t){var e=c.a.stringify(t);return function(r){return Object(i.default)("products?".concat(e),"get",null).then((function(e){e&&e.data&&200===e.status?(r(y(Object(n.a)(e.data))),r(b(t))):r(y([]))}))}},y=function(t){return{type:a.FETCH_PRODUCT,payload:t}},v=function(t){var e=c.a.stringify(t);return function(r){return Object(i.default)("products?".concat(e),"get",null).then((function(e){e&&e.data&&200===e.status?(r(g(Object(n.a)(e.data))),r(m(t))):(r(g([])),r(m({})))}))}},g=function(t){return{type:a.FETCH_TOTALROW,payload:t}},b=function(t){return{type:a.FETCH_FILTERS,payload:t}},m=function(t){return{type:a.FETCH_FILTERTOTALROW,payload:t}},O=function(){return{type:a.LOGIN}},j=function(){return{type:a.LOGOUT}},x=function(t){return{type:a.DEL_CART,payload:t}},w=function(t){return{type:a.NUM_CART,payload:t}},E=function(t){return{type:a.CALL_CART,payload:t}}},64:function(t,e,r){"use strict";r.r(e),r.d(e,"host",(function(){return n}));var n="https://data-mandala.herokuapp.com"}}]);
//# sourceMappingURL=39.935c2183.chunk.js.map