import{httpPost as e}from"../../core/Services/http.js";import{pick as t}from"../../utils/commonUtils.js";import{THREEDS2_ERROR as n,THREEDS2_FINGERPRINT_SUBMIT as o}from"./constants.js";import{Analytics3DS2Errors as i,ANALYTICS_API_ERROR as r,ANALYTICS_SDK_ERROR as a}from"../../core/Analytics/constants.js";function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c({data:c}){e({path:`v1/submitThreeDS2Fingerprint?token=${this.props.clientKey}`,loadingContext:this.props.loadingContext,errorLevel:"fatal"},function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){s(e,t,n[t])}))}return e}({},c)).then((e=>{var s,c;let l;if("completed"===e.type){const{details:t}=e;return e.details?this.onComplete({data:{details:t}}):(console.debug('Handled Error::callSubmit3DS2Fingerprint::FAILED:: no details object in a response indicating either a "frictionless" flow, or a "refused" response. resData=',e),l={type:n,code:i.NO_DETAILS_FOR_FRICTIONLESS_OR_REFUSED,errorType:r,message:`${o}: no details object in a response indicating either a "frictionless" flow, or a "refused" response`},void this.submitAnalytics(l))}if(!e.action)return console.debug('Handled Error::callSubmit3DS2Fingerprint::FAILED:: no action object in a response indicating a "challenge". resData=',e),l={type:n,code:i.NO_ACTION_FOR_CHALLENGE,errorType:r,message:`${o}: no action object in a response indicating a "challenge" flow`},void this.submitAnalytics(l);var d;const p=null!==(d=this.props.elementRef)&&void 0!==d?d:this;return p?"threeDS2"===(null===(s=e.action)||void 0===s?void 0:s.type)?p.handleAction(e.action,t("challengeWindowSize").from(this.props)):"redirect"===(null===(c=e.action)||void 0===c?void 0:c.type)?p.handleAction(e.action):void 0:(console.debug("Handled Error::callSubmit3DS2Fingerprint::FAILED:: no actionHandler"),l={type:n,code:i.NO_COMPONENT_FOR_ACTION,errorType:a,message:`${o}: no component defined to handle the action response`},void this.submitAnalytics(l))})).catch((e=>{this.handleError(e)}))}export{c as default};
//# sourceMappingURL=callSubmit3DS2Fingerprint.js.map