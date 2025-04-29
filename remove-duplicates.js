// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

// My attempt:

var removeDuplicates = function(nums) {
 let k = 0;
  for (i = 1; i < nums.length; i++) {
   if (nums[i] !== nums[i-1]) {
      k++;
    }
  }
  return k;
};

const arr = [0,0,1,1,1,2,2,3,3,4];

console.log(removeDuplicates(arr));

// Solution below.  I needed to modify nums, not just return k.

function removeDuplicates(nums) {
  let k = 1; // Initialize the count of unique elements to 1
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[k - 1]) {
          nums[k] = nums[i]; // Overwrite the next unique element
          k++;
      }
  }

  return k;
}