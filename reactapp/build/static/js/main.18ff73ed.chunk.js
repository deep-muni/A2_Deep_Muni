(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],Array(22).concat([function(e,t,a){e.exports=a.p+"static/media/veggie.9e266713.png"},function(e,t,a){e.exports=a.p+"static/media/exotic.c329b8c6.png"},function(e,t,a){e.exports=a.p+"static/media/fruits.7bfa1e96.png"},function(e,t,a){e.exports=a.p+"static/media/essential.e6125dd6.png"},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAABkBAMAAADnDbhdAAAAG1BMVEU3TU3///9peXmCj4+bpqbm6Oi0vLzN0tJQY2Pu4Te4AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAClklEQVRoge2UTW/aQBBAB9uAj5EDgqPrirbHRRSpx5TKpUdMY8jRUgK+QtTUHA1NRX5299OyC15qiNTLPCmO7dnZ550dFgBBEARBEARBEARBEARBzsX4OHCrjP9wgctqL+MgrZDw/XyXPXfppUrGBbJ6VDXjAllcOeN8me389ezxfzveBfbRXuAyGjFcdvPi5UYeT8iwJvKmlj4HN2A8JZ0UoNcOpgBmmLRkoBmxsSsl6/rrjTkPCMCiHdIEI0xmeyITyuGzcNmvGf2sPgHrDsxr+sUAvgv7SASMKzqkTpSsFUHcS80uwAhgv4I3NC0kMqEcOoE5GAwI1IZ0RTa10F3c8gKxCttdEeC162Vl7ABs7wBuRe2u+E2fyAStzFou4wnUuqpQW3csKsweHkQAfPr3I5Ndiy5eihddbqgRmaCVUQwqY+tv3vCLmJU/jEWALVZ9NNszGiUsyBb24tisyDVXJpTDB3AZUepGJJq7PvI8bywC9KXqj6LMXoSJA6ylt6lMKKcRKZl7IJsnSfJTBNiyZH8UZcNvQFXsxxqrhHLMSblMTC5kdMNkfxRkBiutA9tbb7jJvqYU3n+Z7HDPMtkw2/q8zIp41z48L0dZggY/zclkN/o8IvdIyuquauq8jO2C5cBjPkFDc5OT8cOL/s54PeRJJmXWvZqqsDL68rcD/shLD4++Izx9AngnZbkTZMcfgCiZ3VY7kpfZLTCnUzDiJHhUCTrMdRjMXDmnPBvft0M6pbFOwpWSwUIlFLsx7LhT/jGfU5mgZ5c7q4unPiuOouRoyIawU7aQcAHaQ49xuj3+nZN93Tg1oAK+Jman9NJPX0tl+hudbP7lrT99LRc07rVh42uiH4AgCIIgCIIgCIL8b/4ApMJ541P3PMIAAAAASUVORK5CYII="},function(e,t,a){e.exports=a(49)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(20),r=a.n(i),l=(a(32),a(33),a(8)),c=a(1),m=a(2),o=a(4),u=a(3),d=a(6),p=a(5),h=(a(34),a(35),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("p",{className:"name",onClick:this.props.onClick},this.props.name)}}]),a}(s.Component)),v=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={showing:!1,suggestion:[],selectedTup:[]},s.side_panel=[{name:"Cart",url:"",cname:"item hide-nav",linkClass:" link linkDisable"},{name:"Login",url:"",cname:"item hide-nav",linkClass:" link linkDisable"},{name:"Register",url:"register",cname:"item hide-nav"},{name:"Profile",url:"profile",cname:"item",linkClass:" link"},{name:"Category",url:"",cname:"item",linkClass:" link linkDisable"},{name:"Help",url:"",cname:"item",linkClass:" link linkDisable"},{name:"Admin",url:"",cname:"item",linkClass:" link linkDisable"}],s.navigate=[{name:"Cart",url:"",cname:"link linkDisable"},{name:"Login",url:"",cname:"link linkDisable"},{name:"Register",url:"register",cname:"link"}],s.products=[{id:1,name:"Spring Onions"},{id:2,name:"Onions"},{id:3,name:"Yellow Potato"},{id:4,name:"White Potato"},{id:5,name:"Sweet Potato"},{id:6,name:"Green Pepper"},{id:7,name:"Yellow Pepper"},{id:8,name:"Red Onions"},{id:9,name:"Pink Cabbage"},{id:10,name:"Green Cabbage"},{id:11,name:"Broccoli"},{id:12,name:"Apple"},{id:13,name:"Pineapple"},{id:14,name:"Banana"},{id:15,name:"Kiwi"},{id:16,name:"Watermelon"},{id:1,name:"Straw Berry"},{id:18,name:"Black Berry"},{id:19,name:"Mushrooms"},{id:20,name:"Tomato"},{id:21,name:"Cherry Tomato"}],s.toggle=s.toggle.bind(Object(p.a)(s)),s.validate=s.validate.bind(Object(p.a)(s)),s.showList=s.showList.bind(Object(p.a)(s)),s.itemClick=s.itemClick.bind(Object(p.a)(s)),s}return Object(m.a)(a,[{key:"toggle",value:function(){var e=this.state.showing;this.setState({showing:!e})}},{key:"validate",value:function(e){if("keydown"===e.type&&13===e.keyCode||"click"===e.type){var t=document.getElementById("search").value;console.log(t),""===t?alert("Please enter a search string"):this.props.history.push("/result",{id:t})}}},{key:"showList",value:function(e){var t=e.target.value,a=[];t.length>0&&(a=this.products.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))),this.setState({suggestion:a})}},{key:"suggestionList",value:function(){var e=this;return 0===this.state.suggestion.length?null:n.a.createElement("div",{className:"suggestion"},this.state.suggestion.map((function(t,a){return n.a.createElement(h,{key:a,name:t.name,onClick:e.itemClick})})))}},{key:"itemClick",value:function(e){document.getElementById("search").value=e.target.innerText;var t=this.state.suggestion.filter((function(t){return t.name===e.target.innerText}));this.setState({suggestion:[],selectedTup:t})}},{key:"render",value:function(){return n.a.createElement("nav",{className:"bar"},n.a.createElement("div",{className:"menu",onClick:this.toggle}),n.a.createElement("div",{className:this.state.showing?"search-bar search-move":"search-bar"},n.a.createElement("div",{className:"search"},n.a.createElement("input",{type:"text",id:"search",placeholder:"Search",onKeyDown:this.validate,onChange:this.showList})),n.a.createElement("div",{className:"search-icon",onClick:this.validate}),this.suggestionList()),n.a.createElement("ul",{className:"right"},this.navigate.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("div",{className:"label"},e.name),n.a.createElement(l.b,{to:e.url,className:e.cname}))}))),n.a.createElement(l.b,{to:"/"},n.a.createElement("div",{className:"logo"})),n.a.createElement("div",{className:this.state.showing?"side-panel show-panel":"side-panel"},n.a.createElement("ul",null,this.side_panel.map((function(e,t){return n.a.createElement("li",{className:e.cname,key:t},n.a.createElement("div",{className:"label"},e.name),n.a.createElement("div",{className:"arrow"}),n.a.createElement(l.b,{to:e.url,className:e.linkClass}))})))))}}]),a}(s.Component),b=Object(d.f)(v),g=(a(41),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).list_1=[{name:"Terms & Condition",link:"",urlClass:"visit isDisabled"},{name:"Careers",link:"",urlClass:"visit isDisabled"},{name:"Privacy Policy",link:"",urlClass:"visit isDisabled"}],s.list_2=[{name:"Google",link:"",cname:"fa fa-google icon",urlClass:"visit isDisabled"},{name:"Facebook",link:"",cname:"fa fa-facebook icon",urlClass:"visit isDisabled"},{name:"Instagram",link:"",cname:"fa fa-instagram icon",urlClass:"visit isDisabled"},{name:"LinkedIn",link:"",cname:"fa fa-linkedin icon",urlClass:"visit isDisabled"},{name:"Twitter",link:"",cname:"fa fa-twitter icon",urlClass:"visit isDisabled"}],s.list_3=[{name:"Login",link:"",urlClass:"visit isDisabled"},{name:"Register",link:"/register",urlClass:"visit"},{name:"About Us",link:"",urlClass:"visit isDisabled"},{name:"Contact Us",link:"",urlClass:"visit isDisabled"},{name:"Help",link:"",urlClass:"visit isDisabled"}],s}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("footer",{className:"foot-area"},n.a.createElement("div",{className:"logo_1"}),n.a.createElement("div",{className:"listing"},n.a.createElement("div",{className:"lists floating_1"},n.a.createElement("p",{className:"head"},"Kart"),n.a.createElement("ul",null,this.list_1.map((function(e,t){return n.a.createElement("li",{key:t,className:"items"},n.a.createElement(l.b,{to:e.link,className:e.urlClass}),n.a.createElement("div",{className:"label"},e.name))})))),n.a.createElement("div",{className:"lists floating_2"},n.a.createElement("p",{className:"head"},"Social"),n.a.createElement("ul",null,this.list_2.map((function(e,t){return n.a.createElement("li",{key:t,className:"items"},n.a.createElement(l.b,{to:e.link,className:e.urlClass}),n.a.createElement("i",{className:e.cname}),n.a.createElement("span",{className:"label"},e.name))})))),n.a.createElement("div",{className:"lists floating_3"},n.a.createElement("p",{className:"head"},"Navigate"),n.a.createElement("ul",null,this.list_3.map((function(e,t){return n.a.createElement("li",{key:t,className:"items"},n.a.createElement(l.b,{to:e.link,className:e.urlClass}),n.a.createElement("div",{className:"label"},e.name))}))))))}}]),a}(s.Component)),E=(a(42),a(22)),f=a.n(E),N=a(23),k=a.n(N),y=a(24),C=a.n(y),x=a(25),O=a.n(x),B=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={id:1},s.images=[{id:1,name:"veggie",source:f.a},{id:2,name:"fruit",source:C.a},{id:3,name:"exotic",source:k.a},{id:4,name:"essential",source:O.a}],s.increment=s.increment.bind(Object(p.a)(s)),s.decrement=s.decrement.bind(Object(p.a)(s)),s}return Object(m.a)(a,[{key:"increment",value:function(){var e=this.state.id;(e+=1)>this.images.length?this.setState({id:1}):this.setState({id:e})}},{key:"decrement",value:function(){var e=this.state.id;(e-=1)<1?this.setState({id:this.images.length}):this.setState({id:e})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"carousel-area"},n.a.createElement("p",{className:"heading1"},"Variety of Products"),n.a.createElement("div",{className:"image-section"},n.a.createElement("div",{className:"before",onClick:this.decrement},"\u276e"),this.images.filter((function(t){return t.id===e.state.id})).map((function(e,t){return n.a.createElement("img",{src:e.source,className:"image",width:"480px",height:"360px",key:t,alt:e.name})})),n.a.createElement("div",{className:"after",onClick:this.increment},"\u276f")))}}]),a}(s.Component),w=(a(43),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"company-section"},n.a.createElement("p",{className:"heading"},"Shopping Kart"),n.a.createElement("p",{className:"text"},"The future of Groceries Shopping"),n.a.createElement("div",{className:"goals"},n.a.createElement("div",{className:"goal"},n.a.createElement("div",{className:"section delivery"}),n.a.createElement("div",{className:"goal-title"},"Express Delivery")),n.a.createElement("div",{className:"goal"},n.a.createElement("div",{className:"section cart"}),n.a.createElement("div",{className:"goal-title"},"Inventory")),n.a.createElement("div",{className:"goal"},n.a.createElement("div",{className:"section customer"}),n.a.createElement("div",{className:"goal-title"},"Customer Service"))))}}]),a}(s.Component)),j=(a(44),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"brand-section"},n.a.createElement("p",{className:"heading"},"Brands Associated"),n.a.createElement("div",{className:"brand-area"},n.a.createElement("div",{className:"brand"},"Brand Image"),n.a.createElement("div",{className:"brand"},"Brand Image"),n.a.createElement("div",{className:"brand"},"Brand Image"),n.a.createElement("div",{className:"brand"},"Brand Image"),n.a.createElement("div",{className:"brand"},"Brand Image"),n.a.createElement("div",{className:"brand"},"Brand Image"),n.a.createElement("div",{className:"brand"},"Brand Image"),n.a.createElement("div",{className:"brand"},"Brand Image"),n.a.createElement("div",{className:"brand"},"Brand Image")))}}]),a}(s.Component)),A=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(b,null),n.a.createElement(w,null),n.a.createElement(B,null),n.a.createElement(j,null),n.a.createElement(g,null))}}]),a}(s.Component),P=a(17),I=(a(45),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={uname:{status:!1,text:""},fname:{status:!1,text:""},lname:{status:!1,text:""},dob:{status:!1,text:""},pass:{status:!1,text:""},cpass:{status:!1,text:""},main:{status:!1,text:""},passCheck:!1,passPolicy:{lower:{status:!1},upper:{status:!1},numeric:{status:!1},special:{status:!1},eight:{status:!1}}},s.passCheck=[{id:"lower",error:"err",success:"err success",text:"At least one lower-case character"},{id:"upper",error:"err",success:"err success",text:"At least one upper-case character"},{id:"numeric",error:"err",success:"err success",text:"At least one numeric character"},{id:"special",error:"err",success:"err success",text:"At least one special character (!@#_)"},{id:"eight",error:"err",success:"err success",text:"At least eight characters"}],s.register=s.register.bind(Object(p.a)(s)),s.validate=s.validate.bind(Object(p.a)(s)),s.hasError=s.hasError.bind(Object(p.a)(s)),s.showPolicy=s.showPolicy.bind(Object(p.a)(s)),s.hidePolicy=s.hidePolicy.bind(Object(p.a)(s)),s.checkPolicy=s.checkPolicy.bind(Object(p.a)(s)),s.policyNotSatisfied=s.policyNotSatisfied.bind(Object(p.a)(s)),s}return Object(m.a)(a,[{key:"validate",value:function(e){var t=e.target,a={},s={};switch(e.target.id){case"uname":a=""===t.value?{status:!0,text:"User Name is required"}:t.value.length<4||t.value.length>21?{status:!0,text:"Length between 4 & 21"}:{status:!1,text:""},this.setState({uname:a});break;case"fname":a=""===t.value?{status:!0,text:"First Name is required"}:t.value.length<4||t.value.length>21?{status:!0,text:"Length between 4 & 21"}:{status:!1,text:""},this.setState({fname:a});break;case"lname":a=""===t.value?{status:!0,text:"Last Name is required"}:t.value.length<4||t.value.length>21?{status:!0,text:"Length between 4 & 21"}:{status:!1,text:""},this.setState({lname:a});break;case"dob":a=""===t.value?{status:!0,text:"Date of Birth is required"}:{status:!1,text:""},this.setState({dob:a});break;case"pass":this.checkPolicy(t.value),a=""===t.value?{status:!0,text:"Password is required"}:{status:!1,text:""},t.value!==document.getElementById("cpass").value&&(s={status:!0,text:"Password does not match"}),this.setState({pass:a,cpass:s});break;case"cpass":a=""===t.value?{status:!0,text:"Confirmed Password is required"}:t.value!==document.getElementById("pass").value?{status:!0,text:"Password does not match"}:{status:!1,text:""},this.setState({cpass:a})}}},{key:"register",value:function(){var e=this;this.checkBlank()?(this.setState({main:{status:!0,text:"Please fill out empty fields!!"}}),setTimeout((function(){e.setState({main:{status:!1,text:""}})}),2500)):this.hasError()?(this.setState({main:{status:!0,text:"Please correct the errors!!"}}),setTimeout((function(){e.setState({main:{status:!1,text:""}})}),2500)):this.policyNotSatisfied()?(this.setState({main:{status:!0,text:"Please follow password policy"}}),this.showPolicy(),setTimeout((function(){e.setState({main:{status:!1,text:""}})}),2500)):(this.makeEmpty(),alert("User has been registered"))}},{key:"checkBlank",value:function(){var e,t=document.getElementsByClassName("inp"),a=Object(P.a)(t);try{for(a.s();!(e=a.n()).done;){if(""===e.value.value)return!0}}catch(s){a.e(s)}finally{a.f()}return!1}},{key:"hasError",value:function(){return this.state.uname.status||this.state.fname.status||this.state.lname.status||this.state.dob.status||this.state.pass.status||this.state.cpass.status}},{key:"checkPolicy",value:function(e){this.setState({passPolicy:{lower:{status:e.search(/[a-z]/)>=0},upper:{status:e.search(/[A-Z]/)>=0},numeric:{status:e.search(/[0-9]/)>=0},special:{status:e.search(/[!@#_]/)>=0},eight:{status:e.length>7}}})}},{key:"policyNotSatisfied",value:function(){return!(this.state.passPolicy.lower.status&&this.state.passPolicy.upper.status&&this.state.passPolicy.numeric.status&&this.state.passPolicy.special.status&&this.state.passPolicy.eight.status)}},{key:"makeEmpty",value:function(){var e,t=document.getElementsByClassName("inp"),a=Object(P.a)(t);try{for(a.s();!(e=a.n()).done;){e.value.value=""}}catch(s){a.e(s)}finally{a.f()}}},{key:"showPolicy",value:function(){this.setState({passCheck:!0})}},{key:"hidePolicy",value:function(){this.setState({passCheck:!1})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"wrapper"},n.a.createElement(b,null),n.a.createElement("div",{className:this.state.main.status?"form_area onerror":"form_area"},n.a.createElement("form",null,n.a.createElement("div",{className:"input-section"},n.a.createElement("label",{htmlFor:"uname"},"User Name"),n.a.createElement("input",{type:"text",id:"uname",className:"inp",onChange:this.validate}),this.state.uname.status?n.a.createElement("div",{className:"error"},this.state.uname.text):null),n.a.createElement("div",{className:"input-section"},n.a.createElement("label",{htmlFor:"fname"},"First Name"),n.a.createElement("input",{type:"text",id:"fname",className:"inp",onChange:this.validate}),this.state.fname.status?n.a.createElement("div",{className:"error"},this.state.fname.text):null),n.a.createElement("div",{className:"input-section"},n.a.createElement("label",{htmlFor:"lname"},"Last Name"),n.a.createElement("input",{type:"text",id:"lname",className:"inp",onChange:this.validate}),this.state.lname.status?n.a.createElement("div",{className:"error"},this.state.lname.text):null),n.a.createElement("div",{className:"input-section"},n.a.createElement("label",{htmlFor:"dob"},"Date of Birth"),n.a.createElement("input",{type:"date",id:"dob",className:"inp",onChange:this.validate}),this.state.dob.status?n.a.createElement("div",{className:"error"},this.state.dob.text):null),n.a.createElement("div",{className:"input-section"},n.a.createElement("label",{htmlFor:"pass"},"Password"),n.a.createElement("input",{type:"password",id:"pass",className:"inp",onChange:this.validate,onFocus:this.showPolicy,onBlur:this.hidePolicy}),this.state.pass.status?n.a.createElement("div",{className:"error"},this.state.pass.text):null,n.a.createElement("div",{className:this.state.passCheck?"pass-check":"pass-check hide"},this.passCheck.map((function(t,a){return n.a.createElement("p",{key:a,id:t.id,className:e.state.passPolicy[t.id].status?t.success:t.error},t.text)})))),n.a.createElement("div",{className:"input-section"},n.a.createElement("label",{htmlFor:"cpass"},"Confirm Password"),n.a.createElement("input",{type:"password",id:"cpass",className:"inp",onChange:this.validate}),this.state.cpass.status?n.a.createElement("div",{className:"error"},this.state.cpass.text):null)),n.a.createElement("div",{className:"input-section"},this.state.main.status?n.a.createElement("div",{className:"submitError"},this.state.main.text):null,n.a.createElement("button",{className:"submit",onClick:this.register},"Register")),n.a.createElement("div",{className:"redirect"},n.a.createElement("span",null,"Already a User? "),n.a.createElement(l.b,{className:"linkLogin"}," Login"))),n.a.createElement(g,null))}}]),a}(s.Component)),L=(a(46),a(26)),S=a.n(L),D=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"product"},n.a.createElement("img",{className:"productImage",alt:"placeholder",src:S.a}),n.a.createElement("div",{className:"productName"},this.props.name),n.a.createElement("div",{className:"price"},this.props.price),n.a.createElement("div",{className:"brandName"},this.props.brand),n.a.createElement("button",{className:"addtocart"},"Add to Cart"))}}]),a}(s.Component),T=(a(47),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={matchedProducts:[]},s.product=[{name:"Yellow Potato",brand:"Brand: Lorem Ipsum",price:"$50"},{name:"Yellow Potato",brand:"Brand: Lorem Ipsum",price:"$20"},{name:"Yellow Potato",brand:"Brand: Lorem Ipsum",price:"$40"},{name:"Yellow Potato",brand:"Brand: Lorem Ipsum",price:"$30"},{name:"Yellow Potato",brand:"Brand: Lorem Ipsum",price:"$60"},{name:"Yellow Potato",brand:"Brand: Lorem Ipsum",price:"$60"},{name:"Spring Onions",brand:"Brand: Lorem Ipsum",price:"$80"},{name:"Onions",brand:"Brand: Lorem Ipsum",price:"$80"},{name:"White Potato",brand:"Brand: Lorem Ipsum",price:"$80"},{name:"Sweet Potato",brand:"Brand: Lorem Ipsum",price:"$80"},{name:"Green Pepper",brand:"Brand: Lorem Ipsum",price:"$80"},{name:"Yellow Pepper",brand:"Brand: Lorem Ipsum",price:"$80"},{name:"Red Onions",brand:"Brand: Lorem Ipsum",price:"$80"},{name:"Pink Cabbage",brand:"Brand: Lorem Ipsum",price:"$80"},{name:"Green Cabbage",brand:"Brand: Lorem Ipsum",price:"$80"},{name:"Broccoli",brand:"Brand: Lorem Ipsum",price:"$80"},{name:"Apple",brand:"Brand: Lorem Ipsum",price:"$80"},{name:"Pineapple",brand:"Brand: Lorem Ipsum",price:"$80"},{name:"Banana",brand:"Brand: Lorem Ipsum",price:"$80"},{name:"Kiwi",brand:"Brand: Lorem Ipsum",price:"$80"},{name:"Watermelon",brand:"Brand: Lorem Ipsum",price:"$80"},{name:"Straw Berry",brand:"Brand: Lorem Ipsum",price:"$80"},{name:"Black Berry",brand:"Brand: Lorem Ipsum",price:"$80"},{name:"Mushrooms",brand:"Brand: Lorem Ipsum",price:"$80"},{name:"Tomato",brand:"Brand: Lorem Ipsum",price:"$80"},{name:"Cherry Tomato",brand:"Brand: Lorem Ipsum",price:"$80"}],s}return Object(m.a)(a,[{key:"updateList",value:function(){var e=this,t=this.product.filter((function(t){return t.name===e.props.location.state.id}));return 0===t.length?n.a.createElement("div",{className:"nomatch"},"No Match Found"):t.map((function(e,t){return n.a.createElement(D,{key:t,name:e.name,price:e.price,brand:e.brand})}))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(b,null),n.a.createElement("div",{className:"result_tag"},"Showing Results: ",this.props.location.state.id),n.a.createElement("div",{className:"products"},this.updateList()),n.a.createElement(g,null))}}]),a}(s.Component)),U=(a(48),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={isDisabled:!0,fn:"Deep",ln:"Muni",date:"1994-06-04",fname:{status:!1,text:""},lname:{status:!1,text:""},dob:{status:!1,text:""},main:{status:!1,text:""}},s.edit=s.edit.bind(Object(p.a)(s)),s.validate=s.validate.bind(Object(p.a)(s)),s.update=s.update.bind(Object(p.a)(s)),s}return Object(m.a)(a,[{key:"validate",value:function(e){var t=e.target,a={};switch(e.target.id){case"fname":a=""===t.value?{status:!0,text:"First Name is required"}:t.value.length<4||t.value.length>21?{status:!0,text:"Length between 4 & 21"}:{status:!1,text:""},this.setState({fname:a,fn:e.target.value});break;case"lname":a=""===t.value?{status:!0,text:"Last Name is required"}:t.value.length<4||t.value.length>21?{status:!0,text:"Length between 4 & 21"}:{status:!1,text:""},this.setState({lname:a,ln:e.target.value});break;case"dob":a=""===t.value?{status:!0,text:"Date of Birth is required"}:{status:!1,text:""},this.setState({dob:a,date:e.target.value})}}},{key:"edit",value:function(){this.setState({isDisabled:!1})}},{key:"update",value:function(){var e=this;this.state.isDisabled?alert("Please go to edit mode"):this.state.fname.status||this.state.lname.status||this.state.dob.status?(this.setState({main:{status:!0,text:"Please correct the errors!!"}}),setTimeout((function(){e.setState({main:{status:!1,text:""}})}),2500)):(this.setState({isDisabled:!0}),alert("Updated"))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(b,null),n.a.createElement("div",{className:"profile-area"},n.a.createElement("div",{className:"profile-image"}),n.a.createElement("div",{className:"profile-details"},n.a.createElement("form",null,n.a.createElement("i",{class:"fa fa-pencil edit",onClick:this.edit}),n.a.createElement("div",{className:"input-section"},n.a.createElement("label",{htmlFor:"uname"},"User Name"),n.a.createElement("input",{type:"text",id:"uname",className:"inp",value:"deepmuni94",disabled:!0})),n.a.createElement("div",{className:"input-section"},n.a.createElement("label",{htmlFor:"fname"},"First Name"),n.a.createElement("input",{type:"text",id:"fname",className:"inp",value:this.state.fn,disabled:this.state.isDisabled,onChange:this.validate}),this.state.fname.status?n.a.createElement("div",{className:"error"},this.state.fname.text):null),n.a.createElement("div",{className:"input-section"},n.a.createElement("label",{htmlFor:"lname"},"Last Name"),n.a.createElement("input",{type:"text",id:"lname",className:"inp",value:this.state.ln,disabled:this.state.isDisabled,onChange:this.validate}),this.state.lname.status?n.a.createElement("div",{className:"error"},this.state.lname.text):null),n.a.createElement("div",{className:"input-section"},n.a.createElement("label",{htmlFor:"dob"},"Date of Birth"),n.a.createElement("input",{type:"date",id:"dob",className:"inp",value:this.state.date,disabled:this.state.isDisabled,onChange:this.validate}),this.state.dob.status?n.a.createElement("div",{className:"error"},this.state.dob.text):null)),n.a.createElement("div",{className:"input-section"},this.state.main.status?n.a.createElement("div",{className:"submitError"},this.state.main.text):null,n.a.createElement("button",{className:"submit",onClick:this.update},"Update")))),n.a.createElement(g,null))}}]),a}(s.Component)),R=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement(d.c,null,n.a.createElement(d.a,{exact:!0,path:"/",component:A}),n.a.createElement(d.a,{exact:!0,path:"/register",component:I}),n.a.createElement(d.a,{exact:!0,path:"/result",component:T}),n.a.createElement(d.a,{exact:!0,path:"/profile",component:U}))}}]),a}(s.Component);var q=function(){return n.a.createElement(l.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(R,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[27,1,2]]]);
//# sourceMappingURL=main.18ff73ed.chunk.js.map