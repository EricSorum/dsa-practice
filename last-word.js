var lengthOfLastWord = function(s) {
    for (let i = s.length; i > 0; i--) {
      if (s[i] === " ") {
        return s.length - i;
      }
    }
};