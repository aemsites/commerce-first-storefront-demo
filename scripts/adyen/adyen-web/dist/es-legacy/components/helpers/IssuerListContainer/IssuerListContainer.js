import{createElement as t}from"../../../external/preact/dist/preact.js";import{UIElement as e}from"../../internal/UIElement/UIElement.js";import s from"../../internal/IssuerList/IssuerList.js";import r from"../../../utils/get-issuer-image.js";import{FALLBACK_CONTEXT as o}from"../../../core/config.js";import{CoreProvider as i}from"../../../core/Context/CoreProvider.js";import n from"../../internal/RedirectButton/RedirectButton.js";import p from"../../../core/Errors/SRPanelProvider.js";function a(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function u(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},r=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(s).filter((function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable})))),r.forEach((function(e){a(t,e,s[e])}))}return t}function c(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e.push.apply(e,s)}return e}(Object(e)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))})),t}class h extends e{formatProps(t){const e=t.details&&t.details.length&&(t.details.find((t=>"issuer"===t.key))||{}).items||t.issuers||[];return c(u({},t),{issuers:e})}formatData(){var t,e;return{paymentMethod:{type:this.type,issuer:null===(e=this.state)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.issuer}}}get isValid(){var t;return 0===this.props.issuers.length||!!(null===(t=this.state)||void 0===t?void 0:t.isValid)}get brands(){return this.props.showPaymentMethodItemImages?this.props.issuers.map((t=>({icon:t.icon,name:t.id}))):[]}render(){return t(i,{i18n:this.props.i18n,loadingContext:this.props.loadingContext,resources:this.resources},this.props.issuers.length>0?t(p,{srPanel:this.props.modules.srPanel},t(s,c(u({ref:t=>{this.componentRef=t},items:this.props.issuers,highlightedIds:this.props.highlightedIssuers},this.props,this.state),{showImage:this.props.showImage,type:this.constructor.type,onChange:this.setState,onSubmit:this.submit,payButton:this.payButton,contextualText:this.props.i18n.get("issuerList.selectField.contextualText"),onSubmitAnalytics:this.submitAnalytics}))):t(n,c(u({showPayButton:this.props.showPayButton,name:this.props.name},this.props),{onSubmit:this.submit,payButton:this.payButton,ref:t=>{this.componentRef=t}})))}constructor(t,e){super(t,e);const s=t=>this.resources.getImage(t);if(this.props.showImage){const t=r({loadingContext:this.props.loadingContext},this.constructor.type,s);this.props.issuers=this.props.issuers.map((e=>c(u({},e),{icon:t(e.id)})))}}}a(h,"defaultProps",{showImage:!0,issuers:[],highlightedIssuers:[],loadingContext:o,showPaymentMethodItemImages:!1});export{h as default};
//# sourceMappingURL=IssuerListContainer.js.map
