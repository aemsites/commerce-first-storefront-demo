import{useCoreContext as e}from"../../../core/Context/CoreProvider.js";import{useIsMobile as r}from"../../../utils/useIsMobile.js";import{TimelineWrapper as t}from"../../internal/Timeline/TimelineWrapper.js";import{Timeline as i}from"../../internal/Timeline/Timeline.js";import{createElement as n,Fragment as o}from"../../../external/preact/dist/preact.js";const s=()=>{const{i18n:s}=e(),{isMobileScreenSize:m}=r(),l=s.get("payme.instructions.steps").split("%@");return m?n(t,null,n(i,{instructions:l})):n(o,null,s.get("payme.scanQrCode"))};export{s as PayMeIntroduction};
//# sourceMappingURL=PayMeIntroduction.js.map