/*! Copyright 2024 Adobe
All Rights Reserved. */
import{s,f as m,h as T}from"./chunks/resetCart.js";import{g as $,r as v,d as Q,a as H,b as k,c as z}from"./chunks/resetCart.js";import{C as l,t as f,c as g,g as h,a as A}from"./chunks/getStoreConfig.js";import{b as j,e as q,i as B,d as J}from"./chunks/getStoreConfig.js";import{events as d}from"@dropins/tools/event-bus.js";import{CART_FRAGMENT as I}from"./fragments.js";import{c as _,p as E}from"./chunks/acdl.js";import{u as L}from"./chunks/updateProductsFromCart.js";import{g as W,b as X,a as Z}from"./chunks/getEstimateShipping.js";import{g as at}from"./chunks/getEstimatedTotals.js";import{g as et}from"./chunks/persisted-data.js";import{A as ot,a as ct}from"./chunks/applyCouponsToCart.js";import"@dropins/tools/fetch-graphql.js";import"@dropins/tools/lib.js";const R=`
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
    
  ${I}
`,b=async r=>{let o=!1;const c=s.cartId||await S().then(e=>(o=!0,e));return m(R,{variables:{cartId:c,cartItems:r.map(({sku:e,parentSku:t,quantity:n,optionsUIDs:a,enteredOptions:i})=>({sku:e,parent_sku:t,quantity:n,selected_options:a,entered_options:i}))}}).then(({errors:e,data:t})=>{var i;const n=[...((i=t==null?void 0:t.addProductsToCart)==null?void 0:i.user_errors)??[],...e??[]];if(n.length>0)return T(n);const a=f(t.addProductsToCart.cart);if(d.emit("cart/updated",a),d.emit("cart/data",a),a){const p=a.items.filter(C=>r.some(({sku:u})=>u===C.sku));o?_(a,p,s.locale??"en-US"):E(a,p,s.locale??"en-US")}return a})},G=`
    mutation CREATE_GUEST_CART_MUTATION {
        createGuestCart {
            cart {
                id
            }
        }
    }
`,S=async()=>{const{disableGuestCart:r}=g.getConfig();if(r)throw new Error("Guest cart is disabled");return await m(G).then(({data:o})=>{var e,t;const c=(t=(e=o.createGuestCart)==null?void 0:e.cart)==null?void 0:t.id;return s.cartId=c,c})},x=async()=>{const r=s.authenticated?await h():await A();return d.emit("cart/updated",r),d.emit("cart/data",r),r};export{ot as ApplyCouponsStrategy,b as addProductsToCart,ct as applyCouponsToCart,g as config,S as createEmptyCart,m as fetchGraphQl,j as getCartData,et as getCartDataFromCache,$ as getConfig,W as getCountries,h as getCustomerCartPayload,X as getEstimateShipping,at as getEstimatedTotals,A as getGuestCartPayload,Z as getRegions,q as getStoreConfig,B as initialize,J as initializeCart,x as refreshCart,v as removeFetchGraphQlHeader,Q as resetCart,H as setEndpoint,k as setFetchGraphQlHeader,z as setFetchGraphQlHeaders,L as updateProductsFromCart};
