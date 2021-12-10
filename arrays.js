//my shortcut style

/* function getSecondLargest(nums) {
  // Complete the function
  let perfectArray = [];
  for (const element of nums) {
    if (perfectArray.indexOf(element) == -1) {
      perfectArray.push(element);
    }
  }
  let max = Math.max(...perfectArray);
  perfectArray.splice(nums.indexOf(max), 1);
  let secondMax = Math.max(...perfectArray);
  perfectArray.splice(nums.indexOf(max), 1);
  return secondMax;
}

let numbers = [2, 3, 6, 6, 5];
const result = getSecondLargest(numbers);
console.log(result); */

//hacker rank style

function getSecondLargest(nums) {
  // Complete the function
  let first = nums[0];
  let second;
  for (const element of nums) {
    if (element > first) {
      second = first; //3
      first = element; //6
    } else if (element < first && element > second) {
      second = element; //5
    }
  }
  return second;
}

let numbers = [2, 3, 6, 6, 5];
const result = getSecondLargest(numbers);
console.log(result);
