import t from"../../../../utils/Script.js";import{useRef as e,useState as a,useEffect as o}from"../../../../external/preact/hooks/dist/hooks.js";import{createElement as n}from"../../../../external/preact/dist/preact.js";import{KLARNA_WIDGET_URL as r}from"../../constants.js";function s(t,e){if(null==t)return{};var a,o,n=function(t,e){if(null==t)return{};var a,o,n={},r=Object.keys(t);for(o=0;o<r.length;o++)a=r[o],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)a=r[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function i(i){var{sdkData:c,paymentMethodType:l,payButton:d}=i,m=s(i,["sdkData","paymentMethodType","payButton"]);const p=e(null),[y,u]=a("ready"),f=()=>{u("error"),m.onComplete({data:{paymentData:m.paymentData,details:{}}})},h=()=>{u("loading");try{window.Klarna.Payments.authorize({payment_method_category:c.payment_method_category},(function(t){!0===t.approved&&!0===t.show_form?(u("success"),m.onComplete({data:{paymentData:m.paymentData,details:{authorization_token:t.authorization_token}}})):t.approved||!0!==t.show_form?f():(u("ready"),m.onError(t))}))}catch(t){f()}};return o((()=>{window.klarnaAsyncCallback=function(){window.Klarna.Payments.init({client_token:c.client_token}),window.Klarna.Payments.load({container:p.current,payment_method_category:c.payment_method_category},(function(t){!t.show_form||t.error?f():m.onLoaded()}))};const e=new t(r);return e.load(),()=>{e.remove()}}),[]),"error"!==y&&"success"!==y?n("div",{className:"adyen-checkout__klarna-widget"},n("div",{ref:p}),d({status:y,disabled:"loading"===y,onClick:h})):null}export{i as KlarnaWidget};
//# sourceMappingURL=KlarnaWidget.js.map