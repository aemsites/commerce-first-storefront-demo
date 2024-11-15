import{Component as e,createElement as r}from"../../../../external/preact/dist/preact.js";import t from"./DoChallenge3DS2.js";import{isErrorObject as s,createOldChallengeResolveData as o,createChallengeResolveData as n,prepareChallengeData as i}from"../utils.js";import a from"../../../internal/Img/Img.js";import{hasOwnProperty as l}from"../../../../utils/hasOwnProperty.js";import p from"../../../../core/Context/useImage.js";import c,{ERROR as h}from"../../../../core/Errors/AdyenCheckoutError.js";import{THREEDS2_ERROR as u,THREEDS2_CHALLENGE_ERROR as m,MISSING_TOKEN_IN_ACTION_MSG as d,THREEDS2_FULL as g,THREEDS2_NUM as S,THREEDS2_CHALLENGE as _}from"../../constants.js";import{isValidHttpUrl as D}from"../../../../utils/isValidURL.js";import{Analytics3DS2Errors as C,ANALYTICS_API_ERROR as E,ANALYTICS_NETWORK_ERROR as I,Analytics3DS2Events as f}from"../../../../core/Analytics/constants.js";function T(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}class y extends e{componentDidMount(){if(!s(this.state.challengeData)){const e="test"===this.props.environment&&this.props._environmentUrls?.api?.includes("http://localhost:8080"),{acsURL:r}=this.state.challengeData;if(!D(r,e)){this.setError({errorInfo:`${C.TOKEN_IS_MISSING_ACSURL}: ${this.props.i18n.get("err.gen.9102")}`},!0);const e={type:u,code:C.TOKEN_IS_MISSING_ACSURL,errorType:E,message:`${m}: Decoded token is missing a valid acsURL property`};return this.props.onSubmitAnalytics(e),void console.debug("### PrepareChallenge3DS2::exiting:: no valid acsURL")}const{acsTransID:t,messageVersion:s,threeDSServerTransID:o}=this.state.challengeData.cReqData;if(!t||!s||!o)return this.setError({errorInfo:`${C.TOKEN_IS_MISSING_OTHER_PROPS}: ${this.props.i18n.get("err.gen.9102")}`},!0),this.props.onSubmitAnalytics({type:u,code:C.TOKEN_IS_MISSING_OTHER_PROPS,errorType:E,message:`${m}: Decoded token is missing one or more of the following properties (acsTransID | messageVersion | threeDSServerTransID)`}),void console.debug("### PrepareChallenge3DS2::exiting:: missing one or more of the following properties (acsTransID | messageVersion | threeDSServerTransID)");this.setState({status:"performingChallenge"})}else{const e=this.state.challengeData.error,r=e.indexOf(d)>-1?C.ACTION_IS_MISSING_TOKEN:C.TOKEN_DECODE_OR_PARSING_FAILED;this.setError({errorInfo:e.indexOf(d)>-1?`${C.ACTION_IS_MISSING_TOKEN}: ${this.props.i18n.get("err.gen.9102")}`:`${C.TOKEN_DECODE_OR_PARSING_FAILED}: ${this.props.i18n.get("err.gen.9102")}`},!0),this.props.onSubmitAnalytics({type:u,code:r,errorType:E,message:`${m}: ${e}`}),console.debug("### PrepareChallenge3DS2::exiting:: no challengeData")}}setStatusComplete(e,r=null){this.setState({status:"complete"},(()=>{const t=(this.props.isMDFlow?o:n)(this.props.dataKey,e.transStatus,this.props.paymentData);let s;r&&console.debug("### PrepareChallenge3DS2::errorCodeObject::",r);const i=r||e;if(i.errorCode){const e={code:"timeout"===i.errorCode?C.THREEDS2_TIMEOUT:C.NO_TRANSSTATUS,errorType:"timeout"===i.errorCode?I:E};s={type:u,message:i.message,...e},this.props.onSubmitAnalytics(s)}let a;switch(e?.transStatus){case"Y":a="success";break;case"N":a="failed";break;case"U":a=r?"timeout":"cancelled"}e?.errorCode&&(a="noTransStatus"),s={type:g,message:`${S} challenge has completed`,subtype:f.CHALLENGE_COMPLETED,result:a},this.props.onSubmitAnalytics(s),this.props.onComplete(t)}))}setError(e,r){this.setState({status:"error",errorInfo:e.errorInfo}),r&&this.props.onError(new c(h,e.errorInfo,{cause:e.errorObj}))}render(e,{challengeData:s}){const o=p();return"performingChallenge"===this.state.status?r(t,{onCompleteChallenge:e=>{let r=null;if(l(e.result,"errorCode")&&e.result.errorCode.length&&(r={errorCode:e.result.errorCode,message:`${m}: ${e.result.errorDescription?e.result.errorDescription:"no transStatus could be retrieved"}`},this.props.isMDFlow&&this.props.onError(new c(h,`${m}: ${e.result.errorDescription?e.result.errorDescription:"no transStatus could be retrieved"}`,{cause:e.result.errorCode}))),!e.result)return this.setError({errorInfo:`${m}:  ${this.props.i18n.get("3ds.chal.805",{values:{result:'"result"'}})}`,errorObj:e},!0),this.props.onSubmitAnalytics({type:u,code:C.CHALLENGE_RESOLVED_WITHOUT_RESULT_PROP,errorType:E,message:`${m}: challenge resolved without a "result" object`}),void console.debug('### PrepareChallenge3DS2::exiting:: challenge resolved without a "result" object');this.setStatusComplete(e.result,r)},onErrorChallenge:e=>{if(l(e,"errorCode")){const r={errorCode:e.errorCode,message:`${_}: ${e.errorCode}`};return this.props.isMDFlow&&this.props.onError(new c(h,`${m}: '3DS2 challenge timed out'`,{cause:e.errorCode})),void this.setStatusComplete(e.result,r)}},...s,onActionHandled:this.props.onActionHandled,onFormSubmit:this.onFormSubmit}):"error"===this.state.status?r("div",{className:"adyen-checkout__threeds2-challenge-error"},r(a,{className:"adyen-checkout__status__icon adyen-checkout__status__icon--error",src:o({imageFolder:"components/"})("error"),alt:""}),r("div",{className:"adyen-checkout__status__text"},this.state.errorInfo?this.state.errorInfo:this.props.i18n.get("error.message.unknown"))):null}constructor(e){if(super(e),T(this,"onFormSubmit",(e=>{this.props.onSubmitAnalytics({type:g,message:e,subtype:f.CHALLENGE_DATA_SENT})})),this.props.token){const e=i({token:this.props.token,size:this.props.challengeWindowSize||this.props.size});this.state={status:"init",challengeData:e}}else this.state={challengeData:{success:!1,error:d}},console.debug(`${m}: ${d}`)}}T(y,"defaultProps",{onComplete:()=>{},onError:()=>{},isMDFlow:!1});export{y as default};
//# sourceMappingURL=PrepareChallenge3DS2.js.map