import{P as c,a as u,G as E,O as m,B as l,b as d}from"./transform-order-details.js";import{O,A as D,G as R}from"./getGuestOrder.graphql.js";import{f as i,h as _}from"./fetch-graphql.js";const T=`
mutation CANCEL_ORDER_MUTATION($orderId: ID!, $reason: String!) {
  cancelOrder(input: { order_id: $orderId, reason: $reason }) {
    error
    order {
      email
      available_actions
      status
      number
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
${c}
${u}
${E}
${m}
${l}
${O}
${D}
`,G=async(r,e,o,t)=>{if(!r)throw new Error("No order ID found");if(!e)throw new Error("No reason found");return i(T,{variables:{orderId:r,reason:e}}).then(({errors:a,data:s})=>{if(a)return _(a);if(s.cancelOrder.error!=null){t();return}const n=d(s.cancelOrder.order);o(n)}).catch(()=>t())},A=`
mutation REQUEST_GUEST_ORDER_CANCEL_MUTATION($token: String!, $reason: String!) {
  requestGuestOrderCancel(input: { token: $token, reason: $reason }) {
    error
    order {
      ...guestOrderData
    }
  }
}
${R}
`,C=async(r,e,o,t)=>{if(!r)throw new Error("No order token found");if(!e)throw new Error("No reason found");return i(A,{variables:{token:r,reason:e}}).then(({errors:a,data:s})=>{if(a)return _(a);s.requestGuestOrderCancel.error!=null&&t();const n=d(s.requestGuestOrderCancel.order);o(n)}).catch(()=>t())};export{G as c,C as r};
