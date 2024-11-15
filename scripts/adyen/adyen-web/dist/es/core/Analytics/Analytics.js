import t from"../Services/analytics/collect-id.js";import e from"./EventsQueue.js";import{ANALYTICS_EVENT_INFO as n,ANALYTICS_INFO_TIMER_INTERVAL as a,ANALYTICS_EVENT_LOG as l,ANALYTICS_EVENT_ERROR as s,ANALYTICS_PATH as c}from"./constants.js";import{debounce as o}from"../../utils/debounce.js";import{processAnalyticsData as i,createAnalyticsObject as r}from"./utils.js";import{analyticsPreProcessor as u}from"./analyticsPreProcessor.js";let y=null,m=null;const d=({locale:d,clientKey:p,analytics:f,amount:b,analyticsContext:h,bundleType:j})=>{const v={enabled:!0,checkoutAttemptId:null,analyticsData:{},...f},A=t({analyticsContext:h,clientKey:p,locale:d,amount:b,analyticsPath:c,bundleType:j}),g=e({analyticsContext:h,clientKey:p,analyticsPath:c}),E=()=>y?g.run(y):Promise.resolve(null),P={setUp:async t=>{const{payload:e}=v,n=i(v.analyticsData);if(!y)try{const a=await A({...t,...e&&{...e},...Object.keys(n).length&&{...n}});y=a}catch(t){console.warn("Fetching checkoutAttemptId failed."+(t?` Error=${t}`:""))}},getCheckoutAttemptId:()=>y,getEventsQueue:()=>g,createAnalyticsEvent:({event:t,data:e})=>{if(!v.enabled)return;const c=r({event:t,...e});return((t,e)=>{const c=t===n?t:`${t}s`;g.add(`${c}`,e),t===n&&(clearTimeout(m),m=setTimeout((()=>{E()}),a)),t!==l&&t!==s||(clearTimeout(m),o(E)())})(t,c),c},getEnabled:()=>v.enabled,sendAnalytics:null};return P.sendAnalytics=!0===v.enabled?u(P):()=>{},P};export{d as default};
//# sourceMappingURL=Analytics.js.map