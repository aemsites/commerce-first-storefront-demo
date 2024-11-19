import{createElement as e}from"../../../../external/preact/dist/preact.js";import r from"../../../internal/Voucher/Voucher.js";import{useCoreContext as t}from"../../../../core/Context/CoreProvider.js";import o from"../../../../core/Context/useImage.js";import{extractCommonPropsForVoucher as n}from"../../../internal/Voucher/utils.js";function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r.push.apply(r,t)}return r}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}const a=a=>{const{expiresAt:u,instructionsUrl:p,shopperName:s,merchantName:l}=a,{i18n:b}=t(),m=o();return e(r,i(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(r){c(e,r,t[r])}))}return e}({},n({props:a,i18n:b,introKey:"voucher.introduction.doku",getImage:m()})),{instructionsUrl:p,voucherDetails:[{label:b.get("voucher.expirationDate"),value:b.date(u)},{label:b.get("voucher.shopperName"),value:s},{label:b.get("voucher.merchantName"),value:l}],copyBtn:!0}))};export{a as default};
//# sourceMappingURL=DokuVoucherResult.js.map
