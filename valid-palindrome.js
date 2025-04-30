var isPalindrome = function(s) {
  s = s.replaceAll(/\s|\W/g, "").toLowerCase;
  let pointer1 = 0;
  let pointer2 = s.length;
  for (let i = 0; i < s.length; i++) {
    if (s[pointer1] === s[pointer2]) {
      continue
    } else {
      return false;
    }
  }
  return true;
};

// let s = "A man, a plan, a canal: Panama";
// s = s.replaceAll(/\s|\W/g, "");
// s = s.replaceAll(nonAlphanumeric, "");
