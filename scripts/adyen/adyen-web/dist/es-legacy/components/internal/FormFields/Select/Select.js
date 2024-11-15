import{createElement as e}from"../../../../external/preact/dist/preact.js";import{useRef as t,useState as n,useMemo as r,useEffect as l}from"../../../../external/preact/hooks/dist/hooks.js";import s from"../../../../external/classnames/index.js";import o from"./components/SelectButton.js";import a from"./components/SelectList.js";import i from"../../../../utils/uuid.js";import{keys as c}from"./constants.js";import{ARIA_ERROR_SUFFIX as u,ARIA_CONTEXT_SUFFIX as d}from"../../../../core/Errors/constants.js";import{simulateFocusScroll as m}from"../utils.js";function f({items:f=[],className:p="",classNameModifiers:g=[],filterable:h=!0,readonly:v=!1,onChange:b=()=>{},onInput:w,selectedValue:y,name:k,isInvalid:I,isValid:L,placeholder:D,uniqueId:j,disabled:x,disableTextFilter:B,clearOnSelect:E,blurOnClose:T,onListToggle:C,allowIdOnButton:N=!1}){const S=t(null),$=t(null),M=t(null),O=t(null),[R,_]=n(null),[P,V]=n(!1),A=r((()=>`select-${i()}`),[]),F=f.find((e=>e.id===y))||{},[H,K]=n(),[U,q]=n(F),z=F,G=B?f:f.filter((e=>!R||e.name.toLowerCase().includes(R.toLowerCase()))),J=j?`${j}${I?u:d}`:null,Q=e=>{if(!e)return;const t=document.getElementById(`listItem-${e.id}`);m(t)},W=()=>{T&&S.current.blur(),V(!1)},X=()=>{V(!0)},Y=e=>{const t=e.currentTarget.getAttribute("data-value");return G.find((e=>e.id==t))},Z=e=>{let t;e.preventDefault(),t=e.currentTarget instanceof HTMLElement&&"option"===e.currentTarget.getAttribute("role")?Y(e):U.id&&G.some((e=>e.id===U.id))?U:R?G[0]:{id:y},t&&!t.disabled&&(b({target:{value:t.id,name:k}}),E&&K(null),W())},ee=e=>{switch(e.key){case c.space:case c.enter:Z(e);break;case c.arrowDown:e.preventDefault(),(()=>{if(!G||G.length<1)return;const e=G.findIndex((e=>e===U))+1,t=e<G.length?e:0,n=G[t];Q(n),q(n)})();break;case c.arrowUp:e.preventDefault(),(()=>{if(!G||G.length<1)return;const e=G.findIndex((e=>e===U))-1,t=e<0?G.length-1:e,n=G[t];Q(n),q(n)})()}};return l((()=>{P?K(null):_(null)}),[P]),l((()=>{P&&h&&S.current&&S.current.focus(),null==C||C(P)}),[P]),l((()=>{function e(e){(e.composedPath?!e.composedPath().includes($.current):!$.current.contains(e.target))&&W()}return document.addEventListener("click",e,!1),()=>{document.removeEventListener("click",e,!1)}}),[$]),e("div",{className:s(["adyen-checkout__dropdown",p,...g.map((e=>`adyen-checkout__dropdown--${e}`))]),ref:$},e(o,{inputText:H,id:null!=j?j:null,active:U,selected:z,filterInputRef:S,filterable:h,isInvalid:I,isValid:L,onButtonKeyDown:e=>{e.key===c.enter&&h&&P&&R?Z(e):e.key===c.escape?W():![c.arrowUp,c.arrowDown,c.enter].includes(e.key)&&(e.key!==c.space||h&&P)?(e.shiftKey&&e.key===c.tab||e.key===c.tab)&&W():(e.preventDefault(),P?ee(e):X())},onFocus:X,onInput:e=>{const t=e.target.value;K(t),_(t),w&&w(t)},placeholder:D,readonly:v,selectListId:A,showList:P,toggleButtonRef:M,toggleList:e=>{e.preventDefault(),P?(K(z.name),W()):(K(null),X())},disabled:x,ariaDescribedBy:J,allowIdOnButton:N}),e(a,{active:U,filteredItems:G,onHover:e=>{e.preventDefault();const t=Y(e);q(t)},onSelect:Z,selected:z,selectListId:A,selectListRef:O,showList:P}))}f.defaultProps={className:"",classNameModifiers:[],filterable:!0,items:[],readonly:!1,onChange:()=>{}};export{f as default};
//# sourceMappingURL=Select.js.map