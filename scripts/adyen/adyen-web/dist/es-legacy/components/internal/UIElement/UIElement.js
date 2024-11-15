import{createElement as t}from"../../../external/preact/dist/preact.js";import e from"../BaseElement/BaseElement.js";import s from"../PayButton/PayButton.js";import{assertIsDropin as i,getRegulatoryDefaults as n,sanitizeResponse as o,verifyPaymentDidNotFail as r,cleanupFinalResult as a}from"./utils.js";import l from"../../../core/Errors/AdyenCheckoutError.js";import{hasOwnProperty as h}from"../../../utils/hasOwnProperty.js";import{ANALYTICS_SUBMIT_STR as d}from"../../../core/Analytics/constants.js";import c from"../../../core/Errors/CancelError.js";function p(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function m(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},i=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(s).filter((function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable})))),i.forEach((function(e){p(t,e,s[e])}))}return t}function u(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e.push.apply(e,s)}return e}(Object(e)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))})),t}class y extends e{buildElementProps(t){const e=m({showPayButton:!0},this.core.getCorePropsForComponent(),!!(null==t?void 0:t.isStoredPaymentMethod)?{}:this.core.paymentMethodsResponse.find((null==t?void 0:t.type)||this.constructor.type),t),s=i(this);this.props=this.formatProps(m({},this.constructor.defaultProps,n(this.core.options.countryCode,s),e))}storeElementRefOnCore(t){(null==t?void 0:t.isDropin)||this.core.storeElementReference(this)}isAvailable(){return Promise.resolve()}setState(t){this.state=m({},this.state,t),this.onChange()}showValidation(){return this.componentRef&&this.componentRef.showValidation&&this.componentRef.showValidation(),this}setElementStatus(t,e){var s;return null===(s=this.elementRef)||void 0===s||s.setStatus(t,e),this}setStatus(t,e){var s;return(null===(s=this.componentRef)||void 0===s?void 0:s.setStatus)&&this.componentRef.setStatus(t,e),this}onChange(){var t,e;null===(t=(e=this.props).onChange)||void 0===t||t.call(e,{data:this.data,isValid:this.isValid,errors:this.state.errors,valid:this.state.valid},this.elementRef)}setUpAnalytics(t){var e;const s=null===(e=this.props.session)||void 0===e?void 0:e.id;return this.props.modules.analytics.setUp(m({},t,s&&{sessionId:s}))}submitAnalytics(t,e){try{let s=this.constructor.analyticsType;s||(s="scheme"===this.constructor.type||"bcmc"===this.constructor.type?this.constructor.type:this.props.type),this.props.modules.analytics.sendAnalytics(s,t,e)}catch(t){console.warn("Failed to submit the analytics event. Error:",t)}}submit(){this.isValid?this.makePaymentsCall().then(o).then(r).then(this.handleResponse).catch((t=>{t instanceof c?this.setElementStatus("ready"):this.handleFailedResult(t)})):this.showValidation()}makePaymentsCall(){if(this.setElementStatus("loading"),this.props.onSubmit)return this.submitUsingAdvancedFlow();if(this.core.session){return(this.props.beforeSubmit?new Promise(((t,e)=>this.props.beforeSubmit(this.data,this.elementRef,{resolve:t,reject:()=>e(new c("beforeSubmitRejected"))}))):Promise.resolve(this.data)).then(this.submitUsingSessionsFlow)}this.handleError(new l("IMPLEMENTATION_ERROR",'It can not perform /payments call. Callback "onSubmit" is missing or Checkout session is not available'))}async submitUsingAdvancedFlow(){return new Promise(((t,e)=>{this.submitAnalytics({type:d}),this.props.onSubmit({data:this.data,isValid:this.isValid},this.elementRef,{resolve:t,reject:e})}))}async submitUsingSessionsFlow(t){this.submitAnalytics({type:d});try{return await this.core.session.submitPayment(t)}catch(t){return t instanceof l?this.handleError(t):this.handleError(new l("ERROR","Error when making /payments call",{cause:t})),Promise.reject(t)}}onComplete(t){this.props.onComplete&&this.props.onComplete(t,this.elementRef)}handleAdditionalDetails(t){this.makeAdditionalDetailsCall(t).then(o).then(r).then(this.handleResponse).catch(this.handleFailedResult)}makeAdditionalDetailsCall(t){return this.props.onAdditionalDetails?new Promise(((e,s)=>{this.props.onAdditionalDetails(t,this.elementRef,{resolve:e,reject:s})})):this.core.session?this.submitAdditionalDetailsUsingSessionsFlow(t.data):void this.handleError(new l("IMPLEMENTATION_ERROR",'It can not perform /payments/details call. Callback "onAdditionalDetails" is missing or Checkout session is not available'))}async submitAdditionalDetailsUsingSessionsFlow(t){try{return await this.core.session.submitDetails(t)}catch(t){return t instanceof l?this.handleError(t):this.handleError(new l("ERROR","Error when making /details call",{cause:t})),Promise.reject(t)}}handleAction(t,e={}){if(!t||!t.type){if(h(t,"action")&&h(t,"resultCode"))throw new Error('handleAction::Invalid Action - the passed action object itself has an "action" property and a "resultCode": have you passed in the whole response object by mistake?');throw new Error('handleAction::Invalid Action - the passed action object does not have a "type" property')}const s=this.core.createFromAction(t,u(m({},this.elementRef.props,e),{onAdditionalDetails:this.handleAdditionalDetails}));return s?(this.unmount(),s.mount(this._node)):null}onActionHandled(t){var e,s;null===(s=this.props)||void 0===s||null===(e=s.onActionHandled)||void 0===e||e.call(s,m({originalAction:this.props.originalAction},t))}handleResponse(t){var e,s;const i=o(t);i.action?this.elementRef.handleAction(i.action):(null===(s=i.order)||void 0===s||null===(e=s.remainingAmount)||void 0===e?void 0:e.value)>0?this.handleOrder(i):this.handleSuccessResult(i)}handleKeyPress(t){var e;"Enter"!==t.key&&"Enter"!==t.code||(t.preventDefault(),this.onEnterKeyPressed(null===(e=document)||void 0===e?void 0:e.activeElement,this))}onEnterKeyPressed(t,e){this.props.onEnterKeyPressed?this.props.onEnterKeyPressed(t,e):(t.blur(),this.submit())}updateParent(t={}){return this.elementRef.core.update(t)}get isValid(){return!1}get icon(){const t=this.props.paymentMethodType||this.type;var e;return null!==(e=this.props.icon)&&void 0!==e?e:this.resources.getImage()(t)}get displayName(){var t,e;const s=null===(e=this.core.paymentMethodsResponse)||void 0===e||null===(t=e.paymentMethods)||void 0===t?void 0:t.find((t=>t.type===this.type));return this.props.name||(null==s?void 0:s.name)||this.type}get accessibleName(){return this.displayName}get additionalInfo(){return null}get type(){return this.props.type||this.constructor.type}async handleAdvanceFlowPaymentMethodsUpdate(t,e){return new Promise(((e,s)=>{if(!this.props.onPaymentMethodsRequest)return e();this.props.onPaymentMethodsRequest(u(m({},t&&{order:{orderData:t.orderData,pspReference:t.pspReference}}),{locale:this.core.options.locale}),{resolve:e,reject:s})})).catch((t=>{this.handleError(new l("IMPLEMENTATION_ERROR","Something failed during payment methods update or onPaymentMethodsRequest was not implemented",{cause:t}))})).then((s=>this.core.update(u(m({},s&&{paymentMethodsResponse:s}),{order:t,amount:t?t.remainingAmount:e}))))}constructor(e,n){super(e,n),p(this,"componentRef",void 0),p(this,"resources",void 0),p(this,"elementRef",void 0),p(this,"handleError",(t=>{this.setElementStatus("ready"),this.props.onError&&this.props.onError(t,this.elementRef)})),p(this,"handleOrder",(t=>{const{order:e}=t;(this.core.session?this.core.update({order:e}):this.handleAdvanceFlowPaymentMethodsUpdate(e)).then((()=>{var t,s;null===(t=(s=this.props).onOrderUpdated)||void 0===t||t.call(s,{order:e})}))})),p(this,"handleFailedResult",(t=>{var e,s;i(this.elementRef)&&this.elementRef.displayFinalAnimation("error"),a(t),null===(e=(s=this.props).onPaymentFailed)||void 0===e||e.call(s,t,this.elementRef)})),p(this,"handleSuccessResult",(t=>{var e,s;i(this.elementRef)&&this.elementRef.displayFinalAnimation("success"),a(t),null===(e=(s=this.props).onPaymentCompleted)||void 0===e||e.call(s,t,this.elementRef)})),p(this,"setComponentRef",(t=>{this.componentRef=t})),p(this,"payButton",(e=>t(s,u(m({},e),{amount:this.props.amount,secondaryAmount:this.props.secondaryAmount,onClick:this.submit})))),this.core.register(this.constructor),this.submit=this.submit.bind(this),this.setState=this.setState.bind(this),this.onComplete=this.onComplete.bind(this),this.handleAction=this.handleAction.bind(this),this.handleOrder=this.handleOrder.bind(this),this.handleAdditionalDetails=this.handleAdditionalDetails.bind(this),this.handleResponse=this.handleResponse.bind(this),this.setElementStatus=this.setElementStatus.bind(this),this.submitAnalytics=this.submitAnalytics.bind(this),this.makePaymentsCall=this.makePaymentsCall.bind(this),this.makeAdditionalDetailsCall=this.makeAdditionalDetailsCall.bind(this),this.submitUsingSessionsFlow=this.submitUsingSessionsFlow.bind(this),this.elementRef=n&&n.elementRef||this,this.resources=this.props.modules?this.props.modules.resources:void 0,this.storeElementRefOnCore(this.props),this.onEnterKeyPressed=this.onEnterKeyPressed.bind(this),this.onActionHandled=this.onActionHandled.bind(this)}}p(y,"type",void 0),p(y,"txVariants",[]);export{y as UIElement,y as default};
//# sourceMappingURL=UIElement.js.map