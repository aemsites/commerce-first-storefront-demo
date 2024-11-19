import{createElement as t}from"../../external/preact/dist/preact.js";import{UIElement as e}from"../internal/UIElement/UIElement.js";import{CoreProvider as r}from"../../core/Context/CoreProvider.js";import o from"./components/RedirectShopper/RedirectShopper.js";import s from"../internal/RedirectButton/RedirectButton.js";import{TxVariants as n}from"../tx-variants.js";import i from"../../utils/browserInfo.js";function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class a extends e{formatData(){return{paymentMethod:{type:this.type},browserInfo:this.browserInfo}}get isValid(){return!0}get browserInfo(){return i()}render(){return this.props.url&&this.props.method?t(o,{url:this.props.url,...this.props,onActionHandled:this.onActionHandled}):this.props.showPayButton?t(r,{i18n:this.props.i18n,loadingContext:this.props.loadingContext,resources:this.resources},t(s,{...this.props,showPayButton:this.props.showPayButton,name:this.displayName,onSubmit:this.submit,payButton:this.payButton,ref:t=>{this.componentRef=t}})):null}}p(a,"type",n.redirect),p(a,"defaultProps",{type:a.type});export{a as default};
//# sourceMappingURL=Redirect.js.map
