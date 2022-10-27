/**
 *  Task:
 *      Set Matrix Zeros
 */

const matrix1 = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
];

const matrix2 = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
];

const matrix3 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const matrix4 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1],
];

const matrix5 = [
    [0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
];

const matrix6 = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
];

// First solution
const setMatrixZeros = matrix => {
    const writeZeros = (row, col) => {
        matrix[row][col] = 0;

        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][col] !== '*') {
                matrix[i][col] = 0;
            };
        };

        for (let i = 0; i < matrix[row].length; i++) {
            if (matrix[row][i] !== '*') {
                matrix[row][i] = 0;
            };
        };
    };

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) matrix[i][j] = '*';
        };
    };

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === '*') writeZeros(i, j);

        };
    };

    return matrix;
};

// Second solution (wrong)
const setMatrixZeros2 = (matrix) => {
    const ROWS = matrix.length;
    const COLUMNS = matrix[0].length;

    let isColumn = false;

    for (let i = 0; i < ROWS; i++) {
        if (matrix[i][0] === 0) {
            isColumn = true;
        };

        for (let j = 0; j < COLUMNS; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            };
        };
    };

    for (let i = 1; i < ROWS; i++) {
        for (let j = 1; j < COLUMNS; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            };
        };
    };

    if (matrix[0][0] === 0) {
        for (let i = 0; i < COLUMNS; i++) {
            matrix[0][i] = 0;
        };
    };

    if (isColumn) {
        for (let i = 0; i < ROWS; i++) {
            matrix[i][0] = 0;
        };
    };

    return matrix;
};

console.table(matrix1);
console.table(setMatrixZeros(matrix1));
console.table(matrix2);
console.table(setMatrixZeros(matrix2));
console.table(matrix3);
console.table(setMatrixZeros(matrix3));
console.table(matrix4);
console.table(setMatrixZeros(matrix4));
console.table(matrix5);
console.table(setMatrixZeros(matrix5));
console.table(matrix6);
console.table(setMatrixZeros(matrix6));

// console.table(matrix1);
// console.table(setMatrixZeros2(matrix1));
// console.table(matrix2);
// console.table(setMatrixZeros2(matrix2));
// console.table(matrix3);
// console.table(setMatrixZeros2(matrix3));
// console.table(matrix4);
// console.table(setMatrixZeros2(matrix4));
// console.table(matrix5);
// console.table(setMatrixZeros2(matrix5));
// console.table(matrix6);
// console.table(setMatrixZeros2(matrix6));