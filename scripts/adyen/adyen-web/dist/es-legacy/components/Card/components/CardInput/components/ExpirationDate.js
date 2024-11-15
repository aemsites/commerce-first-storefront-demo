import{createElement as e}from"../../../../../external/preact/dist/preact.js";import t from"../../../../../external/classnames/index.js";import a from"../../../../internal/FormFields/Field/Field.js";import{useCoreContext as i}from"../../../../../core/Context/CoreProvider.js";import n from"./DataSfSpan.js";import{DATE_POLICY_HIDDEN as o,DATE_POLICY_OPTIONAL as r,ENCRYPTED_EXPIRY_DATE as l,DATE_POLICY_REQUIRED as d}from"../../../../internal/SecuredFields/lib/constants.js";import c from"../../../../../core/Context/useImage.js";import{alternativeLabelContent as s}from"./FieldLabelAlternative.js";function _(_){const{label:p,focused:m,filled:u,onFocusField:x,className:f="",error:h="",isValid:y=!1,expiryDatePolicy:k=d,showContextualElement:F,contextualText:j}=_,{i18n:b}=i(),N=c(),g=t(f,{"adyen-checkout__field__exp-date":!0,"adyen-checkout__card__exp-date__input--hidden":k===o,"adyen-checkout__field__exp-date--optional":k===r}),C=k!==r?p:`${p} ${b.get("field.title.optional")}`;return e(a,{label:C,classNameModifiers:["expiryDate"],className:g,focused:m,filled:u,onFocusField:()=>x(l),errorMessage:h,isValid:y,dir:"ltr",name:"encryptedExpiryDate",i18n:b,contextVisibleToScreenReader:!1,useLabelElement:!1,renderAlternativeToLabel:s,showContextualElement:F,contextualText:j},e(n,{encryptedFieldType:l,className:t("adyen-checkout__input","adyen-checkout__input--small","adyen-checkout__card__exp-date__input",{"adyen-checkout__input--error":h,"adyen-checkout__input--focus":m,"adyen-checkout__input--valid":y})}),e("span",{className:t("adyen-checkout__field__exp-date_hint_wrapper",{"adyen-checkout__field__exp-date_hint_wrapper--hidden":h||y})},e("img",{src:N({imageFolder:"components/"})("expiry_date_hint"),className:"adyen-checkout__field__exp-date_hint",alt:C})))}export{_ as default};
//# sourceMappingURL=ExpirationDate.js.map