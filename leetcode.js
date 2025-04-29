// Strategy: Give a problem a try, then learn solution.  Come back to the problem later and try to solve it on your own.

// Two Sum
  
var twoSum = function(nums, target) {
  for (i = 0; i < nums.length; i++) {
      if (nums[i] > target) { continue }
      for (j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              return [i,j];
          }
      }
  }
};
console.log(twoSum([2,0,60,3,5,7,15], 9));
console.log(twoSum([2,0,60,3,5,7,15], 9));


// Actual solution:
var twoSum = function(nums, target) {
  // Create an object to store numbers and their corresponding indices
  let numToIndexMap = {};

  // Loop through the array
  for (let i = 0; i < nums.length; i++) {
      // Calculate the difference between the target and the current number
      let diff = target - nums[i];

      // Check if the difference already exists in the object
      if (numToIndexMap.hasOwnProperty(diff)) {
          // If it exists, return the indices of the current number and the number that adds up to the target
          return [i, numToIndexMap[diff]];
      }

      // If it doesn't exist, add the current number and its index to the object
      numToIndexMap[nums[i]] = i;
  }

  // If no two numbers add up to the target, return null
  return null;
};

// Merge Two Linked Lists

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

