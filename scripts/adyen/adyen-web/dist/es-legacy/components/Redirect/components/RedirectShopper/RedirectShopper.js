import{Component as t,createElement as e}from"../../../../external/preact/dist/preact.js";import r from"../../../../utils/detectInIframeInSameOrigin.js";function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){o(t,e,r[e])}))}return t}class i extends t{componentDidMount(){new Promise(((t,e)=>{this.props.beforeRedirect(t,e,n({url:this.props.url,method:this.props.method},this.props.data?{data:this.props.data}:{}))})).then((()=>{var t,e,o,n;(null===(t=(e=this.props).onActionHandled)||void 0===t||t.call(e,{componentType:this.props.paymentMethodType,actionDescription:"performing-redirect"}),this.postForm)?this.postForm.submit():this.props.redirectFromTopWhenInIframe&&r()?null===(o=(n=window.top.location).assign)||void 0===o||o.call(n,this.props.url):window.location.assign(this.props.url)})).catch((()=>{}))}render({url:t,method:o,data:i={}}){return"POST"===o?e("form",n({method:"post",action:t,style:{display:"none"},ref:t=>{this.postForm=t}},this.props.redirectFromTopWhenInIframe&&r()&&{target:"_top"}),Object.keys(i).map((t=>e("input",{type:"hidden",name:t,key:t,value:i[t]})))):null}constructor(...t){super(...t),o(this,"postForm",void 0)}}o(i,"defaultProps",{beforeRedirect:t=>t(),method:"GET"});export{i as default};
//# sourceMappingURL=RedirectShopper.js.map
