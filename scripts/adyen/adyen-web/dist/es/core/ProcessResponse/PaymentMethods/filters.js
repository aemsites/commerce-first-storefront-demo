function t(t){return!this.length||this.indexOf(t.type)>-1}function e(t){return!this.length||this.indexOf(t.type)<0}function n(t){return!!t&&!!t.supportedShopperInteractions&&t.supportedShopperInteractions.includes("Ecommerce")}const i=["scheme","blik","twint","ach","cashapp","paybybank_AIS_DD"];function p(t){return!!t&&!!t.type&&i.includes(t.type)}export{t as filterAllowedPaymentMethods,n as filterEcomStoredPaymentMethods,e as filterRemovedPaymentMethods,p as filterSupportedStoredPaymentMethods};
//# sourceMappingURL=filters.js.map
