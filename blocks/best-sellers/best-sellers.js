import { createOptimizedPicture } from "../../scripts/aem.js";

/**
 * loads and decorates best-sellers
 * @param {Element} block The best-sellers block element
 */
export default function decorate(block) {
  const link = block.querySelector("a");
  const divElements = block.querySelectorAll("div");
  let product = "";
  let data = [];

  divElements.forEach((divElement, index) => {
    if (divElement.textContent.trim().toLowerCase() === "product") {
      if (divElements[index + 1]) {
        product = divElements[index + 1].textContent.trim();
      }
    }
  });

  function modifyHTML() {
    block.innerHTML = "";

    data.forEach((item) => {
      const picture = createOptimizedPicture(item.image, "", false, [
        { width: 1000 },
      ]);
      picture.lastElementChild.width = "1000";
      picture.lastElementChild.height = "1000";

      // Convert hard-coded product name to product URL
      const productName = item.name.toLowerCase().replace(/ /g, "-");
      const productUrl = `/products/${productName}/${item.sku}`;
      const createdCard = document.createElement("div");
      createdCard.classList.add("wide-card");
      createdCard.innerHTML = `
        <div class="card-image">
          <a href="${productUrl}">
            ${picture.outerHTML}
          </a>
        </div>
        <div class="card-info">
          <a href="${productUrl}">
            <h2>${item.name}</h2>
          </a>
          <p class="card-item-sku">${item.sku}</p>
          <p class="card-item-description">${item.description}</p>

          <p class="button-container">
            <a
              class="button add-to-cart"
              href="javascript:void(0)"
              data-sku="${item.sku}"
            >
                Add to cart
            </a>
          </p>
        </div>
      `;
      block.append(createdCard);
    });

    // create a script to call the addProductsToCart function from Cart dropin
    const script = document.createElement("script");
    script.innerHTML = `
      document.querySelectorAll('.add-to-cart').forEach((button) => {
        button.addEventListener('click', async (event) => {
          const { addProductsToCart } = await import('@dropins/storefront-cart/api.js');
          event.preventDefault();
          addProductsToCart([{ sku: event.target.dataset.sku, quantity: 1 }]);
        });
      });
    `;
    block.append(script);
  }
  async function initialize() {
    const response = await fetch(link?.href);

    if (response.ok) {
      const jsonData = await response.json();
      data = jsonData?.data;

      if (product) {
        const products = jsonData?.raw.data;
        const foundProduct = products.find((obj) => obj.name === product);
        data = [foundProduct];
        modifyHTML();
      } else {
        data = jsonData?.data;
        modifyHTML();
      }
    }
  }

  initialize();
}
