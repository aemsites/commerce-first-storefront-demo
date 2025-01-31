import { readBlockConfig } from '../../scripts/aem.js';
import { getConfigValue } from '../../scripts/configs.js';

export default async function decorate(block) {
  // eslint-disable-next-line import/no-absolute-path, import/no-unresolved
  await import('/scripts/widgets/search.js');

  const { category, type } = readBlockConfig(block);
  block.textContent = '';

  const storeDetails = {
    // environmentId: await getConfigValue('commerce-environment-id'),
    environmentId: 'S3p68TS6gjfFTULEvg5prB',
    environmentType: (await getConfigValue('commerce-environment')) || '',
    // apiKey: await getConfigValue('commerce-x-api-key'),
    // apiUrl: await getConfigValue('commerce-endpoint'),
    apiUrl: 'https://core-commerce-saas-storefront-router-service.corp.ethos501-stage-va6.ethos.adobe.net/RkqtvKRWGepUBng8J9bYVk/graphql',
    websiteCode: await getConfigValue('commerce-website-code'),
    storeCode: await getConfigValue('commerce-store-code'),
    storeViewCode: await getConfigValue('commerce-store-view-code'),
    productViewOnly: true,
    config: {
      pageSize: 8,
      perPageConfig: {
        pageSizeOptions: '12,24,36',
        defaultPageSizeOption: '12',
      },
      minQueryLength: '2',
      currencySymbol: '$',
      currencyRate: '1',
      displayOutOfStock: true,
      allowAllProducts: false,
      imageCarousel: false,
      optimizeImages: false,
      imageBaseWidth: 200,
      listview: true,
      displayMode: '', // "" for plp || "PAGE" for category/catalog
      addToCart: async (...args) => {
        const { addProductsToCart } = await import('../../scripts/__dropins__/storefront-cart/api.js');
        await addProductsToCart([{
          sku: args[0],
          options: args[1],
          quantity: args[2],
        }]);
      },
    },
    context: {
      // customerGroup: await getConfigValue('commerce-customer-group'),
      customerGroup: 'b6589fc6ab0dc82cf12099d1c2d40ab994e8410c',
    },
    route: ({ sku }) => {
      const a = new URL(window.location.origin);
      a.pathname = `/products/${sku}/${sku}`;
      return a.toString();
    },
  };

  if (type !== 'search') {
    storeDetails.config.categoryName = document.querySelector('.default-content-wrapper > h1')?.innerText;
    storeDetails.config.currentCategoryId = category;

    // Enable enrichment
    block.dataset.category = category;
  }

  await new Promise((resolve) => {
    const interval = setInterval(() => {
      if (window.LiveSearchPLP) {
        clearInterval(interval);
        resolve();
      }
    }, 200);
  });

  return window.LiveSearchPLP({ storeDetails, root: block });
}
