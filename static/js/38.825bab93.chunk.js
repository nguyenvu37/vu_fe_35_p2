(this.webpackJsonpvu_fe_35_p2=this.webpackJsonpvu_fe_35_p2||[]).push([[38,55,81,101,115,336,338,339],{107:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(581),a=n.n(i),u=n(171),c=n.n(u),s=n(172),l=n.n(s),f=n(173),p=n.n(f),d=n(556),y=n(44),m=n(63),v=n(2);e.default=Object(v.i)((function(t){var e=Object(d.a)("translation").t,n=Object(y.b)(),r=Object(y.b)(),i=[{title:e("banner.titleBanner1"),button:e("banner.shopNow"),image:c.a,color:"#789629",ml:"150px",manufacturer:"green"},{title:e("banner.titleBanner2"),button:e("shopNow"),image:l.a,color:"#fff",left:"15%",top:"-15%",manufacturer:"enesti"},{title:e("banner.titleBanner3"),button:e("banner.shopNow"),image:p.a,color:"#fff",left:"27%",top:"-30%",manufacturer:"laneige"}];return o.a.createElement(a.a,{autoplay:4e3},i.map((function(e,i){return o.a.createElement("div",{key:i,style:{background:"url(".concat(e.image,") no-repeat center center")}},o.a.createElement("div",{className:"overlay"},o.a.createElement("div",{className:"box"},o.a.createElement("div",{className:"center",style:{marginLeft:"".concat(e.left),marginTop:"".concat(e.top)}},o.a.createElement("h1",{style:{color:"".concat(e.color)}},e.title),o.a.createElement("button",{style:{marginLeft:"".concat(e.ml)},onClick:function(){return o=e.manufacturer,n(Object(m.actFetchProductRequest)({_limit:6,_page:1,manufacturer:o})),r(Object(m.actFetchTotalRowsRequest)({manufacturer:o})),void t.history.push("/list");var o}},e.button)))))})))}))},171:function(t,e,n){t.exports=n.p+"static/media/background.fa285191.jpg"},172:function(t,e,n){t.exports=n.p+"static/media/background2.d7b9fa72.jpg"},173:function(t,e,n){t.exports=n.p+"static/media/background3.49970c2e.jpeg"},531:function(t,e,n){var r=n(540);t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},532:function(t,e,n){var r=n(533),o=n(534),i=n(535),a=n(537);t.exports=function(t,e){return r(t)||o(t,e)||i(t,e)||a()}},533:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},534:function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}},535:function(t,e,n){var r=n(536);t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},536:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},537:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},540:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},542:function(t,e,n){"use strict";var r=n(544),o=n(545),i=n(543),a=n(552),u=n(553),c=n(554);function s(t){if("string"!==typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(t,e){return e.encode?e.strict?a(t):encodeURIComponent(t):t}function f(t,e){return e.decode?u(t):t}function p(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function d(t){var e=(t=p(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function y(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"===typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function m(t,e){s((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var n=function(t){var e;switch(t.arrayFormat){case"index":return function(t,n,r){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===r[t]&&(r[t]={}),r[t][e[1]]=n):r[t]=n};case"bracket":return function(t,n,r){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==r[t]?r[t]=[].concat(r[t],n):r[t]=[n]:r[t]=n};case"comma":case"separator":return function(e,n,r){var o="string"===typeof n&&n.split("").indexOf(t.arrayFormatSeparator)>-1?n.split(t.arrayFormatSeparator).map((function(e){return f(e,t)})):null===n?n:f(n,t);r[e]=o};default:return function(t,e,n){void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=e}}}(e),i=Object.create(null);if("string"!==typeof t)return i;if(!(t=t.trim().replace(/^[?#&]/,"")))return i;var a,u=o(t.split("&"));try{for(u.s();!(a=u.n()).done;){var l=a.value,p=c(e.decode?l.replace(/\+/g," "):l,"="),d=r(p,2),m=d[0],v=d[1];v=void 0===v?null:["comma","separator"].includes(e.arrayFormat)?v:f(v,e),n(f(m,e),v,i)}}catch(w){u.e(w)}finally{u.f()}for(var b=0,g=Object.keys(i);b<g.length;b++){var h=g[b],O=i[h];if("object"===typeof O&&null!==O)for(var E=0,x=Object.keys(O);E<x.length;E++){var j=x[E];O[j]=y(O[j],e)}else i[h]=y(O,e)}return!1===e.sort?i:(!0===e.sort?Object.keys(i).sort():Object.keys(i).sort(e.sort)).reduce((function(t,e){var n=i[e];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?t[e]=function t(e){return Array.isArray(e)?e.sort():"object"===typeof e?t(Object.keys(e)).sort((function(t,e){return Number(t)-Number(e)})).map((function(t){return e[t]})):e}(n):t[e]=n,t}),Object.create(null))}e.extract=d,e.parse=m,e.stringify=function(t,e){if(!t)return"";s((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var n=function(n){return e.skipNull&&(null===(r=t[n])||void 0===r)||e.skipEmptyString&&""===t[n];var r},r=function(t){switch(t.arrayFormat){case"index":return function(e){return function(n,r){var o=n.length;return void 0===r||t.skipNull&&null===r||t.skipEmptyString&&""===r?n:[].concat(i(n),null===r?[[l(e,t),"[",o,"]"].join("")]:[[l(e,t),"[",l(o,t),"]=",l(r,t)].join("")])}};case"bracket":return function(e){return function(n,r){return void 0===r||t.skipNull&&null===r||t.skipEmptyString&&""===r?n:[].concat(i(n),null===r?[[l(e,t),"[]"].join("")]:[[l(e,t),"[]=",l(r,t)].join("")])}};case"comma":case"separator":return function(e){return function(n,r){return null===r||void 0===r||0===r.length?n:0===n.length?[[l(e,t),"=",l(r,t)].join("")]:[[n,l(r,t)].join(t.arrayFormatSeparator)]}};default:return function(e){return function(n,r){return void 0===r||t.skipNull&&null===r||t.skipEmptyString&&""===r?n:[].concat(i(n),null===r?[l(e,t)]:[[l(e,t),"=",l(r,t)].join("")])}}}}(e),o={},a=0,u=Object.keys(t);a<u.length;a++){var c=u[a];n(c)||(o[c]=t[c])}var f=Object.keys(o);return!1!==e.sort&&f.sort(e.sort),f.map((function(n){var o=t[n];return void 0===o?"":null===o?l(n,e):Array.isArray(o)?o.reduce(r(n),[]).join("&"):l(n,e)+"="+l(o,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){e=Object.assign({decode:!0},e);var n=c(t,"#"),o=r(n,2),i=o[0],a=o[1];return Object.assign({url:i.split("?")[0]||"",query:m(d(t),e)},e&&e.parseFragmentIdentifier&&a?{fragmentIdentifier:f(a,e)}:{})},e.stringifyUrl=function(t,n){n=Object.assign({encode:!0,strict:!0},n);var r=p(t.url).split("?")[0]||"",o=e.extract(t.url),i=e.parse(o,{sort:!1}),a=Object.assign(i,t.query),u=e.stringify(a,n);u&&(u="?".concat(u));var c=function(t){var e="",n=t.indexOf("#");return-1!==n&&(e=t.slice(n)),e}(t.url);return t.fragmentIdentifier&&(c="#".concat(l(t.fragmentIdentifier,n))),"".concat(r).concat(u).concat(c)}},543:function(t,e,n){var r=n(549),o=n(550),i=n(531),a=n(551);t.exports=function(t){return r(t)||o(t)||i(t)||a()}},544:function(t,e,n){var r=n(546),o=n(547),i=n(531),a=n(548);t.exports=function(t,e){return r(t)||o(t,e)||i(t,e)||a()}},545:function(t,e,n){var r=n(531);t.exports=function(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=r(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i,a=!0,u=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==o.return||o.return()}finally{if(u)throw i}}}}},546:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},547:function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}},548:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},549:function(t,e,n){var r=n(540);t.exports=function(t){if(Array.isArray(t))return r(t)}},550:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},551:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},552:function(t,e,n){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},553:function(t,e,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function i(t,e){try{return decodeURIComponent(t.join(""))}catch(o){}if(1===t.length)return t;e=e||1;var n=t.slice(0,e),r=t.slice(e);return Array.prototype.concat.call([],i(n),i(r))}function a(t){try{return decodeURIComponent(t)}catch(o){for(var e=t.match(r),n=1;n<e.length;n++)e=(t=i(e,n).join("")).match(r);return t}}t.exports=function(t){if("string"!==typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var n={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},r=o.exec(t);r;){try{n[r[0]]=decodeURIComponent(r[0])}catch(e){var i=a(r[0]);i!==r[0]&&(n[r[0]]=i)}r=o.exec(t)}n["%C2"]="\ufffd";for(var u=Object.keys(n),c=0;c<u.length;c++){var s=u[c];t=t.replace(new RegExp(s,"g"),n[s])}return t}(t)}}},554:function(t,e,n){"use strict";t.exports=function(t,e){if("string"!==typeof t||"string"!==typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var n=t.indexOf(e);return-1===n?[t]:[t.slice(0,n),t.slice(n+e.length)]}},556:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var r=n(532),o=n.n(r),i=n(45),a=n.n(i),u=n(0),c=n(66);function s(){if(console&&console.warn){for(var t,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(t=console).warn.apply(t,n)}}var l={};function f(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];"string"===typeof e[0]&&l[e[0]]||("string"===typeof e[0]&&(l[e[0]]=new Date),s.apply(void 0,e))}function p(t,e,n){t.loadNamespaces(e,(function(){if(t.isInitialized)n();else{t.on("initialized",(function e(){setTimeout((function(){t.off("initialized",e)}),0),n()}))}}))}function d(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e.languages||!e.languages.length)return f("i18n.languages were undefined or empty",e.languages),!0;var r=e.languages[0],o=!!e.options&&e.options.fallbackLng,i=e.languages[e.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(t,n){var r=e.services.backendConnector.state["".concat(t,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!a(e.isLanguageChangingTo,t))&&(!!e.hasResourceBundle(r,t)||(!e.services.backendConnector.backend||!(!a(r,t)||o&&!a(i,t))))}function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.i18n,r=Object(u.useContext)(c.a)||{},i=r.i18n,a=r.defaultNS,s=n||i||Object(c.d)();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new c.b),!s){f("You will need to pass in an i18next instance by using initReactI18next");var l=function(t){return Array.isArray(t)?t[t.length-1]:t},y=[l,{},!1];return y.t=l,y.i18n={},y.ready=!1,y}var v=m(m(m({},Object(c.c)()),s.options.react),e),b=v.useSuspense,g=t||a||s.options&&s.options.defaultNS;g="string"===typeof g?[g]:g||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(g);var h=(s.isInitialized||s.initializedStoreOnce)&&g.every((function(t){return d(t,s,v)}));function O(){return{t:s.getFixedT(null,"fallback"===v.nsMode?g:g[0])}}var E=Object(u.useState)(O()),x=o()(E,2),j=x[0],w=x[1],S=Object(u.useRef)(!0);Object(u.useEffect)((function(){var t=v.bindI18n,e=v.bindI18nStore;function n(){S.current&&w(O())}return S.current=!0,h||b||p(s,g,(function(){S.current&&w(O())})),t&&s&&s.on(t,n),e&&s&&s.store.on(e,n),function(){S.current=!1,t&&s&&t.split(" ").forEach((function(t){return s.off(t,n)})),e&&s&&e.split(" ").forEach((function(t){return s.store.off(t,n)}))}}),[g.join()]);var P=[j.t,s,h];if(P.t=j.t,P.i18n=s,P.ready=h,h)return P;if(!h&&!b)return P;throw new Promise((function(t){p(s,g,(function(){t()}))}))}},581:function(t,e,n){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=n(0)},function(t,e,n){"use strict";n.r(e),n.d(e,"HORIZONTAL",(function(){return m})),n.d(e,"VERTICAL",(function(){return v}));var r=n(0),o=n.n(r);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d="previous",y="next",m="horizontal",v="vertical",b={previousButton:"previousButton",nextButton:"nextButton",buttonDisabled:"disabled",track:"track",slide:"slide",hidden:"hidden",previous:"previous",current:"current",next:"next",animateIn:"animateIn",animateOut:"animateOut"},g={up:"rotate(90 10 15)",down:"rotate(270 10 15)",left:"rotate(180 10 15)",right:"rotate(0 10 15)"};function h(t){var e=t.direction,n=void 0===e?"right":e;return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"30",viewBox:"0 0 20 30"},o.a.createElement("polygon",{fill:"#000",points:"20 15 4.228 0 0 3.626 11.954 15 0 26.374 4.228 30",transform:g[n]}))}var O=function(t){function e(t){var n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=s(e).call(this,t),n=!r||"object"!==i(r)&&"function"!=typeof r?l(this):r,p(l(n),"setupAutoplay",(function(){n.props.autoplay&&!n.isMouseOver&&(n.stopAutoplay(),n.autoplayTimerId=setInterval(n.next,parseInt(n.props.autoplay,10)))})),p(l(n),"stopAutoplay",(function(){n.autoplayTimerId&&clearInterval(n.autoplayTimerId)})),p(l(n),"onAnimationEnd",(function(){n.setState({currentSlideIndex:n.nextSlideIndex,animating:!1,animation:void 0}),n.setupAutoplay(),"function"==typeof n.props.onSlideChange&&n.props.onSlideChange({slideIndex:n.nextSlideIndex})})),p(l(n),"isDisabled",(function(){return n.slideCount<2||n.state.animating||n.props.disabled})),p(l(n),"isInfinite",(function(){return n.slideCount>2&&!1!==n.props.infinite})),p(l(n),"canGoPrevious",(function(){return n.isInfinite()||n.state.currentSlideIndex>0})),p(l(n),"canGoNext",(function(){return n.isInfinite()||n.state.currentSlideIndex<n.slideCount-1})),p(l(n),"goTo",(function(t,e){if(!n.isDisabled()){n.nextSlideIndex=t,n.setState({animating:!0,animation:e});var r=n.props.duration||2e3;n.animationTimerId=setTimeout(n.onAnimationEnd,r)}})),p(l(n),"previous",(function(){if(n.canGoPrevious()){var t=n.state.currentSlideIndex-1,e=t>=0?t:n.slideCount-1;n.goTo(e,d)}})),p(l(n),"next",(function(){if(n.canGoNext()){var t=(n.state.currentSlideIndex+1)%n.slideCount;n.goTo(t,y)}})),p(l(n),"getSlideClass",(function(t){var e=n.state,r=e.currentSlideIndex,o=e.animation,i=n.getClassNames(),a=n.slideCount-1;return t===r?o?"".concat(i.animateOut," ").concat(i[o]):i.current:2===n.slideCount?o?"".concat(i.animateIn," ").concat(i[o]):t<r?i.previous:i.next:t===r-1||0===r&&t===a?o===d?"".concat(i.animateIn," ").concat(i.previous):o===y?i.hidden:i.previous:t===r+1||0===t&&r===a?o===y?"".concat(i.animateIn," ").concat(i.next):o===d?i.hidden:i.next:i.hidden})),p(l(n),"isSwiping",!1),p(l(n),"sliderRef",void 0),p(l(n),"pageStartPosition",void 0),p(l(n),"currentElement",void 0),p(l(n),"currentElementStartPosition",void 0),p(l(n),"currentElementPosition",void 0),p(l(n),"previousElement",void 0),p(l(n),"previousElementStartPosition",void 0),p(l(n),"previousElementPosition",void 0),p(l(n),"nextElement",void 0),p(l(n),"nextElementStartPosition",void 0),p(l(n),"nextElementPosition",void 0),p(l(n),"handleTouchStart",(function(t){if(!n.isDisabled()){n.stopAutoplay();var e=n.getClassNames(),r=e.current,o=e.previous,i=e.next,a=t.touches[0];n.isSwiping=!0,n.pageStartPosition=a[n.swipeEventProperty],n.currentElement=n.sliderRef.getElementsByClassName(r)[0],n.previousElement=n.sliderRef.getElementsByClassName(o)[0],n.nextElement=n.sliderRef.getElementsByClassName(i)[0];var u=n.currentElement.getBoundingClientRect()[n.swipeProperty];n.currentElementStartPosition=0,n.currentElementPosition=0,n.currentElement.style.transition="none",n.previousElement&&(n.previousElement.style.transition="none",n.previousElement.style.visibility="visible",n.previousElementStartPosition=n.previousElement.getBoundingClientRect()[n.swipeProperty]-u),n.nextElement&&(n.nextElement.style.visibility="visible",n.nextElement.style.transition="none",n.nextElementStartPosition=n.nextElement.getBoundingClientRect()[n.swipeProperty]-u)}})),p(l(n),"animating",!1),p(l(n),"handleTouchMove",(function(t){t.preventDefault(),n.animating=n.animating||requestAnimationFrame((function(){if(n.isSwiping){var e=t.touches[0][n.swipeEventProperty]-n.pageStartPosition;n.currentElementPosition=n.currentElementStartPosition+e,n.currentElement.style[n.swipeProperty]="".concat(n.currentElementPosition,"px"),n.previousElement&&(n.previousElementPosition=n.previousElementStartPosition+e,n.previousElement.style[n.swipeProperty]="".concat(n.previousElementPosition,"px")),n.nextElement&&(n.nextElementPosition=n.nextElementStartPosition+e,n.nextElement.style[n.swipeProperty]="".concat(n.nextElementPosition,"px")),n.animating=!1}else n.animating=!1}))})),p(l(n),"handleTouchEnd",(function(){n.animating=!1,n.isSwiping=!1,n.currentElement.style.removeProperty(n.swipeProperty),n.currentElement.style.removeProperty("transition"),n.previousElement&&(n.previousElement.style.removeProperty("visibility"),n.previousElement.style.removeProperty("transition"),n.previousElement.style.removeProperty(n.swipeProperty)),n.nextElement&&(n.nextElement.style.removeProperty("visibility"),n.nextElement.style.removeProperty("transition"),n.nextElement.style.removeProperty(n.swipeProperty));var t=n.currentElementStartPosition-n.currentElementPosition,e=n.props.minSwipeOffset||15;Math.abs(t)>e?t<0?n.previous():n.next():n.setupAutoplay()})),p(l(n),"getClassNames",(function(){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},b,{},n.props.classNames)})),p(l(n),"initTouchEvents",(function(t){!n.isDisabled()&&t&&(n.sliderRef=t,n.sliderRef.addEventListener("touchstart",n.handleTouchStart),n.sliderRef.addEventListener("touchmove",n.handleTouchMove,{passive:!1}),n.sliderRef.addEventListener("touchend",n.handleTouchEnd))})),p(l(n),"handleMouseOver",(function(){n.isMouseOver=!0,n.stopAutoplay()})),p(l(n),"handleMouseOut",(function(){n.isMouseOver=!1,n.setupAutoplay()}));var o=n.props,a=o.slideIndex,c=void 0===a?0:a,f=o.direction,v=void 0===f?m:f;return n.state={currentSlideIndex:c,animating:!1},n.direction=v,n.swipeProperty=v===m?"left":"top",n.swipeEventProperty=v===m?"clientX":"clientY",n}var n,r,v;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,t),n=e,v=[{key:"getDerivedStateFromProps",value:function(t,e){var n=o.a.Children.count(t.children);return e.currentSlideIndex>=n?{currentSlideIndex:0}:null}}],(r=[{key:"componentDidMount",value:function(){this.setupAutoplay()}},{key:"componentWillUnmount",value:function(){this.stopAutoplay(),this.animationTimerId&&clearTimeout(this.animationTimerId)}},{key:"render",value:function(){var t=this;this.slideCount=o.a.Children.count(this.props.children);var e=this.props,n=e.children,r=e.className,i=void 0===r?"slider":r,u=e.previousButton,c=void 0===u?o.a.createElement(h,{direction:this.direction===m?"left":"down"}):u,s=e.nextButton,l=void 0===s?o.a.createElement(h,{direction:this.direction===m?"right":"up"}):s,f=e.touchDisabled,p=e.autoplay,d=this.getClassNames(),y=this.isDisabled();return o.a.createElement("div",a({className:d.slider||i},!f&&{ref:this.initTouchEvents},p&&{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut}),o.a.createElement("a",{onClick:this.previous,className:"".concat(d.previousButton).concat(y||!this.canGoPrevious()?" ".concat(d.buttonDisabled):"")},c),o.a.createElement("a",{onClick:this.next,className:"".concat(d.nextButton).concat(y||!this.canGoNext()?" ".concat(d.buttonDisabled):"")},l),o.a.createElement("div",{className:d.track},o.a.Children.map(n,(function(e,n){return o.a.cloneElement(e,{key:n,className:[d.slide,t.getSlideClass(n),e.props.className].filter((function(t){return t})).join(" ")})}))))}}])&&c(n.prototype,r),v&&c(n,v),e}(o.a.PureComponent);e.default=O}])},62:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));var r=n(555),o=n.n(r),i=n(64);function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",n=arguments.length>2?arguments[2]:void 0;return o()({method:e,url:"".concat(i.host,"/").concat(t),data:n}).catch((function(t){alert("Error: ERR_CONNECTION_REFUSED Please: Reload Page"),console.log(t.config)}))}},63:function(t,e,n){"use strict";n.r(e),n.d(e,"actFetchDataHotTrendRequest",(function(){return c})),n.d(e,"actFetchDataHotTrend",(function(){return s})),n.d(e,"actFetchDataNewRequest",(function(){return l})),n.d(e,"actFetchDataNew",(function(){return f})),n.d(e,"actFetchDataDetailRequest",(function(){return p})),n.d(e,"actFetchDataDetail",(function(){return d})),n.d(e,"actFetchProductRequest",(function(){return y})),n.d(e,"actFetchProduct",(function(){return m})),n.d(e,"actFetchTotalRowsRequest",(function(){return v})),n.d(e,"actFetchTotalRows",(function(){return b})),n.d(e,"actFetchFilters",(function(){return g})),n.d(e,"actFetchFilterTotalRow",(function(){return h})),n.d(e,"actLogin",(function(){return O})),n.d(e,"actLogout",(function(){return E})),n.d(e,"actDelCart",(function(){return x})),n.d(e,"actNumCart",(function(){return j})),n.d(e,"actAddCart",(function(){return w}));var r=n(7),o=n(4),i=n(542),a=n.n(i),u=n(62),c=function(t){var e=a.a.stringify(t);return function(t){return Object(u.default)("products?".concat(e),"get",null).then((function(e){e&&e.data&&200===e.status?t(s(Object(r.a)(e.data))):t(s([]))}))}},s=function(t){return{type:o.FETCH_DATAHOTTREND,payload:t}},l=function(t){var e=a.a.stringify(t);return function(t){return Object(u.default)("products?".concat(e),"get",null).then((function(e){e&&e.data&&200===e.status?t(f(Object(r.a)(e.data))):t(f([]))}))}},f=function(t){return{type:o.FETCH_DATANEW,payload:t}},p=function(t){return function(e){return Object(u.default)("products?id=".concat(t),"get",null).then((function(t){t&&t.data&&200===t.status?e(d(Object(r.a)(t.data))):e(d([]))}))}},d=function(t){return{type:o.FETCH_DATADETAIL,payload:t}},y=function(t){var e=a.a.stringify(t);return function(n){return Object(u.default)("products?".concat(e),"get",null).then((function(e){e&&e.data&&200===e.status?(n(m(Object(r.a)(e.data))),n(g(t))):n(m([]))}))}},m=function(t){return{type:o.FETCH_PRODUCT,payload:t}},v=function(t){var e=a.a.stringify(t);return function(n){return Object(u.default)("products?".concat(e),"get",null).then((function(e){e&&e.data&&200===e.status?(n(b(Object(r.a)(e.data))),n(h(t))):(n(b([])),n(h({})))}))}},b=function(t){return{type:o.FETCH_TOTALROW,payload:t}},g=function(t){return{type:o.FETCH_FILTERS,payload:t}},h=function(t){return{type:o.FETCH_FILTERTOTALROW,payload:t}},O=function(){return{type:o.LOGIN}},E=function(){return{type:o.LOGOUT}},x=function(t){return{type:o.DEL_CART,payload:t}},j=function(t){return{type:o.NUM_CART,payload:t}},w=function(t){return{type:o.CALL_CART,payload:t}}},64:function(t,e,n){"use strict";n.r(e),n.d(e,"host",(function(){return r}));var r="https://data-mandala.herokuapp.com"}}]);
//# sourceMappingURL=38.825bab93.chunk.js.map