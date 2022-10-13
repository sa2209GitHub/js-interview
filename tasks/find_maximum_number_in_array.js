/**
 *  Task:
 *      Find Maximum
 *      Number in Array
 */

const array = [-1, 0, -8, 22, 8, 3, 14, 23];

// First way
console.log(Math.max.apply(null, array));
console.log(Math.max(...array));

// Second way
const findMax = array => {
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max)
            max = array[i];
        // OR:
        // max = array[i] > max ? array[i] : max;
    };

    return max;
};

console.log(findMax(array));