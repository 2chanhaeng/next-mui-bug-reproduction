import { createTheme } from "@mui/material/styles";
import { purple, teal, red, blue, amber } from "@mui/material/colors";
import inter from "./inter";
import locale from "./locale";

const lightTheme = createTheme(
  {
    palette: {
      mode: "light",
      primary: {
        main: "#000",
      },
      secondary: {
        main: purple[500],
      },
      success: {
        main: teal[600],
      },
      error: {
        main: red[700],
      },
      info: {
        main: blue[700],
      },
      warning: {
        main: amber[800],
      },
    },
    typography: {
      fontFamily: inter.style.fontFamily,
    },
    shape: {
      borderRadius: 6,
    },
  },
  locale.muiLocale
);

export default lightTheme;
