import{createElement as e}from"../../../../external/preact/dist/preact.js";import r from"../../../internal/Voucher/Voucher.js";import{useCoreContext as t}from"../../../../core/Context/CoreProvider.js";import o from"../../../../core/Context/useImage.js";import{extractCommonPropsForVoucher as a}from"../../../internal/Voucher/utils.js";const n=n=>{const{expiresAt:i,instructionsUrl:c,shopperName:s,merchantName:m}=n,{i18n:u}=t(),l=o();return e(r,{...a({props:n,i18n:u,introKey:"voucher.introduction.doku",getImage:l()}),instructionsUrl:c,voucherDetails:[{label:u.get("voucher.expirationDate"),value:u.date(i)},{label:u.get("voucher.shopperName"),value:s},{label:u.get("voucher.merchantName"),value:m}],copyBtn:!0})};export{n as default};
//# sourceMappingURL=DokuVoucherResult.js.map
