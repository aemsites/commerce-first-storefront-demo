import e from"../models/ShopperCard.js";const r="ctpIframe";function s(e,r,s){const{scheme:a,tokenId:d,srcDigitalCardId:t,srcCorrelationId:n}=e;return"visa"===a?d?{srcScheme:a,srcCorrelationId:n,srcTokenReference:s.toLowerCase().includes("live")?d:"987654321"}:{srcScheme:a,srcCheckoutPayload:r.checkoutResponse,srcCorrelationId:n}:{srcScheme:a,srcDigitalCardId:t,srcCorrelationId:n}}function a(r,s){const{profiles:a,srcCorrelationId:d}=s,t=a.reduce(((r,a)=>[...r,...a.maskedCards.map((r=>new e(r,s.scheme,d)))]),[]);return[...r,...t]}function d(e,r){return new Date(r.dateOfCardLastUsed).getTime()-new Date(e.dateOfCardLastUsed).getTime()}function t(e,r){return new Date(r.dateOfCardCreated).getTime()-new Date(e.dateOfCardCreated).getTime()}function n(e,r){return r.isExpired?e.expiredCards.push(r):e.availableCards.push(r),e}function o(e,r){return r.dateOfCardLastUsed?e.usedCards.push(r):e.unusedCards.push(r),e}function c(e){const r=e.reduce(a,[]),{availableCards:s,expiredCards:c}=r.reduce(n,{availableCards:[],expiredCards:[]}),{unusedCards:u,usedCards:i}=s.reduce(o,{unusedCards:[],usedCards:[]});return[...i.sort(d),...u.sort(t),...c.sort(d)]}function u(e){return!!e.reason}export{r as CTP_IFRAME_NAME,s as createCheckoutPayloadBasedOnScheme,c as createShopperCardsList,u as isSrciError};
//# sourceMappingURL=utils.js.map
