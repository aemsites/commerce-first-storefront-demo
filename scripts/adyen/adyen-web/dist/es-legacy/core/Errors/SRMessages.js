import{createElement as e,Fragment as t}from"../../external/preact/dist/preact.js";import{useRef as r,useState as n}from"../../external/preact/hooks/dist/hooks.js";function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c({setComponentRef:c}){const s=r({});Object.keys(s.current).length||null==c||c(s.current);const[a,l]=n(null);return s.current.setMessages=e=>{l(e)},a?e(t,null,a.map((t=>e("div",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({key:t,className:"adyen-checkout-sr-panel__msg"},!1),t)))):null}export{c as SRMessages};
//# sourceMappingURL=SRMessages.js.map
