/**
 *  Task:
 *      print the numbers
 *      under the main diagonal
 *      of the matrix
 */

const matrix = [
    [11, 12, 13, 14],
    [15, 16, 17, 18],
    [19, 20, 21, 22],
    [23, 24, 25, 26]
]

for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
        console.log(matrix[i][j]);
    }
}