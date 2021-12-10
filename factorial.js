function factorial(number) {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact = fact * i;
  }
  return fact;
}

const result = factorial(4);
console.log(result);

// factorial using recursion

function fact(n) {
  // base case
  if (n == 1) {
    return 1;
  } else return n * fact(n - 1);
}

const result = fact(4);
console.log(result);
