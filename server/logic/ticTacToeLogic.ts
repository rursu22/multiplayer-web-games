export const checkWinner = (
  state: string[][]
): { winner: string | null; winningCells: number[][] } => {
  const combos = [
    // Rows
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    // Columns
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    // Diagonals
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];

  for (const combo of combos) {
    const [[row1, col1], [row2, col2], [row3, col3]] = combo;

    const cell1 = state[row1][col1];
    const cell2 = state[row2][col2];
    const cell3 = state[row3][col3];
    if (cell1 && cell2 && cell3 && cell1 === cell2 && cell2 === cell3) {
      return { winner: cell1, winningCells: combo };
    }
  }

  const isTie = state.flat().every((cell) => cell !== "");

  return { winner: isTie ? "Tie" : null, winningCells: [] };
};
