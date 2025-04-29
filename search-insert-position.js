// https://leetcode.com/problems/search-insert-position/description/

// My attempt:

// Binary search.

//Using Javascript comparisons, how would I write a conditional that asks if a target is either equal to the current item in an array, or is greater than the current item and also less than the next item?

var searchInsert = function(nums, target) {
  let start = 0;
  let end = nums.length-1;
  while (start <= end) {
   let middle = Math.floor((start + end) / 2); // Should I use var to return middle at end?
   if (nums[middle] === target) { // But it needs to include case where target isn't in nums
      return middle;
    } else if (nums[middle] < target) {
      start = middle + 1;
    } else if (nums[middle] > target) {
      end = middle -1;
    }
  }
  return start;
}

nums = [1,3,5,6];
target = 7;
searchInsert(nums, target);

// Code Ninja is just like mine, basically

// Generic binary searches:

// https://www.doabledanny.com/binary-search-javascript
function binarySearch(arr, target) {
  let start = 0
  let end = arr.length - 1
  while (start <= end) {
    let middle = Math.floor((start + end) / 2)
    if (arr[middle] < target) {
      // Search the right half
      start = middle + 1
    } else if (arr[middle] > target) {
      // Search the left half
      end = middle - 1
    } else if (arr[middle] === target) {
      // Found target
      return middle
    }
  }
  // Target not found
  return -1
}

// https://stackabuse.com/binary-search-in-javascript/
function binarySearch(sortedArray, key){
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
      let middle = Math.floor((start + end) / 2);

      if (sortedArray[middle] === key) {
          // found the key
          return middle;
      } else if (sortedArray[middle] < key) {
          // continue searching to the right
          start = middle + 1;
      } else {
          // search searching to the left
          end = middle - 1;
      }
  }
  // key wasn't found
  return -1;
}