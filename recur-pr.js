function recur(n) {
  // base case
  if (n == 0) {
    return 1;
  }
  return 7 + recur(n - 2); //1+2,1+1
}

const result = recur(4);
console.log(result);
