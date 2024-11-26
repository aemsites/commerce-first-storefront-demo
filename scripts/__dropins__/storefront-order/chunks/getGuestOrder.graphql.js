import{P as e,a as t,G as r,O as a,B as s,R as d}from"./transform-order-details.js";const i=`
fragment OrderSummary on OrderTotal {
  grand_total {
    value
    currency
  }
  total_giftcard {
    currency
    value
  }
  subtotal {
    currency
    value
  }
  taxes {
    amount {
      currency
      value
    }
    rate
    title
  }
  total_tax {
    currency
    value
  }
  total_shipping {
    currency
    value
  }
  discounts {
    amount {
      currency
      value
    }
    label
  }
}`,n=`
fragment AddressesList on OrderAddress {
  city
  company
  country_code
  fax
  firstname
  lastname
  middlename
  postcode
  prefix
  region
  region_id
  street
  suffix
  telephone
  vat_id
}`,o=`
  fragment guestOrderData on CustomerOrder {
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
    returns {
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
      __typename
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
${e}
${t}
${r}
${a}
${s}
${i}
${n}
${d}
`,u=`
  query GET_GUEST_ORDER($input: GuestOrderInformationInput!) {
  guestOrder(input:$input) {
    ...guestOrderData
    }
  }
${o}
`;export{n as A,o as G,i as O,u as a};
