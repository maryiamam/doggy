import { styled } from "@mui/material";

export const BigCircle = styled("div")(({ theme }) => ({
  width: 10,
  height: 10,
  display: "inline-block",
  placeItems: "center",
  placeContent: "center",
  borderRadius: "50%",
  border: `1px solid ${theme.palette.secondary.contrastText}`,
  overflow: "hidden",
}));

export const SmallCircle = styled("div")(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.contrastText,
}));
