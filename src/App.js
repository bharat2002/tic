import { useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Typography, Box, Paper } from "@mui/material";
import "./index.css";

function Square({ value, onSquareClick }) {
  return (
    <Button
      variant="contained"
      onClick={onSquareClick}
      color="success"
      style={{height:25, margin:3 }}
    >
      {value}
    </Button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = (
      <Typography
        variant="h4"
        padding={5}
        component="h2"
        sx={{ textAlign: "center" }}
      >
        {"Winner: " + winner}
      </Typography>
    );
  } else {
    status = (
      <Typography
        variant="h4"
        padding={5}
        component="h2"
        sx={{ textAlign: "center" }}
      >
        {"Next player: " + (xIsNext ? "X" : "O")}
      </Typography>
    );
  }

  return (
    <>
      <Container
        sx={{
          marginY: 5,
          backgroundColor: "#151515",
          paddingY: 5,
          maxWidth: 500
        }}
      >
        <div>
          {" "}
          <Typography sx={{ color: "WHITE" }}>{status} </Typography>
        </div>
        <Box sx={{ textAlign: "center" }}>
          <div className="Board">
            <div className="board-row1">
              <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
              <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
              <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row2">
              <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
              <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
              <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row3">
              <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
              <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
              <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
          </div>
        </Box>
      </Container>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <Container
          minHeight="60"
          sx={{ textAlign: "left", minHeight: "70%", paddingX: "5" }}
        >
          {moves}
        </Container>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
