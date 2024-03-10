import { allProduct } from "../data/allProduct.js";
import { beautyProducts } from "../data/beautyProducts.js";
import { healthProducts } from "../data/health-product.js";
import { cart, removeFromCart } from "./cart.js";

let cartHtml = "";
console.log(cart);
cart.forEach((cartItem) => {
  const productId = cartItem.productId;
  let matchingProduct;

  console.log(cartItem.productId);

  allProduct.forEach((product) => {
    console.log(product.id);
    if (product.id === cartItem.productId) {
      matchingProduct = product;
    }
  });

  console.log(matchingProduct);

  cartHtml += `
      
      <div class="description-grid js-cart-item-${matchingProduct.id}">
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
                <span class="cart-stock">Qantity: ${cartItem.quantity}</span>
                <div class="cart-interactn">
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn1-tag"
                  >
                    <a
                      href="#"
                      class="minus js-minus-quantity"
                      data-quantity-id="${matchingProduct.id}"
                      >&#8722;</a
                    >
                    <span class="one-span quantity-count-${matchingProduct.id}">1</span>
                    <a
                      href="#"
                      class="js-add-quantity"
                      data-quantity-id="${matchingProduct.id}"
                      >+</a
                    >
                  </button>
                  <a class="del-style1 js-del-link" data-product-id= '${matchingProduct.id}' href="#">Delete</a>
                  <a class="del-style" href="">Share</a>
                  <a class="del-style" href="">Waitlist</a>
                </div>
              </div>
              <p class="descript-3">#${matchingProduct.price}</p>
            </div>
      
      
      `;
});

document.querySelector(".js-cart-items").innerHTML = cartHtml;

document.querySelectorAll(".js-del-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    let productId = link.dataset.productId;
    console.log(productId);

    removeFromCart(productId);

    console.log(cart);

    const container = document.querySelector(`.js-cart-item-${productId}`);

    console.log(container);
    container.remove();
  });
});
