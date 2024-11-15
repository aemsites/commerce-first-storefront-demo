import{createElement as t}from"../../external/preact/dist/preact.js";import{UIElement as e}from"../internal/UIElement/UIElement.js";import r from"./components/ANCVInput.js";import{CoreProvider as o}from"../../core/Context/CoreProvider.js";import s from"./components/ANCVAwait/config.js";import n from"../internal/Await/Await.js";import i from"../../core/Errors/SRPanelProvider.js";import a from"../../core/Errors/AdyenCheckoutError.js";import p from"../internal/PayButton/PayButton.js";import{sanitizeResponse as c,verifyPaymentDidNotFail as h}from"../internal/UIElement/utils.js";function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function m(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e.push.apply(e,r)}return e}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})),t}class u extends e{formatData(){var t;return{paymentMethod:{type:u.type,beneficiaryId:null===(t=this.state.data)||void 0===t?void 0:t.beneficiaryId}}}submit(){if(!this.isValid)return this.showValidation(),!1;this.createOrder().then(this.makePaymentsCall).then(c).then(h).then(this.handleResponse).catch(this.handleFailedResult)}get isValid(){return!!this.state.isValid}get displayName(){return this.props.name}render(){return this.props.paymentData?t(o,{i18n:this.props.i18n,loadingContext:this.props.loadingContext,resources:this.resources},t(i,{srPanel:this.props.modules.srPanel},t(n,{ref:t=>{this.componentRef=t},clientKey:this.props.clientKey,paymentData:this.props.paymentData,onError:this.props.onError,onComplete:this.onComplete,brandLogo:this.icon,type:this.constructor.type,messageText:this.props.i18n.get("ancv.confirmPayment"),awaitText:this.props.i18n.get("await.waitForConfirmation"),showCountdownTimer:s.showCountdownTimer,throttleTime:s.THROTTLE_TIME,throttleInterval:s.THROTTLE_INTERVAL,onActionHandled:this.onActionHandled}))):t(o,{i18n:this.props.i18n,loadingContext:this.props.loadingContext,resources:this.resources},t(r,m(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),o.forEach((function(e){l(t,e,r[e])}))}return t}({ref:t=>{this.componentRef=t}},this.props),{onSubmit:this.submit,onChange:this.setState,payButton:this.payButton,showPayButton:this.props.showPayButton})))}constructor(...e){super(...e),l(this,"onOrderRequest",(t=>this.props.onOrderRequest?new Promise(((e,r)=>{this.props.onOrderRequest(e,r,t)})):this.props.session?this.props.session.createOrder():void 0)),l(this,"createOrder",(()=>(this.setStatus("loading"),this.props.order?Promise.resolve():this.onOrderRequest(this.data).then((t=>{const e={order:{orderData:t.orderData,pspReference:t.pspReference}};return this.setState(e),Promise.resolve()})).catch((t=>{this.setStatus((null==t?void 0:t.message)||"error"),this.props.onError&&this.handleError(new a("ERROR",t))}))))),l(this,"payButton",(e=>t(p,e)))}}l(u,"type","ancv");export{u as ANCVElement,u as default};
//# sourceMappingURL=ANCV.js.map