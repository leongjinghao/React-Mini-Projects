export const WINNING_COMBINATIONS = [
  [
    { row: 0, column: 0 },
    { row: 0, column: 1 },
    { row: 0, column: 2 },
  ],
  [
    { row: 1, column: 0 },
    { row: 1, column: 1 },
    { row: 1, column: 2 },
  ],
  [
    { row: 2, column: 0 },
    { row: 2, column: 1 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 0 },
    { row: 1, column: 0 },
    { row: 2, column: 0 },
  ],
  [
    { row: 0, column: 1 },
    { row: 1, column: 1 },
    { row: 2, column: 1 },
  ],
  [
    { row: 0, column: 2 },
    { row: 1, column: 2 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 0 },
    { row: 1, column: 1 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 2 },
    { row: 1, column: 1 },
    { row: 2, column: 0 },
  ],
];

export function checkWin(gameBoard) {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (
      gameBoard[i][0] === gameBoard[i][1] &&
      gameBoard[i][1] === gameBoard[i][2] &&
      gameBoard[i][0] !== 0
    ) {
      return gameBoard[i][0];
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (
      gameBoard[0][i] === gameBoard[1][i] &&
      gameBoard[1][i] === gameBoard[2][i] &&
      gameBoard[0][i] !== 0
    ) {
      return gameBoard[0][i];
    }
  }

  // Check diagonals
  if (
    (gameBoard[0][0] === gameBoard[1][1] &&
      gameBoard[1][1] === gameBoard[2][2]) ||
    (gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0])
  ) {
    if (gameBoard[1][1] !== 0) {
      return gameBoard[1][1];
    }
  }

  // No winner
  return null;
}
