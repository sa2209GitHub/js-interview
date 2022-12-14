/**
 *  Task:
 *      Josephus Survivor (v2)
 */

const data1 = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1]];               // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const data2 = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2]];               // [2, 4, 6, 8, 10, 3, 7, 1, 9, 5]
const data3 = [['C', 'o', 'd', 'e', 'W', 'a', 'r', 's'], [4]];      // ['e', 's', 'W', 'o', 'C', 'd', 'r', 'a']
const data4 = [[1, 2, 3, 4, 5, 6, 7], [3]];                         // [3, 6, 2, 7, 5, 1, 4]
const data5 = [[], [3]]                                             // []

//  First solution
function josephus(items, k) {
    const result = [];
    let current = 0;

    while (items.length > 0) {
        current = (current + k - 1) % items.length
        result.push(...items.splice(current, 1))
    };

    return result;
};

// Solution with recursion (not ready yet)
// function josephusRecursive(items, k) {
//     const result = [];
//     const current = (current + k - 1) % items.length
//     result.push(...items.splice(current, 1))

//     return items.length > 0 ? josephusRecursive(items, k) : result;
// };

console.log(josephus(data1[0], ...data1[1]))
console.log(josephus(data2[0], ...data2[1]))
console.log(josephus(data3[0], ...data3[1]))
console.log(josephus(data4[0], ...data4[1]))
console.log(josephus(data5[0], ...data5[1]))

// console.log(josephusRecursive(data1[0], ...data1[1]))
// console.log(josephusRecursive(data2[0], ...data2[1]))
// console.log(josephusRecursive(data3[0], ...data3[1]))
// console.log(josephusRecursive(data4[0], ...data4[1]))
// console.log(josephusRecursive(data5[0], ...data5[1]))