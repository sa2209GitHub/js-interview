/**
 *  Task:
 *      Merge overlapping Intervals
 *      in a non-empty Array
 */

const intervals1 = [ [9, 16], [1, 3], [6, 10], [5, 7] ];
const intervals2 = [ [22, 25], [10, 12], [16, 20], [13, 16], [9, 18] ];
const intervals3 = [ [2, 3], [1, 4], [6, 8], [5, 7], [11, 12], [8, 10] ];
const intervals4 = [ [1, 3], [2, 6], [8, 10], [15, 18] ];
const intervals5 = [ [1, 4], [4, 5] ];
const intervals6 = [ [11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8] ];

function mergeOverlappingIntervals(intervals) {
    if (intervals.length === 1) {
        return intervals;
    };

    intervals.sort((a, b) => a[0] - b[0]);

    const result = [intervals.shift()];

    for (let interval of intervals) {
        let recent = result[result.length -1];

        if (recent[1] >= interval[0]) {
            recent[1] = Math.max(recent[1], interval[1]);
        } else {
            result.push(interval);
        };
    };
    return result;  
};

console.log(mergeOverlappingIntervals(intervals1));
console.log(mergeOverlappingIntervals(intervals2));
console.log(mergeOverlappingIntervals(intervals3));
console.log(mergeOverlappingIntervals(intervals4));
console.log(mergeOverlappingIntervals(intervals5));
console.log(mergeOverlappingIntervals(intervals6));