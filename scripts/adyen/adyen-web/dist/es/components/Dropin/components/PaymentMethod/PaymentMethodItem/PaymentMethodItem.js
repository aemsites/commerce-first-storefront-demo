import{Component as e,createElement as t}from"../../../../../external/preact/dist/preact.js";import o from"../../../../../external/classnames/index.js";import n from"../PaymentMethodDetails.js";import a from"../PaymentMethodIcon.js";import i from"../DisableOneClickConfirmation.js";import s from"../PaymentMethodBrands/PaymentMethodBrands.js";import{BRAND_ICON_UI_EXCLUSION_LIST as d}from"../../../../internal/SecuredFields/lib/constants.js";import r from"../PaymentMethodName.js";import{useCoreContext as m}from"../../../../../core/Context/CoreProvider.js";import h from"../../../../internal/ExpandButton/ExpandButton.js";function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}class p extends e{render({paymentMethod:e,isSelected:l,isDisablingPaymentMethod:p,isLoaded:c,isLoading:y,standalone:u,showRadioButton:b}){const{i18n:f}=m();if(!e)return null;const _="card"===e.props.type||"scheme"===e.props.type,k=o({"adyen-checkout__payment-method":!0,[`adyen-checkout__payment-method--${e.props.type}`]:!0,..._&&{[`adyen-checkout__payment-method--${e.props.fundingSource??"credit"}`]:!0},"adyen-checkout__payment-method--selected":l,"adyen-checkout__payment-method--loading":y,"adyen-checkout__payment-method--disabling":p,"adyen-checkout__payment-method--confirming":this.state.showDisableStoredPaymentMethodConfirmation,"adyen-checkout__payment-method--standalone":u,[e._id]:!0,[this.props.className]:!0}),C=this.props.showRemovePaymentMethodButton&&e.props.oneClick&&l,M=`remove-${e._id}`,P=`container-${e._id}`,D=`button-${e._id}`,S=!e.props.oneClick&&e.brands&&e.brands.length>0;return t("div",{key:e._id,className:k,onClick:this.handleOnListItemClick},t("div",{className:"adyen-checkout__payment-method__header"},t(h,{buttonId:D,showRadioButton:b,isSelected:l,expandContentId:P},t(a,{...e.props.oneClick&&{altDescription:e.props.name},type:e.type,src:e.icon}),t(r,{displayName:e.displayName,isSelected:l,additionalInfo:e.additionalInfo})),C&&t("button",{type:"button",className:"adyen-checkout__button adyen-checkout__button--inline adyen-checkout__button--link",onClick:this.toggleDisableConfirmation,"aria-expanded":this.state.showDisableStoredPaymentMethodConfirmation,"aria-controls":M},f.get("storedPaymentMethod.disable.button")),S&&t(s,{showOtherInsteafOfNumber:e.props.showOtherInsteafOfNumber,keepBrandsVisible:e.props.keepBrandsVisible,brands:e.brands,excludedUIBrands:d,isPaymentMethodSelected:l})),t("div",{className:"adyen-checkout-pm-details-wrapper","aria-hidden":!l},t("div",{className:"adyen-checkout__payment-method__details",id:P},C&&t(i,{id:M,open:this.state.showDisableStoredPaymentMethodConfirmation,onDisable:this.onDisableStoredPaymentMethod,onCancel:this.toggleDisableConfirmation}),t(n,{paymentMethodComponent:e.render(),isLoaded:c}))))}constructor(...e){super(...e),l(this,"state",{showDisableStoredPaymentMethodConfirmation:!1}),l(this,"toggleDisableConfirmation",(()=>{this.setState({showDisableStoredPaymentMethodConfirmation:!this.state.showDisableStoredPaymentMethodConfirmation})})),l(this,"onDisableStoredPaymentMethod",(()=>{this.props.onDisableStoredPaymentMethod(this.props.paymentMethod),this.toggleDisableConfirmation()})),l(this,"handleOnListItemClick",(()=>{const{onSelect:e,paymentMethod:t}=this.props;e(t)}))}}l(p,"defaultProps",{paymentMethod:null,isSelected:!1,isLoaded:!1,isLoading:!1,showDisableStoredPaymentMethodConfirmation:!1,showRadioButton:!1});export{p as default};
//# sourceMappingURL=PaymentMethodItem.js.map
