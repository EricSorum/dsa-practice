/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

https://medium.com/codex/the-two-pointer-technique-8c44b0b3890
*/

var maxArea = function(height) {
  let max = 0;  
  let start = 0;
  let end = height.length;

  while (start < height.length) {
    const volume = height[start] * (end-start);
    if (volume > max) {
      max = volume;
      start++;
    } else {
      end--;
    }
  }
  return max;
};

const height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));