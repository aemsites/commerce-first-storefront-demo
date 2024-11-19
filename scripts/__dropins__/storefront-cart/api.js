/*! Copyright 2024 Adobe
All Rights Reserved. */
import{s as c,f as m,h as T}from"./chunks/resetCart.js";import{g as v,r as Q,d as H,a as k,b as z,c as Y}from"./chunks/resetCart.js";import{C as l,t as f,c as g,g as A,a as _}from"./chunks/getStoreConfig.js";import{b as q,e as B,i as J,d as K}from"./chunks/getStoreConfig.js";import{events as d}from"@dropins/tools/event-bus.js";import{CART_FRAGMENT as h}from"./fragments.js";import{c as I,p as E}from"./chunks/acdl.js";import{u as V}from"./chunks/updateProductsFromCart.js";import{g as X,b as Z,a as tt}from"./chunks/getEstimateShipping.js";import{g as rt}from"./chunks/getEstimatedTotals.js";import{g as st}from"./chunks/persisted-data.js";import{A as ct,a as nt}from"./chunks/applyCouponsToCart.js";import"@dropins/tools/fetch-graphql.js";import"@dropins/tools/lib.js";const R=`
  mutation ADD_PRODUCTS_TO_CART_MUTATION(
      $cartId: String!, 
      $cartItems: [CartItemInput!]!,
      ${l}
    ) {
    addProductsToCart(
      cartId: $cartId
      cartItems: $cartItems
    ) {
      cart {
        ...CART_FRAGMENT
      }
      user_errors {
        code
        message
      }
    }
  }
    
  ${h}
`,x=async r=>{let n=!1;const i=c.cartId||await G().then(e=>(n=!0,e));return m(R,{variables:{cartId:i,cartItems:r.map(({sku:e,parentSku:a,quantity:s,optionsUIDs:t,enteredOptions:o})=>({sku:e,parent_sku:a,quantity:s,selected_options:t,entered_options:o}))}}).then(({errors:e,data:a})=>{var o;const s=[...((o=a==null?void 0:a.addProductsToCart)==null?void 0:o.user_errors)??[],...e??[]];if(s.length>0)return T(s);const t=f(a.addProductsToCart.cart);if(d.emit("cart/updated",t),d.emit("cart/data",t),t){const C=t.items.filter(p=>r.some(({sku:u})=>u===p.sku));n?I(t,C,c.locale??"en-US"):E(t,C,c.locale??"en-US")}return t})},U=`
    mutation CREATE_GUEST_CART_MUTATION {
        createGuestCart {
            cart {
                id
            }
        }
    }
`,O=`
    mutation CUSTOMER_CART_MUTATION {
        customerCart {
            cart {
                id
            }
        }
    }
`,G=async()=>{const{disableGuestCart:r}=g.getConfig();if(r)throw new Error("Guest cart is disabled");const n=c.authenticated?O:U;return await m(n).then(({data:i})=>{var a,s,t,o;const e=c.authenticated?(s=(a=i.customerCart)==null?void 0:a.cart)==null?void 0:s.id:(o=(t=i.createGuestCart)==null?void 0:t.cart)==null?void 0:o.id;return c.cartId=e,e})},F=async()=>{const r=c.authenticated?await A():await _();return d.emit("cart/updated",r),d.emit("cart/data",r),r};export{ct as ApplyCouponsStrategy,x as addProductsToCart,nt as applyCouponsToCart,g as config,G as createEmptyCart,m as fetchGraphQl,q as getCartData,st as getCartDataFromCache,v as getConfig,X as getCountries,A as getCustomerCartPayload,Z as getEstimateShipping,rt as getEstimatedTotals,_ as getGuestCartPayload,tt as getRegions,B as getStoreConfig,J as initialize,K as initializeCart,F as refreshCart,Q as removeFetchGraphQlHeader,H as resetCart,k as setEndpoint,z as setFetchGraphQlHeader,Y as setFetchGraphQlHeaders,V as updateProductsFromCart};
