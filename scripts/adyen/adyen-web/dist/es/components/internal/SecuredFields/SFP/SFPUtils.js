import{ENCRYPTED_EXPIRY_DATE as e,ENCRYPTED_EXPIRY_MONTH as r,ENCRYPTED_EXPIRY_YEAR as l,ENCRYPTED_SECURITY_CODE as i,CVC_POLICY_OPTIONAL as t,DATE_POLICY_OPTIONAL as o,CVC_POLICY_HIDDEN as s,DATE_POLICY_HIDDEN as c}from"../lib/constants.js";import d from"../../../../utils/getProp.js";import{EMPTY_FIELD_ERROR_MESSAGES as p}from"../../../../core/Errors/constants.js";const a=e=>e?Array.prototype.slice.call(e.querySelectorAll('[data-cse*="encrypted"]')).map((e=>e.getAttribute("data-cse"))):[],y=(i,t)=>(t===e?(i[r]=!1,i[l]=!1):i[t]=!1,i),n=(d,p)=>(a,y)=>{let n=!0!==p.valid[y]?((i,t)=>1!==t||i!==r&&i!==l?i:e)(y,d):null;return n=((e,r,l)=>{const{isFieldOfType:d,fieldIsValid:p}=l.reduce(((l,i)=>(l.isFieldOfType||(l.isFieldOfType=e===i,l.fieldIsValid=!r.errors[i]),l)),{isFieldOfType:!1,fieldIsValid:!1}),a=e===i?"cvcPolicy":"expiryDatePolicy",y="cvcPolicy"===a?t:o,n="cvcPolicy"===a?s:c;return(r[a]===y||r[a]===n)&&p&&d?null:e})(n,p,[i,e,r,l]),n&&!a.includes(n)&&a.push(n),a},f=(e,r,l)=>({rootNode:r,fieldType:e,error:d(l,`errors.${e}`)||p[e],type:"card"});export{f as getErrorObject,n as getErrorReducer,a as getFields,y as validFieldsReducer};
//# sourceMappingURL=SFPUtils.js.map
