import{selectOne as e}from"../components/internal/SecuredFields/lib/utilities/dom.js";const s=(s,t)=>{const i=e(document,s),o="issuer"===t?"issuer-list":t;if("country"===o||"stateOrProvince"===o||"issuer-list"===o){const s=e(i,`.adyen-checkout__field--${o} .adyen-checkout__filter-input`);s?.focus()}else{const s=e(i,`[name="${o}"]`);s?.focus()}};export{s as setFocusOnField};
//# sourceMappingURL=setFocus.js.map
