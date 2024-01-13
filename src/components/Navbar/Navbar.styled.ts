import { AppBar, styled, Toolbar as ToolbarMaterial } from "@mui/material";

export const Navbar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  backgroundImage: "none",
  color: "white",
}));

export const Border = styled("div")(({ theme }) => ({
  height: 2,
  background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
}));

export const Link = styled("div")(({ theme }) => ({
  display: "flex",

  "&:hover a": {
    color: theme.palette.primary.contrastText,
  },
}));

export const Toolbar = styled(ToolbarMaterial)(({ theme }) => ({
  "&&&": {
    minHeight: 50,
  },
}));
