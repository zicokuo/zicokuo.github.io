(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{312:function(t,e,i){"use strict";i.r(e);i(79),i(50),i(85);var a={name:"categoryNavigator",data:function(){return{activeNames:[1],checked:!0,dialog:!1,items:[{title:"Home",icon:"mdi-home-city"},{title:"About",icon:"mdi-account"}]}},computed:{$categoryRouter:{get:function(){var t=this.$page.path.split("/")[1];return this.$site.pages.filter((function(e){return new RegExp("^/".concat(t),"is").test(e.path)&&e.title}))}}}},n=i(1),o=Object(n.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("p",[t._v("This Category has "+t._s(t.$categoryRouter.length-1)+" Posts")]),t._v(" "),t._l(t.$categoryRouter,(function(e,a){return i("div",{key:a},[e.title?i("router-link",{attrs:{to:e.path}},[t._v("\n      No."+t._s(a+1)+" - "+t._s(e.title)+"\n    ")]):t._e()],1)})),t._v(" "),i("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-btn",t._g({attrs:{color:"red lighten-2",dark:""}},a),[t._v("\n        Click Me\n      ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),i("v-card",[i("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n        Privacy Policy\n      ")]),t._v(" "),i("v-card-text",[t._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      ")]),t._v(" "),i("v-divider"),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          I accept\n        ")])],1)],1)],1),t._v(" "),i("v-card",{staticClass:"pa-12",attrs:{color:"indigo darken-2",flat:""}},[i("v-card",{attrs:{elevation:"12",width:"256"}},[i("v-navigation-drawer",{attrs:{floating:"",permanent:""}},[i("v-list",{attrs:{dense:"",rounded:""}},t._l(t.items,(function(e){return i("v-list-item",{key:e.title,attrs:{link:""}},[i("v-list-item-icon",[i("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)],1)],1)],2)}),[],!1,null,null,null);e.default=o.exports}}]);