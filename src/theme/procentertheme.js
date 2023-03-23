import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { color } from "@mui/system";

export const procentertheme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#000000",
    },
    error: {
      main: red.A400,
    },
  },
});
