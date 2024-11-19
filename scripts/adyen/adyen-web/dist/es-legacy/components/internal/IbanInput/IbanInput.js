import{Component as e,createElement as t}from"../../../external/preact/dist/preact.js";import{useCoreContext as a}from"../../../core/Context/CoreProvider.js";import r from"../FormFields/Field/Field.js";import{isValidHolder as s,checkIbanStatus as i}from"./validate.js";import{electronicFormat as n,formatIban as o,getCountryCode as l,getNextCursorPosition as d}from"./utils.js";import u from"../FormFields/Fieldset/Fieldset.js";import h from"../FormFields/InputText.js";function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){b(e,t,a[t])}))}return e}function m(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t.push.apply(t,a)}return t}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}const p={isValid:!1,errorMessage:"ach.accountHolderNameField.invalid",error:"ach.accountHolderNameField.invalid"},N={isValid:!1,errorMessage:"sepaDirectDebit.ibanField.invalid",error:"sepaDirectDebit.ibanField.invalid"};class v extends e{setStatus(e){this.setState({status:e})}onChange(){const e=!this.props.holderName||s(this.state.data.ownerName),t="valid"===i(this.state.data.ibanNumber).status&&e,a={data:this.state.data,isValid:t,errors:this.state.errors};this.props.onChange(a)}showValidation(){const e=i(this.state.data.ibanNumber).status,t=s(this.state.data.ownerName);this.setError("iban","valid"!==e?N:null);const a=t?null:p;this.setError("holder",a,this.onChange)}render({placeholders:e},{data:s,errors:i,valid:n}){const{i18n:o}=a();return t(u,{classNameModifiers:["iban-input"],label:this.props.label},this.props.holderName&&t(r,{className:"adyen-checkout__field--owner-name",label:o.get("sepa.ownerName"),filled:s.ownerName&&s.ownerName.length,errorMessage:!!i.holder&&o.get(i.holder.error),dir:"ltr",i18n:o,name:"ownerName"},t(h,{name:"ownerName",className:"adyen-checkout__iban-input__owner-name",placeholder:null==e?void 0:e.ownerName,value:s.ownerName,"aria-invalid":!!this.state.errors.holder,"aria-label":o.get("sepa.ownerName"),onInput:e=>this.handleHolderInput(e.target.value),onBlur:e=>this.handleHolderInput(e.target.value)})),t(r,{className:"adyen-checkout__field--iban-number",label:o.get("sepa.ibanNumber"),errorMessage:!!i.iban&&o.get(i.iban.error),filled:s.ibanNumber&&s.ibanNumber.length,isValid:n.iban,onBlur:this.handleIbanBlur,dir:"ltr",i18n:o,name:"ibanNumber"},t(h,{setRef:e=>{this.ibanNumber=e},name:"ibanNumber",className:"adyen-checkout__iban-input__iban-number",classNameModifiers:["large"],placeholder:null==e?void 0:e.ibanNumber,value:s.ibanNumber,onInput:this.handleIbanInput,"aria-invalid":!!this.state.errors.iban,"aria-label":o.get("sepa.ibanNumber"),autocorrect:"off",spellcheck:!1})),this.props.showPayButton&&this.props.payButton({status:this.state.status}))}constructor(e){var t,a,r;if(super(e),b(this,"ibanNumber",void 0),b(this,"setData",((e,t,a)=>{this.setState((a=>({data:m(c({},a.data),{[e]:t})})),a)})),b(this,"setError",((e,t,a)=>{this.setState((a=>({errors:m(c({},a.errors),{[e]:t})})),a)})),b(this,"setValid",((e,t,a)=>{this.setState((a=>({valid:m(c({},a.valid),{[e]:t})})),a)})),b(this,"handleHolderInput",(e=>{this.setState((t=>({data:m(c({},t.data),{ownerName:e})})),(()=>{const e=s(this.state.data.ownerName),t=null==e||e?null:p;this.setError("holder",t,this.onChange)}))})),b(this,"handleIbanInput",(e=>{const t=e.target.value,a=n(t),r=o(a),s=i(r).status,u=l(a),h=e.target.selectionStart,b=this.state.data.ibanNumber,p=d(h,r,b);this.setState((e=>({data:m(c({},e.data),{ibanNumber:r,countryCode:u}),errors:m(c({},e.errors),{iban:"invalid"===s?N:null}),valid:m(c({},e.valid),{iban:"valid"===s})})),(()=>{e.target.setSelectionRange(p,p),this.onChange()}))})),b(this,"handleIbanBlur",(e=>{const t=e.target.value;if(t.length>0){const e=i(t).status;this.setError("iban","valid"!==e?N:null,this.onChange)}else this.setError("iban",null,this.onChange)})),this.state={status:"ready",data:{ownerName:(null==e||null===(t=e.data)||void 0===t?void 0:t.ownerName)||"",ibanNumber:(null==e||null===(a=e.data)||void 0===a?void 0:a.ibanNumber)||"",countryCode:(null==e||null===(r=e.data)||void 0===r?void 0:r.countryCode)||""},isValid:!1,cursor:0,errors:{},valid:{}},this.state.data.ibanNumber){const e=n(this.state.data.ibanNumber);this.state.data.ibanNumber=o(e)}if(this.state.data.ibanNumber||this.state.data.ownerName){const e=this.props.holderName?s(this.state.data.ownerName):"",t=(this.state.data.ibanNumber?"valid"===i(this.state.data.ibanNumber).status:"")&&e,a={data:this.state.data,isValid:t};this.props.onChange(a)}}}b(v,"defaultProps",{onChange:()=>{},countryCode:null,holderName:!0,placeholders:{},label:null});export{v as default};
//# sourceMappingURL=IbanInput.js.map
