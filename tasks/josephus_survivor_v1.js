/**
 *  Task:
 *      Josephus Survivor (v1)
 */

const data1 = [7, 3]    // 4
const data2 = [11, 19]  // 10
const data3 = [1, 300]  // 1
const data4 = [14, 2]   // 13
const data5 = [100, 1]  // 100

// First solution
 function josephusSurvivor(n, k) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
      result = (result + k - 1) % i + 1;
    };
     
    return result;
};

// Second solution (recursion)
function josephusSurvivor2(n, k){
    return n < 1 ? 1 : (josephusSurvivor(n - 1, k) + --k) % n + 1;
}

console.log(josephusSurvivor(7, 3));    // 4
console.log(josephusSurvivor(11, 19));  // 10
console.log(josephusSurvivor(1, 300));  // 1
console.log(josephusSurvivor(14, 2));   // 13
console.log(josephusSurvivor(100, 1));  // 100


console.log(josephusSurvivor2(7, 3));    // 4
console.log(josephusSurvivor2(11, 19));  // 10
console.log(josephusSurvivor2(1, 300));  // 1
console.log(josephusSurvivor2(14, 2));   // 13
console.log(josephusSurvivor2(100, 1));  // 100