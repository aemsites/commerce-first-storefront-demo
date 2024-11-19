import{Component as e,createElement as t}from"../../../external/preact/dist/preact.js";import n from"../../../external/classnames/index.js";import a from"../Spinner/Spinner.js";import{useCoreContext as o}from"../../../core/Context/CoreProvider.js";function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class i extends e{render({classNameModifiers:e=[],disabled:s,href:i,icon:r,inline:l,label:c,status:d,variant:p},{completed:u}){const{i18n:m}=o(),_=r?t("img",{className:"adyen-checkout__button__icon",src:r,alt:"","aria-hidden":"true"}):"",h=[...e,..."primary"!==p?[p]:[],...l?["inline"]:[],...u?["completed"]:[],..."loading"===d||"redirect"===d?["loading"]:[]],b=n(["adyen-checkout__button",...h.map((e=>`adyen-checkout__button--${e}`))]),y={loading:t("span",{className:"adyen-checkout__button__content"},t(a,{size:"medium",inline:!0}),t("span",{className:"adyen-checkout__button__text--sr-only"},m.get("loading"))),redirect:t("span",{className:"adyen-checkout__button__content"},t(a,{size:"medium",inline:!0}),m.get("payButton.redirecting")),default:t("span",{className:"adyen-checkout__button__content"},_,t("span",{className:"adyen-checkout__button__text"},c))},f=y[d]||y.default;return i?t("a",{className:b,href:i,disabled:s,target:this.props.target,rel:this.props.rel},f):t("button",{className:b,type:"button",disabled:s,onClick:this.onClick,onKeyDown:this.onKeyDown},f,"loading"!==d&&"redirect"!==d&&this.props.children)}constructor(...e){super(...e),s(this,"onClick",(e=>{e.preventDefault(),this.props.disabled||this.props.onClick(e,{complete:this.complete})})),s(this,"complete",((e=1e3)=>{this.setState({completed:!0}),setTimeout((()=>{this.setState({completed:!1})}),e)})),s(this,"onKeyDown",(e=>{this.props.onKeyDown?.(e)}))}}s(i,"defaultProps",{status:"default",variant:"primary",disabled:!1,label:"",inline:!1,target:"_self",onClick:()=>{}});export{i as default};
//# sourceMappingURL=Button.js.map
