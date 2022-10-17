/**
 *  Task:
 *      Best Time
 *      to BUY and SELL Stock
 */

const prices1 = [7, 1, 5, 3, 6, 4];
const prices2 = [7, 6, 4, 3, 1];

const maxProfit = (prices) => {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];
        const previousPrice = prices[i - 1];

        if (currentPrice > previousPrice) {
            profit += currentPrice - previousPrice;
        }
    }

    return profit;
};

console.log(maxProfit(prices1));
console.log(maxProfit(prices2));