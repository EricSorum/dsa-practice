/*
https://leetcode.com/problems/plus-one/description/
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
*/

var plusOne = function(digits) {
  int = Number(digits.join().replaceAll(",", ""));
  int++
  // console.log(int.toString());
  console.log(Array.from(int.toString()));
  return Array.from(int.toString());
};

let i = ["1", "5", "9"];
console.log("Answer: " + plusOne(i));