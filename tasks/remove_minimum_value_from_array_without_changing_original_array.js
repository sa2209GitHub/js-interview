/**
 *  Task:
 *      Remove Minimum Value
 *      from Array without changing
 *      Original Array
 */

const arr1 = [1, 2, 3, 4, 5]    // [2, 3, 4, 5]
const arr2 = [5, 4, 3, 2, 1]    // [5, 4, 3, 2]
const arr3 = [3, 2, 1, 4, 5]    // [3, 2, 4, 5]
const arr4 = []                 // []
const arr5 = [5]                // []

const removeMinimumValue = (arr) => {
    let result = [];

    const minIndex = arr.indexOf(Math.min(...arr))

    if (arr.length <= 1) {
        return [];
    };

    if (minIndex === 0) {
        return arr.slice(1, arr.length)
    };

    if (minIndex === arr.length - 1) {
        return arr.slice(0, -1)
    };

    return arr.slice(0, minIndex).concat(arr.slice(minIndex + 1, arr.length));
};

console.log(removeMinimumValue(arr1))
console.log(removeMinimumValue(arr2))
console.log(removeMinimumValue(arr3))
console.log(removeMinimumValue(arr4))
console.log(removeMinimumValue(arr5))