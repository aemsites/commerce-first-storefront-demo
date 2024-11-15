import{createElement as e}from"../../../external/preact/dist/preact.js";import{useState as t,useEffect as n}from"../../../external/preact/hooks/dist/hooks.js";import o from"./CampaignContainer.js";import r from"../../internal/Button/Button.js";import a from"../../internal/Img/Img.js";import{useCoreContext as s}from"../../../core/Context/CoreProvider.js";import c from"../../internal/DisclaimerMessage/DisclaimerMessage.js";import u from"../../../core/Context/useImage.js";import i from"./FixedAmounts.js";import m from"./Roundup.js";import{getRoundupAmount as l,getRoundupAmountLabel as d,getAmountLabel as p}from"./utils.js";function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t.push.apply(t,n)}return t}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function f(f){const{donation:_,commercialTxAmount:h,onCancel:j,onDonate:b,showCancelButton:v=!0,termsAndConditionsUrl:O}=f,{i18n:k}=s(),C=u(),{currency:w,type:P}=_,x="roundup"===P,[A,D]=t("ready"),[N,S]=t(x),[B,F]=t({currency:w,value:x?l(_.maxRoundupAmount,h):null});this.setStatus=e=>{D(e)};const E=()=>{D("loading"),b({data:{amount:B}})};return n((()=>{f.onChange({data:{amount:B},isValid:N})}),[B,N]),"error"===A?e("div",{className:"adyen-checkout__adyen-giving"},e(a,{className:"adyen-checkout__status__icon adyen-checkout__status__icon--error",src:C({imageFolder:"components/"})("error"),alt:k.get("error.message.unknown")}),e("div",{className:"adyen-checkout__status__text"},k.get("error.message.unknown"))):"success"===A?e("div",{className:"adyen-checkout__adyen-giving"},e(a,{className:"adyen-checkout__status__icon adyen-checkout__status__icon--success",src:C({imageFolder:"components/"})("heart"),alt:k.get("thanksForYourSupport")}),e("div",{className:"adyen-checkout__status__text"},k.get("thanksForYourSupport"))):e("div",{className:"adyen-checkout__adyen-giving"},e(o,f),e("div",{className:"adyen-checkout__adyen-giving-actions"},O&&e(c,{message:k.get("donationTermsCondition"),urls:[O]}),x?e(m,{donationAmount:d(k,{maxRoundupAmount:_.maxRoundupAmount,commercialTxAmount:h,currency:w}),originalPaymentAmount:p(k,{value:h,currency:w}),status:A,onDonateButtonClicked:E}):e(i,{selectedAmount:B.value,values:_.values,currency:w,status:A,onAmountSelected:({target:e})=>{const t=parseInt(e.value,10);S(!0),F((e=>y(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){g(e,t,n[t])}))}return e}({},e),{value:t})))},onDonateButtonClicked:E}),v&&e(r,{classNameModifiers:["decline"],variant:"ghost",onClick:()=>{D("ready"),j({data:{amount:B},isValid:N})},disabled:"loading"===A,label:`${k.get("notNowButton")} ›`})))}f.defaultProps={onCancel:()=>{},onChange:()=>{},onDonate:()=>{},donation:{},showCancelButton:!0};export{f as default};
//# sourceMappingURL=DonationComponent.js.map