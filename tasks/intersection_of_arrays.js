/**
 *  Task:
 *      Intersection of Arrays
 */

const arrA1 = [1, 2, 2, 1];
const arrA2 = [2, 2];
// Output: [2, 2]

const arrB1 = [4, 9, 5];
const arrB2 = [9, 4, 9, 8, 4];
// Output: [4, 9] or [9, 4]

const isIntersect = (arr1, arr2) => {
    const result = [];

    const map = arr1.reduce((acc, el) => {
        acc[el] = acc[el] ? acc[el] + 1 : 1;
        return acc;
    }, {});

    for (let i = 0; i < arr2.length; i++) {
        const current = arr2[i];
        let count = map[current];
        map[current] -= 1;

        if (count && count > 0) {
            result.push(current);
            map[current] -= 1;
        };
    };

    return result;
};

console.log(isIntersect(arrA1, arrA2));
console.log(isIntersect(arrB1, arrB2));