function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const t=({props:t,i18n:n,introKey:r,getImage:o})=>{const{paymentMethodType:c,onActionHandled:u,totalAmount:a,reference:i}=t;return function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(n){e(t,n,r[n])}))}return t}({paymentMethodType:c,introduction:n.get(r),imageUrl:o(c),onActionHandled:u},a?{amount:n.amount(a.value,a.currency)}:{},i?{reference:i}:{})};export{t as extractCommonPropsForVoucher};
//# sourceMappingURL=utils.js.map
