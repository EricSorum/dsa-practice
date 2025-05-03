var hammingWeight = function(n) {
  let binary = n.toString(2);
  return binary.replaceAll  ("0", "").length;  
};