(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-inner-list-demo-inner-list-demo"],{"04d3":function(t,e,n){"use strict";var i=n("f6ed"),a=n.n(i);a.a},"0af2":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".item[data-v-5f3d3864]{position:relative;height:%?150?%;display:flex;align-items:center;justify-content:space-between;padding:%?0?% %?30?%}.item-detail[data-v-5f3d3864]{padding:%?5?% %?15?%;border-radius:%?10?%;font-size:%?28?%;color:#fff;background-color:#007aff}.item-line[data-v-5f3d3864]{position:absolute;bottom:%?0?%;left:%?0?%;height:1px;width:100%;background-color:#eee}",""]),t.exports=e},1937:function(t,e,n){"use strict";n.r(e);var i=n("5c99"),a=n("d988");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("04d3");var s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"5f3d3864",null,!1,i["a"],void 0);e["default"]=u.exports},"4a57":function(t,e,n){"use strict";(function(t){n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{tabList:["测试1","测试2","测试3","测试4"],tabIndex:0}},methods:{tabChange:function(t){this.tabIndex=t,this.$refs.paging.reload()},queryList:function(t,e){var n=this,i={pageNo:t,pageSize:e,type:this.tabIndex+1};this.$request.queryList(i).then((function(t){n.$refs.paging.complete(t.data.list)})).catch((function(t){n.$refs.paging.complete(!1)}))},itemClick:function(e,n){t("log","点击了",e.title," at pages/inner-list-demo/inner-list-demo.vue:57")}}};e.default=i}).call(this,n("0de9")["log"])},"5c99":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={zPaging:n("4533").default,zTabs:n("bcc0").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("z-paging",{ref:"paging",attrs:{"use-inner-list":!0},on:{query:function(e){arguments[0]=e=t.$handleEvent(e),t.queryList.apply(void 0,arguments)}},scopedSlots:t._u([{key:"top",fn:function(){return[n("z-tabs",{attrs:{list:t.tabList},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.tabChange.apply(void 0,arguments)}}})]},proxy:!0},{key:"cell",fn:function(e){var i=e.item,a=e.index;return[n("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.itemClick(i,a)}}},[n("v-uni-view",{staticClass:"item-title"},[t._v(t._s(i.title))]),n("v-uni-view",{staticClass:"item-detail"},[t._v(t._s(i.detail))]),n("v-uni-view",{staticClass:"item-line"})],1)]}}])})],1)},o=[]},d988:function(t,e,n){"use strict";n.r(e);var i=n("4a57"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},f6ed:function(t,e,n){var i=n("0af2");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("5ddeb29e",i,!0,{sourceMap:!1,shadowMode:!1})}}]);