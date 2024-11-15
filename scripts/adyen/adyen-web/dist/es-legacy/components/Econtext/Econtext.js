import{createElement as t}from"../../external/preact/dist/preact.js";import{UIElement as e}from"../internal/UIElement/UIElement.js";import r from"./components/EcontextInput/EcontextInput.js";import o from"./components/EcontextVoucherResult/EcontextVoucherResult.js";import{CoreProvider as n}from"../../core/Context/CoreProvider.js";import{TxVariants as s}from"../tx-variants.js";function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),o.forEach((function(e){i(t,e,r[e])}))}return t}function c(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e.push.apply(e,r)}return e}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})),t}class a extends e{get isValid(){return!this.props.personalDetailsRequired||!!this.state.isValid}formatData(){return c(p({},this.state.data),{paymentMethod:{type:this.type}})}render(){return t(n,{i18n:this.props.i18n,loadingContext:this.props.loadingContext,resources:this.resources},this.props.reference?t(o,c(p({ref:t=>{this.componentRef=t}},this.props),{onActionHandled:this.onActionHandled})):t(r,c(p({setComponentRef:this.setComponentRef},this.props),{showPayButton:this.props.showPayButton,onChange:this.setState,onSubmit:this.submit,payButton:this.payButton})))}}i(a,"type",s.econtext),i(a,"txVariants",[s.econtext,s.econtext_atm,s.econtext_online,s.econtext_seven_eleven,s.econtext_stores]),i(a,"defaultProps",{personalDetailsRequired:!0});export{a as EcontextElement,a as default};
//# sourceMappingURL=Econtext.js.map