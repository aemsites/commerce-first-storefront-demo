import e from"../helpers/OpenInvoiceContainer/OpenInvoiceContainer.js";import{ALLOWED_COUNTRIES as r}from"./config.js";import{TxVariants as t}from"../tx-variants.js";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r.push.apply(r,t)}return r}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}class i extends e{formatProps(e){return o(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(r){n(e,r,t[r])}))}return e}({},super.formatProps(e)),{allowedCountries:r,personalDetailsRequiredFields:["firstName","lastName","telephoneNumber","shopperEmail"]})}}n(i,"type",t.affirm);export{i as default};
//# sourceMappingURL=Affirm.js.map
