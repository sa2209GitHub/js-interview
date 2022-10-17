/**
 *  Task:
 *      Container
 *      with most Water
 */

const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];   // 49
const heights2 = [1, 1];                        // 1
const heights3 = [4, 3, 2, 1, 4];               // 16
const heights4 = [1, 2, 1];                     // 2
const heights5 = [0, 0, 999];                   // 0

function maxVolume(heights) {
    let maxVolume = 0;

    let start = 0;
    let end = heights.length - 1;

    while (start < end) {
        let currentVolume = (Math.min(heights[start], heights[end])) * (end - start);
        
        if (currentVolume > maxVolume)
            maxVolume = currentVolume;

        heights[start] < heights[end] ? start ++ : end --
    };

    return maxVolume;
};

console.log(maxVolume(heights1));
console.log(maxVolume(heights2));
console.log(maxVolume(heights3));
console.log(maxVolume(heights4));
