import{render as t}from"../../../external/preact/dist/preact.js";import e from"../../../utils/getProp.js";import s from"../../../utils/uuid.js";import r from"../../../core/Errors/AdyenCheckoutError.js";import{NO_CHECKOUT_ATTEMPT_ID as o,ANALYTICS_RENDERED_STR as n}from"../../../core/Analytics/constants.js";import{on as i,off as a}from"../../../utils/listenerUtils.js";function h(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}class p{buildElementProps(t){this.props=this.formatProps({...this.constructor.defaultProps,...t})}formatProps(t){return t}formatData(){return{}}setUpAnalytics(t){return null}submitAnalytics(t){return null}handleKeyPress(t){return null}setState(t){this.state={...this.state,...t}}get data(){const t=e(this.props,"modules.risk.data"),s=e(this.props,"modules.analytics.getCheckoutAttemptId")?.()??o,r=this.state.order||this.props.order,n=this.formatData();if(n.paymentMethod&&s&&(n.paymentMethod.checkoutAttemptId=s),"riverty"!==this.props.type&&n.billingAddress){const{firstName:t,lastName:e,...s}=n.billingAddress;n.billingAddress={...s}}return{...t&&{riskData:{clientData:t}},...r&&{order:{orderData:r.orderData,pspReference:r.pspReference}},...n,clientStateDataIndicator:!0}}render(){throw new Error("Payment method cannot be rendered.")}mount(e){const s="string"==typeof e?document.querySelector(e):e;if(!s)throw new Error("Component could not mount. Root node was not found.");const r=!this._node;return this._node&&this.unmount(),this._node=s,i(this._node,"keypress",this.handleKeyPress,!1),this._component=this.render(),t(this._component,s),r&&this.props.modules&&this.props.modules.analytics&&this.setUpAnalytics({containerWidth:s&&s.offsetWidth,component:this.props.isDropin?"dropin":this.constructor.analyticsType??this.constructor.type,flavor:this.props.isDropin?"dropin":"components"}).then((()=>{this.props.isDropin||this.submitAnalytics({type:n})})),this}update(t){return this.props=this.formatProps({...this.props,...t}),this.state={},this.unmount().mount(this._node)}unmount(){return a(this._node,"keypress",this.handleKeyPress),this._node&&t(null,this._node),this}remove(){this.unmount(),this.core&&this.core.remove(this)}constructor(t,e){h(this,"_id",`${this.constructor.type}-${s()}`),h(this,"core",void 0),h(this,"props",void 0),h(this,"state",{}),h(this,"_component",void 0),h(this,"_node",null);const o=function(t){return!!t&&("function"==typeof t.initialize&&"function"==typeof t.createFromAction)}(t);if(!o)throw new r("IMPLEMENTATION_ERROR",`Trying to initialise the component '${this.constructor.type}' without a reference to an instance of AdyenCheckout`);this.core=t,this.buildElementProps(e),this.handleKeyPress=this.handleKeyPress.bind(this)}}h(p,"defaultProps",{});export{p as default};
//# sourceMappingURL=BaseElement.js.map
