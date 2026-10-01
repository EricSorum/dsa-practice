/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

*/

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if (n < 2) { return n }
  let res = 1;
  let thisF = 1;
  let previousF = 1;
  for (let i = 2; i < n; i++) {
    res = previousF + thisF;
    previousF = thisF;
    thisF = res;
  }
  return res;
};


/* Solution from Leetcode contributor:

var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
};

My first two edge cases were handled in one line.
But his variable assignments were handled more tersely.

ChatGPT:

var fib = function(n) {
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        [a, b] = [b, a + b];
    }

    return a;
};

Much cleaner than either of us.

*/