import{createElement as e}from"../../../../../external/preact/dist/preact.js";import r from"../../../../internal/LoadingWrapper/LoadingWrapper.js";import a from"./CardFields.js";import l from"./KCPAuthentication.js";import s from"../../../../internal/SocialSecurityNumberBrazil/SocialSecurityNumberBrazil.js";import n from"../../../../internal/StoreDetails/StoreDetails.js";import o from"../../../../internal/Address/Address.js";import i from"./CardHolderName.js";import d from"./Installments/Installments.js";import t from"../../../../internal/DisclaimerMessage/DisclaimerMessage.js";const u=({data:u,valid:c,errors:m,handleChangeFor:p,sfpState:h,setFocusOn:b,cvcPolicy:y,focusedElement:N,hasInstallments:S,handleInstallments:A,showAmountsInInstallments:F,brandsIcons:g,formData:f,formErrors:C,formValid:B,expiryDatePolicy:x,dualBrandSelectElements:v,extensions:w,selectedBrandValue:D,showKCP:I,showBrazilianSSN:j,socialSecurityNumber:E,handleOnStoreDetails:P,billingAddress:O,handleAddress:k,setAddressRef:R,partialAddressSchema:V,onAddressLookup:q,onAddressSelected:M,addressSearchDebounceMs:H,amount:L,billingAddressRequired:T,billingAddressRequiredFields:_,billingAddressAllowedCountries:z,billingAddressValidationRules:K=null,brandsConfiguration:W,showStoreDetailsCheckbox:$,hasCVC:G,hasHolderName:J,holderNameRequired:Q,installmentOptions:U,placeholders:X,positionHolderNameOnTop:Y,showBrandIcon:Z,showContextualElement:ee,iOSFocusedField:re,disclaimerMessage:ae,onFieldFocusAnalytics:le,onFieldBlurAnalytics:se})=>{const ne=e(i,{required:Q,placeholder:X.holderName,value:f.holderName,error:!!C.holderName&&Q,isValid:!!B.holderName,onBlur:p("holderName","blur"),onInput:p("holderName","input"),disabled:re&&"holderName"!==re,onFieldFocusAnalytics:le,onFieldBlurAnalytics:se});return e(r,{status:h.status},J&&Y&&ne,e(a,{showBrandIcon:Z,showContextualElement:ee,brand:h.brand,brandsIcons:g,brandsConfiguration:W,focusedElement:N,onFocusField:b,hasCVC:G,cvcPolicy:y,expiryDatePolicy:x,errors:h.errors,valid:h.valid,dualBrandingElements:v.length>0&&v,dualBrandingChangeHandler:w.handleDualBrandSelection,dualBrandingSelected:D}),J&&!Y&&ne,I&&e(l,{onFocusField:b,focusedElement:N,encryptedPasswordState:{data:h.encryptedPassword,valid:!!h.valid&&h.valid.encryptedPassword,errors:!!h.errors&&h.errors.encryptedPassword},value:u.taxNumber,error:!!m.taxNumber,isValid:!!c.taxNumber,onBlur:p("taxNumber","blur"),onInput:p("taxNumber","input"),disabled:re&&"kcpTaxNumberOrDOB"!==re,placeholder:X.taxNumber,onFieldFocusAnalytics:le,onFieldBlurAnalytics:se}),j&&e("div",{className:"adyen-checkout__card__socialSecurityNumber"},e(s,{onBlur:p("socialSecurityNumber","blur"),onInput:p("socialSecurityNumber","input"),error:null==m?void 0:m.socialSecurityNumber,valid:null==c?void 0:c.socialSecurityNumber,data:E,required:!0,disabled:re&&"socialSecurityNumber"!==re,onFieldFocusAnalytics:le,onFieldBlurAnalytics:se})),$&&e(n,{onChange:P}),S&&e(d,{amount:L,brand:h.brand,installmentOptions:U,onChange:A,type:F?"amount":"months"}),T&&e(o,{label:"billingAddress",data:O,onChange:k,allowedCountries:z,requiredFields:_,setComponentRef:R,validationRules:K,specifications:V,iOSFocusedField:re,onAddressLookup:q,showContextualElement:ee,onAddressSelected:M,addressSearchDebounceMs:H,onFieldFocusAnalytics:le,onFieldBlurAnalytics:se}),ae&&e(t,{message:ae.message.replace("%{linkText}",`%#${ae.linkText}%#`),urls:[ae.link]}))};export{u as CardFieldsWrapper};
//# sourceMappingURL=CardFieldsWrapper.js.map
