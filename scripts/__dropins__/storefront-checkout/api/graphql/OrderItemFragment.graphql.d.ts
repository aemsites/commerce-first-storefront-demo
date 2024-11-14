export declare const PRODUCT_FRAGMENT = "\n  fragment PRODUCT_FRAGMENT on ProductInterface {\n    __typename\n    canonical_url\n    uid\n    name\n    sku\n    only_x_left_in_stock\n    stock_status\n    image {\n      url\n    }\n    thumbnail {\n      label\n      url\n    }\n    price_range {\n      maximum_price {\n        regular_price {\n          currency\n          value\n        }\n      }\n    }\n  }\n";
export declare const PRICE_FRAGMENT = "\n  fragment PRICE_FRAGMENT on OrderItemInterface {\n    prices {\n      price_including_tax {\n        value\n        currency\n      }\n      original_price {\n        value\n        currency\n      }\n      original_price_including_tax {\n        value\n        currency\n      }\n      price {\n        value\n        currency\n      }\n    }\n  }\n";
export declare const GIFT_CARD_FRAGMENT = "\n  fragment GIFT_CARD_FRAGMENT on GiftCardOrderItem {\n    ...PRICE_FRAGMENT\n    gift_message {\n      message\n    }\n    gift_card {\n      recipient_name\n      recipient_email\n      sender_name\n      sender_email\n      message\n    }\n  }\n";
export declare const ORDER_ITEM_FRAGMENT = "\n  fragment ORDER_ITEM_FRAGMENT on OrderItemInterface {\n    __typename\n    status\n    product_name\n    id\n    quantity_ordered\n    quantity_shipped\n    quantity_canceled\n    quantity_invoiced\n    quantity_refunded\n    quantity_returned\n    product_sale_price {\n      value\n      currency\n    }\n    selected_options {\n      label\n      value\n    }\n    product {\n      ...PRODUCT_FRAGMENT\n    }\n    ...PRICE_FRAGMENT\n  }\n";
export declare const BUNDLE_ORDER_ITEM_FRAGMENT = "\n  fragment BUNDLE_ORDER_ITEM_FRAGMENT on BundleOrderItem {\n    ...PRICE_FRAGMENT\n    bundle_options {\n      uid\n      label\n      values {\n        uid\n        product_name\n      }\n    }\n  }\n";
//# sourceMappingURL=OrderItemFragment.graphql.d.ts.map