import{createElement as t}from"../../external/preact/dist/preact.js";import e from"../helpers/QRLoaderContainer/QRLoaderContainer.js";import{CoreProvider as r}from"../../core/Context/CoreProvider.js";import o from"./PixInput/PixInput.js";import{cleanCPFCNPJ as n}from"../internal/SocialSecurityNumberBrazil/utils.js";import{TxVariants as s}from"../tx-variants.js";function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),o.forEach((function(e){i(t,e,r[e])}))}return t}function p(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e.push.apply(e,r)}return e}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})),t}class c extends e{get isValid(){return!!this.state.isValid}formatProps(t){return a({copyBtn:!0,introduction:"pix.instructions"},super.formatProps(t))}formatData(){const{data:t={}}=this.state,{firstName:e,lastName:r,socialSecurityNumber:o=""}=t;return a({paymentMethod:{type:this.props.type||this.constructor.type}},e&&r&&{shopperName:{firstName:e,lastName:r}},o&&{socialSecurityNumber:n(o)})}render(){return this.props.paymentData?this.renderQRCode():t(r,{i18n:this.props.i18n,loadingContext:this.props.loadingContext,resources:this.resources},t(o,p(a({ref:t=>{this.componentRef=t}},this.props),{showPayButton:this.props.showPayButton,personalDetailsRequired:this.props.personalDetailsRequired,name:this.displayName,onChange:this.setState,payButton:this.payButton})))}}i(c,"type",s.pix),i(c,"defaultProps",a({personalDetailsRequired:!1,countdownTime:15,delay:2e3},e.defaultProps));export{c as default};
//# sourceMappingURL=Pix.js.map