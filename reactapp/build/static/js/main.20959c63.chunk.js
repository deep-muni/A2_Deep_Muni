(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/veggie.9e266713.png"},23:function(e,t,a){e.exports=a.p+"static/media/exotic.c329b8c6.png"},24:function(e,t,a){e.exports=a.p+"static/media/fruits.7bfa1e96.png"},25:function(e,t,a){e.exports=a.p+"static/media/essential.e6125dd6.png"},26:function(e,t,a){e.exports=a(44)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(20),c=a.n(i),l=(a(31),a(32),a(8)),r=a(3),m=a(4),o=a(6),u=a(5),d=a(1),h=a(7),p=(a(33),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={showing:!1},s.side_panel=[{name:"Cart",url:"",cname:"item hide"},{name:"Login",url:"",cname:"item hide"},{name:"Register",url:"register",cname:"item hide"},{name:"Account",url:"",cname:"item"},{name:"Category",url:"",cname:"item"},{name:"Help",url:"",cname:"item"},{name:"Admin",url:"",cname:"item"}],s.navigate=[{name:"Cart",url:""},{name:"Login",url:""},{name:"Register",url:"register"}],s.toggle=s.toggle.bind(Object(h.a)(s)),s.validate=s.validate.bind(Object(h.a)(s)),s}return Object(m.a)(a,[{key:"toggle",value:function(){var e=this.state.showing;this.setState({showing:!e})}},{key:"validate",value:function(e){if("keydown"===e.type&&13===e.keyCode||"click"===e.type){var t=document.getElementById("search").value;""===t?alert("Please enter a search string"):this.props.history.push({pathname:"/result",search:"?q="+t})}}},{key:"render",value:function(){return n.a.createElement("nav",{className:"bar"},n.a.createElement("div",{className:"menu",onClick:this.toggle}),n.a.createElement("div",{className:this.state.showing?"search-bar search-move":"search-bar"},n.a.createElement("div",{className:"search"},n.a.createElement("input",{type:"text",id:"search",placeholder:"Search",onKeyDown:this.validate})),n.a.createElement("div",{className:"search-icon",onClick:this.validate})),n.a.createElement("ul",{className:"right"},this.navigate.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("div",{className:"label"},e.name),n.a.createElement(l.b,{to:e.url,className:"link"}))}))),n.a.createElement(l.b,{to:"/"},n.a.createElement("div",{className:"logo"})),n.a.createElement("div",{className:this.state.showing?"side-panel show-panel":"side-panel"},n.a.createElement("ul",null,this.side_panel.map((function(e,t){return n.a.createElement("li",{className:e.cname,key:t},n.a.createElement("div",{className:"label"},e.name),n.a.createElement("div",{className:"arrow"}),n.a.createElement(l.b,{to:e.url,className:"link"}))})))))}}]),a}(s.Component)),v=Object(d.f)(p),E=(a(39),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).list_1=[{name:"Terms & Condition",link:""},{name:"Careers",link:""},{name:"Privacy Policy",link:""}],s.list_2=[{name:"Google",link:"",cname:"fa fa-google icon"},{name:"Facebook",link:"",cname:"fa fa-facebook icon"},{name:"Instagram",link:"",cname:"fa fa-instagram icon"},{name:"LinkedIn",link:"",cname:"fa fa-linkedin icon"},{name:"Twitter",link:"",cname:"fa fa-twitter icon"}],s.list_3=[{name:"Login",link:""},{name:"Register",link:"/register"},{name:"About Us",link:""},{name:"Contact Us",link:""},{name:"Help",link:""}],s}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("footer",{className:"foot-area"},n.a.createElement("div",{className:"logo_1"}),n.a.createElement("div",{className:"listing"},n.a.createElement("div",{className:"lists floating_1"},n.a.createElement("p",{className:"head"},"Kart"),n.a.createElement("ul",null,this.list_1.map((function(e,t){return n.a.createElement("li",{key:t,className:"items"},n.a.createElement(l.b,{to:e.link,className:"visit"}),n.a.createElement("div",{className:"label"},e.name))})))),n.a.createElement("div",{className:"lists floating_2"},n.a.createElement("p",{className:"head"},"Social"),n.a.createElement("ul",null,this.list_2.map((function(e,t){return n.a.createElement("li",{key:t,className:"items"},n.a.createElement(l.b,{to:e.link,className:"visit"}),n.a.createElement("i",{className:e.cname}),n.a.createElement("span",{className:"label"},e.name))})))),n.a.createElement("div",{className:"lists floating_3"},n.a.createElement("p",{className:"head"},"Navigate"),n.a.createElement("ul",null,this.list_3.map((function(e,t){return n.a.createElement("li",{key:t,className:"items"},n.a.createElement(l.b,{to:e.link,className:"visit"}),n.a.createElement("div",{className:"label"},e.name))}))))))}}]),a}(s.Component)),f=(a(40),a(22)),b=a.n(f),g=a(23),N=a.n(g),y=a(24),k=a.n(y),x=a(25),j=a.n(x),O=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={id:1},s.images=[{id:1,name:"veggie",source:b.a},{id:2,name:"fruit",source:k.a},{id:3,name:"exotic",source:N.a},{id:4,name:"essential",source:j.a}],s.increment=s.increment.bind(Object(h.a)(s)),s.decrement=s.decrement.bind(Object(h.a)(s)),s}return Object(m.a)(a,[{key:"increment",value:function(){var e=this.state.id;(e+=1)>this.images.length?this.setState({id:1}):this.setState({id:e})}},{key:"decrement",value:function(){var e=this.state.id;(e-=1)<1?this.setState({id:this.images.length}):this.setState({id:e})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"carousel-area"},n.a.createElement("p",{className:"heading1"},"Variety of Products"),n.a.createElement("div",{className:"image-section"},n.a.createElement("div",{className:"before",onClick:this.decrement},"\u276e"),this.images.filter((function(t){return t.id===e.state.id})).map((function(e,t){return n.a.createElement("img",{src:e.source,className:"image",width:"480px",height:"360px",key:t,alt:e.name})})),n.a.createElement("div",{className:"after",onClick:this.increment},"\u276f")))}}]),a}(s.Component),w=(a(41),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"company-section"},n.a.createElement("p",{className:"heading"},"Shopping Kart"),n.a.createElement("p",{className:"text"},"The future of Groceries Shopping"),n.a.createElement("div",{className:"goals"},n.a.createElement("div",{className:"goal"},n.a.createElement("div",{className:"section delivery"}),n.a.createElement("div",{className:"goal-title"},"Express Delivery")),n.a.createElement("div",{className:"goal"},n.a.createElement("div",{className:"section cart"}),n.a.createElement("div",{className:"goal-title"},"Inventory")),n.a.createElement("div",{className:"goal"},n.a.createElement("div",{className:"section customer"}),n.a.createElement("div",{className:"goal-title"},"Customer Service"))))}}]),a}(s.Component)),C=(a(42),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"brand-section"},n.a.createElement("p",{className:"heading"},"Brands Associated"),n.a.createElement("div",{className:"brand-area"},n.a.createElement("div",{className:"brand"}),n.a.createElement("div",{className:"brand"}),n.a.createElement("div",{className:"brand"}),n.a.createElement("div",{className:"brand"}),n.a.createElement("div",{className:"brand"}),n.a.createElement("div",{className:"brand"}),n.a.createElement("div",{className:"brand"}),n.a.createElement("div",{className:"brand"})))}}]),a}(s.Component)),P=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(v,null),n.a.createElement(w,null),n.a.createElement(O,null),n.a.createElement(C,null),n.a.createElement(E,null))}}]),a}(s.Component),S=a(17),_=(a(43),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={uname:{status:!1,text:""},fname:{status:!1,text:""},lname:{status:!1,text:""},dob:{status:!1,text:""},pass:{status:!1,text:""},cpass:{status:!1,text:""},main:{status:!1,text:""},passCheck:!1,passPolicy:{lower:{status:!1},upper:{status:!1},numeric:{status:!1},special:{status:!1},eight:{status:!1}}},s.passCheck=[{id:"lower",error:"err",success:"err success",text:"At least one lower-case character"},{id:"upper",error:"err",success:"err success",text:"At least one upper-case character"},{id:"numeric",error:"err",success:"err success",text:"At least one numeric character"},{id:"special",error:"err",success:"err success",text:"At least one special character (!@#_)"},{id:"eight",error:"err",success:"err success",text:"At least eight characters"}],s.register=s.register.bind(Object(h.a)(s)),s.validate=s.validate.bind(Object(h.a)(s)),s.hasError=s.hasError.bind(Object(h.a)(s)),s.showPolicy=s.showPolicy.bind(Object(h.a)(s)),s.hidePolicy=s.hidePolicy.bind(Object(h.a)(s)),s.checkPolicy=s.checkPolicy.bind(Object(h.a)(s)),s.policyNotSatisfied=s.policyNotSatisfied.bind(Object(h.a)(s)),s}return Object(m.a)(a,[{key:"validate",value:function(e){var t=e.target,a={},s={};switch(e.target.id){case"uname":a=""===t.value?{status:!0,text:"User Name is required"}:t.value.length<4||t.value.length>21?{status:!0,text:"Length between 4 & 21"}:{status:!1,text:""},this.setState({uname:a});break;case"fname":a=""===t.value?{status:!0,text:"First Name is required"}:t.value.length<4||t.value.length>21?{status:!0,text:"Length between 4 & 21"}:{status:!1,text:""},this.setState({fname:a});break;case"lname":a=""===t.value?{status:!0,text:"Last Name is required"}:t.value.length<4||t.value.length>21?{status:!0,text:"Length between 4 & 21"}:{status:!1,text:""},this.setState({lname:a});break;case"dob":a=""===t.value?{status:!0,text:"Date of Birth is required"}:{status:!1,text:""},this.setState({dob:a});break;case"pass":this.checkPolicy(t.value),a=""===t.value?{status:!0,text:"Password is required"}:{status:!1,text:""},t.value!==document.getElementById("cpass").value&&(s={status:!0,text:"Password does not match"}),this.setState({pass:a,cpass:s});break;case"cpass":a=""===t.value?{status:!0,text:"Confirmed Password is required"}:t.value!==document.getElementById("pass").value?{status:!0,text:"Password does not match"}:{status:!1,text:""},this.setState({cpass:a})}}},{key:"register",value:function(){var e=this;this.checkBlank()?(this.setState({main:{status:!0,text:"Please fill out empty fields!!"}}),setTimeout((function(){e.setState({main:{status:!1,text:""}})}),2500)):this.policyNotSatisfied()?(this.setState({main:{status:!0,text:"Please follow password policy"}}),this.showPolicy(),setTimeout((function(){e.setState({main:{status:!1,text:""}})}),2500)):this.hasError()?(this.setState({main:{status:!0,text:"Please correct the errors!!"}}),setTimeout((function(){e.setState({main:{status:!1,text:""}})}),2500)):(this.makeEmpty(),alert("User has been registered"))}},{key:"checkBlank",value:function(){var e,t=document.getElementsByClassName("inp"),a=Object(S.a)(t);try{for(a.s();!(e=a.n()).done;){if(""===e.value.value)return!0}}catch(s){a.e(s)}finally{a.f()}return!1}},{key:"hasError",value:function(){return this.state.uname.status||this.state.fname.status||this.state.lname.status||this.state.dob.status||this.state.pass.status||this.state.cpass.status}},{key:"checkPolicy",value:function(e){this.setState({passPolicy:{lower:{status:e.search(/[a-z]/)>=0},upper:{status:e.search(/[A-Z]/)>=0},numeric:{status:e.search(/[0-9]/)>=0},special:{status:e.search(/[!@#_]/)>=0},eight:{status:e.length>7}}})}},{key:"policyNotSatisfied",value:function(){return!(this.state.passPolicy.lower.status&&this.state.passPolicy.upper.status&&this.state.passPolicy.numeric.status&&this.state.passPolicy.special.status&&this.state.passPolicy.eight.status)}},{key:"makeEmpty",value:function(){var e,t=document.getElementsByClassName("inp"),a=Object(S.a)(t);try{for(a.s();!(e=a.n()).done;){e.value.value=""}}catch(s){a.e(s)}finally{a.f()}}},{key:"showPolicy",value:function(){this.setState({passCheck:!0})}},{key:"hidePolicy",value:function(){this.setState({passCheck:!1})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"wrapper"},n.a.createElement(v,null),n.a.createElement("div",{className:this.state.main.status?"form_area onerror":"form_area"},n.a.createElement("form",null,n.a.createElement("div",{className:"input-section"},n.a.createElement("label",{htmlFor:"uname"},"User Name"),n.a.createElement("input",{type:"text",id:"uname",className:"inp",onChange:this.validate}),this.state.uname.status?n.a.createElement("div",{className:"error"},this.state.uname.text):null),n.a.createElement("div",{className:"input-section"},n.a.createElement("label",{htmlFor:"fname"},"First Name"),n.a.createElement("input",{type:"text",id:"fname",className:"inp",onChange:this.validate}),this.state.fname.status?n.a.createElement("div",{className:"error"},this.state.fname.text):null),n.a.createElement("div",{className:"input-section"},n.a.createElement("label",{htmlFor:"lname"},"Last Name"),n.a.createElement("input",{type:"text",id:"lname",className:"inp",onChange:this.validate}),this.state.lname.status?n.a.createElement("div",{className:"error"},this.state.lname.text):null),n.a.createElement("div",{className:"input-section"},n.a.createElement("label",{htmlFor:"dob"},"Date of Birth"),n.a.createElement("input",{type:"date",id:"dob",className:"inp",onChange:this.validate}),this.state.dob.status?n.a.createElement("div",{className:"error"},this.state.dob.text):null),n.a.createElement("div",{className:"input-section"},n.a.createElement("label",{htmlFor:"pass"},"Password"),n.a.createElement("input",{type:"password",id:"pass",className:"inp",onChange:this.validate,onFocus:this.showPolicy,onBlur:this.hidePolicy}),this.state.pass.status?n.a.createElement("div",{className:"error"},this.state.pass.text):null,n.a.createElement("div",{className:this.state.passCheck?"pass-check":"pass-check hide"},this.passCheck.map((function(t,a){return n.a.createElement("p",{key:a,id:t.id,className:e.state.passPolicy[t.id].status?t.success:t.error},t.text)})))),n.a.createElement("div",{className:"input-section"},n.a.createElement("label",{htmlFor:"cpass"},"Confirm Password"),n.a.createElement("input",{type:"password",id:"cpass",className:"inp",onChange:this.validate}),this.state.cpass.status?n.a.createElement("div",{className:"error"},this.state.cpass.text):null)),n.a.createElement("div",{className:"input-section"},this.state.main.status?n.a.createElement("div",{className:"submitError"},this.state.main.text):null,n.a.createElement("button",{className:"submit",onClick:this.register},"Register")),n.a.createElement("div",{className:"redirect"},n.a.createElement("span",null,"Already a User? "),n.a.createElement(l.b,{className:"linkLogin",to:""}," Login"))),n.a.createElement(E,null))}}]),a}(s.Component)),B=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement(d.c,null,n.a.createElement(d.a,{exact:!0,path:"/",component:P}),n.a.createElement(d.a,{exact:!0,path:"/register",component:_}))}}]),a}(s.Component);var A=function(){return n.a.createElement(l.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(B,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.20959c63.chunk.js.map