import e from"../components/ThreeDS2/ThreeDS2Challenge.js";import t from"../components/ThreeDS2/ThreeDS2DeviceFingerprint.js";import r from"../components/Redirect/Redirect.js";import{TxVariants as n}from"../components/tx-variants.js";function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}const c={[n.redirect]:r,[n.threeDS2Challenge]:e,[n.threeDS2DeviceFingerprint]:t};var p=new class{add(...e){this.componentsMap=s({},this.componentsMap,this.createComponentsMap(e))}getComponent(e){const t=this.componentsMap[e];return t||(this.supportedTxVariants.has(e)?void 0:r)}createComponentsMap(e){return e.reduce(((e,t)=>{var r;if(!("string"==typeof(r=t).type&&!!r.type))return console.error("CoreRegistry: Attempt to register Class failed. The Class is not a valid UIElement"),e;if("dropin"===t.type)return e;return[t.type,...t.txVariants].filter((e=>e)).forEach((r=>{e=i(s({},e),{[r]:t})})),e}),{})}constructor(){o(this,"componentsMap",c),o(this,"supportedTxVariants",new Set(Object.values(n)))}};export{p as default};
//# sourceMappingURL=core.registry.js.map