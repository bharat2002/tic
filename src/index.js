import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Board from "./App";
import Container from "@mui/material/Container";
import { Typography, Paper } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div
      style={{
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbltSQsnjFEBMHsELY0kB7tF6MRIZC_KqdYWBZqjVRUw&s')",
        minHeight: 1440
      }}
    >
      <Container
        sx={{
          backgroundColor: "#A1A1A1 blur",
          paddingY: 5,
          maxWidth: 1 / 3,
          textAlign: "center"
        }}
      >
        /
        <Paper
          elevation={5}
          sx={{
            marginLeft: 45,
            width: 2 / 4,
            textAlign: "center",
            height: 1 / 2
          }}
        >
          <Typography variant="h1" component="h1" sx={{ textAlign: "center" }}>
            <Paper elevation={2} sx={{ marginBottom: 1 }}>
              Tic Tac Toe
            </Paper>
          </Typography>

          <Typography variant="h4" sx={{ textAlign: "center", paddingY: 2 }}>
            "A classic two player game"
          </Typography>
        </Paper>
      </Container>

      <Board />
    </div>
  </React.StrictMode>
);
