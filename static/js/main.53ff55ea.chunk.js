(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){e.exports=a(213)},112:function(e,t,a){},120:function(e,t,a){},122:function(e,t,a){},124:function(e,t,a){},143:function(e,t,a){},196:function(e,t,a){},213:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(43),i=a.n(c),o=a(69),s=(a(112),a(70)),l=a.n(s),u=a(94),m=a(18),d=a(19),p=a(21),h=a(20),f=a(22),g=a(49),b=a(92),E=a(219),v=a(217),k=a(218),j=a(55),y=a(93),O=a(50),w=(a(120),function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"lander"},r.a.createElement("h1",null,"Extinctathon"),r.a.createElement("p",null,"Monitored by MaddAddam. Adam named the living animals, MaddAddam names the dead ones."),this.props.isAuthenticated&&r.a.createElement("h2",null,"Welcome Back Crake")))}}]),t}(n.Component)),A=(a(122),function(){return r.a.createElement("div",{className:"NotFound"},r.a.createElement("h3",null,"Sorry, page not found!"))}),x=a(96),L=a(214),C=a(215),B=a(220),S=a(216),F=(a(124),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(x.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),"crake"===a.state.email&&"oryx"===a.state.password?(a.props.userHasAuthenticated(!0),a.props.history.push("/")):alert("Invalid Login")},a.state={email:"",password:""},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"validateForm",value:function(){return this.state.email.length>0&&this.state.password.length>0}},{key:"render",value:function(){return r.a.createElement("div",{className:"Login"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(L.a,{controlId:"email",bsSize:"large"},r.a.createElement(C.a,null,"User"),r.a.createElement(B.a,{autoFocus:!0,onChange:this.handleChange})),r.a.createElement(L.a,{controlId:"password",bsSize:"large"},r.a.createElement(C.a,null,"Password"),r.a.createElement(B.a,{value:this.state.password,onChange:this.handleChange,type:"password"})),r.a.createElement(S.a,{block:!0,bsSize:"large",disabled:!this.validateForm(),type:"submit"},"Login")))}}]),t}(n.Component)),I=(a(143),n.Component,a(104)),M=function(e){var t=e.component,a=e.props,n=Object(I.a)(e,["component","props"]);return r.a.createElement(O.a,Object.assign({},n,{render:function(e){return r.a.createElement(t,Object.assign({},e,a))}}))},G=a(101),N=a.n(G),P={info:{desciption:"Gives specific information for commands",usage:"info <command>",fn:function(e){return"echo"===e?"echo <string>":"ls"===e?"ls <-a>":"run"===e?"run <executable> <user> <password> *note user/password must be a string":"cat"===e?"cat test":"decrypt"===e?"":void 0}},echo:{description:"Echo a passed string.",usage:"echo <string>",fn:function(){return"".concat(Array.from(arguments).join(" "))}},ls:{description:"List all directories",usage:"ls",fn:function(e){return"-a"===e?".User.txt .keyPass.txt home trash misc paradice.exe":"home trash misc paradice.exe"}},run:{description:"Runs executable",usage:"run <executable>",fn:function(e,t,a){return"paradice.exe"===e?"red-necked-crake"===t&&"blysspluss"===a?"Burhinus grallarius":"invalid credentials":"Unknown .exe"}},cat:{description:"Reads content of text files",usage:"cat <filename>",fn:function(e){return".User.txt"===e?"75 73 65 72 3a 72 65 64 2d 6e 65 63 6b 65 64 2d 63 72 61 6b 65":".keyPass.txt"===e?"MIIBIjANBgkqhkiG9w0BAQEFA0mQV8odb6qgdLT0Tk1PsbviMMt+SlABLkGGl9uUrzOjQLryJmFWsXxBGFd4emY":void 0}},decrypt:{desciption:"Decrypts given RSA string",usage:"decrypt <key>",fn:function(e){return"MIIBIjANBgkqhkiG9w0BAQEFA0mQV8odb6qgdLT0Tk1PsbviMMt+SlABLkGGl9uUrzOjQLryJmFWsXxBGFd4emY"===e?"pass:blysspluss":"invalid key"}}},H=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(N.a,{commands:P,welcomeMessage:"type 'help' to begin ",promptLabel:"crake@addam:~$"})}}]),t}(r.a.Component),Q=function(e){var t=e.childProps;return r.a.createElement(y.a,null,r.a.createElement(M,{path:"/",exact:!0,component:w,props:t}),r.a.createElement(M,{path:"/login",exact:!0,component:F,props:t}),r.a.createElement(M,{path:"/terminal",exact:!0,component:H,props:t}),r.a.createElement(M,{path:"/terminal",exact:!0,component:H,props:t}),r.a.createElement(O.a,{component:A}))},U=(a(196),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).userHasAuthenticated=function(e){a.setState({isAuthenticated:e})},a.handleLogout=function(){var e=Object(u.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:alert("Logged Out"),a.userHasAuthenticated(!1),a.props.history.push("/login");case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.state={isAuthenticated:!1},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e={isAuthenticated:this.state.isAuthenticated,userHasAuthenticated:this.userHasAuthenticated};return!this.state.isAuthenticating&&r.a.createElement("div",{className:"App container"},r.a.createElement(E.a,{fluid:!0,collapseOnSelect:!0},r.a.createElement(E.a.Header,null,r.a.createElement(E.a.Brand,null,r.a.createElement(g.a,{to:"/"},"Extinctathon")),r.a.createElement(E.a.Toggle,null)),r.a.createElement(E.a.Collapse,null,r.a.createElement(v.a,{pullRight:!0},this.state.isAuthenticated?r.a.createElement(n.Fragment,null,r.a.createElement(j.LinkContainer,{to:"/terminal"},r.a.createElement(k.a,null,"Profile")),r.a.createElement(k.a,{onClick:this.handleLogout},"Logout")):r.a.createElement(n.Fragment,null,r.a.createElement(j.LinkContainer,{to:"/signup"},r.a.createElement(k.a,null,"Signup")),r.a.createElement(j.LinkContainer,{to:"/login"},r.a.createElement(k.a,null,"Login")))))),r.a.createElement(Q,{childProps:e}))}}]),t}(n.Component)),z=Object(b.a)(U);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(o.a,{basename:"/extinct"},r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[106,2,1]]]);
//# sourceMappingURL=main.53ff55ea.chunk.js.map