(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-page-default-demo-n-page-default-demo-n"],{"0aff":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={zPaging:a("4533").default,zTabs:a("bcc0").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("z-paging",{ref:"paging",attrs:{"use-page-scroll":!0},on:{query:function(e){arguments[0]=e=t.$handleEvent(e),t.queryList.apply(void 0,arguments)}},scopedSlots:t._u([{key:"top",fn:function(){return[a("z-tabs",{attrs:{list:t.tabList},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.tabChange.apply(void 0,arguments)}}})]},proxy:!0}]),model:{value:t.dataList,callback:function(e){t.dataList=e},expression:"dataList"}},t._l(t.dataList,(function(e,n){return a("v-uni-view",{key:e.title,staticClass:"item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.itemClick(e)}}},[a("v-uni-text",{staticClass:"item-title"},[t._v(t._s(e.title))]),a("v-uni-text",{staticClass:"item-detail"},[t._v(t._s(e.detail))]),a("v-uni-view",{staticClass:"item-line"})],1)})),1)],1)},o=[]},2267:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={onPullDownRefresh:function(){this.isPagingRefNotFound()||this.$refs.paging.reload()},onPageScroll:function(t){this.isPagingRefNotFound()||(this.$refs.paging.updatePageScrollTop(t.scrollTop),t.scrollTop<10&&this.$refs.paging.doChatRecordLoadMore())},onReachBottom:function(){this.isPagingRefNotFound()||this.$refs.paging.pageReachBottom()},methods:{isPagingRefNotFound:function(){return!this.$refs.paging}}}},4969:function(t,e,a){"use strict";var n=a("af6a"),i=a.n(n);i.a},"4a43":function(t,e,a){"use strict";a.r(e);var n=a("8aace"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},6333:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".content[data-v-62fc8da4]{background-color:#fff}.item[data-v-62fc8da4]{flex-direction:row;position:relative;height:%?150?%;align-items:center;justify-content:space-between;padding:%?0?% %?30?%}.item-detail[data-v-62fc8da4]{padding:%?5?% %?15?%;border-radius:%?10?%;font-size:%?28?%;color:#fff;background-color:#007aff}.item-line[data-v-62fc8da4]{position:absolute;bottom:0;left:0;right:0;height:1px;background-color:#eee}",""]),t.exports=e},"8aace":function(t,e,a){"use strict";(function(t){a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("3235")),o=n(a("2267")),s={mixins:[o.default],data:function(){return{dataList:[],tabList:["测试1","测试2","测试3","测试4"],tabIndex:0}},methods:{tabChange:function(t){this.tabIndex=t,this.$refs.paging.reload()},queryList:function(t,e){var a=this,n={pageNo:t,pageSize:e,type:this.tabIndex+1};i.default.queryList(n).then((function(t){a.$refs.paging.complete(t.data.list)})).catch((function(t){a.$refs.paging.complete(!1)}))},itemClick:function(e){t("log","点击了",e.title," at pages/page-default-demo-n/page-default-demo-n.nvue:62")}}};e.default=s}).call(this,a("0de9")["log"])},a305:function(t,e,a){"use strict";a.r(e);var n=a("0aff"),i=a("4a43");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("4969");var s=a("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"62fc8da4",null,!1,n["a"],void 0);e["default"]=u.exports},af6a:function(t,e,a){var n=a("6333");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("7a7d7d7c",n,!0,{sourceMap:!1,shadowMode:!1})}}]);