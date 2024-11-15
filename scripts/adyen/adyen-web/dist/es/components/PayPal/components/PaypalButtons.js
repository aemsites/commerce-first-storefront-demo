import{createElement as e}from"../../../external/preact/dist/preact.js";import{useRef as n,useEffect as a}from"../../../external/preact/hooks/dist/hooks.js";import t from"../../../external/classnames/index.js";import{getStyle as o}from"../utils/get-paypal-styles.js";import s from"../../internal/Spinner/Spinner.js";import{useCoreContext as p}from"../../../core/Context/CoreProvider.js";function c({onInit:c,onApprove:r,onClick:i,onCancel:l,onError:_,onShippingAddressChange:u,onShippingOptionsChange:y,onSubmit:d,isProcessingPayment:m,paypalRef:h,style:k,...g}){const{i18n:f}=p(),b="tokenize"===g.configuration?.intent,P=n(null),v=n(null),C=n(null),N=n(null),A=(e,n)=>{const a={...b&&{createBillingAgreement:d},...!b&&{createOrder:d},...!b&&"venmo"!==e&&u&&{onShippingAddressChange:u},...!b&&"venmo"!==e&&y&&{onShippingOptionsChange:y},fundingSource:e,style:o(e,k),onInit:c,onClick:i,onCancel:l,onError:_,onApprove:r},t=h.Buttons(a);t.isEligible()&&t.render(n.current)};a((()=>{const{PAYPAL:e,CREDIT:n,PAYLATER:a,VENMO:t}=h.FUNDING;A(e,P),g.blockPayPalCreditButton||A(n,v),g.blockPayPalPayLaterButton||A(a,C),g.blockPayPalVenmoButton||A(t,N)}),[]);const E=!0===g.commit;return e("div",{className:t("adyen-checkout__paypal__buttons",{"adyen-checkout__paypal-processing":m})},e("div",{className:"adyen-checkout__paypal__button adyen-checkout__paypal__button--paypal",ref:P}),e("div",{className:"adyen-checkout__paypal__button adyen-checkout__paypal__button--credit",ref:v}),e("div",{className:"adyen-checkout__paypal__button adyen-checkout__paypal__button--pay-later",ref:C}),e("div",{className:"adyen-checkout__paypal__button adyen-checkout__paypal__button--venmo",ref:N}),m&&e("div",{className:"adyen-checkout__paypal"},e("div",{className:"adyen-checkout__paypal__status adyen-checkout__paypal__status--processing"},e(s,{size:"medium",inline:!0}),E&&f.get("paypal.processingPayment"))))}export{c as default};
//# sourceMappingURL=PaypalButtons.js.map