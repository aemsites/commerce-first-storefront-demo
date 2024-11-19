import{ERROR_ACTION_FOCUS_FIELD as e,ERROR_ACTION_BLUR_SCENARIO as r,ErrorCodePrefixes as t,SF_ErrorCodes as n}from"./constants.js";import{ENCRYPTED_BANK_LOCATION_FIELD as o,ENCRYPTED_BANK_ACCNT_NUMBER_FIELD as s,ENCRYPTED_PWD_FIELD as a,ENCRYPTED_SECURITY_CODE as c,ENCRYPTED_EXPIRY_YEAR as i,ENCRYPTED_EXPIRY_MONTH as l,ENCRYPTED_EXPIRY_DATE as u,ENCRYPTED_CARD_NUMBER as f}from"../../components/internal/SecuredFields/lib/constants.js";function b(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const p=(e,r)=>Object.values(n).reduce(((t,n)=>(n.includes(r)&&(t[n]=e.get(n)),t)),{}),y=(e,r,t)=>{const n=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){b(e,r,t[r])}))}return e}({},e),o=d(t);return n.error=p(r,o),n},g=(e,r)=>{let t=e;for(const[n,o]of Object.entries(r))if(o===e){t=n;break}return null==t?void 0:t.toLowerCase().replace(/[_.\s]/g,"-")},d=e=>{let r;switch(e){case f:r=t.CC_NUM;break;case u:r=t.CC_DAT;break;case l:r=t.CC_MTH;break;case i:r=t.CC_YR;break;case c:r=t.CC_CVC;break;case a:r=t.KCP_PWD;break;case s:r=t.ACH_NUM;break;case o:r=t.ACH_LOC}return r},C=({errors:e,i18n:r,layout:t,countrySpecificLabels:n,fieldTypeMappingFn:o})=>Object.entries(e).reduce(((s,[a,c])=>{if(c){const c=e[a],i="errorI18n"in c&&"rootNode"in c,l="object"==typeof c.errorMessage;let u,f;if(u=i?c.error:l?c.errorMessage.translationKey:c.errorMessage,i&&"errorI18n"in c)f=c.errorI18n+"";else{const e=o?o(a,r,n):"";if(l){const t=c.errorMessage.translationKey,n=c.errorMessage.translationObject.values.format;f=`${r.get(t,{values:{label:e,format:n}})}`}else f=r.get(c.errorMessage,{values:{label:e}})+""}s.push({field:a,errorMessage:f,errorCode:u}),t&&s.sort(((e,r)=>t.indexOf(e.field)-t.indexOf(r.field)))}return s}),[]),M=({i18n:t,fieldTypeMappingFn:n,SRPanelRef:o},{errors:s,isValidating:a,layout:c,countrySpecificLabels:i})=>{const l=C({errors:s,i18n:t,fieldTypeMappingFn:n,countrySpecificLabels:i,layout:c});if(l.length){if(a){const r=l.map((e=>e.errorMessage));o.setMessages(r);const t=l.map((e=>e.field));return{currentErrorsSortedByLayout:l,action:e,fieldToFocus:t[0]}}return null==o||o.setMessages(null),{currentErrorsSortedByLayout:l,action:r}}return null==o||o.setMessages(null),{currentErrorsSortedByLayout:l,action:"none"}},O=(e,r)=>{if(!e)return null;return Object.entries(e).reduce(((e,[t,n])=>{if(n){e[`${r}${t}`]=n}return e}),{})};export{y as addErrorTranslationsToObject,O as enhanceErrorObjectKeys,g as getErrorMessageFromCode,p as getTranslatedErrors,M as setSRMessagesFromErrors,C as sortErrorsByLayout};
//# sourceMappingURL=utils.js.map
