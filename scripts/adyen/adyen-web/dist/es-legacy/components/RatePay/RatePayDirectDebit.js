import e from"../helpers/OpenInvoiceContainer/OpenInvoiceContainer.js";import{ALLOWED_COUNTRIES as t}from"./config.js";import{TxVariants as r}from"../tx-variants.js";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}function c(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}class i extends e{formatProps(e){return c(o({},super.formatProps(o({},e,{visibility:{bankAccount:"editable"}}))),{allowedCountries:e.countryCode?[e.countryCode]:t})}}n(i,"type",r.ratepay_directdebit);export{i as default};
//# sourceMappingURL=RatePayDirectDebit.js.map
