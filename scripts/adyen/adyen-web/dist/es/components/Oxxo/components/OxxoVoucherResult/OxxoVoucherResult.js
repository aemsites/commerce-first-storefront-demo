import{createElement as e}from"../../../../external/preact/dist/preact.js";import r from"../../../internal/Voucher/Voucher.js";import{useCoreContext as t}from"../../../../core/Context/CoreProvider.js";import o from"../../../../core/Context/useImage.js";import{extractCommonPropsForVoucher as a}from"../../../internal/Voucher/utils.js";const n=n=>{const{i18n:c,loadingContext:l}=t(),i=o(),{alternativeReference:p,reference:s,expiresAt:u,merchantReference:d,downloadUrl:m}=n,f=`${l}barcode.shtml?data=${s}&barcodeType=BT_Code128C&fileType=png`,h=[...u?[{label:c.get("voucher.expirationDate"),value:c.date(u)}]:[],...d?[{label:c.get("voucher.shopperReference"),value:d}]:[],...p?[{label:c.get("voucher.alternativeReference"),value:p}]:[]];return e(r,{...a({props:n,i18n:c,introKey:"voucher.introduction",getImage:i()}),barcode:f,copyBtn:!0,downloadUrl:m,voucherDetails:h})};export{n as default};
//# sourceMappingURL=OxxoVoucherResult.js.map