function makeArrayConsecutive2(statuses) {
  statuses.sort(function (a, b) {
    return a - b;
  });
  const min = statuses[0];
  const max = statuses[statuses.length - 1];
  let count = 0;
  for (let i = min; i < max; i++) {
    if (statuses.indexOf(i) === -1) {
      count++;
    }
  }
  return count;
}

console.log(makeArrayConsecutive2([1, 2, 3, 6, 9]));
