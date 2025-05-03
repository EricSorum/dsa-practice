var isIsomorphic = function(s, t) {
  // let bool = false;
  // add both letters together as an element in array
  let newArr = [];
  for (let i = 0; i < s.length; i++) {
    const twoLetters = `${s[i]} ${t[i]}`;
    newArr.push(twoLetters);
  }
    // check if each array has as many unique elements as original string
  // let uniqueChars = s.filter()
  // for (let i = 0; i < newArr.length; i++) {
  //   if (newArr.lastIndexOf(newArr[i]) !== newArr.indexOf(newArr[i])) {
  //     return false;
  //   }
  // }
  // return true;
};