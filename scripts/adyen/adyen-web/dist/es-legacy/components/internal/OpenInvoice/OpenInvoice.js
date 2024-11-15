import{createElement as e}from"../../../external/preact/dist/preact.js";import{useRef as r,useState as s,useEffect as t}from"../../../external/preact/hooks/dist/hooks.js";import{useCoreContext as o}from"../../../core/Context/CoreProvider.js";import n from"../CompanyDetails/CompanyDetails.js";import i from"../PersonalDetails/PersonalDetails.js";import a from"../Address/Address.js";import l from"../FormFields/Checkbox/Checkbox.js";import d from"../FormFields/ConsentCheckbox/ConsentCheckbox.js";import{getInitialActiveFieldsets as c,fieldsetsSchema as u,getActiveFieldsData as b}from"./utils.js";import p from"../IbanInput/IbanInput.js";import m from"../FormFields/Field/Field.js";import y from"../FormInstruction/FormInstruction.js";import f from"./useSRPanelForOpenInvoiceErrors.js";function v(e,r,s){return r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}function h(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{},t=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),t.forEach((function(r){v(e,r,s[r])}))}return e}function C(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r.push.apply(r,s)}return r}(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))})),e}const g={isValid:!1,errorMessage:"consent.checkbox.invalid",error:"consent.checkbox.invalid"};function A(v){var A,k;const{countryCode:j,visibility:D}=v,{i18n:O}=o(),x=r({});var w;Object.keys(x.current).length||(null===(w=v.setComponentRef)||void 0===w||w.call(v,x.current));const F=r(!1),P=c(D,v.data),[S,R]=s(P),{current:E}=r(u.reduce(((e,r)=>(e[r]=e=>{E[r].current=e},e)),{})),I=!!v.consentCheckboxLabel,q=!I&&Object.keys(S).every((e=>!S[e])),V="editable"===D.deliveryAddress&&"hidden"!==D.billingAddress,[M,N]=s(h({},v.data,I&&{consentCheckbox:!1})),[L,B]=s({}),[_,z]=s({}),[G,H]=s("ready");x.current.showValidation=()=>{F.current=!0,u.forEach((e=>{E[e].current&&E[e].current.showValidation()})),B(h({},I&&{consentCheckbox:M.consentCheckbox?null:g}))},x.current.setStatus=H,f({errors:L,data:M,props:v,isValidating:F}),t((()=>{const e=Object.keys(S).every((e=>!S[e]||!!_[e])),r=!I||!!_.consentCheckbox,s=e&&r,t=b(S,M);v.onChange({data:t,errors:L,valid:_,isValid:s})}),[M,S]);const J=e=>r=>{N((s=>C(h({},s),{[e]:r.data}))),z((s=>C(h({},s),{[e]:r.isValid}))),B((s=>C(h({},s),{[e]:r.errors})))};var K,Q;return e("div",{className:"adyen-checkout__open-invoice"},e(y,null),S.companyDetails&&e(n,{data:v.data.companyDetails,label:"companyDetails",onChange:J("companyDetails"),setComponentRef:E.companyDetails,visibility:D.companyDetails}),S.personalDetails&&e(i,{data:v.data.personalDetails,requiredFields:v.personalDetailsRequiredFields,label:"personalDetails",onChange:J("personalDetails"),setComponentRef:E.personalDetails,visibility:D.personalDetails}),S.bankAccount&&e(p,{holderName:!0,label:"ach.bankAccount",data:M.bankAccount,onChange:J("bankAccount"),ref:E.bankAccount}),S.billingAddress&&e(a,{allowedCountries:null!==(K=null==v||null===(A=v.billingAddressSpecification)||void 0===A?void 0:A.allowedCountries)&&void 0!==K?K:v.allowedCountries,countryCode:j,requiredFields:v.billingAddressRequiredFields,specifications:v.billingAddressSpecification,data:M.billingAddress,label:"billingAddress",onChange:J("billingAddress"),setComponentRef:E.billingAddress,visibility:D.billingAddress}),V&&e(m,{classNameModifiers:["separateDeliveryAddress","consentCheckbox"],name:"separateDeliveryAddress",useLabelElement:!1,showErrorElement:!1},e(l,{label:O.get("separateDeliveryAddress"),checked:S.deliveryAddress,classNameModifiers:["separateDeliveryAddress"],name:"separateDeliveryAddress",onChange:()=>{R((e=>C(h({},e),{deliveryAddress:!S.deliveryAddress})))}})),S.deliveryAddress&&e(a,{allowedCountries:null!==(Q=null==v||null===(k=v.deliveryAddressSpecification)||void 0===k?void 0:k.allowedCountries)&&void 0!==Q?Q:v.allowedCountries,countryCode:j,requiredFields:v.deliveryAddressRequiredFields,specifications:v.deliveryAddressSpecification,data:M.deliveryAddress,label:"deliveryAddress",onChange:J("deliveryAddress"),setComponentRef:E.deliveryAddress,visibility:D.deliveryAddress}),I&&e(d,{data:M,errorMessage:!!L.consentCheckbox,label:v.consentCheckboxLabel,onChange:e=>{const{checked:r}=e.target;N((e=>C(h({},e),{consentCheckbox:r}))),z((e=>C(h({},e),{consentCheckbox:r}))),B((e=>h({},e,{consentCheckbox:r?null:g})))},i18n:O}),v.showPayButton&&v.payButton({status:G,classNameModifiers:[...q?["standalone"]:[]],label:O.get("confirmPurchase")}))}export{A as default};
//# sourceMappingURL=OpenInvoice.js.map