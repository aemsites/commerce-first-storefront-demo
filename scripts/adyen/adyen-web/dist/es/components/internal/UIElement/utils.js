const e=["action","resultCode","sessionData","order","sessionResult","donationToken","error"];function n(n){const o=[],t=Object.keys(n).reduce(((t,r)=>(e.includes(r)?t[r]=n[r]:o.push(r),t)),{});return o.length&&console.warn(`The following properties should not be passed to the client: ${o.join(", ")}`),t}function o(e){e&&(delete e.order,delete e.action,e.donationToken&&0!==e.donationToken.length||delete e.donationToken)}function t(e){return["Cancelled","Error","Refused"].includes(e.resultCode)?Promise.reject(e):Promise.resolve(e)}function r(e){if(!e)return!1;return"object"==typeof e.activePaymentMethod&&"function"==typeof e.closeActivePaymentMethod}function s(e,n){return"FI"===e&&n?{openFirstPaymentMethod:!1,openFirstStoredPaymentMethod:!1}:{}}function i(e){return e&&e.orderData&&e.pspReference?{orderData:e.orderData,pspReference:e.pspReference}:null}export{r as assertIsDropin,o as cleanupFinalResult,s as getRegulatoryDefaults,i as sanitizeOrder,n as sanitizeResponse,t as verifyPaymentDidNotFail};
//# sourceMappingURL=utils.js.map