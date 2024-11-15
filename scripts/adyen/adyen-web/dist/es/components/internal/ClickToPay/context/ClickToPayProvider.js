import{createElement as t}from"../../../../external/preact/dist/preact.js";import{CtpState as e}from"../services/ClickToPayService.js";import{ClickToPayContext as a}from"./ClickToPayContext.js";import{useState as o,useRef as n,useEffect as s,useCallback as i}from"../../../../external/preact/hooks/dist/hooks.js";const r=({isStandaloneComponent:r=!1,clickToPayService:c,amount:d,configuration:l,children:u,setClickToPayRef:p,onSubmit:y,onSetStatus:m,onError:S})=>{const[C]=o(c),[f,h]=o(c?.state||e.NotAvailable),[k,I]=o(!0),[P,v]=o("ready"),w=n({}),b=n(!1);s((()=>{p(w.current),w.current.setStatus=v}),[]),s((()=>{C?.subscribeOnStateChange((t=>h(t)))}),[C]);const g=i((()=>{b.current||(l.onReady?.(),b.current=!0)}),[l?.onReady]),E=i((async t=>{await(C?.finishIdentityValidation(t))}),[C]),V=i((async()=>await(C?.startIdentityValidation())),[C]),R=i((async t=>await(C?.checkout(t))),[C]),j=i((async t=>await(C?.verifyIfShopperIsEnrolled(t))),[C]),x=i((async()=>{await(C?.logout())}),[C]),T=i((t=>{C.updateStoreCookiesConsent(t)}),[C]);return t(a.Provider,{value:{status:P,onSubmit:y,onError:S,onSetStatus:m,amount:d,configuration:l,isStoringCookies:C?.storeCookies,isStandaloneComponent:r,isCtpPrimaryPaymentMethod:k,setIsCtpPrimaryPaymentMethod:I,ctpState:f,verifyIfShopperIsEnrolled:j,cards:C?.shopperCards,schemes:C?.schemes,otpMaskedContact:C?.identityValidationData?.maskedShopperContact,otpNetwork:C?.identityValidationData?.selectedNetwork,checkout:R,logoutShopper:x,startIdentityValidation:V,finishIdentityValidation:E,updateStoreCookiesConsent:T,onReady:g}},u)};export{r as default};
//# sourceMappingURL=ClickToPayProvider.js.map