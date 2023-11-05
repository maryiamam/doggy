import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#A69BAC",
      contrastText: grey[50],
    },
    secondary: {
      main: "#484A73",
      contrastText: grey[300],
    },
    background: {
      default: "#161B33",
    },
  },
});

export default darkTheme;
