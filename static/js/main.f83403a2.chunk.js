(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){},52:function(e,t,a){e.exports=a(76)},57:function(e,t,a){},58:function(e,t,a){},64:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(24),l=a.n(r),s=(a(57),a(6)),i=a(7),c=a(9),u=a(8),h=a(2),d=a(10),m=a(12),p=a(15),b=(a(58),a(23),a(78)),g=a(79),f=a(47),E=a(82),k=a(84),v=a(51),j=a(80),O=a(21),y=(a(64),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isLoggedIn:a.props.isLoggedIn},a.handleLogout=a.handleLogout.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleLogout",value:function(e){var t=this;e.preventDefault(),fetch("/logout",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){console.log(e),t.props.onLogout()}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return this.props.isLoggedIn?o.a.createElement(b.a,null,o.a.createElement(g.a,null,o.a.createElement(f.a,{lg:10},o.a.createElement(E.a,null,o.a.createElement(k.a,{className:"mynav"},o.a.createElement(v.a,null,o.a.createElement(O.LinkContainer,{to:"/"},o.a.createElement("span",{className:"navlink"},"Home"))),o.a.createElement(v.a,null,o.a.createElement(O.LinkContainer,{to:"/books"},o.a.createElement("span",{className:"navlink"},"Your Library"))),o.a.createElement(v.a,null,o.a.createElement(O.LinkContainer,{to:"/users"},o.a.createElement("span",{className:"navlink"},"Users")))))),o.a.createElement(f.a,null,o.a.createElement(E.a,{lg:2,className:"logoutPosition"},o.a.createElement(j.a,{className:"logoutBtn",onClick:this.handleLogout},"Logout"))))):o.a.createElement(b.a,null,o.a.createElement(p.c,{push:!0,to:"/"}),o.a.createElement(E.a,null,o.a.createElement(k.a,{className:"mynav"},o.a.createElement(v.a,null,o.a.createElement(O.LinkContainer,{to:"/"},o.a.createElement("span",{className:"navlink"},"Home"))),o.a.createElement(v.a,null,o.a.createElement(O.LinkContainer,{to:"/register"},o.a.createElement("span",{className:"navlink"},"Register"))),o.a.createElement(v.a,null,o.a.createElement(O.LinkContainer,{to:"/login"},o.a.createElement("span",{className:"navlink"},"Login"))))))}}]),t}(n.Component)),S=a(81),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).getQuote=function(){fetch("/quotes").then(function(e){return e.json()}).then(function(e){return a.setState({quote:e.quote})})},a.state={quote:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getQuote()}},{key:"render",value:function(){return o.a.createElement("div",{className:"imgBackground"},o.a.createElement(S.a,{className:"Home container-fluid"}),o.a.createElement("header",null,o.a.createElement("div",{className:"header"},o.a.createElement(y,{isLoggedIn:this.props.isLoggedIn,onLogout:this.props.onLogout}),o.a.createElement("div",{className:"Cover"},o.a.createElement("h1",{className:"Title"},"Build Your Own Book Club"),o.a.createElement("p",{className:"quote"},this.state.quote)))))}}]),t}(n.Component),N=a(83),L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={title:"",author:"",bookId:""},a.handleTitleChange=a.handleTitleChange.bind(Object(h.a)(a)),a.handleAuthorChange=a.handleAuthorChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleTitleChange",value:function(e){this.setState({title:e.target.value})}},{key:"handleAuthorChange",value:function(e){this.setState({author:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("/add-book",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:this.state.title,author:this.state.author})}).then(function(e){return e.json()}).then(function(e){console.log(e),t.setState({bookId:e.id}),t.props.onBookAdd(t.state.title,t.state.author,t.state.bookId),t.setState({author:""}),t.setState({title:""})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return o.a.createElement(b.a,null,o.a.createElement("h2",null,"Add a book!"),o.a.createElement(N.a,{onSubmit:this.handleSubmit},o.a.createElement(N.a.Group,{className:"titleForm",controlId:"Title"},o.a.createElement(N.a.Control,{type:"text",value:this.state.title,onChange:this.handleTitleChange,placeholder:"Title"})),o.a.createElement(N.a.Group,{className:"authorForm",controlId:"Author"},o.a.createElement(N.a.Control,{type:"text",value:this.state.author,onChange:this.handleAuthorChange,placeholder:"Author"})),o.a.createElement(j.a,{className:"btn",type:"submit",block:!0},"Submit")))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},a.handleDeleteBook=a.handleDeleteBook.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleDeleteBook",value:function(e){var t=this;e.preventDefault(),fetch("/delete-book",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:this.props.bookId})}).then(function(e){return e.json()}).then(function(e){console.log(e),t.props.onBookDelete(t.props.bookId)}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return o.a.createElement(j.a,{className:"trashButton btn",onClick:this.handleDeleteBook},o.a.createElement("span",{className:"fas fa-trash-alt"}))}}]),t}(n.Component),I=(a(73),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={bookId:a.props.bookId,updateClicked:!1,saveClicked:!1,newTitle:a.props.title,newAuthor:a.props.author},a.handleTitleChange=a.handleTitleChange.bind(Object(h.a)(a)),a.handleAuthorChange=a.handleAuthorChange.bind(Object(h.a)(a)),a.handleUpdateBook=a.handleUpdateBook.bind(Object(h.a)(a)),a.handleSaveUpdate=a.handleSaveUpdate.bind(Object(h.a)(a)),a.handleCancel=a.handleCancel.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleTitleChange",value:function(e){this.setState({newTitle:e.target.value})}},{key:"handleAuthorChange",value:function(e){this.setState({newAuthor:e.target.value})}},{key:"handleUpdateBook",value:function(e){e.preventDefault(),this.setState({updateClicked:!0})}},{key:"handleCancel",value:function(e){e.preventDefault(),this.setState({updateClicked:!1})}},{key:"handleSaveUpdate",value:function(e){var t=this;e.preventDefault(),fetch("/update-book",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:this.props.bookId,newTitle:this.state.newTitle,newAuthor:this.state.newAuthor})}).then(function(e){return e.json()}).then(function(e){console.log(e),t.props.onBookUpdate(t.props.bookId,e.id,t.state.newTitle,t.state.newAuthor),t.setState({updateClicked:!1})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return this.state.updateClicked?o.a.createElement(b.a,null,o.a.createElement("div",{className:"updateForm"},o.a.createElement(N.a,{onSubmit:this.onBookUpdate},o.a.createElement(g.a,null,o.a.createElement(f.a,null,o.a.createElement(N.a.Group,{controlId:"newTitle"},o.a.createElement(N.a.Label,null),o.a.createElement(N.a.Control,{type:"text",value:this.state.newTitle,onChange:this.handleTitleChange}))),o.a.createElement(f.a,null,o.a.createElement(N.a.Group,null,o.a.createElement(N.a.Label,null),o.a.createElement(N.a.Control,{type:"text",value:this.state.newAuthor,onChange:this.handleAuthorChange}))))),o.a.createElement(g.a,null,o.a.createElement(f.a,{sm:9}),o.a.createElement(f.a,{sme:3},o.a.createElement(j.a,{className:"updateFormBtn",onClick:this.handleCancel},o.a.createElement("i",{className:"fas fa-arrow-left"})),o.a.createElement(j.a,{className:"updateFormBtn",onClick:this.handleSaveUpdate},o.a.createElement("i",{class:"fab fa-telegram-plane"})))))):o.a.createElement(b.a,null,o.a.createElement(g.a,null,o.a.createElement(D,{bookId:this.props.bookId,onBookDelete:this.props.onBookDelete}),o.a.createElement(j.a,{className:"updateButton",onClick:this.handleUpdateBook},o.a.createElement("i",{className:"fas fa-pencil-alt"})),o.a.createElement(m.NavLink,{to:"user/".concat(this.props.userId,"/book/").concat(this.props.bookId)},this.props.title," - ",this.props.author)))}}]),t}(n.Component)),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={userId:"",books:[]},a.getUserId=a.getUserId.bind(Object(h.a)(a)),a.getBooks=a.getBooks.bind(Object(h.a)(a)),a.onBookDelete=a.onBookDelete.bind(Object(h.a)(a)),a.onBookAdd=a.onBookAdd.bind(Object(h.a)(a)),a.onBookUpdate=a.onBookUpdate.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"onBookDelete",value:function(e){var t=this.state.books.filter(function(t){return t.id!==e});this.setState({books:t})}},{key:"onBookAdd",value:function(e,t,a){var n=this.state.books;n.push({title:e,author:t,id:a}),this.setState({books:n})}},{key:"onBookUpdate",value:function(e,t,a,n){var o=this.state.books.filter(function(t){return t.id!==e});o.push({title:a,author:n,id:t}),this.setState({books:o})}},{key:"getUserId",value:function(){var e=this;fetch("/get-userid",{method:"GET",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({userId:t})}).catch(function(e){return console.error(e)})}},{key:"getBooks",value:function(){var e=this;fetch("/get-your-books",{method:"GET",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({books:t})}).catch(function(e){return console.error(e)})}},{key:"componentDidMount",value:function(){this.getBooks(),this.getUserId()}},{key:"render",value:function(){var e=this;return o.a.createElement(b.a,{className:"BookList"},o.a.createElement(g.a,null,o.a.createElement(f.a,{sm:8},o.a.createElement("h2",null,"Your Shelf"),this.state.books.map(function(t){return o.a.createElement(I,{key:t.id,title:t.title,author:t.author,bookId:t.id,userId:e.state.userId,onBookDelete:e.onBookDelete,onBookUpdate:e.onBookUpdate})})),o.a.createElement(f.a,{sm:4},o.a.createElement(L,{onBookAdd:this.onBookAdd}))))}}]),t}(o.a.Component),B=a(36),w=a.n(B),G=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={title:"",name:"",genres:[],startDate:"No date given",endDate:"No date given",authorized:!1,readers:[]},a.getAuthorization=a.getAuthorization.bind(Object(h.a)(a)),a.getTitle=a.getTitle.bind(Object(h.a)(a)),a.getName=a.getName.bind(Object(h.a)(a)),a.getBookGenres=a.getBookGenres.bind(Object(h.a)(a)),a.getStartDate=a.getStartDate.bind(Object(h.a)(a)),a.getEndDate=a.getEndDate.bind(Object(h.a)(a)),a.getReaders=a.getReaders.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"getTitle",value:function(){var e=this;fetch("/get-title",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:this.props.match.params.bookId})}).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({title:t})}).catch(function(e){return console.error(e)})}},{key:"getAuthorization",value:function(){var e=this;fetch("/get-authorization",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:this.props.match.params.id})}).then(function(t){if(200===t.status)return console.log("authorized"),e.setState({authorized:!0}),t.json()}).then(function(e){console.log(e)}).catch(function(e){return console.error(e)})}},{key:"getName",value:function(){var e=this;fetch("/get-name",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:this.props.match.params.id})}).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({name:t})}).catch(function(e){return console.error(e)})}},{key:"getBookGenres",value:function(){var e=this;fetch("/get-bookgenres",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:this.props.match.params.bookId})}).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({genres:t})}).catch(function(e){return console.error(e)})}},{key:"getStartDate",value:function(){var e=this;fetch("/get-start-date",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:this.props.match.params.id,book_id:this.props.match.params.bookId})}).then(function(e){return e.json()}).then(function(t){console.log(t),null!=t&&(t=w()(t).format("MMMM Do gggg"),e.setState({startDate:t}))}).catch(function(e){return console.error(e)})}},{key:"getEndDate",value:function(){var e=this;fetch("/get-end-date",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:this.props.match.params.id,book_id:this.props.match.params.bookId})}).then(function(e){return e.json()}).then(function(t){console.log(t),null!=t&&(t=w()(t).format("MMMM Do gggg"),e.setState({startDate:t}))}).catch(function(e){return console.error(e)})}},{key:"getReaders",value:function(){var e=this;fetch("/get-readers",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:this.props.match.params.id,book_id:this.props.match.params.bookId})}).then(function(e){return e.json()}).then(function(t){console.log(t),null!=t?e.setState({readers:t}):e.setState({readers:["No other readers"]})})}},{key:"componentDidMount",value:function(){this.getAuthorization(),this.getBookGenres(),this.getTitle(),this.getName(),this.getStartDate(),this.getEndDate(),this.getReaders()}},{key:"render",value:function(){var e=this;return console.log("######### lol",this.state),o.a.createElement(b.a,null,o.a.createElement("div",{className:"bookInfo"},o.a.createElement("br",null),o.a.createElement("h2",null,this.state.title),o.a.createElement("br",null),o.a.createElement(g.a,{className:"bookCols"},o.a.createElement(f.a,{lg:6},o.a.createElement(g.a,null,o.a.createElement("h3",null,"You started this book on: ")),o.a.createElement(g.a,null,this.state.startDate),o.a.createElement(g.a,null,o.a.createElement("h3",null,"You finished this book on:")),o.a.createElement(g.a,null,this.state.endDate)),o.a.createElement(f.a,{lg:6},o.a.createElement(g.a,null,o.a.createElement("h3",null,"Genres")),(this.state.genres||[]).map(function(e){return o.a.createElement(g.a,null,o.a.createElement("div",{key:e.genre},e.genre))}),o.a.createElement(g.a,null,o.a.createElement("h3",null,"Other Readers")),this.state.readers.map(function(t){return o.a.createElement("div",{key:t.id},o.a.createElement(g.a,null,o.a.createElement(m.NavLink,{to:"/user/".concat(t.id,"/book/").concat(e.props.match.params.bookId)},t.name)))}))),o.a.createElement("br",null),this.state.authorized&&o.a.createElement("div",null,o.a.createElement("h3",null," Want to add more info?"),o.a.createElement(m.NavLink,{to:"/user/".concat(this.props.match.params.id,"/book/").concat(this.props.match.params.bookId,"/update")},o.a.createElement(j.a,{className:"btnSignIn",sz:"lg"},"Click here")),o.a.createElement("br",null)),o.a.createElement("br",null)))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isLoggedIn:a.props.isLoggedIn,email:"",password:""},a.handleEmailChange=a.handleEmailChange.bind(Object(h.a)(a)),a.handlePasswordChange=a.handlePasswordChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("/login",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:this.state.email,password:this.state.password})}).then(function(e){if(202===e.status)return console.log("SUCCESSS"),t.props.onLogin(),e.json();401===e.status&&console.log("uh-oh")}).then(function(e){console.log(e)}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return this.props.isLoggedIn?o.a.createElement(p.c,{push:!0,to:"/books"}):o.a.createElement(b.a,{className:"RegistrationLogin"},o.a.createElement("br",null),o.a.createElement("h2",null,"Login"),o.a.createElement(N.a,{onSubmit:this.handleSubmit},o.a.createElement(g.a,null,o.a.createElement(f.a,null,o.a.createElement(N.a.Group,{controlId:"forEmail"},o.a.createElement(N.a.Label,null,"Email:"),o.a.createElement(N.a.Control,{type:"email",value:this.state.email,required:!0,onChange:this.handleEmailChange}))),o.a.createElement(f.a,null,o.a.createElement(N.a.Group,{controlId:"password"},o.a.createElement(N.a.Label,null,"Password:"),o.a.createElement(N.a.Control,{type:"password",value:this.state.password,required:!0,onChange:this.handlePasswordChange})))),o.a.createElement("br",null),o.a.createElement(j.a,{className:"btnSignIn",type:"submit",size:"lg",block:!0},"Sign In"),o.a.createElement("br",null)))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isLoggedIn:a.props.isLoggedIn,fname:"",lname:"",email:"",password:""},a.handleFnameChange=a.handleFnameChange.bind(Object(h.a)(a)),a.handleLnameChange=a.handleLnameChange.bind(Object(h.a)(a)),a.handleEmailChange=a.handleEmailChange.bind(Object(h.a)(a)),a.handlePasswordChange=a.handlePasswordChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleFnameChange",value:function(e){this.setState({fname:e.target.value})}},{key:"handleLnameChange",value:function(e){this.setState({lname:e.target.value})}},{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("/register",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({fname:this.state.fname,lname:this.state.lname,email:this.state.email,password:this.state.password})}).then(function(e){return e.json()}).then(function(e){console.log(e),t.props.onLogin()}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return this.props.isLoggedIn?o.a.createElement(p.c,{push:!0,to:"/books"}):o.a.createElement(b.a,{className:"RegistrationLogin"},o.a.createElement("br",null),o.a.createElement("h2",null,"Register"),o.a.createElement(N.a,{onSubmit:this.handleSubmit},o.a.createElement(g.a,null,o.a.createElement(f.a,null,o.a.createElement(N.a.Group,{controlId:"formFname"},o.a.createElement(N.a.Label,null,"First Name:"),o.a.createElement(N.a.Control,{type:"text",value:this.state.fname,required:!0,onChange:this.handleFnameChange}))),o.a.createElement(f.a,null,o.a.createElement(N.a.Group,{controlId:"formLname"},o.a.createElement(N.a.Label,null,"Last Name:"),o.a.createElement(N.a.Control,{type:"text",value:this.state.lname,required:!0,onChange:this.handleLnameChange})))),o.a.createElement(g.a,null,o.a.createElement(f.a,null,o.a.createElement(N.a.Group,{controlId:"forEmail"},o.a.createElement(N.a.Label,null,"Email:"),o.a.createElement(N.a.Control,{type:"email",value:this.state.email,required:!0,onChange:this.handleEmailChange}))),o.a.createElement(f.a,null,o.a.createElement(N.a.Group,{controlId:"password"},o.a.createElement(N.a.Label,null,"Password:"),o.a.createElement(N.a.Control,{type:"password",value:this.state.password,required:!0,onChange:this.handlePasswordChange})))),o.a.createElement("br",null),o.a.createElement(j.a,{className:"btnSignIn",type:"submit",size:"lg",block:!0},"Sign Up"),o.a.createElement("br",null)))}}]),t}(n.Component),U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={users:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(m.NavLink,{to:"/user/".concat(this.props.userId,"/books")},o.a.createElement(j.a,{className:"userBtn",block:!0},this.props.name))}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={users:[]},a.getUsers=a.getUsers.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"getUsers",value:function(){var e=this;fetch("/get-users",{method:"GET",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({users:t})}).catch(function(e){return console.error(e)})}},{key:"componentDidMount",value:function(){this.getUsers()}},{key:"render",value:function(){return o.a.createElement(b.a,{className:"userList"},o.a.createElement("h2",null,"Users"),o.a.createElement(f.a,null,this.state.users.map(function(e){return o.a.createElement(U,{key:e.id,name:e.name,userId:e.id})}),o.a.createElement("br",null)))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(s.a)(this,t),a=Object(c.a)(this,Object(u.a)(t).call(this,e)),console.log(a.props.match.params.id),console.log(JSON.stringify({id:a.props.match.params.id})),a.state={books:[],name:""},a.getBooks=a.getBooks.bind(Object(h.a)(a)),a.getName=a.getName.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"getName",value:function(){var e=this;fetch("/get-name",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:this.props.match.params.id})}).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({name:t})}).catch(function(e){return console.error(e)})}},{key:"getBooks",value:function(){var e=this;fetch("/get-user-books",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:this.props.match.params.id})}).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({books:t})}).catch(function(e){return console.error(e)})}},{key:"componentDidMount",value:function(){this.getBooks(),this.getName()}},{key:"render",value:function(){var e=this;return o.a.createElement(b.a,null,o.a.createElement("div",{className:"userBooks"},o.a.createElement("h2",{className:"userShelf"},this.state.name,"'s Shelf"),o.a.createElement("div",null,this.state.books.map(function(t){return o.a.createElement(g.a,{key:t.id},o.a.createElement("i",{className:"fas fa-book"}),o.a.createElement(m.NavLink,{to:"/user/".concat(e.props.match.params.id,"/book/").concat(t.id)},t.title," - ",t.author))}),o.a.createElement("br",null))))}}]),t}(n.Component),R=a(37),z=(a(75),function(e){function t(e){var a;return Object(s.a)(this,t),a=Object(c.a)(this,Object(u.a)(t).call(this,e)),console.log(a.props.match.params.bookId),a.state={genres:[],selectedGenres:[],startDate:"",endDate:"",title:""},a.getGenres=a.getGenres.bind(Object(h.a)(a)),a.handleSelect=a.handleSelect.bind(Object(h.a)(a)),a.handleDeselect=a.handleDeselect.bind(Object(h.a)(a)),a.handleStartDateChange=a.handleStartDateChange.bind(Object(h.a)(a)),a.handleEndDateChange=a.handleEndDateChange.bind(Object(h.a)(a)),a.handleSubmitGenres=a.handleSubmitGenres.bind(Object(h.a)(a)),a.handleSubmitStartDate=a.handleSubmitStartDate.bind(Object(h.a)(a)),a.handleSubmitEndDate=a.handleSubmitEndDate.bind(Object(h.a)(a)),a.getTitle=a.getTitle.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleSelect",value:function(e){var t=this.state.selectedGenres.concat(e);this.setState({selectedGenres:t})}},{key:"handleDeselect",value:function(e){var t=this.state.selectedGenres.filter(function(t){for(var a=0;a<e.length;a++)if(e[a].text===t.text)return!1;return!0});this.setState({selectedGenres:t})}},{key:"handleStartDateChange",value:function(e){this.setState({startDate:e.target.value})}},{key:"handleEndDateChange",value:function(e){this.setState({endDate:e.target.value})}},{key:"handleSubmitStartDate",value:function(e){e.preventDefault(),fetch("/book/set-start-date",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:this.props.match.params.bookId,start:this.state.startDate})}).then(function(e){return e.json()}).then(function(e){console.log(e)}).catch(function(e){return console.error(e)})}},{key:"handleSubmitEndDate",value:function(e){e.preventDefault(),fetch("/book/set-end-date",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:this.props.match.params.bookId,end:this.state.endDate})}).then(function(e){return e.json()}).then(function(e){console.log(e)}).catch(function(e){return console.error(e)})}},{key:"handleSubmitGenres",value:function(e){e.preventDefault(),fetch("/set-genres",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:this.props.match.params.bookId,genres:this.state.selectedGenres})}).then(function(e){return e.json()}).then(function(e){console.log(e)}).catch(function(e){return console.error(e)})}},{key:"getGenres",value:function(){var e=this;fetch("/get-genres",{method:"GET",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({genres:t})}).catch(function(e){return console.error(e)})}},{key:"getTitle",value:function(){var e=this;fetch("/get-title",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:this.props.match.params.bookId})}).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({title:t})}).catch(function(e){return console.error(e)})}},{key:"componentDidMount",value:function(){this.getGenres(),this.getTitle()}},{key:"render",value:function(){var e=this,t=this.state.genres.filter(function(t){for(var a=0;a<e.state.selectedGenres.length;a++)if(e.state.selectedGenres[a].text===t.text)return!1;return!0});return o.a.createElement(b.a,null,o.a.createElement("div",{className:"BookForm"},o.a.createElement("h2",null,"Add info for ",this.state.title),o.a.createElement("br",null),o.a.createElement("div",{className:"forms"},o.a.createElement(g.a,null,o.a.createElement(N.a,{onSubmit:this.handleSubmitGenres},o.a.createElement(f.a,null,o.a.createElement(N.a.Label,null,"Select Book Genre(s)"),o.a.createElement(N.a.Group,{controlId:"filteredMultiAdd"},o.a.createElement(R.a,{buttonText:"Add",showFilter:!0,placeholder:"type to filter",size:"6",onChange:this.handleSelect,options:t,selectedOptions:this.selectedGenres})),o.a.createElement(N.a.Group,{controlId:"filteredMultiRemove"},o.a.createElement(R.a,{buttonText:"Remove",onChange:this.handleDeselect,options:this.state.selectedGenres,showFilter:!1,size:"6"}))),o.a.createElement(j.a,{className:"multiSelectBtn",type:"submit",size:"lg"},"Submit"),o.a.createElement("br",null)),o.a.createElement(f.a,null,o.a.createElement(N.a,{onSubmit:this.handleSubmitStartDate},o.a.createElement(g.a,null,o.a.createElement(N.a.Label,null,"Start date:")),o.a.createElement(g.a,null,o.a.createElement("input",{type:"date",name:"start",value:this.state.startDate,onChange:this.handleStartDateChange}),o.a.createElement(j.a,{className:"btnDate",type:"submit"},"Submit")),o.a.createElement("br",null)),o.a.createElement(N.a,{onSubmit:this.handleSubmitEndDate},o.a.createElement(g.a,null,o.a.createElement(N.a.Label,null,"End date:")),o.a.createElement(g.a,null,o.a.createElement("input",{type:"date",name:"end",value:this.state.endDate,onChange:this.handleEndDateChange}),o.a.createElement(j.a,{className:"btnDate",type:"submit"},"Submit"))))))))}}]),t}(n.Component)),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isLoggedIn:!1},a.onLogin=a.onLogin.bind(Object(h.a)(a)),a.onLogout=a.onLogout.bind(Object(h.a)(a)),a.renderLogin=a.renderLogin.bind(Object(h.a)(a)),a.renderRegister=a.renderRegister.bind(Object(h.a)(a)),a.renderHome=a.renderHome.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"onLogin",value:function(){this.setState({isLoggedIn:!0})}},{key:"onLogout",value:function(){this.setState({isLoggedIn:!1})}},{key:"renderLogin",value:function(){return o.a.createElement(A,{onLogin:this.onLogin,isLoggedIn:this.state.isLoggedIn})}},{key:"renderRegister",value:function(){return o.a.createElement(P,{onLogin:this.onLogin,isLoggedIn:this.state.isLoggedIn})}},{key:"renderHome",value:function(){return o.a.createElement(C,{onLogout:this.onLogout,isLoggedIn:this.state.isLoggedIn})}},{key:"render",value:function(){return o.a.createElement(m.BrowserRouter,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"App container"},o.a.createElement(p.d,{path:"/",component:this.renderHome}),o.a.createElement(p.d,{path:"/register",component:this.renderRegister}),o.a.createElement(p.d,{path:"/login",component:this.renderLogin}),o.a.createElement(p.d,{path:"/books",component:T}),o.a.createElement(p.d,{exact:!0,path:"/user/:id/book/:bookId",component:G}),o.a.createElement(p.d,{path:"/user/:id/book/:bookId/update",component:z}),o.a.createElement(p.d,{path:"/users",component:J}),o.a.createElement(p.d,{path:"/user/:id/books",component:M}))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[52,1,2]]]);
//# sourceMappingURL=main.f83403a2.chunk.js.map