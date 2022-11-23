import React, { useEffect, useState } from "react";
import { Grid, Box, Slider, Typography } from "@mui/material";

function chooseCells(board, iStart, iEnd, jStart, jEnd) {
  return board
    .filter((row, i) => iStart <= i && i < iEnd)
    .map((column) => column.filter((cell, j) => 0 <= jStart && j < jEnd));
}

export default function LifeGame() {
  // useEffect(() => {
  //     setInterval(lifeGame, 1000)
  // }, []);
  const [size, setSize] = useState<number>(10);
  const [velocity, setVelocity] = useState<number>(1);
  const [board, setBoard] = useState<boolean[][]>(
    Array(100)
      .fill()
      .map(() => Array(100).fill(false)),
  );
  return (
    <>
      <Grid container direction="row" spacing={2}>
        <Grid item>
          <Typography gutterBottom>大きさ</Typography>
        </Grid>
        <Grid item xs>
          <Slider
            value={size}
            onChange={(e) => {
              setSize(e.target.value);
            }}
            min={1}
            step={1}
            max={100}
            valueLabelDisplay="auto"
          />
        </Grid>
        <Grid item>
          <Typography gutterBottom>速さ</Typography>
        </Grid>
        <Grid item xs>
          <Slider
            value={velocity}
            onChange={(e) => {
              setVelocity(e.target.value);
            }}
            min={1}
            step={1}
            max={100}
            valueLabelDisplay="auto"
          />
        </Grid>
      </Grid>
      <ShowCells
        board={board}
        setBoard={setBoard}
        iStart={0}
        iEnd={size}
        jStart={0}
        jEnd={size}
      ></ShowCells>
    </>
  );
}

export function ShowCells({
  board,
  setBoard,
  iStart,
  iEnd,
  jStart,
  jEnd,
}: {
  board: boolean[][];
  setBoard: (board: boolean[][]) => boolean[][];
  iStart: number;
  iEnd: number;
  jStart: number;
  jEnd: number;
}) {
  const width = (iEnd - iStart) * 52 + 2;
  const height = (jEnd - jStart) * 52 + 2;
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox={`0 0 ${width} ${height}`}
      >
        <defs />
        <g>
          <rect
            x="0"
            y="0"
            width={width}
            height={height}
            fill="#808080"
            pointerEvents="all"
          />
          {chooseCells(board, iStart, iEnd, jStart, jEnd).map((row, i) =>
            row.map((cell, j) => (
              <rect
                key={`${i},${j}`}
                x={j * 52 + 2}
                y={i * 52 + 2}
                width="50"
                height="50"
                fill={cell ? "#000000" : "#ffffff"}
                pointerEvents="all"
                onClick={() => {
                  const tmp = [...board];
                  tmp[i + iStart][j + jStart] = !board[i + iStart][j + jStart];
                  setBoard(tmp);
                }}
              />
            )),
          )}
        </g>
      </svg>
    </>
  );
}
