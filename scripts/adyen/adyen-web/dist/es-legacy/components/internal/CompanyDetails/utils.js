function e(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function r(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){e(r,t,n[t])}))}return r}const t=e=>{const{name:t,registrationNumber:n}=e;return r({},(t||n)&&{company:r({},t&&{name:t},n&&{registrationNumber:n})})};export{t as getFormattedData};
//# sourceMappingURL=utils.js.map
