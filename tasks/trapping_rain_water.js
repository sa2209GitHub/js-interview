/**
 *  Task:
 *      Trapping Rain Water
 */

const heightMap1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];    // 6
const heightMap2 = [4, 2, 0, 3, 2, 5];  // 9

const trap = (heights) => {
    let volume = 0;

    let start = 1;
    let end = heights.length - 2;

    let maxFromStart = heights[0];
    let maxFromEnd = heights[heights.length - 1];

    while (start <= end) {
        if (maxFromStart <= maxFromEnd) {
            maxFromStart = Math.max(maxFromStart, heights[start]);
            volume += maxFromStart - heights[start];
            start += 1;
        } else {
            maxFromEnd = Math.max(maxFromEnd, heights[end]);
            volume += maxFromEnd - heights[end];
            end -= 1;
        };
    };

    return volume;
};

console.log(trap(heightMap1));
console.log(trap(heightMap2));