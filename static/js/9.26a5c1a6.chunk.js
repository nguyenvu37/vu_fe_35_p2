(this.webpackJsonpvu_fe_35_p2=this.webpackJsonpvu_fe_35_p2||[]).push([[9,102,109,111,113,114],{100:function(e,t,a){"use strict";a.r(t);var n=a(538),r=a.n(n),c=a(6),i=a(7),s=a(539),l=a(530),u=a(0),o=a.n(u),f=a(556),d=a(44),m=a(63),p=a(62),b=a(84),g=a(85),O=a(70);t.default=function(){var e=Object(f.a)("translation").t,t=Object(u.useState)([]),n=Object(l.a)(t,2),_=n[0],j=n[1],v=Object(d.b)(),h=Object(d.b)();Object(u.useEffect)((function(){(function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.default)("categories","get",null).then((function(e){if(e&&200===e.status&&e.data){var t=Object(i.a)(e.data).map((function(e){return Object(c.a)(Object(c.a)({},e),{},{classSpecies:!1})}));j(Object(i.a)(t))}else j([])}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return o.a.createElement("aside",null,o.a.createElement("div",{className:"categories"},o.a.createElement("div",{className:"categories__content"},o.a.createElement("div",{className:"categories__content__title border-solid"},o.a.createElement("i",{className:"fas fa-bars"}),o.a.createElement("h1",null,e("grid.title"))),_.length>0?_.map((function(e,t){return o.a.createElement("div",{className:"categories__content__cosmetics border-solid",key:t+1},o.a.createElement("h2",{style:{cursor:"pointer"},onClick:function(){return function(e){var t=[];_.forEach((function(a){a.species!==e?(a=Object(c.a)(Object(c.a)({},a),{},{classSpecies:!1}),t.push(a)):(a=Object(c.a)(Object(c.a)({},a),{},{classSpecies:!0}),t.push(a))})),j([].concat(t)),v(Object(m.actFetchProductRequest)({_page:1,_limit:6,species:e})),h(Object(m.actFetchTotalRowsRequest)({species:e}))}(e.species)}},Object(O.getTranslationCategory)(e.species),e.classSpecies?o.a.createElement("i",{className:"fas fa-caret-down"}):o.a.createElement("i",{className:"fas fa-caret-right"})),o.a.createElement("ul",{className:e.classSpecies?"block":"disable"},e.category.map((function(e,t){return o.a.createElement("li",{key:t+1,style:{cursor:"pointer"},onClick:function(){return t=e,v(Object(m.actFetchProductRequest)({_page:1,_limit:6,category:t})),void h(Object(m.actFetchTotalRowsRequest)({category:t}));var t}},Object(O.getTranslationCategory)(e))}))))})):"")),o.a.createElement(b.default,null),o.a.createElement(g.default,null),o.a.createElement("div",{className:"categories__img"},o.a.createElement("img",{src:a(170),alt:""})))}},132:function(e,t,a){"use strict";a.r(t);var n=a(538),r=a.n(n),c=a(6),i=a(539),s=a(0),l=a.n(s),u=a(67),o=a(62),f=a(2),d=a(73),m=a(44),p=a(63),b=a(77),g=a(556);t.default=Object(f.i)((function(e){var t=Object(g.a)("translation").t,n=e.data,f=Object(m.c)((function(e){return e.totalRow})),O=Object(m.c)((function(e){return e.filters.filters})),_=Object(s.useRef)(""),j=Object(m.b)();return 0!==n.length?l.a.createElement("article",null,l.a.createElement("div",{className:"grid__content"},l.a.createElement("div",{className:"grid__content__pagination"},l.a.createElement("div",{className:"pagination"},l.a.createElement(b.default,null),l.a.createElement("div",{className:"results__topbar__sort"},l.a.createElement("div",{className:"results__topbar__sort__selector"},l.a.createElement("select",{className:"sort__by__selector",ref:_,onChange:function(){return function(){var e="",t="";switch(_.current.value){case"price asc":e="asc";break;case"price desc":e="desc";break;default:e=""}t=""!==e?"price":"",j(Object(p.actFetchProductRequest)(Object(c.a)(Object(c.a)({},O),{},{_sort:t,_order:e})))}()}},l.a.createElement("option",{value:"featured"},"Featured"),l.a.createElement("option",{value:"price asc"},"Price asc."),l.a.createElement("option",{value:"price desc"},"Price desc.")))))),l.a.createElement("div",{className:"grid__content__product"},n.map((function(t,s){return l.a.createElement("div",{className:"grid__content__product__item grid-product1",key:s+1,style:{position:"relative"}},l.a.createElement("img",{src:a(557)("./".concat(t.img)),alt:""}),l.a.createElement("div",{className:"grid__content__product__item__info detail-content"},l.a.createElement("h4",null,t.manufacturer),l.a.createElement("button",{onClick:function(){return a=t.id,function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.findIndex((function(e){return e.id===a})),e.next=3,Object(o.default)("products/".concat(a),"put",Object(c.a)(Object(c.a)({},n[t]),{},{view:n[t].view+1}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),void e.history.push("/detail/".concat(a));var a},style:{border:"0",backgroundColor:"#fff",cursor:"pointer",fontSize:"14px",outline:"none",height:"70px",padding:"0 5px",width:"100%"}},t.name),l.a.createElement("span",{className:"price"},Math.floor(t.price*((100-t.discount)/100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),l.a.createElement("small",null,"\u0111")),l.a.createElement("span",{className:"price old",style:{textDecoration:"line-through"}},t.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),l.a.createElement("small",null,"\u0111"))),l.a.createElement("div",{className:"discount-item",style:{position:"absolute",top:"5px",right:"0",fontFamily:"Timenewroman",fontSize:"13px",fontWeight:"700",background:"red",padding:"5px 20px",color:"#fff",boxShadow:"3px 3px 5px 0px rgba(0,0,0,0.75)"}},t.discount,"%"),l.a.createElement("div",{className:"grid__content__product__item__icon"},l.a.createElement(u.default,{rate:t.rating,data:t})))}))),l.a.createElement("div",{className:"grid__content__pagination"},l.a.createElement("div",{className:"pagination"},l.a.createElement(b.default,null),l.a.createElement("div",{className:"pagination__num",style:{flex:3,display:"flex"}},l.a.createElement(d.default,{totalRows:f})))))):l.a.createElement("article",null,l.a.createElement("div",{className:"waiting",style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}},l.a.createElement("h3",{style:{color:"#333",textTransform:"uppercase"}},t("no-product"))))}))},142:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(530),c=a(0),i=a.n(c),s=a(44),l=a(100),u=a(132);t.default=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],o=t[1],f=Object(s.c)((function(e){return e.products.products}));return Object(c.useEffect)((function(){window.scrollTo(0,0),f.length>0?o(Object(n.a)(f)):o([])}),[f]),i.a.createElement("main",null,i.a.createElement("section",null,i.a.createElement("div",{className:"box"},i.a.createElement("div",{className:"grid"},i.a.createElement(l.default,null),i.a.createElement(u.default,{data:a})))))}},65:function(e,t,a){"use strict";a.r(t),a.d(t,"getSummary",(function(){return n})),a.d(t,"getTotal",(function(){return r})),a.d(t,"getPrice",(function(){return c})),a.d(t,"getQuantity",(function(){return i})),a.d(t,"getKeywordText",(function(){return s})),a.d(t,"getKeywordId",(function(){return l})),a.d(t,"formCurencyVN",(function(){return u}));var n=function(e){return e.map((function(e){return parseInt(e.quantity)*Math.floor(e.price*((100-e.discount)/100))})).reduce((function(e,t){return e+t}),0)},r=function(e,t){return Math.floor(e.price*((100-e.discount)/100))*parseInt(t)},c=function(e){return Math.floor(e.price*((100-e.discount)/100))},i=function(e){return e.map((function(e){return e.quantity})).reduce((function(e,t){return e+t}),0)},s=function(e){return e.toUpperCase().split(" ").filter((function(e){return""!==e})).join("")},l=function(e){return e.toUpperCase().split("-").filter((function(e){return"-"!==e})).join("")};function u(e){return e.toLocaleString("it-IT",{style:"currency",currency:"VND"})}},67:function(e,t,a){"use strict";a.r(t);var n=a(538),r=a.n(n),c=a(7),i=a(539),s=a(6),l=a(530),u=a(0),o=a.n(u),f=a(556),d=a(567),m=a.n(d),p=a(62),b=a(574),g=a(44),O=a(47),_=a.n(O),j=a(63),v=a(65),h=a(565);t.default=function(e){var t=Object(f.a)("translation").t,a=Object(u.useState)(e.rate),n=Object(l.a)(a,2),d=n[0],O=n[1],E=Object(u.useState)(!1),y=Object(l.a)(E,2),N=y[0],k=y[1],x=Object(g.c)((function(e){return e.users.loggedIn})),w=e.quanDetail,S=Object(g.c)((function(e){return e.addCart})),C=Object(g.b)(),R=Object(g.b)(),q=function(){var a=Object(i.a)(r.a.mark((function a(){var n,i,l,u,o;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n=e.data,i={id:Object(b.a)(),code:n.id,name:n.name,img:n.img,price:n.price,discount:n.discount,quantity:void 0!==w?parseInt(w):1,status:"unpaid"},_.a.success(t("inCart.success")),!x&&null===localStorage.getItem("Token")){a.next=8;break}return a.next=6,Object(p.default)("carts?userId=".concat(JSON.parse(localStorage.getItem("Token")).id),"get",null).then((function(e){if(e&&200===e.status){var t=Object(c.a)(e.data);if(t.length>0){var a=t[0].data;if(a.length>0){var r=a.findIndex((function(e){return e.code===n.id}));if(-1!==r){a[r]=Object(s.a)(Object(s.a)({},a[r]),{},{quantity:void 0!==w?parseInt(w):a[r].quantity+1});var l=Object(s.a)(Object(s.a)({},t[0]),{},{data:Object(c.a)(a)});Object(p.default)("carts/".concat(JSON.parse(localStorage.getItem("Token")).id),"put",Object(s.a)({},l)).then((function(){R(Object(j.actNumCart)(a[r].quantity))}))}else{var u=Object(s.a)(Object(s.a)({},t[0]),{},{data:[Object(s.a)({},i)].concat(Object(c.a)(a))});Object(p.default)("carts/".concat(JSON.parse(localStorage.getItem("Token")).id),"put",Object(s.a)({},u)),R(Object(j.actDelCart)(a[0].id))}}else{var o=Object(s.a)(Object(s.a)({},t[0]),{},{data:[Object(s.a)({},i)]});Object(p.default)("carts/".concat(JSON.parse(localStorage.getItem("Token")).id),"put",Object(s.a)({},o)).then((function(){R(Object(j.actNumCart)(o.data[0].quantity))}))}}else{var f={id:JSON.parse(localStorage.getItem("Token")).id,userId:JSON.parse(localStorage.getItem("Token")).id,data:[Object(s.a)({},i)]};Object(p.default)("carts","post",Object(s.a)({},f)).then((function(){R(Object(j.actNumCart)(f.data.quantity))}))}}}));case 6:a.next=9;break;case 8:S.length>0?-1!==(l=S.findIndex((function(e){return e.code===n.id})))?(S[l]=Object(s.a)(Object(s.a)({},S[l]),{},{quantity:void 0!==w?w:S[l].quantity+1}),C(Object(j.actAddCart)(Object(c.a)(S))),R(Object(j.actNumCart)(Object(v.getQuantity)(Object(c.a)(S))))):(u=Object(s.a)({},i),S.unshift(Object(s.a)({},u)),C(Object(j.actAddCart)(Object(c.a)(S))),R(Object(j.actNumCart)(Object(v.getQuantity)(Object(c.a)(S))))):(o=Object(s.a)({},i),S.push(Object(s.a)({},o)),C(Object(j.actAddCart)(Object(c.a)(S))),R(Object(j.actNumCart)(1)));case 9:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return o.a.createElement("div",{className:"item-buying"},o.a.createElement("button",{type:"button",className:"add-cart",onClick:q},t("addToCart")),o.a.createElement("button",{className:"link-btn",onClick:function(){k(!N)}},o.a.createElement("i",{className:"fas fa-heart"})),o.a.createElement(h.FacebookProvider,{appId:"iTPKQIka"},o.a.createElement("div",{className:"fb-share-button","data-href":"http://localhost:3000","data-layout":"button","data-size":"large"},o.a.createElement("a",{href:"https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2F&src=sdkpreparse",className:"fb-xfbml-parse-ignore"},t("share")))),N?o.a.createElement("div",{className:"rating"},o.a.createElement(m.a,{rating:d,starRatedColor:"#789629",changeRating:function(t){var a=(e.rate+parseInt(t))/2;Object(p.default)("products/".concat(e.data.id),"put",Object(s.a)(Object(s.a)({},e.data),{},{rating:a})),O(t),k(!N)},numberOfStars:5,name:"rating",style:{width:"100%",height:"30px"}})):"")}},68:function(e,t,a){"use strict";a.r(t),a.d(t,"email",(function(){return n})),a.d(t,"firstname",(function(){return r})),a.d(t,"lastname",(function(){return c})),a.d(t,"phone",(function(){return i})),a.d(t,"password",(function(){return s})),a.d(t,"fullname",(function(){return l})),a.d(t,"address",(function(){return u}));var n=/\S+@\S+\.\S+/,r=/^[a-zA-Z]+$/,c=/^[a-zA-Z]+$/,i=/^\d{10}$/,s=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,l=/^[a-zA-Z ]+$/,u=/^[a-zA-Z0-9\s,-]*$/},69:function(e,t,a){"use strict";function n(e){for(var t=[],a=0;a<e;a++)t.push(a);return t}a.r(t),a.d(t,"default",(function(){return n}))},70:function(e,t,a){"use strict";a.r(t),a.d(t,"validateInput",(function(){return c})),a.d(t,"getValueInput",(function(){return i})),a.d(t,"getTranslationCategory",(function(){return s}));var n=a(36),r=a(68),c=function(e,t,a){return""===t?{errorMessage:n.a.t("validate.require")}:"email"===e?null!==r.email.exec(t)?{errorMessage:""}:{errorMessage:n.a.t("validate.email")}:"firstname"===e?null!==r.firstname.exec(t)?{errorMessage:""}:{errorMessage:n.a.t("validate.firstname")}:"lastname"===e?null!==r.lastname.exec(t)?{errorMessage:""}:{errorMessage:n.a.t("validate.lastname")}:"phone"===e?null!==r.phone.exec(t)?{errorMessage:""}:{errorMessage:n.a.t("validate.phone")}:"password"===e?null!==r.password.exec(t)?{errorMessage:""}:{errorMessage:n.a.t("validate.password")}:"confirmPass"===e?t===a?{errorMessage:""}:{errorMessage:n.a.t("validate.confirm")}:"fullname"===e?null!==r.fullname.exec(t)?{errorMessage:""}:{errorMessage:n.a.t("validate.fullname")}:"address"===e?null!==r.address.exec(t)?{errorMessage:""}:{errorMessage:n.a.t("validate.address")}:void 0},i=function(e,t,a,n,r,c,i,s,l){switch(e){case"email":return t.current.value;case"firstname":return a.current.value;case"lastname":return n.current.value;case"phone":return r.current.value;case"password":return c.current.value;case"confirmPass":return i.current.value;case"fullname":return s.current.value;case"address":return l.current.value}},s=function(e){switch(e){case"cosmetic":return n.a.t("grid.category1");case"makeup":return n.a.t("grid.category2");case"perfume":return n.a.t("grid.category3");case"lotions":return n.a.t("grid.menu1_1");case"mask":return n.a.t("grid.menu1_2");case"cleanser":return n.a.t("grid.menu1_3");case"lipstick":return n.a.t("grid.menu2_1");case"mascara":return n.a.t("grid.menu2_2");case"blusher":return n.a.t("grid.menu2_3");default:return e}}},73:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(530),c=a(0),i=a.n(c),s=a(556),l=a(44),u=a(63),o=a(69);t.default=function(e){var t=e.totalRows,a=Object(l.c)((function(e){return e.filters.filters})),f=Object(l.b)(),d=Object(c.useState)({_limit:6,_page:1}),m=Object(r.a)(d,2),p=m[0],b=m[1],g=p._limit,O=p._page,_=Math.ceil(parseInt(t?t.length:0)/g),j=Object(o.default)(_),v=Object(s.a)().t;function h(e){window.scrollTo(0,100),b(Object(n.a)(Object(n.a)({},p),{},{_page:e})),f(Object(u.actFetchProductRequest)(Object(n.a)(Object(n.a)({},a),{},{_page:e})))}var E=j.map((function(e){var t="";return O===e+1&&(t="active"),i.a.createElement("li",{className:"paginations__item",key:e},i.a.createElement("button",{className:"paginations__item__link ".concat(t),onClick:function(){return h(e+1)}},e+1))}));return i.a.createElement("section",{className:"paginations"},i.a.createElement("ul",null,i.a.createElement("li",{className:"paginations__item"},i.a.createElement("button",{className:"paginations__item__link",disabled:O<=1,onClick:function(){return h(O-1)}},i.a.createElement("i",{className:"fa fa-angle-left"}),v("prev"))),E,i.a.createElement("li",{className:"paginations__item"},i.a.createElement("button",{className:"paginations__item__link",disabled:O>=_,onClick:function(){return h(O+1)}},v("next"),i.a.createElement("i",{className:"fa fa-angle-right"})))))}},76:function(e,t,a){"use strict";function n(e){var t=Math.floor((e[e.length-1]-e[0])/6),a=[],n=e[0],r=n+t,c={min:n,max:r};a.push(c);for(var i=1;i<(e[e.length-1]-e[0])/t;i++)c={min:n+=t,max:r+=t},a.push(c);return a}a.r(t),a.d(t,"default",(function(){return n}))},77:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(0),c=a.n(r),i=a(44),s=a(2),l=a(63);t.default=Object(s.i)((function(e){var t=Object(i.c)((function(e){return e.filters.filters})),a=Object(i.b)(),r=Object(i.b)(),s=function(c){var i=t.category,s=t.species;"grid"===c&&(a(Object(l.actFetchProductRequest)(Object(n.a)(Object(n.a)({},t),{},{_limit:6,_page:1}))),r(Object(l.actFetchTotalRowsRequest)({category:i,species:s})),e.history.push("/grid")),"list"===c&&e.history.push("/list")};return c.a.createElement("div",{className:"pagination__list"},c.a.createElement("button",{className:"btn-grid-list",onClick:function(){return s("grid")}},c.a.createElement("i",{className:"fas fa-th-large"})),c.a.createElement("button",{className:"btn-grid-list",onClick:function(){return s("list")}},c.a.createElement("i",{className:"fas fa-list"})))}))},84:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(7),c=a(530),i=a(0),s=a.n(i),l=a(556),u=a(44),o=a(63),f=a(76);t.default=function(){var e=Object(i.useState)([]),t=Object(c.a)(e,2),a=t[0],d=t[1],m=Object(l.a)("translation").t,p=Object(u.c)((function(e){return e.totalRow})),b=Object(u.c)((function(e){return e.filters.filters})),g=Object(u.b)(),O=Object(u.b)(),_=Object(i.useState)(!1),j=Object(c.a)(_,2),v=j[0],h=j[1];Object(i.useEffect)((function(){if(0!==p.length){var e=Object(r.a)(p).map((function(e){return e.price})).sort((function(e,t){return e-t})),t=Object(f.default)(e);d(Object(r.a)(t))}}),[p]);return s.a.createElement("div",{className:"facet__item",style:{margin:"20px 0"}},s.a.createElement("h1",null,m("filter.price")),s.a.createElement("div",{className:"facet__item__list",style:{margin:"20px 0"}},a.map((function(e,t){return s.a.createElement("div",{className:"facet__item__list__price",key:t},s.a.createElement("div",{onClick:function(){return function(e){var t=b.category,a=b.species,r=[Object(n.a)({},e)];g(Object(o.actFetchProductRequest)({category:t,species:a,price_gte:r[0].min,_limit:6,_page:1})),O(Object(o.actFetchTotalRowsRequest)({category:t,species:a,price_gte:r[0].min})),d([].concat(r)),h(!0)}({min:e.min})},style:{cursor:"pointer"}},s.a.createElement("i",{className:"fas fa-chevron-right"}),s.a.createElement("span",{className:"facet-price"},parseFloat(e.min).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")," ","\u0111")))}))),s.a.createElement("div",{style:{width:"100%"}},s.a.createElement("button",{style:{width:"60px",background:"#fff",color:"green",cursor:"pointer",border:"1px solid green",outline:"none"},onClick:function(){var e=b.category,t=b.species;v&&(g(Object(o.actFetchProductRequest)({category:e,species:t,_limit:6,_page:1})),O(Object(o.actFetchTotalRowsRequest)({category:e,species:t})),h(!1))}},m("filter.back"))))}},85:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(0),c=a.n(r),i=a(556),s=a(44),l=a(63);t.default=function(e){var t=Object(i.a)("translation").t,a=Object(s.c)((function(e){return e.filters.filters})),r=Object(s.b)(),u=Object(s.b)();return c.a.createElement("div",{className:"facet__item",style:{margin:"20px 0"}},c.a.createElement("h1",null,t("filter.rate")),c.a.createElement("div",{className:"facet__item__list",style:{margin:"20px 0"}},[["fas","far","far","far","far"],["fas","fas","far","far","far"],["fas","fas","fas","far","far"],["fas","fas","fas","fas","far"],["fas","fas","fas","fas","fas"]].map((function(e,t){return c.a.createElement("div",{className:"facet__item__list__rating",key:t,style:{cursor:"pointer"}},c.a.createElement("div",{className:"facet__item__list__rating__star",onClick:function(){return function(e){var t=a.category,c=a.species;r(Object(l.actFetchProductRequest)(Object(n.a)(Object(n.a)({},a),{},{rating_gte:e.min,rating_lte:e.max}))),u(Object(l.actFetchTotalRowsRequest)({category:t,species:c,rating_gte:e.min,rating_lte:e.max}))}({min:t,max:t+1})}},e.map((function(e,t){return c.a.createElement("i",{className:"".concat(e," fa-star"),key:t})}))))}))))}}}]);
//# sourceMappingURL=9.26a5c1a6.chunk.js.map