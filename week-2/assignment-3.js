// // using for loop
// function calculate(data) {
//   let totalPrice = 0;
//   for (let i of data.products) {
//     totalPrice += i.price;
//   }
//   return totalPrice * (1-data.discount);
// }


// // using forEach()
// function calculate(data) {
//   let totalPrice = 0;
//   data.products.forEach( i => {
//     totalPrice += i.price;
//   })
//   return totalPrice * (1-data.discount);
// }


// using reduce()
// 先用.map()把各product的price抓出來，再用.reduce()加總
// function calculate(data) {
//   let totalPrice = data.products.map(i => i.price)
//                                 .reduce((a, b) => a + b);
//   return totalPrice * (1-data.discount);
// }

// using reduce() (without .map())
function calculate(data) {
  let totalPrice = data.products.reduce((totalPrice, product) => {
    totalPrice += product.price;
    return totalPrice;
  }, 0);
  return totalPrice * (1-data.discount);
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


