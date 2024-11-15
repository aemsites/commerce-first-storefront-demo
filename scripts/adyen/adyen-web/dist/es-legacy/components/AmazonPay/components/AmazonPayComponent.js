import{createElement as e}from"../../../external/preact/dist/preact.js";import{useState as t,useRef as n,useEffect as o}from"../../../external/preact/hooks/dist/hooks.js";import r from"../../internal/Spinner/Spinner.js";import{getAmazonPayUrl as a}from"../utils.js";import i from"./AmazonPayButton.js";import c from"./ChangePaymentDetailsButton.js";import u from"./OrderButton.js";import s from"./SignOutButton.js";import m from"../../../utils/Script.js";function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t.push.apply(t,n)}return t}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function d(d){const[y,f]=t("pending"),h=n(null),g=n(null),O=()=>{f("ready")};return this.getSubmitFunction=()=>h.current&&h.current.initCheckout?()=>h.current.initCheckout():g.current&&g.current.createOrder?()=>g.current.createOrder():void 0,o((()=>{const e=a(d.configuration.region),t=new m(e);return window.amazon?O():t.load().then(O),()=>{t.remove()}}),[]),"pending"===y?e("div",{className:"adyen-checkout__amazonpay"},e("div",{className:"adyen-checkout__amazonpay__status adyen-checkout__amazonpay__status--pending"},e(r,null))):d.showSignOutButton?e("div",{className:"adyen-checkout__amazonpay"},e(s,{amazonRef:window.amazon,onSignOut:d.onSignOut})):d.amazonCheckoutSessionId?e("div",{className:"adyen-checkout__amazonpay"},d.showOrderButton&&e(u,{amazonCheckoutSessionId:d.amazonCheckoutSessionId,amount:d.amount,chargePermissionType:d.chargePermissionType,recurringMetadata:d.recurringMetadata,clientKey:d.clientKey,onError:d.onError,publicKeyId:null===(b=d.configuration)||void 0===b?void 0:b.publicKeyId,region:null===(j=d.configuration)||void 0===j?void 0:j.region,returnUrl:d.returnUrl,ref:g}),d.showChangePaymentDetailsButton&&e(c,{amazonCheckoutSessionId:d.amazonCheckoutSessionId,amazonRef:window.amazon})):e("div",{className:"adyen-checkout__amazonpay"},e(i,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){p(e,t,n[t])}))}return e}({},d),{showPayButton:this.props.showPayButton,amazonRef:window.amazon,ref:h})));var b,j}export{d as default};
//# sourceMappingURL=AmazonPayComponent.js.map