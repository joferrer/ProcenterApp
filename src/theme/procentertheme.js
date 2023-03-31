import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const procentertheme = createTheme({
  palette: {
    primary: {
      main: "#757575",
    },
    secondary: {
      main: "#000000",
    },
    error: {
      main: red.A400,
    },
    butto: {
      main: "#FFFFFF",
    },
  },
});
