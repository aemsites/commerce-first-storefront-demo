import{createElement as e}from"../../../../../external/preact/dist/preact.js";import t from"../../../../../external/classnames/index.js";import a from"../../../../Dropin/components/PaymentMethod/PaymentMethodIcon.js";import i from"../../../../internal/ExpandButton/ExpandButton.js";const p=({app:p,imgSrc:n,isSelected:c,onSelect:o=()=>{},children:d})=>{const s=`adyen-checkout-upi-app-item-button-${p.id}`,m=`adyen-checkout-upi-app-${p.id}`;return e("li",{className:t({"adyen-checkout-upi-app-item":!0,"adyen-checkout-upi-app-item--selected":c}),onClick:()=>(e=>{o(e)})(p)},e("div",{className:"adyen-checkout-upi-app-item-header"},e(i,{classNameModifiers:["upi-app-item"],buttonId:s,isSelected:c,expandContentId:m},e(a,{src:n,altDescription:p.name,type:p.id}),e("label",{className:"adyen-checkout-upi-app-item__label",htmlFor:s},p.name))),c&&d&&e("div",{className:"adyen-checkout-upi-app-item-details",id:m},d))};export{p as default};
//# sourceMappingURL=UPIIntentAppItem.js.map