import{createElement as e}from"../../../../external/preact/dist/preact.js";import s from"../../../internal/Img/Img.js";import{useCoreContext as t}from"../../../../core/Context/CoreProvider.js";import r from"../../../../core/Context/useImage.js";import{useA11yReporter as c}from"../../../../core/Errors/useA11yReporter.js";const o=({message:o})=>{const{i18n:a}=t(),m=r(),n=a.get(o||"creditCard.success");return c(n),e("div",{className:"adyen-checkout__status adyen-checkout__status--success"},e(s,{height:"88",className:"adyen-checkout__status__icon",src:m({extension:"gif",imageFolder:"components/"})("success"),alt:a.get(o||"creditCard.success")}),e("span",{className:"adyen-checkout__status__text"},n))};export{o as default};
//# sourceMappingURL=Success.js.map
