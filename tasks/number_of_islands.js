/**
 *  Task:
 *      Number of Islands
 */

const grid1 = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
];

const grid2 = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
];

const grid3 = [
    ['1', '0', '1', '0', '1'],
];

const numOfIslands = grid => {
    let counter = 0;

    const rows = grid.length;
    const cols = grid[0].length;

    if (rows === 0) return 0;

    const markNeighbour = (grid, r, c) => {
        grid[r][c] = 'X';

        if (grid[r]?.[c-1] === '1') {
            markNeighbour(grid, r, c-1)
        };
        if (grid[r]?.[c+1] === '1') {
            markNeighbour(grid, r, c+1)
        };
        if (grid?.[r - 1]?.[c] === '1') {
            markNeighbour(grid, r-1, c)
        };
        if (grid?.[r + 1]?.[c] === '1') {
            markNeighbour(grid, r+1, c)
        };
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                counter++;
                markNeighbour(grid, r, c);
            };
        }; 
    };

    return counter;
};

console.log(grid1, numOfIslands(grid1));
console.log(grid2, numOfIslands(grid2));
console.log(grid3, numOfIslands(grid3));