webpackJsonp([0],{"2VqM":function(t,e){},"34TE":function(t,e){},"6cGV":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("7+uW"),r=o("qi+a"),i=(o("34TE"),{props:{todo:{type:Object,required:!0}},methods:{deleteTodo:function(){this.$emit("del",this.todo.id)}}}),c={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:["todo-item",t.todo.completed?"completed":""]},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.completed,expression:"todo.completed"}],staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.todo.completed)?t._i(t.todo.completed,null)>-1:t.todo.completed},on:{change:function(e){var o=t.todo.completed,n=e.target,r=!!n.checked;if(Array.isArray(o)){var i=t._i(o,null);n.checked?i<0&&t.$set(t.todo,"completed",o.concat([null])):i>-1&&t.$set(t.todo,"completed",o.slice(0,i).concat(o.slice(i+1)))}else t.$set(t.todo,"completed",r)}}}),t._v(" "),o("label",[t._v(t._s(t.todo.content))]),t._v(" "),o("button",{staticClass:"destroy",on:{click:t.deleteTodo}})])},staticRenderFns:[]};var s=o("VU/8")(i,c,!1,function(t){o("R4XP")},"data-v-493b64ff",null).exports,l={props:{filter:{type:String,required:!0},todos:{type:Array,required:!0}},data:function(){return{states:["all","active","completed"]}},computed:{unFinishedTodolength:function(){return this.todos.filter(function(t){return!t.completed}).length}},methods:{toggleFilter:function(t){this.$emit("toggle",t)},clearAllCompleted:function(){this.$emit("clearAllCompleted")}}},d={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"helper"},[o("span",{staticClass:"left"},[t._v(t._s(t.unFinishedTodolength)+" items left")]),t._v(" "),o("span",{staticClass:"tabs"},t._l(t.states,function(e){return o("span",{key:e,class:[e,t.filter===e?"actived":""],on:{click:function(o){t.toggleFilter(e)}}},[t._v("\n\t\t\t"+t._s(e)+"\n\t\t")])})),t._v(" "),o("span",{staticClass:"clear",on:{click:t.clearAllCompleted}},[t._v("clear completed")])])},staticRenderFns:[]};var a=0,u={data:function(){return{todos:[],filter:"all"}},components:{Item:s,Tabs:o("VU/8")(l,d,!1,function(t){o("xd8c")},"data-v-19786faf",null).exports},computed:{filteredTodos:function(){if("all"===this.filter)return this.todos;var t="completed"===this.filter;return this.todos.filter(function(e){return t===e.completed})}},methods:{addTodo:function(t){this.todos.unshift({id:a++,content:t.target.value.trim(),completed:!1}),t.target.value=""},deleteTodo:function(t){this.todos.splice(this.todos.findIndex(function(e){return e.id===t}),1)},toggleFilter:function(t){this.filter=t},clearAllCompleted:function(){this.todos=this.todos.filter(function(t){return!t.completed})}}},f={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"real-app"},[o("input",{staticClass:"add-input",attrs:{type:"text",autofocus:"autofocus",placeholder:"接下来要做什么？"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addTodo(e):null}}}),t._v(" "),t._l(t.filteredTodos,function(e){return o("item",{key:e.id,attrs:{todo:e},on:{del:t.deleteTodo}})}),t._v(" "),o("tabs",{attrs:{filter:t.filter,todos:t.todos},on:{toggle:t.toggleFilter,clearAllCompleted:t.clearAllCompleted}})],2)},staticRenderFns:[]};var p=o("VU/8")(u,f,!1,function(t){o("Rc2Q")},"data-v-1bd9dca1",null).exports,m={components:{Header:r.default,Footer:{data:function(){return{author:"iLeo"}},render:function(){var t=arguments[0];return t("div",{attrs:{id:"footer"}},[t("span",["Written by ",this.author])])}},Todo:p}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"cover"}}),this._v(" "),e("Header"),this._v(" "),e("Todo"),this._v(" "),e("Footer")],1)},staticRenderFns:[]};var v=o("VU/8")(m,h,!1,function(t){o("hgmc")},"data-v-893a6a4c",null).exports;o("2VqM");new n.a({render:function(t){return t(v)}}).$mount("#app")},MeyL:function(t,e){},R4XP:function(t,e){},Rc2Q:function(t,e){},c4bc:function(t,e){},hgmc:function(t,e){},mcIf:function(t,e,o){"use strict";var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"main-header"},[e("h1",[this._v("Jtodo")])])}]};e.a=n},"qi+a":function(t,e,o){"use strict";var n=o("c4bc"),r=o.n(n),i=o("mcIf");var c=function(t){o("MeyL")},s=o("VU/8")(r.a,i.a,!1,c,"data-v-6216b20c",null);e.default=s.exports},xd8c:function(t,e){}},["6cGV"]);
//# sourceMappingURL=app.b25f3e78056ce46307d4.js.map