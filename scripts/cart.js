export let cart = [
  {
    productId:
      "5a5f343bc0687baa8b1881d76d840824d3b21522_6e70b31f-7102-4784-a102-af9cac14a2b4",
    quantity: 1,
  },
  {
    productId:
      "7a17753130df58ac3e2f0387e671802017400716_2fe31439-59e3-4ff2-9c94-440d235d629e",
    quantity: 1,
  },
];

export function removeFromCart(productId) {
  cart = cart.filter((item) => item.productId !== productId);
}
