/* const numberOfTime = 10;
const result = fibonacci(numberOfTime);
console.log(result);

function fibonacci(numbers) {
  let fibo = [0, 1];
  for (let i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
} */

// fibonacci using recursion nth element

/* const n = 6;
const result = fibonacci(n);
console.log(result);

function fibonacci(n) {
  //base case
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
} */

//fibonacci series using recursion

function fibo(n) {
  if (n == 0) {
    return [0];
  } else if (n == 1) {
    return [0, 1];
  } else {
    fibonacci = fibo(n - 1);
    fibonacci[n] = fibonacci[n - 1] + fibonacci[n - 2];
    return fibonacci;
  }
}
const result = fibo(6);
console.log(result);
