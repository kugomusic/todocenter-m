(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-paging-demo-my-paging-demo"],{"0b46":function(t,e,n){"use strict";var i=n("4c22"),a=n.n(i);a.a},"11e4":function(t,e,n){"use strict";var i=n("6c5f"),a=n.n(i);a.a},1270:function(t,e,n){"use strict";(function(t){n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{dataList:[],tabList:["测试1","测试2","测试3","测试4"],tabIndex:0}},methods:{tabChange:function(t){this.tabIndex=t,this.$refs.paging.reload(!0)},queryList:function(t,e){var n=this,i={pageNo:t,pageSize:e,type:this.tabIndex+1};this.$request.queryList(i).then((function(t){n.$refs.paging.complete(t.data.list)})).catch((function(t){n.$refs.paging.complete(!1)}))},itemClick:function(e){t("log","点击了",e.title," at pages/my-paging-demo/my-paging-demo.vue:61")}}};e.default=i}).call(this,n("0de9")["log"])},"17b3":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{}}}},"2ba2":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"nomore"},[e("v-uni-image",{staticClass:"nomore-image",attrs:{mode:"aspectFit",src:n("3b85")}}),e("v-uni-text",{staticClass:"nomore-text"},[this._v("已经到达宇宙尽头啦~")])],1)},a=[]},3538:function(t,e,n){"use strict";n.r(e);var i=n("6bfb"),a=n("5f3c");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("0b46");var o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"a65512f2",null,!1,i["a"],void 0);e["default"]=u.exports},"3b85":function(t,e,n){t.exports=n.p+"static/img/no_more.d425eb3e.png"},"4bbb":function(t,e,n){var i=n("b582");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("6aab0337",i,!0,{sourceMap:!1,shadowMode:!1})},"4c22":function(t,e,n){var i=n("d17e");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("1e84f52a",i,!0,{sourceMap:!1,shadowMode:!1})},"5d97":function(t,e,n){"use strict";n.r(e);var i=n("17b3"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"5f3c":function(t,e,n){"use strict";n.r(e);var i=n("840d"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"63ef":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".nomore[data-v-355b05c2]{\ndisplay:flex;\nflex-direction:column;align-items:center;padding:%?20?% 0}.nomore-image[data-v-355b05c2]{width:%?200?%;height:%?130?%}.nomore-text[data-v-355b05c2]{margin-top:%?10?%;font-size:%?24?%;color:#222963}",""]),t.exports=e},"663d":function(t,e,n){"use strict";n.r(e);var i=n("2ba2"),a=n("5d97");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("11e4");var o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"355b05c2",null,!1,i["a"],void 0);e["default"]=u.exports},"6bfb":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"refresher-container"},[e("v-uni-image",{staticClass:"refresher-image",attrs:{mode:"aspectFit",src:n("d1be")}}),e("v-uni-text",{staticClass:"refresher-text"},[this._v(this._s(this.statusText))])],1)},a=[]},"6c5f":function(t,e,n){var i=n("63ef");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("c23d135e",i,!0,{sourceMap:!1,shadowMode:!1})},"840d":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i={data:function(){return{}},computed:{statusText:function(){return["哎呀，用点力继续下拉！","拉疼我啦，松手刷新~~","正在努力刷新中...","刷新成功啦~"][this.status]}},props:{status:{type:Number,default:function(){return 0}}}};e.default=i},"8da7":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i={name:"my-paging",data:function(){return{list:[]}},props:{value:{type:Array,default:function(){return[]}},useVirtualList:{type:Boolean,default:!1},useInnerList:{type:Boolean,default:!1},cellKeyName:{type:String,default:""},innerListStyle:{type:Object,default:function(){return{}}},preloadPage:{type:[Number,String],default:7},cellHeightMode:{type:String,default:"fixed"},virtualScrollFps:{type:[Number,String],default:60}},watch:{value:function(t){this.list=t},list:function(t){this.$emit("input",t)}},methods:{queryList:function(t,e){this.$emit("query",t,e)},reload:function(t){this.$refs.paging.reload(t)},complete:function(t){this.$refs.paging.complete(t)}}};e.default=i},9294:function(t,e,n){"use strict";n.r(e);var i=n("8da7"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"93a1":function(t,e,n){"use strict";n.r(e);var i=n("1270"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},b290:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={myPaging:n("f8fa").default,zTabs:n("bcc0").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("my-paging",{ref:"paging",on:{query:function(e){arguments[0]=e=t.$handleEvent(e),t.queryList.apply(void 0,arguments)}},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-uni-view",{staticClass:"notice"},[n("v-uni-view",[t._v("①此demo演示了基于z-paging封装个性化分页组件的流程")]),n("v-uni-view",[t._v("②可将重复的配置或者重复插入的slot封装在自定义的分页组件中")])],1),n("z-tabs",{attrs:{list:t.tabList},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.tabChange.apply(void 0,arguments)}}})]},proxy:!0}]),model:{value:t.dataList,callback:function(e){t.dataList=e},expression:"dataList"}},t._l(t.dataList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.itemClick(e)}}},[n("v-uni-view",{staticClass:"item-title"},[t._v(t._s(e.title))]),n("v-uni-view",{staticClass:"item-detail"},[t._v(t._s(e.detail))]),n("v-uni-view",{staticClass:"item-line"})],1)})),1)],1)},r=[]},b3ec:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={zPaging:n("4533").default,customRefresher:n("3538").default,customNomore:n("663d").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("z-paging",{ref:"paging",attrs:{fixed:!0,"auto-show-back-to-top":!0,"refresher-threshold":"160rpx",useVirtualList:t.useVirtualList,useInnerList:t.useInnerList,cellKeyName:t.cellKeyName,innerListStyle:t.innerListStyle,preloadPage:t.preloadPage,cellHeightMode:t.cellHeightMode,virtualScrollFps:t.virtualScrollFps,"loading-more-loading-text":{en:"英文的加载中","zh-cn":"中文的加载中","zh-hant-cn":"繁体的加载中"}},on:{query:function(e){arguments[0]=e=t.$handleEvent(e),t.queryList.apply(void 0,arguments)}},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("bottom")]},proxy:!0},{key:"cell",fn:function(e){var n=e.item,i=e.index;return[t._t("cell",null,{item:n,index:i})]}},{key:"refresher",fn:function(t){var e=t.refresherStatus;return[n("custom-refresher",{attrs:{status:e}})]}},{key:"loadingMoreNoMore",fn:function(){return[n("custom-nomore")]},proxy:!0}],null,!0),model:{value:t.list,callback:function(e){t.list=e},expression:"list"}},[t._t("default")],2)},r=[]},b582:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".notice[data-v-4819c713]{background-color:red;color:#fff;display:flex;flex-direction:column;padding:%?12?% %?20?%;font-size:%?24?%}.item[data-v-4819c713]{position:relative;height:%?150?%;display:flex;align-items:center;justify-content:space-between;padding:%?0?% %?30?%}.item-detail[data-v-4819c713]{padding:%?5?% %?15?%;border-radius:%?10?%;font-size:%?28?%;color:#fff;background-color:#007aff}.item-line[data-v-4819c713]{position:absolute;bottom:%?0?%;left:%?0?%;height:1px;width:100%;background-color:#eee}",""]),t.exports=e},c0fd:function(t,e,n){"use strict";n.r(e);var i=n("b290"),a=n("93a1");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("f1ca");var o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"4819c713",null,!1,i["a"],void 0);e["default"]=u.exports},d17e:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".refresher-container[data-v-a65512f2]{\ndisplay:flex;\nheight:%?150?%;flex-direction:column;align-items:center;justify-content:center}.refresher-image[data-v-a65512f2]{margin-top:%?10?%;height:45px;width:45px}.refresher-text[data-v-a65512f2]{margin-top:%?10?%;font-size:%?24?%;color:#666}",""]),t.exports=e},d1be:function(t,e,n){t.exports=n.p+"static/img/3.c63f6249.gif"},f1ca:function(t,e,n){"use strict";var i=n("4bbb"),a=n.n(i);a.a},f8fa:function(t,e,n){"use strict";n.r(e);var i=n("b3ec"),a=n("9294");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"63f326d7",null,!1,i["a"],void 0);e["default"]=u.exports}}]);