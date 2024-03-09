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
          <a href="#" class="minus js-minus-quantity" data-product-id = "${product.id}">&#8722;</a>
          <span class="one-span quantity-count-${product.id}">1</span>
          <a href="#" class="js-add-quantity" data-product-id = "${product.id}">+</a>
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
    link.addEventListener("click", (event) => {
      event.preventDefault();

      let productId = link.dataset.productId;
      console.log(productId);

      let element = document.querySelector(`.quantity-count-${productId}`);
      console.log(element);
      if (element) {
        html = element.innerHTML;
      } else {
        console.log(
          `Element with class 'quantity-count-${productId}' not found`
        );
      }

      value = parseInt(html);

      value += 1;

      document.querySelector(`.quantity-count-${productId}`).innerHTML = value;
    });
  });

  document.querySelectorAll(".js-minus-quantity").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.target.matches(".js-minus-quantity")) {
        event.preventDefault();

        let link = event.target;
        let productId = link.dataset.productId;

        html = document.querySelector(`.quantity-count-${productId}`).innerHTML;
        console.log(html);

        value = parseInt(html);
        console.log(value);
        if (value > 1) {
          value -= 1;

          console.log(value);

          document.querySelector(`.quantity-count-${productId}`).innerHTML =
            value;
        }
      }
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

      value = parseInt(value);

      if (matchingProduct) {
        matchingProduct.quantity += value;
      } else {
        cart.push({
          productId: productId,
          quantity: value,
        });
      }

      let cartQuantity = 0;

      cart.forEach((item) => {
        cartQuantity += parseInt(item.quantity);
      });

      console.log(cartQuantity);

      document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;

      console.log(cart);
    });
  });

  renderCart();
}
