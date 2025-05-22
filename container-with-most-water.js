/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two rightpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

https://medium.com/codex/the-two-pointer-technique-8c44b0b3890
*/

var maxArea = function(height) {
  let max = 0;  
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    // Find which number is smaller - that will be the height of the volume.
    const volumeHeight = height[left] < height[right] ? right : left;
    // Multiply the height by the width of the volume, which is the number of spaces between right and left.
    const volume = volumeHeight * (right-left);


    if (volume > max) {
      max = volume;
    }
    // Determine which pointer to move
    if (right == left) {
      left++;
      right--;
    } else if (volumeHeight == right) {
      left--;
    } else {
      right++;
    }
    // I need to loop through every possibility once though, right?

    // } else {
    //   right--;
    // }
    // right = height.length;
    // left++;
  }
  return max;
};

const height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));