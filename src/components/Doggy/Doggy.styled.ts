import { styled } from "@mui/material";
import Eyes from "../Eyes/Eyes";

export const Doggy = styled("div")(({ theme }) => ({
  position: "absolute",
  width: 100,
  height: 100,
  cursor: "pointer",
}));

export const DoggyImg = styled("div")(({ theme }) => ({
  position: "absolute",
  width: 100,
}));

export const DoggyEyes = styled(Eyes)(({ theme }) => ({
  position: "relative",
  top: 40,
}));
