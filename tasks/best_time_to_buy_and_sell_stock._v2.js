/**
 *  Task:
 *      Best Time
 *      to BUY and SELL Stock (v2)
 */

 const prices1 = [7, 1, 5, 3, 6, 4];    // 5
 const prices2 = [7, 6, 4, 3, 1];       // 0

 const maxProfit = (prices) => {
    let maxProfit = 0;
    let minPrice = prices[0];

    for (let i = 0; i < prices.length; i++) {
        const currentPrice = prices[i];

        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        };

        if (currentPrice - minPrice > maxProfit) {
            maxProfit = currentPrice - minPrice;
        };
    };
    return maxProfit;
 };

 console.log(prices1, maxProfit(prices1));
 console.log(prices2, maxProfit(prices2));