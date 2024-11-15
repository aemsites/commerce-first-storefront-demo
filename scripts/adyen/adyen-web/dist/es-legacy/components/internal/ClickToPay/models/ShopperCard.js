import{SchemeNames as t}from"../services/sdks/utils.js";function i(t,i,a){return i in t?Object.defineProperty(t,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[i]=a,t}class a{get title(){return"visa"===this.scheme?t[this.scheme]:this.descriptorName||t[this.scheme]}get isDcfPopupEmbedded(){return"mc"===this.scheme}confirmCardIsExpired(){if("ACTIVE"!==this.status)return!0;if(!this.panExpirationYear&&!this.panExpirationMonth)return!1;const[t,i]=[(new Date).getMonth()+1,(new Date).getFullYear()];return!(Number(this.panExpirationYear)>i)&&!(Number(this.panExpirationYear)===i&&Number(this.panExpirationMonth)>=t)}constructor(t,a,r){i(this,"dateOfCardLastUsed",void 0),i(this,"dateOfCardCreated",void 0),i(this,"panLastFour",void 0),i(this,"srcDigitalCardId",void 0),i(this,"scheme",void 0),i(this,"artUri",void 0),i(this,"srcCorrelationId",void 0),i(this,"tokenId",void 0),i(this,"isExpired",void 0),i(this,"panExpirationMonth",void 0),i(this,"panExpirationYear",void 0),i(this,"descriptorName",void 0),i(this,"status",null),this.dateOfCardLastUsed=t.dateOfCardLastUsed,this.dateOfCardCreated=t.dateOfCardCreated,this.panLastFour=t.panLastFour,this.srcDigitalCardId=t.srcDigitalCardId,this.descriptorName=t.digitalCardData.descriptorName,this.tokenId=t.tokenId,this.scheme=a,this.artUri=t.digitalCardData.artUri,this.srcCorrelationId=r,this.panExpirationMonth=t.panExpirationMonth,this.panExpirationYear=t.panExpirationYear,this.status=t.digitalCardData.status,this.isExpired=this.confirmCardIsExpired()}}export{a as default};
//# sourceMappingURL=ShopperCard.js.map
