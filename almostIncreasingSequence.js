function almostIncreasingSequence(sequence) {
  let count = 0;
  for (let i = 1; i < sequence.length; i++) {
    const element = sequence[i];
    const previousElement = sequence[i - 1];
    if (element > previousElement) {
      count == 0;
    } else {
      count++;
      if (
        sequence[i] <= sequence[i - 2] &&
        sequence[i + 1] <= sequence[i - 1]
      ) {
        return false;
      }
    }
  }
  return count <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 4]));

//sum of two digits
function addTwoDigits(n) {
  return parseInt(n / 10) + parseInt(n % 10);
}

console.log(addTwoDigits(39));

function largestNumber(n) {
  return 10 ** n - 1;
}

console.log(largestNumber(3));

function reverseArray(a) {
  // Write your code here
  return a.reverse();
}
console.log(reverseArray([1, 2, 3, 4]));

function reverseString(s) {
  try {
    console.log(s.split("").reverse().join(""));
  } catch (error) {
    console.log(error.message);
    console.log(s);
  }
}
reverseString("1234");
