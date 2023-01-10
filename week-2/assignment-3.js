function calculate(data) {
// your code here
  let totalPrice = 0;
  for (let i of data.products) {
    totalPrice += i.price;
  }
  return totalPrice * data.discount;
}

const discountedPrice = calculate({
  discount: 0.1,
  products: [
    {
      name: "Product 1",
      price: 100
    },
    {
      name: "Product 2",
      price: 700
    },
    {
      name: "Product 3",
      price: 250
    }
  ]
});
console.log(discountedPrice) // show the total price of all products after applying a discount