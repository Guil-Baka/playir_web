import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: [
      "Roboto",
      "Poppins",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      light: "#BCC6D9",
      main: "#1D4B86",
      dark: "#003166",
      background: "#121212",
      leftbar: "#000000",
      bottombar: "#181818",
      mainIconColor: "#3fa5",
    },
  },
});
