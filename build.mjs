/* eslint-disable import/no-extraneous-dependencies */
import { overrideGQLOperations } from '@dropins/build-tools/gql-extend.js';

overrideGQLOperations([
  {
    npm: '@dropins/storefront-cart',
    operations: [],
  },
  {
    npm: '@dropins/storefront-checkout',
    operations: [`
      fragment CHECKOUT_DATA_FRAGMENT on Cart {
        available_payment_methods {
          code
          title
          oope_payment_method_config {
            backend_integration_url      
            custom_config {
              ... on CustomConfigKeyValue {
                  key
                  value
              }
            }      
          }
        }
        selected_payment_method {
          code
          title
          oope_payment_method_config {
            backend_integration_url   
            custom_config {
              ... on CustomConfigKeyValue {
                  key
                  value
              }
            }
          }
        }
      }    
    `],
  }
]);
