(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-swiper-demo-n-swiper-demo-n"],{"0a40":function(t,e,n){var i=n("9f95");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("5c8daa30",i,!0,{sourceMap:!1,shadowMode:!1})},"0c69":function(t,e,n){"use strict";n.r(e);var i=n("9194"),a=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},"0ffe":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("e25e"),n("fb6a"),n("ac1f"),n("d81d");var i={name:"z-paging-swiper",data:function(){return{systemInfo:null,cssSafeAreaInsetBottom:-1,swiperContentStyle:{}}},props:{fixed:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:!1},swiperStyle:{type:Object,default:function(){return{}}}},mounted:function(){var t=this;this.$nextTick((function(){t.systemInfo=uni.getSystemInfoSync()})),this._getCssSafeAreaInsetBottom(),this._updateLeftAndRightWidth(),this.swiperContentStyle={flex:"1"},this.swiperContentStyle={width:"100%",height:"100%"}},computed:{finalSwiperStyle:function(){var t=this.swiperStyle;if(!this.systemInfo)return t;var e=this.systemInfo.windowTop,n=this.systemInfo.windowBottom;if(this.fixed&&(e&&!t.top&&(t.top=e+"px"),!t.bottom)){var i=n||0;this.safeAreaInsetBottom&&(i+=this.safeAreaBottom),i>0&&(t.bottom=i+"px")}return t},safeAreaBottom:function(){if(!this.systemInfo)return 0;var t=0;return t=-1===this.cssSafeAreaInsetBottom?0:this.cssSafeAreaInsetBottom,t},isOldWebView:function(){try{var t=uni.getSystemInfoSync().system.split(" "),e=t[0],n=parseInt(t[1].slice(0,1));if("iOS"===e&&n<=10||"Android"===e&&n<=6)return!0}catch(i){return!1}return!1},zSlots:function(){return this.$scopedSlots?this.$scopedSlots:this.$slots}},methods:{updateLeftAndRightWidth:function(){var t=this;this.$nextTick((function(){t._updateLeftAndRightWidth()}))},_getCssSafeAreaInsetBottom:function(){var t=this,e=uni.createSelectorQuery().in(this);e.select(".zp-safe-area-inset-bottom").boundingClientRect((function(e){e&&(t.cssSafeAreaInsetBottom=e.height)})).exec()},_updateLeftAndRightWidth:function(){var t=this;this.isOldWebView&&this.$nextTick((function(){setTimeout((function(){["left","right"].map((function(e){var n=uni.createSelectorQuery().in(t);n.select(".zp-swiper-".concat(e)).boundingClientRect((function(n){t.$set(t.swiperContentStyle,e,n?n.width+"px":"0px")})).exec()}))}),0)}))}}};e.default=i},"27f6":function(t,e,n){var i=n("2974");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("f5c5ab9e",i,!0,{sourceMap:!1,shadowMode:!1})},2974:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".content[data-v-eb3f7ff2]{flex:1;\nheight:100%\n}.paging[data-v-eb3f7ff2]{\nheight:100%\n}.item[data-v-eb3f7ff2]{flex-direction:row;position:relative;height:%?150?%;align-items:center;justify-content:space-between;padding:%?0?% %?30?%}.item-detail[data-v-eb3f7ff2]{padding:%?5?% %?15?%;border-radius:%?10?%;font-size:%?28?%;color:#fff;background-color:#007aff}.item-line[data-v-eb3f7ff2]{position:absolute;bottom:0;left:0;right:0;height:1px;background-color:#eee}",""]),t.exports=e},"317a":function(t,e,n){"use strict";n.r(e);var i=n("e85a"),a=n("0c69");for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("b850");var r=n("f0c5"),o=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"eb3f7ff2",null,!1,i["a"],void 0);e["default"]=o.exports},"54fb":function(t,e,n){"use strict";n.r(e);var i=n("0ffe"),a=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},6039:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var i={zPagingSwiper:n("b545").default,zTabs:n("bcc0").default,swiperListItemN:n("317a").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("z-paging-swiper",{scopedSlots:t._u([{key:"top",fn:function(){return[n("z-tabs",{ref:"tabs",attrs:{list:t.tabList,current:t.current},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.tabsChange.apply(void 0,arguments)}}})]},proxy:!0}])},[n("v-uni-swiper",{staticClass:"swiper",attrs:{current:t.current},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)},transition:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperTransition.apply(void 0,arguments)},animationfinish:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperAnimationfinish.apply(void 0,arguments)}}},t._l(t.tabList,(function(e,i){return n("v-uni-swiper-item",{key:i,staticClass:"swiper-item"},[n("swiper-list-item-n",{staticClass:"swiper-list-item-n",attrs:{tabIndex:i,currentIndex:t.current}})],1)})),1)],1)},s=[]},"618c":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{tabList:["测试1","测试2","测试3","测试4"],current:0}},methods:{tabsChange:function(t){this.current=t},swiperChange:function(t){},swiperTransition:function(t){this.$refs.tabs.setDx(t.detail.dx)},swiperAnimationfinish:function(t){this.current=t.detail.current,this.$refs.tabs.unlockDx()}}}},"7ff0":function(t,e,n){"use strict";n.r(e);var i=n("6039"),a=n("cd6a");for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("fac0");var r=n("f0c5"),o=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"4d167dc4",null,!1,i["a"],void 0);e["default"]=o.exports},9194:function(t,e,n){"use strict";(function(t){n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var a=i(n("3235")),s={data:function(){return{dataList:[],firstLoaded:!1}},props:{tabIndex:{type:Number,default:function(){return 0}},currentIndex:{type:Number,default:function(){return 0}}},watch:{currentIndex:{handler:function(t){var e=this;t===this.tabIndex&&(this.firstLoaded||this.$nextTick((function(){e.$refs.paging.reload()})))},immediate:!0}},methods:{queryList:function(t,e){var n=this,i={pageNo:t,pageSize:e,type:this.tabIndex+1};a.default.queryList(i).then((function(t){n.$refs.paging.complete(t.data.list),n.firstLoaded=!0})).catch((function(t){n.$refs.paging.complete(!1)}))},itemClick:function(e){t("log","点击了",e.title," at components/swiper-list-item-n/swiper-list-item-n.vue:82")}}};e.default=s}).call(this,n("0de9")["log"])},"9f95":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".zp-swiper-container[data-v-07771af6]{\ndisplay:flex;\nflex-direction:column;flex:1}.zp-swiper-container-fixed[data-v-07771af6]{position:fixed;\nheight:auto;width:auto;\ntop:0;left:0;bottom:0;right:0}.zp-safe-area-inset-bottom[data-v-07771af6]{position:absolute;\nheight:env(safe-area-inset-bottom)\n}.zp-swiper-super[data-v-07771af6]{flex:1;position:relative;\ndisplay:flex;\nflex-direction:row}.zp-swiper-left[data-v-07771af6],.zp-swiper-right[data-v-07771af6]{\nheight:100%\n}.zp-swiper[data-v-07771af6]{flex:1;\nheight:100%;width:100%\n}.zp-absoulte[data-v-07771af6]{\nposition:absolute;top:0;width:auto\n}.zp-right[data-v-07771af6]{right:0}.zp-swiper-item[data-v-07771af6]{height:100%}",""]),t.exports=e},b2c9:function(t,e,n){"use strict";var i=n("0a40"),a=n.n(i);a.a},b545:function(t,e,n){"use strict";n.r(e);var i=n("f428"),a=n("54fb");for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("b2c9");var r=n("f0c5"),o=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"07771af6",null,!1,i["a"],void 0);e["default"]=o.exports},b850:function(t,e,n){"use strict";var i=n("27f6"),a=n.n(i);a.a},bae0:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".swiper[data-v-4d167dc4]{flex:1;\nheight:100%\n}.swiper-list-item-n[data-v-4d167dc4]{\nheight:100%\n}",""]),t.exports=e},cd6a:function(t,e,n){"use strict";n.r(e);var i=n("618c"),a=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},e85a:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var i={zPaging:n("4533").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("z-paging",{ref:"paging",staticClass:"paging",attrs:{fixed:!1,auto:!1},on:{query:function(e){arguments[0]=e=t.$handleEvent(e),t.queryList.apply(void 0,arguments)}},model:{value:t.dataList,callback:function(e){t.dataList=e},expression:"dataList"}},t._l(t.dataList,(function(e,i){return n("cell",{key:e.title,staticClass:"item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.itemClick(e)}}},[n("v-uni-text",{staticClass:"item-title"},[t._v(t._s(e.title))]),n("v-uni-text",{staticClass:"item-detail"},[t._v(t._s(e.detail))]),n("v-uni-view",{staticClass:"item-line"})],1)})),1)],1)},s=[]},f400:function(t,e,n){var i=n("bae0");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("15368bdc",i,!0,{sourceMap:!1,shadowMode:!1})},f428:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{class:t.fixed?"zp-swiper-container zp-swiper-container-fixed":"zp-swiper-container",style:[t.finalSwiperStyle]},[-1===t.cssSafeAreaInsetBottom?n("v-uni-view",{staticClass:"zp-safe-area-inset-bottom"}):t._e(),t.zSlots.top?t._t("top"):t._e(),n("v-uni-view",{staticClass:"zp-swiper-super"},[t.zSlots.left?n("v-uni-view",{class:{"zp-swiper-left":!0,"zp-absoulte":t.isOldWebView}},[t._t("left")],2):t._e(),n("v-uni-view",{class:{"zp-swiper":!0,"zp-absoulte":t.isOldWebView},style:[t.swiperContentStyle]},[t._t("default")],2),t.zSlots.right?n("v-uni-view",{class:{"zp-swiper-right":!0,"zp-absoulte zp-right":t.isOldWebView}},[t._t("right")],2):t._e()],1),t.zSlots.bottom?t._t("bottom"):t._e()],2)},a=[]},fac0:function(t,e,n){"use strict";var i=n("f400"),a=n.n(i);a.a}}]);