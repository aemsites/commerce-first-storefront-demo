import{createElement as t}from"../../external/preact/dist/preact.js";import{UIElement as e}from"../internal/UIElement/UIElement.js";import r from"./components/Challenge/PrepareChallenge3DS2.js";import{THREEDS2_ERROR as o,THREEDS2_CHALLENGE_ERROR as n,THREEDS2_FULL as s,DEFAULT_CHALLENGE_WINDOW_SIZE as i,THREEDS2_CHALLENGE as p}from"./constants.js";import{existy as a}from"../../utils/commonUtils.js";import{hasOwnProperty as c}from"../../utils/hasOwnProperty.js";import{TxVariants as l}from"../tx-variants.js";import m,{API_ERROR as u}from"../../core/Errors/AdyenCheckoutError.js";import{Analytics3DS2Errors as y,ANALYTICS_API_ERROR as f,ANALYTICS_RENDERED_STR as h,Analytics3DS2Events as b}from"../../core/Analytics/constants.js";import{CoreProvider as O}from"../../core/Context/CoreProvider.js";function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function j(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e.push.apply(e,r)}return e}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})),t}class g extends e{onComplete(t){t&&super.onComplete(t),this.unmount()}render(){if(!a(this.props.paymentData)){const t=c(this.props,"isMDFlow")?"paymentData":"authorisationToken";return this.props.onError(new m(u,`No ${t} received. 3DS2 Challenge cannot proceed`)),this.submitAnalytics({type:o,code:y.ACTION_IS_MISSING_PAYMENT_DATA,errorType:f,message:`${n}: Missing 'paymentData' property from threeDS2 action`}),null}return t(O,{i18n:this.props.i18n,loadingContext:this.props.loadingContext,resources:this.resources},t(r,j(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),o.forEach((function(e){d(t,e,r[e])}))}return t}({},this.props),{onComplete:this.onComplete,onSubmitAnalytics:this.submitAnalytics,isMDFlow:this.props.paymentData.length<15,onActionHandled:this.onActionHandled})))}constructor(...t){super(...t),d(this,"submitAnalytics",(t=>{t.type!==h&&super.submitAnalytics(t)})),d(this,"onActionHandled",(t=>{this.submitAnalytics({type:s,message:t.actionDescription,subtype:b.CHALLENGE_IFRAME_LOADED}),super.onActionHandled(t)}))}}d(g,"type",l.threeDS2Challenge),d(g,"defaultProps",{dataKey:"threeDSResult",size:i,type:p});export{g as default};
//# sourceMappingURL=ThreeDS2Challenge.js.map
