import{createElement as e}from"../../../../external/preact/dist/preact.js";import o from"../../../internal/Voucher/Voucher.js";import{useCoreContext as r}from"../../../../core/Context/CoreProvider.js";import t from"../../../../core/Context/useImage.js";import{extractCommonPropsForVoucher as a}from"../../../internal/Voucher/utils.js";const n=n=>{const{i18n:d,loadingContext:c}=r(),i=t(),{reference:l,expiresAt:p,downloadUrl:s}=n,m=`${c}barcode.shtml?data=${l.replace(/[^\d]/g,"").replace(/^(\d{4})(\d{5})\d{1}(\d{10})\d{1}(\d{10})\d{1}(\d{15})$/,"$1$5$2$3$4")}&barcodeType=BT_Int2of5A&fileType=png`;return e(o,{...a({props:{...n,paymentMethodType:"boletobancario"},i18n:d,introKey:"voucher.introduction",getImage:i()}),barcode:m,voucherDetails:[{label:d.get("voucher.expirationDate"),value:d.date(p)}],downloadUrl:s,copyBtn:!0})};export{n as default};
//# sourceMappingURL=BoletoVoucherResult.js.map
