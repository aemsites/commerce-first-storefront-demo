import{getDecimalAmount as e}from"../../utils/amount-util.js";import t from"./config.js";function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}function a(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function i({allowedAuthMethods:e,allowedCardNetworks:r,existingPaymentMethodRequired:n=!1}){return{apiVersion:t.API_VERSION,apiVersionMinor:t.API_VERSION_MINOR,allowedPaymentMethods:[{type:"CARD",parameters:{allowedAuthMethods:e,allowedCardNetworks:r},tokenizationSpecification:{type:"PAYMENT_GATEWAY",parameters:{}}}],existingPaymentMethodRequired:n}}function o(t){var{amount:r,countryCode:i="US",totalPriceStatus:o="FINAL"}=t,s=a(t,["amount","countryCode","totalPriceStatus"]);const l=String(e(r.value,r.currency));return n({countryCode:i,currencyCode:r.currency,totalPrice:l,totalPriceStatus:o},s.transactionInfo)}function s(e,r){var{configuration:i}=e,s=a(e,["configuration"]);return{apiVersion:t.API_VERSION,apiVersionMinor:t.API_VERSION_MINOR,transactionInfo:o(n({countryCode:r},s)),merchantInfo:n({merchantId:i.merchantId,merchantName:i.merchantName},i.merchantOrigin?{merchantOrigin:i.merchantOrigin}:{},i.authJwt?{authJwt:i.authJwt}:{}),allowedPaymentMethods:[{type:"CARD",tokenizationSpecification:{type:"PAYMENT_GATEWAY",parameters:{gateway:t.GATEWAY,gatewayMerchantId:i.gatewayMerchantId}},parameters:{allowedAuthMethods:s.allowedAuthMethods,allowedCardNetworks:s.allowedCardNetworks,assuranceDetailsRequired:s.assuranceDetailsRequired,allowPrepaidCards:s.allowPrepaidCards,allowCreditCards:s.allowCreditCards,billingAddressRequired:s.billingAddressRequired,billingAddressParameters:s.billingAddressParameters}}],emailRequired:s.emailRequired,shippingAddressRequired:s.shippingAddressRequired,shippingAddressParameters:s.shippingAddressParameters,shippingOptionRequired:s.shippingOptionRequired,shippingOptionParameters:s.shippingOptionParameters,callbackIntents:s.callbackIntents}}export{o as getTransactionInfo,s as initiatePaymentRequest,i as isReadyToPayRequest};
//# sourceMappingURL=requests.js.map