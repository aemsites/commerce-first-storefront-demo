import{createElement as e}from"../../../../external/preact/dist/preact.js";import r from"../../FormFields/Field/Field.js";import o from"./StateField.js";import t from"./CountryField.js";import{useCoreContext as i}from"../../../../core/Context/CoreProvider.js";import a from"../../FormFields/InputText.js";function s(s){const{i18n:n}=i(),{classNameModifiers:l=[],data:d,errors:c,valid:u,fieldName:m,onInput:f,onBlur:p,trimOnBlur:g,maxLength:F,disabled:v}=s,C=d[m],M=d.country,y=s.specifications.countryHasOptionalField(M,m),b=s.specifications.getKeyForField(m,M),j=y?` ${n.get("field.title.optional")}`:"",w=`${n.get(b)}${j}`,h=function(e,r,o,t){var i,a;if("object"==typeof(null===(i=e[r])||void 0===i?void 0:i.errorMessage)){const{translationKey:t,translationObject:i}=e[r].errorMessage;return o.get(t,i)}return o.get(null===(a=e[r])||void 0===a?void 0:a.errorMessage,{values:{label:t.toLowerCase()}})||!!e[r]}(c,m,n,w);switch(m){case"country":return e(t,{allowedCountries:s.allowedCountries,classNameModifiers:l,label:w,errorMessage:h,onDropdownChange:s.onDropdownChange,value:C});case"stateOrProvince":return e(o,{classNameModifiers:l,label:w,errorMessage:h,onDropdownChange:s.onDropdownChange,selectedCountry:M,specifications:s.specifications,value:C});default:return e(r,{label:w,classNameModifiers:l,errorMessage:h,isValid:u[m],name:m,i18n:n,onFocus:e=>s.onFieldFocusAnalytics(m,e),onBlur:e=>s.onFieldBlurAnalytics(m,e)},e(a,{name:m,classNameModifiers:l,value:C,onInput:f,onBlur:p,maxlength:F,trimOnBlur:g,disabled:v,required:!y}))}}export{s as default};
//# sourceMappingURL=FieldContainer.js.map