import{createElement as e,Fragment as r}from"../../../external/preact/dist/preact.js";import{isValidHttpUrl as t}from"../../../utils/isValidURL.js";import{interpolateElement as a}from"../../../language/utils.js";function s({message:r,urls:t}){return e("span",{className:"adyen-checkout-disclaimer__label"},e(n,{message:r,urls:t}))}function n({message:s,urls:n}){const l="string"==typeof s,o=n.every((e=>"string"==typeof e&&t(e)));return l&&o?e(r,null,a(s,n.map((r=>function(t){return e("a",{className:"adyen-checkout__link",href:r,target:"_blank",rel:"noopener noreferrer"},t)})))):null}export{n as LabelOnlyDisclaimerMessage,s as default};
//# sourceMappingURL=DisclaimerMessage.js.map