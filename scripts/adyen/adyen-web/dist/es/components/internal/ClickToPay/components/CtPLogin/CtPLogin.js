import{createElement as t,Fragment as o}from"../../../../../external/preact/dist/preact.js";import{useState as r,useCallback as e}from"../../../../../external/preact/hooks/dist/hooks.js";import n from"../../../Button/Button.js";import s from"../../context/useClickToPayContext.js";import i from"./CtPLoginInput.js";import{CtPInfo as a}from"../CtPInfo/CtPInfo.js";import l from"../CtPSection/CtPSection.js";import m from"../../services/sdks/SrciError.js";import{useCoreContext as p}from"../../../../../core/Context/CoreProvider.js";import c from"../../errors/TimeoutError.js";import{isSrciError as u}from"../../services/utils.js";const d=()=>{const{i18n:d}=p(),{isCtpPrimaryPaymentMethod:f,setIsCtpPrimaryPaymentMethod:g,verifyIfShopperIsEnrolled:C,startIdentityValidation:y}=s(),[P,h]=r(null),[j,I]=r(!1),[E,S]=r(null),[k,x]=r(!1),[v,w]=r(null),T=e((t=>{w(t)}),[]),b=e((({data:t,isValid:o})=>{h(t.shopperLogin),I(o),t?.shopperLogin?.length>0&&g(!0)}),[]),L=e((async()=>{if(S(null),j){x(!0);try{const{isEnrolled:t}=await C({shopperEmail:P});t?await y():(S("NOT_FOUND"),x(!1))}catch(t){t instanceof m&&console.warn(`CtP - Login error: ${t.toString()}`),t instanceof c&&console.warn(t.toString()),u(t)?S(t?.reason):console.error(t),x(!1)}}else v.validateInput()}),[C,y,P,j,v]),M=e((t=>{"Enter"===t.key&&L()}),[L]);return t(o,null,t(l.Title,{endAdornment:t(a,null)},d.get("ctp.login.title")),t(l.Text,null,d.get("ctp.login.subtitle")),t(i,{onChange:b,onSetInputHandlers:T,disabled:k,errorMessage:E&&d.get(`ctp.errors.${E}`),onPressEnter:L}),t(n,{label:d.get("continue"),variant:f?"primary":"secondary",status:k&&"loading",onClick:()=>{L()},onKeyDown:M}))};export{d as default};
//# sourceMappingURL=CtPLogin.js.map
