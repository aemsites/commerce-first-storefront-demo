import{createElement as a}from"../../../../../../external/preact/dist/preact.js";import r from"../../../../../../external/classnames/index.js";import e from"../../../../../internal/Img/Img.js";import{getFullBrandName as n}from"../../utils.js";const t=({brands:t,activeBrand:s})=>{if(!(null==t?void 0:t.length))return null;return a("span",{className:r("adyen-checkout__card__brands",{"adyen-checkout__card__brands--hidden":"card"!==s})},t.map((({name:r,icon:t})=>a("span",{key:r,className:"adyen-checkout__card__brands__brand-wrapper"},a(e,{src:t,alt:n(r)})))))};export{t as default};
//# sourceMappingURL=AvailableBrands.js.map
