import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#89689F",
      contrastText: grey[900],
    },
    secondary: {
      main: "#BCCDDB",
      contrastText: grey[800],
    },
    background: {
      default: "#FAF8F9",
    },
  },
});

export default lightTheme;
