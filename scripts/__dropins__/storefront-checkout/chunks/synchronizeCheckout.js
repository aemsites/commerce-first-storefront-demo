/*! Copyright 2024 Adobe
All Rights Reserved. */
import{s as i,M as v,d as l,l as A}from"./fetch-graphql.js";import{b,s as M,c}from"./store-config.js";import"./ServerErrorSignal.js";import{events as s}from"@dropins/tools/event-bus.js";import{merge as a,Initializer as T}from"@dropins/tools/lib.js";import{CHECKOUT_DATA_FRAGMENT as u,CUSTOMER_FRAGMENT as S}from"../fragments.js";const I=async(e=!1)=>{i.authenticated=e,e?await K():b.value={pending:!1,data:null}},x=e=>e==null,E=(e,t)=>e.amount.value-t.amount.value,m=e=>!(!e||!e.method_code||!e.method_title||x(e.amount.value)||!e.amount.currency),f=e=>({amount:{value:e.amount.value,currency:e.amount.currency},title:e.method_title,code:e.method_code,carrier:{code:e.carrier_code,title:e.carrier_title},value:`${e.carrier_code} - ${e.method_code}`,...e.price_excl_tax&&{amountExclTax:{value:e.price_excl_tax.value,currency:e.price_excl_tax.currency}},...e.price_incl_tax&&{amountInclTax:{value:e.price_incl_tax.value,currency:e.price_incl_tax.currency}}}),N=e=>{if(m(e))return f(e)},k=e=>{if(e)return e.filter(m).map(t=>f(t)).sort(E)},w=e=>e?!!e.code&&!!e.label:!1,z=e=>{if(!w(e))return;const{code:t,label:r,region_id:n}=e;return n?{code:t,name:r,id:n}:{code:t,name:r}},R=e=>{const{code:t,label:r}=e;return{value:t,label:r}},q=()=>[],p=e=>{const t=e.street.filter(Boolean);return{id:(e==null?void 0:e.id)||void 0,city:e.city,company:e.company||void 0,country:R(e.country),customAttributes:q(e.custom_attributes),firstName:e.firstname,lastName:e.lastname,postCode:e.postcode||void 0,region:z(e.region),street:t,telephone:e.telephone||void 0,vatId:e.vat_id||void 0}},G=e=>{if(e)return p(e)},O=e=>e.filter(t=>!!t).map(t=>{const{available_shipping_methods:r,selected_shipping_method:n,same_as_billing:o,...C}=t;return{...p(C),availableShippingMethods:k(r),selectedShippingMethod:N(n),sameAsBilling:o}}),Z=e=>({city:e.city,company:e.company,country_code:e.countryCode,firstname:e.firstName,lastname:e.lastName,postcode:e.postcode,region:e.region,region_id:e.regionId,save_in_address_book:e.saveInAddressBook??!0,street:e.street,telephone:e.telephone,vat_id:e.vatId}),P=e=>{if(e)return{code:e.code,title:e.title}},$=e=>{if(e)return e.filter(t=>!!t).map(t=>{const{code:r,title:n}=t;return{code:r,title:n}})},B=e=>{var r,n,o;if(!e)return;const t={availablePaymentMethods:$(e.available_payment_methods),billingAddress:G(e.billing_address),email:e.email??void 0,id:e.id,isEmpty:e.total_quantity===0,isVirtual:e.is_virtual,selectedPaymentMethod:P(e.selected_payment_method),shippingAddresses:O(e.shipping_addresses),isGuest:!i.authenticated};return a(t,(o=(n=(r=h.getConfig().models)==null?void 0:r.CartModel)==null?void 0:n.transformer)==null?void 0:o.call(n,e))},D=e=>{var r,n,o;if(!e)return;const t={firstName:e.firstname||"",lastName:e.lastname||"",email:e.email||""};return a(t,(o=(n=(r=h.getConfig().models)==null?void 0:r.CustomerModel)==null?void 0:n.transformer)==null?void 0:o.call(n,e))},F=`
  query getCart($cartId: String!) {
    cart(cart_id: $cartId) {
      ...CHECKOUT_DATA_FRAGMENT
    }
  }

  ${u}
`,U=`
  query getCustomerCart {
    cart: customerCart {
      ...CHECKOUT_DATA_FRAGMENT
    }
  }

  ${u}
`,d=async()=>{const e=i.cartId,t=i.authenticated===!1,r=t?F:U,n=t?{cartId:e}:{};if(t&&!e)throw new v;return await l({type:"query",query:r,options:{method:"POST",cache:"no-cache",variables:n},path:"cart",signalType:"cart",transformer:B})},H=`
  query getCustomer {
    customer {
      ...CUSTOMER_FRAGMENT
    }
  }

  ${S}
`,K=async()=>{if(i.authenticated)return await l({type:"query",query:H,options:{method:"POST",cache:"no-cache"},path:"customer",signalType:"customer",transformer:D})},Q=()=>[s.on("authenticated",I,{eager:!0}),s.on("cart/initialized",_,{eager:!0}),s.on("cart/reset",V),s.on("cart/updated",y)],g=new T({init:async e=>{const t=e||{};g.config.setConfig(t),M.value.data||await A()},listeners:Q}),h=g.config,_=async e=>{if(i.initialized)return y(e);const t=e?e.id:null;i.cartId=t;const r=t?await d():null;c.value={pending:!1,data:r},i.initialized=!0,s.emit("checkout/initialized",r||null)},V=()=>{i.cartId=null,c.value={pending:!1,data:null},s.emit("checkout/updated",null)},y=async e=>{if(!i.initialized)return _(e);const t=e?e.id:null;i.cartId=t;const r=t?await d():null;c.value={pending:!1,data:r},s.emit("checkout/updated",r||null)};export{Z as a,k as b,I as c,K as d,h as e,_ as f,d as g,g as i,V as r,y as s,B as t};
