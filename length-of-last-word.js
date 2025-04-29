// https://leetcode.com/problems/length-of-last-word/description/

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// My attempt:

var lengthOfLastWord = function(s) {
    if (!s.includes(" ")) {
      return s.length
    }
    // Remove all spaces from the end.
    if (s[s.length] === " ") {
      for (let i = s.length; i > 0; i--) {
        s.splice(i, "");
      }
    }

    // find the index of the last space
    for (let i = s.length; i > 0; i--) {
      if (s[i] === " ") {
        return s.length - i;
      }
    }
};