import{createElement as e}from"../../../../../external/preact/dist/preact.js";import c from"../../../../../external/classnames/index.js";import t from"../../../Img/Img.js";import{SchemeNames as a}from"../../services/sdks/utils.js";import o from"../../context/useClickToPayContext.js";import s from"../../../../../core/Context/useImage.js";const r=({classNameModifiers:r=[]})=>{const m=s(),{schemes:p}=o(),n=m()("ctp"),d=m({imageFolder:"components/"})("pipe");return e("div",{className:c("adyen_checkout-ctp__brand-wrapper",r.map((e=>`adyen_checkout-ctp__brand-wrapper--${e}`)))},e(t,{className:"adyen_checkout-ctp__brand-logo",src:n,alt:"Logo of Click to Pay"}),e(t,{className:"adyen_checkout-ctp__brand-pipe",src:d,alt:""}),p.map((o=>e(t,{key:o,className:c("adyen_checkout-ctp__brand-scheme",`adyen_checkout-ctp__brand-scheme-${o}`),src:m()(o),alt:`Logo of ${a[o]}`}))))};export{r as CtPBrand};
//# sourceMappingURL=CtPBrand.js.map