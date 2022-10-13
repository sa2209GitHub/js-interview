/**
 *  Task:
 *      Reverse Array
 *      without creating
 *      another array
 */

const array = [0, 1, 2, 3, 4, 5 ];
const arr2 = ['C', 'X', 'W', 'O', 'Z'];

// First solution
const reverseArray = (array) => {

    const length = array.length - 1;

    let temp;

    for (let i = 0; i < length / 2; i++) {
        temp = array[i];
        array[i] = array[length - i];
        array[length - i] = temp;
    }
    return array;
};

console.log(reverseArray(array));
console.log(reverseArray(arr2));