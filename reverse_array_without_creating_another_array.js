/**
 *      Task
 *  Reverse array
 *  without creating
 *  another array
 */

const array = [0, 1, 2, 3, 4, 5 ];

const reverseArray = (array) => {

    let length = array.length - 1;

    for (let i = 0; i < length / 2; i++) {
        let temp = array[i];
        array[i] = array[length - i];
        array[length - i] = temp;
    }
    return array;
};

console.log(reverseArray(array));