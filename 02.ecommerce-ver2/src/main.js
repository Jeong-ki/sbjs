import { setupProducts } from "./products";
import { setupCounter } from "./counter";
import { setupCart } from "./cart";

function findElement(startingElement, selector) {
  let currentElement = startingElement;
  while (currentElement) {
    if (currentElement.matches(selector)) {
      return currentElement;
    }
    currentElement = currentElement.parentElement;
  }
  return null;
}

function sumAllCounts(countMap) {}

async function main() {
  const { updateCount: updateProductCount, getProductById } =
    await setupProducts({
      container: document.querySelector("#products"),
    });

  const {
    addProduct,
    removeProduct,
    updateCount: updateCartCount,
  } = setupCart({ container: document.querySelector(".cart_items") });

  const { increase, decrease, getTotalCount } = setupCounter();

  const updateTotalCount = (totalCount) => {
    document.querySelector(".total_count").innerHTML = `(${totalCount})`;
  };

  const increaseCount = (productId) => {
    const count = increase({ productId });
    updateProductCount({ productId, count });
    if (count === 1) {
      addProduct({ product: getProductById({ productId }) });
    }
    updateCartCount({ productId, count });
    updateTotalCount(getTotalCount());
  };
  const decreaseCount = (productId) => {
    const count = decrease({ productId });
    updateProductCount({ productId, count });
    updateCartCount({ productId, count });
    if (count === 0) {
      removeProduct({ product: getProductById({ productId }) });
    }
    updateTotalCount(getTotalCount());
  };

  document.querySelector("#products").addEventListener("click", (event) => {
    const targetElement = event.target;
    const productElement = findElement(targetElement, ".product");
    const productId = productElement.getAttribute("data-product-id");

    if (
      targetElement.matches(".btn-decrease") ||
      targetElement.matches(".btn-increase")
    ) {
      if (targetElement.matches(".btn-decrease")) {
        decreaseCount(productId);
      } else if (targetElement.matches(".btn-increase")) {
        increaseCount(productId);
      }
    }
  });

  document.querySelector(".cart_items").addEventListener("click", (event) => {
    const targetElement = event.target;
    const productElement = findElement(targetElement, ".product");
    const productId = productElement.getAttribute("data-product-id");

    if (
      targetElement.matches(".btn-decrease") ||
      targetElement.matches(".btn-increase")
    ) {
      if (targetElement.matches(".btn-decrease")) {
        decreaseCount(productId);
      } else if (targetElement.matches(".btn-increase")) {
        increaseCount(productId);
      }
    }
  });

  document.querySelector(".btn-cart").addEventListener("click", () => {
    document.body.classList.add("displaying_cart");
  });

  document.querySelector(".btn-close-cart").addEventListener("click", () => {
    document.body.classList.remove("displaying_cart");
  });

  document.querySelector(".cart-dimmed-bg").addEventListener("click", () => {
    document.body.classList.remove("displaying_cart");
  });
}

main();
