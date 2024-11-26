import{Initializer as I}from"@dropins/tools/lib.js";import{events as i}from"@dropins/tools/event-bus.js";import{f as m,h as n}from"./chunks/fetch-graphql.js";import{g as q,r as U,s as Y,a as Q,b as H}from"./chunks/fetch-graphql.js";import{h as u}from"./chunks/network-error.js";import{P as l,a as p,G as _,O as c,B as D,R as O,c as G}from"./chunks/transform-order-details.js";import{O as R,A as h}from"./chunks/getGuestOrder.graphql.js";import{t as T}from"./chunks/getCustomer.js";import{g as j,a as J}from"./chunks/getCustomer.js";import{g as W}from"./chunks/getAttributesForm.js";import{g as Z}from"./chunks/getStoreConfig.js";import{g as re}from"./chunks/getCustomerOrdersReturn.js";import{g as ae,r as se}from"./chunks/requestReturn.js";import{c as ie,r as oe}from"./chunks/requestGuestOrderCancel.js";import{r as ne}from"./chunks/reorderItems.js";import"@dropins/tools/fetch-graphql.js";import"./chunks/convertCase.js";import"./chunks/transform-attributes-form.js";const y=`
query ORDER_BY_NUMBER($orderNumber: String!, $pageSize: Int) {
 customer {
    orders(
      filter: { number: { eq: $orderNumber } }
    ) {
      items {
        email
        available_actions
        status
        number
        id
        order_date
        order_status_change_date
        carrier
        shipping_method
        is_virtual
        returns(pageSize: $pageSize) {
          ...OrderReturns
        }
        items_eligible_for_return {
          ...OrderItemDetails
          ... on BundleOrderItem {
            ...BundleOrderItemDetails
          }
          ... on GiftCardOrderItem {
            ...GiftCardDetails
            product {
              ...ProductDetails
            }
          }
        }
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
            quantity_shipped
            order_item {
              ...OrderItemDetails
              ... on GiftCardOrderItem {
                ...GiftCardDetails
                product {
                  ...ProductDetails
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
          ...AddressesList
        }
        billing_address {
          ...AddressesList
        }
        items {
          ...OrderItemDetails
          ... on BundleOrderItem {
            ...BundleOrderItemDetails
          }
          ... on GiftCardOrderItem {
            ...GiftCardDetails
            product {
              ...ProductDetails
            }
          }
        }
        total {
          ...OrderSummary
        }
      }
    }
  }
}
${l}
${p}
${_}
${c}
${D}
${R}
${h}
${O}
`,f=async({orderId:e,returnRef:r,queryType:t,returnsPageSize:a=50})=>await m(y,{method:"GET",cache:"force-cache",variables:{orderNumber:e,pageSize:a}}).then(s=>{var d;return(d=s.errors)!=null&&d.length?n(s.errors):G(t??"orderData",s,r)}).catch(u),b=`
query ORDER_BY_TOKEN($token: String!) {
  guestOrderByToken(input: { token: $token }) {
    email
    id
    number
    order_date
    order_status_change_date
    status
    token
    carrier
    shipping_method
    printed_card_included
    gift_receipt_included
    available_actions
    is_virtual
    items_eligible_for_return {
      ...OrderItemDetails
    }
    returns(pageSize: 50) {
      ...OrderReturns
    }
    payment_methods {
      name
      type
    }
    applied_coupons {
      code
    }
    shipments {
      id
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
          ...OrderItemDetails
          ... on GiftCardOrderItem {
            ...GiftCardDetails
            product {
              ...ProductDetails
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
      ...AddressesList
    }
    billing_address {
      ...AddressesList
    }
    items {
      ...OrderItemDetails
      ... on BundleOrderItem {
        ...BundleOrderItemDetails
      }
      ... on GiftCardOrderItem {
        ...GiftCardDetails
        product {
          ...ProductDetails
        }
      }
    }
    total {
      ...OrderSummary
    }
  }
}
${l}
${p}
${_}
${c}
${D}
${R}
${h}
${O}
`,$=async(e,r)=>await m(b,{method:"GET",cache:"no-cache",variables:{token:e}}).then(t=>{var a;return(a=t.errors)!=null&&a.length?n(t.errors):T(t,r)}).catch(u),A="orderData",C=async e=>{var o;const r=typeof(e==null?void 0:e.orderRef)=="string"?e==null?void 0:e.orderRef:"",t=typeof(e==null?void 0:e.returnRef)=="string"?e==null?void 0:e.returnRef:"",a=r&&typeof(e==null?void 0:e.orderRef)=="string"&&((o=e==null?void 0:e.orderRef)==null?void 0:o.length)>20,s=(e==null?void 0:e.orderData)??null;if(s){i.emit("order/data",{...s,returnNumber:t});return}if(!r)return;const d=a?await $(r,t):await f({orderId:r,returnRef:t,queryType:A});d?i.emit("order/data",{...d,returnNumber:t}):i.emit("order/error",{source:"order",type:"network",error:"The data was not received."})},E=new I({init:async e=>{const r={};E.config.setConfig({...r,...e}),C(e).catch(console.error)},listeners:()=>[]}),P=E.config;export{ie as cancelOrder,P as config,m as fetchGraphQl,W as getAttributesForm,ae as getAttributesList,q as getConfig,j as getCustomer,re as getCustomerOrdersReturn,J as getGuestOrder,f as getOrderDetailsById,Z as getStoreConfig,$ as guestOrderByToken,E as initialize,U as removeFetchGraphQlHeader,ne as reorderItems,oe as requestGuestOrderCancel,se as requestReturn,Y as setEndpoint,Q as setFetchGraphQlHeader,H as setFetchGraphQlHeaders};
