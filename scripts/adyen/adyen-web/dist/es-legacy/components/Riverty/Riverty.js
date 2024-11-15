import{createElement as e}from"../../external/preact/dist/preact.js";import r from"../helpers/OpenInvoiceContainer/OpenInvoiceContainer.js";import{personalDetailsRequiredFields as t,deliveryAddressSpecification as o,allowedBillingCountries as n,allowedDeliveryCountries as i,DISCLAIMER_MESSAGE_TRANSLATION_KEY as s,termsAndConditionsUrlMap as c,privacyPolicyUrlMap as l}from"./config.js";import{getConsentUrl as a}from"../../utils/getConsentUrl.js";import{LabelOnlyDisclaimerMessage as p}from"../internal/DisclaimerMessage/DisclaimerMessage.js";import{TxVariants as u}from"../tx-variants.js";function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(r){f(e,r,t[r])}))}return e}function y(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r.push.apply(r,t)}return r}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}class b extends r{formatProps(r){var t,o;const u=a(r.countryCode,null===(t=r.i18n)||void 0===t?void 0:t.locale,c),f=a(r.countryCode,null===(o=r.i18n)||void 0===o?void 0:o.locale,l);return y(d({},super.formatProps(r)),{billingAddressSpecification:y(d({},r.billingAddressSpecification),{allowedCountries:r.countryCode?[r.countryCode]:n}),deliveryAddressSpecification:y(d({},r.deliveryAddressSpecification),{allowedCountries:i}),consentCheckboxLabel:e(p,{message:r.i18n.get(s),urls:[u,f]})})}}f(b,"type",u.riverty),f(b,"defaultProps",d({personalDetailsRequiredFields:t,deliveryAddressSpecification:o},r.defaultProps));export{b as default};
//# sourceMappingURL=Riverty.js.map
