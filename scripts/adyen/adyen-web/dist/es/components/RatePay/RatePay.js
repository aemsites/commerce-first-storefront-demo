import e from"../helpers/OpenInvoiceContainer/OpenInvoiceContainer.js";import{ALLOWED_COUNTRIES as r}from"./config.js";import{TxVariants as o}from"../tx-variants.js";class t extends e{formatProps(e){return{...super.formatProps(e),allowedCountries:e.countryCode?[e.countryCode]:r}}}var n,a,i;n=t,a="type",i=o.ratepay,a in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i;export{t as default};
//# sourceMappingURL=RatePay.js.map
