var isValidSudoku = function (board) {
  //checking rows for duplicates
  for (let i = 0; i < board.length; i++) {
    //check for duplicates by initializing a set
    const set = new Set();
    for (let j = 0; j < board.length; j++) {
      const cell = board[i][j];
      //if cell is empty set as "."
      if (cell === ".") continue;
      //if set has the current cell value return false
      if (set.has(cell)) return false;
      //add cell to set if cell value not already included
      set.add(cell);
    }
  }

  //checking columns for duplicates -> switch i and j
  for (let i = 0; i < board.length; i++) {
    const set = new Set();
    for (let j = 0; j < board.length; j++) {
      const cell = board[j][i];

      if (cell === ".") continue;

      if (set.has(cell)) return false;

      set.add(cell);
    }
  }

  //checking the sub-boxes of the sudoku board
  // i represents the row and j represents the column
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      // k represents the row and l represents the column inside the sub-box
      const set = new Set();
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          const cell = board[3 * i + k][3 * j + l];

          if (cell === ".") continue;

          if (set.has(cell)) return false;

          set.add(cell);
        }
      }
    }
  }
  return true;
};

const input = (board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);

console.log(isValidSudoku(input));
