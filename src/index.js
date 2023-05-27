import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Media from "react-media"
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
        minHeight: 950
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
            postion:"center",
            height: 1 / 2
          }}
        >
          <Media query="(min-width :1200px )">
            {(matches) =>{
              return matches ? <> <Typography variant= "h2" className="MainHeading" sx={{  textAlign: "center" }}>
              <Paper elevation={2} sx={{ marginBottom: 1 }}>
                Tic Tac Toe
              </Paper>
              <Typography variant="h4" sx={{ textAlign: "center", paddingY: 2 }}>
            "A classic two player game"
          </Typography>
            </Typography>
            </>
            :<> 
            <Typography variant= "body2" className="MainHeading" sx={{ textAlign: "center" }}>
            <Paper elevation={2} sx={{ marginBottom: 1 }}>
              Tic Tac Toe
            </Paper>
          </Typography>
          <Typography variant="body" sx={{ textAlign: "center", paddingY: 2 }}>
            "A classic two player game"
          </Typography>
          </>
            }
            }
          </Media>
          

          
        </Paper>
      </Container>

      <Board />
    </div>
  </React.StrictMode>
);
