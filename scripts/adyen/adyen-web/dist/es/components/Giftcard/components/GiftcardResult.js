import{createElement as a}from"../../../external/preact/dist/preact.js";import{useCoreContext as e}from"../../../core/Context/CoreProvider.js";function t({brand:t,amount:c,balance:n,transactionLimit:l,...r}){const{i18n:_}=e(),u=c.value>l?.value?l:c,s=n?.value-u?.value;return a("div",{className:"adyen-checkout__giftcard-result"},a("ul",{className:"adyen-checkout__giftcard-result__balance"},a("li",{className:"adyen-checkout__giftcard-result__balance__item"},a("span",{className:"adyen-checkout__giftcard-result__balance__title"},_.get("giftcardBalance")),a("span",{className:"adyen-checkout__giftcard-result__balance__value adyen-checkout__giftcard-result__balance__value--amount"},_.amount(n.value,n.currency))),l&&l.value&&a("li",{className:"adyen-checkout__giftcard-result__balance__item"},a("span",{className:"adyen-checkout__giftcard-result__balance__title adyen-checkout__giftcard-result__balance__title--transactionLimit"},_.get("giftcardTransactionLimit",{values:{amount:_.amount(l.value,l.currency)}})))),this.props.showPayButton&&this.props.payButton({amount:u,status:r.status,onClick:r.onSubmit}),a("p",{className:"adyen-checkout__giftcard-result__remaining-balance"},_.get("partialPayment.remainingBalance",{values:{amount:_.amount(s,n.currency)}})))}export{t as default};
//# sourceMappingURL=GiftcardResult.js.map