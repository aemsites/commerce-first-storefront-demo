import{createElement as e}from"../../external/preact/dist/preact.js";import{UIElement as t}from"../internal/UIElement/UIElement.js";import r from"./components/MBWayInput/MBWayInput.js";import{CoreProvider as o}from"../../core/Context/CoreProvider.js";import n from"./components/MBWayAwait/config.js";import s from"../internal/Await/Await.js";import i from"../../core/Errors/SRPanelProvider.js";import{TxVariants as p}from"../tx-variants.js";function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){a(e,t,r[t])}))}return e}function c(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}class l extends t{formatProps(e){const{data:t={},placeholders:r={}}=e;return c(m({},e),{data:{phoneNumber:t.telephoneNumber||t.phoneNumber,phonePrefix:t.phonePrefix||"+351"},placeholders:{phoneNumber:r.telephoneNumber||r.phoneNumber}})}formatData(){var e;return{paymentMethod:m({type:l.type},(null===(e=this.state.data)||void 0===e?void 0:e.phoneNumber)&&{telephoneNumber:this.state.data.phonePrefix+this.state.data.phoneNumber})}}get isValid(){return!!this.state.isValid}get displayName(){return this.props.name}render(){return this.props.paymentData?e(o,{i18n:this.props.i18n,loadingContext:this.props.loadingContext,resources:this.resources},e(i,{srPanel:this.props.modules.srPanel},e(s,{ref:e=>{this.componentRef=e},clientKey:this.props.clientKey,paymentData:this.props.paymentData,onError:this.props.onError,onComplete:this.onComplete,brandLogo:this.icon,type:n.type,messageText:this.props.i18n.get(n.messageTextId),awaitText:this.props.i18n.get(n.awaitTextId),showCountdownTimer:n.showCountdownTimer,delay:n.STATUS_INTERVAL,countdownTime:n.COUNTDOWN_MINUTES,throttleTime:n.THROTTLE_TIME,throttleInterval:n.THROTTLE_INTERVAL,onActionHandled:this.onActionHandled}))):e(o,{i18n:this.props.i18n,loadingContext:this.props.loadingContext,resources:this.resources},e(r,c(m({ref:e=>{this.componentRef=e}},this.props),{onChange:this.setState,onSubmit:this.submit,payButton:this.payButton})))}}a(l,"type",p.mbway);export{l as MBWayElement,l as default};
//# sourceMappingURL=MBWay.js.map