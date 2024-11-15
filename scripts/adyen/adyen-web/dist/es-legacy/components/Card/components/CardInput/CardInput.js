import{createElement as e,Fragment as r}from"../../../../external/preact/dist/preact.js";import{useRef as t,useMemo as o,useState as n,useCallback as s,useEffect as l}from"../../../../external/preact/hooks/dist/hooks.js";import a from"../../../internal/SecuredFields/SFP/SecuredFieldsProvider.js";import i from"./defaultProps.js";import{AddressModeOptions as d}from"./types.js";import{ENCRYPTED_CARD_NUMBER as u,DATE_POLICY_REQUIRED as c,CVC_POLICY_REQUIRED as m}from"../../../internal/SecuredFields/lib/constants.js";import{cardInputFormatters as p,cardInputValidationRules as b,getRuleByNameAndMode as f}from"./validate.js";import y from"../../../internal/SecuredFields/binLookup/extensions.js";import h from"../../../../utils/useForm/useForm.js";import{handlePartialAddressMode as S,extractPropsForCardFields as N,extractPropsForSFP as g,getLayout as A}from"./utils.js";import v from"../../../internal/Address/Specifications.js";import{StoredCardFieldsWrapper as j}from"./components/StoredCardFieldsWrapper.js";import{CardFieldsWrapper as O}from"./components/CardFieldsWrapper.js";import{getAutoJumpHandler as F,getFocusHandler as P,getAddressHandler as w}from"./handlers.js";import C from"../../../../external/classnames/index.js";import{getPartialAddressValidationRules as k}from"../../../internal/Address/validate.js";import x from"../../../../core/Context/useImage.js";import{getArrayDifferences as R}from"../../../../utils/arrayUtils.js";import I from"../../../internal/FormInstruction/FormInstruction.js";import{PREFIX as B}from"../../../internal/Icon/constants.js";import E from"./useSRPanelForCardInputErrors.js";function V(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function D(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(r){V(e,r,t[r])}))}return e}function q(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r.push.apply(r,t)}return r}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}const M=i=>{var V,M;const _=t(null),L=t(!1),T=x(),K=t(null),H=e=>{K.current=e},U=t({});Object.keys(U.current).length||i.setComponentRef(U.current);const z=t(0),W=t(!1),$=o((()=>new v(i.specifications)),[i.specifications]);U.current.sfp=_;const[G,J]=n("ready"),[Q,X]=n({}),[Y,Z]=n(D({},i.holderNameRequired&&{holderName:!1}));var ee;const[re,te]=n(D({},i.hasHolderName&&{holderName:null!==(ee=i.data.holderName)&&void 0!==ee?ee:""})),[oe,ne]=n(""),[se,le]=n(!1),[ae,ie]=n(c),[de,ue]=n(m),[ce,me]=n(null),[pe,be]=n([]),[fe,ye]=n(i.storedPaymentMethodId?i.brand:""),he=i.billingAddressMode!==d.none&&i.billingAddressRequired,Se=S(i.billingAddressMode),Ne=t(Se&&(null===(M=i.data)||void 0===M||null===(V=M.billingAddress)||void 0===V?void 0:V.country)),[ge,Ae]=n(!1),[ve,je]=n(he?i.data.billingAddress:null),[Oe,Fe]=n(!1),[Pe,we]=n(""),[Ce,ke]=n({value:null}),[xe,Re]=n(null),{handleChangeFor:Ie,triggerValidation:Be,data:Ee,valid:Ve,errors:De,setSchema:qe,setData:Me,setValid:_e,setErrors:Le}=h({schema:[],defaultData:i.data,formatters:p,rules:b}),Te=!!Object.keys(i.installmentOptions).length&&"debit"!==i.fundingSource;var Ke;const He=null===(Ke=i.showInstallmentAmounts)||void 0===Ke||Ke,Ue="kr"===(null!=ce?ce:i.countryCode),ze=i.configuration.koreanAuthenticationRequired&&Ue,We=Oe&&"auto"===i.configuration.socialSecurityNumberMode||"show"===i.configuration.socialSecurityNumberMode,$e=(e,r)=>{i.onFocus({fieldType:e,event:r})},Ge=(e,r)=>{i.onBlur({fieldType:e,event:r})},Je=P(ne,$e,Ge),Qe=()=>A(D({props:i,showKCP:ze,showBrazilianSSN:We},i.billingAddressRequired&&{countrySpecificSchemas:$.getAddressSchemaForCountry(null==ve?void 0:ve.country),billingAddressRequiredFields:i.billingAddressRequiredFields})),Xe=s((e=>{const r="webInternalElement"!==e.fieldType?e.fieldType:e.name;Re(r)}),[]),Ye=w(Me,_e,Le),Ze=F(W,_,Qe()),er=o((()=>y(i,{sfp:_},{dualBrandSelectElements:pe,setDualBrandSelectElements:be,setSelectedBrandValue:ye,issuingCountryCode:ce,setIssuingCountryCode:me},z)),[pe,ce]);U.current.showValidation=()=>{L.current=!0,null==or||or(),_.current.showValidation(),Be(["holderName","socialSecurityNumber","taxNumber"]),(null==K?void 0:K.current)&&K.current.showValidation()},U.current.processBinLookupResponse=(e,r)=>{er.processBinLookup(e,r)},U.current.setStatus=J,l((()=>(U.current.setFocusOn=_.current.setFocusOn,U.current.updateStyles=_.current.updateStyles,U.current.handleUnsupportedCard=_.current.handleUnsupportedCard,()=>{_.current.destroy()})),[]),l((()=>{const e=[...i.hasHolderName?["holderName"]:[],...We?["socialSecurityNumber"]:[],...ze?["taxNumber"]:[],...he?["billingAddress"]:[]];qe(e)}),[i.hasHolderName,We,ze]),l((()=>{var e;te(q(D({},re),{holderName:null!==(e=Ee.holderName)&&void 0!==e?e:"",taxNumber:Ee.taxNumber})),we(Ee.socialSecurityNumber),he&&je(D({},Ee.billingAddress)),Z(q(D({},Y),{holderName:!i.holderNameRequired||Ve.holderName,socialSecurityNumber:!!Ve.socialSecurityNumber&&Ve.socialSecurityNumber,taxNumber:!!Ve.taxNumber&&Ve.taxNumber,billingAddress:!!Ve.billingAddress&&Ve.billingAddress}));const r=!!De.billingAddress&&Object.entries(De.billingAddress).reduce(((e,[,r])=>e||null!=r),!1);X(q(D({},Q),{holderName:i.holderNameRequired&&De.holderName?De.holderName:null,socialSecurityNumber:We&&De.socialSecurityNumber?De.socialSecurityNumber:null,taxNumber:ze&&De.taxNumber?De.taxNumber:null,billingAddress:he&&r?De.billingAddress:null}))}),[Ee,Ve,De]);const{sortedErrorList:rr,previousSortedErrors:tr,clearSRPanel:or}=E({errors:Q,props:i,isValidating:L,retrieveLayout:Qe,specifications:$,billingAddress:ve,sfp:_});if(rr){const e=R(rr,tr,"field");null==e||e.forEach((e=>{const r={fieldType:e.field,errorCode:e.errorCode};i.onValidationErrorAnalytics(r)}))}l((()=>{const e=Y.holderName,r=se,t=!he||Y.billingAddress,o=!ze||!!Y.taxNumber&&!!Y.encryptedPassword,n=!We||!!Y.socialSecurityNumber,s=r&&e&&t&&o&&n,l=_.current.mapErrorsToValidationRuleResult(),a=D({},Q,l);i.onChange({data:re,valid:Y,errors:a,isValid:s,billingAddress:ve,selectedBrandValue:fe,storePaymentMethod:ge,socialSecurityNumber:Pe,installments:Ce})}),[re,Y,Q,fe,ge,Ce]);const nr=i.storedPaymentMethodId?j:O;return e(r,null,e(a,q(D({ref:_},g(i)),{styles:D({},i.styles),koreanAuthenticationRequired:i.configuration.koreanAuthenticationRequired,hasKoreanFields:!(!i.configuration.koreanAuthenticationRequired||"kr"!==i.countryCode),onChange:(e,r)=>{if(e.autoCompleteName){if(!i.hasHolderName)return;const r=f("holderName","blur")(e.autoCompleteName)?e.autoCompleteName:null;r&&(Me("holderName",r),_e("holderName",!0),Le("holderName",null))}else i.autoFocus&&z.current>0&&"handleOnFieldValid"===(null==r?void 0:r.event)&&(null==r?void 0:r.fieldType)===u&&e.valid.encryptedCardNumber&&Ze(),te(D({},re,e.data)),X(D({},Q,e.errors)),Z(D({},Y,e.valid)),le(e.isSfpValid),ue(e.cvcPolicy),Fe(e.showSocialSecurityNumber),ie(e.expiryDatePolicy)},onBrand:i.onBrand,onFocus:Je,type:i.brand,disableIOSArrowKeys:i.disableIOSArrowKeys?Xe:null,render:({setRootNode:r,setFocusOn:t},o)=>{var n;return e("div",{ref:r,className:C({"adyen-checkout__card-input":!0,"adyen-checkout-card-input__wrapper":!0,[`adyen-checkout__card-input--${null!==(n=i.fundingSource)&&void 0!==n?n:"credit"}`]:!0,"adyen-checkout__card-input--loading":"loading"===G}),role:"form"},e(I,null),e(nr,q(D({},N(i)),{data:re,valid:Y,errors:Q,handleChangeFor:Ie,focusedElement:oe,setFocusOn:t,sfpState:o,cvcPolicy:de,hasInstallments:Te,showAmountsInInstallments:He,handleInstallments:ke,brandsIcons:i.brandsIcons,formData:Ee,formErrors:De,formValid:Ve,expiryDatePolicy:ae,dualBrandSelectElements:pe,extensions:er,selectedBrandValue:fe,showKCP:ze,showBrazilianSSN:We,socialSecurityNumber:Pe,handleOnStoreDetails:Ae,setAddressRef:H,billingAddress:ve,billingAddressValidationRules:Se&&k(Ne.current),partialAddressSchema:Se,handleAddress:Ye,onAddressLookup:i.onAddressLookup,onAddressSelected:i.onAddressSelected,addressSearchDebounceMs:i.addressSearchDebounceMs,iOSFocusedField:xe,onFieldFocusAnalytics:$e,onFieldBlurAnalytics:Ge})))}})),i.showPayButton&&i.payButton({status:G,variant:i.isPayButtonPrimaryVariant?"primary":"secondary",icon:T({imageFolder:"components/"})(`${B}lock`)}))};M.defaultProps=i;export{M as default};
//# sourceMappingURL=CardInput.js.map