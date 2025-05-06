/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let price = Infinity;
    let maximumProfit = 0;

    for(let i = 0 ; i< prices.length ; i++){
        if( prices[i] < price){
            price = prices[i];
        }else{
            if( prices[i] - price > maximumProfit){
                maximumProfit = prices[i] - price;
            }
        }
    }

    return maximumProfit;
};