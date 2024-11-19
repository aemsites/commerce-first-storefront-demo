import{createElement as e,Fragment as t}from"../../../../external/preact/dist/preact.js";import r from"../../../../utils/getProp.js";import{OrderPaymentMethods as o}from"./OrderPaymentMethods.js";import n from"./InstantPaymentMethods.js";import{useCoreContext as s}from"../../../../core/Context/CoreProvider.js";import{useBrandLogoConfiguration as a}from"./useBrandLogoConfiguration.js";import i from"./PaymentMethodsContainer.js";import{useEffect as l}from"../../../../external/preact/hooks/dist/hooks.js";function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){p(e,t,r[t])}))}return e}function d(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function m(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const y=p=>{var{paymentMethods:y=[],instantPaymentMethods:f=[],storedPaymentMethods:u=[],openFirstStoredPaymentMethod:b,openFirstPaymentMethod:h,openPaymentMethod:O,order:P,orderStatus:j=null,onOrderCancel:g,onSelect:M=()=>{}}=p,v=m(p,["paymentMethods","instantPaymentMethods","storedPaymentMethods","openFirstStoredPaymentMethod","openFirstPaymentMethod","openPaymentMethod","order","orderStatus","onOrderCancel","onSelect"]);const{i18n:S}=s(),w=a(y),C=f.length>0,k=u.length>0,x=C||k?S.get("paymentMethodsList.otherPayments.label"):"";return l((()=>{if(null==O?void 0:O.type){const e=y.find((e=>e.type===(null==O?void 0:O.type)));if(e)return void M(e);console.warn(`Drop-in: payment method type "${null==O?void 0:O.type}" not found`)}const e=u[0],t=y[0];if(e||t){if(b&&!0===r(e,"props.oneClick"))return void M(e);h&&M(t)}}),[u,y,b,h,O]),e(t,null,j&&e(o,{order:P,orderStatus:j,onOrderCancel:g,brandLogoConfiguration:w}),C&&e(n,{paymentMethods:f}),k&&e(i,d(c({},v),{label:S.get("paymentMethodsList.storedPayments.label"),classNameModifiers:["storedPayments"],paymentMethods:u,onSelect:M})),!!y.length&&e(i,d(c({},v),{label:x,classNameModifiers:["otherPayments"],paymentMethods:y,onSelect:M})))};export{y as default};
//# sourceMappingURL=PaymentMethodList.js.map
