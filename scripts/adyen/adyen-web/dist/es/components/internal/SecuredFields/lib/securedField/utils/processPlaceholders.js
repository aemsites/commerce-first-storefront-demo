import{SF_FIELDS_MAP as t,ENCRYPTED_SECURITY_CODE as e,ENCRYPTED_SECURITY_CODE_3_DIGITS as r,ENCRYPTED_SECURITY_CODE_4_DIGITS as s,GIFT_CARD as i}from"../../constants.js";function c(c,o,u){switch(c){case"ach":return{[o]:u[t[o]]??""};case i:return{[o]:u[t[o]]??""};default:return o===e?{[r]:u.securityCodeThreeDigits??"",[s]:u.securityCodeFourDigits??""}:{[o]:u[t[o]]??""}}}export{c as processPlaceholders};
//# sourceMappingURL=processPlaceholders.js.map