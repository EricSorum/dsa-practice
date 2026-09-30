/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let start = 0;
      middle = 1;
      end = nums.length - 1;
      triplets = [];
    // three pointers?
    while (start <= end && middle <= end) {
      if (nums[start] + nums[middle] + nums[end] === 0) {
        triplets.push([nums[start], nums[middle], nums[end]])
      } else if (1===1) {

      }
    }
};