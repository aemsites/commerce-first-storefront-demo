import{Component as t,createElement as e}from"../../../external/preact/dist/preact.js";import r from"../../internal/SecuredFields/SFP/SecuredFieldsProvider.js";import o from"../../internal/Alert/Alert.js";import s from"./GiftcardResult.js";import{useCoreContext as n}from"../../../core/Context/CoreProvider.js";import{GIFT_CARD as i}from"../../internal/SecuredFields/lib/constants.js";import{GiftCardFields as a}from"./GiftcardFields.js";function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),o.forEach((function(e){c(t,e,r[e])}))}return t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e.push.apply(e,r)}return e}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})),t}class p extends t{setStatus(t){this.setState({status:t})}render(t,{focusedElement:a,balance:c,transactionLimit:p}){var d;const{i18n:f}=n(),h=(null==p?void 0:p.value)<(null==c?void 0:c.value)?p:c,m=(null==h?void 0:h.value)>=(null===(d=this.props.amount)||void 0===d?void 0:d.value);if(h&&m)return e(s,u({balance:c,transactionLimit:p,onSubmit:t.onSubmit},t));const b=t=>{if(t.errors.encryptedCardNumber)return f.get(t.errors.encryptedCardNumber);switch(this.state.status){case"no-balance":return f.get("error.giftcard.no-balance");case"card-error":return f.get("error.giftcard.card-error");case"currency-error":return f.get("error.giftcard.currency-error");default:return null}};return e("div",{className:"adyen-checkout__giftcard"},"error"===this.state.status&&e(o,{icon:"cross"},f.get("error.message.unknown")),e(r,l(u({},this.props),{ref:t=>{this.sfp=t},onChange:this.onChange,onFocus:this.handleFocus,type:i,render:({setRootNode:t,setFocusOn:e},r)=>this.props.fieldsLayoutComponent({i18n:f,pinRequired:this.props.pinRequired,focusedElement:a,getCardErrorMessage:b,setRootNode:t,setFocusOn:e,sfpState:r})})),this.props.showPayButton&&this.props.payButton({status:this.state.status,onClick:this.props.onSubmit,label:f.get("applyGiftcard")}))}constructor(...t){super(...t),c(this,"state",{status:"ready",data:{},balance:null,transactionLimit:null,focusedElement:!1,isValid:!1}),c(this,"sfp",void 0),c(this,"onChange",(t=>{this.props.onChange({data:t.data,isValid:t.isSfpValid})})),c(this,"showValidation",(()=>{this.sfp.showValidation()})),c(this,"handleFocus",(t=>{this.setState({focusedElement:t.currentFocusObject});!0===t.focus?this.props.onFocus(t):this.props.onBlur(t)})),c(this,"setBalance",(({balance:t,transactionLimit:e})=>{this.setState({balance:t,transactionLimit:e})}))}}c(p,"defaultProps",{pinRequired:!0,expiryDateRequired:!1,onChange:()=>{},onFocus:()=>{},onBlur:()=>{},fieldsLayoutComponent:a});export{p as default};
//# sourceMappingURL=GiftcardComponent.js.map
