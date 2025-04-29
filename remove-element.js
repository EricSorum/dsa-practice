// https://leetcode.com/problems/remove-element/description/

// My attempt:

var removeElement = function(nums, val) {
  let k = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      console.log(nums)
      i--;
    } else {
      k++;
    }
  }
  return k;
}

const nums2 = [0,1,2,2,3,0,4,2];
const val2 = 2;
console.log(removeElement(nums2, val2))

// Code Ninja's solution.  I don't need to remove unwanted elements, just put them at the front of
// the array.

var removeElement = function(nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
          nums[k] = nums[i];
          k++;
      }
  }
  console.log(nums);
  return k;    
};

const arr1 = [3,3,2,2,3,3];
const val1 = 3;

console.log(removeElement(arr1, val1))