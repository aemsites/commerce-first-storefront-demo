import{API_ENVIRONMENTS as l,ANALYTICS_ENVIRONMENTS as n,CDN_ENVIRONMENTS as a}from"./constants.js";const o=(l,n,a)=>a||(n[null==l?void 0:l.toLowerCase()]||n.fallback),i=(i,r)=>{var s,t;return{apiUrl:o(i,l,null==r?void 0:r.api),analyticsUrl:o(i,n,null==r?void 0:r.analytics),cdnImagesUrl:o(i,a,null==r||null===(s=r.cdn)||void 0===s?void 0:s.images),cdnTranslationsUrl:o(i,a,null==r||null===(t=r.cdn)||void 0===t?void 0:t.translations)}};export{i as resolveEnvironments};
//# sourceMappingURL=Environment.js.map
