import{useState as e,useLayoutEffect as t}from"../../../external/preact/hooks/dist/hooks.js";import o from"../../../core/Services/get-dataset.js";import r from"../../../core/Errors/AdyenCheckoutError.js";function a({allowedCountries:a,loadingContext:n,handleError:s}){const[i,d]=e("loading"),[c,l]=e([]);return t((()=>{o("phonenumbers",n).then((e=>{const t=(a.length?e.filter((e=>a.includes(e.id))):e).map((({prefix:e,id:t})=>({id:e,name:`${e} (${t})`,selectedOptionName:e})));l(t||[]),d("ready")})).catch((e=>{l([]),d("ready"),s?.(new r("ERROR",e))}))}),[]),{phonePrefixes:c,loadingStatus:i}}export{a as default};
//# sourceMappingURL=usePhonePrefixes.js.map