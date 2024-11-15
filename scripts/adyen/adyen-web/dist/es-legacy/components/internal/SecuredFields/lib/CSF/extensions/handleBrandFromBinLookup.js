import{DATE_POLICY_REQUIRED as e,ENCRYPTED_EXPIRY_DATE as t,DATE_POLICY_HIDDEN as s,ENCRYPTED_CARD_NUMBER as i,ENCRYPTED_SECURITY_CODE as r,ENCRYPTED_EXPIRY_MONTH as n,ENCRYPTED_EXPIRY_YEAR as o}from"../../constants.js";import c from"../utils/iframes/postMessageToIframe.js";import{hasOwnProperty as a}from"../../../../../../utils/hasOwnProperty.js";import l from"../utils/iframes/getIframeContentWin.js";function d(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function u(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},i=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),i.forEach((function(t){d(e,t,s[t])}))}return e}function y(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t.push.apply(t,s)}return t}(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})),e}function p(e){if(a(this.state.securedFields,i)){const t=y(u({txVariant:this.state.type},e),{fieldType:i,numKey:this.state.securedFields[i].numKey});c(t,l(this.state,i),this.config.loadingContext)}}function h(e){(a(this.state.securedFields,n)&&a(this.state.securedFields,o)?[n,o]:[t]).forEach((t=>{const s=y(u({txVariant:this.state.type},e),{fieldType:t,numKey:this.state.securedFields[t].numKey});c(s,l(this.state,t),this.config.loadingContext)}))}function f(c,l){const d="card"===this.state.type;if(!c||!Object.keys(c).length)return d?(this.sendBrandToCardSF({brand:"reset"}),this.sendExpiryDatePolicyToSF({expiryDatePolicy:e})):l&&this.processBrand(y(u({},l),{fieldType:i})),void("card"===this.state.type&&a(this.state.securedFields,t)&&(this.state.securedFields[t].expiryDatePolicy=e));const p=c.supportedBrands[0],h=p.brand;var f;const b=null!==(f=p.expiryDatePolicy)&&void 0!==f?f:!0===p.showExpiryDate?e:s;var P;const m={brand:h,cvcPolicy:p.cvcPolicy,expiryDatePolicy:b,cvcText:"Security code",showSocialSecurityNumber:null!==(P=p.showSocialSecurityNumber)&&void 0!==P&&P,fieldType:i};if(this.processBrand(m),d){const e=u({brand:h,enableLuhnCheck:!1!==c.supportedBrands[0].enableLuhnCheck},(null==p?void 0:p.panLength)&&{panLength:null==p?void 0:p.panLength});this.sendBrandToCardSF(e),this.sendExpiryDatePolicyToSF({expiryDatePolicy:b})}a(this.state.securedFields,r)&&(this.state.securedFields[r].cvcPolicy=p.cvcPolicy),a(this.state.securedFields,t)?this.state.securedFields[t].expiryDatePolicy=b:a(this.state.securedFields,n)&&a(this.state.securedFields,o)&&(this.state.securedFields[n].expiryDatePolicy=b,this.state.securedFields[o].expiryDatePolicy=b),this.validateForm()}export{f as default,p as sendBrandToCardSF,h as sendExpiryDatePolicyToSF};
//# sourceMappingURL=handleBrandFromBinLookup.js.map
