function r(r,e,l){return e in r?Object.defineProperty(r,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[e]=l,r}function e(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{},t=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter((function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})))),t.forEach((function(l){r(e,l,a[l])}))}return e}function l(r,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):function(r){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);e.push.apply(e,l)}return e}(Object(e)).forEach((function(l){Object.defineProperty(r,l,Object.getOwnPropertyDescriptor(e,l))})),r}const a=(r,e)=>Object.keys(r).filter((r=>!e.includes(r))).reduce(((e,l)=>(e[l]=r[l],e)),{}),t=(r,a,t,o,d)=>a.reduce(((r,a)=>{var i,s,n;return l(e({},r),{[a]:null!==(n=null!==(s=null!==(i=r[a])&&void 0!==i?i:null==d?void 0:d[a])&&void 0!==s?s:null==o?void 0:o[a])&&void 0!==n?n:t})}),r);function o({schema:r,defaultData:a,processField:t,fieldProblems:o}){const d=r=>{var e;if(void 0===a[r])return{valid:!1,errors:null,data:null,fieldProblems:null!==(e=null==o?void 0:o[r])&&void 0!==e?e:null};const[l,d]=t({key:r,value:a[r],mode:"blur"},{state:{data:a}});var i;return{valid:d.isValid&&!(null==o?void 0:o[r])||!1,errors:d.hasError()?d.getError():null,data:l,fieldProblems:null!==(i=null==o?void 0:o[r])&&void 0!==i?i:null}},i=r.reduce(((r,a)=>{const{valid:t,errors:o,data:i,fieldProblems:s}=d(a);return{valid:l(e({},r.valid),{[a]:t}),errors:l(e({},r.errors),{[a]:o}),data:l(e({},r.data),{[a]:i}),fieldProblems:l(e({},r.fieldProblems),{[a]:s})}}),{data:{},valid:{},errors:{},fieldProblems:{}});return{schema:r,data:i.data,valid:i.valid,errors:i.errors,fieldProblems:i.fieldProblems}}function d(r){return function(d,{type:i,key:s,value:n,mode:u,schema:c,defaultData:v,formValue:f,selectedSchema:m,fieldProblems:b,data:P}){const y=m||d.schema;switch(i){case"setData":return l(e({},d),{data:l(e({},d.data),{[s]:n})});case"mergeData":return l(e({},d),{data:e({},d.data,P)});case"setValid":return l(e({},d),{valid:l(e({},d.valid),{[s]:n})});case"setErrors":return l(e({},d),{errors:l(e({},d.errors),{[s]:n})});case"setFieldProblems":var p,O;return null!==(O=null==d||null===(p=d.schema)||void 0===p?void 0:p.reduce(((r,a)=>{var t,o;return l(e({},r),{fieldProblems:l(e({},d.fieldProblems),{[a]:null!==(o=null==b?void 0:b[a])&&void 0!==o?o:null}),valid:l(e({},d.valid),{[a]:(null===(t=d.valid)||void 0===t?void 0:t[a])&&!b[a]})})}),d))&&void 0!==O?O:d;case"updateField":{const[a,t]=r({key:s,value:n,mode:u},{state:d}),o=d.data[s],i=e({},d.fieldProblems);return o!==a&&(i[s]=null),l(e({},d),{data:l(e({},d.data),{[s]:a}),errors:l(e({},d.errors),{[s]:t.hasError()?t.getError():null}),valid:l(e({},d.valid),{[s]:t.isValid&&!i[s]||!1}),fieldProblems:i})}case"mergeForm":{const r=l(e({},d),{data:e({},d.data,f.data),errors:e({},d.errors,f.errors),valid:e({},d.valid,f.valid),fieldProblems:e({},d.fieldProblems,f.fieldProblems)});return r.valid&&(r.isValid=Object.values(r.valid).every((r=>r))),r}case"setSchema":{var h,j,g;const i=o({schema:c,defaultData:v,processField:r,fieldProblems:b}),s=d.schema.filter((r=>!c.includes(r))),n=c.filter((r=>!d.schema.includes(r))),u={data:a(d.data,n),errors:a(d.errors,n),valid:a(d.valid,n)},f=t(a(d.data,s),n,null,i.data,null===(h=d.local)||void 0===h?void 0:h.data),m=t(a(d.valid,s),n,!1,i.valid,null===(j=d.local)||void 0===j?void 0:j.valid),P=t(a(d.errors,s),n,null,i.errors,null===(g=d.local)||void 0===g?void 0:g.errors);return l(e({},d),{schema:c,data:f,valid:m,errors:P,local:u})}case"validateForm":{const a=y.reduce(((a,t)=>{const[,o]=r({key:t,value:d.data[t],mode:"blur"},{state:d});return{valid:l(e({},a.valid),{[t]:o.isValid&&!d.fieldProblems[t]||!1}),errors:l(e({},a.errors),{[t]:o.hasError(!0)?o.getError(!0):null})}}),{valid:d.valid,errors:d.errors});return l(e({},d),{valid:a.valid,errors:a.errors})}default:throw new Error("Undefined useForm action")}}}export{d as getReducer,o as init};
//# sourceMappingURL=reducer.js.map