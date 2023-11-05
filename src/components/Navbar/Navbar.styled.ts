import { AppBar, styled, Toolbar as MaterialToolbar } from "@mui/material";

export const Navbar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  backgroundImage: "none",
  color: "white",
}));

export const Border = styled("div")(({ theme }) => ({
  height: 2,
  background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
}));

export const Toolbar = styled(MaterialToolbar)(({ theme }) => ({
  justifyContent: "center",
}));

export const Link = styled("div")(({ theme }) => ({
  margin: "0 10px",
  color: "white",
}));
