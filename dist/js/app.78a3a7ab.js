(function(t){function e(e){for(var r,a,c=e[0],s=e[1],l=e[2],u=0,f=[];u<c.length;u++)a=c[u],o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-36b7":"9bb229f4","chunk-510c":"f0b85b8a","chunk-7a73":"0896b3ae"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-36b7":1,"chunk-510c":1,"chunk-7a73":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-36b7":"dc0e80df","chunk-510c":"30408605","chunk-7a73":"75685246"}[t]+".css",a=s.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var c=o[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return e()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){c=u[i],l=c.getAttribute("data-href");if(l===r||l===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||a,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.request=r,n(o)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){a[t]=0}));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=i);var l,u=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=c(t),l=function(e){f.onerror=f.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:f})},12e4);f.onerror=f.onload=l,u.appendChild(f)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0606":function(t,e,n){},"168c":function(t,e,n){},"185d":function(t,e,n){"use strict";var r=n("0606"),a=n.n(r);a.a},"1f5b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=(n("c9c9"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("main-header"),n("router-view"),n("footer",{staticClass:"pt-5 pb-4"},[n("div",{staticClass:"container text-center"},[t._v("\n      All Rights Reserved. VSSB "+t._s(t.date)+"\n    ")])]),n("router-link",{staticClass:"add-new-link shadow-sm",attrs:{to:{name:"new-profile"}}},[t._v("\n      +\n  ")])],1)}),o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"main-header mt-4"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"col-sm text-left"},[r("router-link",{attrs:{to:"/"}},[r("img",{staticClass:"logo d-block mx-auto ml-sm-0",attrs:{alt:"Vue logo",src:n("9b19")}})])],1),r("div",{staticClass:"col-sm text-right d-none d-sm-block"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"form-control ml-auto",attrs:{type:"search",name:"",id:"",placeholder:"Search for contact"},domProps:{value:t.query},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchContact(e):null},input:function(e){e.target.composing||(t.query=e.target.value)}}})])])])])},c=[],s={name:"main-header",data:function(){return{query:""}},methods:{searchContact:function(){eventBus.$emit("searchContact",{query:this.query})}}},l=s,u=(n("f3bc"),n("2877")),f=Object(u["a"])(l,i,c,!1,null,"d8926284",null);f.options.__file="Header.vue";var d=f.exports,p={components:{MainHeader:d},data:function(){return{date:(new Date).getFullYear()}}},h=p,m=(n("185d"),Object(u["a"])(h,a,o,!1,null,"567924ee",null));m.options.__file="App.vue";var v=m.exports,b=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home page-wrap"},[n("h1",{staticClass:"site-title"},[t._v("Contacts")]),n("letter-list"),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},t._l(t.contacts,function(t,e){return n("profile-item",{key:e,attrs:{contact:t,index:e}})}))])],1)},y=[],_=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6 col-lg-4 mb-4"},[n("router-link",{staticClass:"card text-muted shadow-sm profile-item",attrs:{to:{name:"profile",params:{id:t.index,contact:t.contact}},index:t.index}},[n("div",{staticClass:"card-header bg-dark text-white"},[n("h2",{staticClass:"h6 mb-0 p-1"},[t._v(t._s(t.contact.name))])]),n("div",{staticClass:"p-3"},[n("small",[t._v(t._s(t.contact.email)+"\n      "),n("br"),t._v("\n      "+t._s(t.contact.phone))])])])],1)}),C=[],w=(n("c5f6"),{name:"profile-item",props:{contact:{},index:Number}}),k=w,x=(n("8f06"),Object(u["a"])(k,_,C,!1,null,"608e0f66",null));x.options.__file="ProfileItem.vue";var O=x.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"letter-list mb-5"},t._l(t.letters,function(e,r){return n("span",{key:r,staticClass:"letter px-3 py-2",class:{active:t.activeItem==r},on:{click:function(n){t.letterFilter(e,r)}}},[t._v("\n    "+t._s(e)+"\n  ")])}))},E=[],q=(n("55dd"),n("ac6a"),{name:"letter-list",data:function(){return{contacts:contactData,activeItem:null,filtered:!1,letters:[]}},created:function(){var t=this;this.contacts.forEach(function(e){-1===t.letters.indexOf(e.name.charAt(0))&&t.letters.push(e.name.charAt(0))}),this.letters.sort()},methods:{letterFilter:function(t,e){this.activeItem==e?(eventBus.$emit("letterFilterClear"),this.filtered=!1,this.activeItem=null):(eventBus.$emit("letterFilter",{letter:t}),this.filtered=!0,this.activeItem=e)}}}),B=q,P=(n("5fcf"),Object(u["a"])(B,j,E,!1,null,"f85dfe8c",null));P.options.__file="LetterList.vue";var $=P.exports,F={name:"home",data:function(){return{contacts:contactData,letters:[]}},components:{ProfileItem:O,LetterList:$},created:function(){var t=this;eventBus.$on("letterFilter",function(e){return t.letterFilter(e)}),eventBus.$on("letterFilterClear",function(){return t.letterFilterClear()}),eventBus.$on("searchContact",function(e){return t.searchContact(e)})},methods:{letterFilter:function(t){this.contacts=contactData.filter(function(e){if(e.name.charAt(0)==t.letter)return e})},letterFilterClear:function(t){this.contacts=contactData},searchContact:function(t){this.contacts=contactData.filter(function(e){var n=!1;if(-1!==e.name.indexOf(t.query)?n=!0:-1!==e.phone.indexOf(t.query)?n=!0:-1!==e.email.indexOf(t.query)&&(n=!0),n)return e})}}},S=F,A=Object(u["a"])(S,g,y,!1,null,null,null);A.options.__file="Home.vue";var T=A.exports;r["a"].use(b["a"]);var D=new b["a"]({routes:[{path:"/",name:"home",component:T},{path:"/profile/:id",name:"profile",props:!0,component:function(){return n.e("chunk-7a73").then(n.bind(null,"c66d"))}},{path:"/edit-profile/:id",name:"edit-profile",props:!0,component:function(){return n.e("chunk-510c").then(n.bind(null,"fb5e"))}},{path:"/new-profile/",name:"new-profile",props:!0,component:function(){return n.e("chunk-36b7").then(n.bind(null,"aa20"))}}]});r["a"].config.productionTip=!1,window.eventBus=new r["a"],window.contactData={},fetch("/data.json").then(function(t){return t.json()}).then(function(t){contactData=t.data,new r["a"]({router:D,render:function(t){return t(v)}}).$mount("#app")})},"5fcf":function(t,e,n){"use strict";var r=n("168c"),a=n.n(r);a.a},7835:function(t,e,n){},"8f06":function(t,e,n){"use strict";var r=n("1f5b"),a=n.n(r);a.a},"9b19":function(t,e,n){t.exports=n.p+"img/logo.429b3e2a.svg"},c9c9:function(t,e,n){},f3bc:function(t,e,n){"use strict";var r=n("7835"),a=n.n(r);a.a}});
//# sourceMappingURL=app.78a3a7ab.js.map