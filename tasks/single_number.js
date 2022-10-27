/**
 *  Task:
 *      Single Number
 */

const arr1 = [4, 1, 2, 1, 2];                   // 4
const arr2 = [1, 2, 1, 2, 1, 5, 1, 2, 1, 2]     // 5
const arr3 = [1, 1, 1, 1, 1, 1, 2, 2]           // -1

// First solution
const getFirstUniqueNumber = numbers => {
    let uniqueNumber = -1

    for (number of numbers) {
        if (numbers.indexOf(number) === numbers.lastIndexOf(number)) {
            return number;
        };
    };

    return uniqueNumber;
};

// Second solution (wrong)
const getFirstUniqueNumber2 = numbers => {
    const uniq = new Set();
    let uniqSum = 0;
    let numSum = 0;

    for (let i = 0; i < numbers.length; i++) {
        const current = numbers[i];

        if (!uniq.has(current)) {
            uniq.add(current);
            uniqSum += current;
        };

        console.log(uniqSum, numSum)
        numSum += current;
    };
    return uniqSum * 2 - numSum;
};

// Third solution (wrong)
function getFirstUniqueNumber3(numbers) {
    const res = numbers.reduce((res, elem) => res ^ elem, 0);

    return res;
};

console.log(getFirstUniqueNumber(arr1));
console.log(getFirstUniqueNumber(arr2));
console.log(getFirstUniqueNumber(arr3));

// console.log(getFirstUniqueNumber2(arr1));
// console.log(getFirstUniqueNumber2(arr2));
// console.log(getFirstUniqueNumber2(arr3));


// console.log(getFirstUniqueNumber3(arr1));
// console.log(getFirstUniqueNumber3(arr2));
// console.log(getFirstUniqueNumber3(arr3));