import{createElement as e}from"../../../../external/preact/dist/preact.js";import r from"../../../internal/Voucher/Voucher.js";import{useCoreContext as t}from"../../../../core/Context/CoreProvider.js";import o from"../../../../core/Context/useImage.js";import{extractCommonPropsForVoucher as n}from"../../../internal/Voucher/utils.js";const a=a=>{const{i18n:l}=t(),c=o(),{entity:i,expiresAt:u,merchantReference:s,downloadUrl:p}=a,m=[...i?[{label:l.get("voucher.entity"),value:i}]:[],...u?[{label:l.get("voucher.expirationDate"),value:l.date(u)}]:[],...s?[{label:l.get("voucher.shopperReference"),value:s}]:[]];return e(r,{...n({props:a,i18n:l,introKey:"voucher.introduction",getImage:c()}),barcode:null,copyBtn:!0,downloadUrl:p,voucherDetails:m})};export{a as default};
//# sourceMappingURL=MultibancoVoucherResult.js.map