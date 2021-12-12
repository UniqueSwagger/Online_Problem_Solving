function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match ALL occurrences of numbers in a string.
   */
  const re = /\d+/g;

  /*
   * Do not remove the return statement
   */
  return re;
}
// const re = regexVar();
// const s = "1 2 3";
// const r = s.match(re);
// for (const e of r) {
//   console.log(e);
// }
