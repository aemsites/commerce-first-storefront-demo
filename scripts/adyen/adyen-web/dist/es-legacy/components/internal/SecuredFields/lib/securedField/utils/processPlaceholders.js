import{SF_FIELDS_MAP as r,ENCRYPTED_SECURITY_CODE as i,ENCRYPTED_SECURITY_CODE_3_DIGITS as t,ENCRYPTED_SECURITY_CODE_4_DIGITS as e,GIFT_CARD as o}from"../../constants.js";function u(u,n,l){switch(u){case"ach":var s;return{[n]:null!==(s=l[r[n]])&&void 0!==s?s:""};case o:var a;return{[n]:null!==(a=l[r[n]])&&void 0!==a?a:""};default:var c,d,v;return n===i?{[t]:null!==(c=l.securityCodeThreeDigits)&&void 0!==c?c:"",[e]:null!==(d=l.securityCodeFourDigits)&&void 0!==d?d:""}:{[n]:null!==(v=l[r[n]])&&void 0!==v?v:""}}}export{u as processPlaceholders};
//# sourceMappingURL=processPlaceholders.js.map
