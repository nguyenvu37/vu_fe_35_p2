(this.webpackJsonpvu_fe_35_p2=this.webpackJsonpvu_fe_35_p2||[]).push([[48,52,78,79,80,81,85,101,102,108,111,115],{109:function(e,t,r){"use strict";r.r(t);var n=r(538),a=r.n(n),o=r(539),i=r(49),c=r(6),u=r(530),s=r(0),l=r.n(s),f=r(556),m=r(47),d=r.n(m),p=r(2),h=r(574),g=r(62),v=r(71),y=r(70);t.default=Object(p.i)((function(e){var t=Object(f.a)("translation").t,r=Object(s.useState)({fullname:{errorMessage:""},email:{errorMessage:""},phone:{errorMessage:""},address:{errorMessage:""}}),n=Object(u.a)(r,2),m=n[0],p=n[1],b=Object(s.useRef)(),E=Object(s.useRef)(),w=Object(s.useRef)(),O=Object(s.useRef)(),x=function(e){var t=e.target.name,r=Object(y.validateInput)(t,Object(y.getValueInput)(t,E,"","",O,"","",b,w)).errorMessage,n=Object(c.a)({},m[t]);n.errorMessage=r,p(Object(c.a)(Object(c.a)({},m),{},Object(i.a)({},t,n)))},j=function(){Object(g.default)("users?email=".concat(E.current.value),"get",null).then((function(e){return 0===e.data.length?(S(),!1):(d.a.warning("Warning message",t("register.email-exist")),!0)}))},S=function(){var t=Object(o.a)(a.a.mark((function t(){var r,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===localStorage.getItem("Token")){t.next=6;break}return r={id:Object(h.a)(),userId:JSON.parse(localStorage.getItem("Token")).id,fullname:b.current.value,email:E.current.value,address:w.current.value,phone:O.current.value},t.next=4,Object(g.default)("customers","post",Object(c.a)({},r)).then((function(t){localStorage.setItem("idCustomer",JSON.stringify(r.id)),e.history.push("/payment")}));case 4:t.next=10;break;case 6:n={id:Object(h.a)(),fullname:b.current.value,email:E.current.value,address:w.current.value,phone:O.current.value},localStorage.setItem("customers",JSON.stringify(Object(c.a)({},n))),localStorage.setItem("idCustomer",JSON.stringify(n.id)),e.history.push("/payment");case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(s.useEffect)((function(){null!==localStorage.getItem("Token")&&(b.current.value=JSON.parse(localStorage.getItem("Token")).firstName+" "+JSON.parse(localStorage.getItem("Token")).lastName,E.current.value=JSON.parse(localStorage.getItem("Token")).email,O.current.value=JSON.parse(localStorage.getItem("Token")).phone)}),[]);return l.a.createElement("section",null,l.a.createElement("div",{className:"information-checkout"},l.a.createElement("div",{className:"box"},l.a.createElement("div",{className:"information-checkout__content"},l.a.createElement("div",{className:"information-checkout__content__title title-content"},l.a.createElement("h1",null,t("information.title"))),l.a.createElement("div",{className:"information-checkout__content__form form"},l.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault();var r=b.current.value,n=w.current.value,a=E.current.value,o=O.current.value;""!==r&&""!==n&&""!==a&&""!==o?null===localStorage.getItem("Token")?j():S():d.a.warning("Warning message",t("register.require"))}(e)}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,t("information.label1")," ",l.a.createElement("span",null,"*")),null!==localStorage.getItem("Token")?l.a.createElement("input",{id:"infor-receiver",name:"fullname",type:"text",ref:b,onKeyUp:x,readOnly:!0}):l.a.createElement("input",{id:"infor-receiver",name:"fullname",type:"text",ref:b,onKeyUp:x}),l.a.createElement("i",{className:"fas fa-check-circle"}),l.a.createElement("i",{className:"fas fa-exclamation-circle"}),l.a.createElement(v.default,{errorMessage:m.fullname.errorMessage})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,t("information.label2")," ",l.a.createElement("span",null,"*")),l.a.createElement("input",{id:"infor-address",name:"address",type:"text",ref:w,onKeyUp:x}),l.a.createElement("i",{className:"fas fa-check-circle"}),l.a.createElement("i",{className:"fas fa-exclamation-circle"}),l.a.createElement(v.default,{errorMessage:m.address.errorMessage})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,t("information.label3")," ",l.a.createElement("span",null,"*")),null!==localStorage.getItem("Token")?l.a.createElement("input",{id:"infor-email",name:"email",type:"text",ref:E,onKeyUp:x,readOnly:!0}):l.a.createElement("input",{id:"infor-email",name:"email",type:"text",ref:E,onKeyUp:x}),l.a.createElement("i",{className:"fas fa-check-circle"}),l.a.createElement("i",{className:"fas fa-exclamation-circle"}),l.a.createElement(v.default,{errorMessage:m.email.errorMessage})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,t("information.label4")," ",l.a.createElement("span",null,"*")),null!==localStorage.getItem("Token")?l.a.createElement("input",{id:"infor-phone",name:"phone",type:"telephone",ref:O,onKeyUp:x,readOnly:!0}):l.a.createElement("input",{id:"infor-phone",name:"phone",type:"telephone",ref:O,onKeyUp:x}),l.a.createElement("i",{className:"fas fa-check-circle"}),l.a.createElement("i",{className:"fas fa-exclamation-circle"}),l.a.createElement(v.default,{errorMessage:m.phone.errorMessage})),l.a.createElement("div",{className:"information-checkout__form__btn btn-form"},l.a.createElement("button",{type:"button",onClick:function(){e.history.push("/cart")}},l.a.createElement("i",{className:"fas fa-hand-point-left"}),t("information.btn-back")),l.a.createElement("button",{type:"submit"},t("information.btn-goon")))))))))}))},124:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(556),i=r(109);t.default=function(){var e=Object(o.a)("translation").t;return a.a.createElement("main",null,a.a.createElement("section",null,a.a.createElement("div",{className:"box"},a.a.createElement("div",{className:"process"},a.a.createElement("div",{className:"progressbar"},a.a.createElement("div",{className:"page-information"},a.a.createElement("span",null,"Step 2: ",e("process.step2")))))),a.a.createElement(i.default,null)))}},530:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(46);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){a=!0,o=u}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},532:function(e,t,r){var n=r(533),a=r(534),o=r(535),i=r(537);e.exports=function(e,t){return n(e)||a(e,t)||o(e,t)||i()}},533:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},534:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){a=!0,o=u}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}},535:function(e,t,r){var n=r(536);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},536:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},537:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},538:function(e,t,r){e.exports=r(541)},539:function(e,t,r){"use strict";function n(e,t,r,n,a,o,i){try{var c=e[o](i),u=c.value}catch(s){return void r(s)}c.done?t(u):Promise.resolve(u).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var i=e.apply(t,r);function c(e){n(i,a,o,c,u,"next",e)}function u(e){n(i,a,o,c,u,"throw",e)}c(void 0)}))}}r.d(t,"a",(function(){return a}))},541:function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(N){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new x(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(N){return{type:"throw",arg:N}}}e.wrap=u;var l={};function f(){}function m(){}function d(){}var p={};p[a]=function(){return this};var h=Object.getPrototypeOf,g=h&&h(h(j([])));g&&g!==t&&r.call(g,a)&&(p=g);var v=d.prototype=f.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var u=s(e[a],e,o);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"===typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(f).then((function(e){l.value=e,i(l)}),(function(e){return n("throw",e,i,c)}))}c(u.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,l;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return m.prototype=v.constructor=d,d.constructor=m,m.displayName=c(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,c(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(b.prototype),b.prototype[o]=function(){return this},e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new b(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(v),c(v,i,"Generator"),v[a]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},556:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var n=r(532),a=r.n(n),o=r(45),i=r.n(o),c=r(0),u=r(66);function s(){if(console&&console.warn){for(var e,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];"string"===typeof r[0]&&(r[0]="react-i18next:: ".concat(r[0])),(e=console).warn.apply(e,r)}}var l={};function f(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];"string"===typeof t[0]&&l[t[0]]||("string"===typeof t[0]&&(l[t[0]]=new Date),s.apply(void 0,t))}function m(e,t,r){e.loadNamespaces(t,(function(){if(e.isInitialized)r();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),r()}))}}))}function d(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return f("i18n.languages were undefined or empty",t.languages),!0;var n=t.languages[0],a=!!t.options&&t.options.fallbackLng,o=t.languages[t.languages.length-1];if("cimode"===n.toLowerCase())return!0;var i=function(e,r){var n=t.services.backendConnector.state["".concat(e,"|").concat(r)];return-1===n||2===n};return!(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!i(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(n,e)||(!t.services.backendConnector.backend||!(!i(n,e)||a&&!i(o,e))))}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.i18n,n=Object(c.useContext)(u.a)||{},o=n.i18n,i=n.defaultNS,s=r||o||Object(u.d)();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new u.b),!s){f("You will need to pass in an i18next instance by using initReactI18next");var l=function(e){return Array.isArray(e)?e[e.length-1]:e},p=[l,{},!1];return p.t=l,p.i18n={},p.ready=!1,p}var g=h(h(h({},Object(u.c)()),s.options.react),t),v=g.useSuspense,y=e||i||s.options&&s.options.defaultNS;y="string"===typeof y?[y]:y||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(y);var b=(s.isInitialized||s.initializedStoreOnce)&&y.every((function(e){return d(e,s,g)}));function E(){return{t:s.getFixedT(null,"fallback"===g.nsMode?y:y[0])}}var w=Object(c.useState)(E()),O=a()(w,2),x=O[0],j=O[1],S=Object(c.useRef)(!0);Object(c.useEffect)((function(){var e=g.bindI18n,t=g.bindI18nStore;function r(){S.current&&j(E())}return S.current=!0,b||v||m(s,y,(function(){S.current&&j(E())})),e&&s&&s.on(e,r),t&&s&&s.store.on(t,r),function(){S.current=!1,e&&s&&e.split(" ").forEach((function(e){return s.off(e,r)})),t&&s&&t.split(" ").forEach((function(e){return s.store.off(e,r)}))}}),[y.join()]);var N=[x.t,s,b];if(N.t=x.t,N.i18n=s,N.ready=b,b)return N;if(!b&&!v)return N;throw new Promise((function(e){m(s,y,(function(){e()}))}))}},574:function(e,t,r){"use strict";var n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),a=new Uint8Array(16);function o(){if(!n)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(a)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var c=function(e){return"string"===typeof e&&i.test(e)},u=[],s=0;s<256;++s)u.push((s+256).toString(16).substr(1));var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]).toLowerCase();if(!c(r))throw TypeError("Stringified UUID is invalid");return r};t.a=function(e,t,r){var n=(e=e||{}).random||(e.rng||o)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var a=0;a<16;++a)t[r+a]=n[a];return t}return l(n)}},62:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return i}));var n=r(555),a=r.n(n),o=r(64);function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",r=arguments.length>2?arguments[2]:void 0;return a()({method:t,url:"".concat(o.host,"/").concat(e),data:r}).catch((function(e){alert("Error: ERR_CONNECTION_REFUSED Please: Reload Page"),console.log(e.config)}))}},64:function(e,t,r){"use strict";r.r(t),r.d(t,"host",(function(){return n}));var n="https://data-mandala.herokuapp.com"},68:function(e,t,r){"use strict";r.r(t),r.d(t,"email",(function(){return n})),r.d(t,"firstname",(function(){return a})),r.d(t,"lastname",(function(){return o})),r.d(t,"phone",(function(){return i})),r.d(t,"password",(function(){return c})),r.d(t,"fullname",(function(){return u})),r.d(t,"address",(function(){return s}));var n=/\S+@\S+\.\S+/,a=/^[a-zA-Z]+$/,o=/^[a-zA-Z]+$/,i=/^\d{10}$/,c=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,u=/^[a-zA-Z ]+$/,s=/^[a-zA-Z0-9\s,-]*$/},70:function(e,t,r){"use strict";r.r(t),r.d(t,"validateInput",(function(){return o})),r.d(t,"getValueInput",(function(){return i})),r.d(t,"getTranslationCategory",(function(){return c}));var n=r(36),a=r(68),o=function(e,t,r){return""===t?{errorMessage:n.a.t("validate.require")}:"email"===e?null!==a.email.exec(t)?{errorMessage:""}:{errorMessage:n.a.t("validate.email")}:"firstname"===e?null!==a.firstname.exec(t)?{errorMessage:""}:{errorMessage:n.a.t("validate.firstname")}:"lastname"===e?null!==a.lastname.exec(t)?{errorMessage:""}:{errorMessage:n.a.t("validate.lastname")}:"phone"===e?null!==a.phone.exec(t)?{errorMessage:""}:{errorMessage:n.a.t("validate.phone")}:"password"===e?null!==a.password.exec(t)?{errorMessage:""}:{errorMessage:n.a.t("validate.password")}:"confirmPass"===e?t===r?{errorMessage:""}:{errorMessage:n.a.t("validate.confirm")}:"fullname"===e?null!==a.fullname.exec(t)?{errorMessage:""}:{errorMessage:n.a.t("validate.fullname")}:"address"===e?null!==a.address.exec(t)?{errorMessage:""}:{errorMessage:n.a.t("validate.address")}:void 0},i=function(e,t,r,n,a,o,i,c,u){switch(e){case"email":return t.current.value;case"firstname":return r.current.value;case"lastname":return n.current.value;case"phone":return a.current.value;case"password":return o.current.value;case"confirmPass":return i.current.value;case"fullname":return c.current.value;case"address":return u.current.value}},c=function(e){switch(e){case"cosmetic":return n.a.t("grid.category1");case"makeup":return n.a.t("grid.category2");case"perfume":return n.a.t("grid.category3");case"lotions":return n.a.t("grid.menu1_1");case"mask":return n.a.t("grid.menu1_2");case"cleanser":return n.a.t("grid.menu1_3");case"lipstick":return n.a.t("grid.menu2_1");case"mascara":return n.a.t("grid.menu2_2");case"blusher":return n.a.t("grid.menu2_3");default:return e}}},71:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n);t.default=function(e){return a.a.createElement("div",{className:"text-left text-danger font-italic"},e.errorMessage)}}}]);
//# sourceMappingURL=48.cecdd379.chunk.js.map