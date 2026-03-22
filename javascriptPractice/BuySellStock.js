// You are given an array prices where prices[i] is the price of a given stock on the ith day.
//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

//Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// output = 5;

// output = 0;

// prices = [7, 6, 4, 3, 1];
prices = [7, 1, 5, 3, 6, 4];
function BuySellStock(prices) {
  let maximumProfit = 0;
  let buyPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (buyPrice < prices[i]) {
      profit = prices[i] - buyPrice;
      maximumProfit = Math.max(maximumProfit, profit);
    } else {
      buyPrice = prices[i];
    }
  }
  return maximumProfit;
}
console.log(BuySellStock(prices));
