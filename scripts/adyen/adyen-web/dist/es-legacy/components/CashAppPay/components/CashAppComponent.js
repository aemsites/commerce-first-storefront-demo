import{createElement as e}from"../../../external/preact/dist/preact.js";import{useRef as t,useState as r,useCallback as n,useEffect as a}from"../../../external/preact/hooks/dist/hooks.js";import o from"../../../core/Errors/AdyenCheckoutError.js";import s from"../../internal/Spinner/Spinner.js";import{CashAppPayEvents as i}from"../services/types.js";import c from"../../internal/StoreDetails/StoreDetails.js";function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u({enableStoreDetails:u,cashAppService:d,onClick:m,onChangeStoreDetails:p,onAuthorize:f,onError:b}){const h=t(null),[y,g]=r("loading"),v=t([]),[C,E]=r(!1);this.setStatus=g;const w=n((async()=>{try{await d.initialize(),v.current=[d.subscribeToEvent(i.CustomerDismissed,(()=>{b(new o("CANCEL","Customer dismissed the modal"))})),d.subscribeToEvent(i.CustomerRequestDeclined,(async()=>{b(new o("ERROR","Payment declined by CashAppPay")),await d.restart(),await d.renderButton(h.current)})),d.subscribeToEvent(i.CustomerRequestApproved,(({customerProfile:e,grants:t})=>{var r,n;const a=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({},(null==e?void 0:e.id)&&{customerId:e.id},(null==e?void 0:e.cashtag)&&{cashTag:e.cashtag},(null==t||null===(r=t.payment)||void 0===r?void 0:r.grantId)&&{grantId:t.payment.grantId},(null==t||null===(n=t.onFile)||void 0===n?void 0:n.grantId)&&{onFileGrantId:t.onFile.grantId});f(a)})),d.subscribeToEvent(i.CustomerRequestFailed,(()=>{b(new o("ERROR","Customer request failed"))}))],await d.renderButton(h.current),g("ready")}catch(e){b(e instanceof o?e:new o("ERROR","Error when initializing CashAppPay",{cause:e}))}}),[d,b,f]);return a((()=>{u&&(d.setStorePaymentMethod(C),p(C))}),[u,C]),a((()=>(w(),()=>{d.restart(),v.current.forEach((e=>e()))})),[d,w]),e("div",{className:"adyen-checkout__cashapp","aria-live":"polite","aria-busy":"loading"===y},"loading"===y&&e(s,null),"loading"!==y&&u&&e(c,{storeDetails:C,onChange:E}),e("div",{onClick:m,className:"adyen-checkout__cashapp-button",ref:h}))}export{u as CashAppComponent};
//# sourceMappingURL=CashAppComponent.js.map
