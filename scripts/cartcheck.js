import { allProduct } from "../data/allProduct.js";
import { beautyProducts } from "../data/beautyProducts.js";
import { healthProducts } from "../data/health-product.js";
import { cart } from "./cart.js";

cart.forEach((cartItem) => {
  const productId = cartItem.productId;
  let matchingProduct;
  let cartHtml = "";

  healthProducts.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  console.log(matchingProduct);
  cartHtml += `
      
      <div class="description-grid">
              <div class="descript-1">
                <img
                  class="img-cart-width"
                  src=${matchingProduct.image}
                  alt=""
                />
              </div>
              <div class="descript-2">
                <p class="cart-item-name">
                  ${matchingProduct.name}
                </p>
                <span class="cart-stock">In stock</span>
                <div class="cart-interactn">
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn1-tag"
                  >
                    <a
                      href="#"
                      class="minus js-minus-quantity"
                      data-quantity-id="${product.id}"
                      >&#8722;</a
                    >
                    <span class="one-span quantity-count-${product.id}">1</span>
                    <a
                      href="#"
                      class="js-add-quantity"
                      data-quantity-id="${product.id}"
                      >+</a
                    >
                  </button>
                  <a class="del-style1" href="">Delete</a>
                  <a class="del-style" href="">Share</a>
                  <a class="del-style" href="">Waitlist</a>
                </div>
              </div>
              <p class="descript-3">#${matchingProduct.price}</p>
            </div>
      
      
      `;
});

console.log(cartHtml);

document.querySelector(".js-cart-items").innerHTML = cartHtml;
