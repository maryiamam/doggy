import { Button, styled } from "@mui/material";
// import GoogleIcon from "@mui/icons-material/Google";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const Favorite = styled(FavoriteIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const FavoriteBorder = styled(FavoriteBorderIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
