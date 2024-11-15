import{createElement as e}from"../../../../external/preact/dist/preact.js";import t from"../../../internal/Voucher/Voucher.js";import{useCoreContext as r}from"../../../../core/Context/CoreProvider.js";import o from"../../../../core/Context/useImage.js";import{extractCommonPropsForVoucher as n}from"../../../internal/Voucher/utils.js";function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}const u=u=>{const{expiresAt:l,maskedTelephoneNumber:s,instructionsUrl:a,collectionInstitutionNumber:p}=u,{i18n:b}=r(),m=o();return e(t,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){c(e,t,r[t])}))}return e}({},n({props:u,i18n:b,introKey:"voucher.introduction.econtext",getImage:m()})),{instructionsUrl:a,voucherDetails:[{label:b.get("voucher.collectionInstitutionNumber"),value:p},{label:b.get("voucher.expirationDate"),value:b.dateTime(l)},{label:b.get("voucher.telephoneNumber"),value:s}],copyBtn:!0}))};export{u as default};
//# sourceMappingURL=EcontextVoucherResult.js.map
