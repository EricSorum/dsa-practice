var isHappy = function(n) {
  let nString = n.string();
  let sum = 0;
  while (sum !== 1) {
    for (let i = 0; i < nString.length; i++) {
      sum += Math.sqrt(nums[i]);
    }
  }
  return sum;
};