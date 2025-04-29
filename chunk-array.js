/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i+size) {
    if (size > i-arr.length) {
      newArr.push(arr.slice(i, size));
    }
  }
};
