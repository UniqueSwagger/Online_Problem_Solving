function factorial(n) {
  n = parseInt(n);
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

const isFactorial = factorial(5);
console.log(isFactorial);
