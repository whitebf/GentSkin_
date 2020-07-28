(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216ba8"],{c467:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"check py-5"},[s("div",{staticClass:"container"},[s("h3",{staticClass:"text-center mb-5"},[t._v("訂單資訊")]),s("p",[t._v("訂單ID："),s("span",{staticClass:"text-success"},[t._v(t._s(t.order.id))])]),t._m(0),s("div",{staticClass:"check-cartInfo"},[s("div",{staticClass:"row justify-content-center py-md-3"},[s("div",{staticClass:"col-md-8 mb-5 mb-md-0"},[s("div",{staticClass:"overflow"},t._l(t.order.products,(function(e){return s("div",{key:e.id,staticClass:"row m-0 py-3 align-items-center"},[s("div",{staticClass:"col-6"},[s("img",{staticClass:"w-50 border p-1",attrs:{src:e.product.imageUrl}})]),s("div",{staticClass:"col-6"},[s("p",[t._v(" "+t._s(e.product.title)+" ")]),s("div",[s("p",[t._v(" "+t._s(t._f("currency")(e.final_total))+" ")]),s("p",{staticClass:"m-0"},[t._v(" "+t._s(e.qty)+"/"+t._s(e.product.unit)+" ")])])])])})),0)]),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"row flex-column justify-content-center h-100 px-5"},[s("div",{staticClass:"d-flex justify-content-between"},[s("p",[t._v("小計")]),s("p",{staticClass:"text-danger"},[t._v(" "+t._s(t._f("currency")(t.order.total))+"元 ")])]),t.order.user.fee?s("div",{staticClass:"d-flex justify-content-between"},[s("p",[t._v("運費")]),s("p",{staticClass:"text-danger"},[t._v(" "+t._s(t._f("currency")(t.order.user.fee.shipping))+"元 ")])]):t._e(),t.order.user.fee?s("div",{staticClass:"d-flex justify-content-between"},[s("p",[t._v("總金額")]),s("p",{staticClass:"text-danger"},[t._v(" "+t._s(t._f("currency")(t.order.total+t.order.user.fee.shipping))+"元 ")])]):t._e()])])])]),s("div",{staticClass:"check-receiverInfo"},[s("div",{staticClass:"row py-3"},[s("div",{staticClass:"col-md-6"},[t.order.user.recipient?s("ul",{staticClass:"list-group"},[s("li",{staticClass:"h3 list-group-item text-success"},[t._v("聯絡資訊")]),s("li",{staticClass:"list-group-item"},[t._v("姓名： "+t._s(t.order.user.recipient.name)+" ")]),s("li",{staticClass:"list-group-item"},[t._v("電話： "+t._s(t.order.user.recipient.tel)+" ")]),"宅配到府"==t.order.user.recipient.transport?s("li",{staticClass:"list-group-item pr-md-0"},[t._v(" 地址： "+t._s(t.order.user.recipient.country)+" "+t._s(t.order.user.recipient.city)+" "+t._s(t.order.user.recipient.zip)+" "+t._s(t.order.user.recipient.district)+" "),s("br"),t._v(" "+t._s(t.order.user.recipient.address)+" ")]):t._e()]):t._e()]),s("div",{staticClass:"col-md-3"},[t.order.user.fee?s("ul",{staticClass:"list-group"},[s("li",{staticClass:"h3 list-group-item text-biwacha"},[t._v("付款方式")]),s("li",{staticClass:"list-group-item"},[t._v(t._s(t.order.user.fee.payment))])]):t._e()]),s("div",{staticClass:"col-md-3"},[t.order.user.recipient?s("ul",{staticClass:"list-group"},[s("li",{staticClass:"h3 list-group-item text-biwacha"},[t._v("配送方式")]),s("li",{staticClass:"list-group-item"},[t._v(t._s(t.order.user.recipient.transport))])]):t._e()])])])])]),s("div",{staticClass:"modal animated bounceInDown",attrs:{id:"serviceModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",staticStyle:{"max-width":"650px"},attrs:{role:"document"}},[s("form",{staticClass:"modal-content bg-dark",on:{submit:function(e){return e.preventDefault(),t.getHelper(t.question)}}},[t._m(1),t._m(2),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"custom-control custom-radio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.question,expression:"question"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"progress",name:"customerService",value:"delivery"},domProps:{checked:t._q(t.question,"delivery")},on:{change:function(e){t.question="delivery"}}}),s("label",{staticClass:"custom-control-label",attrs:{for:"progress"}},[t._v("何時出貨")])]),s("div",{staticClass:"custom-control custom-radio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.question,expression:"question"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"return",name:"customerService",value:"#Q3"},domProps:{checked:t._q(t.question,"#Q3")},on:{change:function(e){t.question="#Q3"}}}),s("label",{staticClass:"custom-control-label",attrs:{for:"return"}},[t._v("商品瑕疵")])]),s("div",{staticClass:"custom-control custom-radio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.question,expression:"question"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"payment",name:"customerService",value:"#Q1"},domProps:{checked:t._q(t.question,"#Q1")},on:{change:function(e){t.question="#Q1"}}}),s("label",{staticClass:"custom-control-label",attrs:{for:"payment"}},[t._v("如何付款")])]),s("div",{staticClass:"custom-control custom-radio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.question,expression:"question"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"invoice",name:"customerService",value:"receipt"},domProps:{checked:t._q(t.question,"receipt")},on:{change:function(e){t.question="receipt"}}}),s("label",{staticClass:"custom-control-label",attrs:{for:"invoice"}},[t._v("訂單查詢")])])]),s("div",{staticClass:"text-md-right text-center border-top p-3"},[s("button",{staticClass:"button button-slide text-white",attrs:{type:"submit",disabled:""===t.question}},[t._v(" 查詢 ")])])])])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex justify-content-between align-items-center"},[s("p",{staticClass:" m-0"},[t._v("訂單狀態："),s("span",{staticClass:"text-warning"},[t._v("準備出貨")])]),s("button",{staticClass:"btn px-0",attrs:{type:"button","data-toggle":"modal","data-target":"#serviceModal"}},[s("i",{staticClass:"fas fa-edit"},[t._v("聯絡客服")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"button-close position-absolute",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("i",{staticClass:"fas fa-times"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-md-left text-center border-bottom p-3"},[s("h5",{staticClass:"m-0"},[t._v("問題查詢")])])}],r=(s("99af"),s("1157")),o=s.n(r),c={data:function(){return{order:{user:{}},question:""}},methods:{getOrderData:function(t){var e=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("gentskin","/order/").concat(t);e.$store.dispatch("loading",!0),this.$http.get(s).then((function(t){e.order=t.data.order,e.$store.dispatch("loading",!1)}))},getHelper:function(t){var e=this;o()("#serviceModal").modal("hide"),o()("#serviceModal").on("hidden.bs.modal",(function(){"delivery"===t||"receipt"===t?e.$router.push({name:"Helper",params:{scroll:"#Q2"}}):e.$router.push({name:"Helper",params:{scroll:t}})}))}},created:function(){this.getOrderData(this.$route.params.orderId)}},l=c,n=s("2877"),d=Object(n["a"])(l,i,a,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d216ba8.78b7c5f4.js.map