import{Component as e,createElement as t}from"../../../../external/preact/dist/preact.js";import r from"../../../../external/classnames/index.js";class a extends e{componentDidMount(){this.formEl.submit(),this.props.onFormSubmit(`${this.props.inputName} sent`)}render({name:e,action:a,target:n,inputName:o,inputValue:s}){return t("form",{ref:e=>{this.formEl=e},method:"POST",className:r(["adyen-checkout__threeds2__form",`adyen-checkout__threeds2__form--${e}`]),name:e,action:a,target:n,style:{display:"none"}},t("input",{name:o,value:s}))}constructor(...e){var t,r,a;super(...e),a=void 0,(r="formEl")in(t=this)?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a}}export{a as default};
//# sourceMappingURL=ThreeDS2Form.js.map
