(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b507eba2"],{"0fdd":function(t,s,a){"use strict";var e=a("b5e9"),i=a.n(e);i.a},b5e9:function(t,s,a){},bb7b:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"name"},[a("img",{staticClass:"title",attrs:{src:"/gy_715/img/title.png"}}),a("img",{staticClass:"inputBg",attrs:{src:"/gy_715/img/inputBg.png"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(s){s.target.composing||(t.name=s.target.value)}}}),t.showError?a("div",{staticClass:"errTip"},[a("img",{staticClass:"errImg",attrs:{src:"/gy_715/img/error.png"}}),t._v("请输入您的名字哦~ ")]):t._e(),t.showError?t._e():a("div",{staticClass:"errTip"},[a("p",[t._v("PS：可以随意输入~")])]),a("img",{staticClass:"nameSmt",attrs:{src:"/gy_715/img/nextBtn.png"},on:{click:t.onSubmit}}),a("img",{staticClass:"back",attrs:{src:"/gy_715/img/backBtn.png"},on:{click:t.backHome}})])},i=[],r={data(){return{name:this.VAR.Name,showError:!1}},methods:{onSubmit(){this.name?(this.VAR.setName(this.name),this.showError=!1,this.$router.push({path:"loading"})):this.showError=!0},backHome(){this.VAR.setName(this.name),this.$router.push({path:"home"})}}},n=r,o=(a("0fdd"),a("2877")),c=Object(o["a"])(n,e,i,!1,null,"5ec30a5e",null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-b507eba2.679e6201.js.map