import { styled } from "@mui/material";

export const AppWrapper = styled("div")(({ theme }) => ({
  textAlign: "center",
  minHeight: "100vh",
  backgroundColor: theme.palette.background.default,
}));

export const AppBody = styled("div")(({ theme }) => ({
  height: "calc(100vh - 50px)",
  color: theme.palette.primary.contrastText,
  overflow: "scroll",
}));
