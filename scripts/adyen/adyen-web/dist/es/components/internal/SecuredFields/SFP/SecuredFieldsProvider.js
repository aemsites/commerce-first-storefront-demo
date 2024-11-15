import{Component as s}from"../../../../external/preact/dist/preact.js";import{getFields as t,validFieldsReducer as e,getErrorReducer as i,getErrorObject as o}from"./SFPUtils.js";import n from"../lib/CSF/initCSF.js";import r from"./SecuredFieldsProviderHandlers.js";import d from"./defaultProps.js";import{ENCRYPTED_PWD_FIELD as a,ENCRYPTED_CARD_NUMBER as h,DEDICATED_CARD_COMPONENTS as l,CVC_POLICY_REQUIRED as p,DATE_POLICY_REQUIRED as c}from"../lib/constants.js";import u from"../../../../core/Errors/AdyenCheckoutError.js";import{getErrorMessageFromCode as f}from"../../../../core/Errors/utils.js";import{SF_ErrorCodes as m}from"../../../../core/Errors/constants.js";function F(s,t,e){return t in s?Object.defineProperty(s,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[t]=e,s}class C extends s{componentDidMount(){this.props.rootNode&&this.setRootNode(this.props.rootNode);const s=t(this.rootNode),i=s.reduce(e,{});this.setState({valid:i}),s.forEach((s=>{this.numCharsInField[s]=0})),this.numDateFields=s.filter((s=>s.match(/Expiry/))).length,s.length?(this.destroy(),this.initializeCSF(this.rootNode)):this.handleOnNoDataRequired()}componentDidUpdate(){this.checkForKCPFields()}componentWillUnmount(){this.csf=null,clearTimeout(this.csfLoadFailTimeout),clearTimeout(this.csfConfigFailTimeout)}initializeCSF(s){let t=this.props.loadingContext;const e={rootNode:s,type:this.props.type,clientKey:this.props.clientKey,cardGroupTypes:this.props.brands,autoFocus:this.props.autoFocus,trimTrailingSeparator:this.props.trimTrailingSeparator,loadingContext:t,keypadFix:this.props.keypadFix,showWarnings:this.props.showWarnings,iframeUIConfig:{sfStyles:this.props.styles},i18n:this.props.i18n,callbacks:{onLoad:this.handleOnLoad,onConfigSuccess:this.handleOnConfigSuccess,onFieldValid:this.handleOnFieldValid,onAllValid:this.handleOnAllValid,onBrand:this.handleOnBrand,onError:this.handleOnError,onFocus:this.handleFocus,onBinValue:this.props.onBinValue,onAutoComplete:this.handleOnAutoComplete,onAdditionalSFConfig:this.props.onAdditionalSFConfig,onAdditionalSFRemoved:this.props.onAdditionalSFRemoved,onTouchstartIOS:this.handleOnTouchstartIOS,onKeyPressed:this.handleKeyPressed},isKCP:this.state.hasKoreanFields,legacyInputMode:this.props.legacyInputMode,minimumExpiryDate:this.props.minimumExpiryDate,implementationType:this.props.implementationType||"components",forceCompat:this.props.forceCompat,maskSecurityCode:this.props.maskSecurityCode,exposeExpiryDate:this.props.exposeExpiryDate,shouldDisableIOSArrowKeys:!!this.props.disableIOSArrowKeys,placeholders:this.props.placeholders??{},showContextualElement:this.props.showContextualElement};this.csf=n(e),this.csfLoadFailTimeout=setTimeout((()=>{"ready"!==this.state.status&&(this.setState({status:"csfLoadFailure"}),this.props.onError(new u("ERROR","secured field iframes have failed to load")))}),this.csfLoadFailTimeoutMS)}checkForKCPFields(){let s=!1;if(this.props.koreanAuthenticationRequired&&(s=this.issuingCountryCode?"kr"===this.issuingCountryCode:"kr"===this.props.countryCode),this.state.hasKoreanFields&&!s){const s=s=>({data:{...s.data,[a]:void 0},valid:{...s.valid,[a]:!1},errors:{...s.errors,[a]:!1},hasKoreanFields:!1});this.setState(s,(()=>{this.props.onChange(this.state)})),this.csf.removeSecuredField(a),this.csf.setKCPStatus(!1)}if(!this.state.hasKoreanFields&&s){const s=s=>({valid:{...s.valid,[a]:!1},hasKoreanFields:!0,isSfpValid:!1});this.setState(s,(()=>{this.props.onChange(this.state)})),this.csf.addSecuredField(a),this.csf.setKCPStatus(!0)}}getChildContext(){return{i18n:this.props.i18n}}handleUnsupportedCard(s){const t=!!s.error;return t&&this.setState({detectedUnsupportedBrands:s.detectedBrands}),s.rootNode=this.rootNode,this.handleOnError(s,t),this.csf&&this.csf.hasUnsupportedCard(h,s.error),t}setFocusOn(s){this.csf&&this.csf.setFocusOnFrame(s)}updateStyles(s){this.csf&&this.csf.updateStyles(s)}sfIsOptionalOrHidden(s){return this.csf.sfIsOptionalOrHidden(s)}destroy(){this.csf&&this.csf.destroy()}showValidation(){const{numDateFields:s,state:t}=this;Object.keys(t.valid).reduce(i(s,t),[]).forEach((s=>{const e=o(s,this.rootNode,t);this.handleOnError(e,!!t.detectedUnsupportedBrands),this.csf&&this.csf.isValidated&&this.csf.isValidated(s,e.error)}))}mapErrorsToValidationRuleResult(){return Object.keys(this.state.errors).reduce(((s,t)=>{const e=this.state.errors[t];return s[t]=e?{isValid:!1,errorMessage:f(e,m),errorI18n:this.props.i18n.get(e),error:e,rootNode:this.rootNode,...this.state.detectedUnsupportedBrands&&{detectedBrands:this.state.detectedUnsupportedBrands}}:null,s}),{})}processBinLookupResponse(s,t){if(this.state.detectedUnsupportedBrands&&(this.setState((s=>({errors:{...s.errors,[h]:!1},detectedUnsupportedBrands:null}))),this.csf&&s)){const s={type:"card",fieldType:"encryptedCardNumber",error:""};this.handleUnsupportedCard(s)}this.issuingCountryCode=s?.issuingCountryCode?.toLowerCase();const e=t?.brand,i=e&&l.includes(t.brand);i&&this.setState(t,(()=>{this.props.onChange(this.state)})),this.csf&&this.csf.brandsFromBinLookup(s,i?t:null)}render(s,t){return s.render({setRootNode:this.setRootNode,setFocusOn:this.setFocusOn},t)}constructor(s){super(s),F(this,"csfLoadFailTimeout",void 0),F(this,"csfLoadFailTimeoutMS",void 0),F(this,"csfConfigFailTimeout",void 0),F(this,"csfConfigFailTimeoutMS",void 0),F(this,"numCharsInField",void 0),F(this,"rootNode",void 0),F(this,"numDateFields",void 0),F(this,"csf",void 0),F(this,"handleOnLoad",void 0),F(this,"handleOnConfigSuccess",void 0),F(this,"handleOnFieldValid",void 0),F(this,"handleOnAllValid",void 0),F(this,"handleOnBrand",void 0),F(this,"handleFocus",void 0),F(this,"handleOnError",void 0),F(this,"handleOnAutoComplete",void 0),F(this,"handleOnNoDataRequired",void 0),F(this,"handleOnTouchstartIOS",void 0),F(this,"handleKeyPressed",void 0),F(this,"state",void 0),F(this,"props",void 0),F(this,"issuingCountryCode",void 0),F(this,"setRootNode",(s=>{this.rootNode=s}));const t={status:"loading",brand:s.type,errors:{},valid:{},data:{},cvcPolicy:p,expiryDatePolicy:c,isSfpValid:!1,hasKoreanFields:s.hasKoreanFields};this.state=t,this.csfLoadFailTimeout=null,this.csfLoadFailTimeoutMS=3e4,this.csfConfigFailTimeout=null,this.csfConfigFailTimeoutMS=15e3,this.numCharsInField={},this.handleOnLoad=r.handleOnLoad.bind(this),this.handleOnConfigSuccess=r.handleOnConfigSuccess.bind(this),this.handleOnFieldValid=r.handleOnFieldValid.bind(this),this.handleOnAllValid=r.handleOnAllValid.bind(this),this.handleOnBrand=r.handleOnBrand.bind(this),this.handleFocus=r.handleFocus.bind(this),this.handleOnError=r.handleOnError.bind(this),this.handleOnNoDataRequired=r.handleOnNoDataRequired.bind(this),this.handleOnAutoComplete=r.handleOnAutoComplete.bind(this),this.handleOnTouchstartIOS=r.handleOnTouchstartIOS.bind(this),this.handleKeyPressed=r.handleKeyPressed.bind(this),this.processBinLookupResponse=this.processBinLookupResponse.bind(this),this.setFocusOn=this.setFocusOn.bind(this),this.updateStyles=this.updateStyles.bind(this),this.handleUnsupportedCard=this.handleUnsupportedCard.bind(this),this.showValidation=this.showValidation.bind(this),this.destroy=this.destroy.bind(this)}}F(C,"defaultProps",d);export{C as default};
//# sourceMappingURL=SecuredFieldsProvider.js.map