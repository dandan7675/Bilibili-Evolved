!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["style/always-show-duration"]=e():t["style/always-show-duration"]=e()}(self,(function(){return function(){var t,e,n={524:function(t,e,n){var o=n(645)((function(t){return t[1]}));o.push([t.id,".watchlater-card .duration,\n.time-group-item .duration,\n.favorite-card .duration,\n.video-card .duration {\n  opacity: 1 !important;\n}",""]),t.exports=o},645:function(t){"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,o){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var u=this[i][0];null!=u&&(r[u]=!0)}for(var c=0;c<t.length;c++){var a=[].concat(t[c]);o&&r[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),e.push(a))}},e}},151:function(t,e,n){var o=n(524);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()}},o={};function r(t){var e=o[t];if(void 0!==e)return e.exports;var i=o[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var u={};t=t||[null,e({}),e([]),e(e)];for(var c=2&o&&n;"object"==typeof c&&!~t.indexOf(c);c=e(c))Object.getOwnPropertyNames(c).forEach((function(t){u[t]=function(){return n[t]}}));return u.default=function(){return n},r.d(i,u),i},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return e}});var t=coreApis.componentApis.styledComponent;const e=(0,coreApis.componentApis.define.defineComponentMetadata)({...(0,t.toggleStyle)("alwaysShowDuration",(()=>Promise.resolve().then(r.t.bind(r,151,23)))),displayName:"总是显示视频时长",description:{"zh-CN":"使脚本展示的各种视频卡片中的时长无需鼠标经过也能一直显示."},tags:[componentsTags.video,componentsTags.style],commitHash:"124fff7f99d2437df482016133ef933bd1d837b3",coreVersion:"2.4.0"})}(),i=i.component}()}));