import{createElement as e}from"../../../external/preact/dist/preact.js";import r from"../FormFields/Field/Field.js";import{useCoreContext as o}from"../../../core/Context/CoreProvider.js";import l from"../FormFields/InputText.js";const i=({onBlur:i,onInput:t,valid:s=!1,error:a=null,data:u="",required:c=!1,disabled:n=!1,onFieldFocusAnalytics:m=null,onFieldBlurAnalytics:d=null})=>{const{i18n:p}=o();return e(r,{label:`${p.get("boleto.socialSecurityNumber")}`,classNameModifiers:["socialSecurityNumber"],errorMessage:a&&a.errorMessage?p.get(a.errorMessage):!!a,isValid:Boolean(s),name:"socialSecurityNumber",onFocus:e=>m?.("socialSecurityNumber",e),onBlur:e=>d?.("socialSecurityNumber",e)},e(l,{name:"socialSecurityNumber",autocorrect:"off",spellcheck:!1,value:u,maxLength:18,onInput:t,onBlur:i,required:c,disabled:n}))};export{i as default};
//# sourceMappingURL=SocialSecurityNumberBrazil.js.map
