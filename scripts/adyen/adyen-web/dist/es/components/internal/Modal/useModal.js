import{useTrapFocus as e}from"./useTrapFocus.js";import{useCallback as s,useEffect as o}from"../../../external/preact/hooks/dist/hooks.js";const t=({modalElement:t,isOpen:r,isDismissible:n,focusFirst:a,focusAfterClose:c,onClose:i})=>{e({rootElement:t,shouldTrap:r,focusFirst:a});const l=s((()=>{c.focus(),i()}),[i,c]),u=s((e=>{n&&e.target instanceof HTMLElement&&!t.contains(e.target)&&l()}),[l,n,t]);return o((()=>{if(!r||!t)return;const e=e=>{("Escape"===e.key||"Esc"===e.key||27===e.keyCode)&&l()};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)}),[r,t,l]),{closeModal:l,handleClickOutside:u}};export{t as useModal};
//# sourceMappingURL=useModal.js.map
