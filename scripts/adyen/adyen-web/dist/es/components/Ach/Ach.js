import{createElement as t}from"../../external/preact/dist/preact.js";import{UIElement as e}from"../internal/UIElement/UIElement.js";import s from"./components/AchInput/AchInput.js";import{CoreProvider as o}from"../../core/Context/CoreProvider.js";import r from"../internal/RedirectButton/RedirectButton.js";import{TxVariants as n}from"../tx-variants.js";class a extends e{formatProps(t){return{...t,holderNameRequired:t.hasHolderName??t.holderNameRequired}}formatData(){const t=!!this.props.storedPaymentMethodId,e={type:a.type,...this.state.data,ownerName:this.state.data?.holderName,...t&&{storedPaymentMethodId:this.props.storedPaymentMethodId}};return delete e.holderName,{paymentMethod:e,...this.state.storePaymentMethod&&{storePaymentMethod:this.state.storePaymentMethod}}}updateStyles(t){return this.componentRef&&this.componentRef.updateStyles&&this.componentRef.updateStyles(t),this}setFocusOn(t){return this.componentRef&&this.componentRef.setFocusOn&&this.componentRef.setFocusOn(t),this}get isValid(){return!!this.props.storedPaymentMethodId||!!this.state.isValid}get displayName(){return this.props.storedPaymentMethodId&&this.props.bankAccountNumber?`•••• ${this.props.bankAccountNumber.slice(-4)}`:this.props.name}get additionalInfo(){return this.props.storedPaymentMethodId?this.props.i18n.get("ach.savedBankAccount"):""}render(){return t(o,{i18n:this.props.i18n,loadingContext:this.props.loadingContext,resources:this.resources},this.props.storedPaymentMethodId?t(r,{showPayButton:this.props.showPayButton,name:this.displayName,amount:this.props.amount,payButton:this.payButton,onSubmit:this.submit,ref:t=>{this.componentRef=t}}):t(s,{setComponentRef:this.setComponentRef,handleKeyPress:this.handleKeyPress,...this.props,onChange:this.setState,onSubmit:this.submit,payButton:this.payButton,resources:this.resources}))}}var i,p,h;i=a,p="type",h=n.ach,p in i?Object.defineProperty(i,p,{value:h,enumerable:!0,configurable:!0,writable:!0}):i[p]=h;export{a as AchElement,a as default};
//# sourceMappingURL=Ach.js.map
