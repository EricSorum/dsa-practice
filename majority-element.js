var majorityElement = function(nums) {
  /*
  We filter out each element in the array and compare which results in the shortest array.
  Which is cool but doesn't solve the problem.

  let shortestLength = nums.length;
  for (let i = 0; i < nums.length; i++) {
    const filterNum = nums.filter(nums[i]).length;
    shortestLength = filterNum > shortestLength ? filterNum : shortestLength;
  }
  return shortestLength;
  */
  let majority;
  for (let i = 0; i < nums.length; i++) {
    majority = nums.filter(nums[i]).length < nums.length/2 ? nums[i] : majority;
  }
  return majority;
};