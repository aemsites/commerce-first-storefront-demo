/* eslint-disable import/no-extraneous-dependencies */
import { overrideGQLOperations } from '@dropins/build-tools/gql-extend.js';

overrideGQLOperations([
  // {
  //   npm: '@dropins/storefront-cart',
  //   operations: [],
  // },
  {
    npm: '@dropins/storefront-order',
    skipFragments: ['DOWNLOADABLE_ORDER_ITEMS_FRAGMENT'],
    operations: [],
  },
  // {
  //   npm: '@dropins/storefront-checkout',
  //   operations: [],
  // },
]);
