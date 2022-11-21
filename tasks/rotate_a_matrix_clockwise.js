/**
 *  Task:
 *      Rotate a Matrix Clockwise
 */

matrix1 = [
    [1, 2, 3],              // [7, 4, 1],
    [4, 5, 6],              // [8, 5, 2],
    [7, 8, 9]               // [9, 6, 3]
];

matrix2 = [
    [ 1,  2,  3,  4,  5],   // [21, 16, 11,  6, 1],
    [ 6,  7,  8,  9, 10],   // [22, 17, 12,  7, 2],
    [11, 12, 13, 14, 15],   // [23, 18, 13,  8, 3],
    [16, 17, 18, 19, 20],   // [24, 19, 14,  9, 4],
    [21, 22, 23, 24, 25]    // [25, 20, 15, 10, 5]
];

matrix3 = [
    [1, 2],                 // [3, 1],
    [3, 4]                  // [4, 2]
];

// First solution (with copy)
const rotateMatrixClockwise = matrix => {
    const result = [];

    for (let i = 0; i < matrix.length; i++) {
        result.push([]);
        for (let j = 0; j < matrix[i].length; j++) {
            result[i].unshift(matrix[j][i]);
        };
    };

    return result;
};

// Second solution (mutate original array)
const rotateMatrixClockwiseSecond = matrix => {
    const L = matrix[0].length - 1;

    for (let i = 0; i < L / 2; i++) {
        for (j = i; j < L - i; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[L - j][i];
            matrix[L - j][i] = matrix[L - i][L - j];
            matrix[L - i][L - j] = matrix[j][L - i];
            matrix[j][L - i] = temp;
        };
    };

    return matrix;
};

// Third solution
const rotateMatrixClockwiseThird = matrix => {
    return matrix.map((row, i) =>
        row.map((val, j) => matrix[matrix.length - 1 - j][i])
    );
};

// Fourth solution
const rotateMatrixClockwiseFourth = matrix => {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        };
    };

    for (let k = 0; k < matrix.length; k++) {
        matrix[k].reverse();
    };

    return matrix;
};

// Fifth solution
const rotateMatrixClockwiseFifth = matrix => {
    const result = [];

    for (let i = 0; i < matrix.length; i++) {
        result.push([])
        for (let j = 0; j < matrix[i].length; j++) {
            result[i].push(matrix[matrix.length - 1 - j][i]);
        };
    };

    return result;
};

// console.table(rotateMatrixClockwise(matrix1));
// console.table(rotateMatrixClockwise(matrix2));
// console.table(rotateMatrixClockwise(matrix3));

console.table(rotateMatrixClockwiseSecond(matrix1));
console.table(rotateMatrixClockwiseSecond(matrix2));
console.table(rotateMatrixClockwiseSecond(matrix3));

// console.table(rotateMatrixClockwiseThird(matrix1));
// console.table(rotateMatrixClockwiseThird(matrix2));
// console.table(rotateMatrixClockwiseThird(matrix3));

// console.table(rotateMatrixClockwiseFourth(matrix1));
// console.table(rotateMatrixClockwiseFourth(matrix2));
// console.table(rotateMatrixClockwiseFourth(matrix3));

// console.table(rotateMatrixClockwiseFifth(matrix1));
// console.table(rotateMatrixClockwiseFifth(matrix2));
// console.table(rotateMatrixClockwiseFifth(matrix3));