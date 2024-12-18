/*! Copyright 2024 Adobe
All Rights Reserved. */
import{c as j,r as z}from"./chunks/requestGuestOrderCancel.js";import{f as R,h as g}from"./chunks/fetch-graphql.js";import{g as K,r as W,s as Z,a as ee,b as re}from"./chunks/fetch-graphql.js";import{g as ae}from"./chunks/getAttributesForm.js";import{g as ne,a as se,r as ue}from"./chunks/requestGuestReturn.js";import{g as ie,a as le}from"./chunks/getGuestOrder.js";import{g as de}from"./chunks/getCustomerOrdersReturn.js";import{a as A}from"./chunks/initialize.js";import{d as Te,g as me,c as _e,i as Re}from"./chunks/initialize.js";import{g as Ae}from"./chunks/getStoreConfig.js";import{h as D}from"./chunks/network-error.js";import{events as d}from"@dropins/tools/event-bus.js";import{PRODUCT_DETAILS_FRAGMENT as O,PRICE_DETAILS_FRAGMENT as h,GIFT_CARD_DETAILS_FRAGMENT as f,ORDER_ITEM_DETAILS_FRAGMENT as x,BUNDLE_ORDER_ITEM_DETAILS_FRAGMENT as C,ORDER_SUMMARY_FRAGMENT as b,ADDRESS_FRAGMENT as M}from"./fragments.js";import{a as Oe,c as he,r as fe}from"./chunks/confirmCancelOrder.js";import"@dropins/tools/fetch-graphql.js";import"./chunks/transform-attributes-form.js";import"@dropins/tools/lib.js";const m=(r,t)=>r+t.amount.value,G=(r,t)=>({id:r,totalQuantity:t.totalQuantity,possibleOnepageCheckout:!0,items:t.items.map(e=>{var a,o,n,s,u,c,i,l;return{canApplyMsrp:!0,formattedPrice:"",id:e.id,quantity:e.totalQuantity,product:{canonicalUrl:(a=e.product)==null?void 0:a.canonicalUrl,mainImageUrl:((o=e.product)==null?void 0:o.image)??"",name:((n=e.product)==null?void 0:n.name)??"",productId:0,productType:(s=e.product)==null?void 0:s.productType,sku:((u=e.product)==null?void 0:u.sku)??"",topLevelSku:(c=e.product)==null?void 0:c.sku},prices:{price:{value:e.price.value,currency:e.price.currency,regularPrice:((i=e.regularPrice)==null?void 0:i.value)??e.price.value}},configurableOptions:((l=e.selectedOptions)==null?void 0:l.map(p=>({optionLabel:p.label,valueLabel:p.value})))||[]}}),prices:{subtotalExcludingTax:{value:t.subtotalExclTax.value,currency:t.subtotalExclTax.currency},subtotalIncludingTax:{value:t.subtotalInclTax.value,currency:t.subtotalInclTax.currency}},discountAmount:t.discounts.reduce(m,0)}),N=r=>{var a,o,n;const t=r.coupons[0],e=(a=r.payments)==null?void 0:a[0];return{appliedCouponCode:(t==null?void 0:t.code)??"",email:r.email,grandTotal:r.grandTotal.value,orderId:r.number,orderType:"checkout",otherTax:0,salesTax:r.totalTax.value,shipping:{shippingMethod:((o=r.shipping)==null?void 0:o.code)??"",shippingAmount:((n=r.shipping)==null?void 0:n.amount)??0},subtotalExcludingTax:r.subtotalExclTax.value,subtotalIncludingTax:r.subtotalInclTax.value,payments:e?[{paymentMethodCode:(e==null?void 0:e.code)||"",paymentMethodName:(e==null?void 0:e.name)||"",total:r.grandTotal.value,orderId:r.number}]:[],discountAmount:r.discounts.reduce(m,0),taxAmount:r.totalTax.value}},v=r=>{var e,a;const t=(a=(e=r==null?void 0:r.data)==null?void 0:e.placeOrder)==null?void 0:a.orderV2;return t?A(t):null},E={SHOPPING_CART_CONTEXT:"shoppingCartContext",ORDER_CONTEXT:"orderContext"},I={PLACE_ORDER:"place-order"};function _(){return window.adobeDataLayer=window.adobeDataLayer||[],window.adobeDataLayer}function T(r,t){const e=_();e.push({[r]:null}),e.push({[r]:t})}function L(r){_().push(e=>{const a=e.getState?e.getState():{};e.push({event:r,eventInfo:{...a}})})}function y(r,t){const e=N(t),a=G(r,t);T(E.ORDER_CONTEXT,{...e}),T(E.SHOPPING_CART_CONTEXT,{...a}),L(I.PLACE_ORDER)}class S extends Error{constructor(t){super(t),this.name="PlaceOrderError"}}const F=r=>{const t=r.map(e=>e.message).join(" ");throw new S(t)},P=`
  mutation PLACE_ORDER_MUTATION($cartId: String!) {
    placeOrder(input: { cart_id: $cartId }) {
      errors {
        code
        message
      }
      orderV2 {
        email
        available_actions
        status
        number
        token
        id
        order_date
        carrier
        shipping_method
        is_virtual
        applied_coupons {
          code
        }
        shipments {
          id
          number
          tracking {
            title
            number
            carrier
          }
          comments {
            message
            timestamp
          }
          items {
            id
            product_sku
            product_name
            order_item {
              ...ORDER_ITEM_DETAILS_FRAGMENT
              ... on GiftCardOrderItem {
                ...GIFT_CARD_DETAILS_FRAGMENT
                product {
                  ...PRODUCT_DETAILS_FRAGMENT
                }
              }
            }
          }
        }
        payment_methods {
          name
          type
        }
        shipping_address {
          ...ADDRESS_FRAGMENT
        }
        billing_address {
          ...ADDRESS_FRAGMENT
        }
        items {
          ...ORDER_ITEM_DETAILS_FRAGMENT
          ... on BundleOrderItem {
            ...BUNDLE_ORDER_ITEM_DETAILS_FRAGMENT
          }
          ... on GiftCardOrderItem {
            ...GIFT_CARD_DETAILS_FRAGMENT
            product {
              ...PRODUCT_DETAILS_FRAGMENT
            }
          }
        }
        total {
          ...ORDER_SUMMARY_FRAGMENT
        }
      }
    }
  }
  ${O}
  ${h}
  ${f}
  ${x}
  ${C}
  ${b}
  ${M}
`,X=async r=>{if(!r)throw new Error("No cart ID found");return R(P,{variables:{cartId:r}}).then(t=>{var a,o,n,s,u;(a=t.errors)!=null&&a.length&&g(t.errors),(s=(n=(o=t.data)==null?void 0:o.placeOrder)==null?void 0:n.errors)!=null&&s.length&&F((u=t.data.placeOrder)==null?void 0:u.errors);const e=v(t);return e&&(d.emit("order/placed",e),d.emit("cart/reset",void 0),y(r,e)),e}).catch(D)};export{j as cancelOrder,Te as config,Oe as confirmCancelOrder,he as confirmGuestReturn,R as fetchGraphQl,ae as getAttributesForm,ne as getAttributesList,K as getConfig,ie as getCustomer,de as getCustomerOrdersReturn,le as getGuestOrder,me as getOrderDetailsById,Ae as getStoreConfig,_e as guestOrderByToken,Re as initialize,X as placeOrder,W as removeFetchGraphQlHeader,fe as reorderItems,z as requestGuestOrderCancel,se as requestGuestReturn,ue as requestReturn,Z as setEndpoint,ee as setFetchGraphQlHeader,re as setFetchGraphQlHeaders};
