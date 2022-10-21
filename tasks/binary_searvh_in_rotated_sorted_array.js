/**
 *  Task:
 *      Binary Search in
 *      Rotated Sorted Array
 */

const arr1 = [6, 7, 8, 9, 1, 2, 3, 4, 5 ];
const arr2 = [71, 72, 74, 80, 92, 94, 95, 96, 55, 62, 63, 65, 67, 70];

const binarySearchInRotatedSortedArray = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        };

        if (arr[left] <= arr[mid]) {
            if (arr[left] < target && target <= arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            };
        } else {
            if (arr[mid] <= target && target <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            };
        };
    };

    return -1;
};

console.log(arr1, binarySearchInRotatedSortedArray(arr1, 5));
console.log(arr2, binarySearchInRotatedSortedArray(arr2, 92));
    
console.log(arr1, binarySearchInRotatedSortedArray(arr1, 53));
console.log(arr2, binarySearchInRotatedSortedArray(arr2, 2));