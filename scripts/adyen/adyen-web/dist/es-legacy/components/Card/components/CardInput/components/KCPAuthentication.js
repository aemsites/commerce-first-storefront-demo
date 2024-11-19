import{createElement as e}from"../../../../../external/preact/dist/preact.js";import{useMemo as r}from"../../../../../external/preact/hooks/dist/hooks.js";import t from"../../../../../external/classnames/index.js";import a from"../../../../internal/FormFields/Field/Field.js";import{useCoreContext as o}from"../../../../../core/Context/CoreProvider.js";import s from"./DataSfSpan.js";import d from"../../../../internal/FormFields/InputTelephone.js";import{alternativeLabelContent as n}from"./FieldLabelAlternative.js";import{CREDITCARD_TAX_NUMBER_INVALID as l}from"../../../../../core/Errors/constants.js";function i(i){const{i18n:c}=o(),u=r((()=>{var e;return(null===(e=i.value)||void 0===e?void 0:e.length)>6?c.get("creditCard.taxNumber.labelAlt"):c.get("creditCard.taxNumber.label")}),[i.value]);return e("div",{className:"adyen-checkout__card__kcp-authentication"},e(a,{label:u,filled:i.filled,classNameModifiers:["kcp-taxNumber"],errorMessage:i.error&&c.get(l),isValid:i.isValid,dir:"ltr",name:"kcpTaxNumberOrDOB",onFocus:e=>i.onFieldFocusAnalytics("taxNumber",e),onBlur:e=>i.onFieldBlurAnalytics("taxNumber",e)},e(d,{name:"kcpTaxNumberOrDOB",className:"adyen-checkout__card__kcp-taxNumber__input adyen-checkout__input",maxLength:10,minLength:6,autoComplete:"false",value:i.value,required:!0,onBlur:i.onBlur,onInput:i.onInput,disabled:i.disabled,placeholder:i.placeholder})),e(a,{label:c.get("creditCard.password.label"),focused:"encryptedPassword"===i.focusedElement,filled:i.filled,classNameModifiers:["50","koreanAuthentication-encryptedPassword"],onFocusField:()=>i.onFocusField("encryptedPassword"),errorMessage:i.encryptedPasswordState.errors&&c.get(String(i.encryptedPasswordState.errors)),isValid:i.encryptedPasswordState.valid,dir:"ltr",name:"encryptedPassword",useLabelElement:!1,renderAlternativeToLabel:n},e(s,{encryptedFieldType:"encryptedPassword",className:t({"adyen-checkout__input":!0,"adyen-checkout__input--large":!0,"adyen-checkout__input--error":i.encryptedPasswordState.errors,"adyen-checkout__input--valid":i.encryptedPasswordState.valid,"adyen-checkout__input--focus":"encryptedPassword"===i.focusedElement})})))}export{i as default};
//# sourceMappingURL=KCPAuthentication.js.map
