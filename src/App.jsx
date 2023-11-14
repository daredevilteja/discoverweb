import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Box, Container } from "@mui/material";

function App() {
  return (
    <>
      <Box
        component="Header"
        sx={{
          bgcolor: "primary.main",
          padding: "2rem",
          borderBottom: "1px dashed grey",
        }}
      >
        {" "}
        Hello
      </Box>
      <Container maxWidth={"md"}>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
      </Container>
    </>
  );
}

export default App;
