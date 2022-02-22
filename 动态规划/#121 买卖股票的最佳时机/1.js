var maxProfit = function (prices) {
  let min = Number.MAX_VALUE;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    let price = prices[i];
    if (price > min) {
      profit = Math.max(price - min, profit);
    }
    min = Math.min(min, price);
  }
  return profit;
};
