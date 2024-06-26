import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Homepage from "./components/Homepage";
import React from "react";
const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: {
      main: "#1976d2",
    },
    error: {
      main: "#f44336", // Add a main color for the error palette
      light: "#ffebee",
    },
    success: {
      main: "#dbffdb", // Add a main color for the error palette
      light: "#dbffdb",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    body2: {
      fontWeight: "500",
      fontSize: "0.875rem",
    },
    subtitle1: {
      fontWeight: "500",
      fontSize: "0.875rem",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
