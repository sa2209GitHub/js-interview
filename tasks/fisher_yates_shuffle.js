/**
 *  Task:
 *      Fisher-Yates Shuffle
 */

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const arr2 = [0, 1, 2, 3, 4, 5];

const shuffleArrayBackward = (arr) => {
    for (let i =  arr.length - 1; i > -1; i--) {
        let tmp = arr[i];
        let rnd = Math.floor(Math.random() * (i));

        arr[i] = arr[rnd];
        arr[rnd] = tmp;     
    };

    return arr;
};

const shuffleArrayForward = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let tmp = arr[i];
        let rnd = Math.floor(Math.random() * (i + 1));

        arr[i] = arr[rnd];
        arr[rnd] = tmp;
    };

    return arr;
};

for (let i = 0; i < 10; i++) {
    console.log(shuffleArrayBackward(array).join(','));
};

for (let i = 0; i < 10; i++) {
    console.log(shuffleArrayForward(arr2).join(','));
};