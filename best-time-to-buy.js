var maxProfit = function(prices) {
  let bestProfit = 0;
  function checkForProfit(i) {
    for (let j = i; j < prices.length; j++) {
      bestProfit = prices[j] > prices [i] ? prices[j] - prices[i] : bestProfit;
    }
  }
  for (let i = 0; i < prices.length; i++) {
    checkForProfit(i);

  }
  return bestProfit;
};