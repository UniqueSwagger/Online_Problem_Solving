function checkPalindrome(inputString) {
  let newStr = "";
  for (const letter of inputString) {
    newStr = letter + newStr;
  }
  return inputString == newStr;
}
console.log(checkPalindrome("hello"));
