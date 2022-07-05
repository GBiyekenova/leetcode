var maxProfit = function (prices) {
  let min = prices[0];
  let max = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];

    if (price < min) {
      min = price;
      /**
       * We need to start counting the max after the minmum, otherwise we will
       * be still tracking the max value prior to the minimum.
       */
      max = price;
    } else if (price > max) {
      max = price;
    }

    if (max - min > profit) {
      profit = max - min;
    }
  }

  return profit;
};
