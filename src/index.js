import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import { theme } from "utils/theme";
import { TopBar } from "layouts";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <TopBar />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
