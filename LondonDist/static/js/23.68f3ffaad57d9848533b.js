webpackJsonp([23],{"4R6/":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("Dd8w"),i=a.n(s),o=a("cNyQ"),r=a("NYxO"),l=a("0zKu"),n=a("71C0"),c=a("1h8J"),m={data:function(){return{emailActive:!1,emailVal:null,firstName:"",lastName:"",firstNameACtive:!1,lastNameACtive:!1,newPassword:"",oldPassword:"",newPasswordACtive:!1,oldPasswordACtive:!1}},components:{headTop:o.a,messageBox:l.a},computed:i()({},Object(r.c)(["messageType"]),{messageBoxType:function(){return this.messageType},activeClick:function(){return!!(this.emailActive&&this.firstNameACtive&&this.lastNameACtive&&this.newPasswordACtive&&this.oldPasswordACtive)}}),created:function(){Object(c.r)(this.NAVIGATOR,this)},methods:i()({},Object(r.b)(["showMessagesBox"]),{next:function(){this.activeClick&&this.showMessagesBox({type:"emailTip"})},formatFocus:function(e){for(var t=e.target;"LI"!==t.tagName;)t=t.parentNode;t.style.borderColor="#01a29a",t.nextElementSibling&&(t.nextElementSibling.style.borderTop="1px solid #01a29a")},formatBlur:function(e,t){for(var a=e.target;"LI"!==a.tagName;)a=a.parentNode;switch(a.style.borderColor="#dedede",a.nextElementSibling&&(a.nextElementSibling.style.borderTop="1px solid #dedede"),t){case"email":/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(this.emailVal)?this.emailActive=!0:this.emailActive=!1;break;case"name":this.firstName.length>0?this.firstNameACtive=!0:this.firstNameACtive=!1;break;case"surname":this.lastName.length>0?this.lastNameACtive=!0:this.lastNameACtive=!1;break;case"newpswd":""!==this.newPassword?this.newPasswordACtive=!0:this.newPasswordACtive=!1;break;case"oldpswd":""!==this.oldPassword?this.oldPasswordACtive=!0:this.oldPasswordACtive=!1}},alertChoose:function(e){switch(e){case 0:this.showMessagesBox({type:null});break;case 1:this.showMessagesBox({type:null}),this.$router.push({name:"registerNext",params:{email:this.emailVal}});var t=this.firstName+" "+this.lastName;Object(n.s)(this.NAVIGATOR,this,this.emailVal,this.newPassword,t),console.log(this.emailVal,this.newPassword,t)}}})},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"register"}},[a("head-top",{attrs:{title:"Email Registration",goBack:"true"}}),e._v(" "),a("ul",{staticClass:"infomation"},[a("li",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.emailVal,expression:"emailVal"}],attrs:{type:"email",placeholder:"Your Email",maxlength:"25"},domProps:{value:e.emailVal},on:{focus:function(t){e.formatFocus(t)},blur:function(t){e.formatBlur(t,"email")},input:function(t){t.target.composing||(e.emailVal=t.target.value)}}})]),e._v(" "),a("li",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],attrs:{type:"text",placeholder:"Your Name, 1-16 characters",maxlength:"16"},domProps:{value:e.firstName},on:{focus:function(t){e.formatFocus(t)},blur:function(t){e.formatBlur(t,"name")},input:function(t){t.target.composing||(e.firstName=t.target.value)}}})]),e._v(" "),a("li",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],attrs:{type:"text",placeholder:"Your Surname, 1-16 characters",maxlength:"16"},domProps:{value:e.lastName},on:{focus:function(t){e.formatFocus(t)},blur:function(t){e.formatBlur(t,"surname")},input:function(t){t.target.composing||(e.lastName=t.target.value)}}})]),e._v(" "),a("li",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newPassword,expression:"newPassword"}],attrs:{type:"text",placeholder:"Your Password, 1-16 characters",maxlength:"16"},domProps:{value:e.newPassword},on:{focus:function(t){e.formatFocus(t)},blur:function(t){e.formatBlur(t,"newpswd")},input:function(t){t.target.composing||(e.newPassword=t.target.value)}}})]),e._v(" "),a("li",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.oldPassword,expression:"oldPassword"}],attrs:{type:"text",placeholder:"Your Password, 1-16 characters",maxlength:"16"},domProps:{value:e.oldPassword},on:{focus:function(t){e.formatFocus(t)},blur:function(t){e.formatBlur(t,"oldpswd")},input:function(t){t.target.composing||(e.oldPassword=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"next",class:e.activeClick?"albeClick":"disalbedClick",on:{click:e.next}},[e._v("\n   Next\n  ")]),e._v(" "),a("messageBox",{directives:[{name:"show",rawName:"v-show",value:"emailTip"===e.messageBoxType,expression:"messageBoxType === 'emailTip'"}],attrs:{setHeight:"190",setType:"confirm"}},[a("div",{staticClass:"common_alert",attrs:{slot:"confirmColumn"},slot:"confirmColumn"},[a("div",{staticClass:"alert_icon"},[a("span",[e._v("Confirm Your Email")])]),e._v(" "),a("div",{staticClass:"alert_describe"},[e._v("The email you want to register is: "+e._s(e.emailVal)+", please confirm")]),e._v(" "),a("div",{staticClass:"alert_operation"},[a("div",{staticClass:"determine_two",staticStyle:{background:"#cccccc"},on:{click:function(t){e.alertChoose(0)}}},[e._v("Cancel")]),e._v(" "),a("div",{staticClass:"determine_two",staticStyle:{background:"#13af68"},on:{click:function(t){e.alertChoose(1)}}},[e._v("OK")])])])])],1)},staticRenderFns:[]};var u=a("VU/8")(m,d,!1,function(e){a("qIWl")},"data-v-c3763a88",null);t.default=u.exports},qIWl:function(e,t){}});
//# sourceMappingURL=23.68f3ffaad57d9848533b.js.map