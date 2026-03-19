/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyPrice = prices[0]
    let maxProfit = 0

    for(let i=1;i<prices.length;i++){
        if(buyPrice < prices[i]){
            let profit=prices[i]-buyPrice;
            maxProfit = Math.max(maxProfit, profit);
        }else{
            buyPrice = prices[i]
        }

    }
    return maxProfit;

    
};