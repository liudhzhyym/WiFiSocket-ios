webpackJsonp([10],{"8JDq":function(t,e,i){t.exports=i.p+"static/img/click-emailicon@3x.3ea3b00.png"},gCI2:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{emailActive:!1,emailVal:null}},components:{headTop:i("cNyQ").a},mounted:function(){console.log(this.$route.params.email)},methods:{emailVolidate:function(){this.emailVal?this.emailActive=!0:this.emailActive=!1},foundEmail:function(){this.emailActive&&this.$router.push({path:"forgotStep"})}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"forgotStep"}},[i("head-top",{attrs:{title:"Forgot Password",goBack:"true"}}),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"resendTip"},[i("p",[t._v("We have sent a confirmation email to "),i("br"),t._v(" "),i("span",[t._v(t._s(this.$route.params.email))]),t._v(", please click on the link in the email to complete the account activation ")])]),t._v(" "),i("div",{staticClass:"finish",on:{click:function(e){t.$router.push({path:"/login"})}}},[t._v("\n   Finished\n ")])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"resendEmail-Img"},[e("img",{attrs:{src:i("8JDq"),alt:""}})])}]};var s=i("VU/8")(a,n,!1,function(t){i("vEFg")},"data-v-279fe880",null);e.default=s.exports},vEFg:function(t,e){}});
//# sourceMappingURL=10.d1221ce49ac840b63ff6.js.map