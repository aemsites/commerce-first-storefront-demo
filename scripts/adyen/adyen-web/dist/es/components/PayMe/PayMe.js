import e from"../helpers/QRLoaderContainer/QRLoaderContainer.js";import{PayMeInstructions as t}from"./components/PayMeInstructions.js";import{PayMeIntroduction as o}from"./components/PayMeIntroduction.js";function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}class r extends e{formatProps(e){return{delay:r.defaultDelay,countdownTime:r.defaultCountdown,redirectIntroduction:"payme.openPayMeApp",timeToPay:"payme.timeToPay",buttonLabel:"payme.redirectButtonLabel",introduction:o,instructions:t,...super.formatProps(e)}}}n(r,"type","payme"),n(r,"defaultCountdown",10),n(r,"defaultDelay",2e3);export{r as default};
//# sourceMappingURL=PayMe.js.map
