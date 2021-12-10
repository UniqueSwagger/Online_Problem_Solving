const result = performOperation(4, 4.0, "is the best");

function performOperation(secondInteger, secondDecimal, secondString) {
  // Declare a variable named 'firstInteger' and initialize with integer value 4.
  const firstInteger = 4;
  const sumOfIntegers = firstInteger + parseInt(secondInteger);
  // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
  const firstDecimal = 4.0;
  const sumOfDecimals = firstDecimal + parseFloat(secondDecimal);
  // Declare a variable named 'firstString' and initialize with the string "HackerRank".
  const firstString = "HackerRank ";
  const stringConcatenate = firstString + secondString;
  // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
  console.log(sumOfIntegers);
  // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
  console.log(sumOfDecimals);
  // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
  console.log(stringConcatenate);
}
