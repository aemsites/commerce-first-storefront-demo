import{createElement as t}from"../../external/preact/dist/preact.js";import{UIElement as e}from"../internal/UIElement/UIElement.js";import{CoreProvider as r}from"../../core/Context/CoreProvider.js";import n from"./components/DonationComponent.js";import{TxVariants as o}from"../tx-variants.js";function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){s(t,e,r[e])}))}return t}function a(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e.push.apply(e,r)}return e}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})),t}class c extends e{get data(){return this.state.data}get isValid(){return this.state.isValid}setState(t){this.state=i({},this.state,t)}donate(){const{data:t,isValid:e}=this;this.props.onDonate({data:t,isValid:e},this)}render(){return t(r,{i18n:this.props.i18n,loadingContext:this.props.loadingContext,resources:this.resources},t(n,a(i({},this.props),{ref:this.handleRef,onChange:this.setState,onDonate:this.donate})))}constructor(t,e){super(t,e),s(this,"handleRef",(t=>{this.componentRef=t})),this.donate=this.donate.bind(this)}}s(c,"type",o.donation),s(c,"defaultProps",{onCancel:()=>{},onDonate:()=>{}});export{c as default};
//# sourceMappingURL=Donation.js.map