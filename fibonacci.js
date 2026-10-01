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
  if (n === 1) { 
    return 0
  } else if (n === 2 || n === 3){
    return 1
  }

  let res = 2;
  let thisF = 2;
  let previousF = 1;
  let fibArr = [0,1,1,2];
  // n is the stage in the sequence we want
  // we go up the F sequence until we get to n
  // each time, we add the last two previous numbers
  for (let i = 4; i < n; i++) {
    res = previousF + thisF;
    previousF = thisF;
    thisF = res;
    fibArr.push(res);
  }
  console.log(fibArr);
  return res;
};