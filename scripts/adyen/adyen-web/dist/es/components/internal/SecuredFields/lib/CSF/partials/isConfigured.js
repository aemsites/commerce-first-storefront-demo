import e from"../utils/cardType.js";import{error as t}from"../../utilities/logger.js";import{CVC_POLICY_REQUIRED as o}from"../../constants.js";function r({csfState:r,csfConfig:s,csfProps:i,csfCallbacks:c},n){r.isConfigured=!0;const f={iframesConfigured:!0,type:r.type,rootNode:i.rootNode};if(c.onConfigSuccess(f),1===r.numIframes&&s.isCreditCardType){if("card"===r.type)return t("ERROR: Payment method with a single secured field - but 'type' has not been set to a specific card brand"),!1;const s=e.getCardByBrand(r.type);if(s){(s.cvcPolicy??o)!==o&&n()}}return!0}export{r as isConfigured};
//# sourceMappingURL=isConfigured.js.map
