import s from"../Services/sessions/make-payment.js";import e from"../Services/sessions/submit-details.js";import t from"../Services/sessions/setup-session.js";import i from"../Services/sessions/check-balance.js";import o from"../../utils/Storage.js";import r from"../Services/sessions/create-order.js";import{sanitizeSession as n}from"./utils.js";import a from"../Services/sessions/cancel-order.js";import c from"../../utils/browserInfo.js";function h(s,e,t){return e in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}function u(s){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},i=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})))),i.forEach((function(e){h(s,e,t[e])}))}return s}function l(s,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(e)):function(s){var e=Object.keys(s);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(s);e.push.apply(e,t)}return e}(Object(e)).forEach((function(t){Object.defineProperty(s,t,Object.getOwnPropertyDescriptor(e,t))})),s}class p{get shopperLocale(){return this.session.shopperLocale}get id(){return this.session.id}get data(){return this.session.sessionData}updateSessionData(s){this.session.sessionData=s,this.storeSession()}setupSession(s){const e=l(u({},s),{browserInfo:c()});return t(this,e).then((s=>(s.configuration&&(this.configuration=u({},s.configuration)),s.sessionData&&this.updateSessionData(s.sessionData),s)))}submitPayment(e){return s(e,this).then((s=>(s.sessionData&&this.updateSessionData(s.sessionData),s)))}submitDetails(s){return e(s,this).then((s=>(s.sessionData&&this.updateSessionData(s.sessionData),s)))}checkBalance(s){return i(s,this).then((s=>(s.sessionData&&this.updateSessionData(s.sessionData),s)))}createOrder(){return r(this).then((s=>(s.sessionData&&this.updateSessionData(s.sessionData),s)))}cancelOrder(s){return a(s.order,this).then((s=>(s.sessionData&&this.updateSessionData(s.sessionData),s)))}getStoredSession(){const s=this.storage.get();return this.id===(null==s?void 0:s.id)?s:this.session}storeSession(){this.storage.set({id:this.session.id,sessionData:this.session.sessionData})}removeStoredSession(){this.storage.remove()}constructor(s,e,t){h(this,"session",void 0),h(this,"storage",void 0),h(this,"clientKey",void 0),h(this,"loadingContext",void 0),h(this,"configuration",void 0);const i=n(s);if(!e)throw new Error("No clientKey available");if(!t)throw new Error("No loadingContext available");this.storage=new o("session","localStorage"),this.clientKey=e,this.loadingContext=t,this.session=i,this.session.sessionData?this.storeSession():this.session=this.getStoredSession()}}export{p as default};
//# sourceMappingURL=CheckoutSession.js.map
