import { Grid, styled } from "@mui/material";

export const Authentication = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 500,
  alignItems: "center",
  margin: "auto",
  paddingBottom: 100,
}));
