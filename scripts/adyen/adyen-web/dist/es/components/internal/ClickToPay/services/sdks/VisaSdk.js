import{getVisaSetttings as e,VISA_SDK_PROD as t,VISA_SDK_TEST as i}from"./config.js";import a from"./AbstractSrcInitiator.js";import n from"./SrciError.js";const s={email:"EMAIL",telephoneNumber:"MOBILE_NUMBER"};class r extends a{isSdkIsAvailableOnWindow(){return!!window.vAdapters?.VisaSRCI}assignSdkReference(){this.schemeSdk=new window.vAdapters.VisaSRCI}async init(t,i){try{const a={...t,...e(this.customSdkConfiguration),srciTransactionId:i};await this.schemeSdk.init(a)}catch(e){throw new n(e,"init",this.schemeName)}}async identityLookup({identityValue:e,type:t}){try{const i={identityValue:e,type:s[t]};return await this.schemeSdk.identityLookup(i)}catch(e){throw new n(e,"identityLookup",this.schemeName)}}async completeIdentityValidation(e){try{return await this.schemeSdk.completeIdentityValidation(e)}catch(e){throw new n(e,"completeIdentityValidation",this.schemeName)}}constructor(e,a){var n,s,r;super(e.toLowerCase().includes("live")?t:i,a),r="visa",(s="schemeName")in(n=this)?Object.defineProperty(n,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[s]=r}}export{r as default};
//# sourceMappingURL=VisaSdk.js.map