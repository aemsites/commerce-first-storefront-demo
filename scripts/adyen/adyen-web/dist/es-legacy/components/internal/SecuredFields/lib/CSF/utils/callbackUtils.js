import{ENCRYPTED_EXPIRY_DATE as e}from"../../constants.js";const t=({fieldType:e,encryptedFieldName:t,uuid:d,isValid:r,txVariant:o,rootNode:i})=>({fieldType:e,encryptedFieldName:t,uid:d,valid:r,type:o,rootNode:i}),d=({fieldType:d,txVariant:r,rootNode:o})=>{const i=d===e,n=[],p=["encryptedExpiryMonth","encryptedExpiryYear"];let a,l,y,c;const s=i?2:1;for(a=0;a<s;a+=1){y=i?p[a]:d,l=`${r}-encrypted-${y}`,c=i?y:d;const e=t({fieldType:d,encryptedFieldName:c,uuid:l,isValid:!1,txVariant:r,rootNode:o});n.push(e)}return n},r=({fieldType:e,txVariant:d,rootNode:r,encryptedObjArr:o})=>{let i,n,p,a,l;const y=[];for(i=0;i<o.length;i+=1){p=o[i],a=p.encryptedFieldName,n=`${d}-encrypted-${a}`,l=p.blob;const c=t({fieldType:e,encryptedFieldName:a,uuid:n,isValid:!0,txVariant:d,rootNode:r});c.blob=l,y.push(c)}return y};export{r as makeCallbackObjectsEncryption,d as makeCallbackObjectsValidation};
//# sourceMappingURL=callbackUtils.js.map