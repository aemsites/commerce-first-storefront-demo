import{Component as e,createElement as r}from"../../../../external/preact/dist/preact.js";import t from"../../../internal/IFrame/Iframe.js";import s from"../../../internal/Spinner/Spinner.js";import n from"../Form/ThreeDS2Form.js";import i from"../../../../utils/promiseTimeout.js";import o from"../../../../utils/get-process-message-handler.js";import{THREEDS_METHOD_TIMEOUT as a,THREEDS2_NUM as m,FAILED_METHOD_STATUS_RESOLVE_OBJECT_TIMEOUT as p}from"../../constants.js";import{encodeBase64URL as d}from"../utils.js";function h(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const c="threeDSMethodIframe";class l extends e{get3DS2MethodPromise(){return new Promise(((e,r)=>{this.processMessageHandler=o(this.props.postMessageDomain,e,r,"fingerPrintResult"),window.addEventListener("message",this.processMessageHandler)}))}componentDidMount(){this.fingerPrintPromise=i(a,this.get3DS2MethodPromise(),p),this.fingerPrintPromise.promise.then((e=>{window.removeEventListener("message",this.processMessageHandler),this.props.onCompleteFingerprint(e)})).catch((e=>{window.removeEventListener("message",this.processMessageHandler),this.props.onErrorFingerprint(e)}))}componentWillUnmount(){this.fingerPrintPromise&&this.fingerPrintPromise.cancel(),window.removeEventListener("message",this.processMessageHandler)}render({threeDSMethodURL:e,onActionHandled:i,onFormSubmit:o},{base64URLencodedData:a}){return r("div",{className:"adyen-checkout__3ds2-device-fingerprint"},this.props.showSpinner&&r(s,null),r("div",{style:{display:"none"}},r(t,{name:c,callback:()=>{null==i||i({componentType:"3DS2Fingerprint",actionDescription:`${m} fingerprint iframe loaded`})}}),r(n,{name:"threeDSMethodForm",action:e,target:c,inputName:"threeDSMethodData",inputValue:a,onFormSubmit:o})))}constructor(e){super(e),h(this,"processMessageHandler",void 0),h(this,"fingerPrintPromise",void 0);const{threeDSServerTransID:r,threeDSMethodNotificationURL:t}=this.props,s=JSON.stringify({threeDSServerTransID:r,threeDSMethodNotificationURL:t}),n=d(s);this.state={base64URLencodedData:n}}}h(l,"defaultProps",{showSpinner:!0});export{l as default};
//# sourceMappingURL=DoFingerprint3DS2.js.map