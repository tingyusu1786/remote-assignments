function max(numbers) {
  let maxNumArray = numbers;
  while (maxNumArray.length > 1) {
    if (maxNumArray[0] > maxNumArray[1]) {
      maxNumArray.splice(1, 1);
    } else if (maxNumArray[0] < maxNumArray[1]) {
      maxNumArray.splice(0, 1);
    }
  }
  return maxNumArray[0]
}
console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7