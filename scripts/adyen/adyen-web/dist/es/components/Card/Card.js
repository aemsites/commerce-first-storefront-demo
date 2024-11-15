import{createElement as t}from"../../external/preact/dist/preact.js";import o from"./components/CardInput/CardInput.js";import{CoreProvider as e}from"../../core/Context/CoreProvider.js";import s from"../../utils/browserInfo.js";import r from"../internal/SecuredFields/binLookup/triggerBinLookUp.js";import{fieldTypeToSnakeCase as i}from"../internal/SecuredFields/utils.js";import{reject as n}from"../../utils/commonUtils.js";import{hasValidInstallmentsObject as a}from"./components/CardInput/utils.js";import p from"../internal/ClickToPay/services/create-clicktopay-service.js";import c from"./components/ClickToPayWrapper.js";import l from"../../core/Errors/SRPanelProvider.js";import{TxVariants as d}from"../tx-variants.js";import{UIElement as u}from"../internal/UIElement/UIElement.js";import h from"../internal/PayButton/PayButton.js";import{ANALYTICS_RENDERED_STR as m,ANALYTICS_CONFIGURED_STR as y,ANALYTICS_FOCUS_STR as f,ANALYTICS_UNFOCUS_STR as b,ANALYTICS_VALIDATION_ERROR_STR as g}from"../../core/Analytics/constants.js";import{ALL_SECURED_FIELDS as P}from"../internal/SecuredFields/lib/constants.js";import{hasOwnProperty as C}from"../../utils/hasOwnProperty.js";import S,{IMPLEMENTATION_ERROR as k}from"../../core/Errors/AdyenCheckoutError.js";import{getErrorMessageFromCode as T}from"../../core/Errors/utils.js";import{SF_ErrorCodes as R}from"../../core/Errors/constants.js";import B from"./components/CardInput/defaultProps.js";function I(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}class M extends u{setStatus(t,o){return this.componentRef?.setStatus&&this.componentRef.setStatus(t,o),this.clickToPayRef?.setStatus&&this.clickToPayRef.setStatus(t,o),this}formatProps(t){const o=t.session?.configuration?.enableStoreDetails??t.enableStoreDetails,e=!(0===t.amount?.value)&&o,s=t.storedPaymentMethodId||t.id,r=s&&t?.supportedShopperInteractions?.includes("Ecommerce");if(s&&!r)throw new S(k,"You are trying to create a storedCard from a stored PM that does not support Ecommerce interactions");return{...t,holderNameRequired:!!t.hasHolderName&&t.holderNameRequired,hasCVC:!(t.brand&&"bcmc"===t.brand||t.hideCVC),billingAddressRequired:!t.storedPaymentMethodId&&t.billingAddressRequired,billingAddressMode:t.onAddressLookup?B.billingAddressMode:t.billingAddressMode,brand:t.brand??d.card,countryCode:t.countryCode?t.countryCode.toLowerCase():null,configuration:{...t.configuration,socialSecurityNumberMode:t.configuration?.socialSecurityNumberMode??"auto"},brandsConfiguration:t.brandsConfiguration||t.configuration?.brandsConfiguration||{},icon:t.icon||t.configuration?.icon,installmentOptions:t.session?.configuration?.installmentOptions||t.installmentOptions,enableStoreDetails:o,showStoreDetailsCheckbox:e,clickToPayConfiguration:{...t.clickToPayConfiguration,disableOtpAutoFocus:t.clickToPayConfiguration?.disableOtpAutoFocus||!1,shopperEmail:t.clickToPayConfiguration?.shopperEmail||this.core.options?.session?.shopperEmail,telephoneNumber:t.clickToPayConfiguration?.telephoneNumber||this.core.options?.session?.telephoneNumber,locale:t.clickToPayConfiguration?.locale||t.i18n?.locale?.replace("-","_")},...s&&{storedPaymentMethodId:s}}}formatData(){const t=this.state.selectedBrandValue;return{paymentMethod:{type:M.type,...this.state.data,...this.props.storedPaymentMethodId&&{storedPaymentMethodId:this.props.storedPaymentMethodId,holderName:this.props.holderName??""},...t&&{brand:t},...this.props.fundingSource&&{fundingSource:this.props.fundingSource}},...this.state.billingAddress&&{billingAddress:this.state.billingAddress},...this.state.socialSecurityNumber&&{socialSecurityNumber:this.state.socialSecurityNumber},...this.storePaymentMethodPayload,...a(this.state.installments)&&{installments:this.state.installments},browserInfo:this.browserInfo,origin:!!window&&window.location.origin}}updateStyles(t){return this.componentRef?.updateStyles&&this.componentRef.updateStyles(t),this}setFocusOn(t){return this.componentRef?.setFocusOn&&this.componentRef.setFocusOn(t),this}processBinLookupResponse(t,o=!1){return this.componentRef?.processBinLookupResponse&&this.componentRef.processBinLookupResponse(t,o),this}handleUnsupportedCard(t){return this.componentRef?.handleUnsupportedCard&&this.componentRef.handleUnsupportedCard(t),this}onBinLookup(t){if(!t.isReset){const o=n("supportedBrandsRaw").from(t);this.props.onBinLookup?.(o)}}submitAnalytics(t){const{type:o}=t;o!==m&&o!==y||"scheme"===this.constructor.type&&C(this.props,"supportedShopperInteractions")&&(t.isStoredPaymentMethod=!0,t.brand=this.props.brand),super.submitAnalytics(t,this.props)}get storePaymentMethodPayload(){if(this.props.storedPaymentMethodId?.length>0)return{};if(0===this.props.amount?.value)return this.props.enableStoreDetails?{storePaymentMethod:!0}:{};return this.props.showStoreDetailsCheckbox&&void 0!==this.state.storePaymentMethod?{storePaymentMethod:Boolean(this.state.storePaymentMethod)}:{}}get isValid(){return!!this.state.isValid}get icon(){return this.props.icon??this.resources.getImage()(this.props.brand)}get brands(){const{brands:t,brandsConfiguration:o}=this.props;return t?t.map((t=>({icon:o[t]?.icon??this.props.modules.resources.getImage()(t),name:t}))):[]}get displayName(){return this.props.storedPaymentMethodId?`•••• ${this.props.lastFour}`:this.props.name||M.type}get accessibleName(){return(this.props.name||M.type)+(this.props.storedPaymentMethodId?" "+this.props.i18n.get("creditCard.storedCard.description.ariaLabel").replace("%@",this.props.lastFour):"")}get browserInfo(){return s()}renderCardInput(e=!0){return t(o,{setComponentRef:this.setComponentRef,...this.props,...this.state,onChange:this.setState,onSubmit:this.submit,handleKeyPress:this.handleKeyPress,payButton:this.payButton,onBrand:this.onBrand,onBinValue:this.onBinValue,brand:this.props.brand,brandsIcons:this.brands,isPayButtonPrimaryVariant:e,resources:this.resources,onFocus:this.onFocus,onBlur:this.onBlur,onValidationErrorAnalytics:this.onValidationErrorAnalytics,onConfigSuccess:this.onConfigSuccess})}render(){return t(e,{i18n:this.props.i18n,loadingContext:this.props.loadingContext,resources:this.resources},t(l,{srPanel:this.props.modules.srPanel},t(c,{amount:this.props.amount,configuration:this.props.clickToPayConfiguration,clickToPayService:this.clickToPayService,isStandaloneComponent:!1,setClickToPayRef:this.setClickToPayRef,onSetStatus:this.setElementStatus,onSubmit:this.handleClickToPaySubmit,onError:this.handleError},(t=>this.renderCardInput(t)))))}constructor(o,e){super(o,e),I(this,"clickToPayService",void 0),I(this,"clickToPayRef",null),I(this,"setClickToPayRef",(t=>{this.clickToPayRef=t})),I(this,"onBrand",(t=>{this.props.onBrand?.(t)})),I(this,"handleClickToPaySubmit",(t=>{this.setState({data:{...t},valid:{},errors:{},isValid:!0}),this.submit()})),I(this,"onConfigSuccess",(t=>{this.submitAnalytics({type:y}),this.props.onConfigSuccess?.(t)})),I(this,"onFocus",(t=>{this.submitAnalytics({type:f,target:i(t.fieldType)}),P.includes(t.fieldType)?this.props.onFocus?.(t.event):this.props.onFocus?.(t)})),I(this,"onBlur",(t=>{this.submitAnalytics({type:b,target:i(t.fieldType)}),P.includes(t.fieldType)?this.props.onBlur?.(t.event):this.props.onBlur?.(t)})),I(this,"onValidationErrorAnalytics",(t=>{this.submitAnalytics({type:g,target:i(t.fieldType),validationErrorCode:t.errorCode,validationErrorMessage:T(t.errorCode,R)})})),I(this,"onBinValue",r(this)),I(this,"payButton",(o=>{const e=0===this.props.amount?.value,s=this.props.storedPaymentMethodId?.length>0;return t(h,{...o,amount:this.props.amount,secondaryAmount:this.props.secondaryAmount,label:e&&!s?this.props.i18n.get("payButton.saveDetails"):"",onClick:this.submit})})),e&&!e._disableClickToPay&&(this.clickToPayService=p(this.props.configuration,this.props.clickToPayConfiguration,this.props.environment),this.clickToPayService?.initialize())}}I(M,"type",d.scheme),I(M,"defaultProps",{showFormInstruction:!0,_disableClickToPay:!1,doBinLookup:!0,...n(["type","setComponentRef"]).from(B)});export{M as CardElement,M as default};
//# sourceMappingURL=Card.js.map