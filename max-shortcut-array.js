function secondMax() {
  let arr = [20, 120, 150, 111, 215, 54, 78]; // use int arrays
  let max = Math.max(...arr); // get the max of the array
  arr.splice(arr.indexOf(max), 1); // remove max from the array
  let secondMax = Math.max(...arr); // get the 2nd max
  //   return secondMax;
  return secondMax;
}

console.log(secondMax());
