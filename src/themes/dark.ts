import { createTheme } from "@mui/material";
import { blueGrey, cyan, pink } from "@mui/material/colors";
import { themeDefaults } from "./defaults";

export const darkTheme = createTheme({
    ...themeDefaults,
  palette: {
    mode: "dark",
    primary: {
      main: pink["A200"],
    },
    secondary: {
      main: cyan["A400"],
    },
    background: {
      default: blueGrey["800"],
      paper: blueGrey["700"],
    },
  },
});