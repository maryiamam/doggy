import { Grid, styled } from "@mui/material";

export const Favorites = styled(Grid)(({ theme }) => ({
  paddingTop: 10,
}));

export const BreedImg = styled("img")(({ theme }) => ({
  objectFit: "cover",
  height: 150,
  width: 150,
  borderRadius: "10%",
}));

export const BreedName = styled("p")(({ theme }) => ({
  fontSize: "0.9rem",
  margin: 5,
}));
