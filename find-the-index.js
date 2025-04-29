// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

// My attempt:

var strStr = function(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, i+needle.length) === needle) {
      return i;
    }
  }
  return -1;
}

const haystack = "sabutsa";
const needle = "sad";

console.log(strStr(haystack, needle));

// ChatGPT says to first check if needle is longer than haystack
// And to stop iterating if there are fewer characters left in haystack thn needle is long.

var strStr = function(haystack, needle) {
  if (needle.length > haystack.length) return -1; // Edge case
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1; // Not found
}

// Code Ninja uses substring instead of slice

var strStr = function(haystack, needle) {
  if (haystack.length < needle.length) {
      return -1;
  }
  
  for (let i = 0; i <= haystack.length - needle.length; i++) {
      if (haystack.substring(i, i + needle.length) === needle) {
          return i;
      }
  }
  
  return -1;    
};