import{httpPost as t}from"../../core/Services/http.js";import{AMAZONPAY_GET_CHECKOUT_DETAILS_ENDPOINT as n,AMAZONPAY_UPDATE_CHECKOUT_SESSION_ENDPOINT as o,AMAZONPAY_SIGN_STRING_ENDPOINT as i}from"./config.js";function e(n,o,e){const r={loadingContext:n,path:`${i}?clientKey=${o}`},c={stringToSign:JSON.stringify(e)};return t(r,c)}function r(o,i,e){return t({loadingContext:o,path:`${n}?clientKey=${i}`},e)}function c(n,i,e){return t({loadingContext:n,path:`${o}?clientKey=${i}`},e)}export{e as getAmazonSignature,r as getCheckoutDetails,c as updateAmazonCheckoutSession};
//# sourceMappingURL=services.js.map