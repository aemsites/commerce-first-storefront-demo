import e from"../../../external/classnames/index.js";import{createElement as t}from"../../../external/preact/dist/preact.js";const a=({options:a=[],name:n,onChange:c})=>t("div",{className:"adyen-checkout__button-group"},a.map((({label:a,selected:o,value:s,disabled:d},l)=>t("label",{key:`${n}${l}`,className:e({"adyen-checkout__button":!0,"adyen-checkout__button--selected":o,"adyen-checkout__button--disabled":d})},t("input",{type:"radio",className:"adyen-checkout__button-group__input",value:s,checked:o,onChange:c,disabled:d}),t("span",{className:"adyen-checkout__button-text"},a)))));export{a as default};
//# sourceMappingURL=ButtonGroup.js.map