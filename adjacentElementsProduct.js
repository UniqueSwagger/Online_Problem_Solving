/* For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product. */

function adjacentElementsProduct(inputArray) {
  let largest = inputArray[0] * inputArray[1];
  for (let i = 0; i < inputArray.length; i++) {
    let firstElement = inputArray[i];
    let secondElement = inputArray[i + 1];
    if (firstElement * secondElement > largest) {
      largest = firstElement * secondElement;
    }
  }
  return largest;
}

console.log(adjacentElementsProduct([1, 2, 3, 0]));
