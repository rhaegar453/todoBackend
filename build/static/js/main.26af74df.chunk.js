(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a(77)},44:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(17),s=a.n(o),r=(a(44),a(4)),c=a(5),i=a(7),m=a(6),u=a(8),p=a(79),d=a(87),h=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-dark navbar-expand-md fixed-top bg-dark"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(p.a,{className:"navbar-brand",to:"/"},l.a.createElement("i",{className:"icon ion-ios-football"}),"\xa0GoalTracker"),l.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#navcol-1"},l.a.createElement("span",{className:"sr-only"},"Toggle navigation"),l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse d-flex flex-row-reverse",id:"navcol-1"},l.a.createElement(p.a,{to:"/signUp"},l.a.createElement("button",{className:"btn btn-primary auth",type:"button",id:"authbuttons"},"Sign Up")),l.a.createElement(p.a,{to:"/signIn"},l.a.createElement("button",{className:"btn btn-outline-primary",type:"button",onClick:this.loginHanlder},"Sign In"))))))}}]),t}(l.a.Component),g=Object(d.a)(h),b=(l.a.Component,a(84)),f=a(24),E=a.n(f),v=a(86),N=a(80),y=a(81),j=a(82),w=a(83),O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).toggle=function(){console.log(a.backgroundColor),a.setState({collapse:!a.state.collapse})},a.state={collapse:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){this.state.collapse;var e=l.a.createElement(E.a,{duration:Date.now(),date:this.props.endDate});return l.a.createElement("div",null,l.a.createElement(v.a,{isOpen:this.state.collapse},l.a.createElement(N.a,null,l.a.createElement(y.a,{onClick:this.toggle},l.a.createElement("h3",null,this.props.title)),l.a.createElement(j.a,null,l.a.createElement("p",null,"Description:",this.props.description),l.a.createElement("p",null,"Time Remaining:",e),l.a.createElement(w.a,{color:"primary",onClick:this.props.completeTask},"Assign Completed")))),l.a.createElement("div",null,l.a.createElement("li",{className:"list-group-item d-flex flex-row justify-content-between",onClick:this.toggle},l.a.createElement("span",null,this.props.title),l.a.createElement("span",{className:"badge badge-primary"},e))))}}]),t}(l.a.Component),k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).assignComplete=function(e){a.setState(function(e){console.log(e)})},a.state={tasks:[{id:1,title:"Hello world this is Shivaraj Bakale",description:"Hello World this is Shivaraj Bakale",endDate:"2019-02-13",completed:!1},{id:2,title:"Shankar Bakale constructing a house",description:"I am constructing a new house",endDate:"2019-03-13",completed:!0}]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"container",id:"startContainer"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10"},l.a.createElement("h1",{className:"d-flex flex-row justify-content-between"},"My Tasks",l.a.createElement("button",{className:"btn btn-primary",type:"button","data-target":"#myModal"},"Create New Task"),l.a.createElement("h2",null,"Days Left")))),l.a.createElement("div",{className:"contentdiv"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10"},l.a.createElement("ul",{className:"list-group"},this.state.tasks.map(function(t){return l.a.createElement(O,{key:t.id,completed:t.completed,completeTask:function(){return e.assignComplete(t.id)},title:t.title,description:t.description,endDate:t.endDate})})))))))}}]),t}(l.a.Component),C=a(19),S=a.n(C),x=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),S()({method:"POST",url:"http://localhost:3001/api/auth/login",data:{email:a.state.email,password:a.state.password},config:{headers:{"Content-Type":"application/json"}}}).then(function(e){console.log(e.data.token),localStorage.setItem("jwt",e.data.token),setTimeout(function(){a.props.history.push("/")},3e3)}).catch(function(e){console.log(e.response)})},a.state={email:"",password:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"login-clean"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("h2",{className:"sr-only"},"Login Form"),l.a.createElement("div",{className:"illustration"},l.a.createElement("h1",null,"Login"),l.a.createElement("i",{className:"icon ion-ios-football"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{autoComplete:"off",className:"form-control",type:"email",name:"email",placeholder:"Email",onChange:function(t){return e.setState({email:t.target.value})},value:this.state.email})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{onChange:function(t){return e.setState({password:t.target.value})},autoComplete:"off",className:"form-control",type:"password",name:"password",placeholder:"Password",value:this.state.password})),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{className:"btn btn-primary btn-block",type:"submit"},"Log In")))))}}]),t}(l.a.Component),T=Object(d.a)(x),D=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),S()({method:"POST",url:"http://localhost:3001/api/auth/register",data:{email:a.state.email,password:a.state.password,username:a.state.username},config:{headers:{"Content-Type":"application/json"}}}).then(function(e){console.log(e),0==e.data.success?(a.setState({error:{error:!0,errorMessage:"User Already Exists"}}),console.log(a.state)):a.setState({success:{success:!0,succceMessage:"Successfully Authenticated..Redirecting to login"}}),setTimeout(function(){a.props.history.push("/signin")},3e3)}).catch(function(e){console.log(e.response)})},a.state={email:"",password:"",username:"",error:{error:!1,errorMessage:""},success:{success:!1,succceMessage:""}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"login-clean"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("h2",{className:"sr-only"},"Login Form"),l.a.createElement("div",{className:"illustration"},l.a.createElement("h1",null,"Sign Up"),l.a.createElement("i",{className:"icon ion-ios-football"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{autoComplete:"off",className:"form-control",type:"email",name:"email",placeholder:"Email",onChange:function(t){e.setState({email:t.target.value})}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{autoComplete:"off",className:"form-control",type:"text",placeholder:"Username",onChange:function(t){e.setState({username:t.target.value})}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{autoComplete:"off",className:"form-control",type:"password",name:"password",placeholder:"Password",onChange:function(t){e.setState({password:t.target.value})}})),this.state.error.error?l.a.createElement("p",null,this.state.error.errorMessage):null,this.state.success.success?l.a.createElement("p",null,this.state.success.succceMessage):null,l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{className:"btn btn-primary btn-block",type:"submit"},"Sign Up")))))}}]),t}(l.a.Component),M=Object(d.a)(D),I=function(e){function t(e){return Object(r.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{marginTop:"80px"}},l.a.createElement(g,null),l.a.createElement(b.a,{path:"/",exact:!0,component:k}),l.a.createElement(b.a,{path:"/signin",exact:!0,component:T}),l.a.createElement(b.a,{path:"/signup",exact:!0,component:M}))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=a(85);s.a.render(l.a.createElement(U.a,null,l.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,2,1]]]);
//# sourceMappingURL=main.26af74df.chunk.js.map