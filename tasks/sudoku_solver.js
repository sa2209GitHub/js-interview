/**
 *  Task:
 *      Sudoku Solver
 */

const board4x4 = [
    ['4', '.', '1', '.'],
    ['.', '2', '.', '.'],
    ['.', '.', '3', '.'],
    ['.', '.', '2', '.'],
];

const board9x9 = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

const board16x16 = [
    ['9', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '8', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['5', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '4', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '7', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
];

const solveSugoku = board => {
    const size = board.length;
    const boxSize = Math.sqrt(board.length);

    const getNextEmptyCell = board => {
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                if (board[row][col] === '.') {
                    return [row, col]
                };
            };  
        };
        return null;
    };

    const validate = (num, pos, board) => {
        const [r, c] = pos;

        // Check rows
        for (let i = 0; i < size; i++) {
              if (board[i][c] === num && i !== r) {
                return false;
              };
        };

        // Check columns
        for (let i = 0; i < size; i++) {
            if (board[r][i] === num && i !== c) {
                return false;
            };
        };
        
        // Check box
        const boxRow = Math.floor(r / boxSize) * boxSize;
        const boxCol = Math.floor(c / boxSize) * boxSize;

        for (let i = boxRow; i < boxRow + boxSize; i++) {
            for (let j = boxCol; j < boxCol + boxSize; j++) {
                if (board[i][j] === num && i !== r && j !== c) {
                    return false;
                };
            };           
        };
        return true;
    };

    const solve = () => {
        const currentPosition = getNextEmptyCell(board);

        if (currentPosition === null) {
            return true;
        };

        for (let i = 1; i < size + 1; i++) {
            const currentNumber = i.toString();
            const isValid = validate(currentNumber, currentPosition, board);

            if (isValid) {
                const [x, y] = currentPosition;
                board [x][y] = currentNumber;

                if (solve()) {
                    return true;
                };

                board[x][y] = '.';
            };
        };
        return false;
    };

    solve();
    return board;
};

console.table(board4x4);
console.table(solveSugoku(board4x4));

console.table(board9x9);
console.table(solveSugoku(board9x9));

console.table(board16x16);
console.table(solveSugoku(board16x16));