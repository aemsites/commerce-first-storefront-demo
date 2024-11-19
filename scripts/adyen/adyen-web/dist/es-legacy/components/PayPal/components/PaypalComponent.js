import{createElement as e}from"../../../external/preact/dist/preact.js";import{useState as t,useCallback as r,useEffect as n}from"../../../external/preact/hooks/dist/hooks.js";import o from"./PaypalButtons.js";import a from"../../internal/Spinner/Spinner.js";import{getPaypalUrl as c}from"../utils/get-paypal-url.js";import p from"../../../utils/Script.js";function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function y(s){var{onApprove:y,onCancel:f,onChange:b,onError:m,onSubmit:O,onScriptLoadFailure:d}=s,g=u(s,["onApprove","onCancel","onChange","onError","onSubmit","onScriptLoadFailure"]);const[j,h]=t("pending");this.setStatus=h;const v=r(((e,t)=>{h("processing"),y(e,t)}),[y]),P=()=>{h("ready")},S=e=>{d(e)};return n((()=>{const e=c(g),t=i({},g.cspNonce&&{nonce:g.cspNonce}),r=i({},g.cspNonce&&{cspNonce:g.cspNonce}),n=new p(e,"body",t,r);return n.load().then(P).catch(S),()=>{n.remove()}}),[]),"pending"===j?e("div",{className:"adyen-checkout__paypal","aria-live":"polite","aria-busy":"true"},e("div",{className:"adyen-checkout__paypal__status adyen-checkout__paypal__status--pending","data-testid":"paypal-loader"},e(a,null))):e("div",{className:"adyen-checkout__paypal"},e(o,l(i({},g),{onCancel:f,onChange:b,onError:m,onSubmit:O,onApprove:v,isProcessingPayment:"processing"===j,paypalRef:window.paypal})))}export{y as default};
//# sourceMappingURL=PaypalComponent.js.map
