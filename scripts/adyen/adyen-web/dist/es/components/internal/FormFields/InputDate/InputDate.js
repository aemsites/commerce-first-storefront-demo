import{createElement as t}from"../../../../external/preact/dist/preact.js";import{useMemo as e}from"../../../../external/preact/hooks/dist/hooks.js";import o from"../InputBase.js";import{checkDateInputSupport as r,formatDate as a}from"./utils.js";function s(s){const n=e(r,[]);return t(o,n?{...s,type:"date"}:{...s,onInput:t=>{const{value:e}=t.target;t.target.value=a(e),s.onInput(t)},maxLength:10})}export{s as default};
//# sourceMappingURL=InputDate.js.map