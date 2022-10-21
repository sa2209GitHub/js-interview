/**
 *  Task:
 *      Peak Index
 *      in Mountain Array
 */

const arr1 = [1, 2, 3, 4, 5, 4, 3, 2];
const arr2 = [1, 2, 3, 4, 5, 7, 12, 7, 6, 5, 4, 3, 2, 1];
const arr3 = [1, 2, 3, 4, 3, 1];
const arr4 = [1, 2, 4, 12, 20, 10, 8, 2, 1];
const arr5 = [1, 3, 6, 9, 10];
const arr6 = [9, 7, 6, 3, 2, 1];
const arr7 = [1, 2, 3, 4, 3, 2, 1];
const arr8 = [11, 13, 14, 15, 6, 4, 2];
const arr9 = [10, 9, 8, 7, 6];

const peakIndexInMountainArray = (array) => {
    let start = 0;
    let end = array.length - 1;

    while (start < end) {
        let mid = Math.floor((start + end) / 2);

        if (array[mid] < array[mid + 1]) {
            start = mid + 1;
        } else {
            end = mid;
        };
    };

    return start;
};

console.log(arr1, peakIndexInMountainArray(arr1));
console.log(arr2, peakIndexInMountainArray(arr2));
console.log(arr3, peakIndexInMountainArray(arr3));
console.log(arr4, peakIndexInMountainArray(arr4));
console.log(arr5, peakIndexInMountainArray(arr5));
console.log(arr6, peakIndexInMountainArray(arr6));
console.log(arr7, peakIndexInMountainArray(arr7));
console.log(arr8, peakIndexInMountainArray(arr8));
console.log(arr9, peakIndexInMountainArray(arr9));
