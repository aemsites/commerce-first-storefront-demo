import{createElement as e}from"../../../../external/preact/dist/preact.js";import t from"./PaymentMethodItem/PaymentMethodItem.js";import{useCoreContext as o}from"../../../../core/Context/CoreProvider.js";import{useMemo as a}from"../../../../external/preact/hooks/dist/hooks.js";import n from"../../../../utils/uuid.js";import s from"../../../../external/classnames/index.js";function d({label:d,classNameModifiers:i=[],paymentMethods:m=[],activePaymentMethod:l=null,cachedPaymentMethods:r={},isLoading:c=!1,isDisablingPaymentMethod:h=!1,showRemovePaymentMethodButton:y,onDisableStoredPaymentMethod:p=()=>{},onSelect:u,showRadioButton:M}){const{i18n:_}=o(),P=a((()=>`select-${n()}`),[]),b=s(["adyen-checkout__payment-methods-list",{"adyen-checkout__payment-methods-list--loading":c},...i.map((e=>`adyen-checkout__payment-methods-list--${e}`))]);return e("div",{className:"adyen-checkout-payment-methods-container"},!!d.length&&e("label",{htmlFor:P,className:"adyen-checkout-payment-methods-list-label"},d),e("div",{id:P,className:b,role:"radiogroup","aria-label":_.get("paymentMethodsList.aria.label"),required:!0},m.map(((o,a,n)=>{const d=l&&l._id===o._id,i=o._id in r,_=l&&n[a+1]&&l._id===n[a+1]._id;return e(t,{className:s({"adyen-checkout__payment-method--next-selected":_}),standalone:1===m.length,paymentMethod:o,isSelected:d,isDisablingPaymentMethod:d&&h,isLoaded:i,isLoading:c,onSelect:u,key:o._id,showRemovePaymentMethodButton:y,showRadioButton:M,onDisableStoredPaymentMethod:p})}))))}export{d as default};
//# sourceMappingURL=PaymentMethodsContainer.js.map
