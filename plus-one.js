/*
https://leetcode.com/problems/plus-one/description/
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
*/

var plusOne = function(digits) {

  // should probably just convert it to number
  let int = digits.toString().filter(",");
  let int2 = Number(int);

  return int.split("");

  // conditional if last digit is 9? or always do it this way anyway?
  if (digits[digits.length] == 9) {

  } else {
    digits[digits.length]++;
    return digits;
  }
};