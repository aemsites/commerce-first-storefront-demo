import{createElement as e}from"../../../../external/preact/dist/preact.js";import{useState as o,useLayoutEffect as r}from"../../../../external/preact/hooks/dist/hooks.js";import t from"../../FormFields/Field/Field.js";import{useCoreContext as a}from"../../../../core/Context/CoreProvider.js";import s from"../../../../core/Services/get-dataset.js";import n from"../../FormFields/Select/Select.js";function l(l){const{allowedCountries:i=[],classNameModifiers:c=[],errorMessage:m,onDropdownChange:d,value:u}=l,{i18n:p,loadingContext:f}=a(),[g,h]=o([]),[y,j]=o(!1),[C,F]=o(l.readOnly);return r((()=>{s("countries",f,p.locale).then((e=>{const o=((e,o)=>{const r=e=>({...e,name:e.name,selectedOptionName:e.name});return o.length?e.filter((e=>o.includes(e.id))).map(r):e.map(r)})(e,i);h(o||[]),F(1===o.length||C),j(!0)})).catch((e=>{console.error(e),h([]),j(!0)}))}),[]),y?e(t,{name:"country",label:p.get("country"),errorMessage:m,classNameModifiers:c,isValid:!!u,showValidIcon:!1,i18n:p,readOnly:C&&!!u},e(n,{onChange:d,name:"country",selectedValue:u,items:g,readonly:C&&!!u})):null}export{l as default};
//# sourceMappingURL=CountryField.js.map
