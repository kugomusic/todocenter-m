(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-chat-history-demo-chat-history-demo"],{"1ceb":function(t,e,n){var a=n("32c7");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("f27864a0",a,!0,{sourceMap:!1,shadowMode:!1})},"324f":function(t,e,n){"use strict";var a=n("8cb7"),i=n.n(a);i.a},"32c7":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".chat-item[data-v-723300f7]{display:flex;flex-direction:column;padding:%?20?%}.chat-time[data-v-723300f7]{padding:%?4?% %?0?%;text-align:center;font-size:%?22?%;color:#aaa}.chat-container[data-v-723300f7]{display:flex;flex-direction:row}.chat-location-me[data-v-723300f7]{flex-direction:row-reverse;text-align:right}.chat-icon-container[data-v-723300f7]{margin-top:%?12?%}.chat-icon[data-v-723300f7]{width:%?80?%;height:%?80?%;border-radius:50%;background-color:#eee}.chat-content-container[data-v-723300f7]{margin:%?0?% %?15?%}.chat-user-name[data-v-723300f7]{font-size:%?26?%;color:#888}.chat-text-container[data-v-723300f7]{background-color:#f1f1f1;border-radius:%?8?%;padding:%?10?% %?15?%;margin-top:%?10?%;\nmax-width:%?500?%\n}.chat-text-container-me[data-v-723300f7]{background-color:#007aff}.char-text[data-v-723300f7]{font-size:%?28?%;\nword-break:break-all;\n}.char-text-me[data-v-723300f7]{color:#fff}",""]),t.exports=e},3804:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".chat-input-bar[data-v-7c4cfc74]{display:flex;flex-direction:row;align-items:center;border-top:solid 1px #f5f5f5;background-color:#f8f8f8;padding:%?10?% %?15?%}.chat-input-container[data-v-7c4cfc74]{flex:1;display:flex;\npadding:%?15?%;\n\n\nbackground-color:#fff;border-radius:%?10?%}.chat-input[data-v-7c4cfc74]{flex:1;font-size:%?28?%}.chat-input-send[data-v-7c4cfc74]{background-color:#007aff;margin:%?10?% %?10?% %?10?% %?20?%;border-radius:%?10?%;padding:%?10?% %?30?%}.chat-input-send-text[data-v-7c4cfc74]{color:#fff;font-size:%?26?%}",""]),t.exports=e},"6f60":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"chat-input-bar"},[n("v-uni-view",{staticClass:"chat-input-container"},[n("v-uni-input",{staticClass:"chat-input",attrs:{"cursor-spacing":20,"confirm-type":"send",type:"text",placeholder:"请输入内容"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.sendClick.apply(void 0,arguments)}},model:{value:t.msg,callback:function(e){t.msg=e},expression:"msg"}})],1),n("v-uni-view",{staticClass:"chat-input-send",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendClick.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"chat-input-send-text"},[t._v("发送")])],1)],1)},i=[]},"8aac":function(t,e,n){"use strict";n.r(e);var a=n("b23c"),i=n.n(a);for(var c in a)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=i.a},"8cb7":function(t,e,n){var a=n("3804");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("0460144e",a,!0,{sourceMap:!1,shadowMode:!1})},"9be9":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{dataList:[]}},onPageScroll:function(t){t.scrollTop<10&&this.$refs.paging.doChatRecordLoadMore()},methods:{queryList:function(t,e){var n=this,a={pageNo:t,pageSize:e};this.$request.queryChatList(a).then((function(t){n.$refs.paging.complete(t.data.list)})).catch((function(t){n.$refs.paging.complete(!1)}))},doSend:function(t){var e=this;uni.showLoading({title:"发送中..."}),setTimeout((function(){uni.hideLoading(),e.$refs.paging.addChatRecordData({time:"",icon:"/static/daxiong.jpg",name:"大雄",content:t,isMe:!0})}),500)}}};e.default=a},"9df1":function(t,e,n){"use strict";n.r(e);var a=n("cc9d"),i=n("db2f");for(var c in i)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(c);n("a4ba");var o=n("f0c5"),r=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"723300f7",null,!1,a["a"],void 0);e["default"]=r.exports},"9ef4":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return a}));var a={zPaging:n("4533").default,chatItem:n("9df1").default,chatInputBar:n("dbb1").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("z-paging",{ref:"paging",attrs:{"use-page-scroll":!0,"use-chat-record-mode":!0},on:{query:function(e){arguments[0]=e=t.$handleEvent(e),t.queryList.apply(void 0,arguments)}},scopedSlots:t._u([{key:"bottom",fn:function(){return[n("chat-input-bar",{on:{send:function(e){arguments[0]=e=t.$handleEvent(e),t.doSend.apply(void 0,arguments)}}})]},proxy:!0}]),model:{value:t.dataList,callback:function(e){t.dataList=e},expression:"dataList"}},t._l(t.dataList,(function(t,e){return n("v-uni-view",{key:e,attrs:{id:"z-paging-"+e}},[n("chat-item",{attrs:{item:t}})],1)})),1)],1)},c=[]},a4ba:function(t,e,n){"use strict";var a=n("1ceb"),i=n.n(a);i.a},b23c:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={name:"chat-input-bar",data:function(){return{msg:""}},methods:{sendClick:function(){this.msg.length&&(this.$emit("send",this.msg),this.msg="")}}}},b644:function(t,e,n){"use strict";n.r(e);var a=n("9ef4"),i=n("c72c");for(var c in i)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(c);var o=n("f0c5"),r=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"0d13d9bc",null,!1,a["a"],void 0);e["default"]=r.exports},c72c:function(t,e,n){"use strict";n.r(e);var a=n("9be9"),i=n.n(a);for(var c in a)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=i.a},cc9d:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"chat-item"},[t.item.time&&t.item.time.length?n("v-uni-text",{staticClass:"chat-time"},[t._v(t._s(t.item.time))]):t._e(),n("v-uni-view",{class:{"chat-container":!0,"chat-location-me":t.item.isMe}},[n("v-uni-view",{staticClass:"chat-icon-container"},[n("v-uni-image",{staticClass:"chat-icon",attrs:{src:t.item.icon,mode:"aspectFill"}})],1),n("v-uni-view",{staticClass:"chat-content-container"},[n("v-uni-text",{class:{"chat-user-name":!0,"chat-location-me":t.item.isMe}},[t._v(t._s(t.item.name))]),n("v-uni-view",{class:{"chat-text-container":!0,"chat-text-container-me":t.item.isMe}},[n("v-uni-text",{class:{"char-text":!0,"char-text-me":t.item.isMe}},[t._v(t._s(t.item.content))])],1)],1)],1)],1)},i=[]},db2f:function(t,e,n){"use strict";n.r(e);var a=n("de19"),i=n.n(a);for(var c in a)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=i.a},dbb1:function(t,e,n){"use strict";n.r(e);var a=n("6f60"),i=n("8aac");for(var c in i)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(c);n("324f");var o=n("f0c5"),r=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"7c4cfc74",null,!1,a["a"],void 0);e["default"]=r.exports},de19:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"chat-item",props:{item:{type:Object,default:function(){return{time:"",icon:"",name:"",content:"",isMe:!1}}}},data:function(){return{}}};e.default=a}}]);