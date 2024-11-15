import{Component as t,createElement as e}from"../../../external/preact/dist/preact.js";import o from"../Countdown/index.js";import r from"../Button/Button.js";import s from"../Spinner/Spinner.js";import a from"../../../core/Services/payment-status.js";import{processResponse as i}from"../../../core/ProcessResponse/process-response.js";import{copyToClipboard as n}from"../../../utils/clipboard.js";import c from"../../../core/Errors/AdyenCheckoutError.js";import{useCoreContext as p}from"../../../core/Context/CoreProvider.js";import d from"../ContentSeparator/ContentSeparator.js";import l from"../../../core/Context/useImage.js";import{useA11yReporter as m}from"../../../core/Errors/useA11yReporter.js";import u from"../../../utils/useAutoFocus.js";import{ANALYTICS_DOWNLOAD_STR as h,ANALYTICS_QR_CODE_DOWNLOAD as _}from"../../../core/Analytics/constants.js";import{PREFIX as y}from"../Icon/constants.js";function g(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}class f extends t{componentDidMount(){this.statusInterval()}componentWillUnmount(){clearTimeout(this.timeoutId)}pollStatus(t){clearTimeout(this.timeoutId),this.timeoutId=setTimeout((async()=>{const t=performance.now();await this.checkStatus();const e=performance.now();this.statusInterval(Math.round(e-t))}),t)}render({amount:t,url:a,brandLogo:i,brandName:c,countdownTime:g,type:f,onActionHandled:k},{expired:q,completed:b,loading:v}){const{i18n:C,loadingContext:N}=p(),w=l(),T=this.props.qrCodeData?`${N}barcode.shtml?barcodeType=qrCode&fileType=png&data=${this.props.qrCodeData}`:this.props.qrCodeImage,I=(t,o)=>{const r=C.get(o);return m(r),e("div",{className:"adyen-checkout__qr-loader adyen-checkout__qr-loader--result"},e("img",{className:"adyen-checkout__qr-loader__icon adyen-checkout__qr-loader__icon--result",src:w({imageFolder:"components/"})(t),alt:r}),e("div",{className:"adyen-checkout__qr-loader__subtitle"},r))};if(q)return I("error","error.subtitle.payment");if(b)return I("success","creditCard.success");if(v)return e("div",{className:"adyen-checkout__qr-loader"},i&&e("div",{className:"adyen-checkout__qr-loader__brand-logo-wrapper"},e("img",{alt:c,src:i,className:"adyen-checkout__qr-loader__brand-logo"})),e(s,null));const j=C.get(this.props.timeToPay).split("%@"),S=u(),x=this.props.classNameModifiers.map((t=>`adyen-checkout__qr-loader--${t}`));return e("div",{className:`adyen-checkout__qr-loader adyen-checkout__qr-loader--${f} ${x.join(" ")}`},i&&e("div",{className:"adyen-checkout__qr-loader__brand-logo-wrapper"},e("img",{src:i,alt:c,className:"adyen-checkout__qr-loader__brand-logo"})),t&&t.value&&t.currency&&e("div",{className:"adyen-checkout__qr-loader__payment_amount"},C.amount(t.value,t.currency)),a&&e("div",{className:"adyen-checkout__qr-loader__app-link"},this.props.redirectIntroduction&&e("div",{className:"adyen-checkout__qr-loader__subtitle"},C.get(this.props.redirectIntroduction)),e(r,{classNameModifiers:["qr-loader"],onClick:()=>this.redirectToApp(a),label:C.get(this.props.buttonLabel)}),e(d,null)),e("div",{ref:S,tabIndex:0,className:"adyen-checkout__qr-loader__subtitle"},"string"==typeof this.props.introduction?C.get(this.props.introduction):this.props.introduction?.()),e("img",{src:T,alt:C.get("wechatpay.scanqrcode"),onLoad:()=>{k?.({componentType:this.props.type,actionDescription:"qr-code-loaded"})}}),e("div",{className:"adyen-checkout__qr-loader__progress"},e("span",{className:"adyen-checkout__qr-loader__percentage",style:{width:`${this.state.percentage}%`}})),e("div",{className:"adyen-checkout__qr-loader__countdown"},j[0]," ",e(o,{minutesFromNow:g,onTick:this.onTick,onCompleted:this.onTimeUp})," ",j[1]),this.props.instructions&&e("div",{className:"adyen-checkout__qr-loader__instructions"},"string"==typeof this.props.instructions?C.get(this.props.instructions):this.props.instructions?.()),this.props.copyBtn&&e("div",{className:"adyen-checkout__qr-loader__actions"},e(r,{inline:!0,variant:"action",onClick:(t,{complete:e})=>{n(this.props.qrCodeData),this.props.onSubmitAnalytics({type:h,target:_}),e()},icon:w({imageFolder:"components/"})(`${y}copy`),label:C.get("button.copy")})))}constructor(t){super(t),g(this,"timeoutId",void 0),g(this,"redirectToApp",(t=>{window.location.assign(t)})),g(this,"statusInterval",((t=0)=>{if(this.state.expired||this.state.completed)return;this.setState((e=>({timePassed:e.timePassed+this.props.delay+t})));const e=this.state.timePassed>=this.props.throttleTime?this.props.throttledInterval:this.state.delay;this.pollStatus(e)})),g(this,"onTick",(t=>{this.setState({percentage:t.percentage})})),g(this,"onTimeUp",(()=>{this.setState({expired:!0}),clearTimeout(this.timeoutId),this.props.onError(new c("ERROR","Payment Expired"))})),g(this,"onComplete",(t=>{clearTimeout(this.timeoutId),this.setState({completed:!0,loading:!1});const e={data:{details:{payload:t.props.payload},paymentData:this.props.paymentData}};this.props.onComplete(e,this)})),g(this,"onError",(t=>{if(clearTimeout(this.timeoutId),this.setState({expired:!0,loading:!1}),t.props.payload){const e={data:{details:{payload:t.props.payload},paymentData:this.props.paymentData}};this.props.onComplete(e,this)}const e=new c("ERROR","error result with no payload in response");return this.props.onError(e)})),g(this,"checkStatus",(()=>{const{paymentData:t,clientKey:e,loadingContext:o,throttledInterval:r}=this.props;return a(t,e,o,r).then(i).catch((t=>({type:"network-error",props:t}))).then((t=>{switch(t.type){case"success":this.onComplete(t);break;case"error":this.onError(t);break;default:this.setState({loading:!1})}return t}))})),this.state={buttonStatus:"default",completed:!1,delay:t.delay,expired:!1,loading:!0,percentage:100,timePassed:0}}}g(f,"defaultProps",{delay:2e3,countdownTime:15,onError:()=>{},onComplete:()=>{},throttleTime:6e4,classNameModifiers:[],throttledInterval:1e4,introduction:"wechatpay.scanqrcode",timeToPay:"wechatpay.timetopay",buttonLabel:"openApp"});export{f as default};
//# sourceMappingURL=QRLoader.js.map
