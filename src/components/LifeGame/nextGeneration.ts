function countNeighbors(board: boolean[][], i: number, j: number): number {
  let cnt = 0;
  for (let k = i - 1; k <= i + 1; k++) {
    for (let l = j - 1; l <= j + 1; l++) {
      if (0 <= k && k < board.length && 0 <= l && l < board[0].length)
        cnt += Number(board[k][l]);
    }
  }
  return cnt - Number(board[i][j]);
}

function isAlive(board: boolean[][], i: number, j: number): boolean {
  const neighborsCnt = countNeighbors(board, i, j);
  if (board[i][j]) {
    return neighborsCnt === 2 || neighborsCnt === 3;
  } else {
    return neighborsCnt === 3;
  }
}

export default function nextGeneration(board: boolean[][]): boolean[][] {
  const nextBoard = board.map((row) => row.map((cell) => cell));
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      nextBoard[i][j] = isAlive(board, i, j);
    }
  }
  return nextBoard;
}
