import{createElement as t}from"../../../../external/preact/dist/preact.js";import{KlarnaWidget as e}from"../KlarnaWidget/KlarnaWidget.js";import{useState as n}from"../../../../external/preact/hooks/dist/hooks.js";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e.push.apply(e,n)}return e}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function a(a){const[p,i]=n({sdkData:a.sdkData,paymentMethodType:a.paymentMethodType,paymentData:a.paymentData}),[s,c]=n("ready");return this.setAction=i,this.setStatus=c,p.sdkData?t(e,{sdkData:p.sdkData,paymentMethodType:p.paymentMethodType,paymentData:p.paymentData,payButton:a.payButton,onComplete:a.onComplete,onError:a.onError,onLoaded:()=>{var t;null===(t=a.onActionHandled)||void 0===t||t.call(a,{componentType:a.type,actionDescription:"sdk-loaded",originalAction:p}),a.onLoaded()}}):a.showPayButton?a.payButton(r(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){o(t,e,n[e])}))}return t}({},a),{status:s,disabled:"loading"===s,classNameModifiers:["standalone"],label:`${this.props.i18n.get("continueTo")} ${a.displayName}`})):null}export{a as KlarnaContainer};
//# sourceMappingURL=KlarnaContainer.js.map
