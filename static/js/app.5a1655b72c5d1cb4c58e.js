webpackJsonp([1],{ClM4:function(n,e){},NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("7+uW"),a=t("zL8q"),s=t.n(a),r=(t("tvR6"),t("//Fk")),l=t.n(r),c=t("GG98"),i=t.n(c),d=t("1e2d"),u=t.n(d),m={name:"mapboxgl",data:function(){return{map:{}}},mounted:function(){u.a.accessToken="pk.eyJ1IjoicXVvcmF1ayIsImEiOiJjamUxcHNxdzExbmphMnhwOW8zMHV5ZmQxIn0.zJdXQSrVdgmYsg9xitYEzw",this.map=new u.a.Map({container:"map",style:"mapbox://styles/mapbox/streets-v9",center:[-2,55],zoom:5}),this.map.on("load",function(){})}},p={render:function(){var n=this.$createElement;return(this._self._c||n)("div",{attrs:{id:"map"}})},staticRenderFns:[]};var h=t("VU/8")(m,p,!1,function(n){t("ClM4")},null,null).exports,v={name:"App",components:{mapbox:h},data:function(){return{search:"",scenes:!1,games:!1,results:!1}},mounted:function(){if(navigator.geolocation){navigator.geolocation.getCurrentPosition(function(n){console.log(n)});var n=this;console.log(n),i()("http://localhost:3000/scenes").then(function(e){console.log(e.body),n.scenes=e.body}),i()("http://localhost:3000/games").then(function(e){console.log(e.body),n.games=e.body})}},watch:{search:function(){var n=this,e=i()("http://localhost:3000/games?search="+this.search).then(function(n){return n.body}),t=i()("http://localhost:3000/scenes?search="+this.search).then(function(n){return n.body});l.a.all([e,t]).then(function(e){var t=e[0];null==t&&(t=[]);var o=e[1];null==o&&(o=[]),n.results=t.concat(o)})}}},f={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("el-menu",{attrs:{mode:"horizontal"}},[t("el-menu-item",{attrs:{index:"1"}},[n._v("FightingGame.community")]),n._v(" "),t("el-menu-item",{attrs:{index:"2"}},[t("el-dropdown",[t("span",{staticClass:"el-dropdown-link"},[n._v("Scenes")]),n._v(" "),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},n._l(n.scenes,function(e){return n.scenes?t("el-dropdown-item",{key:e.name},[n._v(n._s(e.name))]):n._e()}))],1)],1),n._v(" "),t("el-menu-item",{attrs:{index:"3"}},[t("el-dropdown",[t("span",{staticClass:"el-dropdown-link"},[n._v("Games")]),n._v(" "),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},n._l(n.games,function(e){return n.games?t("el-dropdown-item",{key:e.name},[n._v(n._s(e.name))]):n._e()}))],1)],1),n._v(" "),t("el-menu-item",{attrs:{index:"4"}},[t("el-dropdown",[t("el-input",{staticClass:"el-dropdown-link",model:{value:n.search,callback:function(e){n.search=e},expression:"search"}}),n._v(" "),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},n._l(n.results,function(e){return t("el-dropdown-item",{key:e.name},[n._v(n._s(e.name))])}))],1)],1)],1),n._v(" "),t("div",{staticClass:"map-container"},[t("mapbox",{staticClass:"map"})],1)],1)},staticRenderFns:[]};var _=t("VU/8")(v,f,!1,function(n){t("YN/Z")},null,null).exports,w=t("/ocq");o.default.use(w.a);var g=new w.a({routes:[{path:"/",name:"map",component:h}]});o.default.config.productionTip=!1,o.default.use(s.a),new o.default({el:"#app",router:g,components:{App:_},template:"<App/>"})},"YN/Z":function(n,e){},tvR6:function(n,e){}},["NHnr"]);
//# sourceMappingURL=app.5a1655b72c5d1cb4c58e.js.map