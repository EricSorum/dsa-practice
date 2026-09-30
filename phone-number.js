/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

  function getString(num) {
    switch (num) {
      case "2": return "abc";
      break;
      case "3": return "def";
      break;
      case "4": return "ghi";
      break;
      case "5": return "jkl";
      break;
      case "6": return "mno";
      break;
      case "7": return "pqr";
      break;
      case "8": return "tuv";
      break;
      case "9": return "wxyz";
      break;
    }
  }

  let res = [];

  // write function that we can then use for each digit - up to 4 digits
  function findCombos(digit) {
    if (digit > digits.length) {
      return;
    }
    
    const letters = getString(digit);
    
    findCombos(digit + 1);
  }


  // This last loop has to be the number of digits, 0-4 in the original function.
  for (let i = 0; i < digits.length; i++) {
    findCombos(digits[i]);
  }

  // const str1 = getString(digits[0]);
  // const str2 = getString(digits[1]);
  // // write function that makes all possibile combinations
  // for (let i = 0; i < str1.length; i++) {
  //   for (let j = 0; j < str2.length; j++) {
  //     res.push(str1[i] + str2[j]);
  //   }
  // }
  return res;
};