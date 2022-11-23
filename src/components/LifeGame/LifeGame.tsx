import React, { useEffect, useState } from "react";
import { Grid, Slider, Typography, IconButton } from "@mui/material";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import RefreshIcon from "@mui/icons-material/Refresh";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import nextGeneration from "./nextGeneration";

export default function LifeGame({
  data = Array(100)
    .fill()
    .map(() => Array(100).fill(false)),
}: {
  data?: boolean[][];
}) {
  const [board, setBoard] = useState<boolean[][]>(data);
  const [velocity, setVelocity] = useState<number>(4);
  const [play, setPlay] = useState<boolean>(false);
  useEffect(() => {
    const timerId = setInterval(() => {
      play && setBoard(nextGeneration(board));
    }, 4000 / velocity);
    return () => {
      clearInterval(timerId);
    };
  }, [play, board]);
  return (
    <>
      <TransformWrapper initialScale={7}>
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <IconButton
              onClick={() => {
                zoomIn();
              }}
            >
              <ZoomInIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                zoomOut();
              }}
            >
              <ZoomOutIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                resetTransform();
              }}
            >
              <AutorenewIcon />
            </IconButton>
            <TransformComponent>
              <ShowCells board={board} setBoard={setBoard}></ShowCells>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
      <Grid container direction="row" spacing={2} alignItems="center">
        <Grid item>
          <IconButton
            onClick={() => {
              setPlay(!play);
            }}
          >
            {play ? <StopCircleIcon /> : <PlayCircleFilledIcon />}
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            onClick={() => {
              setBoard(data);
            }}
          >
            <RefreshIcon />
          </IconButton>
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
    </>
  );
}

export function ShowCells({
  board,
  setBoard,
}: {
  board: boolean[][];
  setBoard?: (board: boolean[][]) => void;
}) {
  const width = board.length * 52 + 2;
  const height = board[0].length * 52 + 2;
  return (
    <>
      <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
        <defs />
        <g>
          <rect x="0" y="0" width={width} height={height} fill="#808080" />
          {board.map((row, i) =>
            row.map((cell, j) => (
              <rect
                key={`${i},${j}`}
                x={j * 52 + 2}
                y={i * 52 + 2}
                width="50"
                height="50"
                fill={cell ? "#000000" : "#ffffff"}
                onClick={() => {
                  const tmp = [...board];
                  tmp[i][j] = !board[i][j];
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
