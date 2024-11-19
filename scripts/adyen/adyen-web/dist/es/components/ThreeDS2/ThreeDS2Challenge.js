import{createElement as t}from"../../external/preact/dist/preact.js";import{UIElement as e}from"../internal/UIElement/UIElement.js";import o from"./components/Challenge/PrepareChallenge3DS2.js";import{THREEDS2_ERROR as r,THREEDS2_CHALLENGE_ERROR as s,THREEDS2_FULL as n,DEFAULT_CHALLENGE_WINDOW_SIZE as i,THREEDS2_CHALLENGE as a}from"./constants.js";import{existy as p}from"../../utils/commonUtils.js";import{hasOwnProperty as l}from"../../utils/hasOwnProperty.js";import{TxVariants as m}from"../tx-variants.js";import c,{API_ERROR as u}from"../../core/Errors/AdyenCheckoutError.js";import{Analytics3DS2Errors as h,ANALYTICS_API_ERROR as y,ANALYTICS_RENDERED_STR as d,Analytics3DS2Events as A}from"../../core/Analytics/constants.js";import{CoreProvider as f}from"../../core/Context/CoreProvider.js";function C(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}class D extends e{onComplete(t){t&&super.onComplete(t),this.unmount()}render(){if(!p(this.props.paymentData)){const t=l(this.props,"isMDFlow")?"paymentData":"authorisationToken";return this.props.onError(new c(u,`No ${t} received. 3DS2 Challenge cannot proceed`)),this.submitAnalytics({type:r,code:h.ACTION_IS_MISSING_PAYMENT_DATA,errorType:y,message:`${s}: Missing 'paymentData' property from threeDS2 action`}),null}return t(f,{i18n:this.props.i18n,loadingContext:this.props.loadingContext,resources:this.resources},t(o,{...this.props,onComplete:this.onComplete,onSubmitAnalytics:this.submitAnalytics,isMDFlow:this.props.paymentData.length<15,onActionHandled:this.onActionHandled}))}constructor(...t){super(...t),C(this,"submitAnalytics",(t=>{t.type!==d&&super.submitAnalytics(t)})),C(this,"onActionHandled",(t=>{this.submitAnalytics({type:n,message:t.actionDescription,subtype:A.CHALLENGE_IFRAME_LOADED}),super.onActionHandled(t)}))}}C(D,"type",m.threeDS2Challenge),C(D,"defaultProps",{dataKey:"threeDSResult",size:i,type:a});export{D as default};
//# sourceMappingURL=ThreeDS2Challenge.js.map
