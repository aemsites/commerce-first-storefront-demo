import e from"../../FormFields/Field/Field.js";import{createElement as s}from"../../../../external/preact/dist/preact.js";import{useState as a,useCallback as t,useEffect as r,useMemo as o}from"../../../../external/preact/hooks/dist/hooks.js";import{useCoreContext as n}from"../../../../core/Context/CoreProvider.js";import{debounce as d}from"../../../../utils/debounce.js";import c from"../../FormFields/Select/Select.js";function l({onAddressLookup:l,onAddressSelected:u,onSelect:i,onManualAddress:m,externalErrorMessage:h,hideManualButton:_,showContextualElement:p,contextualText:f,placeholder:k,addressSearchDebounceMs:b}){const[x,g]=a([]),[y,M]=a([]),[j,v]=a(""),{i18n:C}=n(),F=t((e=>{e?.errorMessage&&v(e.errorMessage)}),[]),S=t((e=>{new Promise(((s,a)=>{l(e,{resolve:s,reject:a})})).then((e=>{M(e),g(e.map((({id:e,name:s})=>({id:e,name:s})))),v("")})).catch((e=>F(e)))}),[l]);r((()=>{v(h)}),[h]);const w=o((()=>d(S,b)),[]);return s("div",{className:"adyen-checkout__address-search adyen-checkout__field-group"},s(e,{label:C.get("address"),classNameModifiers:["address-search"],errorMessage:j,name:"address-search",showContextualElement:p,contextualText:f},s(c,{name:"address-search",className:"adyen-checkout__address-search__dropdown",placeholder:k,onInput:w,items:x,onChange:e=>{if(!e.target.value)return void v(C.get("address.errors.incomplete"));const s=y.find((s=>s.id===e.target.value));if("function"!=typeof u)return i(s),void g([]);new Promise(((e,a)=>{u(s,{resolve:e,reject:a})})).then((e=>{i(e),g([])})).catch((e=>F(e)))},disableTextFilter:!0,blurOnClose:!0})),!_&&s("span",{className:"adyen-checkout__address-search__manual-add"},s("button",{type:"button",className:"adyen-checkout__button adyen-checkout__button--inline adyen-checkout__button--link adyen-checkout__address-search__manual-add__button",onClick:m},"+ "+C.get("address.enterManually"))))}export{l as default};
//# sourceMappingURL=AddressSearch.js.map