import{createElement as e,Fragment as t}from"../../../../external/preact/dist/preact.js";import{useRef as r,useState as n}from"../../../../external/preact/hooks/dist/hooks.js";import o from"../../../internal/PersonalDetails/PersonalDetails.js";import{useCoreContext as a}from"../../../../core/Context/CoreProvider.js";import{econtextValidationRules as l}from"../../validate.js";import s from"../../../internal/FormInstruction/FormInstruction.js";function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function u(u){var{personalDetailsRequired:c=!0,data:m,onChange:p,showPayButton:f,payButton:d}=u,h=i(u,["personalDetailsRequired","data","onChange","showPayButton","payButton"]);const y=r(null),{i18n:v}=a(),[j,b]=n("ready"),g=r({});var x;Object.keys(g.current).length||(null===(x=h.setComponentRef)||void 0===x||x.call(h,g.current));return g.current.showValidation=()=>{var e;null===(e=y.current)||void 0===e||e.showValidation()},g.current.setStatus=b,e("div",{className:"adyen-checkout__econtext-input__field"},c&&e(t,null,e(s,null),e(o,{data:m,requiredFields:["firstName","lastName","telephoneNumber","shopperEmail"],onChange:p,namePrefix:"econtext",setComponentRef:e=>{y.current=e},validationRules:l})),f&&d({status:j,label:v.get("confirmPurchase")}))}export{u as default};
//# sourceMappingURL=EcontextInput.js.map