import{createElement as e}from"../../../../external/preact/dist/preact.js";import{useEffect as a,useState as r}from"../../../../external/preact/hooks/dist/hooks.js";import o from"../../../../utils/useForm/useForm.js";import t from"../../../internal/FormFields/Field/Field.js";import s from"../../../../utils/get-issuer-image.js";import{useCoreContext as i}from"../../../../core/Context/CoreProvider.js";import n from"../../../internal/FormFields/InputEmail.js";import l from"../../../internal/FormFields/Select/Select.js";import p from"../../../../core/Context/useImage.js";import{validationRules as m}from"../../../../utils/Validator/defaultRules.js";import{getErrorMessage as u}from"../../../../utils/getErrorMessage.js";function d(d){const{i18n:c}=i(),g=p(),h=()=>["dragonpay_ebanking","dragonpay_otc_banking","dragonpay_otc_non_banking"].indexOf(d.type)>-1,{handleChangeFor:f,triggerValidation:_,data:y,valid:E,errors:k,isValid:F}=o({schema:[...h()?["issuer"]:[],"shopperEmail"],rules:{issuer:{validate:e=>h()&&!!e,modes:["input","blur"]},shopperEmail:m.emailRule}}),j=s({},d.type,g),b=d.items.map((e=>({...e,icon:j(e.id&&e.id.toLowerCase())})));a((()=>{d.onChange({isValid:F,data:y,valid:E,errors:k})}),[F,y,E,k]);const[x,C]=r("ready");return this.setStatus=C,this.showValidation=_,e("div",{className:"adyen-checkout__dragonpay-input__field"},e(t,{label:c.get("shopperEmail"),errorMessage:u(c,k.shopperEmail,c.get("shopperEmail")),name:"dragonpay-shopperEmail"},e(n,{name:"dragonpay-shopperEmail",autoCorrect:"off",value:y.shopperEmail,className:"adyen-checkout__input--large",spellCheck:!1,onInput:f("shopperEmail","input"),onBlur:f("shopperEmail","blur")})),h()&&e(t,{label:c.get((V=d.type,"dragonpay_otc_non_banking"===V?"dragonpayVoucher.selectField.contextualText.nonBank":"dragonpayVoucher.selectField.contextualText.bank")),errorMessage:!!k.issuer,name:"issuer"},e(l,{items:b,selectedValue:y.issuer,name:"issuer",className:"adyen-checkout__dropdown--large adyen-checkout__issuer-list__dropdown",onChange:f("issuer")})),d.showPayButton&&d.payButton({status:x,label:c.get("confirmPurchase")}));var V}d.defaultProps={data:{},items:[],onChange:()=>{}};export{d as default};
//# sourceMappingURL=DragonpayInput.js.map
