import e from"../helpers/QRLoaderContainer/QRLoaderContainer.js";import{delay as r,countdownTime as t}from"./config.js";import{TxVariants as o}from"../tx-variants.js";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}class a extends e{formatProps(e){return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(r){n(e,r,t[r])}))}return e}({delay:r,countdownTime:t},super.formatProps(e))}}n(a,"type",o.duitnow);export{a as default};
//# sourceMappingURL=DuitNow.js.map
