webpackJsonp([1],{"05vF":function(t,e){t.exports={data:{logoUrl:"../../static/images/LIN.png",spinUrl:"../../static/images/3dSpin.png",houseUrl:"../../static/images/3dhouse.png",modelUrl:"../../static/model/111.obj",houseTip:"单击以旋转并拖动",width:500,height:500,brandTitle:"家具品牌",introListData:[{intro:"商品详情："},{intro:"名称：8HCalm简约组合布艺沙发"},{intro:"商品介绍：三段填充靠包，独立弹簧坐垫，Teflon"},{intro:"三防面料，零螺丝"},{intro:"价格：1859元"}],brandListData:[{name:"Control"},{name:"KOTI"},{name:"Gaovison"},{name:"Haier"},{name:"Honeywell"},{name:"Schneider"},{name:"……"}],furnitureListData:[{name:"sofa",url:"../../static/images/sofa.png"},{name:"desk",url:"../../static/images/desk.png"},{name:"table",url:"../../static/images/table.png"},{name:"cabinet",url:"../../static/images/cabinet.png"}],iconListData:[{iconName:"iconfont lin-search"},{iconName:"iconfont lin-home"},{iconName:"iconfont lin-personal"},{iconName:"iconfont lin-shopping"},{iconName:"iconfont lin-help"}],furnitureTip:"点击查看商品详情",roomListTitle:"房间选择",roomListData:[{roomName:"room1",roomUrl:"../../static/images/room1.png",roomTitle:"卧室1"},{roomName:"room2",roomUrl:"../../static/images/room2.png",roomTitle:"卧室2"},{roomName:"living-room",roomUrl:"../../static/images/livingroom.png",roomTitle:"客厅"},{roomName:"kitchen",roomUrl:"../../static/images/kitchen.png",roomTitle:"厨房"},{roomName:"otherRoom",roomUrl:"../../static/images/otherRoom.jpg",roomTitle:"其他"}]}}},"09yM":function(t,e){},"7aMu":function(t,e){},AQ9D:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=a("VU/8")({name:"App"},i,!1,function(t){a("VEXY")},null,null).exports,n=a("/ocq"),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},r,!1,function(t){a("7aMu")},"data-v-d8ec41bc",null).exports;var l=a("egaX"),c=a("05vF"),m=a.n(c),u={name:"",data:function(){return{pageData:m.a.data,isModelShow:!1}},methods:{showModel:function(){this.isModelShow=!0},hideModel:function(){this.isModelShow=!1}},components:{ModelObj:l.ModelObj}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"model-show"},[a("img",{staticClass:"logo",attrs:{src:t.pageData.logoUrl}}),t._v(" "),a("div",{staticClass:"house-3d"},[a("img",{staticClass:"spin",attrs:{src:t.pageData.spinUrl}}),t._v(" "),a("img",{staticClass:"house",attrs:{src:t.pageData.houseUrl}}),t._v(" "),a("p",[t._v(t._s(t.pageData.houseTip))])]),t._v(" "),a("div",{staticClass:"room-choose"},[a("p",{staticClass:"room-list-title"},[t._v(t._s(t.pageData.roomListTitle))]),t._v(" "),t._l(t.pageData.roomListData,function(e,o){return a("div",{key:o,class:e.roomName},[a("img",{attrs:{src:e.roomUrl}}),t._v(" "),a("p",{staticClass:"title"},[t._v(t._s(e.roomTitle))])])})],2),t._v(" "),a("div",{staticClass:"brand-list"},[a("p",{staticClass:"title"},[t._v(t._s(t.pageData.brandTitle))]),t._v(" "),t._l(t.pageData.brandListData,function(e,o){return a("button",{key:o},[t._v(t._s(e.name))])})],2),t._v(" "),a("div",{staticClass:"furniture"},[t._l(t.pageData.furnitureListData,function(e,o){return a("div",{key:o},[a("img",{class:e.name,attrs:{src:e.url},on:{click:t.showModel}})])}),t._v(" "),a("p",[t._v(t._s(t.pageData.furnitureTip))])],2),t._v(" "),a("div",{staticClass:"icon-list"},t._l(t.pageData.iconListData,function(t,e){return a("div",{key:e},[a("i",{class:t.iconName})])}),0),t._v(" "),t.isModelShow?a("div",{staticClass:"fullscreen-show"},[a("div",{staticClass:"model"},[a("model-obj",{attrs:{src:t.pageData.modelUrl,width:t.pageData.width,height:t.pageData.height}})],1),t._v(" "),a("i",{staticClass:"el-icon-close",on:{click:t.hideModel}}),t._v(" "),a("div",{staticClass:"intro"},t._l(t.pageData.introListData,function(e,o){return a("p",{key:o},[t._v(t._s(e.intro))])}),0)]):t._e()])},staticRenderFns:[]};var p=a("VU/8")(u,v,!1,function(t){a("ZZIV")},"data-v-3d004de2",null).exports;o.default.use(n.a);var h=new n.a({routes:[{path:"/",name:"ModelShow",component:p}]}),_=(a("D0oh"),a("TcQY")),g=a.n(_);a("09yM"),a("AQ9D");o.default.use(g.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:h,components:{App:s},template:"<App/>"})},VEXY:function(t,e){},ZZIV:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e396a925a0379d110781.js.map