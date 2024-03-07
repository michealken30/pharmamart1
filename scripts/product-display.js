function productDisplay(products, cart) {
  let productsHtml = "";

  products.forEach((product) => {
    productsHtml += `
    <div class="grid-class3-1 grid-class3-5">
    <div class="img-div">
      <img
        class="image-size"
        src="${product.image}"
        alt=""
      />
    </div>
    <div class="icon-position">
      <i class="fa-regular fa-heart"></i>
    </div>
    <div class="des-style">
      <div class="item-link-cls">
        <a href="">${product.name}</a>
      </div>
      <div class="item-price-cls">
        <p class="item-price">${product.price}</p>
      </div>
      <div class="btn-desc-class">
        <button
          type="button"
          class="btn btn-outline-secondary btn1-tag"
        >
          <a href="#" class="minus js-minus-quantity" data-quantity-id = "${product.id}">&#8722;</a>
          <span class="one-span quantity-count-${product.id}">1</span>
          <a href="#" class="js-add-quantity" data-quantity-id = "${product.id}">+</a>
        </button>

        <button
          type="button"
          class="btn btn-outline-secondary btn1-tag js-btn-cart" data-product-id = "${product.id}"
        >
          <span>ADD TO CART</span>
        </button>
      </div>
    </div>
  </div>
    
  `;
  });

  document.querySelector(".js-grid-class3").innerHTML = productsHtml;

  document.querySelectorAll(".js-add-quantity").forEach((link) => {
    link.addEventListener("click", () => {
      console.log(link);
      quantityId = link.dataset.quantityId;
      console.log(quantityId);

      html = document.querySelector(`.quantity-count-${quantityId}`).innerHTML;
      console.log(html);

      value = Number(html);
      value += 1;
      console.log(value);

      document.querySelector(`.quantity-count-${quantityId}`).innerHTML = value;
    });
  });

  document.querySelectorAll(".js-minus-quantity").forEach((link) => {
    link.addEventListener("click", () => {
      console.log(link);
      quantityId = link.dataset.quantityId;

      html = document.querySelector(`.quantity-count-${quantityId}`).innerHTML;
      console.log(html);

      value = Number(html);
      if (value === 1) {
        value = 1;
      } else {
        value -= 1;
      }

      document.querySelector(`.quantity-count-${quantityId}`).innerHTML = value;
    });
  });

  document.querySelectorAll(".js-btn-cart").forEach((button) => {
    button.addEventListener("click", () => {
      let productId = button.dataset.productId;

      let matchingProduct;

      cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingProduct = cartItem;
        }
      });

      value = document.querySelector(`.quantity-count-${productId}`).innerHTML;

      if (matchingProduct) {
        matchingProduct.quantity += value;
      } else {
        cart.push({
          productId: productId,
          quantity: value,
        });
      }

      console.log(cart);
    });
  });
}
