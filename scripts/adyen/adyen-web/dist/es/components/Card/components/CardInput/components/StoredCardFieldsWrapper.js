import{createElement as e}from"../../../../../external/preact/dist/preact.js";import s from"../../../../internal/LoadingWrapper/LoadingWrapper.js";import t from"./StoredCardFields.js";import a from"./Installments/Installments.js";import n from"../../../../internal/DisclaimerMessage/DisclaimerMessage.js";const r=({sfpState:r,setFocusOn:l,cvcPolicy:o,focusedElement:i,hasInstallments:m,handleInstallments:p,showAmountsInInstallments:c,showContextualElement:d,amount:u,hasCVC:h,installmentOptions:x,lastFour:f,expiryMonth:g,expiryYear:C,disclaimerMessage:y})=>e(s,{status:r.status},e(t,{errors:r.errors,brand:r.brand,hasCVC:h,cvcPolicy:o,onFocusField:l,focusedElement:i,valid:r.valid,lastFour:f,expiryMonth:g,expiryYear:C,showContextualElement:d}),m&&e(a,{amount:u,brand:r.brand,installmentOptions:x,onChange:p,type:c?"amount":"months"}),y&&e(n,{message:y.message.replace("%{linkText}",`%#${y.linkText}%#`),urls:[y.link]}));export{r as StoredCardFieldsWrapper};
//# sourceMappingURL=StoredCardFieldsWrapper.js.map