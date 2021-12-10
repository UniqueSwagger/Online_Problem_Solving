const text = "Hello world";
const strReverse = stringReverse(text);
console.log(strReverse);

function stringReverse(text) {
  let reverse = ""; //empty string initialization
  for (const char of text) {
    reverse = char + reverse;
  }
  return reverse;
}
