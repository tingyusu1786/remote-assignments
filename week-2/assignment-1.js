// // using for loop
// function max1(numbers) {
//   let maxNum = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > maxNum) {
//       maxNum = numbers[i];
//     }
//   }
//   return maxNum;
// }

// console.log(max1([1, 2, 4, 5])); // expected output: 5
// console.log(max1([5, 2, 7, 1, 6])); // expected output: 7


// // using forEach()
// function max2(numbers) {
//   let maxNum = numbers[0];
//   numbers.forEach( i => {
//     if (i > maxNum) {
//       maxNum = i;
//     }
//   });
//   return maxNum;
// }

// console.log(max2([1, 2, 4, 5])); // expected output: 5
// console.log(max2([5, 2, 7, 1, 6])); // expected output: 7


// using reduce()
function max3(numbers) {
  let maxNum = numbers.reduce((a, b) => a > b ? a : b)
  return maxNum;
}

console.log(max3([1, 2, 4, 5])); // expected output: 5
console.log(max3([5, 2, 7, 1, 6])); // expected output: 7
