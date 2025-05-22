/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
*/


var reverse = function(x) {
  const s = x.toString();
  let reversed = "";
  for (let i = s.length-1; i >= 0; i--) {
    reversed = reversed.concat(s[i]);
  }
  return reversed;
}

const num = 123;
console.log(reverse(num));

/* Answer from stackoverflow */

function reverse(n) {
  var reverseN = 0;
  var sign = n < 0;
  n = Math.abs(n);
  while (n) {
      reverseN = reverseN*10 + (n % 10);
      n = Math.floor(n/10);
  }
  return reverseN > 0x7FFFFFFF ? 0 : sign ? -reverseN : reverseN;
}

console.log(reverse(-123));
console.log(reverse(1563847412));

/* From Ninja */

var reverse = function(x) {
  let isNegative = false;
  if (x < 0) {
      isNegative = true;
      x = -x;
  }

  let res = 0;
  while (x > 0) {
      let digit = x % 10;
      x = Math.floor(x / 10);
      if (res > Math.floor((2 ** 31 - 1) / 10) || (res === Math.floor((2 ** 31 - 1) / 10) && digit > 7)) {
          return 0;
      }
      res = (res * 10) + digit;
  }

  return isNegative ? -res : res;    
};