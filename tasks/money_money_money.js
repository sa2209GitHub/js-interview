/**
 *  Task:
 *      Money, Money, Money
 */

params1 = [1000, 0.05, 0.18, 1100];     // 3
params2 = [1000, 0.01625, 0.18, 1200];  // 14
params3 = [1000, 0.05, 0.18, 1000];     // 0

// First solution
const calculateYears = (params) => {
    let [principal, interest, tax, desired] = params;
    let years = 0;

    if (principal === desired) {
        return 0;
    }

    while (principal < desired) {
        let profit = principal * interest;
        principal += profit - (profit * tax);
        // console.log(`Principal: ${principal}. Profit: ${profit}. Year: ${years}`);
        years += 1;
   };

    return years;
};

console.log(calculateYears(params1));
console.log(calculateYears(params2));
console.log(calculateYears(params3));