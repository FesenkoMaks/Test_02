(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{10:function(t,e,n){t.exports={app:"App_app__4LEK_",title:"App_title__MjX1s"}},13:function(t,e,n){t.exports={task:"Tasks_task__1DVY6",item:"Tasks_item__2XX7x"}},16:function(t,e,n){t.exports={new:"AddNewTask_new__3RqOh"}},17:function(t,e,n){t.exports={todo:"TodoList_todo__3lZFf"}},24:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n(0),s=n.n(i),a=n(5),o=n.n(a),r=(n(24),n(10)),u=n.n(r),d=n(18),l=n(4),j=n(14),b=n(7),O=n(33),f=[{id:"111111",order:1,title:"HTML",isDone:!1},{id:"222222",order:2,title:"CSS",isDone:!0},{id:"333333",order:3,title:"Rect",isDone:!1}],h=new Promise((function(t,e){t(f)})),p=n(16),S=n.n(p),x=function(t){return Object(c.jsxs)("div",{className:S.a.new,children:[Object(c.jsx)("input",{value:t.value,onChange:t.changeInputValue}),Object(c.jsx)("button",{onClick:t.addNewTask,children:"+"})]})},g=n(13),k=n.n(g),T=function(t){return Object(c.jsx)("div",{className:k.a.task,children:t.tasks.map((function(e){return Object(c.jsxs)("div",{className:k.a.item,children:[Object(c.jsx)("input",{type:"checkbox",checked:e.isDone,onChange:function(){return t.changeTaskStatus(e.id,e.isDone)}}),e.title,Object(c.jsx)("button",{onClick:function(){return t.removeTask(e.id)},children:"X"})]},e.id)}))})},v=n(17),_=n.n(v),m=function(){var t=Object(l.c)((function(t){return t.todolist})),e=Object(l.b)(),n=Object(i.useState)(""),s=Object(d.a)(n,2),a=s[0],o=s[1];return Object(c.jsxs)("div",{className:_.a.todo,children:[Object(c.jsx)(x,{value:a,changeInputValue:function(t){o(t.target.value)},addNewTask:function(){var t=a.trim();t&&e({type:"ADD-TASK",title:t}),o("")}}),Object(c.jsx)(T,{tasks:t,removeTask:function(t){e({type:"REMOVE-TASK",taskId:t})},changeTaskStatus:function(t,n){e(function(t,e){return{type:"CHANGE-TASK-STATUS",taskId:t,isDone:e}}(t,!n))}})]})};var A,D=function(){return Object(c.jsxs)("div",{className:u.a.app,children:[Object(c.jsx)("div",{className:u.a.title,children:Object(c.jsxs)("h1",{children:["Todo",Object(c.jsx)("span",{children:"List"})]})}),Object(c.jsx)(m,{})]})},N=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),s(t),a(t)}))},w=n(3),C=Object(w.b)({todolist:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(b.a)(t.filter((function(t){return t.id!==e.taskId})));case"ADD-TASK":return[].concat(Object(b.a)(t),[{id:Object(O.a)(),order:t.length>0?t[t.length-1].order+1:1,title:e.title,isDone:!1}]);case"CHANGE-TASK-STATUS":return Object(b.a)(t.map((function(t){return t.id===e.taskId?Object(j.a)(Object(j.a)({},t),{},{isDone:e.isDone}):t})));default:return t}}});h.then((function(t){return A=t}));var I=localStorage.reduxState?JSON.parse(localStorage.reduxState):A,y=Object(w.c)(C,I);y.subscribe((function(){localStorage.reduxState=JSON.stringify(y.getState())})),o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(l.a,{store:y,children:Object(c.jsx)(D,{})})}),document.getElementById("root")),y.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(y.getState()))})),N()}},[[31,1,2]]]);
//# sourceMappingURL=main.ce6f8fdf.chunk.js.map