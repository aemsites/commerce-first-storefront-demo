import{createElement as e}from"../../external/preact/dist/preact.js";import r from"../helpers/OpenInvoiceContainer/OpenInvoiceContainer.js";import t from"../internal/ConsentCheckboxLabel/ConsentCheckboxLabel.js";import{ALLOWED_COUNTRIES as o,rivertyConsentUrlMap as n}from"./config.js";import{getConsentUrl as a}from"../../utils/getConsentUrl.js";import{TxVariants as s}from"../tx-variants.js";function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}class l extends r{formatProps(r){return{...super.formatProps(r),allowedCountries:r.countryCode?[r.countryCode]:o,consentCheckboxLabel:e(t,{url:a(r.countryCode,r.i18n?.locale,n)})}}}i(l,"type",s.afterpay_default),i(l,"txVariants",[s.afterpay_default,s.afterpay]);export{l as default};
//# sourceMappingURL=AfterPay.js.map