import{createElement as e}from"../../../../external/preact/dist/preact.js";import t from"../../../internal/Voucher/Voucher.js";import{useCoreContext as r}from"../../../../core/Context/CoreProvider.js";import o from"../../../../core/Context/useImage.js";import{extractCommonPropsForVoucher as n}from"../../../internal/Voucher/utils.js";const i=i=>{const{expiresAt:c,maskedTelephoneNumber:l,instructionsUrl:u,collectionInstitutionNumber:a}=i,{i18n:s}=r(),m=o();return e(t,{...n({props:i,i18n:s,introKey:"voucher.introduction.econtext",getImage:m()}),instructionsUrl:u,voucherDetails:[{label:s.get("voucher.collectionInstitutionNumber"),value:a},{label:s.get("voucher.expirationDate"),value:s.dateTime(c)},{label:s.get("voucher.telephoneNumber"),value:l}],copyBtn:!0})};export{i as default};
//# sourceMappingURL=EcontextVoucherResult.js.map