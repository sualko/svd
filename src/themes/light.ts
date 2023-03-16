import { createTheme } from "@mui/material";
import { blue, green } from "@mui/material/colors";
import { themeDefaults } from "./defaults";

export const lightTheme = createTheme({
  ...themeDefaults,
  palette: {
    mode: "light",
    primary: {
      main: green[900],
    },
    secondary: {
      main: blue[400],
    },
  },

});