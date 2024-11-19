import{Component as e,createElement as r}from"../../../../external/preact/dist/preact.js";import t from"./DoChallenge3DS2.js";import{isErrorObject as o,createOldChallengeResolveData as s,createChallengeResolveData as n,prepareChallengeData as i}from"../utils.js";import a from"../../../internal/Img/Img.js";import{hasOwnProperty as l}from"../../../../utils/hasOwnProperty.js";import c from"../../../../core/Context/useImage.js";import p,{ERROR as u}from"../../../../core/Errors/AdyenCheckoutError.js";import{THREEDS2_ERROR as h,THREEDS2_CHALLENGE_ERROR as m,MISSING_TOKEN_IN_ACTION_MSG as d,THREEDS2_FULL as g,THREEDS2_NUM as S,THREEDS2_CHALLENGE as f}from"../../constants.js";import{isValidHttpUrl as D}from"../../../../utils/isValidURL.js";import{Analytics3DS2Errors as O,ANALYTICS_API_ERROR as _,ANALYTICS_NETWORK_ERROR as b,Analytics3DS2Events as y}from"../../../../core/Analytics/constants.js";function E(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function C(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(r){E(e,r,t[r])}))}return e}function I(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r.push.apply(r,t)}return r}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}class T extends e{componentDidMount(){if(!o(this.state.challengeData)){var e,r;const t="test"===this.props.environment&&(null===(r=this.props._environmentUrls)||void 0===r||null===(e=r.api)||void 0===e?void 0:e.includes("http://localhost:8080")),{acsURL:o}=this.state.challengeData;if(!D(o,t)){this.setError({errorInfo:`${O.TOKEN_IS_MISSING_ACSURL}: ${this.props.i18n.get("err.gen.9102")}`},!0);const e={type:h,code:O.TOKEN_IS_MISSING_ACSURL,errorType:_,message:`${m}: Decoded token is missing a valid acsURL property`};return this.props.onSubmitAnalytics(e),void console.debug("### PrepareChallenge3DS2::exiting:: no valid acsURL")}const{acsTransID:s,messageVersion:n,threeDSServerTransID:i}=this.state.challengeData.cReqData;if(!s||!n||!i)return this.setError({errorInfo:`${O.TOKEN_IS_MISSING_OTHER_PROPS}: ${this.props.i18n.get("err.gen.9102")}`},!0),this.props.onSubmitAnalytics({type:h,code:O.TOKEN_IS_MISSING_OTHER_PROPS,errorType:_,message:`${m}: Decoded token is missing one or more of the following properties (acsTransID | messageVersion | threeDSServerTransID)`}),void console.debug("### PrepareChallenge3DS2::exiting:: missing one or more of the following properties (acsTransID | messageVersion | threeDSServerTransID)");this.setState({status:"performingChallenge"})}else{const e=this.state.challengeData.error,r=e.indexOf(d)>-1?O.ACTION_IS_MISSING_TOKEN:O.TOKEN_DECODE_OR_PARSING_FAILED;this.setError({errorInfo:e.indexOf(d)>-1?`${O.ACTION_IS_MISSING_TOKEN}: ${this.props.i18n.get("err.gen.9102")}`:`${O.TOKEN_DECODE_OR_PARSING_FAILED}: ${this.props.i18n.get("err.gen.9102")}`},!0),this.props.onSubmitAnalytics({type:h,code:r,errorType:_,message:`${m}: ${e}`}),console.debug("### PrepareChallenge3DS2::exiting:: no challengeData")}}setStatusComplete(e,r=null){this.setState({status:"complete"},(()=>{const t=(this.props.isMDFlow?s:n)(this.props.dataKey,e.transStatus,this.props.paymentData);let o;r&&console.debug("### PrepareChallenge3DS2::errorCodeObject::",r);const i=r||e;if(i.errorCode){const e={code:"timeout"===i.errorCode?O.THREEDS2_TIMEOUT:O.NO_TRANSSTATUS,errorType:"timeout"===i.errorCode?b:_};o=C({type:h,message:i.message},e),this.props.onSubmitAnalytics(o)}let a;switch(null==e?void 0:e.transStatus){case"Y":a="success";break;case"N":a="failed";break;case"U":a=r?"timeout":"cancelled"}(null==e?void 0:e.errorCode)&&(a="noTransStatus"),o={type:g,message:`${S} challenge has completed`,subtype:y.CHALLENGE_COMPLETED,result:a},this.props.onSubmitAnalytics(o),this.props.onComplete(t)}))}setError(e,r){this.setState({status:"error",errorInfo:e.errorInfo}),r&&this.props.onError(new p(u,e.errorInfo,{cause:e.errorObj}))}render(e,{challengeData:o}){const s=c();return"performingChallenge"===this.state.status?r(t,I(C({onCompleteChallenge:e=>{let r=null;if(l(e.result,"errorCode")&&e.result.errorCode.length&&(r={errorCode:e.result.errorCode,message:`${m}: ${e.result.errorDescription?e.result.errorDescription:"no transStatus could be retrieved"}`},this.props.isMDFlow&&this.props.onError(new p(u,`${m}: ${e.result.errorDescription?e.result.errorDescription:"no transStatus could be retrieved"}`,{cause:e.result.errorCode}))),!e.result)return this.setError({errorInfo:`${m}:  ${this.props.i18n.get("3ds.chal.805",{values:{result:'"result"'}})}`,errorObj:e},!0),this.props.onSubmitAnalytics({type:h,code:O.CHALLENGE_RESOLVED_WITHOUT_RESULT_PROP,errorType:_,message:`${m}: challenge resolved without a "result" object`}),void console.debug('### PrepareChallenge3DS2::exiting:: challenge resolved without a "result" object');this.setStatusComplete(e.result,r)},onErrorChallenge:e=>{if(l(e,"errorCode")){const r={errorCode:e.errorCode,message:`${f}: ${e.errorCode}`};return this.props.isMDFlow&&this.props.onError(new p(u,`${m}: '3DS2 challenge timed out'`,{cause:e.errorCode})),void this.setStatusComplete(e.result,r)}}},o),{onActionHandled:this.props.onActionHandled,onFormSubmit:this.onFormSubmit})):"error"===this.state.status?r("div",{className:"adyen-checkout__threeds2-challenge-error"},r(a,{className:"adyen-checkout__status__icon adyen-checkout__status__icon--error",src:s({imageFolder:"components/"})("error"),alt:""}),r("div",{className:"adyen-checkout__status__text"},this.state.errorInfo?this.state.errorInfo:this.props.i18n.get("error.message.unknown"))):null}constructor(e){if(super(e),E(this,"onFormSubmit",(e=>{this.props.onSubmitAnalytics({type:g,message:e,subtype:y.CHALLENGE_DATA_SENT})})),this.props.token){const e=i({token:this.props.token,size:this.props.challengeWindowSize||this.props.size});this.state={status:"init",challengeData:e}}else this.state={challengeData:{success:!1,error:d}},console.debug(`${m}: ${d}`)}}E(T,"defaultProps",{onComplete:()=>{},onError:()=>{},isMDFlow:!1});export{T as default};
//# sourceMappingURL=PrepareChallenge3DS2.js.map
