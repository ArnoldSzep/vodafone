(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08a2"],{6721:function(t,e,s){},a110:function(t,e,s){"use strict";var a=s("6721"),i=s.n(a);i.a},fb5e:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile page-wrap"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"site-title mb-5"},[t._v(t._s(t.contact.name)+"'s profile")]),s("div",{staticClass:"profile-details"},[s("div",{staticClass:"row mb-3 align-items-center"},[s("div",{staticClass:"col-sm-5 text-sm-right text-muted"},[t._v("Name:")]),s("div",{staticClass:"col-sm-6 text-sm-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Phone"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),s("div",{staticClass:"row mb-3 align-items-center"},[s("div",{staticClass:"col-sm-5 text-sm-right text-muted"},[t._v("E-mail:")]),s("div",{staticClass:"col-sm-6 text-sm-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Phone"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),s("div",{staticClass:"row mb-3 align-items-center"},[s("div",{staticClass:"col-sm-5 text-sm-right text-muted"},[t._v("Phone:")]),s("div",{staticClass:"col-sm-6 text-sm-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Phone"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})])])]),s("div",{staticClass:"profile-details mb-3"},[t.success?s("h3",{staticClass:"text-success"},[t._v("Success!")]):s("button",{staticClass:"btn btn-outline-dark px-4 py-2",on:{click:t.saveContact}},[t._v("Save Contact")]),t.error?s("h5",{staticClass:"text-primary mt-3"},[t._v(t._s(t.errorText))]):t._e()])])])},i=[],o=(s("7f7f"),s("cadf"),s("551c"),s("097d"),{name:"edit-profile",props:{contact:{}},data:function(){return{index:this.$route.params.id,name:this.contact.name,email:this.contact.email,phone:this.contact.phone,success:!1,error:!1,errorText:""}},methods:{saveContact:function(){var t=this;this.error=!1,""==this.name&&(this.errorText="Empty name!",this.error=!0),/(.+)@(.+){2,}\.(.+){2,}/.test(this.email)||(this.errorText="Wrong email address!",this.error=!0),""==this.email&&(this.errorText="Empty email!",this.error=!0),""==this.phone&&(this.errorText="Empty phone!",this.error=!0),this.error||(contactData[this.index].name=this.name,contactData[this.index].email=this.email,contactData[this.index].phone=this.phone,this.success=!0,setTimeout(function(){t.$router.push({name:"home"})},1e3))}}}),r=o,n=(s("a110"),s("2877")),c=Object(n["a"])(r,a,i,!1,null,"27e609d2",null);c.options.__file="EditProfile.vue";e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-08a2.d5c63453.js.map