import{createElement as e}from"../../../../../external/preact/dist/preact.js";import t from"../../../../../external/classnames/index.js";import o from"./SelectListItem.js";import{useCoreContext as r}from"../../../../../core/Context/CoreProvider.js";function n(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function i(i){var{selected:s,active:c,filteredItems:l,showList:d}=i,a=n(i,["selected","active","filteredItems","showList"]);const{i18n:m}=r();return e("ul",{className:t({"adyen-checkout__dropdown__list":!0,"adyen-checkout__dropdown__list--active":d}),id:a.selectListId,ref:a.selectListRef,role:"listbox"},l.length?l.map((t=>e(o,{active:t.id===c.id,item:t,key:t.id,onSelect:a.onSelect,onHover:a.onHover,selected:t.id===s.id}))):e("div",{className:"adyen-checkout__dropdown__element adyen-checkout__dropdown__element--no-options"},m.get("select.noOptionsFound")))}export{i as default};
//# sourceMappingURL=SelectList.js.map
