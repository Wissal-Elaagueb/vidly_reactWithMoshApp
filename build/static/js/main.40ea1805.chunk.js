(this.webpackJsonpvidly=this.webpackJsonpvidly||[]).push([[0],{51:function(e,t,n){},88:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(2),s=n.n(a),c=n(29),o=n.n(c),i=(n(51),n(3)),l=n(4),u=n(5),d=n(7),h=n(6),j=n(18),b=n(30),m=n(92),p=function(e){var t=e.user;return Object(r.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(r.jsx)(b.a,{class:"navbar-brand",to:"/",children:"Navbar"}),Object(r.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{class:"navbar-toggler-icon"})}),Object(r.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(r.jsxs)("div",{class:"navbar-nav",children:[Object(r.jsx)(m.a,{className:"nav-item nav-link",to:"/movies",children:"  Movies"}),Object(r.jsx)(m.a,{className:"nav-item nav-link",to:"/customers",children:"Customers"}),Object(r.jsx)(m.a,{className:"nav-item nav-link",to:"/rentals",children:"Rentals"}),!t&&Object(r.jsxs)(s.a.Fragment,{children:[Object(r.jsx)(m.a,{className:"nav-item nav-link",to:"/login",children:"Login"}),Object(r.jsx)(m.a,{className:"nav-item nav-link",to:"/register",children:"Register"})]}),t&&Object(r.jsxs)(s.a.Fragment,{children:[Object(r.jsx)(m.a,{className:"nav-item nav-link",to:"/profile",children:t.name}),Object(r.jsx)(m.a,{className:"nav-item nav-link",to:"/logout",children:"Logout"})]})]})})]})},v=n(95),f=n(45),O=n(93),g=function(){return Object(r.jsx)("h1",{children:"Customers"})},x=function(){return Object(r.jsx)("h1",{children:"Rentals"})},y=n(31),k=n(8),S=n.n(k),w=n(12),C=n(14),N=n(17),I=n.n(N);var P={init:function(){},log:function(e){console.error(e)}};I.a.defaults.baseURL="https://warm-crag-23503.herokuapp.com/api",I.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(P.log(e),j.toast.error("An unexpected error occurred.")),Promise.reject(e)}));var R={get:I.a.get,post:I.a.post,put:I.a.put,delete:I.a.delete,setJwt:function(e){I.a.defaults.headers.common["x-auth-token"]=e}},_="/movies";function D(e){return R.delete("/movies/"+e)}function A(e){return R.get("/movies/"+e)}function M(e){if(e._id){var t=Object(i.a)({},e);return delete t._id,R.put("/movies/"+e._id,t)}return R.post(_,e)}var L=n(15),G=n.n(L),T=function(e){var t=e.itemsCount,n=e.pageSize,a=e.onPageChange,s=e.currentPage,c=Math.ceil(t/n);if(1===c)return null;var o=G.a.range(1,c+1);return Object(r.jsx)("nav",{children:Object(r.jsx)("ul",{className:"pagination",children:o.map((function(e){return Object(r.jsx)("li",{className:e===s?"page-item active":"page-item",children:Object(r.jsx)("a",{className:"page-link",onClick:function(){return a(e)},href:"#",children:e})},e)}))})})};function F(e,t,n){var r=(t-1)*n;return G()(e).slice(r).take(n).value()}function q(){return R.get("/genres")}var U=function(e){var t=e.items,n=e.textProperty,a=e.valueProperty,s=e.onItemSelect,c=e.selectedItem;return Object(r.jsx)("ul",{className:"list-group",children:t.map((function(e){return Object(r.jsx)("li",{onClick:function(){return s(e)},className:e===c?"list-group-item list-group-item-info":"list-group-item",children:e[n]},e[a])}))})};U.defaultProps={textProperty:"name",valueProperty:"_id"};var B=U,J=(n(42),function(e){var t="fa fa-heart";return e.liked||(t+="-o"),Object(r.jsx)("i",{onClick:e.onClick,class:t,style:{cursor:"pointer"},"aria-hidden":"true"})}),z=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).raiseSort=function(t){var n=Object(i.a)({},e.props.sortColumn);n.path===t?n.order="asc"===n.order?"desc":"asc":(n.path=t,n.order="asc"),e.props.onSort(n)},e.renderSortIcon=function(t){var n=e.props.sortColumn;return t.path!==n.path?null:"asc"===n.order?Object(r.jsx)("i",{className:"fa fa-sort-asc"}):Object(r.jsx)("i",{className:"fa fa-sort-desc"})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsx)("thead",{children:Object(r.jsx)("tr",{children:this.props.columns.map((function(t){return Object(r.jsxs)("th",{className:"clickable",onClick:function(){return e.raiseSort(t.path)},children:[t.label," ",e.renderSortIcon(t)]},t.path||t.key)}))})})}}]),n}(a.Component),Q=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).renderCell=function(e,t){return t.content?t.content(e):G.a.get(e,t.path)},e.createKey=function(e,t){return e._id+(t.path||t.key)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.data,a=t.columns;return Object(r.jsx)("tbody",{children:n.map((function(t){return Object(r.jsx)("tr",{children:a.map((function(n){return Object(r.jsx)("td",{children:e.renderCell(t,n)},e.createKey(t,n))}))},t._id)}))})}}]),n}(a.Component),E=function(e){var t=e.columns,n=e.data,a=e.onSort,s=e.sortColumn;return Object(r.jsxs)("table",{className:"table",children:[Object(r.jsx)(z,{columns:t,sortColumn:s,onSort:a}),Object(r.jsx)(Q,{data:n,columns:t})]})},W=n(43),K=n.n(W),V="/auth";function H(){return(H=Object(w.a)(S.a.mark((function e(t,n){var r,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.post(V,{email:t,password:n});case 2:r=e.sent,a=r.data,localStorage.setItem("token",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(){return localStorage.getItem("token")}R.setJwt(X());var Y={login:function(e,t){return H.apply(this,arguments)},logout:function(){localStorage.removeItem("token")},getCurrentUser:function(){try{var e=localStorage.getItem("token");return K()(e)}catch(t){return null}},loginWithJwt:function(e){localStorage.setItem("token",e)},getJwt:X},Z=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n),(e=t.call(this)).columns=[{path:"title",label:"Title",content:function(e){return Object(r.jsx)(b.a,{to:"/movies/".concat(e._id),children:e.title})}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"like",content:function(t){return Object(r.jsx)(J,{liked:t.liked,onClick:function(){return e.props.onLike(t)}})}}],e.deleteColumn={key:"delete",content:function(t){return Object(r.jsx)("button",{onClick:function(){return e.props.onDelete(t._id)},className:"btn btn-danger",children:"Delete"})}};var a=Y.getCurrentUser();return a&&a.isAdmin&&e.columns.push(e.deleteColumn),e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.movies,n=e.onSort,a=e.sortColumn;return Object(r.jsx)(E,{columns:this.columns,data:t,sortColumn:a,onSort:n})}}]),n}(a.Component),$=function(e){var t=e.value,n=e.onChange;return Object(r.jsx)("input",{name:"query",type:"text",className:"form-control my-3",placeholder:"Search...",value:t,onChange:function(e){return n(e.currentTarget.value)}})},ee=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e,r;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(r=t.call.apply(t,[this].concat(s))).state=(e={movies:[],genres:[],selectedGenre:null,currentPage:1,searchQuery:""},Object(C.a)(e,"selectedGenre",null),Object(C.a)(e,"pageSize",4),Object(C.a)(e,"sortColumn",{path:"title",order:"asc"}),e),r.handleDelete=function(){var e=Object(w.a)(S.a.mark((function e(t){var n,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.state.movies,a=n.filter((function(e){return e._id!==t})),r.setState({movies:a}),e.prev=3,e.next=6,D(t);case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(3),e.t0.response&&404===e.t0.response.status&&j.toast.error("this movie has already been deleted."),r.setState({movies:n});case 12:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t){return e.apply(this,arguments)}}(),r.handleLike=function(e){var t=Object(y.a)(r.state.movies),n=t.indexOf(e);t[n].liked=!t[n].liked,r.setState({movies:t})},r.handlePageChange=function(e){r.setState({currentPage:e})},r.handleGenreSelect=function(e){r.setState({selectedGenre:e,searchQuery:"",currentPage:1})},r.handleSearch=function(e){r.setState({searchQuery:e,selectedGenre:null,currentPage:1})},r.handleSort=function(e){r.setState({sortColumn:e})},r.getPagedData=function(){var e=r.state,t=e.pageSize,n=e.currentPage,a=e.selectedGenre,s=e.sortColumn,c=e.searchQuery,o=r.state.movies;c?o=r.state.movies.filter((function(e){return e.title.toLowerCase().startsWith(c.toLowerCase())})):a&&a._id&&(o=r.state.movies.filter((function(e){return e.genre._id===a._id})));var i=F(G.a.orderBy(o,[s.path],[s.order]),n,t);return{totaCount:o.length,data:i}},r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(w.a)(S.a.mark((function e(){var t,n,r,a,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:return t=e.sent,n=t.data,r=[{name:"All Genres",_id:""}].concat(Object(y.a)(n)),e.next=7,R.get(_);case 7:a=e.sent,s=a.data,this.setState({movies:s,genres:r});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.pageSize,n=e.currentPage,a=e.selectedGenre,s=this.getPagedData(),c=s.totaCount,o=s.data,i=this.props.user;return Object(r.jsx)("div",{children:0===this.state.movies.length?Object(r.jsxs)("div",{children:[Object(r.jsx)(b.a,{className:"btn btn-primary m-2",to:"/movies/new",children:"New Movie"}),Object(r.jsx)("h2",{children:"There are no movies in the databases. "})]}):Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-3",children:Object(r.jsx)(B,{items:this.state.genres,onItemSelect:this.handleGenreSelect,selectedItem:a})}),Object(r.jsxs)("div",{className:"col",children:[i&&Object(r.jsx)(b.a,{className:"btn btn-primary m-2",to:"/movies/new",children:"New Movie"}),Object(r.jsxs)("h2",{children:["Showing ",c," in the Data"]}),Object(r.jsx)($,{value:this.state.searchQuery,onChange:this.handleSearch}),Object(r.jsx)(Z,{movies:o,sortColumn:this.state.sortColumn,onDelete:this.handleDelete,onLike:this.handleLike,onSort:this.handleSort}),Object(r.jsx)(T,{itemsCount:c,pageSize:t,currentPage:n,onPageChange:this.handlePageChange})]})]})})})}}]),n}(a.Component),te=function(){return Object(r.jsx)("h1",{children:"Not Found"})},ne=n(9),re=n.n(ne),ae=n(44),se=n(19),ce=function(e){var t=e.name,n=e.label,a=e.error,s=Object(se.a)(e,["name","label","error"]);return Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:t,children:n}),Object(r.jsx)("input",Object(i.a)(Object(i.a)({},s),{},{id:t,name:t,className:"form-control"})),a&&Object(r.jsx)("div",{className:"alert alert-danger",children:a})]})},oe=function(e){var t=e.name,n=e.label,a=e.options,s=e.error,c=Object(se.a)(e,["name","label","options","error"]);return Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:t,children:n}),Object(r.jsx)("select",Object(i.a)(Object(i.a)({},c),{},{id:t,name:t,className:"form-control",children:a.map((function(e){return Object(r.jsx)("option",{value:e._id,children:e.name},e._id)}))})),s&&Object(r.jsx)("div",{className:"alert alert-danger",children:s})]})},ie=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{},errors:{}},e.validate=function(){var t=re.a.validate(e.state.data,e.schema,{abortEarly:!1}).error;if(!t)return null;var n,r={},a=Object(ae.a)(t.details);try{for(a.s();!(n=a.n()).done;){var s=n.value;r[s.path[0]]=s.message}}catch(c){a.e(c)}finally{a.f()}return r},e.validateProperty=function(t){var n=t.name,r=t.value,a=Object(C.a)({},n,r),s=Object(C.a)({},n,e.schema[n]),c=re.a.validate(a,s).error;return c?c.details[0].message:null},e.handleChange=function(t){var n=t.currentTarget,r=Object(i.a)({},e.setState.errors),a=e.validateProperty(n);a?r[n.name]=a:delete r[n.name];var s=Object(i.a)({},e.state.data);s[n.name]=n.value,e.setState({data:s,errors:r})},e}return Object(u.a)(n,[{key:"renderButton",value:function(e){return Object(r.jsx)("button",{disabled:this.validate(),className:"btn btn-primary",children:e})}},{key:"renderSelect",value:function(e,t,n){var a=this.state,s=a.data,c=a.errors;return Object(r.jsx)(oe,{name:e,label:t,value:s[e],onChange:this.handleChange,error:c[e],options:n})}},{key:"renderInput",value:function(e,t,n){var a=this.state,s=a.data,c=a.errors;return Object(r.jsx)(ce,{name:e,label:t,value:s[e],onChange:this.handleChange,error:c[e],type:n})}}]),n}(a.Component),le=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{username:"",password:""},errors:{}},e.schema={username:re.a.string().required().label("Username"),password:re.a.string().required().label("Password")},e.handleSubmit=function(t){t.preventDefault();var n=e.validate();e.setState({errors:n||{}}),e.doSubmit()},e.doSubmit=Object(w.a)(S.a.mark((function t(){var n,r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Y.login(e.state.data.username,e.state.data.password);case 3:n=e.props.location.state,window.location=n?n.from.pathname:"/",t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((r=Object(i.a)({},e.state.errors)).username=t.t0.response.data,e.setState({errors:r}));case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),e}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderButton("Login")]})]})}}]),n}(ie),ue=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){Y.logout(),window.location="/"}},{key:"render",value:function(){return null}}]),n}(a.Component);function de(e){return R.post("/users",{email:e.email,password:e.password,name:e.name})}var he=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{email:"",password:"",name:""},errors:{}},e.schema={email:re.a.string().email().required().label("Email"),password:re.a.string().min(5).required().label("Password"),name:re.a.string().required().label("Username")},e.handleSubmit=function(t){t.preventDefault();var n=e.validate();e.setState({errors:n||{}}),e.doSubmit()},e.doSubmit=Object(w.a)(S.a.mark((function t(){var n,r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,de(e.state.data);case 3:n=t.sent,Y.loginWithJwt(n.headers["x-auth-token"]),window.location="/",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((r=Object(i.a)({},e.state.errors)).email=t.t0.response.data,e.setState({errors:r}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Register"}),Object(r.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("email","Email"),this.renderInput("password","Password","password"),this.renderInput("name","Name"),this.renderButton("Register")]})]})}}]),n}(ie),je=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{title:"",genreId:"",numberInStock:"",dailyRentalRate:""},genres:[],errors:{}},e.schema={_id:re.a.string(),title:re.a.string().required().label("Title"),genreId:re.a.string().required().label("Genre"),numberInStock:re.a.number().min(0).max(100).required().label("Number in Stock"),dailyRentalRate:re.a.number().min(0).max(10).required().label("Daily Rental Rate")},e.mapToViewModel=function(e){return{_id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate}},e.handleSubmit=function(t){t.preventDefault();var n=e.validate();e.setState({errors:n||{}}),e.doSubmit()},e.doSubmit=Object(w.a)(S.a.mark((function t(){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(e.state.data);case 2:e.props.history.push("/movies");case 3:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(w.a)(S.a.mark((function e(){var t,n,r,a,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:if(t=e.sent,n=t.data,this.setState({genres:n}),r=this.props.match.params.id){e.next=8;break}return e.abrupt("return");case 8:return e.prev=8,e.next=11,A(r);case 11:a=e.sent,s=a.data,this.setState({data:this.mapToViewModel(s)}),e.next=20;break;case 16:if(e.prev=16,e.t0=e.catch(8),!e.t0.response||404!==e.t0.response.status){e.next=20;break}return e.abrupt("return",this.props.history.replace("/not-found"));case 20:case"end":return e.stop()}}),e,this,[[8,16]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Movie Form"}),Object(r.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("title","Title"),this.renderSelect("genreId","Genre",this.state.genres),this.renderInput("numberInStock","Number in Stock"),this.renderInput("dailyRentalRate","Rate"),this.renderButton("Save")]})]})}}]),n}(ie),be=function(e){e.path;var t=e.component,n=e.render,a=Object(se.a)(e,["path","component","render"]);return Object(r.jsx)(f.a,Object(i.a)(Object(i.a)({},a),{},{render:function(e){return Y.getCurrentUser()?t?Object(r.jsx)(t,Object(i.a)({},e)):n(e):Object(r.jsx)(O.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},me=(n(87),n(88),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Y.getCurrentUser();this.setState({user:e})}},{key:"render",value:function(){var e=this;this.state.user;return Object(r.jsxs)(s.a.Fragment,{children:[Object(r.jsx)(j.ToastContainer,{}),Object(r.jsx)(p,{user:this.state.user}),Object(r.jsx)("main",{className:"container",children:Object(r.jsxs)(v.a,{children:[Object(r.jsx)(be,{path:"/movies/new",component:je}),Object(r.jsx)(f.a,{path:"/register",component:he}),Object(r.jsx)(f.a,{path:"/login",component:le}),Object(r.jsx)(f.a,{path:"/logout",component:ue}),Object(r.jsx)(be,{path:"/movies/:id",component:je}),Object(r.jsx)(f.a,{path:"/movies",render:function(t){return Object(r.jsx)(ee,Object(i.a)(Object(i.a)({},t),{},{user:e.state.user}))}}),Object(r.jsx)(f.a,{path:"/customers",component:g}),Object(r.jsx)(f.a,{path:"/rentals",component:x}),Object(r.jsx)(f.a,{path:"/not-found",component:te}),Object(r.jsx)(O.a,{from:"/",exact:!0,to:"/movies"}),Object(r.jsx)(O.a,{to:"/not-found"})]})})]})}}]),n}(a.Component)),pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,96)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},ve=(n(89),n(94));o.a.render(Object(r.jsx)(ve.a,{children:Object(r.jsx)(me,{})}),document.getElementById("root")),pe()}},[[90,1,2]]]);
//# sourceMappingURL=main.40ea1805.chunk.js.map